# Open API Reference UI usage 

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-4d7770b6-e338-4df4-b590-b496e3ca00e7"/>
</head>


After you subscribe to an API from the API Catalog, use the REST tab to browse the **OpenAPI Reference** UI for the REST endpoints for the API along with the associated parameters and responses for the API.

:::note 

It is possible that each API REST endpoint is deployed to a different environment. If the process that contains the API in a Web Services Server listener is deployed to a different environment than the API component is deployed to, the Web Services Server listener information is unknown. However, the API owner can overwrite the endpoint definition and outputs for use in the Developer Portal's REST endpoints. When the API owner overwrites the endpoint definition, the overwrite is used, regardless of what environment the overwrite is on.

:::

## Servers 

The base URL for the API.

:::note 

`servers` replaces the `host`, `basePath`, and `schemes` keywords used in OpenAPI 2.0.

:::

## Authorize 

![Authorize button.](../Images/api-button-swagger-portal-authorize_f0cc6ec4-ab69-4b5a-83ac-7ff476807ffd.jpg)

When the Authorize button displays a closed lock, the API is properly configured and authorizations are pre-populated in the portal. Clicking the Authorize button opens a panel that describes the type of authorization currently associated with the API.

Selecting **Logout** clears the Authentication Token and allows you to enter different credentials in order to explore and alter values. Logging out disables the **Try It Out** and **Execution** buttons until proper credentials are re-entered.

Based on the Authentication Type set for the API in the Authentication column of the **Configure APIs and Applications** \> **Deployed APIs** page API Management, the following credentials are required to log back in:

-   Basic authentication requires a user name and password.
-   External Provider authentication requires OAuth 2.0 `client_id` and `client_secret` credentials. If the `client_id` is not auto-populated, enter the external authentication GUID (the alphanumeric string after `components=` in your URL) followed by `:OPENID` in the `client_id` field. Leave the **Client Secret** field blank, and click **Authorize**. Then, you are taken to the identity provider sign in screen if you are not already signed in.

:::note 

When authentication is not set, the **Authorize** feature does not show.

:::

## Default tags 

In the default section of the OpenAPI Reference UI, the **Try It Out** button allows you to test, edit, and re-test your API to experiment with various call mechanisms of your API.

The Developer Portal has limited support for JWT authentication for the “Try it out” feature, and by default uses Proof Key for Code Exchange (PKCE) Authorization Code flow with openid scope for JWT authentication.

  :::note

  The Developer Portal uses an access token to execute APIs. Some identity providers, such as Google and Microsoft Azure, issue opaque access tokens. The API Gateway does not support opaque access tokens, therefore, APIs that use identity providers that issue opaque tokens cannot be tested from the Developer Portal.

  :::

The responses associated with an API are dependent on the resource path and HTTP method set in the REST endpoint. Currently, the OpenAPI UI supports GET, POST, UPDATE, and DELETE.

Three elements display as a result of executing an API in the OpenAPI Reference UI. Clicking **Try It Out** for a POST response allows you to edit the example value to call various features. The portal displays a detailed list of potential code response errors.

:::note 

Information produced in the OpenAPI reference UI is not retained when you exit the REST tab.

:::
