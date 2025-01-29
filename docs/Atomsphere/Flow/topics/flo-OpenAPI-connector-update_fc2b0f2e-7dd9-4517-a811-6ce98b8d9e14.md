# x-flow-update

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-fc2b0f2e-7dd9-4517-a811-6ce98b8d9e14"/>
</head>


This extension allows you to perform update operations using your OpenAPI document.

## Example

```
1  x-flow-update:
2    path: /playlists/{playlist_id}
3    operation: put
4    exclude: 
5      href: true
6      id: true
7      snapshot_id: true
8      type: true
9      uri: true
10     images: true
11    parameters:
12      playlist_id: externalId
```

## Properties

|Property|Description|
|--------|-----------|
|path|The path representing the relative endpoint called to perform the update operation.|
|operation|The HTTP method used to make the request.|
|exclude *\(optional\)*|Optionally used to exclude the given properties from the content sent to the endpoint defined in path. This is helpful if you only need to send a subset of the information or if the specific API requires that you do not include more data than it is expecting. This key does not need to be included if no exclusions are needed.|
|parameters|The parameters included in the request. In this example, the `externalId` passed by is being matched to the `playlist_id` in the path.|