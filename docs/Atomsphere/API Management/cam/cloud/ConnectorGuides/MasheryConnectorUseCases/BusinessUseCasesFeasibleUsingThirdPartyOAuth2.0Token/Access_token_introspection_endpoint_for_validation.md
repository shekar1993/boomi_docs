---
sidebar_position: 3
---

# Access Token Introspection Endpoint For Validation

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-acf9e157-f7aa-4f92-9fa4-cceb2e85deb9"/>
</head>


One of the important aspects of OAuth2.0 access token validations is that access token must be validated by the Authorization server which generated the access token. This OAuth2.0 specs requirement is necessary to ensure the integrity and authenticity of the access token. The token validation endpoint should be inspired by Token Introspection endpoint, but does not need to strictly be in compliance with it. Refer to the important note below about guidelines for token validation policy. The Token Introspection spec can be found at https://tools.ietf.org/html/rfc7662. 

This useful internet resource reference provides better understanding about access token retrospection: https://www.oauth.com/oauth2-servers/token-introspection-endpoint/. 

## Important Note

Considering different third party OAuth2.0 Authorization server responds differently, the connector handles token validation following the business rules provided below. Token validation endpoint should be configured that way. 

- Token validation/introspection endpoint response with status code 200 OK is considered successful token validation. 
- Any !200 OK status code from validation endpoint is considered token validation failure. 

## When Introspection Endpoint Validates Token And Returns UserInfo

This section describes a sample scenario where introspection endpoint not only validates OAuth2.0 access token but also returns addition info on successful token validation. 

**Sample request to introspection endpoint**

```
curl --location --request GET 'https://acme.api.mashery.com/uat/se/storel/GetUserDetails?api\_key=xxxxxxxxxxxxxxxxxxx' \
```

--header 'Authorization: Bearer 8dbd30ed-2e19-42cf-9b86-xxxxxxxx'

**200 OK response from Introspection endpoint**

```
Valid Response:

HTTP Status Code: 200 OK

{

"type": "userWsDTO",

"uid": "abcd23456",

"accontManagerEmail": "ajdoe@marketplace.se",

"accontManagerName": "John Doe",

"accontManagerPhone": [

"034534534"

],

"accounts": [{

"name": "Adam Phils",

"uid": "100004567"

},

{

"name": "Duffy woöf",

"uid": "100004444"

}

],

"active": true,

"email": "jason.borne@marketplace.se",

"firstName": "Jason",

"lastLoginDate": "2020-04-16T05:14:17-0400",

"lastName": "öhlundi"

}
```

**401 Invalid token response**

```
Invalid Token Response:

HTTP Status Code: 401

{

"errors": [

{

"type": "InvalidTokenError",

"message": "Invalid access token: 8dbd30ed-2e19-42cf-9b86-xxxxxxxx"

}

]

}
```
