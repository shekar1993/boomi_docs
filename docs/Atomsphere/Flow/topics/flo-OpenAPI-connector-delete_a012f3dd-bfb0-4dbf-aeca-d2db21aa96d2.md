# x-flow-delete

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-a012f3dd-bfb0-4dbf-aeca-d2db21aa96d2"/>
</head>


This extension allows you to perform delete operations using your OpenAPI document.

## Example

```
1  x-flow-delete:
2    path: /pet/{petId}
3    operation: Delete
4    parameters:
5      petId: externalId
```

## Properties

|Property|Description|
|--------|-----------|
|path|The path representing the relative endpoint called to perform the delete operation.|
|operation|The HTTP method used to make the request.|
|parameters|The parameters included in the request. In this example, the `externalId` will be mapped to the `petId` required in the URL.|