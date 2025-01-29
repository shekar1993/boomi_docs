# Live Optics connector

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-e7e24c79-808d-44c5-a02b-adfc8a8bdb0f"/>
</head>


The Live Optics connector enables you to connect to the Live Optics application and Get necessary data in JSON format using PAPIs and Project ID.

## Connector configuration

To configure a connector to communicate with Live Optics, set up two components:

-   Live Optics connection
-   Live Optics operation

This design provides reusable components that contain connection settings such as username, password, and settings. After building your connection and connector operation, set up your connector within a process. When the Live Optics connector is defined properly within your process, Integration can map to and from virtually any system using the connector to retrieve data.

## Prerequisites

The following prerequisites are necessary to implement a connection to your account from Integration:

-   Live Optics API URL

-   To implement a connection to your Live Optics account, make sure an Atom is either deployed on your local machine or is hosted with Boomi Integration and have the following information:

    -   A valid set of credentials with the following three-string components used in Session Login

        -   **Session Login ID**: An ASCII string of characters that uniquely identifies the user.

        -   **Session Login Secret**: A base-64 encoded string that the user uses to authenticate themselves.

        -   **Shared Secret**: A second base-64 encoded string that the user uses to extract the session string from the Session Login.

        -   **The Project ID**: This is the ID of the project for which the project details are to be rendered.

-   Configure Integration with valid user credentials and necessary permissions to perform the tasks necessary for the integration \(such as being able to invoke RFCs and PAPIs, manipulate specific business objects, etc.\).

## Tracked properties

This connector has no predefined tracked properties. See the topic [Adding tracked fields to a connector operation](../Process%20building/t-atm-Adding_tracked_fields_to_a_connector_operation_f71821dd-95ee-4ebd-bfc9-3333262f56f6.md) to learn how to add a custom tracked field.