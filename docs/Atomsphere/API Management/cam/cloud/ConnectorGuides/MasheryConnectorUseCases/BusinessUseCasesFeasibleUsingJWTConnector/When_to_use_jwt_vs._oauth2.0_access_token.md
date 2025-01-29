---
sidebar_position: 2
---

# When To Use JWT Vs. OAuth2.0 Access Token

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-d3c287f3-db1e-42bd-ab68-652384888e30"/>
</head>

An OAuth token does not always implies an opaque token - a random sequence of alphanumeric characters that contains no inherent meaning. The OAuth token is a security token granted by IDP that can then be validated only by that same OAuth token provider. An opaque token is not the only kind of OAuth token. The opaque token is one kind of token; JWT can be used as another kind of OAuth token that is self-contained. 

JWT, in contrast, are not opaque. JWT actually contains meta data that can be extracted and interpreted by any bearer that has the token. JWT usually contains real information so it can be of variable size depending on the claims contained within it and the algorithm used to sign it. 

Any holder of the JWT can inspect it, validate it and then optionally make authorization decisions based on the claims presented in it. Validating the JWT means usually involves following: 

- verifying JWT structure 

- decoding the base64 encoding 

- verifying the key is correct 

- verifying the signature 

- verifying the required claims are present in the token

- verifying the expiry of the JWT 

JWT is a particular type of token. JWT can be used as an OAuth Bearer token. A useful resource for reference can be found at [https://auth0.com/docs/tokens](HTTPS://AUTH0.COM/DOCS/TOKENS). 

## Use JWT

- Federation is desired. For example, you want to use external IDP like OKTA/Ping/AWS Cognito/ADFS as the token issuer, and then use API gateway, for example, API Management as the token validator. With JWT, an app can authenticate to an external IDP, receives a token, and then present that token to API gateway to be verified. 

- Improve performance that comes as a result of token self-validation. 

## Use Opaque OAuth Token

- There is no federation required in the API flow. The IDP that issue the token is the same which validates the token. All API requests having bearer token need to go through the token provider acting as IDP. 

- There is no requirement to allow the token bearer to inspect the claims within the token or use it for applying flexible policies. 

- There are specific scenario when you explicitly need to revoke access token before it expires. JWT automatically expires based on token expiry set at the time of creation. 
