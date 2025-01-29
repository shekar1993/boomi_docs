# Boomi AtomSphere Partner API connector 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-868916ed-6d6d-4854-88c2-ad51a03bc018"/>
</head>


The Booomi AtomSphere Partner API connector enables you to perform object-based operations and actions exposed in the AtomSphere Partner API.

The design of the Boomi AtomSphere Partner API connector is to connect seamlessly with Boomi Integration. Integrating with Boomi Integration consists of web service calls utilizing SOAP request and response setup over an HTTPS connection. The technical details of this connection such as request headers, error handling, and HTTPS connection, are all abstracted to simplify the implementation.


:::note

Deploying a Boomi AtomSphere Partner API connector does not affect your license count. You can deploy this connector an unlimited number of times across different Atoms and environments.

:::

## Connection configuration 

Configuring a connector to communicate with Boomi Integration requires the setup of two components:

-   Boomi AtomSphere Partner API connection

-   Boomi AtomSphere Partner API operation



:::note

You can override the account used by the connector operation to perform a request against a subordinate account. For example, you could perform a QUERY against a subordinate account from the primary account by overriding the account ID.

:::

## Tracked properties

This connector has no predefined tracked properties. See the topic [Adding tracked fields to a connector operation](../Process%20building/t-atm-Adding_tracked_fields_to_a_connector_operation_f71821dd-95ee-4ebd-bfc9-3333262f56f6.md) to learn how to add a custom tracked field.