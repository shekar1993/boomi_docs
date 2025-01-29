import TestConnection from './_TestCon.md'

# Shopify connection 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-811787cb-2461-4023-8dc4-3c415245b8f2"/>
</head>


The Shopify connection represents and contains all of the information that is needed to log in and connect to a single Shopify account.

If you have multiple accounts, you need a separate connection for each. You can pair a single connection with different Shopify operations to perform unique actions on a Shopify account.

:::note

The connector supports the API version listed in the Shopify connector topic.

::: 

## Connection tab 

The Shopify connector supports the OAuth 2.0 protocol for authentication and authorization.

In addition, to simplify the connection setup for those with a private Shopify app within their store, the connector supports Access token authentication.

 
 Description

**Store Base URL**   
  Enter the storefront address provided by Shopify when you opened your store in the format `https://<your_shop_name>.myshopify.com`. If you cannot remember your shop name, you can find it by logging into your Shopify admin \(General Settings page, Store name field\). Also, when logged into Shopify admin, the URL should include your store name.

:::note

In the URL, make sure and use all lowercase for http and https to ensure the connection works.

:::

**Authentication Type**   
 Select the authentication type for the connection.

 -   When you select OAuth 2.0, enter your credentials on the **OAuth 2.0** tab.
 -   When you select Access token, enter your private app's Admin API password in the **Access token** field.

**Access token**   
 Enter your private app's Admin API password, which you generate from the Shopify admin of the store you want to connect with your app.

## **OAuth 2.0** tab

:::note

For OAuth 2.0 authentication, you may need to specify in the external application the Boomi callback or redirect URL. The callback URL is `https://platform.boomi.com/account/<your_account_ID>/oauth2/callback` where `<your_account_ID>` is your Integration account ID. You can also find your account ID in the Integration platform at **Settings > Account Information** and **Setup > Account Information**.

::: 

The Shopify connector supports the OAuth 2.0 protocol for authentication and authorization. The connection fetches OAuth 2.0 credentials from the Shopify API. The client obtains an access token from Shopify, extracts a token from the response, and sends the token to the Shopify API that you are requesting to access. The connector automatically manages refresh tokens.


Description

**Client ID**    
 The client ID obtained from Shopify.

**Client Secret**    
 The client secret obtained from Shopify.

**Authorization Token URL**    
 The endpoint address \(URL\) of the server authorizing the client. The format of the URL is `https://<your_shop_name>.myshopify.com/admin/oauth/authorize`.

**Scope** - 
  URL list of permissions \(lowercase and separated by a comma\) that defines the extent and access range to which parts of your shop's data you want to access. You can ask for any of the scopes defined in Shopify's API access scopes article.

:::note

The Shopify Orders API does not does not allow public apps to access a merchant's orders that are older than 60 days with the current read\_orders or write\_orders access scopes. Apps needing access to all merchant's orders must first be approved by Shopify. For more information, see the [Shopify Developer changelog](https://shopify.dev/changelog). After Shopify approves your request and notified you, you can then enter the read\_all\_orders scope in this field.
  
:::

:::note Important

In the Shopify API version 2020-01 and greater, the scope write\_merchant\_managed\_fulfillment\_orders is required to successfully perform operations utilizing the Fulfillment object. New connections, by default, include the scope. Regenerate any existing tokens not having this scope to ensure your operations continue to work.

:::

**Access Token URL**   
 The URL of the token endpoint provided by Shopify to make API requests. The format of the URL is `https://<your_shop_name>.myshopify.com/admin/oauth/access_token`.

**Access Token** - 
 The encrypted access token retrieved from Shopify that is used to access protected resources. This token may not be required by the web site or application. Click to generate the access and refresh tokens. When a new window opens asking you to confirm offline access, click **Accept**. A second message indicates the access token was received and successfully generated.


<TestConnection />