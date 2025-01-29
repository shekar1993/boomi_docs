# OData Client connector 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-63418837-dcaa-4d7a-87b0-60ac25bcb9dd"/>
</head>


Use the OData Client connector to connect Integration with any OData service. This connector acts as generic OData protocol connector and is not application-specific.

OData \(Open Data\) is a standardized protocol for creating and consuming data APIs. Many providers offer access to their data by using the OData protocol, including Microsoft Windows Azure, Stack Overflow, and DevExpress. OData uses REST for resource addressing and location. OData uses the following formats for data transmission:

-   The Atom publishing format.
-   The JSON document format.

When you set up an OData connection, you select one of these formats in the **OData Format** field.


:::note

The Atom or JSON formats are used only for data transmission. Your data is always returned in XML format.

:::

## Connector configuration 

To configure a connector to communicate with an OData service, set up two components:

-   OData Client connection
-   OData Client operation

This design provides reusable components, which contain connection settings such as user name and password. After building your connection and operation, set up your connector within a process. When your connector is configured properly within your process, Integration can map to and from any OData service, using the OData Client connector to retrieve data from or send data to the application.

## Supported editions 

The OData Client connector supports versions 1, 2, and 4 of the OData protocol.

import TrackedProperties from './_TrackedProperties.md'

<TrackedProperties />

