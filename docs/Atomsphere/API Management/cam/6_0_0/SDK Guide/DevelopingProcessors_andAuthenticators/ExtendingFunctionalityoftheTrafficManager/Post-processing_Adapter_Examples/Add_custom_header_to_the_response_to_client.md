---
sidebar_position: 2
---

# Adding Custom Header to the Response to Client

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-119c6810-f70a-4f07-ac80-55ed98649ee7"/>
</head>

1. Get *TrafficManagerResponse* from the Callcontext of an event. 

2. Get *HTTPServerResponse* from *TrafficManagerResponse*. 

2. Get Headers from HTTPServerResponse and add a new header to the *MutableHTTPHeaders* list. 

```xml
private static final String CUSTOM_HEADER="X-CUSTOM-HEADER";
private static final String CUSTOM_HEADER_VALUE="POST-PROCESSED";
@Override
public void handleEvent(TrafficEvent event) {
if(event instanceof PostProcessEvent){
Logger.debug(AddHeaderPostProcessor.class, "Handling post process event");
doPostProcessEvent((PostProcessEvent) event);
}
}
private void doPostProcessEvent(PostProcessEvent event) {
MutableHTTPHeaders headers = event.getCallContext().getResponse
().getHTTPResponse().getHeaders();
if(event.getCallContext().getResponse().getHTTPResponse().getStatusCode() == 200){
headers.add(CUSTOM_HEADER,CUSTOM_HEADER_VALUE);
}
}
```

:::note

Refer to the working code in examples/`AddHeaderPostProcessor.java`. 

:::
