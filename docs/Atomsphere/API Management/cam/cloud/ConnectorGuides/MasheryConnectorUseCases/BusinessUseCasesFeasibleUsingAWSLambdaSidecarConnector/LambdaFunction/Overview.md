---
sidebar_position: 1
---

# Overview of Lambda Function Invocation Mode and Error Handling

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-c289b06c-8dd8-4307-861f-dff7052d87a2"/>
</head>

Lambda sidecar connector supports both Synchronous and Asynchronous Invocation mode. In addition it also supports fail-safe and sure-fire policies. 

## Synchronous vs. Asynchronous Invocation

The Lambda Function Invocation Mode can be synchronous or asynchronous. 

The integration allows the Lambda function implementor to choose between request/response and synchronous event invocation mode. 

- **Request/Response Invocation :** In this mode, the output of the Lambda function is used by the API Management Gateway to modify a content that is sent to the API provider or to the API consumer. This mode is applicable to security inspection, where the main purpose of the Lambda function is to terminate API call handling and returning an error code back to the user. 

- **Synchronous Event Invocation :** In this mode, the Lambda function indicating that it does not, by its design, yield any information that is usable by the API Management Gateway to modify a content that is sent to the API provider or to the API consumer. It is applicable for cases such as logging, analytics, quality control, anomaly alerting etc. 

## Integration Error Handling

The integration error handling is defined for sure-fire and fail-safe policies. 

The error handling policies are as follows: 

- Fail Safe Error Handling Policy: The AWS Lambda function implementor can indicate whether a fault of the function is critical for API traffic management. 

- Sure Fire Error Handling Policy: In case of a call failure to Lambda function, the call processing also fails. The API client receives 500 Internal Server Error with an opaque error message sent by API Management gateway. 
