﻿---
sidebar_position: 2
---

# Usage

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-7e03d7ae-7d33-4f52-bc0f-45489f7c312e"/>
</head>

Ping Intelligence ASE (API Security Enforcer) Integration Specs 

## FAQs

**Whether threat detection policy can be applied only at user/client API Request in isolation?**

PingIntelligence for APIs relies on receiving response metadata to perform its attack detection. However, the response could always be sent asynchronously to minimize latency delays. 

**Does ASE (API Security Enforcer) work in lockstep for both API request and response? such as, ASE model consumes response to learn from it and update the model to block calls (blacklist) for similar requests next time.**

Correct, It always blocks the request to keep things simple for the API Gateway. When it receives a request, It responds back immediately after doing a quick lookup to see if the client identifier is on the blacklist (when the customer enables blocking). 

**Does Ping Intelligence support SOAP calls at the moment?** 

Ping Intelligence currently only supports RESTful call. 

**Does Ping Intelligence support both Sync API and Async API calls to ASE?**

Yes, Ping Intelligence supports both Synchronous and Asynchronous REST calls. 

**How ASE consumes correlation-ID header in API call to ASE sideband request endpoint?**

ASE uses the correlation id to pair the request and response metadata for each API call. Since Ping Intelligence receives two different API calls, it makes sure the correct r/r metadata is paired. 

**What is the significance of the correlation-ID header in API call?** 

The correlation-id should be a unique transaction identifier for each request/response transaction pair. If the gateway does not have a unique identifier, then it will need to be generated by the policy and unique in the sideband calls for each request and response transaction. 

**What is API Management UUID (Universal Unique Identifier) that can be used as a correlation-id header in the API call to ASE endpoints?** 

API Management field name 'ident' is used for X-CorrelationID. 'ident' field acts as UUID for every call in API Management gateway platform. 

**Why does API call to sideband ASE request endpoint need source\_ip and source\_port?**

ASE needs source\_ip and source\_port for whitelisting API calls for security purposes. 
