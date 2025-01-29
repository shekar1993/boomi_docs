---
sidebar_position: 10
---

# OAuth2 Shared Token Connector

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-f4d328ff-c3b3-4849-aa15-14671f35b0c5"/>
</head>

## Description

- Share OAuth2 token to access backend resources for multiple OAuth2.0 protected service endpoints. 

- OAuth shared token Connector uses spkey of API service where the access token was generated. 

- API Management access token created for API service 'X' allows authenticating API Service 'Y' with the same token. 

## Usage

Create an OAuth2.0 protected service endpoint. 

Use Key And Method Detection tab with the following settings: 

- Endpoint Type: REST 

- Supported Http Methods: GET and POST 

- Method Location: PATH 

- Request Authentication Type: OAuth 2.0 

- OAuth Grant Types: Authorization Code, Implicit, Password, Client Credentials 

## How to Configure

- Processing Adapter: com.mashery.proxy.customer.generic.oauth2-shared-token-adapter

- Perform Pre-processing: Yes 

- Data to make available for pre-processing (one per line): 

  - `shared_token_spkey:<shared_token_spkey>`

You can find the value of 'shared\_token\_spkey' easily by taking the 'API Definition' ID from the URL in the browser: 

![error](../../Images/oauth2sharedtokenconnector_sharedtokenspkey.png)

This should be the API Definition to which all the tokens are being generated against. 

## Chaining

OAuth2 Shared Token Connector can be chained with other Boomi Cloud API Management connectors, as well as Boomi Cloud API Management adapters developed as processors. 

## Local Edition Porting

Oauth2 Shared Token Connector can be ported to Local Edition customer specific bundle. 

:::note

Porting of this Connector can be performed by API Management for a specific Local Edition customer. For more information, consult API Management Customer Success team. 

:::

## Additional Notes

**Design and Implementation**

Sequence Diagram

![error](../../Images/oauth2jwtauthconnector_seqdiag.jpg)

Implementation

- If connector is configured for pre-processing, then pre-input configurations are retrieved and shared token spkey is fetched from pre-input configuration. 

- In case shared token spkey is not defined in pre-input configuration, then default oauth context is loaded and mapi look-up is done using specified spkey in service configuration. 

- If shared token spkey is defined in pre-input configuration, service configuration is loaded using this shared token spkey and oauth context is created using this service configuration. 

- Also in case shared token spkey is specified in pre-input configuration, then original spkey is stored and replaced by shared spkey. Then mapi look-up is done using this shared spkey. After mapi look-up, original spkey is restored in the service configuration. 

