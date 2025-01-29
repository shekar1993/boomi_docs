# ServiceNow connector

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-b19e48ef-76e9-4cda-a413-36b388a54483"/>
</head>


The ServiceNow connector enables you to move data into and out of ServiceNow.

As a ServiceNow user, you can use this connector to connect directly to the ServiceNow application, browse the interface in real time, and integrate ServiceNow data with any cloud or on-premise applications. You can also use this connector to integrate ServiceNow with other On Demand or SaaS-based applications, such as Intacct, Salesforce, SmartTurn, etc. Integrating with ServiceNow involves sending XML request/response setup over an HTTPS connection. The ServiceNow XML schema is imported through a wizard that generates XML profiles based on a predefined schema. The technical details of this connector, such as request headers, error handling, and HTTPS connection, are abstracted to simplify the implementation and operation.

**Note:** This connector is still supported, but recommends using the ServiceNow REST connector which provides additional benefits.

## Connector configuration 

To configure a connector to communicate with ServiceNow, set up two components:

-   ServiceNow connection

-   ServiceNow operation


This approach creates reusable components which contain connection settings. You create a ServiceNow connection that uses a WSDL file. After building your connection and operation, set up a connector within a process. When the ServiceNow connector is defined properly within your process, can map to and from virtually any system using the ServiceNow connector to retrieve or send data.

## Prerequisites 

To implement a connection to your ServiceNow WSDL from , you need:

-   A ServiceNow account with login and password.

-   An Atom deployed in either a hosted environment or on a local machine.


## Tracked properties 

This connector has no tracked properties.