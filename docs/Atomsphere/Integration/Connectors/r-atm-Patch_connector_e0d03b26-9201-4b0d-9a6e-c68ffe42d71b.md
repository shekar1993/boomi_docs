# HTTP PATCH Client (Deprecated) connector

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-4f7c80d0-0c90-4db5-a2a7-156f5d0624f9"/>
</head>


Use the HTTP PATCH Client (Deprecated) connector to send HTTP requests supporting the PATCH method to update and make partial changes to an existing resource without replacing the original version of the resource. For example, when you only need to update the email address for an existing employee.


:::warning

This connector has been changed to Deprecated status. This connector is no longer actively maintained and will be retired at a yet to be determined date. For more information about the Deprecated stage, see the [Feature release stages page](../../Platform/atm-Feature_release_stages_00d83b66-e5db-4038-8398-fcaead4be12d.md).

:::

:::info

The REST Client connector should now be used for PATCH functionality. For a comparison of the REST Client connector and the HTTP Client connector functionality, see this [Community article](https://community.boomi.com/s/article/REST-Client-Connector-vs-HTTP-Client-Connector).

:::



Deploying the HTTP PATCH Client (Deprecated) connector does not affect your license count. You can deploy this connector an unlimited number of times across different Atoms and environments.

## Connector configuration 

To configure a connector to communicate with an HTTP-enabled server, set up two components:

-   HTTP PATCH Client (Deprecated) connection

-   HTTP PATCH Client (Deprecated) operation

This design provides reusable components which contain connection settings and operation settings. After building your connection and connector operation, set up your connector within a process. When the HTTP PATCH Client (Deprecated) connector is configured properly within your process, Boomi Integration can map to and from virtually any system using the connector to exchange data through HTTP.

import TrackedProperties from './_TrackedProperties.md'

<TrackedProperties />