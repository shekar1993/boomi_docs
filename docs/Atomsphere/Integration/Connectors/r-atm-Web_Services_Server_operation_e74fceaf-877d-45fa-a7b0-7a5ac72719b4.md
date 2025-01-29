# Web Services Server operation 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-e74fceaf-877d-45fa-a7b0-7a5ac72719b4"/>
</head>


The Web Services Server operation defines how to accept requests that are processed as standard documents.

Use the Return Documents step as a process path endpoint to enable synchronous responses to be returned to the external calling or client application.

The Web Services Server operation supports only the Listen action.

## Options tab 

There are two configurable URL paths per Web Services Server operation. Both are operational \(input and output type definition permitting\) when the process is deployed for listening. BASIC authentication is required for access to Atoms deployed in Boomi Atom Clouds and Test Atom Clouds.

The input and output types control the request and response data requirements for the API process. These settings affect the availability of the REST or SOAP URL. Not all settings facilitate a REST or SOAP interaction from end to end. In some cases, specific field or XML or JSON profile definitions are required.


:::note

You can configure Custom REST and SOAP API endpoints in deployable API Service components. Each such endpoint is linked to a process that uses a Web Services Server connector operation. For a given endpoint, the operation’s settings are the default but you can override any or all settings.

:::

To specify REST API endpoints, called routes, you must use API Service components. This is because the URL paths and HTTP headers for an API’s REST routes are configured in the service’s component.



**Simple URL Path** - 
Endpoint for XML or JSON requests and posted data that is not in a SOAP or structured format. The path is appended with the **Operation Type** in lowercase plus the **Object**.

For example, this simple URL path points to the Boomi USA East Integration Cloud: `https://c01-usa-east-integrate.boomi.com/ws/simple/createContact`

**Note:** Simple HTTP endpoints cannot be defined from scratch in API Service components. This limitation exists because you can define a REST route in an API Service component for any request type for which you previously used simple HTTP endpoints.

However, if you add a Web Services Server listener process to an API Service component and its connector operation is configured with a Simple URL Path, both a SOAP endpoint and a simple HTTP endpoint are generated in the API Service component. The URL path for the simple HTTP endpoint is valid when the component is deployed, as long as you do not set *any* overrides in the SOAP endpoint. The simple HTTP endpoint has the URL path `/ws/simple/<API Service component Base URL>/<operation name>`, where operation name is the same as the operation name for the generated SOAP endpoint.

**SOAP URL Path** - 
Endpoint for SOAP messages. This URL is "Unavailable" in certain operation cases, depending on **Input Type** and **Output Type** settings. The path does not change when the **Operation Type** and **Object** change because the object and operation type are specified in the SOAP envelope. The initial URL with host name and port specifications is controlled at the Atom level and is not configurable in a connection component within the process.

For example, this SOAP URL path points to a local Atom: `http://myserver.mycompany.com:9090/ws/soap`

**Operation Type** - 
Allows you to define a specific action requirement. It is used purely for design purposes to control steps that you would like to execute in the linked process. For example, if you want to build an API process that selects records from a database, you could attach a Query operation type because the resulting process is performing a database query. The type also controls the requirements for the URL and SOAP requests. See the information below to understand how the URL endpoints are affected. The available operation types are: Get, Query, Create, Update, Upsert, Delete and Execute.

**Object** - 
Sets an arbitrary value that defines the data you are listening for. If you are designing API processes to interact with unique data or object types, consider labeling the operation object with the same data type name. For example, if you want to update customer information in a database solution, define **Operation Type** as Update and **Object** as Customer. The object name also controls the requirements for the URL and SOAP requests.

Ensure that you specify a valuable object name in all of your operations. You can pair this object name with other operation action types in other API processes. It also helps to organize your WSDL structure and ensure that all requests adhere to a specific XML format.

**Input Type** - 

-   **None** — Indicates that there is no input data for the linked process. This input scenario aligns with the process triggering scenario defined in the API Use Cases topic. This type supports REST, SOAP and simple HTTP URL paths. Posting to the REST or simple HTTP URL or sending an empty SOAP message for the operation type or object triggers the process to run. Basically, it is like sending a single empty document through the process flow.
-   **Single Data** — Indicates that a single document can be posted to the Simple URL path for each client request. *Any data type* can be posted to the deployed URL for this setting. The SOAP URL path is unavailable in this case because it is assumed the input is not in XML format \(Single/Multiple XML Object\). This setting is useful for processes where you would like to enable simple HTTP listening.

-   **Single XML Object** — Indicates that the expected input is in an XML format and is an individual request made from the client application. This type supports REST, SOAP and simple HTTP URL paths. The single option does not take advantage of the paging capabilities implied in a multiple object scenario. However, multiple records or XML loops for an object can be included in a single request. \(Examples: Customer with multiple contacts, file listing with multiple files.\)

    The SOAP URL path is unavailable only when no request XML profile is defined or there is an incompatible output type. It is important to define the request XML profile for the SOAP case so the required field definitions are apparent, and the WSDL is properly constructed and published upon deployment.

-   **Multiple XML Objects** — Indicates that the expected input is in an XML format and that multiple XML objects are included in a single “list”. This type supports REST, SOAP and simple HTTP URL paths. The operation breaks down each object in the list and sends it through the process as an individual XML document.

-   **Single JSON Object** — Indicates that the expected input is in JSON format and is an individual request made from the client application. This type supports a REST or simple HTTP URL path. It does *not* support SOAP. The single option does not take advantage of the paging capabilities implied in a multiple object scenario. However, multiple records for an object can be included in a single request.

