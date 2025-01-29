# FTP (Legacy) connector 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-6c65d5f5-0de1-4325-983c-3c424e065f34"/>
</head>

:::info Important

This connector has been put into [Legacy status](../../Platform/atm-Feature_release_stages_00d83b66-e5db-4038-8398-fcaead4be12d.md). It is still supported, but will only receive critical security fixes. We encourage you to adopt the newest version (V2) of this connector in order to take advantage of the latest features Boomi Connectivity has to offer.

:::

Use the File Transfer Protocol \(FTP\) (Legacy) connector to download files from or upload files to an FTP-enabled server.

Boomi Integration can access any FTP server connected to the Internet because it is TCP/IP based. The FTP (Legacy) connector offers a viable alternative to a traditional Value Added Network \(VAN\). Because the FTP (Legacy) connector is Internet based, there are no ongoing document fees when exchanging data between trading partners.

The FTP (Legacy) connector supports FTP over SSL \(FTPS\) for secured communication.

In an FTP client/server connection, the computer that the Boomi Atom is installed on is called the client or local computer. The FTP Server is called the host or remote computer.

At the beginning of a connector step, the FTP (Legacy) Connector opens a session then issues calls for each document in an open-call-call-call-close fashion.

## Connector configuration 

To configure a connector to communicate with an FTP-enabled server, set up two components:

-   FTP (Legacy) connection

-   FTP (Legacy) operation


This approach provides reusable components, which contain connection settings such as host name, user name, password, etc. After building your connection and operation, set up your connector within a process. When your connector is configured properly within your process, Boomi Integration can map to and from virtually any system using the connector to retrieve files from or send files to disk.

## Prerequisites 

The FTP (Legacy) connector requires the following:

-   An FTP user with sufficient read/write access to the required remote directories.

-   A port for FTP communications. The default port is 21.

-   An internet connection for the FTP server or a locally-deployed Atom that is accessible within your network.


See your FTP administrator for assistance.

## Tracked properties 

This connector has the following tracked properties that can you set or reference in various step parameters:


:::note

When using dynamic document properties to set the value of tracked fields, FTP (Legacy) connector operations do not pass the values when running a process.

:::

**File Name** - 
The inbound/outbound file name of the document.

**Host** - 
The inbound FTP server name.

**Move To Directory** - 
The inbound/outbound directory on the server the document was moved to.

**Port** - 
The inbound port number.

**Remote Directory** - 
The inbound/outbound directory on the server.