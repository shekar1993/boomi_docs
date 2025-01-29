# Mock Policy

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-ebd8f402-cb1a-4c59-af7f-dfe93008d5f7"/>
</head>
 
Mock policy allows you to create a mocked response when a consumer is calling one of your services. This way, you do not have to provide a functional backend and it gives you more time to think about your API contract.

This policy is like a contract-first approach since you are able to create a fully-functional API without the need to write any code to handle consumer calls.

Internally, this policy replaces the default HTTP invoker by putting a mock invoker. There is not an HTTP call between the gateway and a remote service / backend.

When defining response body content, you can use Expression Language to provide a dynamic mock.

Mock policy automatically detects the content type.

## Timing


| On Request | On Response |
|---|---|
|  X |   | 


## Configuration
| Property  |Required   |Description   | Type  | Default |
|---|---|---|---|---|
|  `status` |  yes |HTTP status code. |integer | 
|  `headers` |  yes | HTTP headers. |array of HTTP headers |
|  `content` | yes  | HTTP body content. | string|  |

**Configuration Example**

``` json
"mock": {
    "status": "200",
    "headers": [
        {
            "name": "Content-Type",
            "value": "application/json"
        }, {
            "name": "Server",
            "value": "Company.io"
        }
    ],
    "content": "<user id=\"{#request.paths[3]}\">\n\t<firstname>{#properties['firstname_' + #request.paths[3]]}</firstname>\n\t<lastname>{#properties['lastname_' + #request.paths[3]]}</lastname>\n\t<age>{(T(java.lang.Math).random() * 60).intValue()}</age>\n\t<createdAt>{(new java.util.Date()).getTime()}</createdAt>\n</user>"
}
```


## Examples


Body content example (xml):
``` xml
<user id="{#request.paths[3]}">
    <firstname>{#properties['firstname_' + #request.paths[3]]}</firstname>
	<lastname>{#properties['lastname_' + #request.paths[3]]}</lastname>
	<age>{(T(java.lang.Math).random() * 60).intValue()}</age>
	<createdAt>{(new java.util.Date()).getTime()}</createdAt>
</user>

```
 Body content example (JSON):
 ``` json
 {
    "id": "{#request.paths[3]}",
    "firstname": "{#properties['firstname_' + #request.paths[3]]}",
    "lastname": "{#properties['lastname_' + #request.paths[3]]}",
    "age": {(T(java.lang.Math).random() * 60).intValue()},
    "createdAt": {(new java.util.Date()).getTime()}
}
``` 
 
## Example

```
"mock": {
    "status": "200",
    "headers": [
        {
            "name": "Content-Type",
            "value": "application/json"
        }, {
            "name": "Server",
            "value": "Company.io"
        }
    ],
    "content": "<user id=\"{#request.paths[3]}\">\n\t<firstname>{#properties['firstname_' + #request.paths[3]]}</firstname>\n\t<lastname>{#properties['lastname_' + #request.paths[3]]}</lastname>\n\t<age>{(T(java.lang.Math).random() * 60).intValue()}</age>\n\t<createdAt>{(new java.util.Date()).getTime()}</createdAt>\n</user>"
}
```
