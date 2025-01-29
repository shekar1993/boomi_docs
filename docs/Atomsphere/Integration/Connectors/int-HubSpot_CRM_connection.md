# HubSpot CRM (Tech Preview) connection

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-836f517b-e35e-417f-8eb0-606d7b12cd51"/>
</head>


The HubSpot CRM connection represents a single HubSpot CRM account, including authentication credentials.

If you have multiple HubSpot CRM accounts, including sandbox accounts, you will need a separate connection component for each. You can pair this connection with different HubSpot CRM operations to perform unique actions against a HubSpot CRM instance.

When configuring your processes, direct your HubSpot CRM connection to a sandbox instance by using the base URL and access token URL provided in the connection settings. Once your processes are ready for production, simply update the URLs to point to the production instance. During execution, the processes will utilize the updated connection settings.

## Connection tab​

The HubSpot CRM connector uses a Private App Access token or OAuth 2.0 to authenticate.

**Base URL** - Enter the REST endpoint to connect to, for example `https://api.hubapi.com` for production.

**Authentication Types** - Private App Access Token and OAuth 2.0 are the two authentication types available. Select either Private App Access token or OAuth 2.0 to authenticate your HubSpot CRM account. The default value is OAuth 2.0. To learn more about Private App, see the topic [Authentication methods on HubSpot](https://developers.hubspot.com/docs/guides/apps/authentication/intro-to-auth#authentication-methods-on-hubspot).

:::note  

User account creation for private apps is optional.  
:::

## Private Access 
If the user selects the Private App Access token, the user needs to add a private access token key in the respective field to authenticate.

## OAuth 2.0 tab​

:::note  

For OAuth 2.0 authentication, you may need to specify in the HubSpot CRM application the Boomi callback or redirect URL.

- **The callback URL is**: `https://platform.boomi.com/account/<your_account_ID>/oauth2/callback where <your__account_ID> is your Integration account ID`
- You can also find your account ID in the Integration platform at Settings > Account Information and Setup > Account Information.  
:::

- **Client ID** - The client ID obtained from HubSpot CRM when you create the OAuth client.

- **Client Secret** - The client secret obtained from HubSpot CRM when you create the OAuth client.

- **Scope** - The external authorization service client application scope to add the required scope(read, write) for the objects to be used in the integration.

- **Request headers (Private Access and Oauth 2.0)** - If a user wants to add any specific headers to be used across all the API’s using the Request Header option, the user can add using this option.

## Test Connection
You can test your connection settings before you use or save the connection in a process. The Test Connection ensures that your specified settings are correct, valid, and accessible. If the test connection is successful, you can save the connection. Otherwise, review and correct any incorrect settings, then test again.

:::info Attention

You can only run the **Test Connection** against containers associated with your account (local Atoms, Molecules, and Atom Clouds).

:::