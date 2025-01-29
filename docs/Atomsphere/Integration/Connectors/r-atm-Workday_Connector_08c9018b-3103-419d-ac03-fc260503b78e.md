import TrackedProperties from './_TrackedProperties.md'


# Workday connector 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-3f500fd3-c166-4d6e-91b3-b288e7b60309"/>
</head>


Use the Workday connector to connect to the Workday Financial Management and Human Capital Management applications.

## Connector configuration 

To configure a connector to communicate with Workday, set up two components:

-   Workday connection

-   Workday operation


This design provide reusable components, which contain connection settings \(such as URL, user name, password\) and operation settings \(such as Object, Action, data definitions\). After building your connection and operation, set up your connector within a process. When you have properly defined the Workday connector within your process, Integration can map to and from virtually any system using the connector to retrieve data from or send data to the Workday application.

## Supported editions 

The Workday connector supports all available editions of the Workday services.


<TrackedProperties />
