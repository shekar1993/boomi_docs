---
sidebar_position: 4
---

# Lambda Function Input (JSON Specs) For Sidecar Postprocess POST Request Call

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-d27ccfc6-1950-46ee-9830-32eb47e83f1c"/>
</head>

The following section is not an extensive list of all feasible scenarios but one is provided for reference that must be constructed by API Management Sidecar as JSON input to Lambda Function. 

## Scenario 1

```xml
{
"synchronicity": "Event",
"point": "PostProcessor",
{
"response": {
"code": 201,
"headers": {
"header_b": "Value_B"
}
}
}
}
```
