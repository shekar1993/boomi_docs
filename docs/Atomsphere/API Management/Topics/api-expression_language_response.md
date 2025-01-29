
# Expression Language Response

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-ab2d2a36-d507-4f5e-aee0-01a123d1ed10"/>
</head>

The object properties you can access for API responses from the `{#response}` root-level object property are listed below.

|Object Property|Description|Type|Example|
|---|---|---|---|
|content|Body content|string|||
|headers|Headers|key / value|`X-Custom → myvalue`|
|status|Status of the HTTP response|int|`200`|

*Example**

Get the status of an HTTP response: `{#response.status}`
