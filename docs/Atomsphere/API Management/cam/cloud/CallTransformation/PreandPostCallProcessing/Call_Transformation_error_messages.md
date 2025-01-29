---
sidebar_position: 5
---

# Call Transformation Error Messages

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-d769b1cd-c20a-448d-a057-d31e80cdddef"/>
</head>


|**S. No.** |**Error Scenario** |**Error Title** |**Error Detail** |**Status Code**|**Status Message**|**X-Mashery-Error-Code**|
| ---- | --- | --- | --- | --- | --- | --- |
|1|ASR Service URL not retrieved from Service Provider Blob. |Call Transformer Error |Service URL undefined. |500|Internal Server Error|ERR\_500\_INTERNAL\_SERVER\_ERROR |
|2|BodyContent size is more than 1MB while sending request to ASR Service (pick 1M from config file, It is changeable).|Call Transformer Error |Request Payload exceeds maximum limit (1MB).|413|Payload Too Large|- |
|3|BodyContent size is more than 1MB while receiving response from ASR Service. |Call Transformer Error |Response payload exceeds maximum limit (1MB).|413|Payload Too Large|- |
|4|Compulsory headers like Content-Type is not present in "includedHeaders" node of ASR response payload JSON.|Call Transformer Error |Required data from the call transformer is missing - Missing header "Content-Type". |412|Precondition Failed|- |
|5|Timeout occurred while calling ASR.|Call Transformer Error |Call transformer service time out (0.5s).|504|Gateway Timeout|ERR\_504\_GATEWAY\_TIMEOUT |
|6|ASR response is not retrieved in expected JSON format. |Call Transformer Error |Unable to parse the response from call transformer service.|412|Precondition Failed|- |
|7|UnsupportedEncodingException occurred while setting request body for sending request to transformer service. |Call Transformer Error|Error while setting request payload in transformation service. |500|Internal Server Error|ERR\_500\_INTERNAL\_SERVER\_ERROR |
|8|Not able to connect to transformation service.|Call Transformer Error|Unable to connect to transformer service. |502|Bad Gateway|ERR\_502\_BAD\_GATEWAY |
|9|Other than timeout or bad gateway, any other exception occurred while connecting to transformer service.|Call Transformer Error|Error while connecting to transformer service. |500|Internal Server Error|ERR\_500\_INTERNAL\_SERVER\_ERROR |
|10|Error occurred while reading request body which will be sent to transformation service if it is defined in include parameter.|Call Transformer Error|Error while reading request payload. |500|Internal Server Error|ERR\_500\_INTERNAL\_SERVER\_ERROR |
|11|Error occurred while converting request payload into JSON for transformation service.|Call Transformer Error|Error while creating payload JSON for call transformer service. |500|Internal Server Error|ERR\_500\_INTERNAL\_SERVER\_ERROR |

