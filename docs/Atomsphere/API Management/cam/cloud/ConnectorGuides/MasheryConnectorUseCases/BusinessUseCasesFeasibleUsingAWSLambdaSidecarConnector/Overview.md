---
sidebar_position: 1
---

# Overview of Business Use Cases Feasible Using AWS Lambda Sidecar Connector

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-8876edaa-4610-4238-807f-5269bb6552c5"/>
</head>


## Overview
The AWS Lambda Sidecar Connector integration is a API Management integration hook for AWS Lambda. This integration facilitates API Management customer with AWS account to leverage AWS server less feature, powered by Lambda function, to invoke customer application/processing business rules from API Management Gateway. 

An external application written by customers for business use case implementation using any development platform and deployed in AWS Lambda as function. This Connector also facilitates minimally coupled yet tightly integration to apply business policies based on AWS Lambda function response for both user client request to API Management Gateway and origin server response to API Management Gateway. 

The AWS Lambda function is event based service that can seamlessly integrate with AWS services (such as S3, Kinesis, SQL) but also supports on-demand function invocation. 

For more information about AWS Lambda event source mappings, see [AWS documentation](https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventsourcemapping.html). 

Nomenclature

The following nomenclature is used in this document: 

- **Sidecar**: This refers to the Sidecar Connector that API Management has developed. Sidecar Connector allows to apply business policies based on AWS Lambda function response for both user client request and origin server response. 

- **External Pre/Post Processor**: An external application written for customer business use case implementation using any development platform, such as Boomi Flogo, and deployed in AWS Lambda as function. 

## Related Links

- [Business Use Case and Inspiration](../BusinessUseCasesFeasibleUsingThirdPartyOAuth2.0Token/Business_use_case_and_inspiration.md)

- [Sample Use Case Scenario Possible with Sidecar Connector](Sample_use_case_scenario_possible_with_sidecar_connector.md)

- [Lambda Function Invocation Mode and Error Handling](./LambdaFunction/Overview.md)

  - [Business Rules Matrix](LambdaFunction/Business_rules_matrix.md)

- [Sample Specifications and API Management Gateway Action](./SampleSpecification/Overview.md) 

  - [Sidecar Connector Assumed Role Support](SampleSpecification/Sidecar_connector_assumed_role_support.md)

  - [Lambda Function Input (JSON Specs) For Sidecar Preprocess POST Request Call](SampleSpecification/Lambda_function_input_json_specs_for_sidecar_preprocess_post_request.md)
  
  - [Lambda Function Input (JSON Specs) For Sidecar Postprocess POST Request Call](SampleSpecification/Lambda_function_input_json_specs_for_sidecar_preprocess_post_request.md)
