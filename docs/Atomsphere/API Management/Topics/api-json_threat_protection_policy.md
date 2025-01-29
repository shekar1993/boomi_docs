# JSON Threat Protection Policy

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-2b9dd951-ffd6-4417-ab0d-0fcbcae3eb06"/>
</head>

The `json-threat-protection` policy validates a JSON request body by specifying limits for various JSON structures such as arrays, field names, and string values. When an invalid request is detected (the limit is reached), the request is considered a threat and rejected with a `400 BAD REQUEST`.

## Timing

| On Request | On Request Content |
|---|---|
|   | X  |


## Configuration

| Property  |Required   |Description   | Type  | Default |
|---|---|---|---|---|
|`maxEntries`|no|Maximum number of entries allowed for a JSON object. For example,  `{ "a":{ "b":1, "c":2, "d":3 }}`, `a` has three entries.|integer (-1 to specify no limit)|100|
|`maxArraySize`|no|Maximum number of elements allowed in an array.|integer (-1 to specify no limit)|100|
|`maxDepth`|no|Maximum depth of JSON structure. For example, `{ "a":{ "b":{ "c":true }}}` has a depth of three.|integer (-1 to specify no limit)|100|
|`maxNameLength`|no|Maximum string length allowed for a JSON property name.|integer (-1 to specify no limit)|100|
|`maxValueLength`|no|Maximum string length allowed for a JSON property value.| integer (-1 to specify no limit)|500|

## Errors

HTTP status code

| Code | Message|
|---|---|
|`400`|Received in the following cases: <br/>Invalid JSON structure, maximum depth exceeded, maximum JSON entries exceeded, maximum JSON array size exceeded, maximum JSON field name length exceeded, maximum JSON field value length exceeded|


