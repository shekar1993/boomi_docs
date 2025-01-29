# Veeva connector

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-2a2709f7-b72a-4f5a-96cd-c4a1ba89b4ac"/>
</head>

Veeva is a cloud-based customer relationship management platform for the life sciences and pharmaceutical industries. The Veeva connector allows you to create and interact with objects in the Veeva Vault in various ways. 

:::note

This is an open source connector and you can access the code in the [Veeva](https://bitbucket.org/officialboomi/veeva) connector repository.

:::

## Connector configuration 


To configure a connector to communicate using Veeva, set up two components:

-   Veeva connection
-   Veeva operation

This design provides reusable components that contain connection and operation settings. After building your connection and operation, set up your connector within a process. When the process is defined properly, Integration can map to and from virtually any system using the Veeva connector.

## Prerequisites 

To implement a connection to Veeva from Integration, you need the following:

-   A Veeva account with a sign in and password.

-   An Atom deployed in either a hosted environment or on a local machine.

## Tracked properties 

This connector does not have tracked properties.
