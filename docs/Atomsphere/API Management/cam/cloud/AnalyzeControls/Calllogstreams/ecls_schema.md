---
sidebar_position: 5
---

# Enriched Call Log Streams (ECLS) Schema

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-bdcfc820-bbf5-4445-a475-ebc5e31bedf9"/>
</head>


## Example JSON

```xml
{
"data": [
{
"api_key": "",
"api_method_name": "v1 availability",
"bytes": "113",
"cache_hit": "0",
"client_transfer_time": "0.0",
"connect_time": "0.101",
"endpoint_name": "Inventory V1",
"http_method": "GET",
"http_status_code": "200",
"http_version": "HTTP/1.1",
"ingestion_time": "1555711021034",
"log_type": "SaaS",
"oauth_access_token": "-",
"package_name": "PetStore Package",
"package_uuid": "8c5f4216-7b4b-43b2-9e08-8613a804b69a",
"plan_name": "REST Access",
"plan_uuid": "7daeec13-16f2-4518-ba9d-2317257012a7",
"pre_transfer_time": "0.0",
"qps_throttle_value": "1",
"quota_value": "1",
"referrer": "-",
"remote_total_time": "0.081",
"request_host_name": "",
"request_id": "1555711003.068__fav6x8vp8wwcyj65m7yv3bzt",
"request_time": "2019-04-19T21:56:43Z",
"request_uuid": "132da36d-37b7-41e4-9d03-5e9f900f13c4",
"response_string": "200_OK_API",
"service_definition_endpoint_uuid": "6jwf2u7t74j7mmgc5dmbkjh6",
"service_id": "",
"service_name": "PetStore",
"src_ip": "12.34.56.789",
"ssl_enabled": "0",
"total_request_exec_time": "0.878",
"traffic_manager": "prod-j-worker-us-east-1b-52.acme.com",
"traffic_manager_error_code": "-",
"uri": "/v1/store/availability/100?api_key=",
"user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_4) AppleWebKit/537.36 (KHTML
like Gecko) Chrome/12.3.456.7 Safari/537.36"
"org_name": "organisationname",
"org_uuid": "xxnnxxnn",
"sub_org_name": "suborganisationname",
"sub_org_uuid": "xxnnxxxnnnn"
}
]
}
```

## Schema Definition

|**Field Name** |**Description** |**Data Type** |**Example** |
| ---- | ---- | ----- | ---- |
|api\_key |API key used by application. |string | |
|api\_method\_name |Name of Method as configured via the Method detection setting on the endpoint |string |v1 availability |
|bytes |Bytes in response |integer |113 |
|cache\_hit |Did API Management serve the request out of the cache? 1=it did, 0=it didn't |integer |0 |
|client\_transfer\_time |Total time transferring from API Management to client on outbound. |float |0 |
|connect\_time |Total time Traffic Manager negotiating connection with customer origin servers (0 value means reusing existing connection) |float | |
|endpoint\_name |Name of endpoint |string |Inventory V1 |
|http\_method |HTTP method (GET, POST, PUT) |string |GET |
|http\_status\_code |HTTP status code |integer |200 |
|http\_version |HTTP version |string |HTTP/1.1 |
|ingestion\_time |Time (Epoch milliseconds format) when ECLS subsystem saw this log message. |long |1555711021034 |
|log\_type |What is source on this log message - a API Management cluster (SaaS) or a Local Edition Cluster. Possible values: SaaS, ML. |string |SaaS |
|oauth\_access\_token |OAuth access token value |string |- |
|package\_name |Name of package |string |PetStore Package |
|package\_uuid |Unique ID for the package, used with V3 API |string |8c5f4216-7b4b-43b2-9e08-8613a804b69a |
|plan\_name |Name of plan |string |REST Access |
|plan\_uuid |Unique ID for plan, used with v3 API |string |7daeec13-16f2-4518-ba9d-2317257012a7 |
|pre\_transfer\_time |Process time by prior to transfer |float | |
|qps\_throttle\_value |Queries per second throttle count value |integer |1 |
|quota\_value |Count against call quota |integer |1 |
|referrer |Client referrer information |string |- |
|remote\_total\_time |Total call time spent waiting for response from origin by API Management. |float |081 |
|request\_host\_name |Name of host invoked by call |string | |
|request\_id |ID of request (time(epoch)serviceidAPI\_key) |string |068\_ |
|request\_time |Datetime when request was initiated with API Management (in ISO 8601 format) |string |2019-04-19T21:56:43Z |
|request\_uuid |Unique ID for request |string |132da36d-37b7-41e4-9d03-5e9f900f13c4 |
|response\_string |Response string which includes source of error (Mashery vs origin) |string |200\_OK\_API |
|service\_definition\_endpoint\_uuid |UUID for endpoint, used with v3 API |string |6jwf2u7t74j7mmgc5dmbkjh6 |
|service\_id |Service ID (Also sometimes known as SPKEY or Servicekey) |string | |
|service\_name |Name of service in which endpoint is located |string |PetStore |
|src\_ip |Source IP address of Client which initiated the request with API Management. |string |12\.34.567 |
|ssl\_enabled |Was SSL used in inbound connection? 1=Yes , 0=No |int |0 |
|total\_request\_exec\_time |Total time from receipt of request to completion of response to client, formerly exec\_time|float |878 |
|traffic\_manager |Traffic manager host name |string |prod-j-worker-us-east-1b-52.acme.com |
|traffic\_manager\_error\_code |Error code returned by Traffic Manager |string |- |
|uri |URI (with max length imposed) |string |/v1/store/availability/100?api\_key= |
|user\_agent |User Agent of client |string |Mozilla/5.0 (Macintosh; Intel Mac OS X 10\_14\_4) AppleWebKit/537.36 (KHTML like Gecko) Chrome/73.0.3683.103 Safari/537.36 |
|org\_name |<p>Name for the parent organization. </p><p>:::note</p><p>For an object not associated with the organization this value will be empty.</p><p>::: </p>|string | |
|org\_uuid |<p>Unique identifier of the parent organization. </p><p>:::note</p><p>For an object not associated with the organization, this value will be empty.</p><p>::: </p>|string | |
|sub\_org\_name |<p>Name of the sub organization. </p><p>:::note</p><p>For an object not associated with the sub organization, this value will be empty.</p><p>::: </p>|string | |
|sub\_org\_uuid |<p>Unique identifier of the sub organization. </p><p>:::note</p><p>For an object not associated with the sub organization, this value will be empty.</p><p>::: </p>|string | |

