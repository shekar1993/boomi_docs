# Installing the Boomi Integration Service connector

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-73fd266e-875d-4112-b9a1-eb284af2de3d"/>
</head>


To use the Boomi Integration Service connector you will first need to install the connector into your Flow tenant.


## Before you begin 

-   Ensure that you have set up, configured and deployed your Integration Flow Service component. See [Flow Service components](/docs/Atomsphere/Integration/Process%20building/c-atm-Flow_Service_components_697a4043-7e92-4df6-8f57-331107da2f67.md).


## Installing the Boomi Integration Service connector

1. Select Connectors from the main left-hand menu.
2.  Click **New Connector**.
3.  Select "Boomi Integration Service" from the **Connector Type** menu.
4.  Enter a **name** for the connector in the Name field.
5.  Select the Boomi atom that the connector should connect to from the **Atom Type** drop-down menu.
    -  Select from the pre-populated Boomi Atom Clouds. The **Base Uri** field is automatically populated with the endpoint URI.

    -   Select 'Other' if you wish to manually enter a URL for the connector, for example if you are using a local atom. Enter the URL endpoint in the The **URL for the Connector** field; this is usually the shared web server URL followed by the **Path to Service** in Integration.

6. If you have selected from the pre-populated Boomi Atom Clouds, enter the **Path to Service** as specified in the **Metadata** | **Path to Service** field in the Integration Flow Service component. For example, '/fs/FlowService'.
7.  Select the **Authentication Type** to be used by the connector:
    -   **Basic**: Use basic Integration username and token authentication

        -   **Enter Username**: Enter the **username** to use for connecting to the atom. This Username can be found in the **User Management** tab in the **Shared Web Server** settings for your environment.

        -   **Enter Token**: Enter the token to use for connecting to the atom. This **Token** can be found in the **User Management** tab in the **Shared Web Server** settings for your environment.

    -   **Client Certificate**: Use X.509 client certificate authentication.

        -   **Enter Client Certificate Data**: Click **Select or create a Value** to either select an existing value or create a new value to store the certificate data \(this value must be of the ‘String‘ content kind\). Copy and paste the certificate into the **Default Value** field and save the value.

        -   **Enter Client Certificate Password**: Click **Select or create a Value** to either select an existing value or create a new value to store the certificate password \(this value must be of the ‘Password‘ content kind\). Copy and paste the certificate password into the **Default Value** field and save the value.

8.  Click **Retrieve Connector Configuration Data**.
9.  The **Configuration** section displays all the configuration values that are set up in the Integration Flow Service component and created with the connector. Select from existing values, or create new values to store these configuration values as required.

    :::note
    
    The full connector URL is displayed in **the The URL for this Connector** field.

    :::

10. Click **Install**.
11. Click **Save Connector**.
12. The Boomi Integration Service connector is now installed, and can be imported into your flows, allowing you to connect to your deployed Integration Flow Service component.

:::note

See the Community article [Message Actions with the Flow Services Server Component](https://community.boomi.com/s/article/Message-Actions-with-the-Flow-Services-Server-Component) or more information on connecting the Integration Flow Service component with Flow.

:::