# Amazon SNS connector 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-2e7e2c10-9a16-4b13-a219-ec7110089ac3"/>
</head>


The Amazon SNS connector makes it easy to work with the Amazon Simple Notification Service by simplifying the interaction and adding convenience.

The connector uses AWS Identity and Access Management (IAM) to authenticate users to Amazon. The Amazon SNS web service manages delivering messages using a publish and subscribe model. In this model, owners create topics and control access to them. Topics are named groups of events or access points. Publishers (called producers) send messages to topics. SNS then matches the topic to a list of subscribers (called clients or consumers) who want to receive notifications on topics of interest.

The connector supports Amazon SNS Mobile Push Notifications using the EXECUTE operation, and by setting a dynamic document property to the SNS-assigned endpoint ARN. Additionally, the connector supports Amazon SNS First-In-First-Out \(FIFO\) topics in the CREATE operation by setting the **Message Deduplication Id** and **Message Group Id** dynamic document properties.

## Connector configuration 

To configure a connector to communicate with Amazon SNS, set up these two components:

-   Amazon SNS connection

-   Amazon SNS operation


This approach creates reusable components that contain connection settings and operation settings. After building your connection and operation, set up your Amazon SNS connector within a process. When you define the process correctly, can map to and from virtually any system using the Amazon SNS connector to retrieve data from or send data to Amazon.

## Supported editions 

The Amazon SNS connector supports the AWS REST API to connect to the SNS service. To learn more, see the [Amazon SNS API Reference](https://docs.aws.amazon.com/sns/latest/api/welcome.html).

## Prerequisites 

To implement a connection to your Amazon SNS account from , ensure you deploy an Atom on your local machine or hosted with and have the following ready:

-   Your AWS access key and AWS secret key.

-   The name of and password to your HTTP proxy server if you plan to use that for authentication.

-   The project name, project ID, project number, and registration ID for each device.


## Document properties \(output\) 

This connector has the following properties for output documents that you can set or reference in various step parameters:



**EndPoint ARN** - 
 \(Execute\) A mobile endpoint to which you send notification messages.

**Message Deduplication Id** - 
  \(Create for FIFO topics\) Use this token for deduplication of a sent message, and is sent to the service. This value helps to avoid duplicate message delivery from the topic.

**Message Group Id** - 
  \(Create for FIFO topics\) The tag specifies that a sent message belongs to a specific message group and sends it to the service. If messages belong to the same message group, processing occurs in FIFO. However, the platform can process messages in different message groups out of order.

