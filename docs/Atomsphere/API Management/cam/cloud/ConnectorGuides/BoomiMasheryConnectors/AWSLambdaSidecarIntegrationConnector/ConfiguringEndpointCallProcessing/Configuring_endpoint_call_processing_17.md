---
sidebar_position: 1
---

# Configuring Endpoint Call Processing

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-06c039cd-fddc-454a-8531-ca822c2df16f"/>
</head>

In the Call Transformations page, input the following information: 

|Processing Adapter |com.mashery.proxy.customer.generic.sidecar-connector |
| --- | ---- |
|Perform Pre-Processing |Enabled |
|Perform Post-Processing |Enabled |
|Data to make available for pre-processing |Input one per line |

## Sidecar Preprocess POST Request Call To Lambda Function with Client Request (Specifications)

### Sidecar to Lambda Function Connection

|**Field** |<p>**Mandatory Field** </p><p>**Yes/No** </p>|**Type** |**Description/Value** |**Example** |**Notes** |
 --- | ---- |  --- | ---- |  --- | ---- |
|region |Yes |String |AWS region where Lambda function is hosted |region: eu-west-1 | |
|functionARN |Yes |String |AWS ARN to make Lambda function invocation |functionARN: arn:aws:lambda:eu-west-1:190954361614:function:LambdaBasicAsync | |
|roleARN |Yes |String |Role ARN which needs to be used for generating assume role credentials |roleARN:arn:aws:sts::680833432085:role/ `tibco\_sidecar\_connector\_fn1` |Role Name must begin with `"tibco\_sidecar\_connector"` |
|externalIdKey |Yes |String |ExternalID specified in trust policy of role in IAM will be stored in AWS Parameter Store using Key and Value pair. Key for External ID needs to be specified in this parameter. Using this key, value for External ID will be retrieved from AWS Parameter Store. |externalIdKey :tibco/prod/trustKey |<p>Inclusion of external ID strengthen security of AWS Lambda invocation. </p><p>As external ID is secure parameter, it is stored in the AWS Parameter Store using secure string. </p><p>This external ID specified in the trust policy of role which we want to assume in IAM. For successful generation of assume role credentials, this external ID must be sent to AWS Lambda. </p><p>Please make sure that this external ID is present in all regions of Boomi AWS Parameter Store. </p>|
|sessionName |No |String |AWS Lambda session through assume role is created with this name |sessionName:assume-role-lambda-access-poc |If not specified session name will be specified in the AWS Lambda Request as `"TIBCO\_Mashery\_SideCar\_Connector"` |
|expirationDuration |No |integer |Assume Role credentials expiration duration in minutes |expirationDuration:15 |Default value is 60 minutes. |

### Supported Optional Configurations

|**Field** |<p>**Mandatory Field** </p><p>**Yes/No** </p>|**Type** |**Description/Value** |**Example** |**Notes** |
 --- | ---- |  --- | ---- |  --- | ---- |
