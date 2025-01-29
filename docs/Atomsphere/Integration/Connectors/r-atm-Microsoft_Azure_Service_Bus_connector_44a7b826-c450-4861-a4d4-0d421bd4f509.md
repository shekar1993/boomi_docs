# Microsoft Azure Service Bus connector 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-97ab2099-b78d-4058-b91d-e2dddc1ea110"/>
</head>


The Microsoft Azure Service Bus connector makes it easy to build integrations that send messages to and receive messages from the Azure Service Bus queue or topic, delete messages from queues and subscriptions to topics, and for real-time integration, listen for messages from queues and topics.



## Connector configuration 

To configure a connector to communicate with Azure, set up two components:

-   Microsoft Azure Service Bus connection
-   Microsoft Azure Service Bus operation


This approach creates reusable components that contain connection settings and operation settings. After building your connection and operation, set up your Microsoft Azure Service Bus connector within a process. When you define the process, Integration can map to and from virtually any system using the Microsoft Azure Service Bus connector to retrieve data from or send data to the Microsoft Azure Service Bus application.

## Prerequisites 

To use the connector and implement a connection to your Microsoft Azure account from Integration, have the following information and permissions:

-   The name of the Service Bus resource in the Azure portal

-   Your SAS key name

-   Your SAS key

    :::note

    The SAS key name and SAS key are only required when using **SAS** as the authentication type to connect with the service.

    :::

-   Manage permissions for your shared access policy so you can list the objects in queues, topics, and subscriptions.

-   Send and Receive permissions for your shared access policy so you can send and receive messages.

-   Integration permissions to perform the appropriate connector operations in queues, topics, and subscriptions.

-   Grant the appropriate permissions \(Owner, Contributor, Reader, User Access Administrator\) to the Azure resources for service principals using the Azure portal and Azure role-based access control.


## Document properties \(input\) 

:::note Attention 

We have removed the existing dynamic fields in `connector.descriptor.xml`. This means you cannot set new values through dynamic properties; for example, setting values through the SetProperty step will not work. Values that were previously defined with SetProperty will continue to work as expected.

:::

## Dynamic Operation properties
Dynamic operation properties are document-level overrides that you define values for, then pass into the Connector step to override the operation component's default value. The Connector step dialog's Dynamic Operation Properties tab allows you to provide static values or document-level values (Document Property) for the parameters. You can add, edit, and delete these parameters. 


This connector has the following properties for input documents that you can set or reference in various step parameters:

