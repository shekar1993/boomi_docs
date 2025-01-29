# IP Filtering Policy

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-bfa5ee23-3979-4a29-a78d-8f92485c9172"/>
</head>

The IP Filtering policy lets you control access to your API via IP addresses. You can allow or deny a specific IP address or a range of IPs by using CIDR.

The allow list mode excludes all IPs excepts those with an IP that is part of the allow list. The deny list mode allows all IPs except those with an IP that is part of the deny list.

If an IP is part of the deny list and the allow list, the policy rejects the request. 

When using domain name, the Gateway performs DNS Lookup with the DNS server configured on the host by default. To use a specific DNS server, you can configure it at the policy level by adding the following custom container properties to the gateway. The gateway must be restarted for this to be applied. 

`com.boomi.container.apigateway.policy.ipfiltering.dns.host = 8.8.8.8`
`com.boomi.container.apigateway.policy.ipfiltering.dns.port = 53`

## Timing
| On Request | On Response |
|---|---|
|  X |   | 

## Configuration

| Property  |Required   |Description   | Type  | Default |
|---|---|---|---|---|
|  `matchAllFromXForwardedFor` |  no |If set to true, each IP from the `X-Forwarded-For` header parameter is parsed. Note: When `matchAllFromXForwardedFor` is set to false, then it is possible that an API request from a non-allowed IP address can be accepted based on the `X-Forwarded-For` header. The first item in the `X-Forwarded-For` list is treated as the client IP address, so if that IP is also defined in the allow list, the request will be allowed. If it is not the first item in the list, a `403` is returned.  |boolean | false
|  `whitelistIps` (allow list) |  no | List of allowed IPs with or without CIDR notation.  |string list | empty
|  `blacklistIps` (deny list) | no  | List of denied IPs with or without CIDR notation.  | string list| empty |

## Example
```
"ip-filtering": {
  "matchAllFromXForwardedFor": true,
  "whitelistIps": [
    "10.0.0.1",
    "10.0.0.2/10"
  ],
  "blacklistIps": []
}
```
## HTTP Status Code

| Code  |Message   |   
|---|---|
|  403 |  Your IP (0.0.0.0) or proxies where your request pass through is not allowed to reach this resource |

