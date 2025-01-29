# Google Ad Manager connector 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-afc0da75-8249-4dbc-9d92-76d701ab90b8"/>
</head>


The Google Ad Manager connector enables users to integrate their data with Google Ad Manager.

Google Ad Manager is an open, public API that enables managing, delivering, and measuring the performance of ads.

## Connector configuration 

To configure a connector to communicate with Google Ad Manager, set up two components:

-   Google Ad Manager connection
-   Google Ad Manager operation

This design provides reusable components that contain connection settings and operation settings. After building your connection and operation, set up your connector within a process. When you configure the Google Ad Manager connector correctly within your process, can map to and from virtually any connected application using the Google Ad Manager connector to manage, deliver, and measure the performance of ads.

## Supported editions 
supports the following edition:

-   Google Ad Manager API version v202405 \(default for new connections\), v202402 (Sunset in Feb, 2025), v202311(Sunset in Nov, 2024) and v202308 (Sunset in Aug, 2024).

    **Attention:** Existing connections using version v202305 will fail as Google ended support for this version in May, 2024, respectively. Boomi encourages you to update your connections and take advantage of the features offered by v202405. After the update, save the connection and re-import the operations. This procedure is required to ensure the operations work correctly with the new version.

    **Note:** Following is the deprecation schedule for other API versions to actively notify and encourage users to upgrade to the next version:

    -   v202405 (Default)
    -   v202402 (Supported)
    -   v202311 (Sunset in November, 2024)
    -   v202308 (Sunset in August, 2024)
    -   v202305 (Sunsetted in May, 2024)  
    For more information about Google's deprecation schedule and what’s new in API version v202405, see the [Google Ad Manager Deprecation Schedule](https://developers.google.com/ad-manager/api/deprecation) and [Google Ad Manager release notes](https://developers.google.com/ad-manager/api/rel_notes).


## Prerequisites 

To use the connector and implement a connection to your Google account instance from , verify that you have the following:

-   A Google Ad Manager Small Business account, or a Google Ad Manager Premium Solution account.
-   Prepared for OAuth 2.0 authentication.
-   Enabled API access to at least one network.


## Tracked properties

This connector has no predefined tracked properties. See the topic [Adding tracked fields to a connector operation](../Process%20building/t-atm-Adding_tracked_fields_to_a_connector_operation_f71821dd-95ee-4ebd-bfc9-3333262f56f6.md) to learn how to add a custom tracked field.


