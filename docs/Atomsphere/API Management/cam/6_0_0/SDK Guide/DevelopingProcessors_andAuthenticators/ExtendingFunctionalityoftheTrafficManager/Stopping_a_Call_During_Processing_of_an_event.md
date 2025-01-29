---
sidebar_position: 5
---
# Stopping a Call During Processing of an Event

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-0defc01b-b12e-4ff5-95c6-016f9028ee04"/>
</head>

This version of the SDK allows you to terminate a call during pre or post processing, or in authentication event handling. For example, if the request does not have a required URL parameter, Local Edition can be configured to terminate the call in the preprocessing. 

:::note

All the headers, status codes, and status messages set in the custom processing are returned to the client as part of the response in preprocessing and post processing. 

:::

:::note

All the headers, status code, and status messages set in the custom authentication are not returned as a part of the response in case of authentication event handling (custom authenticator). If you want to fail an authentication request from the custom authenticator, then stop the call to throw the `ERR_403_NOT_AUTHORIZED` error for a request.

:::

For example, if you want to terminate the call in authenticator, if the request does not contain the authorization header, then the call can be stopped by marking the response as complete as shown in the following example: 

```xml
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import com.mashery.http.HTTPHeaders;
import com.mashery.trafficmanager.debug.DebugContext;
import com.mashery.trafficmanager.event.listener.Authenticator;
import com.mashery.trafficmanager.event.listener.TrafficEventListener;
import com.mashery.trafficmanager.event.model.TrafficEvent;
import com.mashery.trafficmanager.event.processor.model.AuthenticationEvent;
import com.mashery.trafficmanager.event.processor.model.PostProcessEvent;
import com.mashery.trafficmanager.event.processor.model.PreProcessEvent;
import com.mashery.trafficmanager.processor.ProcessorBean;
import com.mashery.trafficmanager.processor.ProcessorException;
@ProcessorBean(enabled = true, name = "CustomAuthentication", immediate = true)
public class CustomAuthentication implements TrafficEventListener,Authenticator {
@Override
public void handleEvent(TrafficEvent event) {
try {
if (event instanceof AuthenticationEvent) {
authenticate((AuthenticationEvent) event);
}
} catch (ProcessorException e) {
}
}
private void authenticate(AuthenticationEvent event)
throws ProcessorException {
//For example request doesn't contain the authorization header then user can terminate the call
by marking response as complete
// in order to thrown 403 ERR_403_NOT_AUTHORIZED for the incoming request.
if (headers != null) {
String authorization = headers.get(HEADER_AUTHORIZATION);
if ((null == authorization || authorization == "")
|| !authorization.startsWith(AUTH_BASIC)) {
debugContext.logEntry("Final Value", "DIY-CUSTOM-AUTH-HEADER-FAILIURE");
event.getCallContext().getResponse().setComplete();
}
}
}
```

If you want to stope the call in pre or post processing, refer to the following example: 

```xml
package com.mashery.processor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import com.mashery.trafficmanager.event.listener.TrafficEventListener;
import com.mashery.trafficmanager.event.listener.Authenticator;
import com.mashery.trafficmanager.event.model.TrafficEvent;
import com.mashery.trafficmanager.event.processor.model.PostProcessEvent;
import com.mashery.trafficmanager.event.processor.model.PreProcessEvent;
import com.mashery.trafficmanager.model.core.ExtendedAttributes;
import com.mashery.trafficmanager.processor.ProcessorBean;
import com.mashery.trafficmanager.processor.ProcessorException;
@ProcessorBean(enabled = true, name = "PrePostProcessing", immediate = true)
public class PrePostProcessing implements TrafficEventListener{
private final Logger log = LoggerFactory.getLogger(PrePostProcessing.class);
@Override
public void handleEvent(TrafficEvent event) {
try {
if (event instanceof PreProcessEvent) {
preProcess((PreProcessEvent) event);
} else if (event instanceof PostProcessEvent) {
postProcess((PostProcessEvent) event);
}
} catch (ProcessorException e) {
log.error("Exception occurred when handling processor event");
}
}
//In the below example we checking the query parameter's value to decide whether to terminate
the call or not.
private void preProcess(PreProcessEvent event) throws ProcessorException {
String complete = event.getCallContext().getRequest().getQueryData().get("preComplete");
if (complete != null) {
event.getCallContext().getResponse().getHTTPResponse().setBody(new
StringContentProducer("{\"response\": \"Terminated the call in pre-processing\"}"));
event.getCallContext().getResponse().setComplete();
}
}
//In the below example we checking the query parameter's value to decide whether to terminate
the call or not.
private void postProcess(PostProcessEvent event) throws ProcessorException {
String complete = event.getCallContext().getRequest().getQueryData().get("postComplete");
if (complete != null) {
event.getCallContext().getResponse().getHTTPResponse().setBody(new
StringContentProducer("{\"response\": \"Terminated the call in post-processing\"}"));
event.getCallContext().getResponse().setComplete();
}
}
}
```



