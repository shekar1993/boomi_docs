# Setting up your OpenAPI document

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-34619894-c8c6-4ea2-8218-0b8fde37b450"/>
</head>


Your OpenAPI document and schema defines how the connector can integrate with your chosen API. The connector uses the document specification to understand how to interact with the API.

## Overview

Typically, you may wish to begin with a sample OpenAPI document downloaded directly from the API source, which can then be used as the starting point for your OpenAPI document. This can then be marked up as required using [x-flow](/docs/Atomsphere/Flow/topics/flo-OpenAPI-connector-extensions_a6b9ffd3-cfb6-4423-ad3c-b3209b2f5a80.md) extensions.

Adding these extensions to the document schema allows you to integrate your flows with your chosen API, for example by using database load, save, and delete map elements. These extensions provide hints for the endpoints that provide CRUD operations, allowing the data format for API requests/responses to be mapped between the API and .

Once you have created and configured your OpenAPI document, it will need to be hosted, with the location path \(URL\) provided in the `Schema URL` configuration value. See [OpenAPI connector configuration values](/docs/Atomsphere/Flow/topics/flo-OpenAPI-connector-configuration_ef57ce5b-71ef-410e-848f-a1403d5f630b.md).

## OpenAPI document specification requirements

-   Only OpenAPI documents using the v3.0.n OpenAPI specification format are supported.

-   OpenAPI documents formatted using the v2.n OpenAPI specification format are not supported by the connector.

-   OpenAPI specification files must be formatted as YAML files \(.yml, .yaml\).


## API authorization and authentication

The OpenAPI connector supports the following types of API authentication:

-   Open Authorization \(OAuth\)

-   OpenID Connect \(OIDC\)

-   API Key based authentication

-   Basic authentication


Authentication is configured using the `x-flow-identity` extension and any additional configuration values required by the API.

For example, some APIs may require the `OAuth2/OIDC: Client Secret` and `OAuth2/OIDC: Client ID` configuration values to be specified. See [OpenAPI connector configuration values](/docs/Atomsphere/Flow/topics/flo-OpenAPI-connector-configuration_ef57ce5b-71ef-410e-848f-a1403d5f630b.md).

## Components and types

Any `x-flow-type` definitions that are placed in the global components section in the OpenAPI document will be converted into types in .

For example:

```
1  components:
2    schemas:
3      BasicGetResponse:
4        description: Get Basic Response description
5        **x-flow-type:
6          name: BasicGetResponse**
7        x-flow-query:
8          path: /crud/get-basic
9          operation: get
10        title: BasicGetResponse
11        type: object
12       properties:
13         id: 
14          type: integer
15          format: int32
16         name:
17           type: string
```

In this example, a type with a name of “`BasicGetResponse`” is created in .

## Useful resources

The OpenAPI specification is laid out in detail on the Swagger website [OpenAPI Specification](https://swagger.io/specification/). This resource can be used to check which options are valid within the schema, and help you learn more about each part of the schema.

Your OpenAPI schema can also be validated using the [Swagger Editor](https://editor.swagger.io/). This is useful if you are writing a new OpenAPI schema to connect with an API which does not provide a template definition.