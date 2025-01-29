# Atom forward headers

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-9f0fa058-ddb6-44a5-a49e-035f3e255657"/>
</head>

Embedded Java technology is capable of examining forwarded headers and extracting external host information for response/callback purposes. Specifying one of these forward headers substitutes the load balancer’s host name for the node’s host name in the request.

:::note Important

You must select **Examine Forwarded Headers** and your Atom cannot have a custom **External Host** specified under Advanced Settings by the Atom's owner. Both of these are set on the Shared Web Server panel.

:::

If **Examine Forwarded Headers** is not selected or a custom **External Host** is specified, we use the default values from the incoming request and ignore the headers specified.

The following forward headers can be interpreted when set on a request sent to the Atom:

| Forward Header | Description  |
| --- | --- |
| `X-Forwarded-Context` | The context path of the request, starting after the host name and port number to the end of the path defined in the environment and API or the path override. |
| `X-Forwarded-For` | The list of IP addresses making the request. |
| `X-Forwarded-Host` | The host name and optional port number of the forwarded request. If a port number is specified, it takes precedence over the value specified in the `X-Forwarded-Port` header's value. For example, `api.company.com` or `api.company.com:8080`. |
| `X-Forwarded-Port` | The port number used by the forwarded request. If a port number is specified in `X-Forwarded-Host`, that port number takes precedence and this value is ignored. |
| `X-Forwarded-Proto` | The scheme of the forwarded request, http or https. |
| `X-Forwarded-Server` | The forwarding server's host name, without the port number. |
| `X-Max-Wait` | A timeout value, in milliseconds, for the Web Services Server listener process. If the request times out, the HTTP response code 202 is returned along with the following two response headers: <ul><li>`X-Execution-Id` - The ID of the execution.</li><li>`X-Execution-Status-Link` - The URL from which the execution status can be retrieved.</li></ul>  |
| `X-Request-Uri` | The full-fledged path of the forwarded request. This is an optional request header. If load balancers are used to route requests across multiple Atoms and your API produces paginated responses (the response is split across multiple pages), you need to provide this header. <br></br> For example, if the request’s context-path is `example/v1` but the request is to the operation function on that API, then `X-Request-Uri` header’s value in the request should be set as https://api.company.com/example/v1/function. |
