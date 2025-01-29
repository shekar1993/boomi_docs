import TestConnection from './_TestCon.md'

# Google Sheets connection 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-e993e3d3-75c2-47fc-a23f-c6451c4ff83e"/>
</head>


The Google Sheets connection represents a single Google account including sign in credentials.

If you have multiple accounts, use a separate connection for each account and configure the URL accordingly. Pair a single connection with different Google Sheets operations to perform unique actions on a Google Sheets account.

## Connection tab 

The Google Sheets connector uses OAuth 2.0 credentials for authentication and authorization. The connection obtains OAuth 2.0 credentials from the Google API console \(see the linked topic\). The client obtains an access token from the Google Authorization Server, extracts a token from the response, and then sends the token to the Google API that you are asking to access. The connector automatically manages refresh tokens.

**Authentication Type** - 
 OAuth 2.0 is the default and cannot be changed.

:::note

For OAuth 2.0 authentication, you may need to specify in the external application the Boomi callback or redirect URL. The callback URL is `https://platform.boomi.com/account/<your_account_ID>/oauth2/callback` where `<your__account_ID>` is your Integration account ID. You can also find your account ID in the Integration platform at **Settings > Account Information** and **Setup > Account Information**.

::: 

**Client ID** - 
 Enter or paste your client ID from the Google Console.

**Client Secret** - 
 Click **Click to Set** to open the **Password** window, enter or paste your client secret, and click **Apply**. Enable pop-up windows in your browser.

**Access Token** - 
 Click **Generate**. When a new window opens asking you to confirm offline access, click **Allow**. A second message indicates the Authorization code was received.

<TestConnection />

## Test Connection troubleshooting 

When testing the Google Sheets connection, access to both the Google Drive API and Google Sheets API are tested. If you did not enable the API's, or if there are issues connecting to them, you will receive a test connection error.

