---
sidebar_position: 4
---
# Caching Content

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-074dbc4d-fc18-41fd-902d-79e37adaed15"/>
</head>

You can interact with memcache using the Local Edition SDK. The memcached is a part of the Local Edition setup. A key-value pair can be stored in the cache.

The cache interface provided in the callback to the `TrafficEventListener` is:

```xml
package com.mashery.trafficmanager.cache;
/*** Cache API which allows extensions to store and retrieve data from cache*/
public interface Cache {
/**
* Retrieves the value from the cache for the given key
* @param key
* @return
* @throws CacheException
*/
Object get(String key) throws CacheException;
/**
* Puts the value against the key in the cache for a given ttl
* @param key
* @param value
* @param ttl
* @throws CacheException
*/
void put(String key, Object value, int ttl) throws CacheException;
}
```

A reference to the cache can be found on the `ProcessorEvent`, which is reported on the callback. Here is an example of how to access the cache on a callback: 

```xml
package com.company.extension;
@ProcessorBean(enabled=true, name=”com.company.extension.CustomProcessor”,
immediate=true
public class CustomProcessor implements TrafficEventListener, ListenerLifeCycle{
public void handleEvent(TrafficEvent event){
ProcessorEvent processorEvent = (ProcessorEvent) event;
Cache cacheReference = processorEvent.getCache();
//Add data to cache
try{
  cacheReference.put(“testkey”, “testValue”, 10)
}catch(CacheException e){
//load data or load default data
}
//write your custom processor code here
}
}
```


A reference to the cache is also available on the lifecycle callback: 

```xml
package com.company.extension;
public class CustomProcessorLifeCycle implements ListenerLifeCycle{
public void onLoad(LifeCycleContext ctx) throws ListenerLifeCycleException{
Cache cache = ctx.getCache();
// perform cache operations
}
public void onUnLoad(LifeCycleContext ctx){
}
}
```

For more information, see `examples/CacheAccess.java`. 
