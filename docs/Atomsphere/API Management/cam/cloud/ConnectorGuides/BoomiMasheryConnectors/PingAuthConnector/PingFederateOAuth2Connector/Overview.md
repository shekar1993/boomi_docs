---
sidebar_position: 1
---

# Overview of Ping Federate OAuth2 Connector

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-d5aea1c4-e796-4159-b1c9-1d89d7dbf2e4"/>
</head>

## Description

The Ping Federate OAuth2 connector authenticates/validates frontend calls from a user client having an OAuth2 access token from a Ping Auth Server hosted externally. This frontend OAuth2 access token validation is done when the user client call reaches API Management Traffic Manager (TM). 

The connector: 

- Supports all the grant types (Client Credentials, Resource Owner Password Credentials, Implicit and Authorization code). 

- Supports authenticate/validate calls against Ping Auth server to support Last Mile Security (LMS), for example, when an API call exits from API Management stack to provide additional protection to the customer's origin server. 

  - Currently API Management supports basic auth and client certificate (mutual SSL) for LMS out of box. This LMS using Ping Auth server is an extension to existing product features. 

## Related Links

- [Usage](Usage_18.md)

- [Design and Implementation](Design_and_implementation_6.md)

- [Configuring Endpoint Call Processing](Configuring_endpoint_call_processing_19.md)

- [Local Edition Porting and Chaining](Porting_and_chaining.md)

- [Ping Federate OAuth2 LMS Connector](../../../BoomiMasheryConnectors/PingAuthConnector/PingFederateOAuth2LMSConnector/Overview.md)


