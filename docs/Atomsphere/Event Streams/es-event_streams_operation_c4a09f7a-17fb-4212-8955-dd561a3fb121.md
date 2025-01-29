# Event Streams operation

<head>
  <meta name="guidename" content="Event Streams"/>
  <meta name="context" content="GUID-c4a09f7a-17fb-4212-8955-dd561a3fb121"/>
</head>



The Event Streams operation defines how to interact with your topics and subscriptions.

There are three supported operations:

-   **Produce** -  Sends a document from a Boomi process to an Event Streams topic.

-   **Consume** -  Retreives a document from a Boomi scheduled process from an topic using a scheduled integration process.
-   **Listen** -  Continually listens for documents from an Event Streams topic.

## Produce 

The Produce operation sends messages to an Event Streams topic. The produce operation supports Shared and Exclusive access modes.

#### Produce options 

**Error Behavior** - 
Select to activate Return Application Error Responses.

**Topic** - 
The destination topic where messages will be published. Topics will be automatically created if they do not already exist in the environment.

**Access Mode** - 
Select the access mode to control how many publishers can connect to a topic at the same time. The supported access modes are:

- **Shared** - Allows multiple producers to publish on a topic.

- **Exclusive** - Allows only one producer to publish on a topic. If there is already a producer connected, other producers trying to publish on this topic will receive an error.

**Message Compression** - 
Select whether or not the message will be compressed after it is published to reduce file size.


:::note
Message size prior to compression cannot exceed 1MB.
:::

**Message Properties** - 
User properties to set on the outgoing message that are separate from the payload. Properties are key/value pairs where both the key and the value are strings.

  **Recommendation:** Avoid using spaces in properties. While creating message properties with spaces will still allow for message production and consumption, they will not be visible on message management.




:::note
Messages are not retained on topics without any subscriptions. Create a subscription prior to publishing messages to ensure no messages are lost.
:::

## Consume 

The Consume operation retrieves messages from a topic using a scheduled Integration process. Messages are acknowledged and therefore removed from the topic when the connector successfully retrieves the message.

#### Consume options 

**Error Behavior** - 
Select to activate Return Application Error Responses. If checked, failed operations will not be reported in Manage, allowing you to act on them in your process.

**Topic** - 
Source topic to consume messages from. Topics will be automatically created if they don’t already exist in the environment.

**Subscription** - 
The name of the subscription to which this consumer will attach. Subscriptions will be automatically created if they do not already exist in the environment.

**Subscription Type** - 
Specifies how messages are delivered to the consumers.

-  **Exclusive** — Only a single consumer can attach to the topic subscription. All messages are delivered to a single consumer and ordering is guaranteed \(FIFO\). Exclusive subscriptions are best for situations where the consumers require ordering at the expense of higher throughput.

- **Shared** — Multiple consumers can attach to the same topic subscription. Messages are distributed across consumers to increase throughput but there is no guarantee that messages will be processed in order. Shared subscriptions are best for situations where consumers need high throughput and ordering is not required. 

- **Failover** — Multiple consumers can attach to the same topic subscription but only one is actively consuming messages at a time. The first consumer to connect \(called the Primary\) will receive messages. When the Primary consumer disconnects, subsequent messages will be delivered to the next consumer in line. The order of the messages is maintained. Failover subscriptions are best for situations where ordering is required but you need high availability if a consumer process disconnects or fails. 

To learn more, see the topic [Subscriptions](es-creating_subscriptions_7e2cc68b-217c-49ec-ad25-6b6f9426b3f8.md).

**Timeout \(ms\)** - 
Maximum number of milliseconds allowed to retrieve a full batch.

- Enter 0 to have an unlimited timeout.

**Maximum Batch Size** - 
The maximum number of messages that are retrieved at one time.

- The maximum value is 100.
- If value is set as 0, it is considered as 100 while processing.

  **Message batching is complete if any one of the following criteria is met:**

  - Maximum Batch size: 1 - 100
  - Timeout (ms)
  - Total Batch Byte Size (MB): Maximum limit 1MB

:::note
If the number of messages in the topic exceeds the maximum, the user will need to re-run the integration process to get the remaining messages.
:::

**Option \(Consume from Dead Letter\)** - 
Select **Consume from Dead Letter** to retrieve messages from the dead letter queue instead of the normal topic.

## Listen 

The Listen operation continuously listens on a topic for new messages. Message acknowledgement is handled in two different ways.

-   **Default Acknowledgement** -  When the connector successfully retrieves the message.

-   **Transacted Acknowledgement** -  When the integration process sends either a positive or negative acknowledgement.


:::note

