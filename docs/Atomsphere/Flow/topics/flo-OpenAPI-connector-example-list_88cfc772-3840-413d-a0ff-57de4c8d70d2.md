# Returning an example list

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-88cfc772-3840-413d-a0ff-57de4c8d70d2"/>
</head>


In this example, an endpoint example response is added for endpoints that would typically serve an array of objects.

You can define multiple examples to set up an endpoint example response for endpoints that would typically serve an array of objects.

For example:

```
1    ArrayOfExampleGet:
2      title: ArrayOfExampleGet
3      type: array
4      items:
5        $ref: '#/components/schemas/ExampleGetResponse'**
6      example:
7        - id: 1
8          name: Example Name
9        - id: 2
10          name: Second Example Name
11       - id: 3
12          name: Third Example Name**
```