# Microsoft Dynamics 365 for Finance and Operations connector 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-1b887a60-5bfb-42f7-89ab-bd7bf71c1a89"/>
</head>


Use the Microsoft Dynamics 365 for Finance and Operations connector to connect the Boomi Integration to any Dynamics 365 for Finance and Operations service.

Microsoft Dynamics 365 for Finance and Operations provides project-driven organizations with the tools they need to connect and manage their clients, finances, projects, and people in a unified, integrated environment. Microsoft Dynamics 365 for Finance and Operations helps services organizations streamline key finance and project-related business processes, simplify the management of their human capital, and gain the visibility they need to maximize their revenue and profitability levels.

Using the Microsoft Dynamics 365 for Finance and Operations connector, you can use a Boomi Integration process to:

-   Create, update, and delete accounts and opportunities

-   Retrieve customer contact information

-   Query for potential prospects or lead opportunities and more


The Microsoft Dynamics 365 for Finance and Operations connector uses the OData version 4.0 protocol.

## Connector configuration 

To configure a connector to communicate with a Microsoft Dynamics 365 for Finance and Operations service, set up two components:

-   Microsoft Dynamics 365 for Finance and Operations connection
-   Microsoft Dynamics 365 for Finance and Operations operation

This design provides reusable components, which contain connection settings such as Authentication Type. After building your connection and operation, set up your connector within a process. When you configure your connector within your process, Integration can map to and from any Microsoft Dynamics 365 for Finance and Operations service, using the connector to retrieve data from or send data to the application.

## Prerequisites 

For OAuth 2.0 authentication purposes within the Microsoft Dynamics 365 for Finance and Operations connection, create and register an application within the Azure Active Directory. See additional links for creating applications and permissions within the Azure Directory.

## Limitations 

The following known limitation affects this connector:

-   This connector does not currently have built-in proxy support and does not honor the Atom proxy settings. If you need to use the Atom proxy settings, Boomi recommends that you use the HTTP Client connector to access the service.

## Tracked properties 

**Etag** - 
The OData protocol uses this entity tag to identify specific versions of a resource. Also, it detects any modification of the ETag since the last retrieval.