# Google Ad Manager connection 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-5f7d3799-de09-4453-9632-f630984151b8"/>
</head>


The Google Ad Manager connection represents a single Google account instance including sign in credentials.

## **Connection** tab 

The Google Ad Manager connector uses the OAuth 2.0 protocol for authentication and authorization.

The following fields appear on the **Connection** tab.

**API Version** - 
The available API versions are:

- v202405
- v202402
- v202311
- v202308 (Sunset in August, 2024)

:::info Attention

Existing connections using version v202305 will fail as Google ended support for this version in May, 2024. Boomi encourages you to update your connections and take advantage of the features offered by v202405. After the update, save the connection and reimport the operations. This procedure is required to ensure the operations work correctly with the new version. For more information about Google's deprecation schedule and what’s new in API version v202405, see the [Google Ad Manager Deprecation Schedule](https://developers.google.com/ad-manager/api/deprecation) and [Google Ad Manager release notes](https://developers.google.com/ad-manager/api/rel_notes).

:::

**Network Code** - 
 The network code used in ad tags. You can find this code in Google Ad Manager \(Admin \> Global settings \> Network settings\) and the code ensures that Google Ad Manager knows that your ad tags belong to your network.

**Application Name** - 
 The ApplicationName string for your product.

## OAuth 2.0 tab 

:::note

For OAuth 2.0 authentication, you may need to specify in the external application the Boomi callback or redirect URL. The callback URL is `https://platform.boomi.com/account/<your_account_ID>/oauth2/callback` where `<your__account_ID>` is your Integration account ID. You can also find your account ID in the Integration platform at **Settings > Account Information** and **Setup > Account Information**.

:::

**Client ID** - 
 The client ID obtained from the Google API Console.

**Client Secret** - 
 The client secret obtained from the Google API Console. Click **Click to Set** to open the **Password** window, type or paste your client secret, and click **Apply**. Enable pop-up windows in your browser.

**Access Token** - 
  The encrypted access token retrieved from the Google API Console used to access protected resources. Click **Generate** to generate the access and refresh tokens. When a new window opens asking you to confirm offline access, click **Allow**. A second message indicates the access token was received and successfully generated.