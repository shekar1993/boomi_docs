---
sidebar_position: 2
---

# Usage

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-d3b99d65-872d-4654-9d33-adc7938e32f4"/>
</head>

If the `max_payload_size` for an incoming request is more than the configurable value, refer to the following matrix for API Management Gateway business rules/policy. 

|**Configuration Parameter** |**Configured Value (KB)** |**Request/Reaponse Payload Size (KB)** |**Maximum Allowed (KB)** |**Endpoint Fail-Safe : true** |**Gateway Forward Call** |**Notes** |
| --- | --- | --- | --- | --- | ---- | --- |
|max-payload-size |5 |3 |1024 |NA |Yes|Forward call. |
|max-payload-size |5 |7 |1024 |Yes|Yes|Add debug message/warning but do not block call. |
|max-payload-size |5 |7 |1024 |No|No|Block call with error message. |
|max-payload-size |50 |2000 |1024 |NA |No|Block call with error message. |
