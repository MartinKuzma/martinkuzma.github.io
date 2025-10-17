+++
date = '2025-10-17T22:09:06+02:00'
draft = false
title = 'Designing the worst GRPC API ever'
+++
## Why, though?
We always want to design the best API possible, overcome any hurdles, split everything into neat little boxes, make sure everything is as reusable as possible, and design everything so decoupled that nothing will ever need to change and if it does, nothing will ever break. GRPC is great for designing APIs in advance and having a contract that can be shared between teams.

Life isn't fair, life isn't easy. Nothing will work out as planned, so let's just go ahead and achieve the peak of bad API design. It will happen anyway, so why not embrace it?

## What defines a bad API?
Here are some common pitfalls:
- No single responsibility principle
- No versioning
- No documentation or too much low-quality documentation
- No consistency in naming conventions or naming conventions that make no sense
- Overcomplicated data structures
- Incorrect use of error codes
- Misleading comments

I will try to cover all of these points in this post. I hope you are ready...

## Starting point with a simple generic API
Let's assume we have an application that emits events and has tasks that need to execute. We want to expose a GRPC API for pushing events and managing tasks. Since there could be thousands of events per second, we want to support batch processing for pushing events. We also want to be able to tell the client which events were successfully processed and which failed.

For the sake of brevity, I omitted field validation extensions.

Don't worry, it will get much smaller once we remove all the (un)necessary stuff.

### Event API
Simple API for pushing events in batch. I even added HTTP annotations for REST compatibility. 
```proto
syntax = "proto3";

package example.v1;
option go_package = "example/v1";

import "google/api/annotations.proto";
import "google/protobuf/timestamp.proto";

service ApplicationEventService {
    // Batch push events to the backend for further processing.
    // Each event will be processed independently, and the response will indicate
    // which events were successfully processed and which failed.
    // Any request containing more than the allowed maximum (see GetMaxBatchSize) will be rejected with INVALID_ARGUMENT.
    // Requires access token with application.event.write scope.
    rpc PushEvents (PushEventsRequest) returns (PushEventsResponse) {
        option (google.api.http) = {
            post: "/v1/events:push"
            body: "*"
        };
    }

    // Retrieving how many events can be pushed in a single request.
    // This allows clients to adjust their batch sizes accordingly.
    // We want to keep this flexible so that we can change it in the future without breaking clients.
    // Requires access token with application.event.read scope.
    rpc GetMaxBatchSize (GetMaxBatchSizeRequest) returns (MaxBatchSizeResponse) {
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

message GetMaxBatchSizeRequest {
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
        // AppTelemetry app_telemetry = 5;
        // and so on...
    }
}

message AppError {
    string error_code = 1; // Application-specific error code
    string message = 2; // Human-readable error message
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
    // Additional context about the result, error details.
    string context_message = 3; 
}
```

### Task management API
This portion of the API allows workers to fetch tasks. Any client can have multiple workers fetching tasks concurrently. This API doesn't address how a worker knows polling rate or notification mechanism.
```proto
syntax = "proto3";

package example.v1;
option go_package = "example/v1";

import "google/api/annotations.proto";
import "google/protobuf/timestamp.proto";
import "google/protobuf/any.proto";

service TaskAssignerService {
    // Assign a task to a worker based on its capabilities.
    // The server will match the worker's capabilities with task requirements.
    // Requires access token with task.write scope.
    rpc AssignTask (AssignTaskRequest) returns (AssignTaskResponse) {
        option (google.api.http) = {
            post: "/v1/tasks:assign"
            body: "*"
        };
    }
    // Acknowledge that a task has been received and is being processed.
    // This prevents the task from being reassigned to another worker.
    // Requires access token with task.write scope.
    rpc AcknowledgeTask (AcknowledgeTaskRequest) returns (AcknowledgeTaskResponse) {
        option (google.api.http) = {
            post: "/v1/tasks/{task_uuid}:acknowledge"
            body: "*"
        };
    }

    // Complete a task and report the result.
    // The result can indicate success or failure, along with any relevant details.
    // Requires access token with task.write scope.
    rpc CompleteTask (CompleteTaskRequest) returns (CompleteTaskResponse) {
        option (google.api.http) = {
            post: "/v1/tasks/{task_uuid}:complete"
            body: "*"
        };
    }

    // Reject a task if the worker cannot process it. The task will be made available for reassignment.
    // Requires access token with task.write scope.
    rpc RejectTask (RejectTaskRequest) returns (RejectTaskResponse) {
        option (google.api.http) = {
            post: "/v1/tasks/{task_uuid}:reject"
            body: "*"
        };
    }
}

message Task {
    string task_uuid = 1; // Unique identifier for the task
    string description = 2; // Human-readable description of the task
    repeated WorkerCapability required_capabilities = 3; // Capabilities required to perform the task
    google.protobuf.Timestamp created_time = 4; // Time when the task was created
    google.protobuf.Any details = 5; // Additional task-specific details
}

message TaskResult {
    bool success = 1; // Indicates if the task was completed successfully
    string details = 2; // Additional details about the task result
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
- REST support (via HTTP annotations) - clients will be limited to GRPC only
- helpful comments - let's make implementers make up their own assumptions about the inner workings of our API
- versioning - let's just have one version and change it whenever we want
- language specific options like `go_package` - everyone should change our proto files to fit their language of choice anyway
- consistent naming - `task_uuid`, `uuid`, `task_id`? Let's just use whatever comes to mind.

### Event API
```proto
syntax = "proto3";

