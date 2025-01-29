---
sidebar_position: 2
---

# Usage

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-a162fda7-c215-4a11-8d87-b8c7f8f497c2"/>
</head>

- Client app is responsible for acquiring OIDC token upfront. 

- Client app must pass API Management key in the request and OIDC ID token in 'Authorization' header.

- Optional unique user info endpoint must be configured by customer for geo distributed OAuth2.0 authorization server. 

  e.g. France region may have different user info endpoint than Switzerland region and USA region. Conditional user info endpoint can be configured and picked based on additional meta data like custom header in the API request. 

- One service endpoint should have less than ten region to user info endpoint mapping. 
- Optional configuration to enrich header with values from user info endpoint JSON response on successful user info must be configured. 
- Configurable JSONPath expression to find value from JSON response. 
- Connector supports UTF-8 for internationalization and special characters like "Claes Rosenlöf" while injecting header value. 
- Unmatched JSONPath expression, that does not find value in the user info endpoint response is silently ignored. Header is not injected in the API request. 
- Connector supports finite number of HTTP headers, less than ten headers configured, to enrich API request headers. 

**Geo Distributed Authorization Endpoint Explanation with Sample**

1. The following pre-input configuration states the name of header to fetch from incoming API request which holds region code;

   ```
   **regionCodeHeader**:<HTTP header name that holds the region code for user info endpoint> e.g. regionCodeHeader:HTTP-REQUEST-REGION-KEY
   ```

1. The following pre-input configuration holds the details of region code and user info endpoint URI association. Region code header value is matched with the configured value specified for 'regionCodeValue' pre input.

   ```
   **regionCodeValue**: {<Code1>:<user info Endpoint1>, <Code2>:<user info Endpoint2> ......} 

   e.g. regionCodeValue: {"FR":"https://uki.acme-travel.com:9001/fr/userinfo", 

   "US": "https://uki.acme-travel.com:9001/en/userinfo", 

   "DE": "https://uki.acme-travel.com:9001/de/userinfo"}
   ```

   If the incoming header in the request 'HTTP-REQUEST-REGION-KEY' has the value 'FR', the configuration maps to the user info endpoint URI 'https://uki.acme-travel.com:9001/fr/userinfo'. 

1. The following pre-input configuration holds the default URI of user info endpoint in case 'regionCodeHeader' is not present in the request or coming with empty value. 

   ```
   **defaultURI**: <Contains the default user info endpoint> 

   e.g. defaultURI: https://uki.acme-travel.com/en/userinfo
   ```

**Sample Example**

API Request to public endpoint configured in API Management Control Center. 

https://api.acme.com/aladdapi 

**API Inbound Region Code Header**

HTTP-REQUEST-REGION-KEY:FR 

**Data to make available for pre-processing (Normal flow)**

```
regionCodeHeader: HTTP-REQUEST-REGION-KEY 

regionCodeValue: {"FR":"https://uki.acme-travel.com:9001/fr/userinfo", 

"US": "https://uki.acme-travel.com:9001/en/userinfo", 

"DE": "https://uki.acme-travel.com:9001/de/userinfo"} 

defaultURI: https://uki.acme-travel.com/en/userinfo
```

**Sample curl call without region code header**: 

`curl -i -v -H 'Host:localapi.localproxy.mashery.com' 'http://localhost:8080/aladdapi?api\_key=key'`

In this case API request is sent to the user info endpoint "https://uki.acme-travel.com/en/userinfo" for OIDC token validation. 

**Sample curl call with region code header**: 

`curl -i -v -H 'Host:localapi.localproxy.mashery.com' 'http://localhost:8080/aladdapi?api\_key=key' -H 'HTTP-REQUEST-REGION-KEY:FR'`

In this case API request is sent to the user info endpoint "https://uki.acme-travel.com:9001/fr/userinfo" for OIDC token validation. 

## FAQs

**Which IdPs are supported for OIDC access token?**

The Connector supports any third party IDP, that is OAuth2.0 compliant and supports OIDC. Any IDP including legacy, that is compliant to https://openid.net/connect/ for managing life cycle of OIDC tokens. 

**Does different OAuth2.0 IDP need different solution?**

The Connector is agnostic to third party IDP capable to generating and managing OIDC tokens. 

**Does API Management act as Relaying Party (RP) in the OIDC flow?**

No. Consuming App continue to act as a Relaying Party (RP) and responsible to initiate OIDC token fetching. API Management continues to act as Gateway even when third party OIDC token endpoint is behind API Management. 

**Does OpenID Token Authentication Connector support OpenID Connect end-to-end token validation flow?**

OIDC enabled IDP can return a JSON object with the ID token, an access token and an optional refresh token. The ID token is in JWT format. Client App simultaneously acts as a RP (Relaying Party) for accessing the backend API via the API Management platform by providing the ID token (JWT) in the Authorization header. 

**Does Connector support acquiring or fetching third party OIDC ID token?**

The Connector does not acquire third party OIDC token for any grant types ('Client Credentials', 'Resource Owner Password', 'Implicit', 'Authorization Code'). Consuming client app acts as a RP (relaying party) is responsible for acquiring OIDC token upfront. 

**Which OAuth2.0 grant types supported?**

The Connector supports following OAuth2.0 grant types ('Client Credentials', 'Resource Owner Password', 'Implicit', 'Authorization Code'). Connector validates OIDC token using user info endpoint provided by third party IDP. Current support is compliant to https://oauth.net/2.1/.

**Does Connector support refreshing expired OIDC token?**

The Connector does not refresh expired token. Consuming client app is responsible for refreshing expired token from third party IDP. 

**How many user info endpoints Connector support for ID token validation?**

API Management recommends to configure no more than ten user info endpoints per service endpoint for geo distributed OAuth2.0 authorization server. 

**What are guidelines for setting user info endpoint for ID token validation?**

Considering different third party OAuth2.0 Authorization server responds differently, the connector handles token validation following business rules provided below. User info endpoint should be configured using guidelines below. 

User info endpoint response **with status code 200 OK** is considered successful ID token validation. 

Any **!200 OK status code** from user info validation endpoint is considered ID token validation failure. 

**Does Connector support JSONPath expression to parse JSON response after successful token validation?**

Yes. The Connector supports JSONPath to parse JSON response after successful token validation from user info endpoint. Refer [JSONPath and XPath user guide](../../../ConnectorGuides/JSONPathandXPathUserGuide/Overview.md). 
