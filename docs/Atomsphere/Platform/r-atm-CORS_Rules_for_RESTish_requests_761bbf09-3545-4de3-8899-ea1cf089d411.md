# CORS rules for RESTish requests

<head>
  <meta name="guidename" content="Platform"/>
  <meta name="context" content="GUID-761bbf09-3545-4de3-8899-ea1cf089d411"/>
</head>

The AtomSphere API and Partner API support the W3C Cross-Origin Resource Sharing \(CORS\) protocol.

Support for the [CORS](http://www.w3.org/TR/cors/) protocol enables the AtomSphere APIs to circumvent a browser’s same-origin policy, thereby enabling you to implement cross-server, JavaScript-powered API requests.

By using `Access-Control-...` HTTP headers, CORS essentially allows JavaScript from one origin \(server\) to request permission from another origin \(server\) to make RESTish API requests.

To enable CORS requests under a account, you must configure CORS request matching rules for the account on the CORS page \(**Settings** \> **Account Information and Setup** \> **Boomi AtomSphere API** \> **CORS**\). Each rule specifies:

- An origin for matching cross-server RESTish API requests under the account. The matching criteria specified for an origin are protocol \(HTTP or HTTPS\), originating domain, and originating port. A matching request is one that matches on all criteria.

- The allowed HTTP methods — GET, POST, DELETE — for matched requests.
## CORS request types

There are two types of CORS requests — preflight and normal.

- Preflight

    A preflight request is used by a browser running JavaScript to determine whether they have permission to perform a given action. The browser sends an API request to determine whether the HTTP method for that type of request is accepted under that account from the origin server.

    Preflight requests must conform with the following requirements:

    - Specify the HTTP OPTIONS method.

    - Include the `Origin` header.

    - Specify the HTTP method for the API request as the `Access-Control-Request-Method` header value.

    Preflight requests are not authenticated. Preflight responses may be cached for up to one hour \(3,600 seconds\), as indicated by the `Access-Control-Max-Age` header value in the response.

    The following is an example of an excerpt from a preflight request:

    ```
    OPTIONS /api/rest/v1/account-123456/Atom/3456789a-bcde-f012-3456-789abcdef012 HTTP/1.1
    Origin: https://mydomain.com
    Access-Control-Request-Method: DELETE
    Access-Control-Request-Headers: accept, authorization, content-type
    
    ```

    If the target API request is of a type allowed under the requesting account from the origin server, an excerpt from the response would be as follows:

    ```
    Access-Control-Allow-Credentials: true
    Access-Control-Allow-Headers: cache-control,content-type,expires,last-modified,accept,content-language,authorization,pragma
    Access-Control-Allow-Origin: https://mydomain.com
    Access-Control-Allow-Methods: GET, POST, DELETE
    Access-Control-Max-Age: 3600
    ```

    If the target API request is *not* of a type allowed under the requesting account from the origin server, the response status code would be 401 Unauthorized.

    :::note
    
    Preflight requests are not required for cross-origin requests that can be made from a browser without using CORS, such as an HTML form POST.

    :::

- Normal

    If the response to a preflight request is positive — the specified type of API request from the specified origin is allowed under the requesting account — the browser then submits the normal request. Normal requests consist of:

    - an API request of the type specified as the target in the preflight request

    - the same account and `Origin` header specified in the preflight request

    Normal requests require authentication.

    The following is an example of an excerpt from a normal request:

    ```
    DELETE /api/rest/v1/account-123456/Atom/3456789a-bcde-f012-3456-789abcdef012 HTTP/1.1
    Origin: https://mydomain.com
    ```

    An example of a positive response to the normal request would be as follows:

    ```
    Access-Control-Allow-Origin: https://mydomain.com
    Access-Control-Allow-Credentials: true
    
    ```

    If the specified type of API request from the specified origin is *not* allowed under the requesting account, the response status code would be 200 and the `Access-Control-...` headers would be omitted.



For information about using CORS to implement cross-server, JavaScript-powered user interaction, see the [CORS tutorial at HTML5Rocks](http://www.html5rocks.com/en/tutorials/cors/).
