# API requests

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-1478ee20-a475-43c9-859e-e1f6adfdcc04"/>
</head>


Client applications trigger requests to the APIs enabled in integration processes. These applications must initiate the API conversation by sending a REST, SOAP, OData, or simple HTTP request to a Atom. REST requests are supported only for APIs defined using API Service components.

## Client application requests

All REST/SOAP/OData/simple HTTP requests must be sent to a endpoint URL. This full URL path is managed in two or three places by the API process developer depending on whether an API Service component is used to define endpoints:

-   Shared Web Server panel (**Manage** > **Atom Management** > **Settings & Configuration** > **Shared Web Server**) — Controls the main host name, port and security settings for all Atom messaging.

-   Web Services Server connector operation **Options** tab

    -   If an API Service component is not used to define endpoints, this tab controls the end path for specific data types and operation configurations.

    -   If an API Service component is used, this tab defines defaults for specific object types and operation configurations.

-   API Service component **REST** tab, **SOAP** tab, and/or **OData** tab — Controls the end path for specific object types and operation configurations. Overrides can be specified here for the defaults defined in the Web Services Server connector operation.


    :::note

    If you are exposing an endpoint to service SOAP requests, but you are not using an API Service component, ensure that the endpoint URL ends with `/ws/soap`. If you are using an API Service component, depending on the SOAP version supported, you may need to include either `/ws/soap` (for SOAP v1.1) or `/ws/soap12` (for SOAP v1.2) in the endpoint URL.

    :::

Boomi Atom Clouds are currently configured to limit each account to five (5) requests per second per node. On a local Atom, the limit is defined by the resources available to the Atom. This limit applies to all simple HTTP requests, not only to low latency requests.

All input types are managed within the Web Service Server operation built by the integration developer or overridden by the API Service component configuration. The input type is limited to one of the following options:

-   None

-   Single Data

-   Single XML Object

-   Multiple XML Objects

-   Single JSON Object

-   Multiple JSON Objects


## Client application responses

All REST/SOAP/OData/simple HTTP responses can be returned synchronously or asynchronously to the client application. Synchronous responses are enabled through use of the Return Documents step built into the API process. If this functionality is disabled, then the Atom web server simply returns "200 OK" as a response receipt when a successful request is made. The supported response/output types are the same as the input types defined above, and an API process can also be developed to support response paging.

## URL and HTTP header matching for routing REST requests

The Atom applies URL and HTTP header matching criteria for the purpose of routing REST requests.

-   Base URL matching

    The Atom first evaluates the base URL specified in a REST request. The request is routed to the API Service component whose configured base URL is the longest match.

    For example, consider an Atom with these deployed API Service components:

| **API Service component name** | **Base URL**  |
|--------------------------------|---------------|
| Service A                      | /             |
| Service B                      | /test         |
| Service C                      | /test/account |

Requests specifying these base URLs would be routed as follows:

| Requested base URL  | Routed to |
|---------------------|-----------|
|                     |           |
| /                   | Service A |
| /other/path         | Service A |
| /test               | Service B |
| /test/account       | Service C |
| /test/account/other | Service C |
| /test/other         | Service B |

As demonstrated by the last example, an API Service component deployed with `/` as its configured base URL matches *any* URL path that does not match any other base URL path.

-   URL path matching

    After matching a REST request to an API Service component, the Atom then evaluates the requested URL path and determines the most specific matching route. URL path matching is somewhat more complicated than base URL matching in that for a given object and HTTP method there can be multiple REST routes, each with a different path. The Atom considers both the length of the path and matching static path components.

    For example, consider an API Service component in which these routes are defined for the same object:

    -   `GET /`

    -   `GET /{id}`

    -   `GET /{id}/{fieldName}`

    -   `GET /{id}/metadata`

    Requests specifying these paths would be routed as follows:

| Requested URL path | Routed to             |
|--------------------|-----------------------|
|                    |                       |
| `/`                  | `GET /`                 |
| `/1234`              | `GET /{id}`             |
| `/1234/name`         | `GET /{id}/{fieldName}` |
| `/1234/name/other`   | `GET /{id}/{fieldName}` |
| `/1234/metadata`    | `GET /{id}/metadata`    |

As demonstrated by the last example, static path components are more specific matches than parameter values at the same depth.

-   HTTP header matching

    The Atom’s URL path matching processing also includes HTTP header matching. The request’s HTTP headers are matched with standard HTTP and “custom” headers defined for operations having the longest, best matching URL path. You can, for example, for a given type of operation configure one route to match the header `Content-Type: xml` and another route to match the header `Content-Type: json`. The headers in a request are evaluated for routing purposes in the same manner as static path components.


## Request parameters

URL path and HTTP query parameter values can be passed to the web service listener process execution.

-   The values of URL path parameters in REST requests are available as dynamic process properties, each with the prefix `param_`. Parameters are delimited by braces `{}` in the URL Path for an operation specified for a REST endpoint in an API Service component. For example, the parameter id in the URL Path, specified as `{id}`, results in the dynamic process property `param_id`.

-   The values of HTTP query parameters are available as dynamic process properties with the prefix `query_` added to each key. For example, the query string `?foo=blah&bar=buzz` results in two dynamic process properties, `query_foo` and `query_bar`.


## Input headers

Depending on the shared web server configuration and type of operation, the values of certain “special” HTTP headers and “custom” headers in REST/SOAP/OData/simple HTTP requests may be available to the web service listener process execution as dynamic document properties. This may occur only for requests for which an input type other than None is configured in the Web Services Server operation. The headers whose values are passed to the execution are those *not* designated as protected in the shared web server settings.

-   The “special” HTTP headers are

| Request Headers | Entity Headers                                                |
|-----------------|---------------------------------------------------------------|
|                 |                                                               |
| Accept          | Content-Encoding — the compression method applied to the data |
| Accept-Charset  | Content-Language                                              |
| Accept-Encoding | Content-MD5                                                   |
| Accept-Language | Content-Type — the MIME type of any input data, if given      |

-   The prefix `X-WSS-` is used to designate “custom” headers — for example `X-WSS-Some-Info`.


Dynamic document properties sourced as header values have the prefix `inheader_` — for example, `inheader_Content-Type`, `inheader_X-WSS-Some-Info`.

## Request metadata

For REST and simple HTTP requests, metadata is passed to the web service listener process execution:

-   The HTTP method — for example, GET, POST — is available as the dynamic process property `inmethod`.

-   The portion of the endpoint URL beginning with the API’s base URL, is available as the dynamic process property `inpath`.

-   The ID of the authenticating account for the request is available as the dynamic process property `inuser`.


## Response status codes and output headers

For REST and simple HTTP requests with single output document responses:

-   The dynamic document property `outstatuscode` on the result document overrides the HTTP response status code returned to the client.

-   Any dynamic document properties with the prefix `outheader_` on the result document are set as headers on the HTTP response returned to the client. For example:

    -   `outheader_Content-Type` can be used to set the MIME type of the return data if a custom type is needed.

    -   `outheader_Some-Data` results in `Some-Data`.

## Disabling low latency Process Mode for single executions

For a process executed with its Process Mode option set to Low Latency, the presence in a web server request of the query parameter `_boomi_debug=true` or the HTTP header `X-Boomi-Debug` with a value of `true` has the effect of changing the Process Mode to General for the current process execution. This parameter can be useful for debugging purposes. 