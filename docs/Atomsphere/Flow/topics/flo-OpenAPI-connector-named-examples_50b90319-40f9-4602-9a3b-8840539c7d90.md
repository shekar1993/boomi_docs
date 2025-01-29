# Choosing one of a list of named examples

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-50b90319-40f9-4602-9a3b-8840539c7d90"/>
</head>


In this example, a list of named examples are referenced in the OpenAPI document schema.

When configuring examples, it may be useful to have multiple examples defined for a single endpoint and then switch between them by changing a single line of configuration, instead of refining an example.

This is achieved by providing the name of the desired example.

In this example, note line 18 where the desired example’s name is provided.

```
1  "/crud/example/get-examples":
2    get:
3      summary: Get where there are examples defined on the type and list of examples, using the example in x-flow-query to choose which to return.
4      operationId: GetExamples
5      responses:
6        "200":
7          description: successful operation
8          content:
9            application/json:
10              schema:
11                x-flow-type:
12                  name: ExamplesResponse
13                x-flow-query:
14                  path: /crud/example/get-examples
15                  operation: get**
16                  example: 
17                    response: "200"
18                    examples: ExampleTwo**
19              examples: 
20                ExampleOne:
21                  value:
22                    id: 2
23                    name: Examples Item One**
24                ExampleTwo:
25                  value:
26                    id: 3
27                    name: Examples Item Two ** 
```