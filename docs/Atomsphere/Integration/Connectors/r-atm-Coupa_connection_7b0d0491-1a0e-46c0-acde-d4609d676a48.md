# Coupa connection 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-7b0d0491-1a0e-46c0-acde-d4609d676a48"/>
</head>


The Coupa connection represents a single Coupa organization including sign in credentials. If you have multiple organizations, you need a separate connection for each one.

## **Connection** tab 




**URL** - 
The URL for the Coupa service. For example: `https://name.coupahost.com/api`

**Token** - 
The token for signing into the Coupa service.

**Authentication Type** - 
Select the authentication type to connect with the service:

:::info Attention

The API Key authentication method is depreceated.

:::

- **API Key** - Coupa requires API keys for users to authenticate and securely send API requests to your Coupa instance. Each API key is unique. When authenticating using API Key, provide a **Token** and **URL** on this tab.

- **OAuth 2.0** - Use OAuth 2.0 tokens to communicate with Coupa services. When authenticating using OAuth 2.0, provide the **service URL** on this tab and the **Client ID**, **Client Secret**, **Scopes**, and **Access Token URL** on the **OAuth 2.0** tab.

## **OAuth 2.0** tab 

When authenticating using OAuth 2.0, provide the appropriate **Client ID**, **Client Secret**, **Scopes**, and **Access Token URL** for your Coupa instance.

:::note

OAuth 2.0 tokens expire 24 hours after being issued. The connector automatically renews and refreshes the token, ensuring a successful operation.

:::

**Grant Type** - 
Grant type refers to the way an application gets an OAuth 2.0 access token for client authentication to protected cloud resources. The connection provides **Client Credentials** to retrieve an access token directly instead of asking for user authorization. This authorization is typically used for administration tasks specific to a client.

**Client ID** - 
The Client ID associated with the OAuth 2.0 configuration for your Coupa instance. You use this unique ID to request authorized access to client data.

**Client Secret** - 
The client secret associated with the OAuth 2.0 configuration for your Coupa instance. Click on **Click to Set** to open the **Password** window, and enter or paste the alphanumeric client secret that is associated with the Client ID. When you are done, click **Apply**. Make sure you enable popup windows in your browser.

**Scope** - 
 List of the permissions \(case-sensitive and separated by a space\) defining the extent and access range to protected cloud resources. If you change scope permissions, you must authenticate again to ensure it grants all requested permissions.

**Access Token URL** - 
 The URL of the token endpoint, specific for each Coupa instance, used to retrieve and refresh tokens.

## Test Connection

You can test your connection settings before you use or save the connection in a process. The Test Connection ensures that your specified settings are correct, valid, and accessible. If the test connection is successful, you can save the connection. Otherwise, review and correct any incorrect settings, then test again.

:::info Attention

You can only run the Test Connection against containers associated with your account (local Atoms, Molecules, and Atom Clouds).

:::

## Test Connection troubleshooting 

When testing the Coupa connection and if you changed the security permissions of the API Key to your Coupa instance, Test Connection might not work. In this situation, verify that your security credentials are set to query the Tax Code resource. Then, retry Test Connection to ensure it is successful.