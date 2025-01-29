# Inverbis Analytics - Partner connection

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-1c4d07d0-6ec9-4f07-abd1-20fac5108c1b"/>
</head>

The Inverbis Analytics — Partner connection represents a single Inverbis Analytics account including login credentials. If you have multiple accounts, use a separate connection for each account. Pair a single connection with a different InverbisAnalytics — Partner operation to perform unique actions on a Inverbis Analytics account.

## Connection tab

Inverbis Analytics uses the OAuth 2.0 protocol for authentication and authorization. The connection fetches OAuth 2.0 credentials from the Inverbis Analytics  API. The client obtains an access token from the authorization service, extracts a token from the response, and then sends the token to the Inverbis Analytics  API that you are requesting to access. To refresh the token once it expires, you must .

**Authentication Type** - Identifies the secure login type as OAuth 2.0.

**Server** - The URL of the server used, `https://identity.{server_used` or `nothing}.inverbisanalytics.com/auth/realms/{tenant}/protocol/openid-connect/auth`

## OAuth 2.0 tab

:::note

For OAuth 2.0 authentication, you may need to specify in the application the Boomi callback or redirect URL. The callback URL is `https://platform.boomi.com/account/<your_AtomSphere_account_ID>/oauth2/callback`. Your AtomSphere account ID is in **Setup** > **Account** > **Account Information**.

:::

**Client ID** - Your client ID for the connection.

**Client Secret** - Leave this value as an empty string.

**Authorization Token URL** - The URL to the server to retrieve the token.
`https://identity.{server_used`  or `nothing}.com/auth/realms/{tenant}/protocol/openid-connect/auth`.

**Access Token URL** - The URL to the server to retrieve the token.
`https://identity.{server_used` or `nothing}.inverbisanalytics.com/auth/realms/{tenant}/protocol/openid-connect/token`. 

**Generate/Regenerate button** - Once all the above data is added, you have to click this button to be redirected to the login page.