import TrackedProperties from './_TrackedProperties.md'

# ServiceNow REST connector 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-6987f454-912b-457d-9de0-b29b1cee174d"/>
</head>


The ServiceNow REST connector enables you to directly connect to ServiceNow and use a process to insert, retrieve, update, delete, and query records \(incidents, cases, accounts, customers, products, etc.\) in ServiceNow.

ServiceNow provides an integrated suite of applications to define, structure, and automate the flow of work across any size enterprise. You can use ServiceNow to simply and securely manage all of your IT services and operational events such as incidents, problems, and changes. You can integrate the ServiceNow data with any cloud or on-premise application such as Intacct, Salesforce, and SmartTurn. For example, you may want to integrate your ServiceNow incidents to your Salesforce instance accounts, or retrieve cost center data and update it in your ERP.

The benefits of using the ServiceNow REST connector in a process instead of the legacy connector include the following:

-   Improved performance when extracting and retrieving data.
-   Ability to select only the fields that are needed, dramatically reducing the size of data extracted from large tables.
-   Ability to selectively choose in an operation what value the database returns or inserts for fields \(the Display Value, the Actual Value, or Both\).

## Connector configuration 

To configure the connector to communicate with ServiceNow, set up two components:

-   ServiceNow REST connection
-   ServiceNow REST operation

This design provides reusable components which contain connection settings and operation settings. After building your connection and operation, set up your connector within a process. When the ServiceNow REST connector is configured properly within your process, can map to and from virtually any system using the ServiceNow REST connector to move data into and out of ServiceNow.

## Supported editions 

The connector supports version 2.0 of the ServiceNow REST API.

## Prerequisites 

To use the connector and implement a connection to your ServiceNow account from , have the following:

-   A local Atom or an Atom Cloud.
-   The base URL for the ServiceNow API service endpoint.
-   A ServiceNow account with your user name and password.
-   When using *OAuth 2.0* to authenticate, have your ServiceNow client ID and client secret that was provided when you registered your client with ServiceNow. Also, have your authorization and access token URL.

<TrackedProperties />

## Changelog

**2023-11 (Current)**

- Overridable fields now include Access Token parameters, Authorization parameters, and Extended JWT Claims (if supported by the connector).