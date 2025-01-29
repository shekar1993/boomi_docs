# Transform Headers Policy


<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-b3b1b5f4-90ca-4583-8444-7617ec21bbf0"/>
</head>

The `transformheaders` policy is used to override incoming request HTTP headers or outbound response HTTP headers. You can override these HTTP headers by:

- Adding or updating list of headers

- Removing headers individually
- Defining an allow list


## Timing


| On Request | On Response |On Request Content| On Response Content|
|---|---|---|---|
|  X | X  |  X|X|

## Example

```
"transform-headers": {
    "addHeaders": [
        {
            "name": "X-Company-Request-Id",
            "value": "{#request.id}"
        }
    ],
    "removeHeaders": [
        "X-Company-TransactionId"
    ],
    "whitelistHeaders": [
        "Content-Type",
        "Content-Length"
    ],
    "scope": "REQUEST"
}
```
Add a header from the request payload:

``` json
"transform-headers": {
    "addHeaders": [
        {
            "name": "X-Product-Id",
            "value": "{#jsonPath(#request.content, '$.product.id')}"
        }
    ]
    "scope": "REQUEST_CONTENT"
}
```