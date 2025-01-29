# Dynamic Routing Policy

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-0155a7d5-fc4e-4a90-9a72-895f77700a7f"/>
</head>

The dynamic-routing policy is used to dispatch inbound calls to different targets / endpoints or to rewrite URIs.

This policy is useful for creating API Mashups.

Another typical use case is defining the following type of routing:

- Requests from http://gateway/apis/store/12/info are redirected to http://backend_store12/info

- Requests from http://gateway/apis/store/45/info are redirected to http://backend_store45/info

## Timing
| On Request | On Request Content |
|---|---|
| X  |   |


## Attributes

| Name | Description |
|---|---|
| `request.endpoint` | The endpoint URL invoked by the gateway after dynamic routing.  |

## Configuration

You can configure multiple rules and their respective redirections relative to the initial request path.

  :::note

  When you define rules, it is important to remember that the API context-path must not be part of the rule’s path. For example, if your context-path is `/myapi` and your call is `/myapi/123`, if you want to select `123`, the regular expression is `/(.*)`.

  :::

**Regular expressions**

Using regular expressions can be useful when you want to capture some parts of the initial request path and reuse them to define the redirection.

For example, to capture the end of a path after `/v1/stores/`, the rule path is `/v1/stores/(.*)`. You can then use it in the redirect to property `http://store_backend/stores/{#group[0]}`

You can also use named groups instead of indexed groups: `/api/(?<version>v[0-9]+)/stores.*` ⇒ `http://host1/products/api/{#groupName'version'}`

## Examples

``` json
"dynamic-routing": {
    "rules": [
        {
            "pattern": "/v1/stores/(.*)",
            "url": "http://host2/stores/{#group[0]}"
        }
    ]
}
```

You can also select endpoints configured for your API by name using expression language:

``` json
"dynamic-routing": {
    "rules": [
        {
            "pattern": "/v1/stores/(.*)",
            "url": "{#endpoints['default']}/{#group[0]}"
        }
    ]
}
```

## Errors

HTTP status code

| Code | Message|
|---|---|
| `400`|No rules match the inbound request. |


