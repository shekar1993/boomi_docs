# API Gateway forward headers 

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-f7a85f62-c605-4256-bdba-b68f646616b5"/>
</head>


When you call an API that is behind an API Gateway, the API Gateway automatically adds or passes forward headers with specific values to the API proxy or API component on your Runtime.

  :::note

 While Gateway forward headers are not case-sensitive, [dynamic document properties](docs/Atomsphere/Integration/Process%20building/c-atm-Dynamic_Document_Properties_89d2f7a0-a490-4f35-a8b1-96af364f0211.md) are case-sensitive and require the request headers to match exactly.  
 
 Because of this, we recommend that you add the `com.boomi.container.sharedServer.http.header.includelowercase` [container property](docs/Atomsphere/Integration/Integration%20management/r-atm-Properties_panel_Custom_tab_5fa074ca-cada-4746-946d-42b20c67cf74.md) set to `true` and only use lowercase document properties to avoid issues with case sensitivity. See [this article](https://community.boomi.com/s/article/passing-header-values-through-listener-process) for additional details.

  :::

The following forward headers are sent upon request by the API:


**X-Forwarded-Authorization**  
The authorization specified is set for the request. Without this forward header, the authorization set on the API Gateway is used.

**X-Forwarded-Context**  
The API Gateway's view of the context path of the request, starting after the host name and port number to the end of the path defined in the environment and API or the path override.

**X-Forwarded-For**    
The complete list of clients that made the request is appended in the header, separated by commas \(,\).

**X-Forwarded-Host**  
The host name and port number of the API Gateway. For example, `api.company.com:8080`. This value is only set if it is not part of the initial request.

**X-Forwarded-Port**  
The API Gateway's port number. This value is only set if it is not part of the initial request.

**X-Forwarded-Proto**  
The scheme of the request, http or https. This value is only set if it is not part of the initial request.

**X-Real-Ip**  
The requesting client IP address, as defined by the request to the API Gateway. In many cases, this is a remapped IP address through network address translation \(NAT\).

**X-Request-URI**  
The full path of the entire request.
