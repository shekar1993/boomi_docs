# Slack connection 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-2bfa17f8-6e41-4367-8152-0b6445e006c6"/>
</head>


The Slack connection represents a single Slack account, including login credentials.

If you have multiple accounts, use a separate connection for each and configure the URL accordingly. Pair a single connection with different Slack operations to perform a unique action against a Slack account.

## Connection tab

Complete the connection settings in the OAuth 2.0 tab.

**Authentication Type** - 
 OAuth 2.0 is the default authentication and cannot be changed.

## **OAuth 2.0** tab

:::note

For OAuth 2.0 authentication, you may need to specify in the external application the Boomi callback or redirect URL. The callback URL is `https://platform.boomi.com/account/<your_account_ID>/oauth2/callback` where `<your__account_ID>` is your Integration account ID. You can also find your account ID in the Integration platform at **Settings > Account Information** and **Setup > Account Information**.

:::

**Client ID** - 
 The Client ID obtained from Slack.

**Client Secret** - 
 The client secret obtained from Slack.

**Access Token** - 
 The encrypted access token retrieved from Slack that is used to access protected resources. Click to generate the access and refresh tokens. When a new window opens asking you to confirm offline access, click  **Accept**. A second message indicates the access token was received and successfully generated.