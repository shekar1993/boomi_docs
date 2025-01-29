# Expression Language Conditions

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-ea9937df-4017-4b19-9ae8-eb90842ba63c"/>
</head>

You can use the EL to set a condition of execution and it is possible to use logical operators such as `&&` or `||`, as shown in the example below:
```
{#request.headers['my-header'] != null && #request.headers['my-header'] == "my-value"}
```

    :::note
    Alternate equality check: You can use the `equals()` method instead of `==`. When you use `.equals()`, it is recommended to put the string first to prevent an error. For example, if `#request.headers['my-header']` is null , then '`my-value'.equals(#request.headers['my-header'])` will prevent an error.

    :::
