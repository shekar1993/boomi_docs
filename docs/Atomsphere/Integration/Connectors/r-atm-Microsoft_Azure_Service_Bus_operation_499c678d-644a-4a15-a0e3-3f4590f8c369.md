import TrackingDirection from './_TrackingDirection.md'
import ReturnErrRes from './_ReturnResponse.md'

# Microsoft Azure Service Bus operation 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-499c678d-644a-4a15-a0e3-3f4590f8c369"/>
</head>


The Microsoft Azure Service Bus operation defines how to process messages from a queue, topic, and subscription.

For each operation, browse and retrieve the topic and queue names so that you do not need to memorize or manually enter them. Create a separate operation component for each action that your integration requires. The Microsoft Azure Service Bus operations support unstructured data \(any format such as JSON, XML, or just text\) and the following actions:

-   Receive — receive messages from a Service Bus queue or topic.
-   Receive \(Session-aware\) — receive session-aware messages from a Service Bus queue or subscription.
-   Send — send messages to a Service Bus queue or topic.
-   Listen — listen for messages from a Service Bus queue or subscription.
-   Delete — delete messages from a Service Bus queue or subscription.

When authenticating using OAuth 2.0 \(Using service principal\), all operation requests have an authorization header containing the OAuth 2.0 token generated for the service principal.

:::caution

The connector has a subscription limit of 20. If you cannot use the **Import Operations** to browse for subscriptions and receive an error indicating there are too many resources and needing to update the filter, you have reached your subscription limit. To fix this issue, reduce the number of returned subscriptions using filters with wildcard characters \(\* or ?\).

:::

## **Options** tab

<TrackingDirection />

<ReturnErrRes />

:::note

**Return Application Error Responses** is not available for Listen operations.

:::

**Delete Messages** - 
  \(Receive\) If selected, it deletes all read messages in a single call instead of being deleted individually in a separate Delete operation after processing.

**Receive Mode** - 
 \(Listen\) Identifies the mode for receiving messages:

 -   Receive and Delete \(selected by default\) — The message is immediately consumed, processed, and deleted. Use this mode when you do not need to process a message after receiving it, and the service fails. Then, when the service restarts and begins consuming messages again, the message can be missed because it was processed and deleted.
-   Peek and Lock — The message is immediately locked in the queue until the intended consumer acknowledges receipt. Then, it either processes the message or when the **Lock Duration** time for the queue or topic expires \(specified in Microsoft Azure Service Bus\). By locking the message, it cannot deliver it to other consumers \(on the same queue or in a subscription\) during the lock duration. However, if the message receipt is not acknowledged or the lock duration expires, the message returns to the queue and becomes available to other receivers.

Incoming Azure Service Bus Listener messages contain an associated Delete Token. Use this token to remove the message from the queue with a Azure Service Bus Delete operation. This effectively acknowledges the message in the queue and prevents further processing.

Use Peek and Lock when you require at-least-once message delivery. If the receiver does not delete the message before processing succeeds, this mode ensures that another receiver can attempt to process the message after the lock duration expires.

:::note

In Service Bus, queues and subscriptions have a delivery count and maximum delivery count with a default value of 10. If the Service Bus cannot deliver a message using the Peek and Lock to any consumer or cannot process the message, Service Bus increments the delivery count by 1. When the delivery count exceeds the maximum delivery count, Service Bus moves the message to the dead-letter queue. You cannot disable this behavior, but you can increase the value of the maximum delivery count.

:::


**Queue/Subscription** - 
\(Required for Delete, Listen, Receive, and Receive \(Session-aware\)\) If you select the **Allow Dynamic Entity Types** check box when browsing, you can dynamically override the selected Entity Type when browsing by providing the specific queue or subscription name from where it deletes or receives the message. If left blank, an error appears. For subscriptions, specify the name in the format: `<topic name>:<subscription name>`


**Queue/Topic** - 
 \(Required for Send\) If you select the **Allow Dynamic Entity Types** check box when browsing, you can dynamically override the Entity Type when browsing by providing the specific queue or topic name of where to send the message. If left blank, an error appears.

**Maximum Number of Concurrent Executions** - 
  \(Listen\) Set a maximum limit on the number of concurrent process runs submitted by the operation. The default value is 1. When it reaches this number, the operation does not receive any new messages until at least one active run completes. You can control the operation's throughput, which you can use to ensure that all messages are received, and none are lost.

 -   When not set, or having a value equal to or less than 0, it allows an unlimited number of concurrent runs.
 -   For first-in, first-out \(FIFO\) processing of messages where the order is important, set this to 1.
 -   For Molecules, the limit is on a per node basis within a cluster.

 :::note

 Existing Listen operations continue using an unlimited number of concurrent process runs until you apply a maximum limit, save the operation, and redeploy the process.

 :::

