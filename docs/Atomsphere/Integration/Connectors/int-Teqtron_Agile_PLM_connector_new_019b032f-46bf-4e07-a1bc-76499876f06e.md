import PartnerSupport from './_PartnerSupport.md'

# Teqtron Agile PLM — Partner connector

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-019b032f-46bf-4e07-a1bc-76499876f06e"/>
</head>

<PartnerSupport />

The Teqtron Agile PLM connector enables users to access their Oracle Agile PLM system which accelerates innovation and new product introductions by efficiently managing items, parts, products, documents, requirements, engineering change orders, and quality workflows across supply chains while seamlessly integrating to computer-aided design \(CAD\) systems.

The connector performs this action by accessing Application Interface services and custom web services. The connector can also be used to access AXML/PDX files placed in Oracle Agile PLM’s SFTP server through event based or scheduled Agile Content Service \(ACS\). This is an event-driven XML-based publishing service, making the product record available to a wide variety of business applications and users, both internally and across the global manufacturing network.

The Teqtron Agile PLM Connector enables you to Access AIS and custom web services as well as get and send data from a Boomi process.

## Connector configuration

To configure a connector to communicate with Oracle Agile PLM system, set up these two components:

-   Teqtron Agile PLM connection. This connector supports http and https for authentication and encryption.
-   Teqtron Agile PLM operation.

This approach creates reusable components which contain connection settings and operation settings. After building your connection and operation, set up your Teqtron Agile PLM connector within a process. When the process is defined properly, Integration can map to and from the Agile PLM system using the Teqtron Agile PLM connector to retrieve data from or send data to the Agile PLM system.

## Prerequisites

To implement a connection to your Agile PLM system from the Boomi Integration, complete the following prerequisites:

-   Have host, port, username and password to access your Oracle Agile PLM system.
-   If you are planning to use custom web services, then have the custom web service url extension.
-   If you are planning to use SFTP part of Oracle Agile PLM system, then have the sftp port, username and password information with you to set up a connection.

## Supported editions

Release 1.0 of the Teqtron Agile PLM connector support following versions of Agile PLM:

-   Agile 9.3.4+

## Supported objects

The Teqtron Agile PLM AIS operation supports the following list of objects:

-   BusinessObject
-   Search
-   Attachment
-   Folder
-   PGC
-   Table
-   AdminMetadata
-   Collaboration
-   Report
-   DocPublishing
-   UserProfile
-   Project
-   PC

## Tracked properties and dynamic properties

This connector has the following tracked properties that you can set or reference in various step parameters:

**FileNameSftp** - 
The name of the file to be sent to Agile PLM systems sftp server in case of the send operation. It is also the name of the file which is set in the case of the `Get and move`, `Get and delete` action and set by the connector in case of a Get operation.