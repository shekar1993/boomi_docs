---
sidebar_position: 13
---

# Endpoint More Settings

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-ffe9b156-9a90-4e9e-ad96-5358330a65f4"/>
</head>

The **Endpoint More Settings** page allows configuring the Traffic-Manager-specific settings. You can configure the Traffic Manager to include or exclude headers from the requests and responses. 

The following table describes the fields on the **Endpoint More Settings** page. 

|**Field** |**Description** |
| ---- | ---- |
|Time to wait for a response from endpoint|<p>Number of seconds by which the Traffic Manager receives a response from host server after an API call is connected. If a response is not received in this specified time, the Traffic Manager returns a 504 Gateway Timeout error. </p><p>Note that the following warning only applies API Management calls, and not API Management - Local Edition calls. </p><p>:::caution</p><p>If your traffic is being served by API Management, a timeout setting above 60 seconds will require intervention from API Management. Please open a support case with your use case. Should a call last beyond the specified timeout, or if the setting is greater than 60 seconds and you have not requested the timeout to be extended via a support case, the client will receive a 504 gateway timeout error.</p><p>::: </p>|
|Seconds to attempt initial connection to endpoint |Number of seconds that the Traffic Manager takes for an API call to connect on a TCP level to the host server. If connection fails to get established in this specified period, the Traffic Manager returns a 504 Gateway Timeout error. |
|Number of HTTP Redirects to follow (as needed) |<p>Setting that enables the Traffic Manager to handle redirects from the client API servers. </p><p>For example, </p><p>0: Configures the Traffic Manager not to follow and to pass the redirects back to the customer. This is the default redirect setting. </p><p>4: Configures the Traffic Manager to handle four redirects from the host server before issuing a redirect to the customer. </p>|
|Enable Cookies during redirects |Cookies are enabled and collected during server requests from Traffic Manager to the host server. |
|GZIP Passthrough |Setting that enables the Traffic Manager to accept and send gzip-formatted directive to the host server. |
|Force GZip Accept-encoding on backend call |<p>Setting that enables the Traffic Manage to force the gzip directive to the host server regardless of the accept-encoding value passed by the client. </p><p>This setting assist in improving the round-trip speed of large API calls as a result of reduced latency between the Traffic Manager and the host API servers. </p>|
|Remove API Key and Signature from Endpoint Call |<p>Configures the Traffic Manager to include or remove the API key from the API calls made to the client server. </p><p>:::note</p><p> This configuration is not applicable for API key sent in request body.</p><p>::: </p>|
|Allow calls having no API Key |Configures the Traffic Manager to accept API calls that do not have keys. This setting requires that a special API key is created with the key value of noapikey. This key is used by the Traffic Manager to accept the API call, apply the business rules, and log requests for the endpoint. |
|Swap Incoming API credentials for API Management Credentials|Specifies whether a developer key associated with an API call is to be swapped with another key before the Traffic Manager passes the call to the host server. |
|Forwarded Headers |<p>- **API Management Service ID:** The API Management Service ID is the unique identifier for the API Service being consumed. </p><p>- **API Management Host:** API Management Host header is the name of the host that is used to connect to API Management. For example, `api.customer.com` might be cnamed to `customer.api.mashery.com`. The incoming call could be `api.customer.com/doSomething`. In this case, the API Management host header value would be api.customer.com. </p><p>- **API Management Message ID:** The API Management Message ID header is a unique ID that is generated for every API call that is processed by the API Management network. Configures the Traffic Manager to include this ID in the request to the host server. This ID helps while debugging the issues and tracking the API events. </p>|
|Returned Headers|<p>- **API Management Responder:** Configures the Traffic Manager to include the name of the worker responding to the request via a customer returned header. </p><p>- **API Management Message ID:** The API Management Message ID header is a unique ID that is generated for every API call that is processed by the API Management network. Configures the Traffic Manager to include this ID in the response to the client. This ID helps while debugging the issues and tracking the API events. </p>|
|Pass Through Host Header in Request |<p>Configures the Traffic Manager to pass through the Host header that was used during the inbound connection through API Management. </p><p>For example, if the inbound host was api.customer.com, the Host header value would be api.customer.com when call is passed through to the host server. </p>|
|HTTP Headers to Drop from Incoming Call: (one per line) |Configures the Traffic Manager to remove HTTP headers from an API call before passing it to the client API servers. |
|JSONP Callback Function Parameter |The parameter that identifies the callback function that handles the JSON response. |
|Default JSONP Callback Function Parameter Value |The default value of the callback function if the **Callback Function Parameter** is empty. |
|Include Rate limit information in Response Headers |<p>Allows rate limit information to be included in response headers that are sent back to the calling application. This is useful for the developers to help them understand current usage of the API. </p><p>The reason for the difference in naming convention of the headers is because of the rate limit configuration on the keys. If the rate limit at the key level is set to default, it will take the plan's rate limits set and the headers returned will have Plan string in them. Otherwise, if the rate limit at the key level is set to Custom limit, it will take up the key's rate limit and the headers returned will have *PackageKey* string in them. </p>|

