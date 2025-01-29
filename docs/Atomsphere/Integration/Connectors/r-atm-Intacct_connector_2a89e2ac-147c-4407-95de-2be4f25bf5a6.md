# Intacct connector 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-82b369e8-3dfc-4bb2-83b6-edd791095a32"/>
</head>


The Intacct connector enables you to move data into and out of Intacct's On-Demand Financial Application Suite.

As an Intacct user, you can use this connector to integrate any on-premise applications and legacy systems with Intacct. You can also use this connector to integrate Intacct with other On Demand or SaaS-based applications such as Salesforce.

The Intacct connector is different from other connectors because it does not connect to the application and browse the interfaces in real-time. However, Integration provides the most up-to-date interface definitions for you to browse and choose from to complete your necessary integrations. If you customized any Intacct modules with additional fields, you might need to manually add these fields to the standard interface using Integration.

Integrating with Intacct consists of an XML request and response setup over an HTTPS connection. This connection's technical details, such as request headers, error handling, HTTPS connection, and so on, are all abstracted to simplify the implementation.

## Connector configuration 

To configure a connector to communicate with Intacct, set up two components:

-   Intacct connection

-   Intacct operation


This design provide reusable components, which contain connection settings such as username, password, and so on. After building your connection and connector operation, you need to set up your connector within a process. When you configure your connector correctly within your process, can map to and from virtually any system using the Intacct connector to retrieve data from or send data to the Intacct application.

## Prerequisites 

To implement a connection to your Intacct account from Integration, complete the following:

-   Confirm that your Intacct account is subscribed to the XML gateway and has privileges to connect to the Intacct API. Your Intacct representative can provide a Sender ID and password specific to the integration API when you obtain a Sage Intacct Web Services developer license.

-   Know which Intacct URL to connect to. The default is `https://www.intacct.com/ia/xml/xmlgw.phtml`, but confirm this for your specific Intacct implementation.

-   Understand from a business process perspective which interface\(s\) to integrate. For example, you may want to upload sales orders into Intacct from a flat file.

-   Have access to the Intacct Web Services Developer Documentation \(see the linked topic\) for interface reference and details of each individual field within the interface.


## Supported versions 

The connector supports the Intacct 2.1 and 3.0 request and response DTDs.

## Changes in Intacct 3.0 

The Delete Action, which is new in 3.0, is handled as an Update in 2.1. The list of objects supported in the Operation’s version 3.0 differs from 2.1.

Intacct 3.0 profiles directly reference objects, such as:

-   Intacct allocation CREATE Request
-   Intacct deposit CREATE Request

-   Intacct deposit UPDATE Request

-   Intacct allocation DELETE Request

-   Intacct allocation GET Response

-   Intacct allocation QUERY Response

## Tracked properties

This connector has no predefined tracked properties. See the topic [Adding tracked fields to a connector operation](../Process%20building/t-atm-Adding_tracked_fields_to_a_connector_operation_f71821dd-95ee-4ebd-bfc9-3333262f56f6.md) to learn how to add a custom tracked field.