---
sidebar_position: 4
---

# Configuring Endpoint Call Processing

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-e93bb529-0acf-4342-8aa4-285965f3dc30"/>
</head>

To configure OIDC ID token authentication call processing for an endpoint: 

On the **Call Transformations page**, specify the following information in these fields: 

1. **Processing Adapter**: com.mashery.proxy.customer.generic.oidc-token-connector 

2. **Perform Pre-Processing**: Enabled 

3. **Data to make available for pre-processing (one per line)**

|**Data** |**Example** |**Notes** |
| ---- | --- | ---- |
|`<p>userinfo\_endpoint: { </p><p>regionCodeHeader: <Header parameter name that holds region code> </p><p>regionCodeValue: {"<region1 code>":"<user info endpoint URI for region1>", </p><p>"<region2 code>":"<user info endpoint URI for region2>", </p><p>"<region3 code>":"<user info endpoint URI for region3>"} </p><p>defaultURI: < default user info endpoint URI> </p><p>} </p>`| <p>userinfo\_endpoint: \{ </p><p>regionCodeHeader:HTTP-REQUEST-REGION-KEY </p><p>regionCodeValue: \{"FR":"https://uki.acme-travel.com:9001/fr/userinfo", </p><p>"US":"https://uki.acme-travel.com:9001/en/userinfo", </p><p>"DE":"https://uki.acme-travel.com:9001/de/userinfo"\} </p><p>defaultURI: https://uki.acme-travel.com/en/userinfo </p><p>\} </p>|<p>Mandatory; </p><p>URI for user info endpoint can be picked conditionally based on metadata present in API header. </p><p>regionCodeHeader and regionCodeValue value are optional to set </p><p>defaultURI is required and must be present for user info </p><p>Notes: </p><p>If default URI parameter is not present or set, call is blocked with 401 -Unauthorized</p><p>regionCodeHeader and **regionCodeValue** should be configured together to achieve conditional picking of access user info endpoint. </p>|
|`inject_headers: {"<HEADER1_NAME>":"<JSONPathExpression>","<HEADER2_NAME>":"<JSONPathExpression>",..} inject_headers:{"<HEADER1_NAME>":"<JSONPathExpression>","<HEADER2_NAME>":"<JSONPathExpression>"}, ...`| For JSONPath: `inject_headers:{"US": {"X-User-Email": "$.uid", "X-Unit-Id": "$.b2bUnitId", "X-Account-Number": "$.erpAccountNumber"}, "default": {"X-User-Id": "$.email", "X-Unit-Id": "$.b2bUnitId", "X-Account-Number": "$.erpAccountNumber"}}` | <p>Optional; key:value pair </p><p>In case user info returns JSON response with additional detail after successful validation. </p><p>Injects headers only when configured value is found in JSON response using JSONPath Expression. </p><p>Injected header value must support UTF-8 for internationalization and special characters like `"name": "Claes Rosenlöf"`. </p> |
|`block_authorization_header:<true/false>`|`block_authorization_header : false`|<p>Optional;boolean values - true or false.Default Value -true</p><p>:::note</p><p>This setting is only applicable for access token which needs to get blocked or forwarded to the resource server.</p><p>:::</p>  |
|`error_metadata_location : <Error response meta data location>` |`error_metadata_location : ResponseHeaders` |<p>Optional; String values. Identify the location of error response that needs to be returned to user client on error condition. Possible Values: </p><p>ResponsePayload </p><p>ResponseHeaders </p>|
|`error_header_name : <Response header name>` |`error_header_name : WWW-Authenticate` |<p>Optional; String value </p><p>Response header that contains the error message. </p>|
|`error_payload_location:<JSONPath Expression>` |`error_payload_location: $.errorMessage` |<p>Optional; String value </p><p>Contains JSONPath expression which is used to retrieve error information from OpenID error response payload. Value retrieved using JSONPath expression is set as http response body. </p>|
|`http_proxy_server : <string>` |`http_proxy_server : squid.example.com` |<p>Optional; String values. Proxy Server to retrieve `userinfo_endpoint`. </p><p>Supports only one third party proxy server per endpoint. </p>|
|`http_proxy_port : <integer>` |`http_proxy_port : 3128` |Optional; Integer value. Proxy Server Port to retrieve userinfo\_endpoint. |
|`enable_error_set:<true/false> `|`block_authorization_header : true` |<p>Optional; boolean values - true or false. Default Value - false </p><p>If enable\_error\_set is configured as "true", API Management responds with ERR\_403\_NOT\_AUTHORIZED that is Gateway supported error message. In this case http response status code and status text for connector is overridden by error set defined for that endpoint in API Management Control Center. In this case, message overriding is done only if error is thrown from Mashery Connector. In case error is thrown from third party OpenID IDP, then message overriding will not be performed. </p><p>If enable\_error\_set is configured with value other than "true", then there is no change in Mashery Connector existing functionality that responds with ERR\_401\_UNAUTHORIZED for backend server response code with 401 for unauthorized calls. </p><p>enable\_error\_set parameter value with "true" is case-insensitive. </p>|

