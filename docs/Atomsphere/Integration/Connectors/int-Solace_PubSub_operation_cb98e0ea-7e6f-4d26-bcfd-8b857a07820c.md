# Solace PubSub+ – Partner operation

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-cb98e0ea-7e6f-4d26-bcfd-8b857a07820c"/>
</head>


The Solace PubSub+ – Partner operations define how a Boomi process interacts with the PubSub+ event broker.

The operation represents a specific action, such as:

-   Get: use an event on a queue as a start of a scheduled process or as an additional data source in the middle of a Boomi process.
-   Listen: immediately start a Boomi process once an event arrives on a topic or queue.
-   Request: facilitates a synchronous request or reply messaging pattern.
-   Send: publish a document from a Boomi process to a PubSub+ event broker.
-   Ack: sends message acknowledgments to the broker.

Create a separate operation component for each action combination that your integration requires.

## Get

The Get operation is used to retrieve events from a queue at the start of a scheduled process or in the middle of a Boomi process. Event acknowledgments are sent to the event broker when events are successfully submitted to a process execution.

The following user configuration is available:



**Destination \\\*** - 
The queue from which the Boomi process reads events. [More details about different types of endpoints are available within PubSub+.](https://docs.solace.com/Get-Started/Core-Concepts-Endpoints-Queues.htm).

**Batch Size \\\*** - 
The maximum number of events at one time that the connector will retrieve from PubSub+ and pass to the Boomi process \(maximum value is 1000\).

**Receive Timeout \\\*** - 
Number of milliseconds the connector is given to collect a full batch. When the receive timeout expires, a smaller batch is submitted. When 0 is used, the operation waits indefinitely until a full batch is collected.

**Selector \\\*** - 
An SQL-like statement that selects events to GET based on meta-data in the event header. Consult Solace documentation to [learn more about selectors.](https://docs.solace.com/Solace-PubSub-Messaging-APIs/API-Developer-Guide/Using-Selectors.htm#using_selectors)

**Topic Subscription\(s\) \\\*** - 
A comma-separated list of topic subscriptions, either imported from the Event Portal or manually entered by the developer. The topic is a text string attached to each event that classifies the content of that particular event. It's structured in a hierarchy from most general to most specific \(For instance `animals/domestic/cats`\). The topic subscription uses the topic string to tell the event broker which events the process is interested in. See the Solace documentation for [information about Topics.](https://docs.solace.com/Get-Started/Understanding-Topics.htm)

**Create Queue and Topic Subscription\(s\) \\\*** - 
If selected, the first time a process runs it checks to see if the queue exists. If the queue does not exist, the process automatically creates the queue, topic subscription, and associated error handling queue \(DMQ\). Selecting this option makes event-driven architecture easier, by eliminating the need to manually create queues when deploying new processes. However, it slightly reduces performance, and reduces the flexibility available from manual configuration.

This functionality requires the username that Boomi connects with to have endpoint management permissions \(by default this is true for Solace Cloud accounts\).

**Browse Only** - 
If selected, events are read from the queue but are not consumed.

The Get operation will create a [queue browser](https://docs.solace.com/PubSub-Basics/Endpoints.htm#Browsing_Queues) to look at messages spooled on a queue in order of oldest to newest without consuming them. That is, browsing messages returns the full content of messages, complete with all message headers and payloads, but those browsed messages are not removed from the message spool.

**Link to event details in Event Portal** - 
A link to view more information about the event in the Solace Event Portal. This field is added for convenience and is read only.

:::note

Fields marked with an \\\* are overrideable using Dynamic Operation Properties.

:::

## Listen

The Listen operation continuously reads events from a queue or topic subscriptions. Events are batched and submitted to process executions. Every batch submission triggers a Process execution.

Use the Listen operation when you want a long-lived operation that continuously consumes events until the operation is manually stopped or paused.

:::note

When connectivity is lost, Listen operations attempt to reconnect indefinitely by default. This behavior can be overridden by setting **Client Channel - ReconnectRetries** in the connection.

:::

**Mode** - 
The Solace documentation contains a more detailed discussion of [message delivery modes.](https://docs.solace.com/Get-Started/Core-Concepts-Message-Delivery-Modes.htm)

The Listen operation has three modes of operation:

-   **Direct**: The connector listens to one or many topic subscriptions. Events are read from the event broker and submitted to the process in a fire and forget fashion. While this mode offers the highest performance, the broker does not preserve events during time periods when the Boomi process disconnects and if the Boomi process fails, the events are lost.

Direct mode is typically used when out-of-date events are not valuable. For example, if events contain stock prices and an updated event arrives every five seconds, rather than processing old events, the process simply waits for a new event to arrive.

-   **Persistent Non-Transacted**: Instead of listening to a topic, the connector listens to a queue that holds events that matches topic\(s\). The benefit of using a queue is that the broker preserves events even when the Boomi process disconnects, allowing the Boomi process to handle the events when it reconnects.

The broker removes the event from the queue as soon as it is picked up by the Boomi process. This increases performance over persisted transacted, but also means that events may be lost in the event of an unexpected Boomi process or Atom failure.

-   **Persistent Transacted**: Similar to persisted non-transacted, the connector listens to a queue that holds events that matches topic\(s\). The broker preserves events even when the Boomi process disconnects. However, in contrast to persisted non-transacted, the broker only removes the event once the Boomi process completes successfully.

If the process does not complete successfully, the event broker will redeliver the event at a later time. If the process autocreated the queue, the broker will attempt three retries, before moving the event to the broker's dead message queue. Process developers can inspect the ‘redelivered’ tracked property to find out if an event was previously delivered. Use this mode when you need the guarantee that every event successfully navigates the entire process. Persistent Transacted is typically used when events contain crucial information that cannot be lost, even during system disruptions.


**Destination \\\*** - 
Name of the queue or topic, or comma separated list of topics. [Learn more about different types of endpoints available within PubSub+.](https://docs.solace.com/Get-Started/Core-Concepts-Endpoints-Queues.htm)

**Batch Size** - 
The maximum number of events at one time that the connector will retrieve from PubSub+ and pass to the Boomi process \(maximum value is 1000\)

**Receive Timeout** - 
Number of milliseconds the connector is given to collect a full batch. When the receive timeout expires, a smaller batch is submitted. A new timer is started for every new batch. When 0 is used, the operation waits indefinitely to collect full batches.

**Maximum Concurrent Executions** - 
Determines the maximum number of process executions that are allowed to run simultaneously. If using persistent transacted mode, up to 5 concurrent executions are supported. If the maximum number of executions is reached, the connector waits until a process terminates before making another submission. Whenever a value larger than 1 is used, event order is not maintained. When used with persistent transacted mode, the queue should be set to be non-exclusive. Otherwise, only one of the specified number of concurrent executions will be actively receiving events.

**Selector** - 
An SQL-like statement that selects events to GET based on meta-data in the event header. For more details, consult Solace documentation to [learn more about Selectors.](https://docs.solace.com/Solace-PubSub-Messaging-APIs/API-Developer-Guide/Using-Selectors.htm#using_selectors)

Selectors are only supported for persisted non-transacted and persisted transacted modes.

**Topic Subscription\(s\)** - 
A comma-separated list of topic subscriptions, either imported from the Event Portal or manually entered by the developer. The topic is a text string attached to each event that classifies the content of that particular event. It is structured in a hierarchy from most general to most specific \(For instance: animals/domestic/cats\) The topic subscription uses the topic string to tell the event broker which events this process is interested in. See the Solace documentation for [more information about Topics.](https://docs.solace.com/Get-Started/Understanding-Topics.htm)

**Create Queue and Topic Subscription\(s\)** - 
If selected, upon deployment the process determines if the input queue exists. If the queue does not exist, the process automatically creates the queue, topic subscription\(s\), and associated error handling queue. Selecting this option makes event-driven architecture easier, by eliminating the need to manually create queues when deploying new processes. However, it reduces the flexibility available from manual configuration.

**Link to event details in Event Portal** - 
A link to view more information about the event in the Solace Event Portal. This field is added for convenience and is read only.

## Request

The Request operation is used for synchronous [request/reply](https://tutorials.solace.dev/jcsmp/request-reply/) messaging.

Use the Request operation when your process needs to send requests to an external system \(replier\) and needs to wait for replies before moving on to the next step.

**Destination \\\*** - 
The topic name requests are published to. The replier is expected to subscribe to that topic.

**Reply Timeout** - 
Number of milliseconds the operation waits for replies. When the reply timeout expires, pending requests will fail and an error message is displayed in Process Reporting. Use 0 to wait indefinitely.

**Link to event details in Event Portal** - 
A link to view more information about the event in the Solace Event Portal. This field is added for convenience and is read only.

**Custom Message Properties \\\*** - 
User properties to set on the outgoing message. Properties are key/value pairs where both the key and the value are Strings.

:::note

Fields marked with an \\\* are overrideable using Dynamic Operation Properties.

:::

## Send

The Send operation is an outbound operation used to publish to a queue or topic.

**Mode** - 
The Send operation has three modes of operation: The Solace documentation contains a [more detailed discussion of message delivery modes](https://docs.solace.com/Get-Started/Core-Concepts-Message-Delivery-Modes.htm).

-   **Direct**: The Boomi process sends events to the Event Broker, but does not wait for the Event Broker to confirm that the event has been saved to disk. While this improves performance, in the case of an Event Broker failure, in-flight events will be lost.

Direct mode is typically used when out-of-date events are not valuable. For instance, if events contain stock prices and the Boomi process generates a new event every 5 seconds, rather than reduce performance, developers might opt to simply generate a new event after the broker recovers.

-   **Persistent Non-Transacted**: The Boomi process sends individual documents from a batch to the Event Broker and waits for the Event Broker to confirm that the event has been saved to disk before the process completes. This decreases performance, but in the case of an Event Broker failure, the broker guarantees the event is available once the broker recovers.

Persistent Non-Transacted is typically used when each document in a batch can be independently processed by downstream systems.

-   **Persistent Transacted**: The Boomi process sends individual documents from a batch to the Event Broker, but waits for the Event Broker to confirm that all events in the batch have been saved to disk before the process completes. Therefore all events in a batch either succeed or fail as a whole.

The maximum transaction size is currently 256 events. If the Send operation receives more than 256 input documents, the operation fails. If the incoming documents accumulated size exceeds the configured maximum size on the Atom, the operation fails.

Persistent Transacted is typically used when all documents in a batch are linked, and therefore cannot be independently processed by downstream systems.

:::note

Any document exceeding the configured maximum size on the Atom is rejected.

:::

**Endpoint Type \\\*** - 
Indicates whether the destination is a queue or a topic. The Solace documentation contains [more details about different types of endpoints available within PubSub+.](https://docs.solace.com/Get-Started/Core-Concepts-Endpoints-Queues.htm)

**Destination \\\*** - 
The name of the queue or topic to which to publish.

**Create Queue** - 
If selected, the first run of the process determines if the output queue exists. If the queue does not exist, the process automatically creates the queue. Selecting this option makes event-driven architecture easier, by eliminating the need to manually create queues when deploying new processes and prevents “queue not found” errors. However, it reduces the flexibility available from manual configuration and slightly reduces performance.

**Link to event details in Event Portal** - 
A link to view more information about the event in the Solace Event Portal. This field is added for convenience and is read only.

**Custom Message Properties** - 
User properties to set on the outgoing message. Properties are key/value pairs where both the key and the value are strings.

:::note

**Endpoint Type** and **Destination** can be overwritten at runtime using a Set Properties step. Both properties need to be specified and the endpoint type must be set to either "topic" or "queue". Using Dynamic Operation Properties is the preferred way to override operation properties at runtime.

:::

To configure the maximum operation size, set the property `com.boomi.container.connector.sizeLimitedUpdateOperation.maxSize` on the Atom. When the property is not set, the maximum size defaults to 1MB.

Fields marked with an \\\* are overrideable using Dynamic Operation Properties.

## Ack

The Ack operation gives process designers control over when message acknowledgments are sent to the broker. Use the Ack operation to send acknowledgements mid-process rather than wait until successful completion of the process. The Ack operation is only relevant for processes that start with a Listen Persistent Transacted operation.

The following user configuration is available:

**Message Reference ID \\\*** - 
This operation value must be dynamically overridden via the Dynamic Operation Properties tab. Override this operation value with the 'Message Reference ID' document property.

:::note

Fields marked with an \\\* are overrideable using Dynamic Operation Properties.

:::

## Troubleshooting information

The following sections describe common errors and their solutions:

## Access Type Mismatch Error

During initialization, an Access Type Mismatch error means that the connector tried to create a queue, but it already exists with a different [access type (exclusive vs non-exclusive)](https://docs.solace.com/Messaging/Guaranteed-Msg/Endpoints.htm#Queue_Access_Types).

To solve this error, make sure the pre-existing queue has the correct access type or disable the **Create Queue and Topic Subscription(s)** option. The only time the connector tries to create a non-exclusive queue is while initializing a Transacted Listen with maxConcurrentExecution \> 1.

