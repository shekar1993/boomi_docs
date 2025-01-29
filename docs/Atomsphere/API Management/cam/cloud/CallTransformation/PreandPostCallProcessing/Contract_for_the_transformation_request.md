---
sidebar_position: 2
---

# Contract for the Call Transformation Request

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-b73208d4-24e6-402c-b409-eab6f5a73557"/>
</head>

The Call Transformer adheres the following contract:

- The transformer API, which is the TCI application endpoint that receives the call during the pre- or post-processing event, will accept a POST request with a JSON payload (see Request Payload Structure for Pre- and Post-Processing).

- The transformer API will authenticate via basic authentication only. Authentication information is provided as auth headers to the transformers.

- The inbound request or target response body content will be passed to the transformer as base64 encoded bytes.

- The transformer is expected to return a JSON payload with all the headers, params and body content to be passed to target request or outbound response (see Response Payload Structure for Pre and Post Processing).

- The transformer will respond with standard HTTP status for error and success conditions.

- The transformer will not redirect to another service.
