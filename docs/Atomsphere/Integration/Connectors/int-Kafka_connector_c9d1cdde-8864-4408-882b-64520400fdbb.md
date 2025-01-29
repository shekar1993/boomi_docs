# Kafka connector

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-45b60738-72c3-4ee4-9077-5b96738742c9"/>
</head>


Apache Kafka is a distributed streaming platform, and the Kafka connector allows you to interact with the Kafka messaging system by sending and receiving messages from Kafka topics.

Kafka is for distributed high-throughput systems, which you can use to build real-time streaming data pipelines that reliably share data between systems or applications. You can create real-time streaming applications that transform or react to data streams. Kafka works well as a replacement for more traditional message brokers. Compared to other messaging systems, Kafka has better throughput, built-in partitioning, replication, and inherent fault tolerance. As a result, Kafka is a good fit for large-scale message-processing applications.

## Connector configuration 

To configure the connector to communicate with the Kafka server and perform Produce, Consume, Commit Offset, and Listen operations from a Kafka topic, set up two components:

-   Kafka connection
-   Kafka operation

This design provides reusable components, which contain connection settings and operation settings. After building the connection and operation, set up the Kafka connector within a process. When you configure the connector properly within a process, Integration can map to and from virtually any Kafka server using the Kafka connection to retrieve data from, or send data to Kafka.

## Supported editions 

-   Boomi tested the Kafka connector with the Kafka server version 2.1.1. Kafka runs as a cluster of one or more servers that can span multiple datacenters.
-   The Kafka connector uses a customized version of the Apache Kafka Client 3.2.1. You cannot change the version.

## Microsoft Azure Event Hubs integration 

The Kafka connector is delivered with out-of-the-box support for Microsoft Azure Event Hubs, providing an alternative to running your own Kafka cluster. The Kafka connector is compatible with the Kafka endpoint that Event Hubs provides, and with minimal configuration, you can set up the connector to produce and consume messages.

## Amazon Managed Streaming for Apache Kafka \(Amazon MSK\) integration 

Delivers the Apache Kafka connector with out-of-the-box support for Amazon MSK. Boomi tests the Kafka connector against it and is compatible with the Amazon MSK service. You can use Amazon MSK to create clusters that use Apache Kafka versions 1.1.1, 2.2.1, and newer. You can set up the connector with minimal configuration to produce and consume messages to the cluster.

## Prerequisites 

To implement a connection to your Kafka account from Integration, ensure you deploy an Atom on your local machine or hosted with Integration and have the following:

-   Connectivity from the Kafka host to all Kafka and Zookeeper servers in the cluster containing the targeted topics.
-   Topics created in Kafka to send and receive messages from the server.
-   When using Kerberos \(GSSAPI\) to authenticate:
    -   Ask your Kerberos administrator for a service principal for each Kafka broker in your cluster and for every operating system users access Kafka with Kerberos \(GSSAPI\) authentication.
    -   Verify that it can reach all hosts using hostnames. It is a Kerberos requirement that all hosts must resolve with their fully-qualified domain names.
    -   Verify that a krb5.conf resource file is available to the connector by uploading the JAR file as a Custom Library.
    -   If you do not set a password in the connection, verify that a `{realm}.keytab` resource file is available to the connector by uploading the file as a Custom Library. This file must provide valid credentials for the Service Principal in the connection.


:::note

The realm component of the keytab resource file is the last component of the Client Principal. See the **User Name/Client Principal** field description in the connection topic for more information.

:::

## Document properties 

This connector has the following document properties that you can set or reference in various step parameters.

**Message key** - 
\(Optional\) The key associated with the given document. Kafka uses the key to determine which partition stores the message.

**Topic name** - 
The name of the topic that consumes or produces the message. If the topic indicated in this document property does not exist, the document returns an error.

## Container properties 

The following properties allow the runtime \(Atom, Molecule, or Atom Cloud\) owner to control the amount of memory that the Kafka connector uses while retrieving and storing messages in memory before processing. Using memory is helpful for a Cloud owner to ensure that a single tenant or account does not overwhelm the container by consuming very large or too many messages simultaneously. 

**com.boomi.connector.kafka.max.request.size** - 
 \(Consume, Produce, Listen operations\) The property kafka.max.request.size indicates the maximum amount of data the server returns per request. It also represents the Maximum Message Size in bytes. The default value is 10,485,760 \(10 MB\).

 For **Produce** operations, the document returns an error if the message size is larger than the indicated value.

 For **Consume** operations, if the message size is larger than the indicated value of the container property, the connector responds depending on the selection of the Autocommit option:

-   If you select the Autocommit option, the operation returns an application error, but includes the Offset, Partition, and Topic Name as tracked properties and continues to retrieve the remaining messages.
 -   If you do not select the Autocommit option, the operation returns an application error, but includes the Offset, Partition, and Topic Name as tracked properties and stops retrieving messages. In this scenario, you also need to commit the application error with the other messages.

 For **Listen** operations, this property defines the maximum size of batch data that the server returns in a single request to the connector. If the broker returns a message larger than this value, the operation fails.

**com.boomi.connector.kafka.max.poll.records** - 
\(Consume operation\) The property, kafka.max.poll.records, indicates the maximum amount of records returned by a single poll to the broker. The default value is 1.

 
:::note

The Consume operation polls for messages in a loop until reaching at least the value specified for **Minimum Number of Messages** in the operation. By default, each poll returns 1 message. If you configure this setting to return many records, you can increase the property value and improve performance. The container property takes precedence over the operation value.

Changing the container property can lead to situations where the operation returns a number of records greater than the value set in the operation. For example, setting the container property to 3 and the **Minimum Number of Messages** in the operation to 5 causes the operation to poll the topic twice, resulting in 6 returned messages. If you set the container property to a value greater than **Minimum Number of Messages**, the operation polls only once, effectively returning more messages than the value configured in the operation.

:::
