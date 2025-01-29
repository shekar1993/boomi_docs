# JMS v2 operation 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-d4b304f7-c0ca-4371-9ccc-060a9a0900d2"/>
</head>


The JMS v2 operation defines how to interact with the connection, including transactions, batching, custom properties, etc.

The operation supports these actions:

-   Send
-   Get
-   Listen

## Browsing 

**Dynamic Destination** is the only object type available for all operations. The destination type desired by the user can be configured on the browse screen with the dropdown field **Server Type**.

For the Send operation, the connector will generate an input profile depending on the Destination Type selected by the user. The output profile will always be in JSON, containing the fields **Message ID**, **Destination**, and **Destination Type**.

For Receive and Listen operations, the connector will generate output profiles depending on the **Destination Type** selected by the user.

The following fields appear on the Browse tab:


**Destination Type** - 
A dropdown box allowing the user to configure the type of messages accepted by the destination so an appropriate profile may be generated.

-   Text Messages
-   Text Messages \(XML\)
-   Map Messages
-   Byte Messages
-  XMLType Messages \(OracleAQ only\)
-   Object Messages \(OracleAQ only \)

**Dynamic Destination** - 
A conditional dropdown box that is visible when **OracleAQ** is chosen for the **Server Type**. When selected, the connector will not retrieve destinations from the service.

**Server Type** - 
A dropdown box allowing to user to retrieve the destination list from a static list or through an **OracleAQ** connection.

## Send 

This operation produces messages to the configured JMS service. The payload of these messages is the input document, with the exception of Map Messages where the payload is a JSON document with an array of objects.

As a safety measure, the operation will avoid sending messages whose size is greater than the threshold defined by the container property `com.boomi.connector.jmssdk.max.message.size`. The default value for this configuration is 1 MB.

**Destination** - 
An importable text field allowing the user to select the desired queue or topic where messages will be sent. This field becomes read-only when OracleAQ is selected as the **Dynamic Destination** - 

**Use Transaction** - 
A checkbox indicating if messages will be sent within a transaction.

**Transaction Batch Size** - 
A conditional text field that is visible when **Use Transaction** is checked. The default value is 1. The operation uses this value to partition the messages sent within the same transaction into batches. 

**Destination Type** - 
An importable dropdown box listing all the destination types available. The value chosen at browse time is selected by default.

**Custom Properties** - 
An overridable operation property allowing users to set custom properties to include in sent messages with key/value pairs.

**Correlation ID** - 
An overridable operation property.

**Message Type** - 
An overridable operation property.

**Message Class** - 
An overridable operation property.

**Priority** - 
An overridable operation property.

**Reply To** - 
An overridable operation property.

**Time to Live** - 
An overridable field that represents the time a given message will expire in milliseconds. Input to this field must be greater than zero; if the input is exactly zero, the message will not expire.

## Get 

This operation fetches messages from a queue or topic subscription within the configured service. The payload of these messages is the output document, with the exception of Map Messages where the payload is a JSON document built from the key/value pairs contained in Map Message.



**Destination** - 
n overridable operation property that indicates the queue or topic messages will be fetched from.

**Destination Type** - 
An importable dropdown box listing all the destination types available.

**Use Transaction** - 
A checkbox indicating if messages will be received within a transaction.

**Message Selector** - 
A query filter used to filter received messages using the JMS Consumer.

**Durable Subscription** - 
A checkbox indicating if the subscription associated with a topic is durable. Only used for topics.

**Subscription Name** - 
A conditional text field that is visible when **Durable Subscription** is visible where the user can enter the name of the durable subscription.

**Receive Mode** - 
A dropdown that allows the user to choose how they want to receive messages.

-   No Wait
-   Limited Number of Messages
-   Limited Number of Messages with Timeout
-   Unlimited Number of Messages with Timeout

