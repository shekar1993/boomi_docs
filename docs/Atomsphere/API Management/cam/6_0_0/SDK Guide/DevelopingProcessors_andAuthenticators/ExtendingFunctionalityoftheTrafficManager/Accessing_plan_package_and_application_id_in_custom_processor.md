---
sidebar_position: 8
---
# Accessing Plan, Package and Application ID in Custom Processor

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-b9b1cdbc-ec16-4ee8-af83-03af5f8f3a74"/>
</head>

You can access the plan, package, and application ID of a processor. 

Access to the plan, package, and application ID is explained using a sample processor as follows: 

```xml
package com.tibco.apim.examples;
import com.mashery.trafficmanager.debug.Logger;
import com.mashery.trafficmanager.event.listener.TrafficEventListener;
import com.mashery.trafficmanager.event.model.TrafficEvent;
import com.mashery.trafficmanager.event.processor.model.PreProcessEvent;
import com.mashery.trafficmanager.model.core.PackageKey;
import com.mashery.trafficmanager.processor.ProcessorBean;
@ProcessorBean(enabled = true, name = "com.tibco.apim.examples.PlanAndPackageIdAccess",
immediate = true)
public class PlanAndPackageIdAccess implements TrafficEventListener{
@Override
public void handleEvent(TrafficEvent event) {
if (event instanceof PreProcessEvent) {
Logger.debug(PlanAndPackageIdAccess.class, "Handling pre process event");
doPreProcessEvent((PreProcessEvent) event);
}
}
private void doPreProcessEvent(PreProcessEvent event) {
//Get Key from the event and type cast it to Package key.
//From Package key plan, package and application details can be extracted.
PackageKey key = (PackageKey)event.getKey();
Logger.warn(PlanAndPackageIdAccess.class,"Plan Id is :" + key.getPlan().getId());
Logger.warn(PlanAndPackageIdAccess.class,"Package Id is :" + key.getPlan().getPackage
().getId());
Logger.warn(PlanAndPackageIdAccess.class,"Application Id is :" + event.getKey
().getApplication().getApplicationId());
}
}
```

For more information, refer to the working code in the examples/`PlanAndPackageIdAccess.java` file. 
