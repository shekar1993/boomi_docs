# JMS (Legacy) connector 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-36845ff8-14c4-444c-94ad-e96b905022f2"/>
</head>

:::info Important

This connector has been put into [Legacy status](../../Platform/atm-Feature_release_stages_00d83b66-e5db-4038-8398-fcaead4be12d.md). It is still supported, but will only receive critical security fixes. We encourage you to adopt the newest version (V2) of this connector in order to take advantage of the latest features Boomi Connectivity has to offer.

:::

Use the JMS (Legacy) connector to work with any JMS \(v1.1\) messaging provider to send and receive messages from JMS queues or topics. The JMS (Legacy) connector supports transactions, durable/nondurable topic subscriptions, configurable receive timeouts, message selectors, and custom message properties.

To set up the connector, you must obtain your JMS provider’s JAR files and place those files in the appropriate directory. You can do that in one of two ways:

-   Upload the JAR files into your Integration account library \(**Setup** \> **Account Libraries**\), add those files to a Custom Library component, and deploy the component to the appropriate Atom, Molecule, Atom Cloud, or environment.

    For JAR files that support a connector, you create a Custom Library component with a type of Connector and select a connector type — in this case, JMS. When you deploy the component, the JAR files that it references are deployed to the `/<installation_directory>/userlib/jms` directory. If the userlib/jms directory does not exist, Integration creates it.

-   Load the JAR files manually into the appropriate directory of a local Atom, Molecule, or private Atom Cloud. After you load the JAR files, a restart is required.

    Any driver files that you load manually must be copied into the `/<installation_directory>/userlib/jms` directory. If the userlib/jms directory does not exist, you must create it.



:::note

Uploaded or imported files are first passed through a virus scanner. If a virus is detected, the upload or import results in an error and the file is rejected. Contact Boomi Support if an error persists.

:::

Make sure that the Atom can reach the /userlib/jms directory \(the permissions are correct\). The JMS (Legacy) connector inspects this directory and uses any JAR files it finds there.

## Connector configuration 

To configure a connector to communicate with your JMS provider, set up two components:

-   JMS (Legacy) connection
-   JMS (Legacy) operation

This design provides reusable components, which contain connection settings such as user name, password, etc. After building your connection and connector operation, set up your connector within a process. When you have properly configured your connector within your process, Integration can map to and from virtually any system using the JMS (Legacy) connector to send and receive data from your JMS provider.

## Supported editions 

The JMS (Legacy) connector works with any JMS \(v1.1\) messaging provider to send and receive messages from JMS queues or topics.

## Tracked Properties

This connector has the following tracked
properties that can be set or referenced in various
step parameters. You can define a maximum of
20 tracked fields, and each tracked field's value is
limited to 1000 characters. If the tracked field's
value is longer than 1000 characters, when
creating and storing the value, the platform
truncates the value. See the topic [Document Tracking](../Integration%20management/c-atm-Document_Tracking_bf2f68f0-a8b1-4efc-8726-424341acaccc.md) for more information.


**Correlation ID** - 
The value of the JMSCorrelationID header field. Use the JMS Correlation ID to link one message with another.

**Destination** - 
The value of the JMSDestination header field which defines the name of the destination to which the message was sent.

**Message ID** - 
The value of the JMSMessageID header field which uniquely identifies each message sent by a provider.

**Message Type** - 
The value of the JMSType header field which is used for freestyle text, such as Invoice or Order. The field does not reference the Message Type selected in the JMS Send operation.

**Message Class** - 
The value, which is set upon completion of a Get/Listen operation, contains one of three message classes corresponding to the message types currently supported: BytesMessage, TextMessage, and MapMessage. The Message Class tracking property routes process logic to the branch logic to handle the specific class of message received.

To process a received message as a MapMessage, set the Document Property Message Class to MapMessage. MapMessage supports the Java primitive data types \(Byte, Short, Integer, Long, Float, Double, Character, String, Boolean\), which are case-sensitive, and the byte \[ \] array. The input values should be compatible with the Java type.valueOf\(String input\) method; however, the byte array is a Base64 encoded sequence.

**Priority** - 
The value of the JMSPriority header field. There are 10 priority values \(0 is the lowest, 9 is the highest\).

**Redelivered** - 
The value of the JMSRedelivered header field which indicates that the message was delivered earlier, but its receipt was not acknowledged at that time.

**Reply To** - 
The value of the JMSReplyTo header field which indicates a topic or queue where the reply to the current message should be sent.