**Execution Timeout** - 
 \(Receive \(Session-aware\)\) Specify the maximum length of time \(in seconds\) the operation waits until it stops returning messages. When setting this value, consider the quantity and size of messages to receive, and your network speed. When it reaches this maximum, or the **Maximum Message Count**, the operation stops returning messages. If you do not provide a value, the operation waits 30 seconds. Do not enter a value less than 1 second; it results in an error.

**Maximum Message Count** - 
 \(Receive \(Session-aware\)\) Specify the maximum number of messages to return from the queue or subscription. The operation runs until it reaches this maximum, or it meets the **Execution Timeout**. Enter 0 or a negative number to return as many messages as possible, until it meets the **Execution Timeout**. If you do not provide a value, the default is 0.

**Custom Message Properties** - 
\(Send\) Specify key and value pairs and define the properties to send as request headers in the message, such as timestamps, signatures, identifiers, and so on. You can dynamically override the value with the corresponding Custom Message Properties dynamic operation property. If you provide a blank or empty value, it ignores the key-value pair and is not sent to the service as a request header in the message.

The message receiver can use this information and decide how to handle the message without having to first process the message body.

:::note

The Receive, Listen, and Receive \(Session-aware\) operations return an output document containing the Custom Message Properties as a document property group. You provide the property key for which the connector returns the value.

:::

**Singleton Listener** - 
  \(Listen\) Determine if it starts the listener in all container nodes or only in one node.

 -   If selected, only one instance of a singleton operation starts for each container. For multi-node containers, the operation starts on only one node. Additionally, singleton operations do not cross containers. The listener runs on all Atoms in the environment.
-   If cleared \(default value\), the listener starts in all available nodes in multi-node containers, and can submit process runs.

## Receive 

This operation receives messages from a Service Bus queue or topic.

-   The document properties received from subscriptions to topics are: MessageId, `ContentType`, Label \(if set\), and Partition Key \(if there is a partitioned subscription\).
-   The document properties received from queues are: MessageId, `ContentType` \(if set\), Label \(if set\), and Partition Key \(if the queue is partitioned\).
-   If you clear the **Delete Messages** check box, it tracks these properties: LockToken, SequenceNumber, DeleteToken.

## Receive \(Session-aware\) 

Sessions enable you to process messages from queues and subscriptions in a specific session. Use sessions for more advanced messaging situations, such as a FIFO guarantee. Message sessions enable the joint and ordered handling of unbounded sequences of related messages. Any sender can create a session when submitting messages into a topic or queue by setting the Session Id property in the input document to a unique identifier for the session.

:::caution

