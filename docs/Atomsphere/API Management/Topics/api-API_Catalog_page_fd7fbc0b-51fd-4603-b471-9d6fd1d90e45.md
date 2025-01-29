# API Catalog page 

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-fd7fbc0b-51fd-4603-b471-9d6fd1d90e45"/>
</head>


The API Catalog is the means by which developers can interact with APIs that have been published for their discovery.

When navigating to this page, portal users are presented with what APIs have been published for potential use. Each tile represents an individual API deployment. The descriptive information present on each tile is carried forward from the **Published Description** field defined by the associated API Component.

:::note 

Within the Developer Portal, there is no visible indication of whether an API was created within Boomi as an API Service component or exposed through an API Proxy component.

:::


## API information

By clicking on an API tile, you are presented with detailed information about that individual API. Along with the published description of the API, you are presented with an overview tab and subsequent tabs for each way the API is published (REST, SOAP, or OData).

If you have any subscriptions for the API you selected, you see the information for each associated subscription in a separate panel.

The overview tab provides Version and Contact information defined by the associated API Component and the environment name. Additional information is presented for each tab depending on the type of API published:

**REST**  
The base URL information is provided along with an embedded OpenAPI specification UI interface to interact with the published definition file for the API.

The Developer Portal has limited support for JWT authentication for the “Try it out” feature, and by default uses Proof Key for Code Exchange (PKCE) Authorization Code flow with `openid` scope for JWT authentication. If your identity provider does not support PKCE for Authorization Code flow, uncheck the `Require PKCE for Authorization Code flow` option. 

  :::note
  
  The Developer Portal uses an access token to execute APIs. Some identity providers, such as Google and Microsoft Azure, issue opaque access tokens. The API Gateway does not support opaque access tokens, therefore, APIs that use identity providers that issue opaque tokens cannot be tested from the Developer Portal.

  :::

To use JWT authentication for executing APIs from the Developer Portal, you must add the Developer Portal’s redirect url in the Identity Provider configuration. The redirect url is: 

`<your developer portal public URL>/oauth2-redirect.html`

For example: http://apim.gateway.com:18077/oauth2-redirect.html

If you get an error on authentication, and the URL in the address box indicates `error=redirect_mismatch`, the redirect URL for the Developer Portal is not configured correctly in your identity provider.

**SOAP (1.1 and 1.2)**  
Both the SOAP and WSDL URLs are provided along with a listing of available operations and associated descriptions.

**OData**  
The OData URL is provided along with a listing of available entity names and descriptions.

:::tip 

The API Catalog can be used for testing of APIs. Through embedded OpenAPI specification UI functionality, users can provide their authentication credentials and API keys to interact with OpenAPI definitions for REST APIs published to the Developer Portal.

:::