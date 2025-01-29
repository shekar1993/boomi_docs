# Configuration of CORS rules for web service listen connections

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-a6432c48-9fd6-4e55-863b-3fb319ddfebd"/>
</head>

The Web Services Server connector’s support for the W3C CORS (Cross-Origin Resource Sharing) protocol lets web service APIs circumvent the browser’s same origin policy. By circumventing the browser’s same origin policy, API users are enabled to implement cross-server JavaScript-powered user interaction.

[CORS](http://www.w3.org/TR/cors/), using `Access-Control-...` HTTP headers, essentially allows JavaScript from one origin \(server\) to request permission from another origin \(server\) to perform more advanced API calls. These calls can include HTTP methods other than GET/POST, complex body data or headers. These calls may use existing authentication information — that is, cookies. CORS can be used with REST/simple HTTP APIs.

To use CORS with your web service APIs, you must configure the Atom’s shared web server to handle incoming CORS requests by specifying origin server-specific matching rules. These rules specify the manner in which target API requests specified in CORS requests are matched to control cross-server access. The CORS Configuration tab in the Shared Web Server panel is used to specify CORS rules. This tab is present only if API Type is set to Advanced on the General tab.

A CORS rule for a given origin specifies the following matching criteria for requests from that origin:

- Allowed HTTP methods

- Allowed request headers, in addition to the defaults

In Integration, a CORS rule also specifies the following requirements for requests from the origin:

- Allowed protocols — HTTP and/or HTTPS.

- Allowed originating ports

:::note

If you are using `localhost` for the domain in the Shared Web Server CORS configuration, you do not need to include the protocol. For example, use `localhost` instead of "[http://localhost](http://localhost/) " in the domain field for the CORS settings.

:::

A CORS rule in further specifies the return to the origin of the following types of control information in responses to requests:

- Exposed response headers, in addition to the defaults

- Authentication credentials — allowed or not

- Caching of request metadata — allowed or not, and if allowed, the maximum duration

Each tenant account on an Atom Cloud can define its own CORS rules.

## CORS request types

There are two types of CORS requests — preflight and normal.

- preflight

    This type of request is used to enable a browser executing JavaScript calling a web service to determine whether the type of API request specified in the JavaScript matches a type of API request the web server accepts from the origin server.

    Preflight requests must conform with the following requirements:

    - Specify the HTTP OPTIONS method.

    - Include the `Origin` header.

    - Specify the HTTP method for the target API request as the `Access-Control-Request-Method` header value.

    - Specify an HTTP request header\(s\) for the target API request as the `Access-Control-Request-Headers` header value.

    Following is an example of an excerpt from a preflight request:

    ```
    OPTIONS /cors HTTP/1.1
    Origin: https://mydomain.com
    Access-Control-Request-Method: PUT
    Access-Control-Request-Headers: X-Custom-Header
    
    ```

    - If the target API request is of a type the web server accepts from the origin server, an example of an excerpt from the response to the above request would be as follows:

        ```
        Access-Control-Allow-Origin: https://mydomain.com
        Access-Control-Allow-Methods: GET, POST, PUT, DELETE
        Access-Control-Allow-Headers: X-Custom-Header, Some-Other-Header
        
        ```

    - If the target API request is not of a type the web server accepts from the origin server, the response status code would also be 200, but the `Access-Control-Allow-...` headers would be omitted.

    Preflight requests are not authenticated. However, a preflight request to a shared web server in an Atom Cloud must identify the requesting user using a `boomi_auth` URL parameter.

- normal

    If the web server’s response to a preflight request indicates the web server accepts the specified API request from the specified origin, the browser then submits the normal request, which consists of an API request of the type specified as the target in the preflight request and the same `Origin` header specified in the preflight request.

    Following is an example of an excerpt from a normal request:

    ```
    Origin: https://mydomain.com
    ```

    - If the web server accepts requests from the origin server, an example of an excerpt from the response to the above request would be as follows:

        ```
        Access-Control-Allow-Origin: https://mydomain.com
        Access-Control-Allow-Credentials: true
        Access-Control-Expose-Headers: Foo,Bar
        
        ```

    - If the web server does not accept requests from the origin server, the response status code would also be 200, but the `Access-Control-...` headers would be omitted.

    Normal requests must satisfy the shared web server’s authentication requirement, if any.

:::note

Preflight requests are not required for cross-origin requests that can be made from a browser without using CORS, such as an HTML form POST or a GET request using JSON-P.

:::

## CORS tutorial link

For information about implementing a web service API with CORS support to enable cross-server JavaScript-powered user interaction, see this [CORS tutorial at HTML5Rocks](http://www.html5rocks.com/en/tutorials/cors/).
