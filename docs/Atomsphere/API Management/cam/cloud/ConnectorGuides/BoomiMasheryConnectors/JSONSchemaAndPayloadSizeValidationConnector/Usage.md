---
sidebar_position: 2
---

# Usage

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-64fdc77b-75fb-4054-ad06-27195be4b3a1"/>
</head>

:::note

If max-payload size for incoming requests is more than the configurable value then refer to the following matrix for API Management Gateway business rules/policy. 

:::

|**Configuration Parameter** |**Configured Value(in KB)** |**Request/Response Payload Size(in KB)** |**Maximum Allowed(in KB)** |**Endpoint Fail-safe: True** |**Gateway forward call** |**Notes** |
| --- | --- | --- | --- | --- | ---- | --- |
|Max-payload-size |5 |3 |1024 |NA |Yes|Forward call. |
|Max-payload-size |5 |7 |1024 |Yes|Yes|Add debug message/warning but do not block call. |
|Max-payload-size |5 |7 |1024 |No|No|Block call with error message. |
|Max-payload-size |50 |2000 |1024 |NA |No|Block call with error message. |


