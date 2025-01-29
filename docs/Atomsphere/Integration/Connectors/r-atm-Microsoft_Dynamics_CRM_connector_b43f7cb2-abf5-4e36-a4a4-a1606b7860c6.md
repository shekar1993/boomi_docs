import TrackedProperties from './_TrackedProperties.md'


# Microsoft Dynamics CRM connector 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-c74224b9-9fd9-4b22-951f-53809c7118cc"/>
</head>


The Microsoft Dynamics CRM connector enables you to move data into and out of the Microsoft Dynamics CRM application.

The connector uses a web service that Microsoft provides to interact with their CRM system. Use the connector to perform Query, Get, Add, Modify, and Delete operations on various types of records.

## Connector configuration 

To configure a connector to communicate using Microsoft Dynamics CRM connector, set up two components:

-   Microsoft Dynamics CRM connection
-   Microsoft Dynamics CRM operation


Create a single connection component for each Microsoft Dynamics CRM organization. You can add multiple operations, one for each action.

## Supported editions 

Boomi supports the following editions:

-   Online 2011 up to 2017 \(v8.2.2.0160\)

-   On-Premise 2011/2013/2015/2016

-   Online 4.0

-   On-Premise 4.0

## Prerequisites 

To implement a connection to Microsoft Dynamics CRM from Integration, you need:

-   A user name and password with sufficient permissions to query, get, add, modify, and delete various types of records.

-   Java with strong encryption \(Java Cryptography Extension or JCE\) support installed for on-premise 2011 and 2013. You can download the files and instructions from [Oracle](http://www.oracle.com/technetwork/java/javase/downloads/jce-7-download-432124.html).


<TrackedProperties />