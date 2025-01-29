import RequestProfile from './_RequestProfile.md'
import ResponseProfile from './_ResponseProfile.md'
import OperationEnd from './_operationEnd.md'
import TrackingDirection from './_TrackingDirection.md'
import ReturnErrRes from './_ReturnResponse.md'

# Google Pub/Sub operation 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-88bd8aa3-6ac0-4f7b-882e-c910e60a1118"/>
</head>


The Google Pub/Sub operation defines how to interact with Google's Cloud Pub/Sub data streaming and messaging service and supports push, pull, acknowledge, and listen actions.

Each action uses a different profile. The message on the Integration document is always a RAW value.

## Publish 

This operation sends requests to the Pub/Sub system to publish messages to a topic. Publish consumes a RAW document with a possible value on the resourceId document property for Dynamic Topic publish operations and returns a JSON document with a message ID.

You can set dynamic document properties to send message attributes in documents in the format `<Boomi Property Key>=<Attribute Key>` and `<Boomi Property Value>=<Attribute Value>`. Message attributes are read and set as dynamic document properties.

:::note

Google Cloud sets these maximum limits for messages and attributes:

-   Message and request size \(the data field\): 10 MB
-   Attributes for each message: 100
-   Attribute key size: 256 bytes
-   Attribute value size: 1024 bytes

:::

## Pull 

This operation has no input or output profiles. Pull sends requests to the Google Pub/Sub system asking for messages that are in the subscription queue. The Pub/Sub server responds with messages or acknowledgment IDs that are composed of the RAW value and the associated document properties. The operation returns a RAW document for the message body. However, if the retrieved message does not have a body, the operation returns at least one attribute mapped into a dynamic document property and the document properties.

## Acknowledge 

This operation returns the acknowledgment ID to the Google Pub/Sub server to tell it that it can delete a message from the queue. Without acknowledgment, it might send a message repeatedly. Acknowledge uses standard Boomi Integration delete XML as input and can use the resource ID as a dynamic document property.

There are two ways to send acknowledgments: turning on Auto-Acknowledge in the Pull operation or using an Acknowledge operation. Auto-Acknowledge, which sends an acknowledgment as soon as it receives a message, can be problematic. If the process fails, lost messages are acknowledged and flagged for deletion. To avoid this problem, use an Acknowledge operation as a downstream step in your process to send acknowledgments after processing inbound messages successfully.

## Listen 

This operation listens for messages from Google Pub/Sub subscriptions. You can view the status of listener processes deployed to an Atom, Molecule, or Atom Cloud by accessing the **Listeners** panel in **Manage** \> **Atom Management**. In that panel, you can also pause, resume, and restart listeners.

Unlike Publish, Pull and Acknowledge operations, which use the Google Pub/Sub REST API, the Listen operation uses the Google Pub/Sub Streaming Pull API, based on gRPC, for better performance.

Consider the following when creating a Listen operation:

-   The Listen operation returns unstructured output binary documents containing a message from the specified subscription.

-   You can select the subscription to which the Listen operation connects by:

    -   Picking a subscription from a list obtained from the service while importing the operation, after leaving the **Allow Subscription Name Override** browse field cleared.

    -   Filling the **Subscription Name** operation field that appears after importing the operation with the **Allow Subscription Name Override** browse field selected, and clicking **Overridable Subscription** as the object type.

-   The Listen operation supports **On Process Submission** and **On Process Success** commit strategies, to determine when the messages are acknowledged or nack-ed. See the Commit Strategy section below for more details.

-   The Listen operation extends messages acknowledgement deadline for a configured **Maximum Ack Extension Period** \(by default 60 minutes\) automatically. In addition, the Pub/Sub service redelivers messages that are nack-ed or are not ack-ed in a proper time.

-   The Listen operation provides mechanisms for message flow and concurrency control, which impact the operation throughput. See the Message Flow Control and the Concurrency Control sections following this for more details.

