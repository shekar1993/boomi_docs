---
sidebar_position: 1
---

# Overview

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-26e07a24-6225-46a9-8fb0-92234e3a5370"/>
</head>

Local Edition can support multiple pre-processing and post-processing processors per endpoint. This is done by linking multiple processors into one configuration. The entire process is called chaining

:::note

You can chain only pre-processing and post-processing events. The authentication event cannot be chained. 

:::

The following table describes chaining between different events. 

||**Preprocess Event** |**Post Process Event** |**Authentication Event** |
| :-: | :-: | :-: | :-: |
|Pre Process Event |![](../../../../Images/compatible.png)|![](../../../../Images/not_compatible.png)|![](../../../../Images/not_compatible.png)|
|Post Process Event |![](../../../../Images/not_compatible.png)|![](../../../../Images/compatible.png)|![](../../../../Images/not_compatible.png)|
|Authentication Event |![](../../../../Images/not_compatible.png)|![](../../../../Images/not_compatible.png)|![](../../../../Images/not_compatible.png)|

## Types of Chaining

- [Chaining Processor Using Mashery_Proxy_Processor_Chain](../SDK%20Guide/Chaining_of_processors_using_mashery_proxy_processor_chain.md)

  The processor implements pre-process or post-process traffic events. These processors can either be provided by Boomi or incorporated with the SDK. 

  To chain the processors use `Mashery_Proxy_Processor_Chain`. 

- [Chaining of Processor Using Chain Adapter](../SDK%20Guide/Chaining_of_processor_using_chain_adapter.md)

  These processors can implement pre-process or post-process traffic events and can be chained without using `Mashery_Proxy_Processor_Chain` and are provided by Boomi. 

  The following are processors acting as chain adapters provided by Boomi. 

  - OAuth2JWT Authentication Connector 

  - OAuth2 Shared Token Connector 

The following table provides information on various chaining combinations. 

| |**SDK-Based Adapters** |**Boomi Provided Adapters** |**Chain Adapter OAuth2JWTAuthenticationConnector** |**Chain Adapter OAuth2SharedTokenConnector** |
| :-: | :-: | :-: | :-: | :-: |
|SDK-Based Adapters |<p>![](../../../../Images/compatible.png)</p><p>Using Mashery\_Proxy\_Processor\_Chain </p>|<p>![](../../../../Images/compatible.png)</p><p>Using Mashery\_Proxy\_Processor\_Chain </p>|<p>![](../../../../Images/compatible.png)</p><p>Using OAuth2JWTAuthenticationConnector </p>|<p>![](../../../../Images/compatible.png)</p><p>Using OAuth2JWTAuthenticationConnector </p>|
|Boomi Provided Adapters |<p>![](../../../../Images/compatible.png)</p><p>Using Mashery\_Proxy\_Processor\_Chain </p>|<p>![](../../../../Images/compatible.png)</p><p>Using Mashery\_Proxy\_Processor\_Chain </p>|<p>![](../../../../Images/compatible.png)</p><p>Using OAuth2JWTAuthenticationConnector </p>|<p>![](../../../../Images/compatible.png)</p><p>Using OAuth2JWTAuthenticationConnector </p>|
|Chain Adapter OAuth2JWTAuthenticationConnector |<p>![](../../../../Images/compatible.png)</p><p>Using OAuth2JWTAuthenticationConnector </p>|<p>![](../../../../Images/compatible.png)</p><p>Using OAuth2JWTAuthenticationConnector </p>|![](../../../../Images/not_compatible.png)|![](../../../../Images/not_compatible.png)|
|Chain Adapter OAuth2SharedTokenConnector |<p>![](../../../../Images/compatible.png)</p><p>Using OAuth2JWTAuthenticationConnector </p>|<p>![](../../../../Images/compatible.png)</p><p>Using OAuth2JWTAuthenticationConnector </p>|![](../../../../Images/not_compatible.png)|![](../../../../Images/not_compatible.png)|



