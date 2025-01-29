---
sidebar_position: 2
---

# Design and Implementation

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-355cb68a-1c61-481e-912b-b6e7949a5bda"/>
</head>

## Policy Structure

Refer to the [API Policy Structure](../Design_and_implementation_7.md).

## Important Points about Policy Structure

Refer to the [API Policy Important Points about Policy Structure](../Design_and_implementation_7.md). 

## Policy Usage

Refer to the [API Policy Policy Usage](../Usage_7.md).

## Payload Attribute Match Policy Parameters

- Name: This field contains the policy name. In case of payload match policy, it will be always "Match". 

- Operation: This field defines how you want to match the variable value. Its value can be "JSONPath" or "XPath".

- ArgumentLocation: This field defines whether to process request payload or response payload. For request, its values is `${request.payload};` for response, its value is `${response.payload}`. 

- Context: This field defines context where parameter which needs to be matched is present. Currently only supported context is Request, Response. 

- MatchExpression: This field defines expressions to be evaluated using JSONPath and XPath.

## Error Messages

This section lists error messages that are specific to Payload Attribute Match Policy. For a complete list of error messages, refer to the [API Policy Connector Error Messages](../JWTClaimsVerificationPolicy/Design_and_implementation_12.md). 

|**Error Name** |**HTTP Status Code** |**Cause** |
| ----- | ----- | ----- |
|JSONPathExpressionNotMatched |403 |Configured JSON Path Expression not matched. |
|XPathExpressionNotMatched|403 |Configured XPath Expression not matched. |
|InvalidJSONPathExpression |403 |Configured JSON Path Expression is not valid. |
|InvalidXPathExpression|403 |Configured XPath Expression is not valid. |

