import TestConnection from './_TestCon.md'

# Microsoft Dynamics 365 for Customer Engagement connection 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-70b4dc9d-d503-4c75-8eaf-403e08c1e91b"/>
</head>


The Microsoft Dynamics 365 for Customer Engagement connection contains information for a single endpoint URL to an Microsoft Dynamics customer relationship management (CRM) service, including sign-in credentials. If you use multiple services, you need a separate connection component for each.

You can pair this connection with different Microsoft Dynamics 365 for Customer Engagement operations to perform a unique action against a Dynamics 365 CRM service.

## Connection tab 

Compose the **API Root URL** using the following components. For example, Boomi uses `http://boomi.crm.dynamics.com/api/data/v9.0` as the URL to interact with the Dynamics 365 for Customer Engagement API.



**Protocol** - 
 Enter the appropriate protocol, either `https://` or `http://`.

**Base URL** - 
  Enter the URL you normally use to open the web application. For online instances of Dynamics 365, use `<tenant>.crm.dynamics.com`.

:::note

If the region in which your account resides is outside of the United States, consult the [Direct sign in to the Dynamics 365 Administration Center](https://docs.microsoft.com/en-us/dynamics365/customer-engagement/admin/sign-in-office-365-apps#direct-sign-in-to-the-dynamics-365-administration-center) to replace .crm with the correct region identifier.

:::

**Web API path** - 
  Enter the path for the web API. For Dynamics 365, use /api/data/.

**Version** - 
 Enter the version of Dynamics CRM 365 service you intend to use using the following format: `v[Major_version].[Minor_version][PatchVersion]/`. For example, enter `v9.0` if you are using version 9 of Dynamics 365.

**Honor Atom Proxy Settings** - 
 Select to honor and apply the **Proxy Host**, **Proxy Port**, **Proxy User ID**, **Encrypted Proxy Password**, and **Non Proxy Hosts** Atom proxy settings \(container properties\) to the connection. By honoring these settings, you can use the connection in situations requiring a connection to a Dynamics 365 for Customer Engagement service through a proxy. To learn more about these proxy settings, see the topic [Properties panel, Advanced tab](../Integration%20management/r-atm-Properties_panel_Advanced_tab_c39737e8-1b16-4fdd-b414-152694364c14.md).

**Connection Timeout \(ms\)** - 
  \(Optional\) Enter the number of milliseconds that the connector waits to complete the connection handshake to the Microsoft Dynamics 365 for Customer Engagement service until it times out.

-   If you leave this field blank, the connection uses the system default corresponding to the time-out configuration from the underlying JVM or operating system.
 -   If you enter zero \(0\), the connection waits indefinitely.
 -   If you enter a negative value, the connection uses the network time-out settings specified for the Atom. For more information, see the [Changing network timeouts](../Integration%20management/t-atm-Changing_network_timeouts_be7b06eb-0788-48dc-a086-f95c9457a89d.md) topic.

**Read Timeout \(ms\)** - 
 \(Optional\) Enter the number of milliseconds that the connector waits to complete the data transfer to the Microsoft Dynamics 365 for Customer Engagement service until it times out.

 -   If you leave this field blank, the connection uses the system default corresponding to the time-out configuration from the underlying JVM or operating system.
 -   If you enter zero \(0\), the connection waits indefinitely.
-   If you enter a negative value, the connection uses the network time-out settings specified for the Atom. For more information, see the topic [Changing network timeouts](../Integration%20management/t-atm-Changing_network_timeouts_be7b06eb-0788-48dc-a086-f95c9457a89d.md).

Use the Microsoft Dynamics 365 for Customer Engagement operation to create the resource action you intend to use \(Create, Delete, Get, and so on\) with the Web API URL.

## OAuth 2.0 tab

:::note

For OAuth 2.0 authentication, you may need to specify in the external application the Boomi callback or redirect URL. The callback URL is `https://platform.boomi.com/account/<youraccount_ID>/oauth2/callback` where `<youraccount_ID>` is your Integration account ID. You can also find your account ID in the Integration platform at **Settings > Account Information and Setup > Account Information**.

::: 

Method calls to the web services must be authorized with the identity provider for that service endpoint.

![build-db-Dynamics-365-CE-connection-OAuth2](../Images/build-db-Dynamics-365-CE-connection-OAuth2_0-tab.jpg)



**Grant Type**   
 Select the grant type to use. The supported grant types are:

 -   Authorization Code - this is the standard, 3-Legged OAuth2 authorization where you grant the client an authorization code they can exchange for an access token.
 -   Client Credentials - uses client credentials to retrieve an access token directly instead of asking for user authorization. You can use this authorization for administration tasks specific to a client.

**Client ID \(Authorization Code and Client Credentials grant types\)** - 
 The unique application ID used to request authorized access to client data.

To find the application ID in the **Microsoft Azure** portal, navigate to **Azure Active Directory** \> **App registrations** and view the application details.

**Client Secret \(Authorization Code and Client Credentials grant types\)** - 
 The alphanumeric key value created in the Microsoft Azure portal.

To create a key in the **Microsoft Azure** portal, navigate to **Azure Active Directory** \> **App registrations**, open your application's details, and click **Settings** \> **Keys**. Create and save a new password to generate the key value.

**Add Authorization Parameter \(Authorization Code grant type\)** - 
 The name and value of additional or custom authorization parameters required by your application.

\(**Required**\) The Dynamics 365 for Customer Engagement connection automatically populates a resource authorization parameter with resource as the name. Enter the resource value that contains the protocol and base URL of the web API \(for example, `https://boomi.crm.dynamics.com`\). To ensure that the resource value is successful in testing your connection, ensure that you configure a Reply URL in your application's **Settings** found in the **Azure Active Directory** \> **App Registrations** tab of the **Microsoft Azure** portal.

Optionally add the name and value of additional extensible endpoint parameters as needed.

**Access Token URL \(Authorization Code and Client Credentials grant types\)**   
  The endpoint address \(URL\) provided by the application to make API requests.

**Add Access Token Parameter \(Authorization Code and Client Credentials grant types\)**   
  \(Optional\) The name and value of additional or custom token parameters required by your application.

**Access Token \(Authorization Code grant type\)** - 
 To authorize access to the Dynamics 365 for Customer Engagement account, use the encrypted token issued by the **Azure Active Directory**. Click **Generate** to create the access and refresh tokens. Click **Accept** when a new window asks you to confirm offline access. A second message indicates it received the access token and generated it successfully.

In the **Microsoft Azure** portal, ensure that you add the Dynamics CRM Online \(Microsoft.CRM\) API as a required permission.

<TestConnection />