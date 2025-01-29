# Request Content Limit Policy

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-59243584-1331-462a-a8e3-d0557712ffc2"/>
</head>

You can use the request-content-limit policy to specify a maximum request content length allowed. This limit is compared to the content length header of the request.

 If this policy is used and the `content-length` header is not present, then the call will be rejected unless the request also has a non-empty `transfer-encoding` header.

## Timing


| On Request | On Response |
|---|---|
|  X |   |   

## Configuration

| Property  |Required   |Description   | Type  | Default |
|---|---|---|---|---|
|  `limit` |  yes |Maximum length of request content allowed.   |integer |

## Example
```
"request-content-limit": {
  "limit": 1000
}
```

## Errors

| Code | Message|
|---|---|
|`400`| The limit from the configuration is not correct.|
|`413`| Incoming HTTP request payload exceeds the size limit.|
|`411`| The HTTP request is not chunked and does not specify the Content-Length header.|