-   **Multiple JSON Objects** — Indicates that the expected input is in JSON format and that multiple JSON objects are included. This type supports a REST or simple HTTP URL path. It does *not* support SOAP. The operation breaks down each object in the array and sends it through the process as an individual JSON document.

-   **Multipart/form-data** — Indicates that the expected input is in multipart/form-data MIME format.

    Selecting this option automatically adds a "MIME Document" MIME property to the document. The following list details specific MIME headers that the HTTP response filters for and includes in the resulting MIME document. Note that the HTTP response ignores any headers that are not currently specified in the list.

    -   MIME-Version
    -   Content-ID
    -   Content-Description
    -   Content-Transfer-Encoding
    -   Content-Type
    -   Content-Base
    -   Content-Location
    -   Content-features
    -   Content-Disposition
    -   Content-Language
    -   Content-Alternative
    -   Content-MD5
    -   Content-Duration

**Request Profile** - 
\(Available if Input Type is Single XML Object, Multiple XML Objects, Single JSON Object or Multiple JSON Objects.\) The XML or JSON profile definition that represents the XML or JSON structure that is being sent by the connector.

**Output Type** - 
All output type options, except for None, imply that the operation is constructed to send back a synchronous response to the client application. Review the Building API Processes topic linked below to understand how this output data is gathered within a process through the Return Documents step.

-   **None** — Indicates that there is no output data for the linked process. Both Simple and SOAP messaging support this output type and simply do not send any *structured* data back to the client application. The client call returns *before* the process has actually finished running, making it a true, asynchronous conversation.

-   **Single Data** — Indicates that a single document is returned synchronously for each response to the client. The SOAP URL path is unavailable for this case because it is assumed the output is not in XML format \(Single/Multiple XML Object\). This setting is useful for processes that are enabled for HTTP listening and require simple, valuable responses sent back to the client. For example, a process could be enabled to listen for specific file types so they could be routed to a destination directory on a local network. Single Data responses could be returned to the client, indicating that each file was stored successfully at a specific time and location. In this case, define the *Result Content Type* to specify the proper response format.

-   **Single XML Object** — Indicates that the expected output is in an XML format and is an individual response sent back to the client application. This type supports REST, SOAP and simple HTTP URL paths. The single option does not take advantage of the paging capabilities implied in a Multiple Object scenario, but multiple records or XML loops for an object can be included in a single response. The SOAP URL path is unavailable only when no request or response XML profile is defined or there is an incompatible input type. It is important to define the response XML profile for the SOAP case so the required field definitions are apparent, and the WSDL is properly constructed and published upon deployment.

-   **Multiple XML Objects** — Indicates that the expected output is in an XML format and that multiple XML objects are included in a single “list”. This type supports REST, SOAP and simple HTTP URL paths. Used in conjunction with the Page Size field.

-   **Single JSON Object** — Indicates that the expected output is in JSON format and is an individual response sent back to the client application. This type supports a REST or simple HTTP URL path. It does *not* support SOAP. The single option does not take advantage of the paging capabilities implied in a multiple object scenario, but multiple records for an object can be included in a single response.

-   **Multiple JSON Objects** — Indicates that the expected output is in JSON format and that multiple JSON objects are output as an array, enclosed in square brackets \[ \]. This type supports a REST or simple HTTP URL path. It does *not* support SOAP. Used in conjunction with the Page Size field.

-   **Multipart/form-data** — Indicates that the expected output is in multipart/form-data MIME format. Selecting the Multipart/form-data output type results in a perfectly formed MIME document which consists of both the payload and HTTP headers, and automatically adds a "MIME Document" MIME property to the ouput document. Use this option when you want to perform actions like mapping multipart/form data MIME to JSON in the Data Process step.


**Response Profile** - 
\(Available if **Output Type** is Single XML Object, Multiple XML Objects, Single JSON Object or Multiple JSON Objects\) The XML or JSON profile definition that represents the XML or JSON structure that is being received by the connector.

**Result Content Type** - 
\(Visible if **Output Type** is anything *other than* None; enabled *only* if **Output Type** is Single Data\) The [Internet media type](http://en.wikipedia.org/wiki/Internet_media_type) of the output data. Either:

-   In the list, select one of the following media types:

    -   text/plain

    -   text/html

    -   text/xml

    -   application/binary

    -   application/edifact

    -   application/edi-x12

    -   application/xml — automatically selected if **Output Type** is Single XML Object or Multiple XML Objects.

    -   application/json — automatically selected if **Output Type** is Single JSON Object or Multiple JSON Objects.

    or

-   Turn on the check box to the right of the adjacent field, and in the field type the media type \(replacing “Enter your own”\). Use this method if none of the selections in the list are appropriate or you need to specify parameters along with the type and subtype.


**Maximum Number of Documents Returned** - 
\(Available if **Output Type** is Multiple XML Objects or Multiple JSON Objects.\) If blank, the operation defaults to the *maximum* value of 100.

-   **XML** — Enter a numeric value to specify the maximum number of documents to return in a single object list response.

-   **JSON** — Enter a numeric value to specify the maximum number of documents to return in a single array response.


**Attachment Cache** - 
Used when receiving SOAP messages with MIME attachments. This field specifies the document cache into which the MIME attachments are saved. The document cache component must contain a single index containing the following key: a dynamic document property named `WSS_ROOT_DOCUMENT_ID`.

## Archiving tab

See the topic [Connector operation’s Archiving tab](../Process%20building/r-atm-Connector_operations_Archiving_tab_061fbf70-1034-4bf3-b795-e952f9338dbe.md) for more information.

## Tracking tab

See the topic [Connector operation’s Tracking tab](../Process%20building/r-atm-Connector_operations_Tracking_tab_8a03f547-738a-448c-bb0f-594bad806cfe.md) for more information.