---
sidebar_position: 1
---

# Overview of Ping Intelligence Sideband Connector

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-e0739406-e33a-4dd3-b725-89c048f846db"/>
</head>

## Release Notes

|**API Management (Release Date)** |**Release Type** |**Release Description** |
| ---- | ---- | ---- |
|October 20, 2020 |New Feature |Supports API Management integration with Ping Intelligence smarter API security, for auto threat detection and mitigation; using AI/ML behavioral pattern. |
| |New Feature |Flexible sideband deployment architecture with  API Management to allow pick and choose endpoints for public and partner API services behind  API Management that need smarter API security. |
| |New Feature |Supports configurable ways to control metadata in the HTTP header of API request for behavior processing in Ping Intelligence ASE engine. |
| |New Feature |Supports high availability of Ping Intelligence ASE engines with primary and secondary configuration. |
| |New Feature |Supports RESTful messages only. |

## Overview

This Connector is  API Management Gateway integration with Ping Intelligence. Ping intelligence provides a modern way of augmenting API security to Gateway powered with Artificial Intelligence (AI) and Machine Learning(ML) for advanced threat detection and mitigation. PingIntelligence for APIs applies AI models to continuously inspect and report on all API activity. It automatically discovers anomalous API traffic behavior across the enterprise. Bad actors are well versed in circumventing static security policies, so PingIntelligence for APIs was purpose-built to recognize and respond to attacks that fly under the radar of foundational API security measures, and target API vulnerabilities. Ping Intelligence's powerful algorithms identify bot attacks and continuously mitigates using "honey pot" decoy API. 

- The Connectors support  API Management [sideband integration with Ping Intelligence](https://www.pingidentity.com/en/platform/apiintelligence.html) for smarter API security for auto threat detection and mitigation using AI/ML behavioral pattern identification. 

- The Connectors facilitates minimally coupled yet tight integration to harness the richness of AI model for behavior pattern that is not possible with conventional policy and rule-based API Gateway security. 

- Integration is compliant with the cloud shared responsibility model that supports secure encrypted messages transfer between  API Management and Ping Intelligence over HTTPS. 

- Supports configurable ways to control metadata in the HTTP header of API request for behavior processing in Ping Intelligence ASE engine. API managers can limit data for processing by ASE. 

- Supports both pre-processing of user client and post-processing of backend response to applying machine learning modeling of API patterns at  API Management Gateway.

- Supports flexible JSON data structure for the outbound call to Ping Intelligence with user client request and backend response. 

- Supports RESTful requests only. 

- All the  API Management to ASE API requests is ***synchronous***. 

## Action Items for the Customer

- Customer should have third party Ping Intelligence software installed (on-premise) or its subscription (in cloud configured externally). 

- Ping Intelligence software stack should be up, running, and operational (Ping Intelligence ASE, ABS, Dashboard). 
  - Please refer to the Ping ASE setup document for details. 

- Ping Intelligence ASE token should be successfully created for secure communication between  API Management and Ping intelligence.

  - The customer will configure the `ASE-Token:<ASE_token>` parameter in the API endpoint configuration. 

- Customers should ask Ping Intelligence network engineers to enable access between API Management and Ping Intelligence ASE. The IP addresses of the API Management Traffic Manager in production should be whitelisted at Ping Intelligence ASE.

  - Please refer for IP details: https://developer.mashery.com/docs/read/proxy_information/Security_Options#whitelist

- The customer should get the Self-signed or CA certified SSL certificate of the Ping Intelligence ASE in either .pem, .crt, .cer file format. It must be shared with API Management for a successful HTTPS connection between API Management and Ping Intelligence ASE. 

  - Please raise a support request with API Management. 

  - SRE should import the Self-signed or CA certified SSL certificate of the Ping Intelligence ASE to Keystore/truststore with appropriate Password.

  - SRE should share JKS’s name and store pass key with the customer. 

  - API Management will provide the `JKS_NAME:<JKS_NAME>` parameter value and the `storepasskey:<customer>/truststore_credentials` parameter value for the Customer to configure in the API endpoint configuration. Storepasskey is the customer-specific namespace for the key in the AWS Parameter store corresponding to the trust-store credential. 

    :::note
    
    `.pkcs12` format for truststore/keystore is out of scope for this release. 

    :::

- Customers should ask Ping Intelligence to enable incoming persistent connections by modifying the ASE configuration. ASE configuration must be turned on to honor the **Connection:keep-alive** request header sent by API Management. This will result in improved performance between API Management and Ping Intelligence ASE. 

  - Please refer to the Ping ASE setup document for details. 

## Pre-Requisite

- API Management SRE needs to import the SSL certificate of the ASE server into Boomi's trust store for enabling HTTPS connection between API Management and Boomi. 

- API Management SRE needs to create an AWS Parameter key and value for storing the trust-store password. 

- Public or partner API service endpoints that need smarter security using Ping Intelligence should be added and configured in the ASE. 

- The customer backend server endpoint should have 1-1 mapping with API added in the ASE. The backend endpoint URL should match with the URL defined in the API, which is already added at ASE. This flexibility is provided to ensure only service endpoints that need API security is configured instead of **"All or Nothing"**.

Examples

1. If the backend endpoint is: http://acme.com/shop then the corresponding Ping Intelligence ASE API URL to which API Management will send request is: /shop. 

2. The backend endpoint is: http://acme.com/shop/books then the corresponding Ping Intelligence ASE API URL to which API Management will send request is: /shop. 

3. The backend endpoint is: http://acme.com/electronics then the corresponding Ping Intelligence ASE API URL to which API Management will send request is: /electronics. 

## Related Links

- [Usage](Usage_22.md)

- [Design and Implementation](Design_and_implementation_2.md)

- [Configuring Endpoint Call Processing](Configuring_endpoint_call_processing_4.md)

- [Ping Intelligence Connector Chaining](Ping_intelligence_connector_chaining.md)
