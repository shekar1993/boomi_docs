---
sidebar_position: 2
---

# Handling Errors during Pre-Processing

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-f915e16f-e01f-4420-99c5-4e679aad0598"/>
</head>

## Handling Errors for Transformation Attributes

- If an URL is not defined in the service provider blob, then in case of stopOnError as true, the request will not be sent to the ASR service, and the target backend and below response will be sent back to the client:

  - HTTP Status Code as 500

  - HTTP Status Message as "Internal Server Error"

- If an URL is not defined in the service provider blob, then in case of stopOnError as false, the request will not be sent to ASR service but the request will be sent to target backend.

## Handling Errors from ASR Service

- Any HTTP status code other than 2xx series will be considered as an error.

- If "stopOnError" is false, then API Management will only log error response and will not process error response. For example, client request will be sent to target backend point.

- If "stopOnError" is true, then API Management will not send request further to target backend point

- If "stopOnError" is true and error response is retrieved from Transformation Service, then API MAnagement will set below HTTP response to the client:

  - HTTP Status Code will be set as HTTP status code received in Transformation endpoint response.

  - HTTP Status Message will be set as HTTP status message received in Transformation endpoint response.

  - Headers received in Transformation endpoint response will be set as HTTP headers for client response.

  - Response payload from Transformation endpoint will be set as HTTP response body.

- If "stopOnError" is true and error occurred while pre-processing, then API Management will set below HTTP response according to scenario mentioned in the [Call Transformation Error Messages](../Call_Transformation_error_messages.md) section:

  - HTTP Status Code will be set as mentioned in the column - **"Status Code"** in the [Call Transformation Error Messages](../Call_Transformation_error_messages.md) section.

  - HTTP Status Message will be set as mentioned in the column **"Status Message"** in the [Call Transformation Error Messages](../Call_Transformation_error_messages.md) section.

  - **"X-Mashery-Error-Code"** header will be added in the response as mentioned in the column "**X-Mashery-Error-Code"** in the [Call Transformation Error Messages](../Call_Transformation_error_messages.md) section.

  - Response payload will be set as below:

  ```xml
  {
  "errorTitle": "<Text Present Under Error Title Section like
  ASRServiceURLNotDefined>",
  "errorDetail": "<Text Present Under Error Detail Section like Unable to retrieve ASR
  Service URL>",
  "point" : "PreProcessor"
  }
  ```

- If "stopOnError" is false and error occurs while pre-processing, then API Management will log below error in proxy\_error.log:

  ```xml
  {
  "errorTitle": "<Text Present Under Error Title Section like ASRServiceURLNotDefined>",
  "errorDetail": "<Text Present Under Error Detail Section like Unable to retrieve ASR
  Service URL>",
  "point" : "PreProcessor"
  }
  ```
