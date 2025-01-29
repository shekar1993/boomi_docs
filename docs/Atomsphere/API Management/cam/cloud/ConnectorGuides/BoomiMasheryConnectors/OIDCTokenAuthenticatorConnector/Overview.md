---
sidebar_position: 1
---

# Overview of OIDC Token Authentication Connector

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-cc86d286-d684-4920-8c52-ae68b3cd52b4"/>
</head>

## Release Notes

|**API Management (Release Date)** |**Release Type** |**Release Description** |
| ---- | ------ | ----- |
|October 29, 2020 |New Feature |Support securing APIs in API Management using third party OIDC IDP based ID token. |
| | |Ability to configure up to ten user information endpoints per service endpoint for ID validation using any third party OIDC IDP. |
| | |Conditional pickup of user info endpoint for user info based on incoming meta data for geo-distributed API services. |
| | |Ability to enrich API request header with user info meta data that can be returned after successful ID validation. |
| | |Support for strict case sensitive method for GET and POST calls to third party OAuth2.0 Auth server user info endpoint. HTTP Verb must be case-sensitive and supported that way in compliance with [RFC 7231 guidelines](https://tools.ietf.org/html/rfc7231#section-4). |
| | |<p>Support of configurable parameter enable\_error\_set to control error response code sent by  API Management. </p><p>If enable\_error\_set is configured as "true",  API Management responds with ERR\_403\_NOT\_AUTHORIZED that is Gateway supported error message. In this case, http response status code and status text for connector is overridden by error set defined for that endpoint in  API Management Control Center. In this case, message overriding is done; only if error is thrown from Mashery Connector. In case error is thrown from third party OpenID IDP, then message overriding will not be performed. </p><p>If enable\_error\_set is configured with value other than "true", then there is no change in Mashery Connector existing functionality that responds with ERR\_401\_UNAUTHORIZED for backend server response code with 401 for unauthorized calls. </p><p>enable\_error\_set parameter value with "true" is case-insensitive. </p>|
| | |<p>Support of UserInfo error responses on error condition as defined in the </p><p>[OAuth 2.0 Bearer Token Usage Specification](https://tools.ietf.org/html/rfc6750#section-3.1)</p>|

## Description

This feature enables to secure APIs behind  API Management using third party OIDC IDP based ID token. 

- The Connector validates third party OIDC ID token for authentication and allows call to backend API after successful validation only. 

- It provides an ability to have configurable validation endpoints to support multiple regional but unique validation endpoint for geo distributed OAuth2.0 authorization server. 

- Supports an ability to enrich header with values from validation endpoint JSON response on successful validation before forwarding request to the backend server. 

- Connector provides configurable capability to block/forward http Authorization header to backend API server. 

- Supports JSONPath expression to locate value from JSON response (User info endpoint) from Authorization server that need injection to header before forwarding to the backend server.

- Supports both pre processing of user client to influence API behavior at  API Management. 

## Related Links

- [Usage](Usage_11.md)

- [Design and Implementation](Design_and_implementation_10.md)

- [Configuring Endpoint Call Processing](Configuring_endpoint_call_processing_5.md)

- [Local Edition Porting and Chaining](Porting_and_chaining.md)
