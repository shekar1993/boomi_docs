# Adding example keys

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-3b9b83dd-4004-4bf1-a9b0-0cc2cd7384a5"/>
</head>


In this example, the OpenAPI connector is used to return an example instead of contacting an API.

The `example: true` property can be added to a `x-flow` extension to allow the OpenAPI connector to return an example instead of contacting an API.

For example:

```
1  ExampleGetMediaResponse:
2      x-flow-type:
3        name: ExampleGetMediaResponse
4      x-flow-query:
5        path: /crud/example/get-media
6        operation: get**
7        example: true**
8      title: ExampleGetMediaResponse
9      type: object
10      properties:
11        id: 
12          type: integer
13          format: int32
14        name:
15          type: string**
16      example:
17        id: 1
18        name: Example Name**
```

An example can be defined in multiple places in a schema, as in this example.

The OpenAPI connector applies the following order of precedence:

1.  An example configured for an 200 \(OK\) response

2.  An example configured on the type itself


For example, the combination of the two above schema fragments within an OpenAPI document would mean that a query made to `/crud/example/get-media` would return the example object defined in the 200 \(OK\) response:

```
1              example:**
2                id: 99
3                name: MediaType example**
```