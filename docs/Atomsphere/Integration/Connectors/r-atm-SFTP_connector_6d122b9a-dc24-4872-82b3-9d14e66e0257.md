# SFTP (Legacy) connector 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-b6cf099e-0ec6-4a00-9848-7f8b42e90a16"/>
</head>

:::info Important

This connector has been put into [Legacy status](../../Platform/atm-Feature_release_stages_00d83b66-e5db-4038-8398-fcaead4be12d.md). It is still supported, but will only receive critical security fixes. We encourage you to adopt the newest version (V2) of this connector in order to take advantage of the latest features Boomi Connectivity has to offer.

:::

Use the Secure File Transfer Protocol \(SFTP\) connector to download files from or upload files to an SFTP-enabled server using SSH.

Unlike the standard FTP connector, the SFTP (Legacy) connector encrypts both data and commands to ensure that no sensitive data is exposed when transmitted over a network. SFTP uses a different protocol from FTP, which means you cannot use a standard FTP client to communicate with an SFTP server.

At the beginning of a connector step, the SFTP (Legacy) connector opens a session and then issues calls for each document in an open-call-call-call-close fashion.

## Connector configuration 

To configure a connector to communicate with SFTP, set up two components:

-   SFTP (Legacy) connection

-   SFTP (Legacy) operation


This approach provides reusable components, which contain connection settings such as user name, password, etc. After building your connection and operation, set up your connector within a process. When your connector is configured properly within your process, Boomi Integration can map to and from virtually any system using the SFTP (Legacy) connector to retrieve data from or send data to disk.

## Prerequisites 

The SFTP (Legacy) connector requires the following:

-   An SFTP user with sufficient read/write access to the required remote directories.

-   A port for SFTP communications. The default port is 22.

-   Access to the Internet. If the SFTP server is not exposed to the Internet, deploy the Atom locally to a machine within your network that can access it.


Contact your SFTP administrator for assistance.

## Tracked properties 

This connector has the following tracked properties that can be set or referenced in various step parameters:

**File Name** -  The inbound/outbound file name of the document.

**Host** -  The inbound SFTP server name.

**Move To Directory** -  The inbound/outbound directory on the server the document was moved to.

**Port** -  The inbound port number.

**Remote Directory** -  The inbound/outbound directory on the server