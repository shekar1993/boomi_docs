---
sidebar_position: 4
---

# Configuring Endpoint Call Processing

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-f05d8219-c914-4298-bba2-664ec262daa5"/>
</head>

On the **Call Transformations** page, specify the following information in these fields: 

- **Processing Adapter:** com.mashery.proxy.customer.generic.oauth-token-validation-connector 

- **Perform Pre-Processing:** Enabled 

- **Data to make available for pre-processing** (one per line): Pre-Input Data as shown in the following table. 

|**Data** |**Example** |**Notes** |
  | ----|----- | ---- |
  |`token\_validation\_uri: { regionCodeHeader : <Header parameter name that holds region code> regionCodeValue : {"<region1 code>":"<token validation endpoint URI for region1>", "<region2 code>":"<token validation endpoint URI for region2>", "<region3 code>":"<token validation endpoint URI for region3> " } defaultURI : < default token validation endpoint URI> }`|`token\_validation\_uri: { regionCodeHeader:HTTP-REQUEST-REGION-KEY regionCodeValue: {"FR":" https://uki.acme-travel.com:9001/fr/userinfo", "US":"https:// uki.acme-travel.com : 9001/en/userinfo", "DE":"https:// uki.acme-travel.com :9001/ de/userinfo"} defaultURI: https://uki.acme-travel.com/ en/userinfo }`|<p>Mandatory; URI for token validation endpoint can be picked conditionally based on metadata present in API header. </p><p>- regionCodeHeader and regionCodevalue are optional to set. </p><p>- defaultURI is required and must be present for token validation. </p><p>Notes: </p><p>- If default URI parameter is not present or set, call is blocked with 401 -Unauthorized. </p><p>- regionCodeHeader and regionCodevalue should be configured together to achieve conditional picking of access token validation endpoint. </p>|
  |`.inject_headers: {"<HEADER1_NAME>":"<JSONPathExpression>","<HEADER2_NAME>":"<JSONPathExpression>",..} inject_headers:{ "<HEADER1_NAME>":"<JSONPathExpression>","<HEADER2_NAME>":"<JSONPathExpression>" }, ...`  |For JSONPath: `inject_headers: "US": { "X-User-Email": "$.uid", "X-Unit-Id": "$.b2bUnitId",  "default": { "X-User-Id": "$.email", "X-Unit-Id": "$.b2bUnitId", "X-Account-Number": "$.erpAccountNumber" } }` For XPath: `inject_headers:{ "FR": { "X-User-Email": "//uid", "X-Unit-Id": "//b2bUnitId", "X-Account-Number": "//erpAccountNumber" }, "default": { "X-User-Id": "//email", "X-Unit-Id": "//b2bUnitId", "X-Account-Number": "//erpAccountNumber" } }`|<p>Optional; key:value pair </p><p>In case token validation returns JSON/XML response with additional detail after successful validation. </p><p>Injects headers only when configured value is found in JSON/XML response using JSONPath/XPath Expression. </p><p>Injected header value must support UTF-8 for internationalization and special characters like "name": "Claes Rosenlöf" </p><p>In case JSONPath/XPath results in object instead of String, object will be converted into string and will be added in the header </p>|
  |`block\_authorization\_header:<true/false>` |`block\_authorization\_header : false` |<p>Optional; boolean values - true or false. Default Value - false </p><p>This setting is only applicable for access token which needs to get blocked or forwarded to the resource server. </p>|
  |`http\_proxy\_server : <string>` |`http\_proxy\_server : squid.example.com` |Optional; String values. Proxy Server to retrieve token\_validation\_uri. Supports only one third party proxy server per endpoint. |
  |`http\_proxy\_port : <integer>` |`http\_proxy\_port : 3128` |Optional; Integer value. Proxy Server Port to retrieve token\_validation\_uri. |
