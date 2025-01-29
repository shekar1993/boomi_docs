---
sidebar_position: 8
---

# Implementing Lifecycle Callback Handling

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-c5b34f78-3123-4217-9f93-c96f8f34dd8f"/>
</head>

If you wish to have some initialization work done once and only once for each of the processors, then implement the following interface: 

`package com.mashery.trafficmanager.event.listener`: 

```xml
/*** The lifecycle callback which gets called when the processor gets loaded when installed and
released*/
public interface ListenerLifeCycle {
/*** The method is called once in the life-cycle of the processor before the processor is deemed
ready to handle requests. If the processor throws an exception, the activation is assumed to be a
failure and the processor will not receive any requests @throws ListenerLifeCycleException*/
public void onLoad(LifeCycleContext ctx) throws ListenerLifeCycleException;
/*** The method is called once in the life-cycle of the processor before the processor is removed
due. The processor will not receive any requests upon inactivation.*/
public void onUnLoad(LifeCycleContext ctx);
}
```

The **onLoad** call is made once prior to the processor handling any requests and **onUnLoad** call is made before the processor is decommissioned and no more requests are routed to it. 

The lifecycle listener can be implemented on the Processor class or on a separate class. The annotation needs to add a reference to the lifecycle-class if the interface is implemented (see highlighted property in **bold**). 

```xml
package com.company.extension;
@ProcessorBean(enabled=true, name=”com.company.extension.CustomProcessor”,
immediate=true, lifeCycleClass=”com.company.extension.CustomProcessor”)
public class CustomProcessor implements TrafficEventListener, ListenerLifeCycle{
public void handleEvent(TrafficEvent event){
//write your custom code here
}
public void onLoad(LifeCycleContext ctx) throws ListenerLifeCycleException{
}
public void onUnLoad(LifeCycleContext ctx){
}
}
```

:::note

The *lifeCycleClass* property should point to the class implementing the Listener LifeCycle interface. This also allows having a separate lifecycle listener interface as follows (note the different lifeCycleClass name). 

:::

The following example shows a different class implementing the LifeCycle callback: 

```xml
package com.company.extension;
@ProcessorBean(enabled=true, name=”com.company.extension.CustomProcessor”,
immediate=true, lifeCycleClass=”com.company.extension.CustomProcessorLifeCycle”)
public class CustomProcessor implements TrafficEventListener {
public void handleEvent(TrafficEvent event){
//write your custom code here
}
public void onLoad(LifeCycleContext ctx) throws ListenerLifeCycleException{
}
public void onUnLoad(LifeCycleContext ctx){
}
}
public class CustomProcessorLifeCycle implements ListenerLifeCycle{
public void onLoad(LifeCycleContext ctx) throws ListenerLifeCycleException{
}
public void onUnLoad(LifeCycleContext ctx){
}
}
```
