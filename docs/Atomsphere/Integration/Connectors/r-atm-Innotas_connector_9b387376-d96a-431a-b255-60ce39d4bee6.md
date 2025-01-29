import PartnerSupport from './_PartnerSupport.md'

# Innotas – Partner connector 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-9b387376-d96a-431a-b255-60ce39d4bee6"/>
</head>

<PartnerSupport />

The Innotas – Partner connector enables you to easily integrate your Innotas On Demand Project Management application data \(such as customers, resources and projects\) with other systems, including CRM applications, accounting packages and more.

:::info Important

The Innotas – Partner connector is no longer available for use by customers who have not previously used it. If you are using this connector, you can continue to do so.

:::

:::caution

The documentation for this connector is provided by a Boomi partner. The documentation was last updated in December 2011.

:::

## Connector configuration 

To configure a connector to communicate with Innotas, set up two components:

-   Innotas – Partner connection — The connection represents your Innotas account.

-   Innotas – Partner operation — The operation represents an action against a specific record type.


You will create one connection component per Innotas account with one or more operations, one for each type of interaction required by your Integration scenario.

## Prerequisites 

To implement a connection to Innotas from Boomi Integration, you must:

-   Have an Innotas account.
-   Obtain an API-only user from your Innotas representative.

## Tracked properties

This connector has no predefined tracked properties. See the topic [Adding tracked fields to a connector operation](../Process%20building/t-atm-Adding_tracked_fields_to_a_connector_operation_f71821dd-95ee-4ebd-bfc9-3333262f56f6.md) to learn how to add a custom tracked field.