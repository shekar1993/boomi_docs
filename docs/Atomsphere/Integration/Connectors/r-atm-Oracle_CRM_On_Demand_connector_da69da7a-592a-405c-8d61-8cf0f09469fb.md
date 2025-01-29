import TrackedProperties from './_TrackedProperties.md'

# Oracle CRM On Demand connector 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-4796a9c9-141a-43a3-8382-2dd7aabe2e05"/>
</head>


The Oracle CRM On Demand connector enables you to move data into and out of the Oracle CRM On Demand solutions, and the Oracle CRM On Demand Industry Editions solutions.

This connector connects directly to your Oracle CRM On Demand application and enables you to Get, Query, Create, Execute, Update, and Delete various types of records.

:::note

The API documentation is available after you sign into Oracle CRM On Demand. The documentation is located in Admin \> Web Services Administration. The Admin page displays generic and custom WSDLs. Boomi Integration interacts with the custom WSDLs.

:::

## Connector configuration 

To configure a connector to communicate with Oracle CRM On Demand, set up two components:

-   Oracle CRM On Demand connection

-   Oracle CRM On Demand operation


This design provides reusable components, which contain connection settings \(such as URL, user name, password\) and operation settings \(such as Object, Action, data definitions\). After building your connection and operation, set up your connector within a process. When you define the Oracle CRM On Demand connector within your process, Integration can map to and from virtually any system using the connector to retrieve data from or send data to the Oracle CRM On Demand application.

<TrackedProperties />