The listener runs in an Atom, Molecule, or Atom Cloud. Atom workers are required for Listen operations to run in an Atom Cloud. To learn more, see the topics:
- [Implementing Secure Listen](https://developer.boomi.com/docs/category/implementing-secure-listen)
- [Enabling Secure Listen for an Atom Cloud](https://developer.boomi.com/docs/Connectors/DevelopConnectors/SecureListen/Configuring_an_atom_cloud_for_secure_listen)
- [Configuring Secure Listen Property for an Atom Cloud](../Integration/Connectors/int-SAP_JCo_V2_configuring_secure_listen_property_for_an_atomcloud_0ec89fea-3bc4-4b7e-9bc2-3ad0d5a9fae1.md)

:::

:::note

In some cases, when using an Atom Cloud, Atom Worker settings will need to be set to `Min Workers: 1, Warmup Enabled: True` If using the Boomi Public Cloud. Contact your account team for additional information.

:::

**Listen options**

**Topic** - 
Source topic to consume messages from. Topics will be automatically created if they don’t already exist in the environment.

**Subscription** - 
The name of the subscription which this consumer will attach too. Subscriptions will be automatically created if they don’t already exist in the environment.

**Subscription Type** - 
Specifies how messages are delivered to the consumers.

-   **Exclusive** — Only a single consumer can attach to the topic subscription. All messages are delivered to a single consumer and ordering is guaranteed \(FIFO\). Exclusive subscriptions are best for situations where the consumers require ordering at the expense of higher throughput.

    
:::note
An error will occur when the subscription type is set as **Exclusive** and the **Maximum Concurrent Executions** is set to greater than one.
:::

    
:::note
An error will occur if the subscription type is set to **Exclusive** and you deploy the listeners to multiple containers or an Atom with multiple Atom workers. In this case, only one of the listeners will start while the other listeners will not start.
:::

-   **Shared** — Multiple consumers can attach to the same topic subscription. Messages are distributed across consumers to increase throughput but there is no guarantee that messages will be processed in order. Shared subscriptions are best for situations where consumers need high throughput and ordering is not required.

-   **Failover** — Multiple consumers can attach to the same topic subscription but only one is actively consuming messages at a time. The first consumer to connect \(called the Primary\) will receive messages. When the Primary consumer disconnects, subsequent messages will be delivered to the next consumer in line. The order of the messages is maintained. Failover subscriptions are best for situations where ordering is required but you need high availability if a consumer process disconnects or fails.

To learn more, see the topic [Subscriptions](es-creating_subscriptions_7e2cc68b-217c-49ec-ad25-6b6f9426b3f8.md).

**Transacted Acknowledgement** - 
When enabled, messages are only acknowledged and removed from the topic after the integration process completes successfully. If the integration process fails or disconnects the message will not be removed from the topic. When left unchecked, messages are acknowledged at the connector step, which could result in message loss if the integration process fails.

:::note 
Avoid using **Transacted Acknowledgement** with the Exclusive and Failover subscription type in the listener operation. If Exclusive subscription is used and the consumer fails to consume the message, no dead letter topic is created.
:::

**Maximum Concurrent Executions** - This configuration determines the maximum number of process executions that are allowed to run simultaneously when using Transacted Acknowledged mode. It is typically recommended to use this mode when message ordering is required or when you want to increase throughput.  

The default value of this field is 1.  In this mode a single process execution will start ensuring that message ordering is maintained when using an Exclusive or Failover subscription type.   

  :::note 
  The default value will be applied if you set this field to any value less than or equal to zero.
  :::

With the new customization feature, users can now define their own limits for concurrent executions. A custom container property has been implemented for this purpose:

- **Custom Container Property:**

  - **Property Name:** `com.boomi.container.eventStreams.maxConcurrentExecutions`

- **Connector Behavior:**

  - When the Event Streams connector is in listening mode, it will first reference the custom property.

  - If the custom property is configured, the connector will utilize the specified value as the upper limit for concurrent executions.

  - Users can input a value ranging from 1 up to the maximum value defined in the custom container property.

- **Default Settings:**

  If the custom property is not defined, the connector will enforce standard valid ranges:

  - Minimum Value: 1

  - Maximum Value: 5

**Recommendation:** When the number of consumers created by all listeners approaches 60, the Event Streams connector may fail to consume messages, resulting in messages being lost or sent to the Dead Letter Queue (DLQ). The number of consumers is equal to the number of Maximum Concurrent Executions (MCE) multiplied by the number of active Atom workers; Therefore, users should be mindful of the value they provide in the MCE settings to avoid message consumption issues.

This approach enhances flexibility while maintaining default limits when customization is not used. If you set this field to a value greater than zero, multiple process executions will start and message ordering is no longer maintained. It is recommended to use a Shared subscription type; otherwise, only one of the concurrent executions will be actively processing events.

<!--  - If you set this field to a value greater than zero, multiple process executions will start and message ordering is no longer maintained.  When using this mode it is recommended that you use a Shared subscription type otherwise only one of the concurrent executions will be actively processing events.  The maximum value of this field is 5.-->

**Retry Timeout** - 
The maximum amount of time \(in minutes\) allowed to process the message before it is automatically timed out \(negative acknowledgement\). If this occurs the message attempts to retry.

**Maximum Retries** - 
The number of retries before the message is sent to the dead letter queue.


:::note

When a message fails to process it will automatically retry up the number of retries configured in **Maximum Retries**. The first retry will be 5 seconds later and then subsequent retries will be double the time to support a gradual backoff. 

The maximum number of retries is from 1 to 50. If setting the value to a number smaller than 1 (0 or negative), it will default to 1. If setting the value to a number greater than 50, it will default to 50.

When a message reaches the maximum retry value, it is automatically moved to the dead letter queue for the configured subscription The dead letter queue is specific to the individual subscription, not the topic. You can monitor how many messages are going to the dead letter queue by reviewing the subscription table "Dead Letter Backlog" column.

:::

:::note

The dead letter queue is **only** supported for the Shared listener type.

:::

:::note

If you want to achieve traditional publish/subscribe \(pub/sub\) messaging, specify a unique subscription name for each consumer process. If ordering is required (FIFO), use an **Exclusive** or **Failover** subscription type.

:::