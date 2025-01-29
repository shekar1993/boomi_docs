# JSON Validation Policy

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-eb881dfe-5086-40d3-82fc-c41a70e81930"/>
</head>

The JSON Validation policy allows JSON payload validation. This policy uses [JSON Schema Validator](https://github.com/java-json-tools/json-schema-validator)  It returns `400 BAD REQUEST` when request validation fails and `500 INTERNAL ERROR` when response validation fails, with a custom error message body.

## Timing


| On Request | On Response | On Request Content| On Response Content|
|---|---|---|---|
|   | |  X|X| 

## Configuration
| Property  |Required   |Description   | Type  | Default |
|---|---|---|---|---|
|`scope`|yes|Policy scope from where the policy is executed. `REQUEST_CONTENT` and `RESPONSE_CONTENT`| policy scope|`REQUEST_CONTENT`|
|  `errorMessage` |  yes |Custom error message in JSON format. Spel is allowed.   |string | `{"error":"Bad request"}`
|  `schema` |  yes | JSON schema.  |string |
|  `deepCheck` | no  | Validates descendant even if the JSON parent container is invalid.  | boolean| false |
| `validateUnchecked` |no | Unchecked validation means that conditions which would normally cause the processing to stop with an exception are instead inserted into the resulting report.  ::: Caution: Anomalous events such as unresolvable JSON Reference, or an invalid schema, will be masked. ::: | boolean | false|
|`straightRespondMode`|no|Only for `RESPONSE` scope. If set to true, responses that failed to validate will be sent to the user without replacement. |boolean|false|

## HTTP Status Code

| Code | Message|
|---|---|
|`400` (request scope) and `500` (response scope)|In case of: <ul><li>Invalid payload</li><li> Invalid JSON schema</li><li>Invalid error message JSON format</li></ul> |

## Example

```
{
  "scope": "REQUEST_CONTENT",
  "errorMessage": "Any custom error message",
  "schema": "{\"$schema\": \"https://json-schema.org/draft-04/schema#\\",   \"type\": \"object\", \"properties\": { \"value1\": {\"type\": \"string\" },     \"value2\": {       \"type\": \"string\"}},  \"required\": [\"value1\", \"value2\"]}",
  "deepCheck": false,
  "validateUnchecked": false,
  "straightRespondMode": false
}
```