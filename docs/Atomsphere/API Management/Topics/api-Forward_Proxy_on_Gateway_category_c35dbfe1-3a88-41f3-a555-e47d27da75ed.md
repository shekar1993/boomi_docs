# Forward Proxy on Gateway category 

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-c35dbfe1-3a88-41f3-a555-e47d27da75ed"/>
</head>


The Forward Proxy on Gateway category of operations is used to modify or return the forward proxy on an API Gateway.

## Supported operations 

The Forward Proxy on Gateway category is supported in the following operations:

| Operation               | QUERY        | MUTATION     |
|-------------------------|--------------|--------------|
| Forward Proxy           | Supported ✅ | Not supported ✗ |
| Forward Proxy Update    | Not supported ✗ | Supported ✅  |


## Query syntax 

```
{forwardProxy(id: ID!): ForwardProxy}
```

## Mutation syntax

#### Forward Proxy Update

``` 
forwardProxyUpdate(id: ID!, forwardProxyInput: ForwardProxyInput!): ForwardProxy! 

```

## Input and return fields syntax 

#### Mutation input syntax

``` 
input ForwardProxyInput {
    enabled: Boolean
    configuration: ProxyConfiguration
}
input ProxyConfiguration {
    hostAddress: String
    portNumber: Int
    proxyType: ProxyType
    credentials: ProxyCredentials
}
input ProxyCredentials {
    username: String
    password: String
}
enum ProxyType {
    HTTP
    SOCKS5
}

```

#### Return fields syntax

```
type ForwardProxy {
    id: ID
    enabled: Boolean
    hostAddress: String
    portNumber: Int
    proxyType: ProxyType
    username: String
    password: String
}

```

|Field|Type|Description|
|-----|----|-----------|
|id|*string*|The ID of the API Gateway.|
|enabled|*boolean*|Identifies whether or not forward proxy is enabled on the API Gateway.|
|hostAddress|*boolean*|The IP address or DNS name associated with the forward proxy server.|
|portNumber|*integer*|The Port number associated with the forward proxy server.|
|proxyType|*ProxyType*|The Proxy Type associated with the forward proxy server, either HTTP or SOCKS5.|
|username|*string*|The user name associated with the forward proxy server's account.|
|password|*string*|The password associated with the forward proxy server's account user name.|

``` 
enum ForwardProxyErrorCode {
    GATEWAY_ID_EMPTY
    GATEWAY_NOT_FOUND
    HOST_ADDRESS_EMPTY
    HOST_ADDRESS_TOO_LONG
    PORT_NUMBER_INVALID
    USERNAME_EMPTY
    USERNAME_TOO_LONG
    PASSWORD_TOO_LONG
    ENCRYPTION_FAILED
    DECRYPTION_FAILED
    SOCKS4_CREDENTIALS_INVALID
    CREDENTIALS_INVALID
    NOTHING_TO_UPDATE
    PROXY_CONFIG_MISSING
}

```

## GraphQL implementation 

**QUERY operation**

The following example returns the Forward Proxy configured on the API Gateway.

For a GraphQL request, send a request to https://platform.boomi.com/graphql with the following `X-Account` header: `accountId`

Request:

```
query forwardProxy($id: ID!){
    forwardProxy(id: $id){
        id
        enabled
        hostAddress
        portNumber
        proxyType
        username
        password
    }
}
{
	"id": "<xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx>"
}
```

For a JSON response, send the request with the following HTTP header:

`Accept: application/json`

JSON response:

```
{
  "data": {
    "forwardProxy": {
      "id": "<xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx>",
      "enabled": true,
      "hostAddress": "172.16.20.93",
      "portNumber": 808,
      "proxyType": "HTTP",
      "username": "user1",
      "password": "user1"
    }
  }
}
```

**forwardProxyUpdate operation**

The following example updates the forward proxy settings on an API Gateway.

For a GraphQL request, send a request to https://platform.boomi.com/graphql with the following `X-Account` header: `accountId`

Request:

``` 
mutation forwardProxyUpdate($id:ID!, $forwardProxyInput:ForwardProxyInput!) {
    forwardProxyUpdate(
        id:$id,
        forwardProxyInput:$forwardProxyInput
    )
    {
        id 
        enabled 
        hostAddress
        portNumber
        proxyType
        username
        password
    }
}
{
	"id": "<xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx>",
	"forwardProxyInput": {
		"enabled": true,
		"configuration": {
			"hostAddress": "127.0.0.1",
			"portNumber": 1082,
			"proxyType": "SOCKS5",
			"credentials": {
				"username": "proxy",
				"password": "test123"
			}
		}
	}
}
```

For a JSON response, send the request with the following HTTP header:

`Accept: application/json`

JSON response:

``` {#codeblock_onc_pgl_5qb}
{
    "data": {
        "forwardProxyUpdate": {
            "id": "<xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx>",
            "enabled": true,
            "hostAddress": "127.0.0.1",
            "portNumber": 1082,
            "proxyType": "SOCKS5",
            "username": "proxy",
            "password": "test123"
        }
    }
}
```

## Audit log usage

``` 
{
  "QueryFilter" :
    {
      "expression" : {
          "operator" : "and",
          "nestedExpression" : [
            {
              "argument" : ["admin@boomi.com"],
              "operator" : "EQUALS",
              "property" : "userId"
            },
            {
              "argument" : ["api-gateway_settings"],
              "operator" : "EQUALS",
              "property" : "type"
            },          
            {
              "argument" : ["2021-03-28T00:00:00Z","2021-03-29T23:59:59Z"],
              "operator":"BETWEEN",
              "property":"date"
            }
          ]
        }
    }
}
```