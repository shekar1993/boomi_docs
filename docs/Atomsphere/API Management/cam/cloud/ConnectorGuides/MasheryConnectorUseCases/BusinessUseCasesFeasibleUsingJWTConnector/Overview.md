---
sidebar_position: 1
---

# Overview of Business Use Cases Feasible Using JWT Connector

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-531cffe5-0c36-4417-b119-19c12da535a8"/>
</head>


This page describes evolving market trends and evolving business use cases around digital transformation using connected intelligence. More enterprise customers are seriously exploring options, technologies and integration solutions that are cloud native yet allow them seamless transition from monolith application to micro services. 

There is a strong observation in the market to provide a mediation layer that can integrate disparate enterprise systems effectively for improved discovery, governance, compute, scale and security using API and microservices. Enterprises are investing in modernization that not only leverages product features but also technical solutions, advocacy and trusted partnership in the journey from closed fortress to open but highly scalable hybrid cloud platform. Many enterprises are undertaking "application modernization" programs as part of a larger digital transformation initiative. 

A very good internet resource on how distributed micro services marries well current investment in API managements and enterprise integration: [https://developers.redhat.com/blog/2019/03/12/distributed-microservices-architecture-enterprise-integration-istio-and-managed-api-gateways/](HTTPS://DEVELOPERS.REDHAT.COM/BLOG/2019/03/12/DISTRIBUTED-MICROSERVICES-ARCHITECTURE-ENTERPRISE-INTEGRATION-ISTIO-AND-MANAGED-API-GATEWAYS/). Some highlighted points from the resource in the article: 

"API management is NOT (only) rate limiting & throttling." 

"You don't get API management by using an API gateway." 

An obvious question arises - how JWT (JSON Web Token) solution plays an important role as a mediation layer especially around security that is one of the most important aspects for enterprises aspiring for cloud adaption. JWT has rapidly grown popularity in recent years for various reasons but one of the most fundamental aspect of it is marrying the best of both worlds. 

JWT ([https://tools.ietf.org/rfc/rfc7523.txt](HTTPS://TOOLS.IETF.ORG/RFC/RFC7523.TXT)) leverages the best functional capabilities of OAuth 2.0 specifications ([https://tools.ietf.org/html/rfc6749](HTTPS://TOOLS.IETF.ORG/HTML/RFC6749)) and also powers OpenID Connect specifications ([https://openid.net/connect/](HTTPS://OPENID.NET/CONNECT/)). In recent years, the market is getting flooded with vendors who are providing integrated Authentication (AuthN) and Authorization (AuthZ) as Identity provider (IdP) or Identity Access Manager (IAM) to fuel secure digital transformation initiative. 

How does API Management JWT Connector fit well in enabling security mediation layer for both AuthN and AuthZ for resource access across disparate systems? 

- JWT flexibility as a security token by value avoids a roundtrip to Authorization server for validation, which is needed in an OAuth 2.0 access token based solution. This performance improvement without compromising on security is making JWT a preferred choice of security token for API services, microservices and service mesh.

- Riding on top of scalability of JSON data structure makes it a compelling solution both as access token but also as ID token. 

- JWT signing supports that leverage robust cryptographic algorithms like RSA, ECDSA. Signing algorithms are compliant to JSON Web Algorithms (JWA) RFC. [https://tools.ietf.org/html/rfc7518](HTTPS://TOOLS.IETF.ORG/HTML/RFC7518)

- JWT Connector abstract architecture design supports any modern third party IDP and IAM that supports JWT ([https://tools.ietf.org/rfc/rfc7523.txt](HTTPS://TOOLS.IETF.ORG/RFC/RFC7523.TXT)). 

- To learn more about full capabilities of JWT Connectors, refer to the [OAuth2JWT Authentication Connector](../../BoomiMasheryConnectors/OAuth2JWTAuthenticationConnector/Overview.md). 

## Related Links

- [When To Use JWT Vs. OAuth2.0 Access Token](When_to_use_jwt_vs._oauth2.0_access_token.md)

- [API Management Use Case Scenario](API_management_use_case_scenario.md)

- [Local Edition Use Case Scenario](Local_edition_use_case_scenario.md)

- [Additional References](Additional_references.md)