|synchronicity |No |string |<p>This parameter specifies whether request sent to AWS Lambda should be synchronously or asynchronously. </p><p>If AWS Lambda function needs to be invoked synchronously, then its value should be request-response. </p><p>If AWS Lambda function needs to be invoked asynchronously, then its value should be Event </p>|synchronicity: request-response |Possible values for synchronicity - request-response, event. Default Value - request-response |
|include-response-headers |No |string |Specifies API client response headers to be included in the lambda sidecar input. | | |
|skip-response-headers |No |string |Specifies API client response headers to be skipped in the lambda sidecar input. This option is mutually exclusive with include-response-headers| | |
|require-eavs |No |string |Specifies the mandatory application EAVs that must be set to a non-empty value before the request can be handled. These values are also included in the lambda sidecar input. |require-eavs: `eav\_1,eav\_2,eav\_3` |<p>The EAVs ARE case-sensitive, and must be included exactly as they are known in API Management. </p><p>All Application level EAVs configured must be present and set in API Management otherwise block the call. </p>|
|include-eavs |No |string |Specifies the application EAVs to be included in the Lambda function input, if they are present. | | |
|require-packageKey-eavs |No |string |Specifies the mandatory package key EAVs that must be set to a non-empty value before the request can be handled. These values are also included in the lambda sidecar input. | |All Package Key EAVs configured must be present and set in API Management, otherwise block the call. |
|include-packageKey-eavs |No |string |Specifies the package key EAVs to be included in the Lambda function input, if they are present. | | |
|max-payload-size |No |string |Max payload size that can be sent to Lambda function in KB |max-payload-size: 50 |<p>default is 10 </p><p>max is 1024 KB i.e. 1 MB </p>|
|max-payload-condition |No |integer |Action to take on max\_payload\_size condition. Parameter can be set either 'filtering', 'blocking' |max-payload-condition: filtering |default is "blocking" |
|expand-input |No |string |Specified what other values needs to be included while sending request to Lambda function like requestPayload, remoteAddress, token, operation, routing |expand-input: requestPayload, operation | |
|`sidecar-param-<parameter name>` |No |string |In case parameter map needs to sent to AWS Lambda request, then you can define multiple parameters in the format sidecar-param-\<parameter\_name\>:\<parameter\_value> |<p>sidecar-param-parameter\_x:This is string </p><p>sidecar-param-parameter\_y:true </p><p>sidecar-param-parameter\_z:1234 </p>|<p>Sidecar connector validates whether parameter value is String, Boolean, Integer or Float, accordingly that parameter is added to the request payload which is sent to AWS Lambda function. </p><p>Suppose in pre-input configuration, below sidecar params are defined: </p><p>sidecar-param-parameter\_x:This is string </p><p>sidecar-param-parameter\_y:true </p><p>sidecar-param-parameter\_z:1234 </p><p>Then below parameter map will be added in the request json which is sent to AWS Lambda function : </p><p>`{"params":{"parameter\_x":"This is string", "parameter\_y":true, "parameter\_z":1234}}` </p>|
|failSafe |No |boolean |Specifies whether failure of Lambda function should result in error or not. Its default value is false. It means that if failSafe is not specified, in that case if lambda function throws an error, then error will be sent to client. |failSafe: true |default is "false" |
|enable\_error\_set |No |boolean |Specified whether error code and error message sent by connector should be overridden by defined error sets |enable\_error\_set: true |default is "false" |
|timeout |No |integer |Specifies timeout for Lambda function in milliseconds. |timeout : 500 |<p>If timeout parameter is not specified, timeout will occur according to endpoint timeout. </p><p>Sum of timeout specified in pre and post input configuration should be less then endpoint timeout. </p><p>In case of timeout occurs, 504\_Gateway\_Timeout error will occur. </p>|

## API Management Gateway Sidecar Call Configuration to Lambda Function**
**Sidecar call to Lambda Function

|**Field** |<p>**Mandatory Field** </p><p>**Yes/No** </p>|**Type** |**Description/Value** |**Example** |**Notes** |
| :-: | :-: | :-: | :-: | :-: | :-: |
|point |Yes |string |Describes if it is Sidecar preprocessor or postprocessor. |<p>point: PreProcessor </p><p>point: PostProcessor </p>| |
|synchronicity |Yes |string |parameter which can be set to either 'request-response','event' |synchronicity:request-response |synchronicity 'request-response' and 'event' is supported |
|masheryMessageId |Yes |string |API Management Gateway unique identifier which links the inbound client request to the Lambda function | | |
|packageKey |Yes |string |Package key that was used by user client to make call to API Management Gateway | | |
|serviceId |Yes |string |Unique Id of the API service | | |
|endpointId |Yes |string |Unique Id of the service endpoint | | |

## Sidecar Postprocess POST Call To Lambda Function with Backend Response (Specifications)
Sidecar Connector request to Lambda function is a POST call. 

### Sidecar to Lambda Function Connection

|**Field** |<p>**Mandatory Field** </p><p>**Yes/No** </p>|**Type** |**Description/Value** |**Example** |**Notes** |
| :-: | :-: | :-: | :-: | :-: | :-: |
|region |Yes |string |AWS region where Lambda function is hosted |region: eu-west-1 | |
|functionARN |Yes |string |AWS ARN to make Lambda function invocation |functionARN: arn:aws:lambda:eu-west-1:190954361614:function:LambdaBasicAsync | |
|roleARN |Yes |string |Role ARN which needs to be used for generating assume role credentials |roleARN:arn:aws:sts::680833432085:role/tibco\_sidecar\_connector\_fn2 |Role Name should be start with "tibco\_sidecar\_connector" |
|externalIDKey |Yes |string |ExternalID specified in trust policy of role in IAM will be stored in AWS Parameter Store using Key and Value pair. Key for External ID needs to be specified in this parameter. Using this key, value for External ID will be retrieved from AWS Parameter Store. |externalIdKey:tibco/prod/trustKey |<p>Inclusion of external ID strengthen security of AWS Lambda invocation. </p><p>As external ID is secure parameter, it is stored in the AWS Parameter Store using secure string. </p><p>This external ID specified in the trust policy of role which we want to assume in IAM policy. For successful generation of assume role credentials, this external ID must be sent to AWS Lambda. </p><p>Please make sure that this external ID is present in all regions of Boomi AWS Parameter Store. </p>|
|sessionName |No |string |AWS Lambda session through assume role will be created with this name |sessionName:assume-role-lambda-access-poc |If not specified session name will be specified in the AWS Lambda Request as "TIBCO\_Mashery\_SideCar\_Connector" |
|expirationDuration |No |integer |Assume Role Credentials expiration duration in minutes |expirationDuration:15 |Default value - 60 |

