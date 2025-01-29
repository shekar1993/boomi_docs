---
sidebar_position: 6
---

# Porting and Chaining

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-f390f9db-fd32-4fdd-a978-22028c2af091"/>
</head>

## Local Edition Porting

This Connector can be ported to Local Edition customer specific bundle. 

:::note

Porting of this Connector can be performed by API Management for a specific Local Edition customer. For more information, consult the API Management Customer Success team. 

:::

## Chaining

- HTTP Basic Authentication connector natively supports chaining and can be chained with existing Customer processors as well as Connectors developed and available. For example, if you want to chain [REST - SOAP Transformation Connector](../RESTtoSOAPTransformationConnector/Overview.md) with HTTP Basic Authentication connector, you can do the following: (Sample reference only) 

- Processing adapter: `com.mashery.proxy.customer.generic.http-basic-auth` 

- Perform Pre-processing: Enabled 

- Data to make available for pre-processing (one per line) sample or example. 

  - processors:com.mashery.proxy.customer.generic.rest-soap-transformation-connector 

  - `com.mashery.proxy.customer.generic.rest-soap-transformation-connector.soap\_protocol:1.1` 

  - `Keep\_Mashery\_Default\_Response\_Code:true` 

:::caution 

- **Do not chain HTTP Basic Authenticator with**: `com.mashery.proxy.customer.generic.oauth2-shared-token-adapter`  `com.mashery.proxy.customer.generic.oauth2-jwt-authenticator`. 

  All three - HTTP Basic Authenticator, OAuth2JWT authenticator and OAuth2 Shared token adapter natively support chaining and will not work after chaining. 

- **Do not chain HTTP Basic Authenticator with**: `com.mashery.proxy.customer.generic.JWTAuthProcessor`  `com.mashery.proxy.customer.generic.oauth-token-validation-connector.` 

  All three - HTTP Basic Authenticator, JWT Auth Processor and OAuth2.0 Token Validation connector - require token in Authorization header and if used simultaneously, will not work properly. 

:::
