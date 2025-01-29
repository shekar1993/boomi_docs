# IFS FSM REST connector

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-0aaa24a1-14bc-4ffe-8a70-2b022ec8b683"/>
</head>


The IFS FSM REST connector simplifies communicating with an IFS Field Service Management \(FSM\) instance on-premise or in the cloud to create, read, update, or delete data through FSM's REST APIs. Using the connector, you can integrate FSM with other software applications and services wherever they reside. The connector allows you to browse the FSM schema, and guides you in setting up filters, sorts, and other common activities.

The IFS FSM REST connector connects the OData REST APIs offered by FSM over an HTTPS connection. The connector abstracts the HTTP settings \(request headers, errors, etc.\) to simplify usage.

## Connector configuration

To configure the connector to communicate with IFS FSM, set up two components:

-   IFS FSM REST connection. This connector supports basic authentication.
-   IFS FSM REST operation.

This design provides reusable components which contain connection settings and operation settings. After building your connection and operation, you can utilize the Connector step within a process. When the IFS FSM REST connector is configured properly within your process, can map to and from virtually any connected application using the IFS FSM REST connector to retrieve data from or send data to IFS FSM.

## Prerequisites

To implement a connection to your IFS FSM account from and use the connector operations, do the following:

-   Have a local Atom or an Atom in an Atom Cloud.
-   Have the URL and port, if required, for the IFS FSM ODATA API endpoint, and a valid username and password.
-   Have knowledge of the hierarchical and data dependency structure of the IFS FSM model.

## Supported editions

The connector requires IFS FSM 6, update 7 or greater.

## Tracked properties

This connector has no predefined tracked properties. See the topic [Adding tracked fields to a connector operation](../Process%20building/t-atm-Adding_tracked_fields_to_a_connector_operation_f71821dd-95ee-4ebd-bfc9-3333262f56f6.md) to learn how to add a custom tracked field.