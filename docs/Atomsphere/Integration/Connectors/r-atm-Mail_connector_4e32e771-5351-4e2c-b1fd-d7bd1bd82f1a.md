# Mail connector 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-af115b49-5885-46ae-9725-fcbdf417b90e"/>
</head>

:::info Important

This connector is no longer actively maintained. Only critical fixes will be implemented. We encourage you to migrate to the [Mail (IMAP) connector](./int-Mail_IMAP_connector_080ed0fa-b9fe-4780-9954-2f84f9e38dbe.md) for continued support and innovation.

:::

Use the Mail connector to read email from a POP email server and send email to an SMTP email server.

The Mail connector offers an alternative to a traditional Value Added Network \(VAN\). Because the email connector is Internet-based, there are no ongoing document fees when exchanging data between trading partners.

## Connector configuration 

To configure a connector to download and upload files to an email server, set up two components:

-   Mail connection

-   Mail operation


This design provides reusable components, which contain connection settings such as the host, user name, password, etc. After building your connection and operation, set up a connector within a process. When you have properly configured your connector within your process, Integration can map to and from virtually any system using the Mail connector to retrieve files from or send files to an email server.

## Supported transport security protocol 

The Mail connector supports the TLSv1.2, TLSv1.1, and TLSv1.0 security protocols for encrypted communication to send and retrieve email.

## Prerequisites 

The Mail connector requires the following items:

-   A POP/SMTP server.

-   Appropriate permissions on the POP/SMTP server.

-   A port or ports to be open in firewall configuration for the static IP address of the server that the Atom is deployed on.

-   An additional port if you are using a Transport Layer Security \(TLS\) or Secure Sockets Layer \(SSL\) protocol.

-   When using two-factor authentication \(2FA, or multi factor authentication\), create an App password so the app or device has permission to access your account \(for example, Outlook, Gmail, etc.\)


Consult your system administrator for assistance with these options.

## Tracked properties 

This connector has the following tracked properties that can be set or referenced in various step parameters.



**File Name** - 
The original file name of an email attachment.

**From Address** - 
The inbound/outbound From Address from the email message.

**Host** - 
The inbound email server name.

**Message ID** - 
The value of the email Message-ID header.

**Subject** - 
The inbound/outbound subject from the email message.

**To Address** - 
The inbound/outbound To Address from the email message. If the email was sent to multiple addresses, all outbound email addresses are available in Process Reporting.

**User** - 
The user name used to log into the email server.