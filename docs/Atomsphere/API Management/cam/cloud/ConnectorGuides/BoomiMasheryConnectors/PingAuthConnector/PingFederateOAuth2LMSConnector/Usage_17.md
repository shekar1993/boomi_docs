---
sidebar_position: 2
---

# Usage

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-ee5fe206-fda1-4ecc-8711-c33d9965eae7"/>
</head>

## Ping OAuth2 Frontend & LMS Functional Configuration Matrix

:::note

- This section describes the matrix when LMS is used with or without frontend authentication using Ping OAuth2 access token. 

- enable\_lms\_pf\_token\_auth flag is used to enable LMS functional behavior. 

- Boomi Cloud API Management–generated OAuth2 access token is not used here. 

:::

|**Sr #** |**enable\_lms\_pf\_token\_auth (Backend)** |**enable\_pf\_token\_auth (Frontend)** |**Ping Auth Connector Behavior** |**Notes** |
| --- | --- | --- | --- | --- |
|1 |config parameter is absent |config parameter is absent |Only Authentication using Ping Federate token (Frontend) |<p>Provides flexibility to use Ping Auth for frontend call without a need to configure boolean enable\_pf\_token\_auth .</p><p>Helpful in conditions where you don't care about invocation whether it is from **Connector** or **Authenticator** or configuration from object EAV. </p><p>The same is not necessarily valid for LMS. For LMS feature, we need explicit flag enable\_lms\_pf\_token\_auth that acts as a feature flag. </p>|
|2 |true |config parameter is absent |Both Frontend Auth and LMS Auth using Ping |See notes above. |
|3 |false |config parameter is absent |Only Authentication using Ping Federate token (Frontend) |See notes above. |
|4 |true |true |Both Frontend Auth and LMS Auth using Ping | |
|5 |true |false |Only Authentication using LMS token (Backend) | |
|6 |false |true |Only Authentication using Ping Federate token (Front end) | |
|7 |false |false |No Authentication using Ping |<p>Invalid Configuration </p><p>Throw an exception and block the call with 500 - Internal server error. </p>|
|8 |parameter is present but either null or non-boolean value |parameter is present but either null or non-boolean value |No Authentication using Ping |<p>Invalid Configuration </p><p>Throw an exception and block the call with 500 - Internal server error. </p>|

