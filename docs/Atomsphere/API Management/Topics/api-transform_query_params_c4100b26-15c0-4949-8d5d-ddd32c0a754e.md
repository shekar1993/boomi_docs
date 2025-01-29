# Transform Query Parameters Policy

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-c4100b26-15c0-4949-8d5d-ddd32c0a754e"/>
</head>

You can use the transform query params policy to override incoming HTTP request query parameters. You can override the HTTP query parameters by:

- Clearing all existing query parameters.

- Adding to or updating the list of query parameters.

- Removing query parameters individually.

The query parameter values of the incoming request are accessible via the `{#request.params['query_parameter_name']}` construct.



## Timing


| On Request | On Response |
|---|---|
|  X |   |  

# Examples

Add the ID of the incoming request to the outgoing request:
``` json
"transform-queryparams": {
    "addQueryParameters": [
        {
            "name": "myParam",
            "value": "{#request.id}"
        }
    ]
}
```
`https://host:port/path?foo=bar` becomes `https://host:port/path?foo=bar&myParam=my-request-id`

Remove existing param and add a new one:

``` json
"transform-queryparams": {
    "removeQueryParameters": [
        "foo"
    ],
    "addQueryParameters": [
        {
            "name": "myParam",
            "value": "myValue"
        }
    ]
}
```
`https://host:port/path?foo=bar&key=value` becomes `https://host:port/path?key=value&myParam=myValue`

Remove all existing params and add a new one:

``` json
"transform-queryparams": {
    "clearAll": true,
    "addQueryParameters": [
        {
            "name": "myParam",
            "value": "myValue"
        }
    ]
}
```
`https://host:port/path?foo=bar&key=value` becomes `https://host:port/path?myParam=myValue`

Replace an existing param:

``` json
"transform-queryparams": {
    "addQueryParameters": [
        {
            "name": "myParam",
            "value": "myNewValue"
        }
    ]
}
```
`https://host:port/path?myParam=myValue` becomes ` https://host:port/path?myParam=myNewValue`

Append multiple values to an existing param:

``` json
"transform-queryparams": {
    "addQueryParameters": [
        {
            "name": "foo",
            "value": "bar2",
            "appendToExistingArray": true
        },
        {
            "name": "foo",
            "value": "bar3",
            "appendToExistingArray": true
        }
    ]
}
```
`https://host:port/path?foo=bar` becomes `https://host:port/path?foo=bar&foo=bar2&foo=bar3` 

Replace an existing param with an array:

``` json
"transform-queryparams": {
    "addQueryParameters": [
        {
            "name": "foo",
            "value": "bar2",
            "appendToExistingArray": false
        },
        {
            "name": "foo",
            "value": "bar3",
            "appendToExistingArray": true
        }
    ]
}
```

`https://host:port/path?foo=bar` becomes ` https://host:port/path?foo=bar2&foo=bar3`


