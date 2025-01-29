# Message queue management 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-e5b4294d-f3eb-48bd-83ac-809c963dc4c5"/>
</head>


Queue management actions are allowed on an Atom’s message queues if the account that you are using owns the Atom, Molecule, or Atom Cloud.

The following management actions are the ones that you can perform on an Atom’s message queues as an owner:

- View the messages in a message queue.

- View a message queue’s dead letters.

- Resend all or selected dead letters to the associated message queue.

- Clear all or selected messages from a message queue.

- Clear all or selected dead letters from a dead letter queue.

- Delete selected enqueued messages or dead letters

- Delete a selected message queue.


You request these actions from the Queue Management panel, which is accessible from the Atom Management page \(**Manage** \> **Atom Management**\).

:::note
Currently there are not any supported actions specifically for managing *expired* messages.
:::

## Dead letter queues 

Dead letter queues contain undeliverable messages. Each ordinary message queue can have one associated dead letter queue.

Message delivery failure commonly occurs because of

- network failure

- purging of referenced documents

- general message processing failure


When a failure occurs, the shared queue server will attempt to redeliver the message up to six more times, in intervals of 1, 2, 3, 5, 8, and 24 seconds. After six failures the message is sent to the appropriate dead letter queue. If the dead letter queue does not yet exist it is automatically created.

You should periodically analyze the contents of dead letter queues to identify the reasons for delivery failures.

If messages make it to the dead letter queue, they can be retried at a later time manually by an administrator. However, it is not recommended to rely on this capability.

:::note
Message queuing, by nature, provides a level of resiliency for your system. The redeliver strategy adds additional resiliency in case of execution failures. The dead letter queue captures messages that fail beyond those measures and even allows messages to be replayed, adding more resiliency. However, you should not rely this on as a replacement of a more persistent mechanism. Messages should not be delivered to the dead letter queue as part of normal system operation but rather should be considered a system failure every time a message gets as far as the dead letter queue. It should not be necessary for an operator to regularly use the DLQ to resend failed messages. 
:::