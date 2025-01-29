---
sidebar_position: 2
---

# Usage

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-ddcb2397-e977-4631-ba12-ac9fc5e0aa5b"/>
</head>

This section provides the integration specifications and few basic questions that may arise. 

## Integration Specifications

:::note

Wherever Modify is specified that means API Management Gateway allows API request with certain modifications.

:::

|**Effect** |**Lambda Response Data Element** |**Mode** |**Use** |
| --- | --- | --- | -- |
|Allow |{}|Required |Forward request without modification. Lambda function responds with empty JSON. |
|Terminate |Code|Required |HTTP error code to be sent to the client. |
|Terminate |Message|Optional |Error message to be printed by the API Management gateway in the body of the response. The message included without matching code should be ignored. |
|Modify and Terminate |Headers to add|Optional |Key-value map listing HTTP headers to be added by the gateway in the API request. API Management -> API Origin request (for pre-processor) or API Management -> API Client (for post-processor). |
|Modify and Terminate |Headers to drop|Optional |List of permissible HTTP headers to be dropped by the gateway in the API request. API Management -> API Origin request (for pre-processor) or API Management -> API Client (for post-processor). |
|Modify and Terminate |Payload|Optional |Payload which needs to be sent by the gateway in the body of the response. Payload is base64 encoded. API Management -> API Origin request (for pre-processor) or API Management -> API Client (for post-processor). |
|Modify and Terminate |Json|Optional |JSON which needs to be sent in the body of the response. If both payload and json present in the response, priority will be given to the json. |

## FAQs

1. **Is Sidecar Integration for AWS Lambda also available in Local Edition ?** 

   Sidecar integration for AWS Lambda is available in API Management. Local Edition customers who wish to build anything specific to fuel their innovation engine they can do it using Local Edition SDK. 

   For more information about Local Edition SDK, see the Boomi Local Edition SDK Guide. 

2. **What tooling can customers use to monitor and troubleshooting AWS Lambda functions themselves?** 

   AWS Lambda automatically monitors Lambda functions on your behalf and reports metrics through Amazon CloudWatch . To help you monitor your code as it executes, Lambda automatically tracks the number of requests, the execution duration per request, and the number of requests that result in an error. For more information about Monitoring and troubleshooting Lambda applications, see [AWS Documentation](https://docs.aws.amazon.com/lambda/latest/dg/lambda-monitoring.html). 

3. **How does Sidecar Integration ensure security of IAM account externalID?** 

   API Management Sidecar integration stores External Id value in the AWS Systems Manager Parameter Store using key-value pair. Boomi treats externalID as a secret for AWS IAM accounts. This is one of the best and secure cloud practices to protect customers resources and mitigate the risk of unauthorized access to Lambda functions. 

## Sample Specifications and API Management Gateway Action

Refer [Sample Specifications and Mashery Gateway Action](../../MasheryConnectorUseCases/BusinessUseCasesFeasibleUsingAWSLambdaSidecarConnector/SampleSpecification/Overview.md) section.
