---
sidebar_position: 1
---

# Overview of Ping Federate OAuth2 LMS Connector

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-46ea30e2-0b2c-463c-bee3-c80b691cd3c0"/>
</head>


Last Mile Security (LMS) provides a functional capability to authenticate/validate API calls to protect customer origin server. 

## Why LMS?

- Authenticate/validate calls against Ping Federate Auth server to support LMS. For example, additional protection to customer origin server when an API call exits from API Management stack. 

  - Currently, API Management supports basic auth and client certificate (mutual SSL) for LMS out of box. This LMS using Ping Auth server is an extension that is being requested by multiple Boomi customers to meet their evolving business needs of security augmentation. 

  - The connector authenticates against Ping Auth server that is compliant to OAuth2 access token specs. 

  - Customers who use Ping Federate to protect resources behind API Management using Ping OAuth2 access token and not yet ready to use Ping generated JWT. 

## Related Links

- [Usage](Usage_17.md)

- [Design and Implementation](Design_and_implementation_9.md)

- [Configuring Endpoint Call Processing](Configuring_endpoint_call_processing_3.md)

- [Local Edition Porting and Chaining](Porting_and_chaining.md)


