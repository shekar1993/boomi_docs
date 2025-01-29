# x-flow-type

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-8d0e1505-caf7-4744-a860-4bad3a4c3420"/>
</head>


This extension allows you to work with types using your OpenAPI document.

## Example

```
1  x-flow-type:
2    name: AddTrackRequest
3    customProperties: 
4      playlist_id: string
```

## Properties

|Property|Description|
|--------|-----------|
|name|The name of the type, in cases where the type is contained within the **Components** section of the schema this will usually match the **Component key**.```
1       TrackRestrictionObject:
2          x-flow-type:
3            name: TrackRestrictionObject
```

In cases where the type is defined as a requestBody or response, this key is the only place where a name for this object will be present.

|
|customProperties|Defines custom properties along with a primitive type which will be added to the type definition when the type is imported into . For example, this could be used where you need to add a track to a playlist, but in order to do so you need both the `playlist_id` and the `track ids` present on the given type.

By adding this custom property and populating it with the correct value during the flow's execution, the `AddTrackRequest` will be successful.

|