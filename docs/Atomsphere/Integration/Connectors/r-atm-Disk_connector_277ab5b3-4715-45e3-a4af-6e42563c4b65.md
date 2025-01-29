# Disk (Legacy) connector 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-34be262f-1a01-4b6b-8a68-9ce01db946ee"/>
</head>

:::info Important

This connector has been put into [Legacy status](../../Platform/atm-Feature_release_stages_00d83b66-e5db-4038-8398-fcaead4be12d.md). It is still supported, but will only receive critical security fixes. We encourage you to adopt the newest version (V2) of this connector in order to take advantage of the latest features Boomi Connectivity has to offer.

:::

Use the Disk (Legacy) connector to read and write from the underlying file system of the host machine where the Atom is running.

The Disk (Legacy) connector gets files from or send files to directories on the disk to which the Atom has access. The Disk connector can use a local path, Windows UNC path, or an NFS share on Unix. If you extend your network with a VPN \(Virtual Private Network\), you can directly access files on your trading partner's network.

## Connector configuration 

To configure a connector to read and write to the underlying file system, set up two components:

-   Disk (Legacy) connection

-   Disk (Legacy) operation


This design provides reusable components, which contain connection settings such as the directory path, read/write settings, etc. After building your connection and operation, set up a connector within a process. When you have properly configured your connector within your process, Integration can map to and from virtually any system using the Disk connector to retrieve files from or send files to disk.

## Prerequisites 

The Disk (Legacy) connector requires the following:

-   A Boomi Atom that is a process running as a particular user on the operating system. That user must have permissions on the file system to perform reads or writes.

-   A networked connection to data locations for shared resources.

-   A peer-to-peer or VPN configuration to access private networks.


See your system administrator for assistance.

## Tracked properties 

This connector has the following tracked properties that can be set or referenced in various step parameters:



**Directory** - 
The inbound directory of the document.

**File Name** - 
The inbound/outbound file name of the document.


:::note

You cannot set a dynamic Directory property with the Set Properties step.

:::