-   The Listen operation supports Message Id, Publish Time, Delivery Attempt \(for subscriptions with a dead letter policy\) and Ordering Key as tracked properties in the message response.

-   The Listen operation supports Message Attributes as tracked groups in the message response.

-   The Listen operation supports singleton mode and is available on Atoms, Molecules, Docker, Kubernetes, Atom clouds and the Atom Cloud.


#### Commit Strategy 

The Listen operation supports two different commit strategies:

-   On Process Submission

-   On Process Success


When using the **On Process Submission** commit strategy, the Listen operation submits the message to run and immediately sends its acknowledgement to the Pub/Sub service.

On the other hand, when using the **On Process Success** commit strategy, the Listen operation verifies the process run result. If successful, it sends an acknowledgement for the message to the Pub/Sub service, otherwise it sends a nack and the message is available for redelivery.

#### Message Flow Control

:::caution 

The following feature involves changing container properties. Hence the Atom stability is not guaranteed for all values.

:::

The Listen operation provides a feature to control the message flow with the Pub/Sub service by setting the size of the buffer internally used by the connector for holding received messages until processing by the operation. To accomplish this, it uses the following two parameters:

-   **Max Outstanding Element Count** - Sets an upper bound to the number of messages kept in the buffer. This parameter has a fixed value of 1000 messages. Still, it can be changed by overriding the *com.boomi.connector.googlepubsub.listen.max.outstanding.messages.count* container property with a value greater than 0. If you set a value outside the allowed range in the container property, the operation uses the default value \(1000 messages\).

-   **Max Outstanding Bytes Count** - Sets an upper bound to the overall size of the buffer. By default, this parameter has a fixed value of 1,048,576 bytes \(1MB\) that you can change by overriding the *com.boomi.connector.googlepubsub.listen.max.outstanding.bytes.count* container property with a value greater than 0. If you set a value outside the allowed range in the container property, the operation uses the default value \(1,048,576 bytes\).


