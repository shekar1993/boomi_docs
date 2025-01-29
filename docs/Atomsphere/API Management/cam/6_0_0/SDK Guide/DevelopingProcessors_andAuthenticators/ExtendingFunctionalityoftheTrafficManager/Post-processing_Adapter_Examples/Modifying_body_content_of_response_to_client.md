---
sidebar_position: 3
---

# Modifying Body Content of Response to Client

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-4b775476-5f16-4fc6-99b8-c7f30531f0ea"/>
</head>

To modify the request body in the pre-processing stage, employ the content source and content producer to read from and write to the HTTP request. 

## Procedure

1. Get `HTTPClientResponse` from the `Callcontext` of an event. 

2. Get `ContentSource` from the `HTTPClientResponse`. 

3. Get `InputStream` from the `ContentSource` and convert it into a String form. 

4. Add or modify the string content and set the body of `HTTPServerResponse` with the new content. (HTTPServerResponse can be obtained from `TrafficManagerResponse` of the call context of an event.) 

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
ExtendedAttributes attrs = (event).getKey().getExtendedAttributes();
String strAllowed = attrs.getValue("EAV_CallAllowed");
if(strAllowed != null && !Boolean.parseBoolean(strAllowed)){
event.getCallContext().getResponse().getHTTPResponse().setStatusCode(401);
event.getCallContext().getResponse().getHTTPResponse().setBody(new
StringContentProducer("{\"error\":\"Call not allowed for this key\"}"));
event.getCallContext().getResponse().setComplete();
}
}
```

:::note

Refer to the working code in `examples/ AddBodyContentPostProcessor.java`. 

:::
