# Flow Services Server connector

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-cfd73e0d-a94c-4a02-b09b-471b9d9e5faa"/>
</head>


The Flow Services Server connector is a listen-only connector that is designed to integrate with services configured in . The means by which a flow service interacts with processes is configured in an independently deployable Flow Service component.

Flow service requests originate in flows as REST requests. When a process using this connector is deployed to an Atom, the Atom’s internal flow services server listens for flow service requests based on configurations made in the Flow Services Server operation.

## Start step configuration 

Configuring a Start step using this connector to listen for flow service requests requires the configuration of two components:

-   Listen connection

-   Flow Services Server operation


The listen connection is managed at the Atom level and is *not* configurable within an individual process. Review the configuration requirements for the Atom's shared web server to learn more. This connector design provides shared reusability across Atoms and the ability to launch unique operations/URLs for different process message actions. When a flow services server is launched for request listening, you can develop a process to interact with virtually any system using other connectors in the library.

## Prerequisites 
In order to integrate with a flow service, you must:

-   Create and configure a Flow Service component.

-   Have a tenant.

-   Configure the service in your tenant.

-   Import the service into flows from which service requests will originate.

-   Add and configure service requests in flows — for example:

    -   Perform an action

    -   Upload a file

    -   Load a list of files and their metadata

    -   Load tabular data from a remote source

    -   Update an individual data row in a remote source

    -   Delete an individual data row from a remote source


## Tracked properties 

This connector has the following tracked properties that can be set or referenced in various step parameters:

**Name**   
**Description**

**File Content Type**
The content type of a file in a Flow Services Server operation on a file resource.

**File Name**
The name of a file in a Flow Services Server operation on a file resource.

## Additional resources 

[Quick start — Service element](https://docs.manywho.com/quick-start-service-element/)

[Importing a service](https://docs.manywho.com/importing-service-flow/)

[Working with the message element](https://docs.manywho.com/working-with-the-message-element/)