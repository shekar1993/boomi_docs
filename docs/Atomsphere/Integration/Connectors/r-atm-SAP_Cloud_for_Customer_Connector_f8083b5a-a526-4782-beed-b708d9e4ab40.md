import TrackedProperties from './_TrackedProperties.md'

# SAP Business ByDesign connector 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-f8083b5a-a526-4782-beed-b708d9e4ab40"/>
</head>


The SAP Business ByDesign connector enables to connect to specific solutions of the SAP Cloud platform.

The SAP Cloud platform solutions include SAP Business ByDesign \(formerly, SAP Cloud for Customer\) including the SAP Cloud for Sales, SAP Cloud for Service, and SAP Cloud for Social Engagement solutions. You can get and send data by connecting to the services to which your installation has access. Each service corresponds to an executable operation for a particular object or to a custom service. This connector uses SAP Business ByDesign’s WSIL registry to determine the URL for each service. All services are protected by Basic authentication.

For more information, see the documentation provided for each SAP Business ByDesign web service. To locate this documentation:

1.  In SAP Business ByDesign, navigate to the **Communication Arrangement Overview**.

2.  Select a web service. In the lower table, select the row containing the name of the web service.

3.  Click the **Display Documentation** button.


## Connector configuration 

To configure a connector to communicate with SAP Business ByDesign, set up two components:

-   SAP Business ByDesign connection

-   SAP Business ByDesign operation


This design provides reusable components, which contain connection settings such as user name and password. After building your connection and connector operation, set up your connector within a process. When the SAP connector is defined properly within your process, can map to and from virtually any system using the connector to retrieve data from or send data to SAP Business ByDesign.

## Prerequisites 

To implement a connection to your SAP Business ByDesign account from , you need your SAP user name and password.


<TrackedProperties />