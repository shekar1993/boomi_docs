# Returning a failing status code response

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-92bff7e2-ba9c-4776-8e17-8986213ae72e"/>
</head>


In this example, a custom response is served instead of the standard 200 \(OK\) response.

You can configure the OpenAPI document schema so that the OpenAPI connector will serve a response other than the standard 200 \(OK\) response.

This is first configured on the definition in the object schema:

```
1    ExampleOk:
2      x-flow-type:
3        name: ExampleOk
4      x-flow-query:
5        path: /crud/example/ok
6        operation: get**
7        example:
8          response: 404**
```

With an example for the status code then configured on the endpoint:

```
1  "/crud/example/ok":
2    get:
3      summary: ExampleOk
4      operationId: ExampleOk
5      responses:
**6        404:
7          description: Not found
8          content:
9            application/json:
10              schema:
11                $ref: '\#/components/schemas/ErrorResponse'
12              example:
13                code: "404"
14                message: "Not Found"**
```

In this example the connector will return an `ErrorResponse` object using the example defined.