To learn more about this topic, see the [Google Pub/Sub Message Flow Control](https://cloud.google.com/pubsub/docs/pull#flow_control) documentation.

#### Concurrency Control 

:::caution 

The following feature involves changing container properties. Hence the Atom stability is not guaranteed for all values.

:::

The Listen operation provides a feature to control concurrency, which allows the processing of multiple messages in parallel, enhancing the reception and processing performance through the following two parameters:

-   **Number of Parallel Streams** - Determines how many stream connections the client establishes with the Pub/Sub service. By default, the fixed value of the parameter is 1, but you can change it by overriding the *com.boomi.connector.googlepubsub.listen.streams.count* container property with a value greater than 0. When you set a value outside the allowed range in the container property, the operation uses the default value \(1 stream\).

-   **Number of Threads per Stream** - Determines how many threads for processing messages are available for each stream. The volume of messages determines whether or not it uses all of those threads. By default, this parameter has a fixed value of 1, but you can change it by overriding the *com.boomi.connector.googlepubsub.listen.threads.per.stream.count* container property with a value greater than 0. When you set a value outside the allowed range in the container property, the operation uses the default value \(1 thread per stream\).


At any time, the number of concurrent processing messages is, at most, the product between both parameters. By default, you process only one message at a time.

To learn more about this topic, see the [Google Pub/Sub Concurrency Control](https://cloud.google.com/pubsub/docs/pull#concurrency_control) documentation.

#### Acknowledge Deadline

Subscribers have a limited time to acknowledge the received messages before the Pub/Sub service redelivers them. This time is known as the “acknowledge deadline.” You can configure subscriptions with a maximum deadline of 600 seconds \(10 minutes\).

The Listen operation automatically makes periodic deadline extension requests until the messages are ack-ed or nack-ed. The setting allows you to run processes that take more than 10 minutes to complete.

The **Maximum Ack Extension Period** operation parameter controls the maximum time the operation extends the acknowledged deadline. See the **Options** tab section for more details about this property.

Be aware that a process that takes more than the **Maximum Ack Extension Period** to complete can lead to message redelivering and reprocessing.

#### Message Ordering 

You can use the Listen operation to receive messages in the order they were published \(FIFO\). The following items are prerequisites:

-   When creating the subscription on the Google Cloud portal, you must select the **Order messages with an ordering key** check box.

-   When you need to deliver messages in order, you must publish them by setting the same value on the ordering key field. It could be any meaningful string.

-   You must publish the messages to the same regional endpoint instead of the global endpoint.

-   You must configure the operation to work as a singleton listener and with only one stream and one thread per stream \(see the three previous subsections\).


If any of these requirements are not met, it still receives messages but the order is not guaranteed.

Note that publishing and receiving messages with ordering keys might increase latency. Publishing to a regional endpoint limits throughput to the regional quota available. As a consequence, expect a decrease in performance.

To learn more about this topic, see the [Google Pub/Sub Ordering messages](https://cloud.google.com/pubsub/docs/ordering) documentation.

## **Options** tab 

Click **Import Operation**, then use the Import wizard to select the object with which you want to integrate. The following table describes the fields for each action type:

 
  
  
<TrackingDirection />

<RequestProfile />

<ResponseProfile />


<ReturnErrRes />

**Encode Message Data** - 
 \(Publish\) Google Pub/Sub requires all incoming messages be in Base64 format.

 -   Select to encode plain text messages in Base64 before publishing them.

 -   Clear if messages are already in Base64.


**Return Immediately** - 
 \(Pull\) If selected, the Google Cloud Platform immediately responds even if no messages are available to return. If cleared, Google can wait for a fixed amount of time until at least one message is available.

**Decode message data** - 
\(Pull\) Google Pub/Sub returns all messages in Base64 format.

-   Select to decode pulled messages from Base64 and store in plain text.

 -   Clear to store messages in Base64.


**Auto-Acknowledge** - 
 \(Pull\) When receiving messages, the connector sends an acknowledgment notifying the Pub/Sub system that it can delete the relevant message from the subscription. Decoupling acknowledgments can result in faster pulls but some messages might be resent.

 -   Select to automatically acknowledge all received messages.

 -   Clear to decouple acknowledgments from received messages.


**Max Messages** - 
  \(Pull\) Sets the maximum number of messages to return for a request. The default is 100. When there are additional messages above the maximum number, the connector pulls them in subsequent automatic requests without waiting to reach the maximum threshold.

Google Pub/Sub has a time-out which you cannot configure, and works with a combination of the returnImmediately and maxMessages fields \(configured in Google Pub/Sub\), so the Pull operation might not return the number of messages you expect.

-   If you set returnImmediately to true, Google Pub/Sub responds immediately and returns messages even if there is no message available to return. Google Pub/Sub can also wait for a fixed amount of time until at least one message is available instead of returning no messages.
 -   If you set maxMessages to 30, Pull may return fewer messages than expected \(for example, five\) because it retrieves only 5 messages before meeting the time-out.

**Commit Strategy** - 
\(Listen\) Select the commit strategy regarding the acknowledgement of messages.

-   **On Process Submission** - After submitting messages, you receive an acknowledgment immediately.

 -   **On Process Success** - \(default\) Messages are acknowledged only after confirming successful processing. In case of a process failure, the corresponding messages are nack-ed, which implies that they will be available again in the subscription.


**Maximum Ack Extension Period** - \(Listen\) Specify in minutes how long the processing of a message is without risk of being redelivered by the Google Pub/Sub service because of a time-out expiration. The default value is 60 minutes. It must be greater or equal to 0. A value of 0 disables the automatic acknowledge extension. If you set a value below 0, the operation uses the default value.

**Singleton Listener** - 
 \(Listen\) Determine if it starts the listener in a single node or all the nodes in the container.

-   If selected, only one instance of a singleton operation starts for each container. For multi-node containers, the operation starts on only one node. Additionally, singleton operations do not cross containers. The listener runs on all Atoms in the environment.

-   If cleared \(default value\), the listener starts in all available nodes in multi-node containers.