**ContentType** - 
\(Send\) Indicates the content type of each message to be sent. You can use any string that works as a content type identifier utilized by the sender and receiver for application-specific logic. Azure Service Bus recommends using values following the format of [RFC2045, Section 5](https://www.rfc-editor.org/rfc/rfc2045#section-5) \(for example, `application/json`\).

**Correlation ID** - 
(Send) Indicates the correlation identifier of each message to be sent. The correlation ID can be used to correlate messages.

**Label** -  
\(Send\) The label of each message to be sent. The label can be used to categorize or identify messages. 

**MessageId** - 
 \(Send\) The unique identifier optionally sets the ID of each message to be sent. If not specified, the Azure Service Bus service automatically generates it. The duplicate detection feature identifies and removes duplicate submissions of messages with the same MessageId.

This identifier is a free-form string, and can reflect a GUID or an identifier derived from the process context. If enabled in the Azure Service Bus service, the duplicate detection feature identifies and removes second, and further, submissions of messages with the same MessageId. For more information, see the [Duplicate detection](https://docs.microsoft.com/en-us/azure/service-bus-messaging/duplicate-detection) article in the Microsoft documentation.

**PartitionKey** - 
 \(Send\) The specific partition, within the selected partitioned queue or topic, where it sends each message. Consider the following:

 -   Not setting the Partition Key for a partitioned queue or topic sends the message to a partition selected by the Azure Service Bus service based on a round-robin algorithm.
 -   Setting the Partition Key when the selected queue or topic is not partitioned does not produce an error by itself.
  -   The Azure Service Bus service imposes some additional restrictions and makes assumptions when the Session Id and Partition Key properties are used together, in some specific scenarios. For more information, see the [Use of partition keys](https://docs.microsoft.com/en-us/azure/service-bus-messaging/service-bus-partitioning#use-of-partition-keys) article in the Microsoft documentation.

**Reply To** - 
(Send) The address of the queue or topic to reply to. 

**Reply To Session Id** - 
(Send) The Session identifier to reply to. 

**Scheduled Enqueue Time Utc** -  
(Send) Specifies the scheduled enqueue time in UTC for each message to be sent. This setting is the duration after which the message will be enqueued, starting from when the message is accepted and stored by Azure Service Bus. Messages older than their scheduled time are enqueued immediately. 

**SessionId** - 
\(Send\) For session-aware entities, this value specifies the session affiliation of the message. Consider the following:

-   Setting a Session Id is required when the you configure the operation with a session-aware queue. Otherwise, the Azure Service Bus service produces an error.
 -   When you configure the operation with a topic, it does not require the Session Id, even if there is a subscription for that topic where sessions are enabled.
 -   Setting the Session Id when you configure the operation with a non session-aware queue does not produce an error by itself.
 -   Blank values \(empty, or values composed only of white spaces\) are valid Session ID’s.
 -   The Azure Service Bus service imposes some additional restrictions and makes assumptions when the Session Id and Partition Key properties are used together, in some specific scenarios. For more information, see the [Use of partition keys](https://docs.microsoft.com/en-us/azure/service-bus-messaging/service-bus-partitioning#use-of-partition-keys) article in the Microsoft documentation.


**TimeToLive** - 
  \(Send\) Set a time, in seconds, for sending each message. Messages older than their Time To Live value expire, and the message store on Azure Service Bus does not retain them. If not explicitly set, Azure Service Bus determines the value based on the queue or topic setting

**To** - 
(Send) Specifies the address of the queue or topic to send the message to.


## Document properties \(output\) 

This connector has the following properties for output documents that you can set or reference in various step parameters:

**ContentType** - 
  \(Receive, Listen, Receive \(Session-aware\)\) Indicates the `Content-Type` of each retrieved message, if previously set by the message sender.

**Correlation ID** - 
(Receive, Listen, Receive (Session-aware)) Indicates the correlation identifier of each message to be sent. The correlation ID can be used to correlate messages.

**DeadLetterReason** - 
 \(Receive, Listen, Receive \(Session-aware\)\) Only applicable and set in messages in the dead letter queue and later automatically forwarded from the queue to another entity. Indicates the reason why the message was dead-lettered.

**DeleteToken** - 
 \(Receive, Listen\) Indicates the Delete Token of each retrieved message if it did not delete them after being read by the operation. The Delete operation can then use the token to delete the message. Receive deletes messages when you select the **Delete Messages** check box. Listen deletes messages when you set **Receive Mode** in the drop-down list to **Receive and Delete**.

**DeliveryCount** - 
  \(Receive, Listen, Receive \(Session-aware\)\) Indicates the number of attempted deliveries for the message.

**Enqueue Time Utc** -  
(Send) Indicated the time in UTC that a message was sent each message to be sent. This setting is the duration after which the message will be enqueued, starting from when the message is accepted and stored by Azure Service Bus. 

**Label** - 
\(Receive, Listen, Receive \(Session-aware\)\) Indicates the Label of each retrieved message, if previously set by the message sender.

**LockToken** - 
\(Receive, Listen, Receive \(Session-aware\)\) Indicates the Lock Token of each retrieved message, if it did not delete the message after being read by the operation. Receive deletes messages when you select the **Delete Messages** check box. Listen deletes messages when the **Receive Mode** drop-down list is set to **Receive and Delete**.  

**Locked Until Utc** - 
(Receive, Listen, Receive (Session-aware)) Indicates the time in UTC a message will be locked until.

**MessageId** - 
\(Receive, Listen, Receive \(Session-aware\)\) Indicates the Message ID uniquely identifying each retrieved message.

**PartitionKey** - 
\(Receive, Listen, Receive \(Session-aware\)\) Indicates the Partition Keyof each retrieved message, if set in the message.

**Reply To** - 
(Send) The address of the queue or topic to reply to. 

**Reply To Session Id** - 
(Send) The Session identifier to reply to. 

**Scheduled Enqueue Time Utc** -  
(Send) Specifies the scheduled enqueue time in UTC for each message to be sent. This setting is the duration after which the message will be enqueued, starting from when the message is accepted and stored by Azure Service Bus. Messages older than their scheduled time are enqueued immediately. 

**SequenceNumber** - 
\(Receive, Listen, Receive \(Session-aware\)\) Indicates the Sequence Number of each retrieved message.

**SessionId** - 
\(Receive \(Session-aware\)\) Indicates the Session Id of each retrieved message, when the selected queue/subscription is session-aware.

**TimeToLive** - 
 \(Receive, Listen, Receive \(Session-aware\)\) Indicates the relative duration after which the message expires, starting from the when the broker accepts and stores the message.

**To** - 
(Send) Specifies the address of the queue or topic to send the message to.
