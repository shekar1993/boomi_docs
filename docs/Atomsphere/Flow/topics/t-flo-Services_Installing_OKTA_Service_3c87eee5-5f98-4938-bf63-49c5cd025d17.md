# Installing the Okta (Deprecated) connector

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-3c87eee5-5f98-4938-bf63-49c5cd025d17"/>
</head>

:::warning

This connector is now in Deprecated status. It is no longer available for new users and is not actively maintained. We will provide a minimum six-month notice before its retirement. We recommend upgrading to the newer supported version of this connector.

:::

To use the Okta (Deprecated) connector you will first need to install the connector into your tenant.

## Before you begin

Before installing the Okta (Deprecated) connector, you will need to have created an app in Okta and copied a number of values to use during the connector installation.

1.  Create an Okta account or log in to your existing account. If you do not have an Okta account, you can create a free trial account at [https://www.okta.com/free-trial](https://www.okta.com/free-trial/).
2.  Create a new application in Okta, using the following settings during installation.
    -   **Sign on method**: OpenID Connect
    -   **Login redirect URIs**: https://flow.manywho.com/api/run/1/oauth2
3. Copy the following values from your Okta app to use when installing the Okta (Deprecated) connector.
    -   **Client ID**
    -   **Client Secret**
    -   **API Token** (You will need to create an API Token for the app and copy its value)
4.  Ensure that you have added and assigned at least one user to the app in Okta.

:::note

For more information on completing these tasks refer to the official Okta documentation at [help.okta.com](https://help.okta.com).

:::

## Installing the Okta (Deprecated) connector

1.  Select **Connectors** from the main left-hand menu.
2.  Click **New Connector**.
3.  Select "Okta \(Deprecated\)" from the **Connector Type** menu.
4.  Enter a name for the connector in the **Name** field, "Okta Connector" for example. he Okta (Deprecated) connector **URL** is displayed in the Url field.
5.  Click **Retrieve Connector Configuration Data**.
6.  Specify the connector configuration values. See [ Okta (Deprecated) connector configuration values.](r-flo-Services_OKTA_Service_Values_52557484-0ed6-488d-ac7e-5f3ee9ef5c75.md).
7.  Click **Install**.
8.  Click **Save Connector**
9.  The Okta (Deprecated) connector is now installed.