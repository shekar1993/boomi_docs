import OperationEnd from './_operationEnd.md'

# JMS (Legacy) operation 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-57362a0a-c749-4fde-82d5-8e42fe3e16ad"/>
</head>


The JMS operation defines how to interact with the connection, including transactions, batching, custom properties, etc.

The operation supports these actions:

-   Get — Retrieves messages from a queue or topic.
-   Send — Sends messages to a queue or topic.
-   Listen — Retrieves messages from a queue or topic asynchronously. You can view the status of listener processes that are deployed to an Atom, Molecule, or Atom Cloud using the Listeners panel in **Manage** \> **Atom Management**. In that panel, you can also pause, resume, and restart listeners.
    -   Test mode does not support real-time triggering and therefore cannot be used with listener processes.
    -   JMS Listeners requiring custom JAR files cannot be deployed to the Atom Cloud. You must use a local Atom. Get and Send actions can be deployed to the Atom Cloud.
    -   When a JMS Listener loses connection with the JMS server, the connector attempts to reconnect six times at intervals of 0, 10, 30, 60, 120, and 300 seconds. After the sixth retry, the connector stops and does not attempt another retry until the Listener is restarted.

:::caution

The JMS (Legacy) connector and operations only support object messages \(the ObjectMessage type\) on Oracle AQ. If you attempt to retrieve object messages for any provider other than Oracle AQ, you will receive an error upon process execution.

:::

## Dynamic document property values 

Configuring a connector's parameters affects how dynamic document property \(DDP\) values are handled during process execution. When you configure the Connector step, keep in mind the following:

-   If parameters are configured in the Connector step, the query is executed per document. As a result, the dynamic document property values are retained per document and do not merge.

-   If parameters are not configured in the Connector step, the dynamic document property values are merged. The first instance of a DDP takes precedence and determines the value\(s\) retained on the return documents.

    For example:

    -   Document 1 has DDP1 and DDP2.
    -   Document 2 has DDP1, DDP2, and DDP3.
    
    
    If that is true, then the output document\(s\) contain the following values:

    -   DDP1 and DDP2 from Document 1.
    -   DDP3 from Document 2.


:::note

Parameters are set in the **Parameters tab** and are based on the configured operation's profile. When configuring a Get operation, parameters are supported for all of the JMS Server Types. For Send operations, parameters are usable with Oracle AQ connections only.

:::

For more information on dynamic document properties, see the [Dynamic document properties](../../Integration/Process%20building/c-atm-Dynamic_Document_Properties_89d2f7a0-a490-4f35-a8b1-96af364f0211.md) topic.

## Options tab 

The following information describes the default field definitions for each action type:



**Destination** - 
Enter or select the name of the queue or topic from which you receive messages, or to which you send messages. Follow these guidelines:

-   To select an Oracle AQ database, click the **Import** button and select a database from the Connection list. The Import wizard connects to the selected Atom, provides a list of destinations, lets you confirm the destination and destination type, and then generates the destination URL with a prefix of `queue:`. When creating an object queue, the wizard also creates a profile.
-   To select other JMS database providers, enter the destination directly in the field.
-   When referencing queues or topics, prefix them with `queue:///<QueueName>` or `TOPIC:///<TopicName>`.
-   If you have a multi-consumer queue, change the prefix to `topic:`.
-   When referencing queues on ActiveMQ, prefix them with the ActiveMQ naming convention of `dynamicQueues/`. For example, `dynamicQueues/<your_queue_name>`
 -   When referencing topics on Oracle AQ \(WebLogic\), prefix them with the Oracle AQ \(WebLogic\) naming convention of `jms/`. For example, `jms/TestTopicFactory`

For general information about destinations, see the linked Oracle Interface Destination topic. For specific details, see your JMS provider's documentation.

**Import** - 
The Import button opens the **Import Queue Name** dialog to access a list of configured queues for selection. Only the default NORMAL\_QUEUE and the multi-consumer queue are available for import. Select only an Oracle AQ connection. If no queues are available for the user configured in the JMS (Legacy) connection, an error is returned. For information on using the Import Wizard, see the linked topic.

Import supports multi-consumer payloads for Oracle AQ object data types \(Oracle AQ RAW type queues are not supported\). The wizard generates a profile of valid XML objects, transforming nested object types and column names that do not conform to XML standards. For example, special characters in Oracle that do not conform to XML, like asterisks, are transformed to underscores.

**Destination Profile** - 
The destination profile, which you can browse, edit, or delete, is generated when you import Oracle AQ object data types.

**Transacted?** - 
The following table describes how to configure a JMS (Legacy) connection to use either transactions or acknowledgments for the Get, Send, and Listen actions:

