+++
date = '2026-11-08T21:50:00+02:00'
draft = true
title = 'Workloads scheduling'
[params]
    featuredImage = "posts/06-workloads/featured_img.jpg"
+++
## The never-ending workloads
Let me tell you about a challenge I encountered 1 year ago when we started working on a new project. I promise you: there will be some pictures later on.

We were trying to implement collecting and processing of data from customers' infrastructure in real-time. All of that happening in our Kubernetes clusters. Usually, our loadbalacing efforts focus on distributing tasks with finite durations evenly across available workers. Not this time. This time, I was facing a very different problem: workloads that must run indefinitely.

What were the requirements?
- Only active workloads can be running
- Workloads can vary in their resource requirements (their cost represented as a positive integer)
- Everything must be scalable (I set myself a target of handling 1 million workloads simultaneously)
- Workloads must be resilient to failures
- Workers can crash or be restarted at any time, the system must detect missing workloads and reassign them
- Minimal downtime must be ensured (balancing must be as non-disruptive as possible)
- Don't waste memory (multiple workloads on the same worker pod)

## Which approach to choose?
All approaches fall into one of two categories: leaderless and leader-based.

**Leaderless** approaches rely on each worker to independently claim and balance workloads among themselves. Works great for smaller number of uniform workloads. Worker needs to know the total number of workers and workloads to calculate its fair share. However, as the number of workloads grows, this approach can lead to imbalances and excessive requests to the coordination mechanism. The mechanism can be a database or a distributed service.

**Leader-based** approaches introduce a leader that is responsible for rebalancing workloads among workers. This simplifies the coordination because the leader is aware of the overall state and can make optimized decisions.

## Thus spoketh the leader
Because of the requirements, I chose the leader-based approach. I didn't want to introduce a new service (RAM consumption and high availability concerns) so I decided to just elect a leader among the existing workers.

Workers have an API with following endpoints: `evict` and `assign` and `state`. Leader is responsibile for calling these endpoints. This flow allows the leader to perform rebalancing at its own pace.

## Stacking bricks
The leader's role is to coordinate the distribution of workloads among workers. It can calculate the desired state and emit commands to workers to achieve that state. This resembles how Kubernetes controllers operate.

It  has to reconcile 2 sources: 
- the list of all active workloads from a database 
- the current state of workers.

Let's visualize the workloads as bricks of different heights, where the height represents the workload cost.

![Anatomy of workloads](anatomy.png)

### The balancing act
The algorithm works as follows:
- Workloads with higher cost must be assigned first. This ensures that the gap between the most and least loaded workers is minimized early on by using smaller workloads to fine-tune the balance later.
- Always pick the worker with the least total assigned cost. Don't take into account the current assignment.
- A better candidate workload is the one with the same cost as the current workload and is already running on the chosen worker. Choosing it helps us minimize transfers and introduces stability.




The current state can be represented as a two sets of bricks. One set returned from the database, one set representing the current assignment to workers.

![Current state of workloads](sets.png)

What we are trying to achieve is a balanced distribution of the bricks among the workers while minimizing transfers.

Let's create a single set that represents all workloads. To make selection easier, we can sort the workloads by their cost and then by worker name.
During this process, we can find some running workloads that are missing from the database and need to be evicted. They can be evicted right away by calling the worker's API.

![Sorted workloads by cost and worker name](ordered.png)

Let's process the workloads one by one. Each time we will try to find the worker with the least total assigned cost. In the first iteration, we can simply keep the workload on the already assigned worker to keep transfers minimal.

![First iteration of workload assignment](first-pass.png)


Since our set is sorted by cost and then by worker name, it now has a new property: we can use **binary search** to quickly find an already assigned workload with the same cost, thus avoiding unnecessary transfers.

![Better candidate selection](better-candidate.png)

During this process, we can already execute commands to move workloads. Or we can store them and execute them later. Doesn't matter.

**Moving a workload** means evicting the workload from the current worker and assigning it to a new worker.

