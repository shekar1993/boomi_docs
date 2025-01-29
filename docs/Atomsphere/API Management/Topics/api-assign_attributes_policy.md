# Assign Attributes Policy

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-976aa507-2d91-4136-a715-da3bd7c2fb22"/>
</head>

The `assign-attributes` policy sets variables such as request attributes, message attributes and other execution context attributes.

You can use it to retrieve initial request attributes after Transform headers or Transform query parameters policies and reuse them in other policies (Dynamic routing, for example).

## Timing

| On Request | On Response| On Request Content | On Response Content|
|---|---|---|---|
|  X | X  |X|X|


## Configuration

| Property  |Required   |Description   | Type  | Default |
|---|---|---|---|---|
|`scope`|no|The execution scope (`REQUEST`, `RESPONSE`, `REQUEST_CONTENT`, `RESPONSE_CONTENT`).|string|`REQUEST`
|`attributes`|yes|List of attributes. See below.|

**Attributes**

| Property  |Required   |Description   | Type  | Default |
|---|---|---|---|---|
|`name`| yes| Attribute name.|string||
|`value`| yes| Attribute value (can be [EL](docs/Atomsphere/API%20Management/Topics/api-expression_language.md))|string||

## Examples

**Request header**
Inject request attributes into the context attributes:

``` json
"assign-attributes": {
    "attributes": [
        {
            "name": "initialContentTypeHeader,
            "value": "{#request.headers['Content-Type']}"
        },
        {
            "name": "initialFooParamHeader,
            "value": "{#request.params['foo']}"
        }
    ]
}

```
To extract the request attributes you can use the following syntax:

Get the content-type header:
```
{#context.attributes['initialRequest'].headers['content-type']}
```
Get the foo query param:
```
{#context.attributes['initialRequest'].params['foo']}
```

## Errors

HTTP status code

| Code | Message|
|---|---|
|`500`|An error occurred while setting request attributes in the execution context.|
