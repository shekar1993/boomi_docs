# Accessing the Swagger Visualization Portal 

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-6da4a4ec-7ae1-4e71-9cbf-d28a162f487e"/>
</head>


Access the Swagger Visualization Portal on the **API Catalog** page.

## Before you begin

1.  Authorize the APIs and [define a REST endpoint for the APIs](/docs/Atomsphere/API%20Management/Topics/t-atm-Adding_a_REST_endpoint_to_an_API_component_ab757f9c-ebf1-4ee2-97d4-8016460378bb.md) that you want to view in the Swagger Visualization Portal.
2.  Deploy the API to an Environment that has an Atom with an **API Type** set to **Advanced** in the [Shared Web Server](/docs/Atomsphere/Integration/Event-based%20integration/c-atm-Shared_web_server_f9f50738-1a26-4aba-8f3a-f09fef752777.md) settings of Atom Management in  Integration.

:::note 

To avoid a "Failed to load specification" error, rename the default root node name of the imported JSON profiles in the Profile component.

:::

## Procedure

1.  Go to the **Configure APIs and Applications** \> **Deployed APIs** page.

    Your currently deployed API Service and API Proxy components appear.

2.  Find the API Service component that you want to view the Swagger Visualization Portal for and click **View** in the Details column.

    The API slide-out panel opens.

3.  Click on the **REST** tab and then click **Access Swagger Visualization Portal**.

4.  Based on the **Authentication Type** set on your Atom in the **Atom Management** \> **Shared Web Server** panel of Integration, the following situations occur:

    -   If no authentication \(None\) is set, the portal opens without requiring additional credentials.
    -   If Basic authentication type is set and it specifies more than one user on the **User Management** tab of the **Shared Web Server** panel, enter your user name and password. Click **Open**.
    -   If the External Provider type is set, select the desired credentials for **API Contract**, **Application**, and **API Key**. Click **Open** and enter your credentials set against your identity provider.

        A web proxy window for the **External Provider** setting opens, stating the receipt of the Authorization Code. Optionally, close this window to return to the Swagger Visualization Portal.

    -   If you configure multiple authentication methods for an Atom, it uses the default authentication method configured in **Shared Web Server** settings.

## Results

The Swagger Visualization Portal opens a new tab in your internet browser.