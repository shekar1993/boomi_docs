# Google G Suite connection 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-c27b619e-0dea-424f-87b0-b06ef414f75b"/>
</head>


The Google G Suite connection represents a single Google account instance including sign in credentials.

## **Connection** tab 




**Authentication Type** - 
 Identifies the secure sign in type as OAuth 2.0.

**User Name** - 
User name for the Google account.

**Password** - 
Password for the user’s Google account.

**API Key** - 
 The code required for API access. For more information, see Google’s description about how to use and acquire [API Keys](https://developers.google.com/api-client-library/python/guide/aaa_apikeys).

## **OAuth 2.0** tab

:::note

For OAuth 2.0 authentication, you may need to specify in the external application the Boomi callback or redirect URL. The callback URL is `https://platform.boomi.com/account/<your_account_ID>/oauth2/callback` where `<your__account_ID>` is your Integration account ID. You can also find your account ID in the Integration platform at **Settings > Account Information** and **Setup > Account Information**.

::: 

The Google G Suite connection supports OAuth 2.0 authorization for on-premise and cloud-based integrations:

-   OAuth 2.0 is not backwards compatible with OAuth 1.0 or 1.0a.
-   To use OAuth 2.0 authentication with your cloud application and if you use custom policy files, you must edit account permissions.
-   When switching to OAuth 2.0, reimport your profile to incorporate any changes to the Google API.
-   The connector automatically retrieves refresh tokens.

To use OAuth 2.0, enter the following information:




**Client ID** - 
The client ID obtained from Google.

**Client Secret** - 
The client secret obtained from Google.

**Click to Set** - 
Click to set the client secret password. After typing the password, click **Apply**.

**Scope** - 
 URL list of permissions \(case-sensitive and separated by a space\) defining the scopes required to access the APIs and services \(People, Calendar, Sheets\). New connections, by default, provide all of the scopes required to successfully access and connect to the services. For added flexibility, you can add, edit, and remove scopes.

-   To use the scopes in your process and successfully access the API and service, generate the access token and save the connection.

 -   Existing connections utilize any added, edited, and removed scopes in a process after regenerating the access token and saving the connection.


**Access Token** - 
You can use the encrypted access token retrieved from Google to access protected resources.

**Generate** - 
Click to generate the access and refresh tokens. When a new window opens asking you to confirm offline access, click **Accept**. A second message indicates the access token was received and successfully generated.