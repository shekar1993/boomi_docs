---
sidebar_position: 1
---

# API Definition Error Sets

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-a7bf09f9-40a7-4f4f-aa9c-cefcaa65b0ab"/>
</head>

API Definition Error Sets allow you to create and configure multiple error sets for error conditions which are specifically delivered by the API Management Traffic Manager. 

:::note

This does not apply to error sets from your own back-end API service. 

:::

You can perform the following tasks: 

- Specify different error formats, such as XML or JSON.

- Add new error sets and configure them in the dashboard to handle exceptions.

- Add the error code, error message, response header, and response body.

## Error Set Settings

To add a new Error Set, click **New Error Set**. 

In the **Error Set** window, input the following values for the error set. 

|**Field** |**Description** |
| -------- | ------- |
|Error Set Name|The name of the error set. |
|Error Format|<p>The error format to be returned in the content-type response header for this error set. </p><p>For example, text/xml, application/JavaScript. </p>|
|Enable JSONP Callback Wrapper|Enable the error return format as JSONP. |
|Alternate JSONP Error Format|The alternative error format for the Traffic Manager to use if the JSONP callback parameter is not configured for an endpoint, and the **Return as JSONP** option is enabled for the error set. For example, application/JavaScript. |

## Error Messages

This page displays the error codes and the error status for the developers to identify why an error is displayed. You can also create new error sets and edit error code status messages. 

The following table lists the default error message codes: 

|**Code** |**Description** |
| -------- | -------- |
|400 |Bad Request |
|403 |Forbidden: Not Authorized |
|403 |Forbidden: Account Inactive |
|403 |Forbidden: Account Over Queries Per Second Limit |
|403 |Forbidden: Account Over Rate Limit |
|403 |Forbidden: Invalid Referer |
|403 |Forbidden: Rate Limit Exceeded |
|403 |Forbidden: Service Requires SSL |
|414 |Request-URI Too Long |
|502 |Bad Gateway |
|503 |Service Unavailable: Scheduled Maintenance |
|504 |Gateway Timeout |
|400 |Bad Request: Unsupported Parameter |
|400 |Bad Request: Unsupported Signature Method |
|400 |Bad Request: Missing Required Consumer Key |
|400 |Bad Request: Missing Required Request Token |
|400 |Bad Request: Missing Required Access Token |
|504 |Bad Request: Duplicated OAuth Protocol Parameter |
|401 |Unauthorized: Timestamp Is Invalid |
|401 |Unauthorized: Invalid Signature |
|401 |Unauthorized: Invalid Or Expired Token |
|401 |Unauthorized: Invalid Consumer Key |
|401 |Unauthorized: Invalid NONCE |

For a full list of generic HTTP error response codes, see [Generic HTTP Error Response Codes](Generic_HTTP_error_response_codes.md). 

## Error Message Settings

This page displays the HTTP Status Code for the error and the HTTP Status Code Message for the error. This page allows you to edit the Response Header and Response Body for the error. It cannot be edited. 

:::note

If the **Header** and **Response Body** fields are not specifically defined for an Error Message, the Traffic Manager will return a generic, XML formatted error Header and Response Body. 

:::

The following table describes the fields on **Error Message** page. 

|**Field** |**Description** |
| ------- | ------- |
|Code|The HTTP Status Code for the error. |
|Status|The HTTP Status Code Message for the error. |
|Header|<p>Information to be placed in the "X-Error-Detail-Header" Response Header for the error. </p><p>:::note</p><p>If the Header field is not specifically defined for an Error Message, the Traffic Manager will not return the "X-Error-Detail-Header" Response Header.</p><p> </p>|
|Response Body|<p>Information to be placed in the Response Body for the error.</p><p>:::note</p><p>If the Response Body field is not specifically defined for an Error Message, the Traffic Manager will return a generic, XML-formatted Response Body. For example, `<h1>Developer Account Inactive</h1>`</p><p>::: </p><p>If you would like to use a JSON-formatted Response Body, you will need to specify the JSON message in the **Response Body** field for each of the error messages in the Error Set list. For example: `{"error": {"code": 403, "message": "Developer Account Inactive:}}`</p>|

## Endpoint Error Setting

The Endpoint Error Settings page allows you to configure the endpoint to use one or more error sets for errors delivered from the API Management platform. You can select the default error set for the endpoint, as configured in the API Definition Error Sets and set the conditions for which alternative error sets are delivered. 

The following table describes the fields on the **Endpoint Error Settings** page. 

|**Field** |**Description** |
| ------- | ------- |
|Error Set |<p>Defines the default Error Set for the endpoint. </p><p>For multiple Error Sets, select the default Error Set list. </p>|
|User Controlled Error Format Selection |<p>For multiple Error Sets defined for the API Definition, this option allows you to allow API users to specify alternative error formats. </p><p>Select where in the API request call the Traffic Manager should look for an alternative error format request. </p><p>The following are the available options : </p><p>- Request Parameters </p><p>- Request Body </p><p>- Request Header </p><p>- Resource </p><p>The **Resource** option configures the Traffic Manager to determine the custom error format request based on the file type specified within the URL of the API call. </p>|
|User Controlled Error Format Selection Source |<p>Specify the actual identifier to look for in the API request call along with the name of the corresponding alternative error set to use when that identifier is received in the API request. </p><p>For example, in the above image, two Error Sets are defined for the API Definition. One Error Set is called "XML" and the other Error Set is called "JSON" If "XML" is set as the default error set and you would like to allow API users to optionally request the JSON error set by including an Accept header of application/json, you would set the User Controlled Error Format Selection to "Request Header" and include "application/json=JSON" as the User Controlled Error Format Selection Source. </p>|

