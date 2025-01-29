import OperationEnd from './_operationEnd.md'

# Boomi Atom Queue operation 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-ba5cb28f-a734-4106-845b-e616826e56bf"/>
</head>


The Boomi Atom Queue operation defines what you want to do \(Get, Send, or Listen\) with an Atom message queue.

The Boomi Atom Queue operation supports three types of actions:

-   **Get** — Used to retrieve messages from a message queue.

-   **Send** — Used to send messages to a message queue.

-   **Listen** — Used for event-driven retrieval of messages from a message queue.


## Options tab, Get action 

When you configure a Get action, the following fields appear on the Options tab:



**Timeout \(ms\)** - 
Sets the amount of time, in milliseconds, that the operation will wait to receive documents. The default is 10,000.

The following values have special meanings:

-   0 — The operation will not wait and will receive only the documents in a single message if one is immediately available.

:::note

Resultant behavior cannot be guaranteed when the **Timeout \(ms\)** value is set to 0.

:::

-   -1 — The operation will wait an infinite amount of time to receive documents.


**Minimum number of documents** - 
Sets the number of documents to try to receive within the **Receive Timeout \(ms\)** period. The default is 3. Upon receipt of the specified number of documents, execution of the process proceeds without waiting for the period to expire.

**Consume from Dead Letter Queue? \(Point-to-Point Only\)** - 
If this option is turned on, the connector retrieves a list of dead letters from a Point-to-Point message queue. Dead letters are messages that cannot be delivered successfully to subscribers due to any variety of issues. Programmatic retrieval of dead letters allows you to process these failed messages as you see fit. For example, resubmitting the dead letter to an active queue is an expected use case of this feature.

:::note

When this option is turned on, only dead letters are consumed from the Point-to-Point queue; regular messages are not consumed.

:::

If this option is turned off \(default\), the connector consumes message from the regular queue without checking for dead letters.

## Options tab, Send action 

If the operation is configured with a Send action, document processing concludes with the execution of the Boomi Atom Queue connector step. When you configure a Send action, the following field appears on the Options tab:



**Batch Size** - 
Sets the number of documents to batch in each outgoing message. The default is 5. A value of 0 means all documents will be sent in a single message.

## Options tab, Listen action 


:::note

You can view the status of listener processes that are deployed to an Atom, Molecule, or Atom Cloud to retrieve messages from a message queue by going to the Listeners panel in **Manage** \> **Atom Management**. In that panel, you can also pause, resume, and restart listeners.

:::


:::note

**Known issue** - The LISTEN operation always fails the first document of every batch if any document in the batch fails. The GET operation fails only the offending document but does not affect others in the batch.

:::


**Consume from Dead Letter Queue? \(Point-to-Point Only\)** - 
If this option is turned on, the connector retrieves a list of dead letters from a Point-to-Point message queue. Dead letters are messages that cannot be delivered successfully to subscribers due to any variety of issues. Programmatic retrieval of dead letters allows you to process these failed messages as you see fit. For example, resubmitting the dead letter to an active queue is an expected use case of this feature.


:::note

When this option is turned on, only dead letters are consumed from the Point-to-Point queue; regular messages are not consumed.

:::

If this option is turned off \(default\), the connector consumes message from the regular queue without checking for dead letters.

**Maximum Concurrent Executions** - 
If you send hundreds of messages to the queue, hundreds of Integration processes are executed. This could cause the Atom to run out of memory and crash.

Set this value to limit the number of concurrent Boomi Atom Queue listener processes.

For Molecules, this limit is per node in a cluster.

-   If you set this field to a value less than or equal to zero, an unlimited number of Boomi Atom Queue listener processes can be executed in parallel and messages are not sent to the Dead Letter Queue.

-   If you set this field to a value greater than zero, then up to that many Boomi Atom Queue listener processes can be run simultaneously. The listener starts this number of Boomi Atom Queue listener instances, all listening on the same queue. The listeners wait until a process completes before consuming the message. If a process fails, the message is not consumed and the process is retried six times; the process is placed in the Dead Letter Queue on the seventh failed retry. You should not set this value to a large number because doing so consumes additional messaging resources.

:::note

For performance reasons, listeners will reserve messages. This may result in reading less messages at once than the value you set in **Maximum Concurrent Executions**. For example, if 2 out of 20 messages are being processed, the remaining 18 messages are unavailable to other listeners. This occurs when the same listeners currently processing messages are reserving the remaining messages.

:::

**Exclusive Consumer?** - If selected, only a single listener node in a Molecule or Atom Cloud processes messages. If that node fail, a new listener automatically begins processing messages on a different node.

To receive first-in, first-out \(FIFO\) processing of messages across nodes, set the **Maximum Concurrent Executions** value to **1**. FIFO is not guaranteed on Molecules and Atom Clouds.

This check box is disabled if **Maximum Concurrent Executions** is set to a value other than 1.

:::note

Test mode does not support real-time triggering and, therefore, cannot be used with listener processes.

:::

<OperationEnd />