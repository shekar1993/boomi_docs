import OperationEnd from './_operationEnd.md'
import TrackingDirection from './_TrackingDirection.md'
import ReturnErrRes from './_ReturnResponse.md'

# Amazon SQS operation 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-55ee2047-aa06-4e8c-972c-0fd8897be144"/>
</head>


The Amazon SQS operation defines how to interact with your Amazon SQS account.

The operation represents a specific action performed against a particular Amazon SQS message. Create a separate operation for each action and object combination required for your integration. Because Amazon SQS is a distributed web service application with decoupled components, it stores messages on multiple servers. As a result, you might receive messages differently than documents from other connectors. For example, if you remove a message while a server is unavailable, the message might not be removed or resent.

The Amazon SQS operation supports the following actions:

-   **Delete** — delete messages from a queue.

-   **Receive** — receive messages from a queue.

-   **Send** — send messages to a queue.

-   **Listen** — listen for and retrieve messages from a queue.


## Browsing queues and dynamic queues 

When using the **Import Operation** wizard to browse, the connector lists all of the queue resources available for the account in the **Object Type** drop-down list. Choose a specific queue to perform an action. You can also use the **External Queue URL** field when browsing to manually enter a valid Queue URL starting with http:// or https:// and in the format:

`https://sqs.{your_region}.amazonaws.com/{your_account_number}/{your_queue_name}`

For example, `https://sqs.us-east-2.amazonaws.com/1234567890/YourTestQueue`

By manually specifying the **Queue URL** for the operation, you ensure the connector retrieves the queue URL and the connection is successful by circumventing the account not having the GetQueueURL and ListQueues permissions.

One additional option, **Dynamic Queue**, is available for Send, Delete, and Receive operations to indicate that you want to dynamically provide the queue name or URL using the **Queue Name/URL** document property.

-   Send and Delete — The connector uses the URL provided in the document property, rather than getting the URL from the service. If you specify the queue name, the connector also gets the URL from the service.
-   Receive — The connector uses the document property value from the first input document as the queue name in the request. If you do not provide a value, the operation is not successful.

## Configuring server-side encryption \(SSE\) for an Amazon SQS queue 

You can use Amazon SQS to enable and configure server-side encryption \(SSE\) to protect and encrypt the messages arriving and received in a queue. SSE helps to prevent data and information from being stolen if the security of your server is compromised. To enable SSE for a queue, follow the instructions in the [Amazon tutorial](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-configure-sse-existing-queue.html).

## Options tab 

Click **Import Operation**, then use the Import wizard to select the object to integrate. The wizard imports the request and response profiles for the selected action. When you configure an action, the following fields appear on the **Options** tab:



**Object** - 
 An object defines the Amazon SQS queue to which you perform an action. You specify the object when browsing \(**Import Operation** wizard\).

:::note 

The Queue Name can now be imported dynamically across all operations. This is to allow for importing queues that you may not have a connection to browse. 

:::
**Request Profile \(Delete\)** - 
 The XML profile component representing the XML structure the connector sends.

**Response Profile \(Delete, Send, Receive, Listen\)** - 
 Select or add an XML profile component representing the XML structure that the connector receives. For Receive and Listen, the outgoing data is a raw and unstructured document, and is not limited to a predefined format.

<TrackingDirection />

<ReturnErrRes />

**Delay Seconds** \(Send\) - 
 The number of seconds, from 0 to 900 \(15 minutes\), to delay sending messages in a queue. A delay queue makes messages unavailable to consumers after adding them to the queue. The message becomes available for processing when reaching the delay time \(the **Delay Seconds** value\). When not provided, it uses the default value for the queue.

**Maximum Message Count \(Receive, Listen\)** - 
The maximum message count for the Amazon SQS queue.

 -   Receive
        -   Specify the maximum number of messages to return from the queue. Enter any positive number \(the default is 1\).
        -   Enter -1 to return all available messages.
        -   If you enter a value greater than 10, the connector attempts to return more than 10 messages from the queue by making additional calls to Amazon SQS until it returns all messages. Amazon SQS does not guarantee that a single request will return all requested messages.

 -   Listen
        -   Specify the maximum number of messages \(between 1 and 10\) to return from the queue. The operation does not return more messages than the specified value.
        -   If you do not provide a value, the maximum is 10 messages.
        -   If you enter a value outside the range, the operation is not successful.

**Execution Timeout** \(Receive\) - 
  \(Optional\) The maximum run time \(in seconds\) that the connector waits until it stops returning messages. When it reaches this maximum, the connector stops returning messages even if it does not return the **Maximum Message Count**. If you leave this field blank, the operation does not receive more than 10 messages, even if you specify a value greater than 10 in the **Maximum Message Count** field.

**Visibility Timeout \(Receive, Listen\)** - 
 Specify the time \(in seconds, with a maximum of 12 hours, or 43,200 seconds\) during which messages are hidden from subsequent retrieve requests so they cannot be processed again. For Receive, ensure you enter a value greater than the **Execution Timeout**. It uses the queue's default time-out if you do not provide a value. Use this option to ensure that processing is complete before expiration.

**Wait Timeout** \(Receive\) - 
 A single Receive operation makes several calls to return messages from the queue. Enter the time \(from 0 to 20 seconds\) that a single call waits for the message to arrive before returning the message. If one is available during this time, the connector returns the message.

