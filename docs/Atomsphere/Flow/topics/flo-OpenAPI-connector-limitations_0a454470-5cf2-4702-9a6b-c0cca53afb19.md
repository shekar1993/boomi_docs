# OpenAPI connector known limitations

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-0a454470-5cf2-4702-9a6b-c0cca53afb19"/>
</head>


The following known limitations affect the OpenAPI connector.

## Formats

Only JSON format is supported with this connector. XML format is not supported.

## Map elements

Currently, only the following map elements are supported for performing CRUD operations on API source data using the connector:

-   [Database load map elements](c-flo-ME_Load_d47f5e01-a760-4aa2-8342-e843dd3abc48.md)

-   [Database save map elements](c-flo-ME_Save_bffa5a42-8d81-4dd9-9528-1eb26ae04d4c.md)

-   [Database delete map elements
](c-flo-ME_Delete_3488f656-867a-426f-911a-54b620716d0d.md)


Message map elements are not currently supported for use with this connector.

## Nested types

The OpenAPI connector works with nested types by using recursion while parsing an OpenAPI schema definition. This results in nested types being namespaced as described above \(`ArtistObject:genres`\). This namespacing can also recurse and have multiple parent objects, for example, `ArtistObject:track:genres`. In most cases this is unnecessary and indicates that likely an `x-flow-type` extension could be added to the definition of the track property, if it is an object, to avoid the long namespaced name.

If the connector encounters a nested object which has been decorated with an `x-flow-type` extension then it will not namespace the property, as it will correctly identify the property as being of a top level type.

For example, `AlbumObject` is decorated with `x-flow-type` and has an `images` property which is a list of `ImageObject`, the property will retain the name `images` and be identified as a `ContentList` of type `ImageObject` as long as the `ImageObject` definition within the schema was also decorated with an `x-flow-type` extension. This avoids the scenario where the resulting type would be an `AlbumObject:images` type, which could result in duplicate types if the `ImageObject` also appears nested elsewhere.

## Objects without an ID

In certain interactions with the connector where expects an external ID, if this is not present on a given response, a GUID ID will be generated.

## oneOf keywords

In the OpenAPI document schema, a response from an API request may be defined as one of a collection of objects. In this scenario, as requires strictly defined types, the connector will generate a property for each possible response.

For example, in the case of a `PlaylistTrackObject` being able to return a `TrackObject` or an `EpisodeObject` for it's track property:

```
1   track:
2      description: Information about the track or episode.
3      oneOf:
4        - $ref: "#/components/schemas/TrackObject"
5        - $ref: "#/components/schemas/EpisodeObject"
```

The connector will generate two properties on the `PlaylistTrackObject`, `track-TrackObject` and `track-EpisodeObject`.

When a response from this endpoint is received by the connector it will populate the property with the object that matches the most properties.

## Response headers

Expected response headers are not supported with this connector.

## Scalar arrays

As scalar arrays are not supported in , an object will be created for any scalar arrays found in the API. A type will be a list containing an object with ID and Value properties.

To avoid name clashes for types created in this scenario, a new type is created and given a namespace of the parent object, such as `ArtistObject:genres` for example.

## Server URL

Only one absolute server URL is supported, for example:

`url: https://api.spotify.com/v1`

Environments or segmented URLs are not supported, such as:

`url: "@@@SCHEMA@@@://@@@HOSTNAME@@@/api/rest/v1/{accountId}"`

## Tables

Data cannot be loaded directly into a table, and an error is shown in this instance.