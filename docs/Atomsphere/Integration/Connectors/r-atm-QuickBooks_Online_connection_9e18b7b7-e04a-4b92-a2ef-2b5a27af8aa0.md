import TestConnection from './_TestCon.md'

# QuickBooks Online connection 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-9e18b7b7-e04a-4b92-a2ef-2b5a27af8aa0"/>
</head>


The QuickBooks Online connection represents and contains all of the information you need to connect and sign into a single QuickBooks Online account.

If you have multiple accounts, you need a separate connection for each. You can pair a single connection with different operations to perform a unique action against a QuickBooks Online account instance.

:::note

To configure the connection, you must have administrator rights to the Online account.

:::

## Connection tab 

The QuickBooks Online connector uses the OAuth 2.0 protocol for authentication and authorization. For more information, see the linked Authentication and Authorization topic.

The following fields appear on the **Connection** tab.

**Base URL** - 
The URL for the QuickBooks Online API service endpoint. For example, `https://quickbooks.api.intuit.com`.

**Company ID** - 
Your QuickBooks Online company ID. Intuit assigns this ID to a company when a QuickBooks Online user creates a company and you get your PIN. This ID is also known as the Realm ID.

## OAuth 2.0 tab

:::note

For OAuth 2.0 authentication, you may need to specify in the external application the Boomi callback or redirect URL. The callback URL is `https://platform.boomi.com/account/<your_account_ID>/oauth2/callback` where `<your_account_ID>` is your Integration account ID. You can also find your account ID in the Integration platform at **Settings > Account Information** and **Setup > Account Information**.

:::

**Client ID** - 
You obtain the client ID from QuickBooks Online. You can get your client ID from the **Keys** tab on the application profile created in the developer portal.

**Client Secret** - 
The client secret obtained from QuickBooks Online. Click **Click to Set** to open the **Password** window, enter or paste your client secret, and click **Apply**. Enable pop-up windows in your browser.

You can get your Client Secret from the **Keys** tab on the application profile created in the developer portal.

**Access Token** - 
The encrypted access token retrieved from QuickBooks Online used to access protected resources. Click **Generate**. When a new window opens asking you to confirm offline access, click **Allow**. A second message indicates it received the Authorization code and generated it successfully.

**Reset** - 
Click to clear the access token.


<TestConnection />