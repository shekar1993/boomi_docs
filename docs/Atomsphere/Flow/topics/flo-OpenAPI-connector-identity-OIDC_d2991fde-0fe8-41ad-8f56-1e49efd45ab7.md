# x-flow-identity - OIDC authentication

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-d2991fde-0fe8-41ad-8f56-1e49efd45ab7"/>
</head>


This extension allows you to apply OpenID Connect \(OIDC\) authentication using your OpenAPI document.

## Example

```
1   openId:
2        type: openIdConnect
3        openIdConnectUrl: http://localhost:8091/auth/realms/openapi/.well-known/openid-configuration
4        x-flow-identity:
5          scope: openid email profile
```

## Properties

OIDC is similar to OAuth, except that the extension does not require a mapping between returned properties and the user passed back to .

This is because the OpenAPI connector can retrieve the user details from the OIDC endpoint automatically, as long as the credentials provided are valid.

A space separated list of the scopes you are requesting when signing in using OIDC must be added to the `x-flow-identity` extension.