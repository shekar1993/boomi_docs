# Amazon Selling Partner (Tech Preview) connection 
<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-8996036c-43d9-4ef0-aa23-3b7cb9680892"/>
</head>

The Amazon Selling Partner connection represents an authorized connection to a particular application in a Selling Partner account. The connection is authenticated by a private application; sellers and vendors can self-authorize to access their account information. To learn more, see the [Self Authorization](https://developer-docs.amazon.com/sp-api/docs/self-authorization) topic in the Amazon developer docs. 

If you have multiple accounts, use a separate connection for each and configure the URL accordingly. Pair a single connection with different Amazon Selling Partner operations to perform a unique action against an Amazon Selling Partner account.

## Connection tab 

**Selling Partner API endpoint** - Select the Selling Partner API endpoint corresponding to your region. The default value is **North America (Canada, US, Mexico, and Brazil marketplaces)**. The Selling Partner API provides sandbox environments that allow you to test your applications without affecting production data or triggering real-world events.

**LWA Client ID** - Enter your LWA Client ID. You must have already [registered your app](https://developer-docs.amazon.com/sp-api/docs/registering-your-application) to view this value. See the [Viewing your application information and credentials](https://developer-docs.amazon.com/sp-api/docs/registering-your-application) topic in the Amazon developer docs to learn more.

**LWA Client Secret** - Enter your LWA Client Secret. You must have already [registered your app](https://developer-docs.amazon.com/sp-api/docs/registering-your-application) to view this value. See the [Viewing your application information and credentials](https://developer-docs.amazon.com/sp-api/docs/registering-your-application) topic in the Amazon developer docs to learn more.


**LWA Refresh Token** - Enter the LWA refresh token from when you self-authorized your private application. You must have already [registered your app](https://developer-docs.amazon.com/sp-api/docs/registering-your-application) to view this value. See the [Viewing your application information and credentials](https://developer-docs.amazon.com/sp-api/docs/registering-your-application) topic in the Amazon developer docs to learn more.



## Test Connection

You can test your connection settings before you use or save the connection in a process. The Test Connection ensures that your specified settings are correct, valid, and accessible. 

The test connection is successful provided valid credentials are entered and the private application has permission to get feeds. This is validated with two requests:
- A request to the Selling Partner API authentication server, to exchange the connection data for an access token. If this request is successful, the authentication data provided is valid.
- A GET Feeds request to the Selling Partner API endpoint selected in the connection. If this request is successful, the private application has permissions over the Feeds API in the selected region.

If the test connection is successful, you can save the connection. Otherwise, review and correct any incorrect settings, then test again.

:::info

You can only run the Test Connection against containers associated with your account (local Atoms, Molecules, and Atom Clouds).

:::
