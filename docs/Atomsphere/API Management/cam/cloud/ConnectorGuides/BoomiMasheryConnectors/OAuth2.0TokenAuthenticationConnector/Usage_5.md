---
sidebar_position: 2
---

# Usage

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-d066dfa9-2ab4-4502-be37-88f387a87394"/>
</head>

- Client app is responsible for acquiring OAuth2.0 access token upfront. 

- Client app must pass API Management key in the request and OAuth2.0 access token in 'Authorization' header.

- Optional unique introspection endpoint must be configured for geo distributed OAuth2.0 authorization server. 

  - For example, France region may have different introspection endpoint than Switzerland region and USA region. Conditional introspection endpoint can be configured and picked based on additional meta data like custom header in the API request. 

  - One service endpoint should have less than ten region to introspection endpoint mapping. 

- Optional configuration to enrich header with values from introspection endpoint JSON response on successful validation must be configured. 

  - Configurable JSONPath expression to find value from JSON response. 

  - Connector supports UTF-8 for internationalization and special characters such as "Claes Rosenlöf" while injecting header value. 

  - Unmatched JSONPath expression that does not find value in the introspection endpoint response is silently ignored. Header is not injected in the API request. 

  - Connector supports finite number of HTTP headers, less than ten headers configured, to enrich API request headers.

## Geo Distributed Authorization Endpoint Explanation with Sample

1. The following pre-input configuration states the name of header to fetch from incoming API request which holds region code `regionCodeHeader:<HTTP header name that holds the region code for introspection endpoint>` for example, `regionCodeHeader:HTTP-REQUEST-REGION-KEY`. 

1. The following pre-input configuration holds the details of region code and introspection endpoint URI association. Region code header value is matched with the configured value specified for 'regionCodeValue' pre input. 

   `regionCodeValue:{<Code1>:<Introspection Endpoint1>, <Code2>:<Introspection Endpoint2> ......}` 

   For example: `regionCodeValue: {"FR":"https://uki.acme-travel.com:9001/fr/userinfo",`

   `"US":"https://uki.acme-travel.com:9001/en/userinfo",` 

   `"DE":"https://uki.acme-travel.com:9001/de/userinfo"}` 

   If the incoming header in the request 'HTTP-REQUEST-REGION-KEY' has the value 'FR', the configuration maps to the introspection endpoint URI 'https://uki.acme-travel.com:9001/fr/userinfo'. 

1. The following pre-input configuration holds the default URI of introspection endpoint in case 'regionCodeHeader' is not present in the request or coming with empty value. 

   `defaultURI:<Contains the default introspection endpoint>` 

   For example: `defaultURI:https://uki.acme-travel.com/en/userinfo`

**Sample Example**

API Request to public endpoint configured in API Management Control Center: 

https://api.acme.com/aladdapi

**API Inbound Region Code Header:** 

HTTP-REQUEST-REGION-KEY:FR 

**Data to make available for pre-processing (Normal flow):**

- regionCodeHeader: HTTP-REQUEST-REGION-KEY 
- regionCodeValue: \{"FR":"https://uki.acme-travel.com:9001/fr/userinfo", "US":"https://uki.acme-travel.com:9001/en/userinfo", "DE":"https://uki.acme-travel.com:9001/de/userinfo"\}

- defaultURI:https://uki.acme-travel.com/en/userinfo 

**Sample curl call without region code header:**- curl -i -v -H 'Host:localapi.localproxy.mashery.com' 'http://localhost:8080/aladdapi?api\_key=key' 

In this case, API request is sent to the introspection endpoint "https://uki.acme-travel.com/en/userinfo" for OAuth2.0 access token validation. 

**Sample curl call with region code header**:- curl -i -v -H 'Host:localapi.localproxy.mashery.com' 'http://localhost:8080/aladdapi?api\_key=key' -H 'HTTP-REQUEST-REGION-KEY:FR' 

In this case, API request is sent to the introspection endpoint "https://uki.acme-travel.com:9001/fr/userinfo" for OAuth2.0 access token validation. 
## **FAQs**
**Which IDPs are supported for OAuth2.0 access token?**

The Connector supports any third party IDP that supports OAuth2.0 access token. Any IDP including legacy that is compliant to [https://tools.ietf.org/html/rfc6749](HTTPS://TOOLS.IETF.ORG/HTML/RFC6749) for managing life cycle of OAuth2.0 access tokens. 

**Do different OAuth2.0 IDPs need different solutions?**

The Connector is agnostic to third party IDP capable to generating and managing OAuth2.0 access tokens. 

**Does the Connector support acquiring or fetching third party OAuth2.0 access token?**

The Connector does not acquire third party OAuth2.0 access token for any grant types ('Client Credentials', 'Resource Owner Password', 'Implicit', 'Authorization Code'). Consuming client app is responsible for acquiring OAuth2.0 access token upfront. 

**Which OAuth2.0 grant types are supported?** 

The Connector supports following OAuth2.0 grant types ('Client Credentials', 'Resource Owner Password', 'Implicit', 'Authorization Code'). Connector validates OAuth2.0 access token using introspection endpoint provided by third party IDP. 

**Does the Connector support refreshing expired OAuth2.0 access token?**

The Connector does not refresh expired token. Consuming client app is responsible for refreshing expired token from third party IDP. 

**How many Introspection endpoints does the Connector support for access token validation?**

API Management recommends to configure no more than ten introspection endpoints per service endpoint for geo distributed OAuth2.0 authorization server. 

**Does the OAuth2.0 Token Authentication Connector support OpenID Connect end-to-end token validation flow?**

OpenID Connect uses JWT that is different token format than OAuth2.0 token, which is not in the scope of this Connector. Refer to the [JWT Authentication Connector](../JWTAuthenticationConnector/Overview.md). OIDC enabled IDP can return a JSON object with the ID token, an access token and an optional refresh token. The token can be in JWT format or can be a normal bearer access token. Client app can possibly try to access the backend API via the API Management platform by providing the JWT or access token in the Authorization header. 

In case client app sends access token in the Authorization header, then this Connector can work seamlessly for OIDC enabled IDP flow as well, provided introspection token endpoint returns user info. Contact your Customer Success Manager for more details and feasibility. 
