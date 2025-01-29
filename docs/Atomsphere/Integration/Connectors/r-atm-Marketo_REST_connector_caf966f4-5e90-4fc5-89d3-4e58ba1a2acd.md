# Marketo REST connector 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-37111218-6986-43f2-99d1-fbc3018d8cf6"/>
</head>


The Marketo REST connector makes it easy to move data into and out of Marketo’s marketing automation platform using the REST protocol.

For Simple Object Access Protocol \(SOAP\) to web services, use the Marketo connector.

## Connector configuration 

To configure a connector to communicate with Marketo REST, set up two components:

-   Marketo REST connection

-   Marketo REST operation


This design provides reusable components, which contain connection settings and operation settings. After building your connection and operation, set up your connector within a process. When the Marketo REST connector is configured properly within your process, Integration can map to and from virtually any system using the connector to retrieve data from or send data to Marketo.

## Prerequisites 

To implement a connection to your Marketo REST connector so you can retrieve and generate endpoint and identify URLs, and retrieve client ID and secrets, you must have Administrator access to the Marketo Custom Service.

## Supported objects 

The following objects are supported by one or more of the Marketo REST operation actions:

-   Add Custom Activity to Lead

-   Add Lead to List

-   Companies

-   Custom Objects

-   Lead

-   Lead Activity

-   Lead Change

-   List

-   Opportunities

-   Opportunity Roles

-   Remove Lead from List


## Tracked properties 

There are no tracked properties for this connector.