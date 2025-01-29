---
sidebar_position: 1
---

# Overview of API Policy Connector

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-e2f4b9c0-82c7-4dd6-bcef-b6c72ffc1ab1"/>
</head>


## Release Notes

|**Release Date** |**Release Type** |**Release Description** |
| :-: | :-: | :-: |
|May 21, 2020 |Improvement |Supports 'Effect' factor that drives 'Allow' or 'Deny' behavior on match policy. |
|May 11, 2020 |New Feature |API Policy Connector allows you to apply policies to change the behavior of the API through configuration. Currently supports Request, Response and third party JWT object context. |
| |New Feature |Third party [JWT Claims Verification Policy](./JWTClaimsVerificationPolicy/Overview.md). Supports JWT token object context. |
| |New Feature |Third party [JWT Signature Verification Policy](./JWTSignatureVerificationPolicy/Overview.md). Supports JWT token object context. |
| |New Feature |API [Payload Attribute Match Policy](./PayloadAttributeMatchPolicy/Overview.md). Supports Request and Response object context. API policy for finding payload attribute and applying match. Support JSONPath (JSON Payload) and XPath expression (XML Payload). |
| |New Feature |API Request and Response object context based match policy. Supports match keywords using operation ContainsAny, ContainsAll, JSONPath and XPath|

## Description

Policies are a powerful capability of the system that allow the API publisher to change the behavior of the API through configuration. Policies are a collection of statements that are executed sequentially on the request or response of an API. Policies are applied inside the API gateway, which sits between the API consumer and the managed API. 

:::note

For the current context of API Policy, unless specifically mentioned, Match Policy is the implementation of API Policy. 

:::

Match Policy can be defined to match any attributes/fields value of a Request, Response and third-party based JWT token object context with defined match expression (Request headers, URI, method, version, Response headers, status code, status message, JWT standard claims, etc.). In the Match Policy, you can define how to match the value using operations such as ContainsAny, ContainsAll, JSONPath and XPath. 

- Match Policy Connector supports match keywords using operation ContainsAny, ContainsAll, JSONPath, and XPath. 
- Connector supports JSON in pre/post input configuration for policy enforcement. 
- ContainsAny keyword support is inspired by functional aspect of [Java Collection Contains Method](https://docs.oracle.com/javase/7/docs/api/java/util/Collection.html#contains\(java.lang.Object\)). Match is string case sensitive by default. 
- ContainsAll keyword support is inspired by functional aspect of [Java Collection ContainsAll Method](https://docs.oracle.com/javase/7/docs/api/java/util/AbstractCollection.html#containsAll\(java.util.Collection\)). Match is string case sensitive by default. 
- ContainsAny and ContainsAll keyword may optionally have Boolean subtype CaseSensitive. If subtype CaseSensitive is not provided, then default is true. 
- JSONPath and XPath expression is used to find the JSON payload attribute and XML payload attribute respectively. 

## Match Policy Parameters

- Name: Contains the policy name. In the case of Match Policy, it is always "Match". 

- Operation : Defines how to match the variable value. Its value can be "ContainsAny", "ContainsAll", "JSONPath" and "XPath". 

- Context: Defines policy context. Currently supported context for Match Policy are Request and Response. 

- Argument Location: Defines Java unified expression to evaluate variable value in the defined context. Argument location evaluation should result in either string, integer, array of strings, or array of integer. Comma separated values are converted into list. Example: For request header - `${request.headers.get('header name')}`

- Match Expression: Defines the expression from which value should be matched. It is defined as JSON Array. Example: ["10.97.242.55", "10.97.242.51"]

- Effect: Upon successful matching expression, defines whether or not a call is allowed. Permissible value can be - Allow/Deny. If any policy with effect as "Deny" is evaluated successfully, then that call is blocked at that point and further defined policies in the structure is not evaluated. It is an optional parameter and its default value is "Allow". 

- CaseSensitive: Optional parameter. It can be defined for ContainsAny and ContainsAll operation to identify whether match should be case sensitive or case insensitive. 

## **Related Links**

- [Usage](Usage_7.md)

- [Design and Implementation](Design_and_implementation_7.md)

- [Porting and Chaining](Porting_and_chaining_5.md)

- [JWT Claims Verification Policy](./JWTClaimsVerificationPolicy/Overview.md)

- [JWT Signature Verification Policy](./JWTSignatureVerificationPolicy/Overview.md)

- [Payload Attribute Match Policy](./PayloadAttributeMatchPolicy/Overview.md)

- [JSONPath and XPath User Guide](../../JSONPathandXPathUserGuide/Overview.md)
