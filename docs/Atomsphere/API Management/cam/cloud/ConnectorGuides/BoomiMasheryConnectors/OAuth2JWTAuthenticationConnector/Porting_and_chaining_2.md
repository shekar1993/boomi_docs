---
sidebar_position: 5
---

# Porting and Chaining

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-feac66cf-98c0-41ef-873c-b8dd9aacefe1"/>
</head>

## Porting

This Connector can be ported to Local Edition customer specific bundle. 

:::note

Porting of this Connector can be performed by API Management for a specific  Local Edition customer. For more information, consult the API Management Customer Success team.

:::

## Chaining

OAuth2JWT natively supports chaining and can be chained with existing processors (Connectors) API Management developed and available. e.g. If you want to chain API Whitelisting Connector with OAuth2JWT connector you can do something like below. (Sample only) 

**Processing**

- Processing adapter: com.mashery.proxy.customer.generic.oauth2-jwt-authenticator 

- Perform pre-processing: Enabled 

- Data to make available for pre-processing (one per line) sample/example. 

  - processors:com.mashery.proxy.customer.generic.white-listing-connector 

  - com.mashery.proxy.customer.generic.white-listing-connector.HeaderParams:\{"RatePlan": "PQRST"\} 
  - jwks\_cache\_expiry:5 

  - jwks\_uri: http://mashery-jwk-test.public-dev.acme.com/jwks.json 

:::caution

Do not chain Oauth2JWT: com.mashery.proxy.customer.generic.oauth2-shared-token-adapter, as both OAuth2JWT authenticator and OAuth2 Shared token adapter are chained adapters and will not work after chaining. The functionality of OAuth2 Shared token adapter is integrated into OAuth2JWT authenticator and just provide the preinput parameter: `shared\_token\_spkey:<SPKey of another API service`.

:::
