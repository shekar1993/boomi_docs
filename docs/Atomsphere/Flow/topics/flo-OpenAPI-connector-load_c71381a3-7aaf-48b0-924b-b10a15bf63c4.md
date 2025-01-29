# x-flow-load

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-c71381a3-7aaf-48b0-924b-b10a15bf63c4"/>
</head>


This extension allows you to perform load operations using your OpenAPI document.

## Example

```
1  x-flow-load:
2    path: /albums/{id}/tracks
3     operation: get
4     parameters:
5       id: id
6       format:
7         default: json
```

## Properties

|Property|Description|
|--------|-----------|
|path|The path representing the relative endpoint called to perform the load operation.|
|operation|The HTTP method used to make the request.|
|parameters|The parameters included in the request. In this example, the `id:` in the URL is being mapped to an ID passed to the OpenAPI connector by .|
|default|Provide a value to apply when making a call to the API, instead of setting this parameter during the execution of a flow.|