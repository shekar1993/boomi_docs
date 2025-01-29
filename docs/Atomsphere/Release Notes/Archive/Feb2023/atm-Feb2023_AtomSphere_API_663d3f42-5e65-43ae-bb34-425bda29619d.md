# Platform API and Partner API

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-663d3f42-5e65-43ae-bb34-425bda29619d"/>
</head>


## XML Profile components

Feature

-  When creating XML Profile components by importing an XML Schema file, the date format is now set automatically for Date/Time elements. (INT-7201)


## Component Metadata object 

Feature

-   The ComponentMetadata object now supports the ability to update, delete, and restore components via the API. You can rename or move components programmatically in the Boomi AtomSphere API and Partner API. The ability to create a new component is not supported at this time. These new actions are available via the Boomi AtomSphere API, Component Metadata API, and Partner API connectors. (INT-5640)

    To learn more about this feature, see topic: [Component Metadata object](https://developer.boomi.com/api/platformapi#tag/ComponentMetadata)


## Folder object 

Feature

-  The Folder object now supports the ability to create, update, delete, and restore folders via the API. Additionally you can view and set the AssignedRoles restrictions on the folder in Boomi AtomSphere API and Partner API. (INT-5638)

    To learn more about this feature, see topic: [Folder object](https://developer.boomi.com/api/platformapi#tag/Folder)


## Shared Communication Channel component object 

Feature:

-  You can configure a Shared Communication Channel component by using the Shared Communication Channel object in the Trading Partner API. The following operations are supported:



-   Get

-   Create

 -   Update

-   Delete

-   Query

    \(B2B-2316, B2B-2317, B2B-2318, B2B-2319, B2B-2320\)

    To learn more about this feature, see the topic [Shared Communication Channel component](https://developer.boomi.com/api/platformapi#tag/SharedCommunicationChannelComponent).

## Trading Partner API

Features:

-   The following fields are added to the Trading Partner API to support AS2 Attachments:

    -   **multipleAttachments** - When set to true, a single message can contain multiple documents. The default value is false.

    -   **maxDocumentCount** - Sets the maximum number of documents you can include in a single message. The range of valid values is 1-20.

    \(B2B-2313\)

-   The Trading Partner API includes support for attachments for RosettaNet Trading partners. You can configure a Document Cache Component by using the Create and Update operations.

:::note

This applies only to "Partner that I trade with" components and for RosettaNet version 2.0.

:::

 \(B2B-2446\)

For more information about these features, see the topic [Trading Partner object](https://developer.boomi.com/api/platformapi#tag/TradingPartnerComponent).


Fixes:

-   This fix resolves an issue where the component properties for standards other than X12 were not set when a Trading Partner was created by using the API. \(B2B-2551\)

-   This fix resolves an issue where the HTTP Communication Connection settings were not updating correctly when using the Trading Partner API. \(B2B-2593\)


## Trading Partner component object 

Feature:

-   You can create an Odette Trading Partner by using the Trading Partner Component object in the Trading Partner API. The following operations are supported

    -   Get

    -   Create

    -   Update

    -   Delete

    -   Query

    \(B2B-2204, B2B-2259, B2B-2600, B2B-2601, B2B-2602\)

    For more information about this feature, see the topic [Trading Partner object](https://developer.boomi.com/api/platformapi#tag/TradingPartnerComponent).


