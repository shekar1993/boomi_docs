# Mail \(IMAP\) connector 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-371ab17e-6e70-4439-b79d-2eb81bb206ad"/>
</head>


Use the Mail \(IMAP\) connector to send email messages and attachments to an email server that supports SMTP. You can also retrieve email messages and attachments from any mail server that supports the IMAP protocol.

The IMAP protocol is the most commonly-used protocol to retrieve email messages through a web browser, and email clients such as Gmail, Microsoft Outlook, and Yahoo! Mail provide support for the protocol. There are many benefits to using the Mail \(IMAP\) connector in a process instead of the legacy Mail connector, including the following:

-   Manage a mailbox from multiple devices in any location.
-   Retrieve email messages and attachments from a specific folder in a mailbox.
-   Archive and move email messages from one folder to another.
-   Support for cc and bcc addresses.
-   Improved security with TLS.

## Connector configuration 

To configure the Mail \(IMAP\) connector to send and retrieve email messages, set up these two components:

-   Mail \(IMAP\) connection. The connection supports Basic Authentication and OAuth 2.0 authentication for the Authorization Code grant type.

-   Mail \(IMAP\) operation


This design provides reusable components, which contain connection settings such as the host, port, user name, password, etc. After building your connection and operation, set up a connector within a process. When the Mail \(IMAP\) connector is configured properly within your process, can map to and from virtually any system using the Mail \(IMAP\) connector to send and retrieve email messages.

## Supported transport security protocol 

The Mail \(IMAP\) connector supports the TLSv1.2 security protocol for encrypted communication to send and retrieve email.

## Prerequisites 

The Mail \(IMAP\) connector requires the following items:

-   A SMTP mail server to process email message delivery.

-   Appropriate permissions on the IMAP mail server \(enable IMAP access\).

-   Appropriate permissions on the SMTP mail server \(configure access by IMAP clients\).

-   A port or ports to be open in firewall configuration for the static IP address of the server that the Atom is deployed on.

-   An outbound port \(by default, port 25\) and an inbound port \(by default, ports 143\) for the mail server to listen for incoming connections from the mail client.

-   To implement an OAuth 2.0 connection to the authorized mail server from Integration, have all of the inbound and outbound OAuth 2.0 connection settings available for reference.

Contact your system administrator for assistance with these settings.

## Tracked properties 

The Mail \(IMAP\) connector has the following tracked properties that you can set or reference in various step parameters.

**Attachments Count** - 
The number of attachments in the email message. This is only populated with data on Retrieval-type operations, not Send operations.

**Content-Type** - 
Identifies the format of attachments. In Send operations, you can use this property and attach the specified value for every attachment. If you do not set the Content-Type in Send operations, the value is set to application/binary for all attachments. In Receive operations, the connector returns the Content-Type for every attachment that is stored in the Document Cache.

**File Name** - 
Identifies the name of the file that will be used as an attachment. In Send operations, you can specify a value for every attachment. If you do not set the File Name in Send operations, the connector generates a random name. In Receive operations, the connector returns the File Name for every attachment that is stored in the Document Cache.

**From Address** - 
The inbound/outbound email address from where the email message is sent.

**From Folder** - 
The original folder to retrieve email messages in the Move operation.

**Message ID** - 
The unique email message identifier. This identifier is used to retrieve attachments.

**Received Date** - 
The date that the email message was received. You set this tracked property after receiving the email message using the Receive operation.

**Subject** - 
The inbound/outbound subject of the email message.

**To Address** - 
The inbound/outbound email address where the email message is sent. If the email message is sent to multiple addresses, all outbound email addresses are available in Process Reporting.

