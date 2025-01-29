---
sidebar_position: 2
---

# Business Rules Matrix

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-f3d3aaec-6da4-4650-93cc-4b04d9200702"/>
</head>

| **Invocation Mode** | **Lambda Function Applicable** | **Sidecar Forward Call to Origin Server** |     |     |     | **Sidecar Pre-processing** | **Sidecar Post- Processing** |
| --- | --- | --- | --- | --- | --- | --- | --- |
|     |     | Sure-fire |     | Fail-safe |     | Lambda Function flow | Lambda Function flow |
|||<p>Function call successful</p><p>(200 OK)</p> |<p>Function call unsuccessful</p><p>(!200 OK)</p>|<p>Function call successful</p><p>(200 OK)</p>|<p>Function call unsuccessful</p><p>(!200 OK)</p> |
| Request/response | Yes | Yes | No  | Yes | Yes | Yes | Yes |
| Synchronous event | Yes | Yes | Yes | Yes | Yes | Yes | Yes |

