# SugarCRM REST connector 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-72b7a256-713e-4dfd-a325-53c4c05d4c96"/>
</head>


The SugarCRM connector enables you to move data into and out of any edition of SugarCRM.

This connector makes it easy to work with SugarCRM by simplifying the interaction and adding convenience. You can set up the SugarCRM connector to move data into and out of any edition of SugarCRM from any on-premise application and legacy system, including other On Demand or SaaS-based applications.

## Connector Configuration 

To configure a connector to communicate with SugarCRM, set up two components:

-   SugarCRM connection
-   SugarCRM operation

This approach creates reusable connection settings components. After building your connection and connector operation, set up your connector within a process. When you have properly configured your connector with a process, Integration can send data sets to SugarCRM.

## Supported editions 

The following editions are supported:

-   All editions of SugarCRM \(Professional, Enterprise, and Ultimate\). This connector was tested against SugarCRM version 9.0.0.
-   SugarCRM API version 10.

## Prerequisites 

To implement a connection to your SugarCRM account from Integration and use the connector operations, do the following:

-   Have a SugarCRM account and OAuth 2.0 credentials.
-   Have the URL for the SugarCRM REST-based service endpoint.
-   Have an Atom deployed on-premise or in the cloud.
-   Register your custom platform in each Sugar instance using the Platform extension.
-   Make sure you are running your Atom on a recent Java version \(JRE 1.8.0\_91 or later\) to help avoid connectivity issues.

## Tracked Properties 

This connector has no tracked properties.