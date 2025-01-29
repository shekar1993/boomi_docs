# x-flow-identity - API key authentication

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-3f81463a-1046-45a4-9e5e-beedc4c01dfc"/>
</head>


This extension allows you to apply API key authentication using your OpenAPI document

## Example

```
1"/crud/example/get-media":
2    get:
3      summary: Get where example returned set against application/json media type though present in ref schema
4      operationId: ExampleGetMedia
5      responses:
6        200:
7          description: successful operation
8          content:
9            application/json:
10              schema:
11                $ref: '#/components/schemas/ExampleGetMediaResponse'
12              example:
13                id: 99
14                name: MediaType example
15      security:
16      - x-api-key: []
```

## Properties

In the example, the `x-api-key` under the security heading is an example of how this endpoint requires a security scheme named `x-api-key` to be used in order to be accessed. While this seems to indicate that this endpoint requires API key based authentication, this `x-api-key` definition actually just indicates the name of the security scheme that is defined later in the document.

```
1  components:
2    schemas:
3      securitySchemes:
4        x-api-key:
5          type: apiKey
6          name: x-api-key
7          in: query
```

-   Under the `components` \| `schemas` section of the schema, you can find the named definition for the `x-api-key` security scheme. The name used here must match the name defined against the endpoint above for this scheme to be used. Under this `x-api-key`, these entries define what the security scheme is and how it can be used.

-   In the example, this is an `apiKey` security definition, that has the name `x-api-key` and should be provided in the query. Nothing extra is needed at this point to ensure that this works, beyond providing the API key in the OpenAPI connector configuration values.

-   The OpenAPI connector can read the schema to discover whether there is an API key needed, and that this should be placed in the query string with the name `x-api-key`, if one is configured in the OpenAPI connector configuration values. This means that with this definition, and the connector being provided an API key, when the OpenAPI connector calls out to an endpoint it will append `?x-api-key=yourProvidedKey` to the URL.

-   The API key can also be placed in the header or in the cookie, as per OpenAPI specification. Adding an API key to the header will add a header to the request with the name provided, such as `x-api-key: yourProvidedKey`.