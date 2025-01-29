---
sidebar_position: 1
---

# Overview of OAuth2.0 Token Authentication Connector

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-73723b39-ac0b-4e35-9d59-266ba31649d7"/>
</head>

## Release Notes

| Release Date | Release Type | Release Description |
| --- | --- | --- |
| June 11, 2020 | New Feature | Support securing APIs in using third party IDP based OAuth2.0 access token. |
|     | New Feature | Ability to configure up to ten OAuth2.0 introspection endpoints per service endpoint for token validation using any third party IDP. |
|     | New Feature | Conditional pickup of introspection endpoint for token validation based on incoming meta data for geo-distributed API services. |
|     | New Feature | Ability to enrich API request header with meta data that can be returned after successful token validation. |

## Description

This feature enables securing APIs in using third party IDP based OAuth2.0 access token.

* The Connector validates third party OAuth2.0 access token for authentication and allows call to backend API only on successful validation.

* Provides an ability to have configurable introspection endpoints to support multiple regional but unique introspection endpoint for geo distributed OAuth2.0 authorization server.

* Supports an ability to enrich header with values from introspection endpoint JSON response on successful validation before forwarding request to the backend server.

* Connector provides configurable capability to block/forward http Authorization header to backend API server.

* Supports JSONPath expression to locate value from JSON response from Authorization server that need injection to header before forwarding to the backend server.

* Supports optional XPath expression to locate value from XML response from Authorization server (if response is in XML format instead of JSON) that need injection to header before forwarding to the backend server.

* Supports pre-processing of API request.

## Related Links

* [Usage](Usage_5.md)

* [Design and Implementation](Design_and_implementation_23.md)

* [Configuring Endpoint Call Processing](Configuring_endpoint_call_processing_10.md)

* [Porting and Chaining](Porting_and_chaining.md)

* [Business Use Cases Feasible Using Third Party OAuth 2.0 Token Connector](../../MasheryConnectorUseCases/BusinessUseCasesFeasibleUsingThirdPartyOAuth2.0Token/Overview.md)

