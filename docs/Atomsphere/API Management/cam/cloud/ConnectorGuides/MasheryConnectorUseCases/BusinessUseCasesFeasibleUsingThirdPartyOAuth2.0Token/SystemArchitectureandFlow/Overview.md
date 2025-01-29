---
sidebar_position: 1
---

# Overview of System Architecture and Flow

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-771efac5-36c4-4a93-973c-7e8c0bc7053e"/>
</head>

## Notes

- This section shares sample system architecture flow scenario that can be effectively architected using OAuth2.0 access token for API security. 

- OpenID Connect (OIDC) flow is provided for reference, uses JWT that is different token format than OAuth2.0 token, which is not in the API Management [OAuth2.0 Token Authentication Connector](../../../BoomiMasheryConnectors/OAuth2.0TokenAuthenticationConnector/Overview.md) scope. Refer to the [OIDC Token Authentication Connector](../../../BoomiMasheryConnectors/OIDCTokenAuthenticatorConnector/Overview.md)

- OIDC enabled IDP can return a JSON object with the ID token, an access token and an optional refresh token. The token can be in JWT format or can be a normal bearer access token. The client app can possibly try to access the backend API via the API Management platform by providing the JWT or access token in the Authorization header. 

  In case client app sends access token in the Authorization header, then this Connector can work seamlessly for OIDC enabled IDP flow as well, provided introspection token endpoint returns user info. Contact your customer success manager for more details and feasibility. 
