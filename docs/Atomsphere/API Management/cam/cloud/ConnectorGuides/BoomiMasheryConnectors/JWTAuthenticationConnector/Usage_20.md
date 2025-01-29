---
sidebar_position: 2
---

# Usage

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-1645f3b5-ecd3-4aae-a167-9e6fdd402403"/>
</head>

- Client must make public JSON Web key (JWK) accessible to API Management that will be used for validating JWT signature. 

- JWT token should be passed preferably in 'Authorization' header of the API request. 

## FAQs

**Which IdPs are supported for JWT?**

JWT Connector supports any third party IDP that supports JWT which is compliant to RFC specs [https://tools.ietf.org/html/rfc7523](HTTPS://TOOLS.IETF.ORG/HTML/RFC7523). 

The following are third party IDPs that Boomi customers are using, but not limited to: 

- OKTA 

- ADFS 

- AWS Cognito 

- Legacy IDP 

- Ping 

- Azure AD 

**Can JWT Connector be configured on Package / Plan level?**

JWT Connector can be configured at service endpoint level to provide granular control. 

**Does Connector support Client asymmetric signed JWTs, to start with allowing the client's secret to sign the JWT?**

JWT Connector supports validating client signed JWT with asymmetric key. 

Client must share JWKS (JSON Web Key Set) with API Management to validate signature of the JWT. 

**Does JWT Connector support validation using APIKey/ClientID inside JWT claim?**

This JWT Connector provides authentication augmentation on top of API key which is used in API Management. In case one needs to use clientId/APIKey inside JWT claim to validate, then refer to the [OAuth2JWT Authentication Connector](./Overview.md). 

**Is there a way to configure API Management to use OpenID+PKCE?**

PKCE is an extension to the regular Authorization Code flow that allows one to get access token or ID token (JWT), for example: 

- [https://developer.okta.com/authentication-guide/auth-overview/#authorization-code-with-pkce-flow](HTTPS://DEVELOPER.OKTA.COM/AUTHENTICATION-GUIDE/AUTH-OVERVIEW/#AUTHORIZATION-CODE-WITH-PKCE-FLOW)
- [https://developer.okta.com/docs/api/resources/oidc](HTTPS://DEVELOPER.OKTA.COM/DOCS/API/RESOURCES/OIDC)

JWT Connector is compliant with JWT token generated using PKCE authorization flow. 

**Is it correct that the JWT claims can only be forwarded as one claim in its unique header? So each claim you want to forward requires a new header? Or is it possible to combine claims in one header?**

JWT Connector does not alter third party JWT token in any way. All claims inside JWT remains intact after successful validation and proxied to target endpoint. JWT Connector also allows one to configure value of the JWT claims that can be injected to enrich headers of the API call. 

**What business use cases are suitable for JWT?**

JWT is more suitable when federation is desired in the API flow. For example, you want to use external IDP like OKTA/Ping /AWS Cognito/ADFS as the token issuer, and then use an API gateway, such as API Management, as the token validator. With JWT, an app can authenticate to an external IDP, receives a token, and then present that token to API gateway to be verified. More scenario suitable for JWT using API Management refer to [Business Use Cases Feasible Using JWT Connector](../../MasheryConnectorUseCases/BusinessUseCasesFeasibleUsingJWTConnector/Overview.md). 
