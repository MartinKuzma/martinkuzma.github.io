+++
date = '2025-10-11T22:09:06+02:00'
draft = true
title = 'Designing the worst GRPC API ever'
+++
## Why, though?
We always want to design the best API possible, overcome any hurdles, split everything into neat little boxes, make sure everything is as reusable as possible, and design everything so decoupled that not will ever need to change and if it does, nothing will ever break. GRPC is great for designing APIs in advance and having a contract that can be shared between teams.

Life isn't fair, life isn't easy. Nothing will work out as planned, so let's just go ahead and achieve the peak of bad API design. It will happen anyway, so why not embrace it?

## What defines a bad API?
- No single responsibility principle
- No versioning
- No documentation or too much of low quality documentation
- No consistency in naming conventions or naming conventions that make no sense
- Overcomplicated data structures
- Incorrect use of error codes
- Misleading comments
- and more...

I will try to cover all of these points in this post. Hope you are ready...

## Starting point with a simple generic API
Let's assume we have application that emits events and has tasks that needs to execute. We want to expose a GRPC API for pushing events and managing tasks. Since there could be thousands of events per second, we want to support batch processing for pushing events. We also want to be able to tell the client which events were successfully processed and which failed.

Don't worry, it will get much smaller once we remove all the (un)necessary stuff.

### Event API
Simple API for pushing events in batch. I even added HTTP annotations for REST compatibility. 
```proto
syntax = "proto3";

package example.v1;
go_package = "examplepb/v1";

import "google/protobuf/timestamp.proto";

service ApplicationEventService {
    // Batch push events to the backend for further processing.
    // Each event will be processed independently, and the response will indicate
    // which events were successfully processed and which failed.
    // Any request containg more than the allowed maximum (see GetMaxBatchSize) will be rejected with INVALID_ARGUMENT.
    rpc PushEvents (PushEventsRequest) returns (PushEventsResponse) {
        option (google.api.http) = {
            post: "/v1/events:push"
            body: "*"
        };
    }

    // Retrieving how many events can be pushed in a single request.
    // This allows clients to adjust their batch sizes accordingly.
    // We want to keep this flexible so that we can change it in the future without breaking clients.
    rpc GetMaxBatchSize (google.protobuf.Empty) returns (MaxBatchSizeResponse) {
        option (google.api.http) = {
            get: "/v1/events:maxBatchSize"
        };
    }
}

message PushEventsRequest {
    // Events to be pushed in batch. Maximum number of events is defined by GetMaxBatchSize.
    repeated Event events = 1;
}

message PushEventsResponse {
    repeated EventResult results = 1;
}

message MaxBatchSizeResponse {
    // Maximum number of events that can be pushed in a single request.
    uint32 max_batch_size = 1; 
}

message Event {
    // Each event must have a unique UUID to correlate requests and responses.
    // Retried events must use the same UUID as the original event so that the backend can identify duplicates.
    string uuid = 1;

    // Timestamp when the event was created.
    google.protobuf.Timestamp create_time = 2;

    // Arbitrary metadata associated with the event.
    map<string, string> metadata = 3;

    oneof payload {
        AppError app_error = 4;
        AppTelemetry app_telemetry = 5;
        // and so on...
    }
}

enum EventResultStatus {
    EVENT_STATUS_UNSPECIFIED = 0; // Default value to indicate missing status.
    EVENT_STATUS_SUCCESS = 1;
    EVENT_STATUS_TRANSIENT_FAILURE = 2; // Temporary failure, retry might succeed.
    EVENT_STATUS_PERMANENT_FAILURE = 3; // Permanent failure, retry will not succeed.
}

message EventResult {
    string event_uuid = 1;
    EventResultStatus status = 2;
    // Additional context about the result, e.g., error details.
    string context_message = 3; 
}
```

### Task management API
This portion of the API allows workers to fetch tasks. Any client can have multiple workers fetching tasks concurrently. This API doesn't address how a worker knows polling rate or notification mechanism.
```proto
syntax = "proto3";

package example.v1;
go_package = "examplepb/v1";

import "google/protobuf/timestamp.proto";

service TaskService {
    // Assign a task to a worker based on its capabilities.
    // The server will match the worker's capabilities with task requirements.
    rpc AssignTask (AssignTaskRequest) returns (AssignTaskResponse) {
        option (google.api.http) = {
            post: "/v1/tasks:assign"
            body: "*"
        };
    }
    // Acknowledge that a task has been received and is being processed.
    // This prevents the task from being reassigned to another worker.
    rpc AcknowledgeTask (AcknowledgeTaskRequest) returns (AcknowledgeTaskResponse) {
        option (google.api.http) = {
            post: "/v1/tasks/{task_id}:acknowledge"
            body: "*"
        };
    }

    // Complete a task and report the result.
    // The result can indicate success or failure, along with any relevant details.
    rpc CompleteTask (CompleteTaskRequest) returns (CompleteTaskResponse) {
        option (google.api.http) = {
            post: "/v1/tasks/{task_id}:complete"
            body: "*"
        };
    }

    // Reject a task if the worker cannot process it. The task will be made available for reassignment.
    rpc RejectTask (RejectTaskRequest) returns (RejectTaskResponse) {
        option (google.api.http) = {
            post: "/v1/tasks/{task_id}:reject"
            body: "*"
        };
    }
}

enum WorkerCapability {
    WORKER_CAPABILITY_UNSPECIFIED = 0; // Default value to indicate missing value.
    WORKER_CAPABILITY_IMAGE_PROCESSING = 1;
    WORKER_CAPABILITY_DATA_ANALYSIS = 2;
    WORKER_CAPABILITY_REPORT_GENERATION = 3;
    // and so on...
}

message AssignTaskRequest {
    repeated WorkerCapability capabilities = 1; // Capabilities of the worker to match with task requirements.
}

message AssignTaskResponse {
    // Assigned task details.
    // If no task is available, the task field will be empty.
    Task task = 1; 
    // Deadline for acknowledging or completing the task.
    google.protobuf.Timestamp lease_deadline = 2; 
}

message AcknowledgeTaskRequest {
    // ID of the task to acknowledge
    string uuid = 1;
}

message AcknowledgeTaskResponse {
    // Response code indicates success or failure of the acknowledgment.
}

message CompleteTaskRequest {
    string task_uuid = 1; // ID of the task to complete.
    TaskResult result = 2; // Result of the task execution.
}

message CompleteTaskResponse {
    // Response code indicates success or failure of the completion.
}

message RejectTaskRequest {
    string task_id = 1; // ID of the task to reject.
}

message RejectTaskResponse {
    // Response code indicates success or failure of the rejection.
}
```
## Iteration #1: Cleanup
During my first iteration I removed:
- REST support (via HTTP annotations) - why bother when there won't be any browser clients, right? 
- Helpful comments - let's make implementers make up their own assumptions about the inner workings of our API.
- Versioning - peak design will never change.

### Task API
```proto

```

## Iteration #2: Making the contract looser
We don't want to be constrained by a strict contract. Let's make everything as loose as possible. We can do this by:
- Using `string` instead of enums
- Using `any` for payloads