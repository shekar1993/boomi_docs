import TrackedProperties from './_TrackedProperties.md'



# Taleo connector 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-69d0b8ff-eab9-47c9-b945-3ed201625e38"/>
</head>


The Taleo connector enables you to move data into and out of the Taleo Business Edition application.

Use the Taleo connector to integrate any on-premise applications and legacy systems and integrate Taleo with other On Demand or SaaS-based applications such as Intacct, Salesforce, NetSuite, etc.

The Taleo connector connects directly to the Taleo application and browses the interfaces in real-time. If any of your Taleo objects are customized with additional fields, these fields automatically appear when browsing the Taleo interface with Boomi Integration.

Integrating with Taleo consists of web service calls using XML request/response setup over an HTTPS connection. The technical details of this connection, such as request headers, error handling, HTTPS connection, etc. are abstracted to simplify the implementation.

## Connector configuration 

To configure a connector to communicate with Taleo, set up two components:

-   Taleo connection

-   Taleo operation


This design provides reusable components, which contain connection settings \(such as URL, User, Password\) and operation settings \(such as Object, Action, data definitions\). After building your connection and operation, set up your connector within a process. When you have properly defined the Taleo connector within your process, Integration can map to and from virtually any system using the connector to retrieve data from or send data to Taleo.

## Supported editions 

The Taleo Business Edition is supported.

## Prerequisites 

Either create a new user within Taleo or use an existing user to access the Taleo API with the Taleo connector. Because Integration connectivity is subject to the same access control restrictions as users, as defined within Taleo, validate the controls you need the API to use and define a user with the appropriate controls.

<TrackedProperties />