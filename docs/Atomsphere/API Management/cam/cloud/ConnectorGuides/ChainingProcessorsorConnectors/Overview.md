---
sidebar_position: 1
---

# Overview of Chaining Processors or Connectors

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-48ce2034-0321-4093-b793-fde9382e4d4c"/>
</head>

API Management can support multiple pre-processing and post-processing processors and connectors per endpoint. This is done by linking multiple processors and/or Connectors into one configuration. The entire process is called Chaining.

## Chaining Processors or Connectors

:::note

You can chain only pre-processing and post-processing events. The authentication event cannot be chained. 

:::

The following table describes chaining between different events. 

| |**Pre Process Event** |**Post Process Event** |**Authentication Event** |
| ----- | ----- | ----- | -------- |
|Pre Process Event |![checkmark](../../Images/tick_mark.jpg)|![error](../../Images/error.png)|![error](../../Images/error.png)|
|Post Process Event |![error](../../Images/error.png)|![checkmark](../../Images/tick_mark.jpg)|![error](../../Images/error.png)|
|Authentication Event |![error](../../Images/error.png)|![error](../../Images/error.png)|![error](../../Images/error.png)|

## Types of Chaining

- [Chaining Processor Using Mashery_Proxy_Processor_Chain](Chaining_of_processors_using_mashery_proxy_processor_chain.md) 

  The processor implements pre-process or post-process traffic events. These processors can either be provided by Boomi or incorporated with the SDK. 

  To chain the processors, use Mashery\_Proxy\_Processor\_Chain. 

- [Chaining of Processor Using Chain Adapter](Chaining_of_processor_using_chain_adapter.md) 

  These processors can implement pre-process or post-process traffic events and can be chained without using Mashery\_Proxy\_Processor\_Chain and are provided by Boomi. 

  The following are processors acting as chain adapter provided by Boomi. 

  - OAuth2JWT Authentication Connector 
  - OAuth2 Shared Token Connector 

The following table provides information on various chaining combinations. 

| |**SDK Based Adapters** |**Boomi Provided Adapters** |**Chain Adapter OAuth2JWTAuthenticationConnector** |**Chain Adapter OAuth2SharedTokenConnector** |
| ----- | ----- | ---- | ---- | ----- |
|SDK Based Adapters |<p>![checkmark](../../Images/tick_mark.jpg)</p><p>Using Mashery\_Proxy\_Processor\_Chain</p>|<p>![checkmark](../../Images/tick_mark.jpg)</p><p>Using Mashery\_Proxy\_Processor\_Chain</p>|<p>![checkmark](../../Images/tick_mark.jpg)</p><p>Using OAuth2JWTAuthenticationConnector </p>|<p>!![checkmark](../../Images/tick_mark.jpg)</p><p>Using OAuth2JWTAuthenticationConnector </p>|
|Boomi Provided Adapters |<p>![checkmark](../../Images/tick_mark.jpg)</p><p>Using Mashery\_Proxy\_Processor\_Chain</p>|<p>![checkmark](../../Images/tick_mark.jpg)</p><p>Using Mashery\_Proxy\_Processor\_Chain</p>|<p>![checkmark](../../Images/tick_mark.jpg)</p><p>Using OAuth2JWTAuthenticationConnector </p>|<p>![checkmark](../../Images/tick_mark.jpg)</p><p>Using OAuth2JWTAuthenticationConnector </p>|
|Chain Adapter OAuth2JWTAuthenticationConnector |<p>![checkmark](../../Images/tick_mark.jpg)</p><p>Using OAuth2JWTAuthenticationConnector </p>|<p>![checkmark](../../Images/tick_mark.jpg)</p><p>Using OAuth2JWTAuthenticationConnector </p>|![error](../../Images/error.png)|![error](../../Images/error.png)|
|Chain Adapter OAuth2SharedTokenConnector |<p>![checkmark](../../Images/tick_mark.jpg)</p><p>Using OAuth2JWTAuthenticationConnector </p>|<p>![checkmark](../../Images/tick_mark.jpg)</p><p>Using OAuth2JWTAuthenticationConnector </p>|![error](../../Images/error.png)|![error](../../Images/error.png)|