### Supported Optional Configurations

|**Field** |<p>**Mandatory Field** </p><p>**Yes/No** </p>|**Type** |**Description/Value** |**Example** |**Notes** |
| :-: | :-: | :-: | :-: | :-: | :-: |
|synchronicity |No |string |<p>This parameter specifies whether request sent to AWS Lambda should be synchronously or asynchronously. </p><p>If AWS Lambda function needs to be invoked synchronously, then its value should be request-response. </p><p>If AWS Lambda function needs to be invoked asynchronously, then its value should be Event </p>|synchronicity: request-response |Possible values for synchronicity - request-response, event. Default Value - request-response |
|include-response-headers |No |string |specifies the API client response headers to be included in the lambda sidecar input. | | |
|skip-response-headers |No |string |Specifies the API client response headers to be skipped in the lambda sidecar input. It is mutually exclusive with include-response-headers| | |
|require-eavs |No |string |specifies the mandatory application EAVs that must be set to a non-empty value before the request can be handled. These values are also included in the lambda sidecar input; |require-eavs: eav\_1,eav\_2,eav\_3 |<p>The EAVs ARE case-sensitive, and must be included exactly as they are known in API Management. </p><p>All Application level EAVs configured must be present and set in API Management otherwise block the call. </p>|
|include-eavs |No |string |specifies the application EAVs to be included in the lambda function input, if they are present; | | |
|require-packageKey-eavs |No |string |specifies the mandatory package key EAVs that must be set to a non-empty value before the request can be handled. These values are also included in the lambda sidecar input; | |All Package Key EAVs configured must be present and set in API Management otherwise block the call. |
|include-packageKey-eavs |No |string |specifies the package key EAVs to be included in the Lambda function input, if they are present; | | |
|max-payload-size |No |string |Max payload size that can be sent to Lambda function in KB |max-payload-size: 50 |<p>default is 10 </p><p>max is 1024 KB i.e. 1 MB </p>|
|max-payload-condition |No |integer |Action to take on max\_payload\_size condition. Parameter can be set either 'filtering', 'blocking' |max-payload-condition: filtering |default is "blocking" |
|expand-input |No |string |specified what other values needs to be included while sending request to lambda function like requestPayload, responsePayload, remoteAddress, token, operation, routing |expand-input: requestPayload, operation | |
|`sidecar-param-<parameter name>` |No |string |In case parameter map needs to sent to AWS Lambda request, then you can define multiple parameters in the format sidecar-param-\<parameter\_name\>:\<parameter\_value\> |<p>sidecar-param-parameter\_x:This is string </p><p>sidecar-param-parameter\_y:true </p><p>sidecar-param-parameter\_z:1234 </p>|<p>Sidecar connector validates whether parameter value is String, Boolean, Integer or Float, accordingly that parameter is added to the request payload which is sent to AWS Lambda function. </p><p>Suppose in pre-input configuration, below sidecar params are defined: </p><p>sidecar-param-parameter\_x:This is string </p><p>sidecar-param-parameter\_y:true </p><p>sidecar-param-parameter\_z:1234 </p><p>Then below parameter map will be added in the request JSON which is sent to AWS Lambda function : </p><p>`{"params":{"parameter\_x":"This is string", "parameter\_y":true, "parameter\_z":1234}}` </p>|
|failSafe |No |boolean |Specifies whether failure of Lambda function should result in error or not. Its default value is false. It means that if failSafe is not specified, in that case if Lambda function throws an error, then error will be sent to client. |failSafe: true |default is "false" |
|enable\_error\_set |No |boolean |Specified whether error code and error message sent by connector should be overridden by defined error sets. |enable\_error\_set: true |default is "false" |
|timeout |No |integer |Specifies timeout for Lambda function in milliseconds. |timeout : 500 |<p>If timeout parameter is not specified, timeout will occur according to endpoint timeout. </p><p>Sum of timeout specified in pre and post input configuration should be less then endpoint timeout. </p><p>In case of timeout occurs, 504\_Gateway\_Timeout error will occur. </p>|

