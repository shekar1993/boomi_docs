---
sidebar_position: 2
---

# Business Use Case and Inspiration

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-16d1df3e-f4f0-4c94-b0f7-cc23238d569f"/>
</head>


[OAuth 2.0 specifications](https://tools.ietf.org/html/rfc6749) have been a cornerstone of API security using OAuth2.0 access tokens. In recent years, sophisticated attacks are continuously targeting enterprises to steal and harness digital assets of customer. OAuth2.0 access token based security continues to fuel secure digital transformation initiative, especially to thwart and mitigate attacks risk by on-demand revoking access token, if needed. 

## Why OAuth2.0 Token Integration

- Many customers need minimally coupled integration solutions for API services protection behind API Management (APIM), an integration solution that can seamlessly work with any third party IDP. The third party IDP needs to be abstract so that customer can easily swap one IDP with another IDP that is capable of managing the OAuth2.0 access token lifecycle. 

- Customers envision on-demand ability to immediately revoke an access token to invalidate access token to block calls reaching to API resource server.

- These days, many customers want better control of OAuth2.0 access token management life cycle including create/refresh/revoke it, securing, purging, formulating token retention policy, ensuring high availability and improved resiliency of services that depend on OAuth2.0 access token.

- Customers also envision third party IAM as centralized enterprise system for identity and access credentials governance that can be used for SSO, API and micro services security. 

## How Does It Do It

How well does the API Management OAuth2.0 Authentication Connector fit in enabling security mediation layer for both AuthN and possibly AuthZ for geo distributed API resource access across disparate systems? 

- Riding on top of modern IDPs that are capable of not only validating access token but also returning JSON response with meta data on successful token validation. Validation response meta data can be used for applying flexible augmented validation policies, if needed. 

- OAuth2.0 Token Authentication Connector abstract architecture design supports any modern third party IDP and IAM that supports OAuth2.0 life cycle. 

- Ability to configure up to ten OAuth2.0 introspection endpoints per service endpoint for token validation using any third party IDP. This facilitates RFC compliance that access token must be validated by the Authorization server which generated the access token. 

- Conditional pickup of introspection endpoint for token validation based on incoming meta data for geo-distributed API services. 

- Ability to enrich header with meta data that can be returned after successful token validation. Customer can use meta data in the header to optionally formulate flexible business logic at backend API server. 

- Want to learn more about full capabilities of OAuth2.0 authentication Connector, refer [OAuth2.0 Token Authentication Connector](../../BoomiMasheryConnectors/OAuth2.0TokenAuthenticationConnector/Overview.md).

- Want to learn more about full capabilities of OIDC token Connector, refer [OIDC Token Authentication Connector](../../BoomiMasheryConnectors/OIDCTokenAuthenticatorConnector/Overview.md).