| |**Transacted? Off**|**Transacted? On**|
|-------|----------|--------|
|**Get**|The connector uses auto-acknowledgments to send an acknowledgment after the message is pulled from the queue. If you use maximum number of messages and Infinite Wait for Receive Timeout, then the connector may send multiple acknowledgments because it pulls messages from the queue until it reaches the maximum number of messages value.|The connector uses a transaction to manage a message life cycle. The message is removed from the queue after it has been written to the disk. If there is a failure while the message is being handled, the transaction is rolled back and the message is left in the queue. The transaction batch size is always 1.|
|**Send**|The connector creates JMS sessions which automatically acknowledge receiving the message.|The connector treats each batch of documents as a transaction which passes or fails as a whole. The size of the batch is determined by the value set in the Transaction Batch Size field. If the batch size is not set, the default value of 1 is used.|
|**Listen** with Maximum Concurrent Executions Off|The connector uses auto-acknowledgments to send an acknowledgment \(one\) after the message is received and if the process starts successfully.|The connector uses a transaction to manage a message life cycle. The transaction is committed if the process starts successfully. If the process does not start, the transaction is rolled back.|
|**Listen** with Maximum Concurrent Executions On|The connector uses client-acknowledgments to send an acknowledgment \(one\) when the process completes successfully.|The connector uses a transaction to manage a message life cycle. The transaction is committed if the process completes successfully. If the process fails to complete, the transaction is rolled back.|

**Message Selector \(Get and Listen\)** - 
A JMS message selector string that can filter which messages are read. For more information on usage and syntax, see the linked Oracle Interface Message topic.

**Receive Timeout \(Get only\)** - 
Sets the length of time to wait for a message:

-   **Infinite** — The operation waits indefinitely until the Maximum Number of Messages is reached in the queue before sending any messages to the process. For example, if the Maximum Number of Messages is 2 but there is only 1 message in the queue, the operation waits indefinitely for a second message. When the second message arrives, then the operation sends both messages to the process.
-   **No Wait** — The operation sends a single message, if it exists, to the process immediately and does not wait for additional messages nor a timeout. The Maximum Number of Messages setting is not considered.
-   **User Defined** — The operation waits up to the specified timeout \(in milliseconds\) or until the Maximum Number of Messages is reached \(whichever happens first\). Then the operation sends the messages to the process. For example, the Maximum Number of Messages is 5 and the timeout is 10000 ms \(10 seconds\). When the operation begins receiving, if 5 messages are placed in the queue after 4 seconds, the operation sends the messages to the process immediately without waiting for the full timeout. Alternatively, if only 3 messages are placed in the queue, the operation waits for 2 more messages until the timeout. If no more messages are placed in the queue, the operation sends the 3 messages to the process.

For all Receive Timeout configurations: When the number of messages in the queue exceeds the Maximum Number of Messages setting, the excess remains in the queue to be received by subsequent process executions.

**Maximum Number of Messages \(Get only\)** - 
You can change the setting for new or existing operations. Existing operations have no setting and wait the full timeout. New operations default to 3. Setting the maximum to zero returns no documents.

**Durable? \(Topics only\) \(Get and Listen\)** - 
If selected, the message subscriber receives all messages published on a topic, including those published while the subscriber is inactive.

If cleared, the message consumer receives only messages that are published while the subscriber is active. Messages delivered while the subscriber is inactive are lost.

**Durable Subscription Name \(Get and Listen\)** - 
The name to use when registering the durable subscription.

**Transaction Batch Size\(Send only\)** - 
If Transacted? is on, this field specifies the number of documents to batch into a single transaction. For example, if you pass 10 documents when Transact? is on and Transaction Batch Size = 1, then the connector creates 10 batches of size 1 and commits each batch \(in other words 1 commit per document\).

**Maximum Concurrent Executions \(Listen only\)** - 
Set this value to limit the number of concurrent JMS listener processes. For Molecules, the limit is per node in a cluster. If you send hundreds of messages to the queue, hundreds of processes are executed. This can cause the Atom to run out of memory and crash. The following list describes the functionality:

-   When set to a value less than or equal to zero, an unlimited number of JMS listener processes can execute in parallel.
-   When set to a value greater than zero, up to that number of JMS listener processes can run simultaneously. The listener starts this number of JMS listener instances, all listening on the same queue. The listeners wait until a process completes before consuming the message. If a process fails, the message is not consumed.
-   For topics, this value cannot be greater than 1. If set to a number greater than 1, then a warning appears in the logs and the value is changed to 1.

**Custom Properties** - 
Get and Listen — Used to provide the names of custom JMS header properties to pull out of the message and save as document properties.

Send — Used to set custom properties to include in the JMS message header. You can set static property values in the operation or use dynamic values via user-defined document properties. To use a dynamic value, place a user-defined property before the JMS (Legacy) connector step using a value with the same name as the custom JMS property defined in the operation. This instructs the connector to override the value configured in the operation.

## Content tab 

This information describes the default field definitions for each action type:



**Content is XML?** - 
Indicates whether the content of the message is XML. If selected and the content is not XML, an error occurs. Use this property when you have character encoding issues. The field is relevant only when the incoming message is a text message.

**Message Type \(Send only\)** - 
Defines the type of message and the acknowledgment method:

-   A Bytes message is a stream of uninterrupted bytes. Bytes Message is generally preferred.
-   A Text message is a `java.lang.String` object.
-   A Map message is a set of name-value pairs with names as string objects and values as primitive types.
 -   An Object message carries a Java object as its payload. Use Object when importing Oracle AQ object data types.

**Warning:** The JMS (Legacy) connector and operations only support object messages \(the ObjectMessage type\) on Oracle AQ. If you attempt to retrieve object messages for any provider other than Oracle AQ, you will receive an error when executing the process.


<OperationEnd />