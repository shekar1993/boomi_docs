# Coupa connector 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-b855bcf9-2441-4a9c-beb1-b5e7eeeec5a3"/>
</head>


The Coupa connector enables you to move data into and out of Coupa and integrate any on-premise applications and legacy systems with Coupa.

You can use this connector and integrate Coupa with other On Demand or SaaS-based applications such as Intacct, Salesforce, and SmartTurn.

Integrating with Coupa involves sending XML requests and response setup over an HTTPS connection. To start, a wizard imports the Coupa XML schema and generates XML profiles based on a predefined schema. The technical details of this connection, such as request headers, error handling, HTTPS connection, and so on, are all abstracted to simplify the implementation.

## Connector configuration 

To configure a connector to communicate with Coupa, set up two components:

-   Coupa Connection

-   Coupa Operation


This design provides reusable components, which contain connection settings such as the URL and the token. After building your connection and connector operation, set up your connector within a process. When you configure the connector properly within your process, can map to and from virtually any system using the Coupa connector to retrieve data from or send data to the Coupa application.

## Supported editions 

The connector supports the Coupa API version 26.

## Prerequisites 

To implement a connection to your Coupa account, have your Coupa API URL and Coupa API key available.

## Tracked properties

This connector has no predefined tracked properties. See the topic [Adding tracked fields to a connector operation](../Process%20building/t-atm-Adding_tracked_fields_to_a_connector_operation_f71821dd-95ee-4ebd-bfc9-3333262f56f6.md) to learn how to add a custom tracked field.

