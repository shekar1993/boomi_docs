# JMS v2 connector 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-c8117b18-8913-4263-8ffa-c0ab9433c9da"/>
</head>


Use the JMS v2 connector to work with either JMS v1.1 or 2.0 to send and receive messages from JMS queues or topics. The JMS v2 connector supports transactions, durable/nondurable topic subscriptions, configurable receive timeouts, message selectors, and custom message properties.

:::note

This is an open source connector and you can access the code in the [JMS v2](https://bitbucket.org/officialboomi/jms-v2) connector repository.

:::

To set up the connector, you must obtain your JMS provider’s JAR files and place those files in the appropriate directory. You can do that in one of two ways:

-   Upload the JAR files into your Integration account library \(**Setup** \> **Account Libraries**\), add those files to a Custom Library component, and deploy the component to the appropriate Atom, Molecule, Atom Cloud, or environment.

    For JAR files that support a connector, you create a Custom Library component with a type of Connector and select a connector type — in this case, JMS v2. When you deploy the component, the JAR files that it references are deployed to the `/<installation_directory>/userlib/jms` directory. If the `userlib/jms` directory does not exist, Integration creates it.

-   Load the JAR files manually into the appropriate directory of a local Atom, Molecule, or private Atom Cloud. After you load the JAR files, a restart is required.

    Any driver files that you load manually must be copied into the `/<installation_directory>/userlib/jms` directory. If the `userlib/jms` directory does not exist, you must create it.


:::note

- Uploaded or imported files are first passed through a virus scanner. If a virus is detected, the upload or import results in an error and the file is rejected. Contact Boomi Support if an error persists.

:::

Make sure that the Atom can reach the /userlib/jms directory \(the permissions are correct\). The JMS v2 connector inspects this directory and uses any JAR files it finds there.

## Connector configuration 

To configure a connector to communicate with your JMS provider, set up two components:

-   JMS v2 connection
-   JMS v2 operation

This design provides reusable components, which contain connection settings such as user name, password, etc. After building your connection and connector operation, set up your connector within a process. When you have properly configured your connector within your process, Integration can map to and from virtually any system using the JMS v2 connector to send and receive data from your JMS provider.

## Supported editions 

The JMS v2 connector works with both JMS v1.1 and v2.0 to send and receive messages from JMS queues or topics. 

## Tracked properties
This connector has the following tracked
properties that can be set or referenced in various
step parameters. You can define a maximum of
20 tracked fields, and each tracked field's value is
limited to 1000 characters. If the tracked field's
value is longer than 1000 characters, when
creating and storing the value, the platform
truncates the value. See the topic [Document Tracking](../Integration%20management/c-atm-Document_Tracking_bf2f68f0-a8b1-4efc-8726-424341acaccc.md) for more information.

**Correlation ID** - 
The value of the JMSCorrelationID header field. 
the JMS Correlation ID to link one message with another.

**Custom Properties** - 
An overridable operation property allowing users to set custom properties to include in sent messages with key/value pairs.

**Destination** - 
The value of the JMSDestination header field which defines the name of the destination to which the message was sent.

**Expiration Time** - 
A tracked property that represent the time in milliseconds between **Expiration Time** and midnight, January 1st, 1970 UTC.

**Message ID** - 
The value of the JMSMessageID header field which uniquely identifies each message sent by a provider.

**Message Type** - 
The value of the JMSType header field which is used for freestyle text, such as Invoice or Order. The field does not reference the Message Type selected in the JMS Send operation.

**Message Class** - 
The value, which is set upon completion of a Get/Listen operation, contains one of three message classes corresponding to the message types currently supported: BytesMessage, TextMessage, and MapMessage. The Message Class tracking property routes process logic to the branch logic to handle the specific class of message received.

To process a received message as a MapMessage, set the Document Property Message Class to MapMessage. MapMessage supports the Java primitive data types \(Byte, Short, Integer, Long, Float, Double, Character, String, Boolean\), which are case-sensitive, and the byte \[ \] array. The input values should be compatible with the Java type.valueOf\(String input\) method; however, the byte array is a Base64 encoded sequence.

**Priority** - The value of the JMSPriority header field. There are 10 priority values \(0 is the lowest, 9 is the highest\).

**Redelivered** - The value of the JMSRedelivered header field which indicates that the message was delivered earlier, but its receipt was not acknowledged at that time.

**Reply To** - The value of the JMSReplyTo header field which indicates a topic or queue where the reply to the current message should be sent.
