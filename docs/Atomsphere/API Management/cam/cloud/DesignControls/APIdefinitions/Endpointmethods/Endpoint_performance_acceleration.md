---
sidebar_position: 8
---

# Endpoint Performance Acceleration

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-407f5d7f-2f14-4779-b660-229911170c0f"/>
</head>

Endpoint performance can be optimized by managing the cache. If your call responses are cacheable, specifying appropriate caching rules reduces the end-to-end latency time of API calls. The caching rules set at an endpoint-level, affect all calls made to the endpoint. 

The following table describes the fields on the **Endpoint Performance Acceleration** page. 

|**Field** |**Description** |
| --- | --- |
|Cache Time-To-Live (TTL)|Allows you to set time (in minutes) for which the data is stored in the cache. |
|Use Developer Key in Content Cache Key|Allows you to include a developer key in a content cache key. If enabled, the developer-specific calls are cached. If disabled, the calls are cached and used to respond to group of developers. |
|Respond From Cache Control Enabled|Allows you to enable the responses to be served from the cache control. |
|Client Surrogate Control|<p>Surrogate Cache-Control headers are similar to cache-control headers and can be included for fine-tuned caching. The directives set in these headers override the global caching settings on an object by object basis. </p><p>If the Client Surrogate Control option is enabled, the Traffic Manager accepts caching directives within surrogate-control request and response HTTP headers, and ignores cache-control directives in response headers even if they are available. For example, if this option is enabled, the Traffic Manager will assume TTL value to be the max-age value specified in surrogate-control header if that is available, not the max-age specified in cache-control directive. </p>|
|Content Cache Key Headers|<p>Headers that can be included in the key. This key is generated while caching the data. By default, this key includes URL and request parameters of the data. The following headers can be included in the keys: </p><p>- Accept </p><p>- Accept-Encoding </p><p>- Accept-Charset </p><p>- Accept-Language </p>|