**Delete Messages** \(Receive\) - 
 If selected, all read messages are deleted together in a single call instead of individually in separate Delete operations after processing. You must select this option to return all messages from a FIFO queue.

**Return Sequence Number** \(Receive\) - 
 If selected, it attaches a **Sequence Number** document property to all returned messages.

**Polling Interval \(Listen\)** - 
 Specify how often \(in milliseconds\) the operation polls the SQS API to retrieve batches of messages.

 -   If you do not provide a value, the operation waits 10000 ms \(10 seconds\).
 -   If you enter a value less than 1, the operation is not successful.

**Maximum Concurrent Executions \(Listen\)** - 
 Specify the maximum number of process runs that are allowed to run simultaneously. After reaching this number, it does not make any further message requests until it processes at least one. If you do not provide a value, the operation allows one run.

**Commit Strategy \(Listen\)** - 
Specify how to handle the receipt and acknowledgment of messages.

 -   At least once — \(Default value\) Acknowledge message receipt after being successfully processed by deleting the messages from the queue. The messages are no longer available in the queue, even after their **Visibility Timeout** expires. If the process is not successful, the **Visibility Timeout** is set to zero for all messages in the batch, and they are immediately available for processing again.
  -   Process-managed — Do not perform any action on messages upon the process run. The messages remain locked until their **Visibility Timeout** expires, or another action occurs.

## Delete 

Amazon SQS does not automatically delete messages received from the queue. You can receive a message even after deleting it, if one of the servers storing a copy of the message is unavailable when you send the delete request.

## Receive 

This operation can receive any number of messages from Amazon SQS, and you can use the **Maximum Message Count** and **Execution Timeout** fields to control the number received.

#### Short and long polling

By default, Amazon SQS uses short polling, which queries only a subset of the servers to determine whether any messages are available to include in the response. Long polling, which allows a wait period until a message is sent, reduces the number of empty responses, eliminates false empty responses, and returns messages as soon as a message becomes available. To disable short polling and enable long polling, set **Wait Timeout** to a value greater than 0. **Visibility Timeout** makes messages unavailable to consumers for a specific period of time.

#### Document properties

When receiving messages from a FIFO queue, this operation returns a payload and the following document properties:

-   Message Deduplication Id
-   Message Group Id

## Send 

This operation uses the Queue Name \(queueName\) and current connection to compose a queueURL. The operation returns a payload and the following document properties:

-   Queue Name/Url
-   Message Deduplication Id \(FIFO queues\)
-   Message Group Id \(FIFO queues\)

#### Sending messages in batches

The operation can send messages in batches, and a single batch can send many messages. The maximum individual message size and the maximum total payload size \(the sum of all the individual lengths of all the batched messages\) is 256 KB.

#### Sending message attributes in documents

The operation can send message attributes \(up to 10\) in documents using dynamic document properties in the format `<AttrName>=<AttrValue>`. The operation can receive message attributes that appear as dynamic document properties.

## Listen 

Listen retrieves and processes messages from Amazon SQS standard queues and FIFO queues. The operation creates a batch containing all messages from the queue and submits a process with the collection of documents as input. It also retains the message order. If a request does not return any messages \(the response is empty\), it does not submit a process.

:::info Attention

The listener runs in an Atom, Molecule, or Atom Cloud. Atom workers are required for Listen operations to run in an Atom Cloud. Ensure you add Atom workers to your account, otherwise the listener does not have anywhere to run. If you need to add an Atom Worker to your account, you can request one by contacting Boomi Support.

:::

The connector does not wait for a submitted process to complete before requesting more messages and submitting a new process. The next message request does not occur until the specified **Polling Interval**. If the number of active processes is more than the specified **Maximum Concurrent Executions**, no new requests are performed until an active process completes and another is available.

:::note

If a request for messages is not successful, an error appears in **Process Reporting** as a failed run.

:::

### Prerequisites

Before creating an Amazon SQS listener and using it in a process, verify the following prerequisites:

-   Create a connection to your Amazon SQS account.
-   If you do not have permissions to list queues, ensure you know the **External Queue URL** so you can enter it when browsing \(**Import Wizard**\). Otherwise, you can select the queue when browsing.

### Preset configuration

Listen provides preset configuration for the following:

-   Wait Time-out — All requests have a fixed wait time-out of 20 seconds. If messages are not available after 20 seconds, the server sends an empty response. The listener does not submit processes if messages are not available.
-   Singleton Listener — Disabled. The listener starts on all nodes in the environment where the listener is deployed.

:::info Attention

You can determine if the listener should operate in singleton mode. In singleton mode, the connector can complete singleton Listen operations. With singleton listen operations, connector deployments in a multi-node or private cloud environment result in a single instance of a listener, preventing duplicate messages from being processed.

:::


### Resource management

-   When the listener starts or resumes, two threads are started in the Java Virtual Machine \(JVM\). The first is for polling, and the second manages completed runs.
-   If pausing or stopping the listener, it stops the two threads. However, it does not perform further requests against the service.

### Listen output documents

Listen returns an unstructured output binary document containing the message from the specified queue.

### Document properties

When receiving messages from a FIFO queue, this operation returns a payload and the following document properties:

-   Message Deduplication Id
-   Message Group Id


