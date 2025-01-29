---
sidebar_position: 2
---

# Handling Errors during Post-Processing

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-08e8f506-d2e5-4a0a-90a1-f15b2d5dba7b"/>
</head>

## Handling Errors for Transformation Attributes

- If timeout is not defined in the TIBCO Cloud Mesh Service, then default timeout value (500ms) will be considered and no error will be thrown in that case.

- If the URL is not defined in the TIBCO Cloud Mesh Service, then in case of stopOnError as true, the request will not be sent to ASR service and the following response will be sent back to the client:

  - HTTP Status Code as 500

  - HTTP Status Message as "Internal Server Error"

- If the URL is not defined in the TIBCO Cloud Mesh Service, then in case of stopOnError as false, the request will not be sent to ASR service but the response from target backend point will be returned to the client.

## Handling Errors from ASR Service

- Any HTTP status code other than 2xx series will be considered as error.

- If "stopOnError" is false, then API Management will log error response in proxy\_error log and will not process error response. For example, the response received from target backend point will be sent to the client.

- If "stopOnError" is true, then API Management will override response retrieved from target backend point.

- If "stopOnError" is true and error response is retrieved from Transformation Service, then API Management will set the following HTTP response to the client:

  - HTTP Status Code will be set as HTTP status code received in Transformation endpoint response.

  - HTTP Status Message will be set as HTTP status message received in Transformation endpoint response.

  - Headers received in Transformation endpoint response will be set as HTTP headers for client response.

  - Response payload from Transformation endpoint will be set as HTTP response body.

- If "stopOnError" is true and error occurred while post processing, then API Management will set the following HTTP response according to scenario mentioned in the [Call Transformation Error Messages](../Call_Transformation_error_messages.md) section:

  - HTTP Status Code will be set as mentioned in the column **"Status Code"** in the [Call Transformation Error Messages](../Call_Transformation_error_messages.md) section.

  - HTTP Status Message will be set as mentioned in the column **"Status Message"** in the [Call Transformation Error Messages](../Call_Transformation_error_messages.md) section.

  - **"X-Mashery-Error-Code"** header will be added in the response as mentioned in the column **"X-Mashery-Error-Code"** in the [Call Transformation Error Messages](../Call_Transformation_error_messages.md) section.

  - Response payload will be set as follows:

  ```xml
  {
  "errorTitle": "<Text Present Under Error Title Section like
  ASRServiceURLNotDefined>",
  "errorDetail": "<Text Present Under Error Detail Section like Unable to retrieve ASR
  Service URL>",
  "point" : "PostProcessor"
  }
  ```


- If "stopOnError" is false and error occurred while post processing, then API Management will log the following error in proxy\_error.log:

  ```xml
  {
  "errorTitle": "<Text Present Under Error Title Section like ASRServiceURLNotDefined>",
  "errorDetail": "<Text Present Under Error Detail Section like Unable to retrieve ASR
  Service URL>",
  "point" : "PostProcessor"
  }
  ```
  
