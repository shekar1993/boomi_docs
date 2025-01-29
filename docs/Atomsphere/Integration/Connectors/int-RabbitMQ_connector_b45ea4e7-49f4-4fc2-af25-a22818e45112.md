# RabbitMQ connector 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-e6a9c29a-8568-4907-b01c-10a796ca7ffb"/>
</head>


The RabbitMQ connector allows you to send messages to an exchange, consume messages from RabbitMQ queues, and listen for messages in a queue in exchanges.

RabbitMQ, based on the Advanced Message Queuing Protocol (AMQP), is a general purpose, open source message broker that sends messages to a queue. For example, banking and financial industries use RabbitMQ to connect critical systems in telecommunications, defense, manufacturing, internet and cloud computing, and more. Every day, it publishes and retrieves millions of messages to ensure that it keeps worldwide mission-critical systems current so transactions are accurately and successfully processed. Additionally, information technology vendors use RabbitMQ for complex event processing to analyze user-defined metrics for root cause diagnostics.

## Connector configuration 

To configure the connector to communicate with the RabbitMQ server and consume, publish, and listen for messages, set up two components:

-   RabbitMQ connection
-   RabbitMQ operation

This design provides reusable components that contain connection settings and operation settings. After building the connection and operation, set up the RabbitMQ connector within a process. If you define the process correctly, Integration can map to and from virtually any RabbitMQ server using the connection to retrieve or send data to RabbitMQ.

## Supported editions 

The connector supports all versions of the AMQP 0-9-1 protocol.

## Prerequisites 

To use the connector and implement a connection to your RabbitMQ account from Integration, do the following:

-   Have a local Atom or an Atom Cloud set up on your local machine or hosted with Integration.

-   Have your RabbitMQ account user information available, as well as information associated with the RabbitMQ server, such as host and port numbers.

-   Establish a RabbitMQ Portal account.

-   Create the RabbitMQ Exchange/Queue to send, receive, and listen for messages from the RabbitMQ server.


## Tracked properties 

This connector has the following tracked properties that you can set or reference in various step parameters. Use input document properties to override any properties defined in a RabbitMQ operation.

**Exchange \(input and output\)** - 
\(Publish, Consume, Listen\) The name of the exchange used to route messages to zero or more queues \(Publish\). For Consume and Listen, the exchange routes messages to only one queue. If you do not specify the exchange , the connector uses the default exchange. Use this property to override an **Exchange** specified in the Publish operation.

**Routing Key \(input and output\)** - 
\(Publish, Consume, Listen\) The name of the attribute defined within a binding or message used for routing messages based on the configuration of an exchange. Use this property to override a **Routing Key** specified in the Publish operation.

**User ID \(output only\)** - 
 \(Consume, Listen\) The user name of the publisher that sends the message.

**Priority \(input and output\)** - 
\(Publish, Consume, Listen\) The numeric value \(0-9\) used to indicate the priority of a message. Messages with a priority higher than the queue's maximum are treated as if they were published with the maximum priority.

**Message ID \(input and output\)** - 
\(Publish, Consume, Listen\) The identifier of the application message.

**App ID \(input and output\)** - 
\(Publish, Consume, Listen\) The identifier of the application.

**Correlation ID \(input and output\)** - 
 \(Publish, Consume, Listen\) The identifier of the message that the reply message is correlated with.

**Type \(input and output\)** - 
 Publish, Consume, Listen\) The type of message to be sent in the exchange.

**Reply To \(input and output\)** - 
 \(Publish, Consume, Listen\) The name of the reply queue, or any identifier in which to direct the response.

**Content Type \(input and output\)** - 
 \(Publish, Consume, Listen\) The type of MIME content used in the message payload.

**Content Encoding \(input and output\)** - 
 \(Publish, Consume, Listen\) The MIME content encoding of the message payload.

**Expiration \(input and output\)** - 
  \(Publish, Consume, Listen\) The Expiration property determines the Time to Live (TTL) for a message.

**Cluster ID \(output only\)** - 
 \(Consume, Listen\) The identifier used to route clusters in the queue.

**Timestamp** - 
 \(Publish, Consume, Listen\) The timestamp identifier attached to messages entering the broker.

**Delivery Mode \(input and output\)** - 
 \(Publish, Consume, Listen\) The property that determines if a message is persistent or non-persistent. Set the value to 1 to mark messages as non-persistent, or to 2 to make messages persistent. The output value can be NULL if you did not specify the delivery mode when publishing the message.

**Redeliver \(output\)** - 
 \(Consume, Listen\) The property that determines if a message was previously delivered and queued, due to a consumer not being able to process a delivery immediately. Set the value to true to mark messages as previously delivered and queued.

**Delivery Tag \(output\)** - 
  \(Consume, Listen\) The property \(positive integer\) that uniquely identifies the message delivery on a channel. It scopes delivery tags per channel, and deliveries must be acknowledged on the same channel on which they were received. Acknowledging on a different channel results in an unknown delivery tag protocol exception and closes the channel.