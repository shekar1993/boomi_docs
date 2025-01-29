# Microsoft Dynamics 365 for Customer Engagement connector 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-d664a9aa-548b-48db-901c-38ea341481b0"/>
</head>


Use the Microsoft Dynamics 365 for Customer Engagement connector to connect the Boomi Enterprise Platform to any Dynamics 365 Customer Engagement service, including Dynamics 365 for CRM.

Microsoft Dynamics 365 for Customer Engagement allows you to bring together all of the data about your customers and prospects so you can manage the data in one place. You gain the insights that you need to manage your daily activities, stay on top of your team's progress, and make informed decisions to nurture your customers and build lifelong relationships.

Using the Microsoft Dynamics 365 for Customer Engagement connector, you can use a Boomi Integration process to create, update, and delete accounts and opportunities, retrieve customer contact information, look up potential prospects and lead opportunities, and more.

The Microsoft Dynamics 365 for Customer Engagement connector uses the OData version 4.0 protocol.

## Connector configuration 

To configure a connector to communicate with a Microsoft Dynamics 365 for Customer Engagement connector, set up two components:

-   Microsoft Dynamics 365 for Customer Engagement connection
-   Microsoft Dynamics 365 for Customer Engagement operation

This design provides reusable components, which contain connection settings such as Authentication Type. After building your connection and operation, set up your connector within a process. When your connector is configured correctly within your process, Integration can map to and from any Microsoft Dynamics 365 for Customer Engagement service, using the Microsoft Dynamics 365 for Customer Engagement connector to retrieve data from or send data to the application.

## Supported editions

The Microsoft Dynamics 365 for Customer Engagement connector supports online instances of Dynamics 365 for Customer Engagement that use the OData 4.0 REST protocol. Boomi tested versions 8.2 and 9.0 of Dynamics 365 for Customer Engagement.

## Limitations 

The following known limitation affects this connector:

-   This connector does not currently have built-in proxy support and does not honor the Atom proxy settings. Until this is supported, and if you need to use the Atom proxy settings, recommends that you use the HTTP Client connector to access the service.

## Tracked properties

**ETag** - 
  To identify specific resource versions, use the entity tag from the OData protocol. It detects any modification of the eTag since it was last retrieved.