![Ordering workloads](ordering.gif)

Or in other words:
```go
// Parameter workloads is a list of workloads containing their cost and assigned worker (if any)
// Workloads that were not present in the database were evicted immediately
func redistributeWorkloads(workers []*Worker, workloads []*Workload) {
    // Sort workloads by cost (descending) and then by worker name (ascending)
    sortedWorkloads := sortWorkloads(workloads)

    for i := 0; i < len(sortedWorkloads); i++ {
        candidateWorkload := sortedWorkloads[i]
        // Find the worker with the least total assigned cost
        worker := findLeastLoadedWorker(workers)
        // Assign the workload to the selected worker

        betterCandidateIdx := findBetterCandidate(worker.Name, sortedWorkloads[i:])
        if betterCandidateIdx != -1 {
            // Shift the candidate workload to the better candidate's position in
            // the sorted list to maintain order
            shiftWorkloads(sortedWorkloads, i, betterCandidateIdx)
            // Update the candidate workload after shifting
            candidateWorkload = sortedWorkloads[betterCandidateIdx]
        }

        worker.TotalCost += candidateWorkload.Cost

        // This function updates determines one of the following:
        // - If candidateWorkload.Worker == worker.Name, no transfer is needed
        // - If candidateWorkload.Worker == "", just assign it to worker.Name
        // - Otherwise, evict it from the current worker and assign it to worker.Name
        assignWorkload(worker, candidateWorkload)
    }
}
```

### What about failures?

This algorithm is designed to be stable, meaning it tries to achieve the same assignment each time, given that the set of workloads and workers remains the same. If eviction fails during transfer of a workload to another worker, the assigment of the workload must be skipped so that two workers do not end up with the same workload.

### Not everything is perfect

Having workloads, with fluctuating resource demands, running on pods can lead to oscillations, where pods are scaled up and down frequently, causing rebalancing.

This algorithm does not account for limits on worker resources, although it can be easily extended to do so by adding an upper limit check. In practice, this would mean that some workloads are left unassigned until sufficient resources become available.

### Summary
What did we achieve with this approach?
- Only active workloads are running
- Workloads can have varying costs and still be balanced
- Can scale to handle a large number of workloads
- Balancing is resilient to failures
- Minimal downtime is ensured by avoiding transfers
- Multiple workloads on the same worker pod

## Choosing a leader
I didn't want to bore you with the details of leader election But here we are. 

There are many different ways of choosing a leader based on various criteria. For our use-case of distributing workloads, a simple approach is sufficient.

The basic principle is that each candidate tries to acquire the lease, but only one worker can succeed and become the leader. The leader then must periodically renew the lease to maintain leadership. If the leader fails to renew the lease, another worker can acquire it and become the new leader.

Let's assume that our leader pod was OOM killed. In this case, it will not be able to renew its lease, and the leadership will be lost. Another worker can then quickly acquire the lease and become the new leader. 

 You can achieve this by using almost any database or by leveraging Kubernetes' built-in lease mechanism. Kubernetes' client-go library even provides a full-featured leader election implementation for our convenience.

Code snippet for some of you non-believers:
```go
import (
    "context"
    "k8s.io/client-go/tools/leaderelection"
    "k8s.io/client-go/tools/leaderelection/resourcelock"
)

func main() {
    ctx := context.Background()
    lock := &resourcelock.LeaseLock{
        // configure your lease lock here
    }
    
    leaderelection.RunOrDie(ctx, leaderelection.LeaderElectionConfig{
        Lock: lock,
        LeaseDuration: 15 * time.Second,
        RenewDeadline: 10 * time.Second,
        RetryPeriod: 2 * time.Second,
        Callbacks: leaderelection.LeaderCallbacks{
            OnStartedLeading: func(ctx context.Context) {
                // this worker is now the leader
            },
            OnStoppedLeading: func() {
                // this worker lost leadership
            },
        },
    })
}
```