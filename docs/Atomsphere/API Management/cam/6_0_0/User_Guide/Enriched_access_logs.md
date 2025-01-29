---
sidebar_position: 4
---

# Enriched Access Logs

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-d5e38e6b-9cf4-4f09-b840-8a26fa0016fc"/>
</head>

Log service generates the enriched access logs. The following table shows the order in which the fields are present in the logs. 

|**Field** |**Type** |**Description** |**Example** |
| ----- | ----- | ----- | ----- |
|log\_time|dateTime|Time of a log when the log is generated.|15-02-2024 08:47:17.389|
|log\_level|string|Log level. It can be DEBUG, INFO, WARN, ERROR, and CRITICAL.|INFO|
|log\_type|string|Type of a log.|PROXY\_ACCESS|
|class\_name|string|The log statement either finds "-" or a string.|"-"|
|request\_host\_name|string|The name of the host that took the call.|hapi.hoovers.com|
|src\_ip |string |Originating IP address of the call. |158\.151.240.64 |
|ident|string|Global unique identifier (GUID) of the call.|26e2fa2d-3e63-4ec8-8aaa-fb4643e601cf|
|record\_type|string|<p>Type of the call. It can be one of the following:</p><p>- "-" </p><p>- "tracked\_call"</p><p>- "value\_event"</p>|N/A|
|process\_time|string|Date time when the request was processed. |[21/Apr/2014:21:25:46 +0000]|
|method |string |HTTP request method (GET, POST, PUT, DELETE, HEAD). |GET |
|uri |string |Path+query string portion of the request. |/TestAPI-34 |
|http\_version |string |HTTP version. It can be 1.1 or 1.0. |HTTP/1.1 |
|bytes |integer |Bytes returned in the response. |6668 |
|status |string |Three-digit HTTP response code. |200 |
|referrer |string |Referring URL for the call if any. |app:/MarketMeSuite.swf |
|user\_agent |string |Application that made the request. |curl/7.54.0 |
|request\_id |string |<p>Internal ID for this request. This is split into the following fields that are ingested: </p><p>- request\_time - Epoch micro time the request was received.</p><p>- mapi</p><p>- spkey </p><p></p><p>:::note</p><p>By default, the `request_id` is present in the raw access logs that a traffic manager generates but is not included in the JSON formatted output of fluent-bit.</p><p>::: </p>|1306282895.4215\_bt6pnhuqhwew22xy7jmw7bar\_x84p868ucwkkvxwwtc7uzw5h |
|referrer\_domain|string|Domain portion of the referring URL for the call, if any.| |
|proxy\_worker|string|A proxy worker that handled the request.| |
|api\_method |string |API method called. |GetCompanyDetailRequest 34 |
|cache\_hit |integer |<p>Boolean value for whether a response is from a cache. </p><p>If the value is 0, the response is not from the cache. </p>|0 or 1. |
|proxy\_error\_code|string|Internal error code for bouncing a request. If '-', the request is blocked from the endpoint.|ERR\_403\_DEVELOPER\_INACTIVE|
|exec\_time|float|Elapsed time in seconds from the moment the request is received at the proxy worker to the moment that a response is sent.|0\.745138884|
|remote\_total\_time |float |Elapsed time in seconds, the backend call took. |0\.03747 |
|connect\_time |float |Of the remote\_total\_time, how long, in seconds, it took to establish a connection before the first byte. |0\.001099 |
|pre\_transfer\_time |float |Of the remote total\_time, how long, in seconds, it took after establishing a connection before receiving the first byte. |0\.001099 |
|reference\_guid|string|Global unique identifier (GUID) of a call referenced by this call.|fcf87189-c3da-479d-b6b8-a848539f088c|
|user\_agent\_type|string|User agent type. "R" if the user agent matches as a robot; "-" otherwise.|"-"|
|oauth\_access\_token |string |Detected access token (on OAuth 2.0 protected resources). | |
|capacity\_center\_id|integer|On Premises capacity center identifier.| |
|capacity\_center\_name|string|OnPrem Capacity Center Name.| |
|ssl\_enabled |number |A flag indicating whether SSL is enabled for the connection from the Traffic Manager to the Customer API. |0 |
|quota\_id|string|Quota id.|476163|
|quota\_object\_type|string|Quota object type.|102|
|quota\_value |integer |Quota value. |0|
|throttle\_id|string|Throttle id.|476163|
|throttle\_object\_type|string|Throttle object type.|102|
|throttle\_value|integer|Throttle value.|0|
|service\_aggregate\_throttle\_value|integer|Service aggregate throttle value.|0|
|area\_aggregate\_throttle\_value|integer|Area aggregate throttle value.|0|
|plan\_id|integer|Identifier of a plan.|450|
|service\_definition\_endpoint\_id |integer |Unique identifier for the service endpoints. |41090 |
|service\_definition\_method\_id|integer|Service definition method id.|12473|
|resource\_filter\_id|integer|Resource filter.|0|
|stale\_cache|integer|If the call is satisfied from cache, indicates whether the call is satisfied from a stale cache entry. If the call is not satisfied from the cache, the value is 0 always.|0|
|data\_source|integer|It is a type of product serviced this call. SaaS = 0, MasheryLocal or ESG = 1.|0|
|bytes\_in|integer|Size in bytes of incoming request. The default value is 0.|0|
|client\_transfer\_time |float |Time in seconds after the transfer of data is completed through the traffic manager, until the client has pulled down the last byte.|0\.00200 |
|log\_version|string|It is used to support different versions of access call log generated by the traffic manager.|v3|
|log\_source|string|<p>This field indicates whether the log is generated from or SaaS edition. </p><p>The permissible values are local and SaaS.</p>|local|
|log\_ingestion|integer|Time required by a traffic manager.|1687422162584|
|area\_id|integer|Identifier of a customer.|222|
|customer\_name|string|Name of a customer.| |
|service\_name |string |Name of service. |testService |
|service\_definition\_endpoint\_uuid |string |Unique identifier for the Service Endpoints. |3dcnbsdefv9ac2zd9qd2taq4 |
|endpoint\_name |String |Endpoint name at for which the call is made. |Endpoint API 2 |
|plan\_name |string |Plan Name for the endpoint. |Test plan |
|plan\_uuid|string|Unique identifier of a plan.|d670a9f7-b523-4deb-b205-66b087020f42|
|package\_id|integer|Identifier of a package.| |
|package\_name |string |Package name for which api\_key is used. |TestPackage |
|package\_uuid |string |Unique identifier for the package. |58c0b3cb-268e-4e92-bd08-1e38da4e1ac9 |
|org\_uuid| |Unique identifier of an organization.| |
|org\_name|string|Name of an organization.||
|sub\_org\_uuid|integer|Unique identifier of a sub organization.|93|
|sub\_org\_name|string|Name of a sub organization.|SBO|
|cluster\_name|string|Name of the cluster from where the traffic is served.|b2cprod|
|pre\_process\_time|float|Adapter preprocess time.|0\.000|
|post\_process\_time|float|Adapter post process time.|0\.000|
|responsestr|string|generates the response string with source information.|200 OK (API) |
|responsestr\_no\_source|string|generates the response string without any source information.|200 OK|
|counts\_toward\_rate\_limit|boolean|<p>Whether the access log should be counted in rate limiting. </p><p>The acceptable values are true and false.</p>|true|
|optional\_v3|string|<p>This field is not used for 6.0.0. </p><p>The default value is "-".</p>|"-"|
|class|string|<p>This field captures class name details. </p><p>The default value is "-".</p>|"-"|

## Location of Enriched Access Logs

```/mnt/data/trafficmanager/enriched/access/access*.log```

## Sample log output

```
15-02-2024 08:47:17.389 INFO PROXY_ACCESS - tml.api.mashspud.com 10.128.0.81
dd1a5b27-e3ea-4139-95a4-a72c1609673e - [15/Feb/2024:08:47:17 +0000] "GET /test3?api_
key=XXXXX HTTP/1.1" 25 200 "-" "curl/7.29.0" 1707986837.343_test3_
b2qxuqhyh652hma8jw99gx5y "-" "trafficmanager-deploy-6c8fbb8f54-64ghp" "-" 0 - 0.045 0.030
0.000 0.000 - - - - - 0 6312 100 2 6312 100 1 0 0 6312 171234 0 0 0 0 0 0.000 v3 local
1707986837388 2222 "tml" "Test_API3" 3dcnbsdefv9ac2zd9qd2taq4 "Test_EP3" "Test_Plan3"
d670a9f7-b523-4deb-b205-66b087020f42 0 "Test_Pack3" 447ae50c-349e-4386-abb9-
0db67a64479e - "-" - "-" "-" 0.000 0.000 "200 OK (API)" "200 OK" true "-"
```
