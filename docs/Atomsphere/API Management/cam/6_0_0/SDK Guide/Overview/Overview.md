---
sidebar_position: 1
---

# Overview

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-c9392b41-819c-4915-9357-3e118a4ba30b"/>
</head>

The Boomi Cloud API Management - Local Edition Software Development Kit (SDK) is an extension application programming interface (API) using which the traffic manager capabilities can be extended to handle requests.

The API uses a listener pattern to perform callbacks during different stages of the request flow. Each step in the flow performs a specific task for fulfilling the request. With the API Management - Local Edition SDK users can inject hooks in the following steps:

1. Preprocess - Prior to invoking the API Server. 

2. Postprocess - After receiving response from API server. 
