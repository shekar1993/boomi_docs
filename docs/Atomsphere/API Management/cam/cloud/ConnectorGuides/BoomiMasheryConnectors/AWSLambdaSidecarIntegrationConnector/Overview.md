---
sidebar_position: 1
---

# Overview of AWS Lambda Sidecar Integration Connector

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-71baa919-cf0b-4ef9-8ac0-a16f20ee7266"/>
</head>

## Release Notes

| Release Date | Release Type | Release Description |
| --- | --- | --- |
| November 16, 2021 | Enhancement | Sidecar Connector change to use Apache http client library for calling AWS Lambda function from . Support for timeout functionality is added. |
| October 8, 2020 | Enhancement |<p>Sidecar Connector improved with better resiliency in error management by incorporating Lambda function custom runtime exception that comes with X-Amz-Function-Error header. ([AWS Lambda Runtime Error Handling Documentation](https://docs.aws.amazon.com/lambda/latest/dg/java-exceptions.html#java-exceptions-types))</p><p>Improvement to secure and encrypt confidential credential like externalID by integrating with [AWS Systems Manager Parameter Store](https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-parameter-store.html).</p><p></p> |
| August 27, 2020 | New Feature |<p>Supports API Management sidecar integration for AWS Lambda function.</p><p>Supports AssumeRole IAM policy with external ID for enhancement security of AWS Lambda resources access in compliance of [AWS shared responsibility model](https://aws.amazon.com/compliance/shared-responsibility-model/).</p><p>Supports configurable sure-fire and fail-safe modes to invoke AWS Lambda function to influence Gateway action.</p><p>Supports RESTful POST messages only for AWS Lambda function invocation.</p><p>Supports optional configurable parameters to apply business policies to influence API behavior in the end-to-end call flow.</p><p></p>|

## Description

The AWS Lambda Sidecar Integration Connector is a API Management integration hook for AWS Lambda function.

You can develop business logic or API policies themselves, deploy in AWS Lambda as function and integrate API Managment with to fuel rapid innovations. 

The API Managment Gateway Sidecar integration sends API request to back end API server or to the user client using the AWS Lambda function. 

The API request can proceed without additional modifications to the API call or with modifications to the API call. Alternatively, if the API request cannot be completed you will be provided with the error code and message. 

Features of the connector are as follows: 

- Supports integration with an external application written for business use case implementation using any development platform, platform like Boomi Flogo, or any AWS Lambda supported languages that is deployed in AWS Lambda as function. 
- Facilitates minimally coupled yet tight integration to apply business policies/rules based on AWS Lambda function response for both user client request to API Managment Gateway and origin server response to API Managment Gateway. 
- Supports enhanced cloud resources security using AWS STS assume role with ExternalId for AWS Lambda function access and invocation. 
- Supports pre processing of user client and post processing of backend response with configurable augmented policies to influence API behavior at API Managment. 
- Supports JSON data structure for outbound call to AWS Lambda function with user client request and back end response. 

Integration is AWS Lambda function implementation agnostics if the sidecar integration specifications are followed. 

## Sidecar Integration in Simple Terms

In simple terms API Managment Gateway Sidecar integration asks AWS Lambda function : "Can I send this API request to backend API server / User Client?". The Lambda function replies either of the following: 

- Yes, without additional modifications to API call. 

- Yes, with provided modifications to the API call. 

- No, with provided error code and message. 

## AWS Lambda Sidecar Integration Scope

- API Managment integration with AWS Lambda function only.

- Configurable support for the following operational modes: 

  - As a request/response invocation 

    - Sample use case scenario 

      - Output of the Lambda function is used to modify a content that is sent to the API provider or to the API consumer 

      - The response time as seen by the API consumer incurs communication overhead with the AWS region as well as any processing time taken by the function. 

  - As a synchronous non-blocking event invocation 

    - Sample use case scenario 

      - Invoke Lambda function indicating that it is not expecting to receive a response. 

      - Cases such as logging, analytics, quality control, anomaly alerting. 

      - The response time as seen by the API consumer incurs only the communication overhead over the stack, without waiting for the response from the Lambda function. 

- Configurable support for following below error handling policy 

  - Sure-Fire 

    - Should a function fail, the call processing also fails. 

    - Fault of the lambda function results in 500 Internal Server Error being sent to the client. 

  - Fail-Safe 

    - Failure of the Lambda function does not impact serving the traffic. 

    - An inevitable response time degradation is observed by the clients. 

Additional Notes about Integration Scope 

- Customer can develop business logic or API policies themselves, deploy in AWS Lambda as function and integrate with API Managment to fuel rapid innovations.

- API Managment Sidecar integration facilitates processing output of the Lambda function and apply following business rule polices including but not limited to: 

  - If the API request is allowed without modification 

  - If the API request is allowed with instructions to 

    - Add headers to the request/response 

    - Drop headers from the request/response 

  - If the API request is terminated 

    - The error code to be sent to the consumer 

    - An optional message giving an opaque error message. 

- Sidecar Connector constructs the JSON object as input to the AWS Lambda function by compiling necessary data elements from the request explicitly as well as configurable inputs. 

- Sidecar integration is agnostic to user stories implementation details in AWS Lambda provided AWS Lambda function request and response specs are clearly defined and compliant to integration specs. 

## Related Links

- [Business Rules Matrix](../../MasheryConnectorUseCases/BusinessUseCasesFeasibleUsingAWSLambdaSidecarConnector/LambdaFunction/Business_rules_matrix.md)

- [Usage](Usage_14.md)

- [Design and Implementation](Design_and_implementation_3.md)

- [Configuring Endpoint Call Processing](ConfiguringEndpointCallProcessing/Configuring_endpoint_call_processing_17.md) 

  - [Prerequisites for AWS Lambda Sidecar Connector](ConfiguringEndpointCallProcessing/Prerequisites_for_aws_lambda_sidecar_connector.md)

- [Sidecar Connector Chaining](Sidecar_connector_chaining.md)

- [Business Use Cases Feasible Using AWS Lambda Sidecar Connector](../../MasheryConnectorUseCases/BusinessUseCasesFeasibleUsingAWSLambdaSidecarConnector/Overview.md)