package example;

import "google/protobuf/timestamp.proto";

service ApplicationEventService {
    rpc PushEvents (PushEventsRequest) returns (PushEventsResponse) {}
    rpc GetMaxBatchSize (GetMaxBatchSizeRequest) returns (MaxBatchSizeResponse) {}
}

message PushEventsRequest {
    repeated Event events = 1;
}

message PushEventsResponse {
    repeated EventResult results = 1;
}

message GetMaxBatchSizeRequest {
}

message MaxBatchSizeResponse {
    uint32 max_batch_size = 1; 
}

message Event {
    string uuid = 1;
    google.protobuf.Timestamp create_time = 2;
    map<string, string> metadata = 3;

    oneof payload {
        AppError app_error = 4;
        // AppTelemetry app_telemetry = 5;
        // and so on...
    }
}

message AppError {
    string error_code = 1;
    string message = 2;
}

enum EventResultStatus {
    EVENT_STATUS_UNSPECIFIED = 0;
    EVENT_STATUS_SUCCESS = 1;
    EVENT_STATUS_TRANSIENT_FAILURE = 2;
    EVENT_STATUS_PERMANENT_FAILURE = 3;
}

message EventResult {
    string event_uuid = 1;
    EventResultStatus status = 2;
    string context_message = 3; 
}
```
### Task API
```proto
syntax = "proto3";

package example;

import "google/protobuf/timestamp.proto";
import "google/protobuf/any.proto";

service TaskAssignerService {
    rpc AssignTask (AssignTaskRequest) returns (AssignTaskResponse) {}
    rpc AcknowledgeTask (AcknowledgeTaskRequest) returns (AcknowledgeTaskResponse) {}
    rpc CompleteTask (CompleteTaskRequest) returns (CompleteTaskResponse) {}
    rpc RejectTask (RejectTaskRequest) returns (RejectTaskResponse) {}
}

message Task {
    string task_uuid = 1;
    string description = 2; 
    repeated WorkerCapability required_capabilities = 3;
    google.protobuf.Timestamp created_time = 4; 
    google.protobuf.Any details = 5; 
}

message TaskResult {
    bool success = 1;
    string details = 2;
}

enum WorkerCapability {
    WORKER_CAPABILITY_UNSPECIFIED = 0;
    WORKER_CAPABILITY_IMAGE_PROCESSING = 1;
    WORKER_CAPABILITY_DATA_ANALYSIS = 2;
    WORKER_CAPABILITY_REPORT_GENERATION = 3;
}

message AssignTaskRequest {
    repeated WorkerCapability capabilities = 1;
}

message AssignTaskResponse {
    Task task = 1; 
    google.protobuf.Timestamp lease_deadline = 2; 
}

message AcknowledgeTaskRequest {
    string uuid = 1;
}

message AcknowledgeTaskResponse {
}

message CompleteTaskRequest {
    string task_uuid = 1; 
    TaskResult result = 2;
}

message CompleteTaskResponse {
}

message RejectTaskRequest {
    string task_id = 1;
}

message RejectTaskResponse {
}
```

## Iteration #2: Making the contract looser
We don't want to be constrained by a strict contract. Contracts are for losers that don't magically know all the secret values and behaviors. We can do this by:
- using `string` instead of enums
- using `Struct` instead of  `any` and `one_of` - clients will have to figure out the structure themselves
- removing `GetMaxBatchSize` - clients should just try and see what works
- using `string` for timestamps instead of `google.protobuf.Timestamp` - it might be ISO8601, or epoch millis, who knows?
- removing capability fields - backend should just assign any task to any worker and let the worker figure it out

On the other hand, we want to make the API harder to change, so we might as well remove empty response messages. At first, this might seem like a good idea not to create unnecessary types, but in reality, it makes it impossible to add fields later without breaking clients.

### Event API
```proto
syntax = "proto3";

