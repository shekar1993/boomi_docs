
import TrackedProperties from './_TrackedProperties.md'

# Toad Intelligence Central connector 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-4e2492ce-7516-4f10-8f08-4bf85cfb1999"/>
</head>


Use the Toad Intelligence Central connector to move data into the Toad Intelligence Central data repository from any on-premise application and legacy system, including other On Demand or SaaS-based applications.

:::note Important 

As of the March 2019 release, the Toad Intelligence Central connector is no longer available for use by customers who have not previously used it. If you utilized the Toad Intelligence Central connector prior to this date, you can continue to do so.

::: 

The Toad Intelligence Central connector request XML profile is based on the data set or table column specification. The technical details of this connector, such as request headers and error handling, are abstracted to simplify your implementation.

## Connector configuration 

To configure a connector to communicate with Toad Intelligence Central, set up two components:

-   Toad Intelligence Central connection

-   Toad Intelligence Central operation


This approach creates reusable connection settings components. After building your connection and connector operation, set up your connector within a process. When you have properly configured the connector within a process, Integration can send data sets to the Toad Intelligence Central application.

## Prerequisites 

To implement a connection to your Toad Intelligence Central account, have the following:

-   A Toad Intelligence Central account and password.

-   The server name, port number, and database name of the Toad Intelligence Central SQL database.

-   An Atom deployed on-premise or in the cloud.


<TrackedProperties />
