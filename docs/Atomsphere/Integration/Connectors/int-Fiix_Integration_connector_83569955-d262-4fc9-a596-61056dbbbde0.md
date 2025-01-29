import PartnerSupport from './_PartnerSupport.md'

# Fiix — Partner connector

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-83569955-d262-4fc9-a596-61056dbbbde0"/>
</head>

<PartnerSupport />

The Fiix — Partner connector allows you to work with various objects exposed through the Fiix API, meaning that you can access all Computerized Maintenance Management System \(CMMS\) related data and methods to work with assets, purchase orders, work orders, and more. The connector supports the Query, Create, Update, and Delete operations.

You can use the connector to seamlessly integrate Fiix CMMS with intersecting systems so that you can access maintenance-specific data \(assets, work orders, purchase orders, and more\). For example, you can build integrations with ERP systems like SAP, Microsoft Dynamics, NetSuite, and Sage for parts inventory adjustments and purchasing.

## Connector configuration

To configure a connector to communicate with Fiix CMMS, set up the following two components:

-   Fiix — Partner connection. This connection uses the API Access Keys for authentication and authorization.
-   Fiix — Partner operation. The create, update, delete, query, and execute operations supported on the different Fiix objects.

This approach creates reusable components that contain connection and operation settings. After building your connection and operation, set up your Fiix — Partner connector within a process. When a Boomi process is configured properly, the can map to and from virtually any system using the Fiix — Partner connector to retrieve data from or send data to the Fiix CMMS.

## Supported Fiix CMMS API

The Fiix — Partner connector supports the Fiix CMMS API as referenced [here](https://fiixlabs.github.io/api-documentation/). However, it does not support Named Filters and Calculated Fields.

## Prerequisites

To configure a connection between Fiix CMMS and the Boomi Enterprise Platform, you’ll need the following information:

-   The API URL for the account

-   The Application Key for the account to connect via API

-   The Access Key for the account to connect via API

-   The Secret Key for the account to connect via API


To find the necessary connection information, follow the instructions listed in the [Fiix Developer’s Guide](https://fiixlabs.github.io/api-documentation/guide.html).

## Supported objects

The connector supports all objects \(except Named Filters and Calculated Fields\) listed in the [Fiix API documentation](https://fiixlabs.github.io/api-documentation/#/ApiDoc).

## Tracked properties

This connector has no predefined tracked properties. See the topic [Adding tracked fields to a connector operation](../Process%20building/t-atm-Adding_tracked_fields_to_a_connector_operation_f71821dd-95ee-4ebd-bfc9-3333262f56f6.md) to learn how to add a custom tracked field.