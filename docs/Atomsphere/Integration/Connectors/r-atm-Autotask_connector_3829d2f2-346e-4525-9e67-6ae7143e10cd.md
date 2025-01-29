# Autotask connector 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-0aa8e1fc-90e9-439f-bb97-ab0a24c284de"/>
</head>


The Autotask connector enables you to easily integrate your Autotask application data, such as customers, contracts, and projects, with other systems, including CRM applications, accounting packages, and more.

## Connector configuration 

To configure a connector to communicate with Autotask, set up two components:

-   Autotask connection

-   Autotask operation


This design provides reusable components, which contain connection settings such as your Autotask account. Create one connection for each Autotask account with one or more operations. You need one operation for each type of interaction required by your integration scenario. After building your connection and operation, set up a connector within a process. When the process is defined properly, can map to and from virtually any system using the Autotask connector to retrieve data from or send data to Autotask.

## Supported editions 

supports the following editions:

-   Autotask API version 1.6

    ::: note Attention
    
    To ensure that version 1.6 works correctly with , you must add an API user in Autotask to work with this version of the API. Version 1.6 does not work until the credentials belong to an API user configured with as the vendor.

    :::

-   Autotask API version 1.5

    :::note Attention
    
    On December 31, 2021, Autotask deactivated version 1.5 of their API, and it no longer is supported. For backward compatibility, the connector continues to support the legacy 1.5 version. However, encourages you to update your connections and use version 1.6. To learn how to update your connections, see the topic [Autotask connection](r-atm-Autotask_connection_5650e199-a376-4221-945f-d780e780ec71.md).

    :::


## Prerequisites 

To implement a connection to your Autotask account from , you need:

-   An Atom installed in either a hosted environment or on a local machine.

-   An Autotask account.

## Tracked properties

This connector has no predefined tracked properties. See the topic [Adding tracked fields to a connector operation](../Process%20building/t-atm-Adding_tracked_fields_to_a_connector_operation_f71821dd-95ee-4ebd-bfc9-3333262f56f6.md) to learn how to add a custom tracked field.