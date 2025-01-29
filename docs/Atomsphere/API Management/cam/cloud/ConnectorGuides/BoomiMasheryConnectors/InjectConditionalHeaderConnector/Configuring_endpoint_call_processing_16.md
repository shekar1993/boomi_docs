---
sidebar_position: 4
---

# Configuring Endpoint Call Processing

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-54579cbb-accc-44cd-8c0f-10eb1994cd30"/>
</head>

## Sample JSON Input

- The following JSON code displays sample pre-input and post-input configurations. 

- For pre-inputs, you do not need to configure conditions because the status code of the call will occur after post-processing. Apart from the status code, no other conditions are checked in this connector.

- The sample pre-input JSON (shown below) adds two headers with same name (Accept) to all requests.

- The sample post-input JSON (shown below) adds five headers depending on the response status code. 

  - Header: "X-Content-Type-Options: nosniff" is added for response codes 500 and 504. 

  - Header: "Cache-Control: private" is added for response codes 400 and 404. 

  - Header: "Cache-Control: no-cache" is added for response codes 400, 404, and 200-299. 

  - Header: "Cache-Control: no-store" is added regardless of the response code. 

  - Header: "X-XSS-Protection: 1; mode=block" is added regardless of the response code. 

```xml
# Pre-input config
[
{
"header": "Accept: application/json"
},
{
"header": "Accept: application/xml"
}
]
# Post-input config
[
{
"header": "X-Content-Type-Options: nosniff",
"httpStatusCode": "500, 504"
},
{
"header": "Cache-Control: private",
"httpStatusCode": "400, 404"
},
{
"header": "Cache-Control: no-cache",
"httpStatusCode": "400, 404, 2xx"
},
{
"header": "Cache-Control: no-store"
},
{
"header": "X-XSS-Protection: 1; mode=block"
}
]
```

## Configuring Endpoint Call Pre-processing

To configure the Inject Conditional Header call pre-processing for an endpoint:: 

1. From the API Management Control Center, navigate to **Design > API Definitions**, then select the API definition from the list.

2. Click an existing endpoint on the **Endpoints** page.

3. Click **Call Transformation** in the left-hand menu.

4. On the **Call Transformations** page, specify the following information in these fields:

   a. **Processing Adapter:** com.mashery.proxy.customer.generic.inject-conditional-header-connector 
   
   b. **Perform Pre-Processing:** Enabled 
   
   c. Data to make available for pre-processing: 

|**Data** |**Example** |**Notes** |
| ---- | ---- | ---- |
|`[{"header": "value1"},{"header": "value2"}]`|`[{"header": "Accept: application/json"},{"header": "Accept: application/xml"}]`|Optional |

5. Click Save when done.

## Configuring Endpoint Call Post-processing

To configure the Inject Conditional Header call post-processing for an endpoint: 

1. From the API Management Control Center, navigate to Design > API Definitions, then select the API definition from the list.

2. Click an existing endpoint on the Endpoints page.

3. Click Call Transformation in the left-hand menu.

4. On the Call Transformations page, specify the following information in these fields: 

   a. Processing Adapter: com.mashery.proxy.customer.generic.inject-conditional-header-connector 
   
   b. Perform Pre-Processing: Enabled 
   
   c. Data to make available for post-processing: 

|**Data** |**Example** |**Notes** |
| ---- | --- | ----- |
|`[{"header": "value1", "httpStatusCode": "comma separated status code"},{"header": "value2",<"httpStatusCode": "comma separated status code"},{"header": "value3",	  "httpStatusCode":"comma separated status code and range"},{"header": "value4"</},{ "header": "value5"}]` | `[{"header": "X-Content-Type-Options: nosniff",     "httpStatusCode": "500, 504"},{ "header": "Cache-Control: private","httpStatusCode": "400, 404"},{"header": "Cache-Control: no-cache","httpStatusCode": "400, 404, 2xx"},{"header": "Cache-Control: no-store"},{"header": "X-XSS-Protection: 1; mode=block"}]`|Optional |

:::note

- For httpStatusCode values, different httpStatusCode values could be specified by comma separated values. 

  For example, "httpStatusCode":"500, 504". You can also specify httpStatusCode range as "1xx","2xx","3xx","4xx" or "5xx". 

- HttpStatusCode range is case-insensitive.

:::

5. Click Save when done. 
