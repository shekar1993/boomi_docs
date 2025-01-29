import TestConnection from './_TestCon.md'

# Microsoft Azure Service Bus connection 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-d9f97998-6dca-4ede-bda9-872f4f674a86"/>
</head>


The Microsoft Azure Service Bus connection represents a single Microsoft Azure Service Bus instance including sign-in credentials.

## Connection tab

:::note

You can save the connection without providing values for any connection field. However, provide valid values so you can successfully run a process, deploy a listener process, and so on.

:::

**Authentication Type** - 
 Select the authentication type to connect with the service:

-   **SAS** — Shared Access Signatures \(SAS\) is a claims-based authentication method using simple tokens. Keys are secured and used to sign information that the service can later verify. When authenticating using SAS, provide a  **SAS Key Name** and **SAS Key** on this tab.
 -   **OAuth 2.0 \(Using service principal\)** — Service principals are applications with a set of permissions registered in a tenant. You can use these to obtain OAuth 2.0 tokens and communicate with Azure services. When authenticating using OAuth 2.0 \(Using service principal\), provide the service principal's credentials on the **OAuth 2.0** tab.
  
**Azure Namespace Name** - 
 Enter or paste the namespace, which is the name of the Service Bus resource created in the Azure portal. The connection uses this **Azure Namespace Name** and the **Domain Name** to build the fully-qualified domain name. When you create a Service Bus namespace, it establishes a policy automatically for the entire namespace having all permissions.

**Domain Name** - 
 For added flexibility to provide base URLs from other domains, enter or paste the domain name of the Service Bus service in your Azure account. The connection uses the **Azure Namespace Name** and this **Domain Name** to build the fully-qualified domain in the format: `https://<yournamespace.<yourdomain>`. Provide a valid value to ensure you can successfully run a process, deploy a listener process, and so on. Existing connections use `servicebus.windows.net` as the domain name until changed.

**SAS Key Name** - 
 When authenticating using SAS, type or paste the Access policy key name from the Shared Access Policy section of the Azure portal.

:::note

Do not provide a value when authenticating using OAuth 2.0 \(Using service principal\). Instead, provide the service principal's credentials on the **OAuth 2.0** tab.

:::

**SAS Key**   
 When authenticating using SAS, enter or paste the primary or secondary key from the Shared Access Policy section of the Azure portal into the password field.

:::note

Do not provide a value when authenticating using OAuth 2.0 \(Using service principal\). Instead, provide the service principal's credentials on the **OAuth 2.0** tab.

:::

## **OAuth 2.0** tab

:::note

For OAuth 2.0 authentication, you may need to specify in the external application the Boomi callback or redirect URL. The callback URL is `https://platform.boomi.com/account/<your_account_ID>/oauth2/callback` where `<your_account_ID>` is your Integration account ID. You can also find your account ID in the Integration platform at **Settings > Account Information** and **Setup > Account Information**.

::: 

When authenticating using **OAuth 2.0 \(Using service principal\)**, provide the service principal's credentials. Service principals are applications with a set of permissions registered in a tenant. You can use these to obtain OAuth 2.0 tokens and communicate with Azure services. OAuth 2.0 authentication works for all supported operations with queues, topics, and subscriptions. Additionally, service principals using Azure token endpoints v1.0 and 2.0 are supported.

:::note

Service principal tokens expire one hour after being issued. After that, the connector automatically renews and refreshes the token to ensure the operation runs successfully.

:::

**Grant Type** - 
 Grant type refers to the way an application gets an OAuth 2.0 access token for client authentication to protected cloud resources. The connection provides **Client Credentials** to retrieve an access token directly instead of asking for user authorization. You use authorization for administration tasks specific to a client.

**Client ID** - 
  The Client ID is associated with the service principal, which you can obtain when registering your client with Azure. You can use this unique ID to request authorized access to client data.

**Client Secret** - 
 The client secret associated with the service principal, which you can obtain when registering your client with Azure. Select **Click to Set** to open the **Password** window, and type or paste the alphanumeric client secret associated with the Client ID. When you are done, click **Apply**. Enable pop-up windows in your browser.

**Scope** - 
 URL list of the permissions \(case-sensitive and separated by a space\) defining the extent and access range to protected cloud resources. If you change scope permissions, you need to reauthenticate to ensure that it grants all of the requested permissions.

**Access Token URL** - 
  The URL of the token endpoint, specific for each tenant, that the Azure account instance uses to retrieve and refresh tokens.

**Access Token Parameter** - 
  The encrypted access token parameter resource indicates the ServiceBus Namespace URL used to access protected resources.

<TestConnection />