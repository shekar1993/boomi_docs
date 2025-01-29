# Installing the SQL (Deprecated) connector

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-0fa664a9-6e88-4d88-86a4-7e3ec465de92"/>
</head>

:::warning

This connector is now in Deprecated status. It is no longer available for new users and is not actively maintained. We will provide a minimum six-month notice before its retirement. We recommend upgrading to the newer supported version of this connector.

:::

To use the SQL (Deprecated) connector you will first need to install the connector into your tenant.

## Before you begin

- Before installing the SQL (Deprecated) connector you will need user credentials with the appropriate permissions to read the database metadata. Consult your database documentation or contact your database administrator if you do not have this.

- As a Boomi open source connector, the SQL (Deprecated) connector can be run either in the cloud using the official SQL (Deprecated) connector URL or in your own environment.

  - When running in the Boomi cloud the database host will need to be accessible via internet access.

  - When the connector is running in your cloud or on-premise, your connector URL will need to be accessible, the database will need to be accessible by the connector, but the database host itself does not need to be publicly accessible via internet access.

- The values used during installation will depend on your choice of database and configuration. See [SQL (Deprecated) connector configuration values](r-flo-Services_SQL_Service_Values_0963c99c-155f-4521-b9f5-5a026f87be92.md) for details on the required values for this.
  
:::note

Using SSL and a Server Public Certificate is recommended best practice when implementing the SQL (Deprecated) connector, particularly if the connection between the SQL database and the SQL (Deprecated) connector is not in your private network.

:::


## Installing the SQL (Deprecated) connector

1. Select **Connectors** from the main left-hand menu.
2. Click **New Connector**.
3. Select "SQL \(Deprecated\)" from the **Connector Type** menu.
4. Enter a name for the in the **Name** field, "SQL connector" for example. The SQL (Deprecated) connector **URL** is shown in the Url field.
5. Click **Retrieve Connector Configuration Data**.
6. Specify the connector configuration values for your database configuration. See [SQL (Deprecated) connector configuration values](r-flo-Services_SQL_Service_Values_0963c99c-155f-4521-b9f5-5a026f87be92.md) for details on the required values.
7. Click **Install**.
8. Click **Save**. <br />
    The SQL (Deprecated) connector is now installed.