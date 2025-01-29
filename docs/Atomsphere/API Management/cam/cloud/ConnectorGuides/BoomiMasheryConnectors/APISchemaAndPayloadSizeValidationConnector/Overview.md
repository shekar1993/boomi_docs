---
sidebar_position: 1
---

# Overview of API Schema And Payload Size Validation Connector

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-e2f4b9c0-82c7-4dd6-bcef-b6c72ffc1ab1"/>
</head>

## Description

- The connector blocks incoming API request that fails schema validation using given XSD schema. 

- The connector also blocks incoming API request based on configured max payload size. If Incoming request payload size is more than configured payload-max-size value then API request is blocked and Connector responds to user client with an error message. 

- In post-processing, the connector blocks the response from backend based on max payload size. If response payload size is more than configured payload-max-size value, then connector responds to the user client with error message.

- Supports pre-processing and post-processing. 

## Related Links

- [Usage](Usage_24.md)

- [Design and Implementation ](Design_and_implementation_26.md)

- [Configuring Endpoint Call Processing](Configuring_endpoint_call_processing_8.md)

- [Local Edition Porting and Chaining](Porting_and_chaining_7.md)
