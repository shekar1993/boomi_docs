---
sidebar_position: 3
---

# Pre and Post Processor Extension Points

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-0550e420-a311-4827-a970-1de95e81b899"/>
</head>

This version of the SDK allows extensions for processors only. This means that only pre and post processing of requests prior to invocation of the target host is allowed. 

## Listener Pattern

The extension API leverages a listener pattern to deliver callbacks to extension points to allow injecting custom logic. A call made to the traffic manager is an invocation to a series of tasks. Each step in the workflow accomplishes a specific task to fulfill the call. The current API release only allows customization of the tasks prior to invoking the API server (pre-process) and post receipt of the response from the API server (post-process). The Callback API handling these extensions is called a processor. The preprocess step allows a processor to receive a fully formed HTTP request targeted to the API server. The processor is allowed to alter the headers or the body of the request prior to the request being made to the server. On completion of the request and receiving the response the Traffic Manager allows the processor to alter the response content and headers prior to the response flowing back through a series of exit tasks out to the client.

## Event Types and Events

The transition of the call from one task to the next is triggered through events and an event is delivered to any subscriber interested in receiving the event. The SDK supports the following event-types, which are delivered synchronously: 

- **Pre-Process Event type**: This event is used to trigger any pre-process task.

- **Post-Process Event type**: This event is used to trigger any post-process task. 

- **Authentication Event type**: This event is used to trigger any custom authentication. 

The subscribers in this case are the processors registered in a specific manner with the Traffic Manager API. 

## Event Listener API

The Traffic Manager SDK provides the following interface and is implemented by custom processors to receive processor events. 

```xml
package com.mashery.trafficmanager.event.listener;
import com.mashery.trafficmanager.event.model.TrafficEvent;
/*** Event listener interface which is implemented by listeners which wish to handle Traffic events.
Traffic events will be delivered via this callback synchronously to handlers implementing the
interface.
The implementers of this interface subscribe to events via annotations. E.g. Processor events need
to handle events by using annotations in the com.mashery.proxy.sdk.event.processor.annotation */
public interface TrafficEventListener {
/*** The event is delivered to this API @param event*/
void handleEvent(TrafficEvent event);
}
```