**Maximum Number of Messages** - 
A conditional text field that is visible when **Receive Mode** is set to **Limited Number of Messages** or **Unlimited Number of Messages with Timeout**. Input to this field indicates how many messages the connector will retrieve before completing execution and must be a number greater than zero.

**Receive Timeout** - 
A conditional text field that is visible when **Receive Mode** is set to **Limited Number of Messages with Timeout** or **Unlimited Number of Messages with Timeout**. Input to this field indicates how many messages the connector will retrieve before completing execution and must be a number greater than zero.

**Expiration Time** - 
A tracked property that represent the time in milliseconds between **Expiration Time** and midnight, January 1st, 1970 UTC.

**Correlation ID** - 
An output document property.

**Message ID** - 
An output document property.

**Message Type** - 
An output document property.

**Message Class** - 
An output document property.

**Priority** - 
An output document property.

**Redelivered** - 
An output document property.

**Reply To** - 
An output document property.

## Listen 

This operation retrieves messages from a queue or topic within the configured JMS service and submits them individually for processing. The payload of these messages is the output document, with the exception of Map Messages where the payload is a JSON document containing the key/value pairs present in the message.


**Destination** - 
An overridable operation property that indicates the queue or topic messages will be fetched from.

**Use Transaction** - 
A checkbox to enable or disable retrieving messages within a transaction for the Listen operation. 

**Delivery Policy** - 
A dropdown that indicates the delivery policy used by the Listen operation. Your selection of the options below impacts the transaction mode of the consumers, and how the messages will be committed or rollbacked. 

- **At least once**: the connector will submit a message to a process execution and will commit/rollback the message after the processing is complete. 
  * When **Use Transactions** is enabled - The session is committed after the message is processed. The session is rollbacked if the process execution fails.

  * When **Use Transactions** is disabled - The message is acknowledged after being processed successfully.
No explicit rollback is done in case of failure. 

- **At most once**: the connector will submit a message to a process execution and immediately commit the message regardless of the execution result.
  * When **Use Transactions** is enabled - The session is committed for all messages after being submitted, regardless of the processing result. 

  * When **Use Transactions** is disabled - The consumer is configured with Session Auto Acknowledgement, meaning that the messages are committed at the moment they are retrieved.

**Maximum Concurrent Executions** - 
A text field where you can configure how many messages can be processed concurrently at a given moment. You cannot set this field to "unlimited"; the operation, for each consumer, will always submit a message and wait until its processing is done before submitting the next one.




**Message Selector** - 
A query filter used to filter received messages using the JMS Consumer.

**Durable Subscription** - 
A checkbox indicating if the subscription associated with a topic is durable. Only used for topics.

**Subscription Name** - 
A conditional text field that is visible when **Durable Subscription** is visible where the user can enter the name of the durable subscription.


**Singleton Listener** - 
A checkbox that when checked, determines that when the Listen operation is deployed to a multi-node envrionment, the operation will be executed in only a single node.

**Expiration Time** - 
A tracked property that represent the time in milliseconds between **Expiration Time** and midnight, January 1st, 1970 UTC.

**Correlation ID** - 
An output document property.

**Message ID** - 
An output document property.

**Message Type** - 
An output document property.

**Message Class** - 
An output document property.

**Priority** - 
An output document property.

**Redelivered** - 
An output document property.

**Reply To** - 
An output document property.


## Archiving tab
See the topic [Connector operation’s Archiving tab](../Process%20building/r-atm-Connector_operations_Archiving_tab_061fbf70-1034-4bf3-b795-e952f9338dbe.md) for more information.

## Tracking tab
See the topic [Connector operation’s Tracking tab](../Process%20building/r-atm-Connector_operations_Tracking_tab_8a03f547-738a-448c-bb0f-594bad806cfe.md) for more information.

## Caching tab
See the topic [Connector operation’s Caching tab](../Process%20building/r-atm-Connector_operations_Tracking_tab_8a03f547-738a-448c-bb0f-594bad806cfe.md) for more information.