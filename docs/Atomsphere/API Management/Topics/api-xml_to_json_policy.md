# XML to JSON Policy

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-177d9cb3-e486-409f-8d39-81b3bb4c0969"/>
</head>

The XML to JSON policy transforms XML content to JSON content.

## Timing

| On Request Content | On Response Content| 
|---|---|
|X|X|

## Configuration

| Property  |Required   |Description   | Type  | Default |
|---|---|---|---|---|
|`scope`|yes| The execution scope (`REQUEST` or `RESPONSE`).|string|RESPONSE|

## Example

```
"xml-json": {
    "scope": "RESPONSE"
}

```

## Errors

**HTTP status code**

|Code|Message|
|---|---|
|`500`|The transformation cannot be executed properly.|


**Nested Objects**

To limit the processing time and memory consumption in case of nested object, a default max depth of nested object has been set to 1000. This default value can not be changed.