# Authentication in API Management 

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-3baf0ddd-3532-403f-b66b-4800c1e19098"/>
</head>


API Management supports the following types of authentication:

-   Authentication using JWT on the API Gateway.

-   Basic Authentication using the API Gateway.

It is recommended you use [OAuth2.0 framework](https://oauth.net/2/) using OpenID for authentication, leveraging JWT on the API gateway. If you are looking for that quick prototyping or internal API use-case, you can use the Basic Authentication (username/password) by using the Gateway. With the Gateway, you can authenticate an API execution along with the [Developer Portal sign-in](api-Developer_Portal_8d00d936-4358-41f5-94eb-0b950d892e74.md).