package example;

import "google/protobuf/struct.proto";

service ApplicationEventService {
    rpc PushEvents (PushEventsRequest) returns (PushEventsResponse) {}
}

message PushEventsRequest {
    repeated Event events = 1;
}

message PushEventsResponse {
    repeated EventResult results = 1;
}

message Event {
    string uuid = 1;
    string create_time = 2;
    google.protobuf.Struct payload = 3; // Good luck parsing this!
}

message EventResult {
    string event_uuid = 1;
    string status = 2;
    string context_message = 3; 
}
```

### Task API
```proto
syntax = "proto3";

package example;

import "google/protobuf/struct.proto";
import "google/protobuf/empty.proto";

service TaskAssignerService {
    rpc AssignTask (google.protobuf.Empty) returns (AssignTaskResponse) {}
    rpc AcknowledgeTask (AcknowledgeTaskRequest) returns (google.protobuf.Empty) {}
    rpc CompleteTask (CompleteTaskRequest) returns (google.protobuf.Empty) {}
    rpc RejectTask (RejectTaskRequest) returns (google.protobuf.Empty) {}
}

message Task {
    string task_uuid = 1;
    string description = 2; 
    string created_time = 4; 
    google.protobuf.Struct details = 5; 
}

message TaskResult {
    bool success = 1;
    string details = 2;
}

message AssignTaskResponse {
    Task task = 1; 
    string lease_deadline = 2; 
}

message AcknowledgeTaskRequest {
    string uuid = 1;
}

message CompleteTaskRequest {
    string task_uuid = 1; 
    TaskResult result = 2;
}


message RejectTaskRequest {
    string task_id = 1;
}
```

## Iteration #3: Mixing everything together
To make things even worse, we can:
- condense RPCs that do similar things into a single RPC with an action field
- join orthogonal services into a single service and start mixing responsibilities
- remove any information about event processing results except for a boolean flag

### Condensed API
```proto
syntax = "proto3";

package example;

import "google/protobuf/struct.proto";

// Nice and vague, just as we like it
service ApplicationService {
    rpc Sync (Input) returns (Output) {}
}

message Input {
    repeated Event events = 1;
    repeated string completed_task_ids = 2;
    repeated string rejected_task_ids = 3;

    // We need a way to track which tasks we've already received since we removed AssignTask.
    // We can use delta tokens for that. Downside is that the client has to persist this between calls.
    string delta_token = 4; 
}

message Output {
    repeated Task tasks = 1;
    bool events_processed = 2; // Good luck figuring out how to handle partial failures!
    string next_delta_token = 3;
}

message Event {
    int32 id = 1;
    string create_time = 2;
    google.protobuf.Struct payload = 3;
}

message Task {
    string id = 1;
    google.protobuf.Struct details = 2;
}
```

## Iteration #4: The final touch
Up to this point, we still considered the remote possibility that something might go wrong. From now on, we will assume that everything always works perfectly. The backend will always return all available tasks and remove them from the queue. That means we no longer need delta tokens.

### Condensed API
```proto
syntax = "proto3";

package example;

import "google/protobuf/struct.proto";

service ApplicationService {
    rpc Sync (Input) returns (Output) {}
}

message Input {
    repeated Event events = 1;
    // Let's just assume all tasks previously returned were completed before the call.
}

message Output {
    repeated Task tasks = 1;
    // We assume all events are always processed successfully.
    // No delta tokens needed since every task is always accepted and handled.
}

message Event {
    // No need for IDs, we don't need to deduplicate events anymore.
    // Backend will fill in create_time anyway.
    google.protobuf.Struct payload = 2;
}

message Task {
    // No need for IDs, tasks are one-time use only.
    google.protobuf.Struct details = 2;
}
```

## Conclusion
As you can see, it takes a good effort to design a truly bad GRPC API. As I progressed through the iterations, the definition became shorter and more vague, making it harder for clients to implement the API correctly. What seems to be a good idea at first, like using generic structures or using the same call for multiple actions, quickly turns into a nightmare.

Maybe someone will adopt this design philosophy to discourage anyone from using their API at all, or just to increase their own job security. One can only hope...