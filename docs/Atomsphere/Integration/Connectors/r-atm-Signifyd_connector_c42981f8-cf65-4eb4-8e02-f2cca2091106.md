import TrackedProperties from './_TrackedProperties.md'
import PartnerSupport from './_PartnerSupport.md'

# Signifyd – Partner connector 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-154746d9-cbfc-4a34-9df9-97c6d37e8275"/>
</head>

<PartnerSupport />

The Signifyd – Partner connector allows you to access the Signifyd system through the Signifyd REST API and manage cases.

**Important:** As of December 2, 2020 the Signifyd – Partner connector is no longer available for use by customers who have not previously used it. If you utilized the Signifyd – Partner connector prior to this date, you can continue to do so.

The connector uses JSON format and you can do the following:

-   Create a case.
-   Get a case, which retrieves details about individual cases and case entries.
-   Cancel a case.

**Note:** The documentation for this connector is provided by a partner. The documentation was last updated in April 2018.

## Connector configuration 

To configure the connector to communicate with Signifyd, set up two components:

-   Signifyd – Partner connection. This connector uses HTTP basic authentication.

-   Signifyd – Partner operation \(Create, Get, Update\)


This design provides reusable components which contain connection settings and operation settings. After building your connection and operation, set up your connector within a process. When the Signifyd – Partner connector is configured properly within your process, can map to and from Signifyd using the connection to retrieve data from or send data to Signifyd and manage cases.

## Supported editions 

The connector supports the Signifyd REST API version 2. For more information, see the linked resources.

## Prerequisites 

To use the connector and implement a connection to your Signifyd account from , have the following:

-   A local Atom or an Atom Cloud.
-   The URL for the Signifyd API service.
-   A Signifyd username, which is your API key.

## Supported objects 

The Signifyd – Partner connector supports the following objects:

-   Cases \(Create, Get, and Update actions\)

-   Entries \(Get actions\)


<TrackedProperties />