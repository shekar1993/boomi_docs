# Amazon SQS connector 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-472dd203-124a-4878-8250-79c8496c702b"/>
</head>


The Amazon SQS connector makes it easy to work with Amazon SQS by simplifying the interaction and adding convenience.

Amazon Simple Queue Service is a distributed message queuing service that stores messages as they travel between applications for which Amazon provides servers. The connector uses AWS Identity and Access Management \(IAM\) to authenticate users to Amazon. The connector supports both Amazon SQS standard queues and FIFO \(First-In-First-Out\).

## Connector configuration 

To configure a connector to communicate with Amazon SQS, set up these two components:

-   Amazon SQS connection
-   Amazon SQS operation

This approach creates reusable components that contain connection settings and operation settings. After building your connection and operation, set up your Amazon SQS connector within a process. When you define the process properly, Integration can map to and from virtually any system using the Amazon SQS connector to retrieve data from or send data to the Amazon Simple Queue Service.

## Prerequisites 

To implement a connection to your Amazon SQS account from Integration, ensure you have the following:

-   Have an Atom deployed on your local machine or set up in an Atom Cloud.
-   Your AWS access key and AWS secret key.
-   ListQueues and GetQueueUrl permissions for your account.

:::note

You can retrieve the queue and connect successfully without your account having the GetQueueUrl and ListQueues permissions. To circumvent the permissions, manually specify the queue URL when browsing an operation \(**Import Wizard**\), or using the **Queue Name/Url** document property.

:::


## Document properties \(input\) 

This connector has the following properties for input documents that you can set or reference in various step parameters:



**Message Group Id** - 
  \(Send for FIFO queues\) The tag specifies that a message belongs to a specific message group. Processing messages that belong to the same message group uses a FIFO manner. However, processing messages in different message groups can occur out of order.

**Message Deduplication Id** - 
 \(Send for FIFO queues\) The token you use for the deduplication of a sent message.

**Queue Name/URL** - 
 \(Send, Delete, Receive\) Applicable when selecting **Dynamic Queue** as the Object Type when browsing. For Receive, it reads the value from the first input document. The unique queue name \(starting with http:// or https://\) is specified when creating the message queue. It requires GetQueueUrl permissions only when you provide a queue name, in which case the connector sends a request to the endpoint to get the full URL.

**Receive Request Attempt Id** - 
 \(Receive for FIFO queues\) The token you use for deduplication of a received message. The value is read from the first input document. If a networking issue occurs after receiving a message and you receive a generic error rather than a response, you can retry the same action with the same Receive Request Attempt Id. This retrieves the same set of messages, even if their Visibility Timeout did not expire.

## Document properties \(output\) 

This connector has the following properties for output documents that you can set or reference in various step parameters:



**Queue Name/Url** - 
 \(Send, Delete, Receive, Listen\) The unique queue URL \(starting with http:// or https://\) of the Amazon SQS queue from which you send or receive messages.

**Message Deduplication Id** - 
This property is applicable for Send, Receive, and Listen.

-   \(Send for FIFO queues\) The token used for deduplication of a sent message.
-   \(Receive and Listen for FIFO queues\) The token used for deduplication of a received message.

**Message Group Id** - 
 This property is applicable for Send, Receive, and Listen.

 -   \(Send for FIFO queues\) The tag specifies that a sent message belongs to a specific message group. Processing messages belonging to the same message group are in a FIFO manner. However, the processing messages in different message groups can occur out of order.
 -   \(Receive and Listen for FIFO queues\) The tag specifies that a received message belongs to a specific message group. Processing messages belonging to the same message group are in a FIFO manner. However, processing messages in different message groups can occur out of order.

**Message Id** - 
 \(Receive, Listen\) A system-identifier for a message assigned by Amazon SQS.

**Receipt Handle** - 
 \(Receive, Listen\) The receipt handle is associated with the message to delete. The receipt handle is related to the action of receiving a message, not to the message itself. If you receive a message more than once, you get a different receipt handle each time.

**Sequence Number** - 
 \(Receive, Listen\) Applies only to first-in, first-out \(FIFO\) queues. A large, non-consecutive number that Amazon SQS assigns to each message. Receive includes the Sequence Number only when you select the **Return Sequence Number** option in the operation.
