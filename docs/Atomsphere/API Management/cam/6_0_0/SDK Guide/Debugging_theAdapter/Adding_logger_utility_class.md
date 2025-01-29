---
sidebar_position: 2
---

# Adding Logger Utility Class

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-ed99301d-6c5c-4c41-803f-6afed23da341"/>
</head>

To debug the adapters, use com.mashery.trafficmanager.debug.Logger, a new utility class. This logs "debug"," info","warn", and "error log" statements. 

**Example statement**

```
com.mashery.trafficmanager.debug.Logger.info(MyAdapter.class,"Info statement for request param {} and value {},paramName, paramValue)
```

In the adapter class, add: 

```
com.mashery.trafficmanager.debug.Logger.info(MyAdapter.class,"Info statement for request param {} and value {},paramName, paramValue)
```

:::note

Use parameterized message patterns instead of concatenating variables to the message. 

:::