Receive \(Session-aware\) uses the [AMQP protocol](https://www.amqp.org/about/what), and requires that you open port 5671 to communicate with Microsoft Azure Service Bus. Verify that port 5671 is open to ensure the operation is successful.

:::

This operation enables you to receive session-aware messages from queues and subscriptions. While browsing \(**Import Wizard**\), the wizard displays, and you choose, the **Object Type**. This represents the session-aware Service Bus queue or subscription that consumes the messages. For added flexibility, you can delay the selection of a specific queue or subscription when browsing by selecting the **Allow Dynamic Entity Types** check box and then selecting either **DYNAMIC_QUEUE** or **DYNAMIC_SUBSCRIPTION** as the **Object Type**. This allows you to dynamically provide the queue or subscription name in the operation utilizing a Query filter. By dynamically providing the queue or subscription name in the Query filter, rather than when browsing, you can bypass the requirement of having permissions to list queues and subscriptions. 

To provide additional flexibility, you can use the **Maximum Number of Messages** option to specify the maximum number of messages to return from the queue or subscription, and **Receive Message Timeout** to specify the maximum length of time the operation waits until it stops returning messages.

:::note Important 

You can improve performance by setting the operation to receive multiple messages because it establishes the connection only once in each operation run.

:::

#### Filters

Consider the following when utilizing a Query filter.

-   Requires the sessionId filter to receive messages. It allows blank values because they are valid session identifiers in Service Bus.
-   Requires the entityName filter when you select the **Allow Dynamic Entity Types** check box when browsing \(**Import Wizard**\). If not set, an error occurs when the process runs.
- The entityName operation field is overridable.
-   If you set the entityName filter to a non-session-aware entity when you specify a dynamic queue or subscription when browsing \(you select **DYNAMIC\_QUEUE** or **DYNAMIC\_SUBSCRIPTION** as the **Object Type**\), the connection to Service Bus fails.

#### Output document properties

The output document properties for this operation are:

-   Message Id
-   Sequence Number
-   Content Type
-   Label
-   Partition Key
-   Session Id
-   TimeToLive
-   DeliveryCount
-   DeadLetterReason

## Send 

This operation sends messages to a Service Bus queue or topic. The document properties for this operation are:

-   MessageId
-   ContentType
-   Label
-   TimeToLive \(default is 60 seconds\)
-   Partition Key

#### Using sessions to send messages

Sessions enable you to send messages from queues and topics during a specific session. Use sessions for more advanced messaging situations such as a FIFO guarantee. Message sessions enable the joint and ordered handling of unbounded sequences of related messages.

#### Prerequisites

Microsoft Azure Service Bus comes in Basic, Standard, and Premium tiers. The Basic tier of Service Bus does not support sessions. To utilize the messaging functionality, you must:

-   Have either the Standard or Premium tier. For more information, see the Service Bus pricing article.
-   Enable the session feature using the Azure Resource Manager by setting the requiresSession property on the queue or subscription, or by setting the flag in the Azure portal. It requires setting this before you attempt to use the connector's Send operation.

#### Creating a session

After completing the prerequisites, you can create a session when sending messages to a topic or queue by setting the **Session Id** document property in the **Set Properties** step. A session-aware queue or subscription recognizes the **Session Id** when at least one message contains this value. Once that session exists, there is not a defined time in Service Bus for when the session expires or disappears. For example, a message could be received today, the next message in a year, and so on. As long as the **Session Id** matches, it sends the message to that session.

-   If you enable sessions in Service Bus and provide the **Session Id** document property, your process sends a message to the Service Bus topic or queue.
-   If you enable sessions in Service Bus and do not provide the **Session Id** document property, your process receives an error.
-   If you do not enable sessions in Service Bus, it sends a message to the topic or queue without a session.

Sending a message to a queue requires a session. However, sending a message to a topic does not require a session, even if you enable sessions in a subscription. In addition, the Receive operation does not support the **Session Id** document property because the Service Bus REST API does not support the setting.

## Listen 

This operation listens for messages from a Service Bus queue or subscriptions to topics. You can view the status of listener processes deployed to an Atom, Molecule, or Atom Cloud by accessing the Listeners panel in **Manage** \> **Atom Management**. In that panel, you can also pause, resume, and restart listeners.

:::caution

Listen uses the [AMQP protocol](https://www.amqp.org/about/what) and requires you to open port 5671 to communicate with Microsoft Azure Service Bus and to ensure the listener successfully starts.

:::

-   Test mode does not support real-time triggering; therefore, you cannot use it with listener processes.
-   The connector listens for and receives only one message at a time.
-   Messages in queues, topics, and subscriptions are processed and received differently:
    -   Queues — delivers messages in a first-in, first-out \(FIFO\) manner based on when it adds the message to the queue. Only one consumer \(the first in the queue\) receives the message.
    -   Topics and Subscriptions — each message is available to all subscriptions registered with the topic, and all consumers of the subscription receive a copy of the message. However, if there are multiple consumers with the same subscription, only one consumer \(the first\) receives the message. As a workaround, you can configure multiple, unique subscriptions to a topic, create a listener for each, and then each subscription receives every message sent to its topic.
-   Listen is available on Atoms and Molecules, and the Boomi Atom Cloud.
-   Listen processes can run in low latency mode.
-   Listen supports Message Id, ContentType, Label, LockToken, EnqueuedTimeUtc, SequenceNumber, DeleteToken, and Partition Key \(if the operation listens to a partitioned queue or subscription\) as tracked properties in the message response. For more information, see the [Message Headers and Properties topic](https://learn.microsoft.com/en-us/rest/api/servicebus/message-headers-and-properties) in the Microsoft documentation.

#### Using sessions to listen for messages

Sessions enable you to listen for messages from queues and topics in a specific session. Use sessions for more advanced messaging situations such as FIFO guarantee. Message sessions enable the joint and ordered handling of unbounded sequences of related messages.

#### Prerequisites

Microsoft Azure Service Bus comes in Basic, Standard, and Premium tiers. The Basic tier of Service Bus does not support sessions. To utilize the messaging functionality, you must:

-   Have either the Standard or Premium tier. For more information, see the Service Bus pricing article.
-   Enable the session feature using the Azure Resource Manager by setting the requiresSession property on the queue or subscription, or by setting the flag in the Azure portal. It requires this step before you attempt to use the connector's Send operation.

#### Listening for messages

When listening for messages from a queue or subscription, Service Bus obtains all of the messages for a session based on a two-minute time-out that Service Bus enforces. The time-out starts when the last minute of the session finishes processing. After two minutes, Service Bus gets the messages in the next session. The connector cannot specify a session because Service Bus does not support that functionality.

## Delete 

This operation deletes messages from a Service Bus queue or subscription to topics. It uses the ID of the received delete token in the operation to identify the message to delete.