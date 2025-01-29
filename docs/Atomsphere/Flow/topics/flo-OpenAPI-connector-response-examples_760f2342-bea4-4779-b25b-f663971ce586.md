# OpenAPI connector response examples

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-760f2342-bea4-4779-b25b-f663971ce586"/>
</head>


Response examples can be added to parameters, properties and objects in your OpenAPI document schema.

## Overview

Response examples allow responses to be obtained using the connector, based on examples in the document schema, without actually having to retrieve response data from an external API.

An `example` key can be defined for a query endpoint, which will then be returned by the connector, instead of relying on a response from an external API.

For example:

```
1  "/crud/example/get-media":
2    get:
3      summary: Get where example returned is the one set against application/json media type
4      operationId: ExampleGetMedia
5      responses:
6        200:
7          description: successful operation
8          content:
9            application/json:
10              schema:
11                $ref: '#/components/schemas/ExampleGetMediaResponse'**
12              example:
13                id: 99
14                name: MediaType example**
15      security:
16      - x-api-key: []
```

To learn more about using OpenAPI response examples, see [Adding examples](https://swagger.io/docs/specification/adding-examples/) in the SmartBear OpenAPI Guide.

## Response examples

-   [Adding example keys](flo-OpenAPI-connector-adding-keys_3b9b83dd-4004-4bf1-a9b0-0cc2cd7384a5.md)

-   [Choosing one of a list of named examples](flo-OpenAPI-connector-named-examples_50b90319-40f9-4602-9a3b-8840539c7d90.md)

-   [Returning an example list](flo-OpenAPI-connector-example-list_88cfc772-3840-413d-a0ff-57de4c8d70d2.md)

-   [Returning a failing status code response](flo-OpenAPI-connector-example-failing-status_92bff7e2-ba9c-4776-8e17-8986213ae72e.md)