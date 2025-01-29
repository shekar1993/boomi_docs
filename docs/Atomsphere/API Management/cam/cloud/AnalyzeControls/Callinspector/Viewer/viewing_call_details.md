---
sidebar_position: 3
---

# Viewing Call Details

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-e7a85b25-2f83-408b-b130-701862569d84"/>
</head>


After the filters are applied and the matching calls are displayed on the screen, specific calls can be selected to view the request and response details. The Call capture summary displays the list of captured calls along with Inbound and Outbound requests and response details. 

The Current Usage progress bar displays the day's usage of call inspector by the amount of logged data. 

The request and response details are displayed in the Inbound Requests and Outbound Responses tab below the list of calls.

## Inbound Requests
This tab displays the original request and the API Management processed version of the request.

The following table describes the details of the Inbound Request tab. 

|**Field or Section** |**Description** |
| ----- | ---- |
|Inbound Request|Request received from the client application. Displays details such as associated method (GET, POST or other) and the headers sent with the call. |
|Inbound Process|Details of the call after they are processed by API Management to be sent to the API server or API Management cache. |

## Outbound Responses
This tab displays the original response from the API server and the API Management processed version sent to the client application.

The following table describes the details of the Outbound Response tab. 

|**Field or Section** |**Description** |
| ---- | ---- |
|Outbound Request|Response received from the API server. Displays details such as the headers and the message body. |
|Outbound Process|Details of the call after they are processed by API Management to be sent to the client application. |

