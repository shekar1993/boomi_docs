---
sidebar_position: 4
---

# Stopping Further Processing for Unavailable Header

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-2a3e7bbd-9359-485a-83e6-5f5085ab904e"/>
</head>

## Checking for Header

1. Get the headers from either HttpClientRequest or HTTPServerRequest of an event.

2. Check the header. 

3. If the header is not present or the value is not proper then you can stop the request and Local Ediiton would not send the request to the target server. 

4. You would be able to set the status code and status message in case of stopping of the call in pre/post processing. 

```xml
private void doPreProcessEvent(PreProcessEvent event) throws IOException {
MutableHTTPHeaders headers = event.getClientRequest().getHeaders();
String custHeader = headers.get("X-Custom-Header");
if(null == custHeader || !custHeader.equals("Allowed")){
event.getCallContext().getResponse().getHTTPResponse().setStatusCode
(HttpURLConnection.HTTP_BAD_REQUEST);
event.getCallContext().getResponse().getHTTPResponse().setStatusMessage
("Custom Header is not set in the client request");
event.getCallContext().getResponse().setComplete();
}
}
```

## Checking Parameter

1. Get *CallContext* from the event. 

2. From C*allContext* get *ApplicationRequest*. 

3. You can check for any parameter passed in the QueryData of *ApplicationRequest*. 

4. If the parameter is missing, then you can terminate the request and Local Ediiton cannot sent the request to the target server. You can stop the process, then set the status code and status message. 

```xml
private void doPreProcessEvent(PreProcessEvent event) {
//Remove below line and implement code to pre process the call request
String custParam = event.getCallContext().getRequest().getQueryData().get
("customParam");
if (custParam == null) {
event.getCallContext().getResponse().getHTTPResponse().setStatusCode
(HttpURLConnection.HTTP_BAD_REQUEST);
event.getCallContext().getResponse().getHTTPResponse().setStatusMessage
("Custom Header is not set in the client request");
event.getCallContext().getResponse().setComplete();
}
}
```
