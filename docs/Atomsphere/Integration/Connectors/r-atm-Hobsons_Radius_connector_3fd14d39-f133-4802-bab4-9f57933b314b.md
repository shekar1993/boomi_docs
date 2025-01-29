import TrackedProperties from './_TrackedProperties.md'

# Radius by Campus Management connector 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-2830bb6f-15f1-4f00-a8fb-68bdc3345502"/>
</head>


The Radius by Campus Management connector \(formerly, Hobsons Radius\) enables Boomi Integration users to integrate with Radius by Campus Management, a best-in-class admissions and enrollment management CRM.

## Connector configuration 

To configure a connector to communicate with Radius by Campus Management, set up two components:

-   Radius by Campus Management connection

-   Radius by Campus Management operation


Create one Radius by Campus Management connection component for each service with one or more Radius by Campus Management operations — one for each type of interaction required by your integration scenario.

This design provides reusable components, which contain connection settings and operation settings. After building your connection and operation, set up your connector within a process. When the Radius by Campus Management connector is configured properly within your process, Integration can map to and from virtually any system using the connector to retrieve data from or send data to Radius by Campus Management.

:::note

By default, the Radius by Campus Management connector is set to provide the lowest level of logging information, equivalent to the “INFO” setting. To receive more detailed Radius by Campus Management API logging information \(equivalent to the “FINE” setting\), select the Atom’s Enable Debug Logging property \(`com.boomi.container.debug`\) check box.

:::


<TrackedProperties />