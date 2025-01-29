---
sidebar_position: 2
---

# Overview

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-53677cbe-8857-49a8-83bf-2ab8da50a2fb"/>
</head>

Connectors are Boomi Cloud™ API Management's integration features that have been developed and provided ready to use for Cloud customers. Connectors not only provide connectivity to the external systems but also allow you to change the behavior of the API at runtime through configuration without writing any code. A Connector's policies can be applied for pre-processing of user client request as well as for post processing on backend response to change API behavior. Connectors have been carefully envisioned to address common and evolving business use-cases for customers. Connectors power compelling features such as HTTP header manipulation, authentication & security (also using third-party IDP), filtering & routing, caching & validation as well as content transformation. 

## Why Connectors

Connectors can provide the following benefits: 

- It complements API Management product core functionality and fills gap for commonly-sought functionality that are not yet available out-of-box. 

- It can be used across multiple API Management customers who need similar functionality. 

- Further enhances API Management's competitive edge and relevancy to the customers/markets' continuously-evolving business needs. 

Contact the API Management Customer Success team if you are interested to know more whether Boomi Cloud API Management connectors meets your business needs and how to get it. 

## Mashery-built Connector vs Adapter

The following table explains the differences between Mashery-built connectors and Mashery-built adapters. 

|**Connector** |**Adapter** |
| ------ | ----- |
|Mashery-built features for API Management|Mashery-built for both Boomi Cloud™ API Management and
Boomi Cloud™ API Management - Local Edition. |
|Strategic integration feature generally available out of the box for any API Management customer. |Custom in nature and tailored to fit a particular customer specific need. |
|Available without additional cost to API Management customers. |<p>Customer may incur fee for engineering and development work done by API Management. </p><p>API Management - Local Edition customers can use the SDK to build their own adapters. </p>|
|Can be ported to a Local Edition customer upon request in Local Edition 4.X. Generally bundled and available for download from Boomi centralized repository for Local Edition 5.X.X customers. |Needs to be engineered and developed for Local Edition customer. |

## Connectors List

The following Boomi Cloud API Management connectors are available to use: 

|**Authentication & Security** |**Filtering & Routing** |**Caching, Header Manipulation & Validation** |**Transformation** |**Sidecar Design** |
| ----- | ------ | ----- | ------ | ----- |
|<p>[JWT Authentication Connector](../BoomiMasheryConnectors/JWTAuthenticationConnector/Overview.md)</p><p>[OAuth2JWT Authentication Connector](../BoomiMasheryConnectors/OAuth2JWTAuthenticationConnector/Overview.md)</p><p>Ping Auth Connector: [Ping Federate OAuth2 Connector](../BoomiMasheryConnectors/PingAuthConnector/PingFederateOAuth2Connector/Overview.md)</p><p>Ping Auth Connector: [Ping Federate OAuth2 LMS Connector](../BoomiMasheryConnectors/PingAuthConnector/PingFederateOAuth2LMSConnector/Overview.md)</p><p>[HTTP Basic Authentication Connector](../BoomiMasheryConnectors/HTTPBasicAuthenticationConnector/Overview.md)</p><p>[OAuth2 Shared Token Connector](OAuth2_shared_token_connector.md)</p><p>[JSON Body API Key Authentication Connector](./JSON_body_api_key_authentication_connector.md)</p><p>API Policy: [JWT Claims Verification Policy](../BoomiMasheryConnectors/APIPolicyConnector/JWTClaimsVerificationPolicy/Overview.md)</p><p>API Policy: [JWT Signature Verification Policy](../BoomiMasheryConnectors/APIPolicyConnector/JWTSignatureVerificationPolicy/Overview.md)</p><p>[OAuth2.0 Token Authentication Connector](../BoomiMasheryConnectors/OAuth2.0TokenAuthenticationConnector/Overview.md)</p><p>[SOAP WS-Security Connector](../BoomiMasheryConnectors/SOAPWS-SecurityConnector/Overview.md)</p><p>[OIDC Token Authentication Connector](../BoomiMasheryConnectors/OIDCTokenAuthenticatorConnector/Overview.md)</p>|<p>[IP Blocking Connector](../BoomiMasheryConnectors/IPBlockingConnector/Overview.md)</p><p>[IP Whitelisting Connector](../BoomiMasheryConnectors/IPWhitelistingConnector/Overview.md)</p><p>[IP Routing Connector](./IP_routing_connector.md)</p><p>[Target Routing Connector](Target_routing_connector.md)</p><p>[Domain Routing Connector](../BoomiMasheryConnectors/DomainRoutingConnector/Overview.md)</p><p>[Geo Target Routing Connector](../BoomiMasheryConnectors/GeoTargetRoutingConnector/Overview.md)</p><p>[Block API Connector](Block_api_connector.md)</p><p>[Whitelisting Connector](Whitelisting_connector.md)</p><p>API Policy: [Payload Attribute Match Policy](../BoomiMasheryConnectors/APIPolicyConnector/PayloadAttributeMatchPolicy/Overview.md)</p><p>[API Policy Connector](../BoomiMasheryConnectors/APIPolicyConnector/Overview.md)</p>|<p>[SOAP Cache Connector](../BoomiMasheryConnectors/SOAPCacheConnector/Overview.md)</p><p>[REST Cache Connector](../BoomiMasheryConnectors/RESTCacheConnector/Overview.md)</p><p>[API Schema And Payload Size Validation Connector](../BoomiMasheryConnectors/APISchemaAndPayloadSizeValidationConnector/Overview.md)</p><p>[Inject Static Headers Connector](Inject_static_header_connector.md)</p><p>[Strip Header Connector](Strip_headers_connector.md)</p><p>[Inject Conditional Header Connector](../BoomiMasheryConnectors/InjectConditionalHeaderConnector/Overview.md)</p><p>[Inject Model Attribute Headers Connector](../BoomiMasheryConnectors/InjectModelAttributeHeadersConnector/Overview.md)</p><p>[JSON Schema And Payload Size Validation Connector](../BoomiMasheryConnectors/JSONSchemaAndPayloadSizeValidationConnector/Overview.md)</p>|<p>[XML - JSON Transformation Connector](../BoomiMasheryConnectors/XMLtoJSONTransformationConnector/Overview.md)</p><p>[SOAP - REST Transformation Connector](../BoomiMasheryConnectors/SOAPtoRESTTransformationConnector/Overview.md)</p><p>[REST - SOAP Transformation Connector](../BoomiMasheryConnectors/RESTtoSOAPTransformationConnector/Overview.md)</p>|<p>[AWS Lambda Sidecar Connector](../BoomiMasheryConnectors/AWSLambdaSidecarIntegrationConnector/Overview.md)</p><p>[Ping Intelligence Sideband Connector](../BoomiMasheryConnectors/PingIntelligenceSidebandConnector/Overview.md)</p>|
