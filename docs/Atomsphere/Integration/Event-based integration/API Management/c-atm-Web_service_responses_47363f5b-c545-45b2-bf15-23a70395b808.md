# Web service responses

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-57FE07F1-C45D-49B2-A1E5-13C9AD71E0FD"/>
</head>

The Return Documents step controls the return of documents to its source calling point. During a process execution, the step gathers all documents that are intended to reach this step and then sends the documents back to the client application/web server conversation that was opened during a request.

:::note

Review the Return Documents step topic to learn about its features and intended nature.

:::

In order to send a synchronous response back to the client application in addition to a standard "200 OK" from the web server, you must understand the usage of the Return Documents step. The step supports Web Services Server operation requests made through both URL path definitions and all output types with the exception of "None".

In most cases XML is the expected document format that reaches the Return Documents step, especially if you are responding to a SOAP request. It is important that the documents that reach this step match the output type defined in the Web Services Server operation. If no documents reach the Return Documents step, then the message response back to the client application are blank.

For example: You want to publish an API process that listens for SOAP requests to update a local database with customer information based on a company name. Upon successful update of the database records, you would like the updated customer internal database IDs and a timestamp returned. Ultimately, you would want to translate any database queries made after the update into XML documents and forward those documents to the Return Documents step.

If you would like to implement paging to limit the amount of response data sent back to the client application, this is controlled at the web-server level. Refer to the Web Services Server Operation Configuration topic to understand how these request/response documents are managed.

## Documents returned

The Maximum Number of Documents Returned field in the Web Services Server operation contains a numeric value to specify the maximum number of documents to return in a single XML object list response or JSON array response. This value becomes the default value of the Maximum Number of Documents Returned field in the REST, SOAP, and OData endpoints in the API Service component. The default value for the number of documents returned is 100. You cannot specify a Maximum Number of Documents Returned that is greater than the default of 100.

For example, consider an execution scenario in which you want to send 10 or more contacts in a single createContact request to build entries in a local database. Upon proper insert of these records, you want the process to return an XML response that includes Name, DB Key and DB Create Date. By default, the Return Documents step gathers all 10 of these XML response documents and passes them back to the Atom’s web server so they can be built into a list and returned to the client application within one synchronous conversation.

Depending on the size of the client request, you may want to limit the number of responses returned during a single session. The Maximum Number of Documents Returned field puts a cap on the number of response records.. When the number of records exceeds the number of documents returned, results are paged: A randomly generated token, moreDataToken, is returned with each page of results, and that token is used to post a “MoreResults” request — that is, a request the next page — at the web server level. If each XML object is very large, you may want to lower the limit in order to reduce memory usage on the client and/or server hosting the integration.

If a moreDataToken is returned and Multiple XML Objects is defined as the Output Type, the WSDL and XSD object schemas are updated when the process is redeployed to the Atom. The updated schemas each include a new “MoreResults” request type.

In the WSDL this is the element name format for the new request type:

```
<wss: + *Action* + *Object Name* + MoreResults>
```

For example: `<wss:createContactMoreResults>`.

Consider, for example, a client application that sends 150 objects within one request and the Maximum Number of Documents Returned in the operation is set to 50:

1.  The Atom processes 150 documents successfully.

2.  150 XML response documents are passed to the Return Documents step.

3.  All 150 documents are passed to the Atom’s web server.

4.  The Atom’s web server sends back the first page of results — 50 objects in one ResponseList back to the client application, which includes a moreDataToken.

5.  The client application sends a “MoreResults” request to the Atom’s web server.

6.  The Atom’s web server returns the next page of results — 50 more objects in one response, along with a new moreDataToken.

7.  The client application sends another “MoreResults” request to the Atom’s web server.

8.  The Atom’s web server returns the last page of results — 50 objects in a final response with no moreDataToken — because there is no more data to return for this original request.


When a moreDataToken is returned, the token is an attribute of the container element for the returned object list.

-   SOAP example:

    ```
    <wss:ContactResponseList moreDataToken="01234567...def">
    ```

-   REST example:

    ```
    <wss:ContactResponseList xmlns:wss="http://www.boomi.com/connector/wss" moreDataToken="01234567...def">
    ```


In a REST response, the moreDataToken also appears in the HTTP response header’s Link field. In fact, that field contains the full URL to which to direct the “MoreResults” request. In that URL, moreDataToken is a query parameter. For example:

```
Link:<https://c01-usa-east-integrate.boomi.com/ws/rest/<resource\_path\>?moreDataToken=01234567...def>; rel="next"
```

There are differences between SOAP and REST in the manner in which a “MoreResults” request is specified.

-   In a SOAP “MoreResults” request, the moreDataToken is specified in a child element of the request type element from the WSDL.

    For example:

    ```java
    <soapenv:Envelope xmlns:soapenv="http:.xmlsoap.org/soap/envelope/" xmlns:wss="http://www.boomi.com/connector/wss">
       <soapenv:Header/>
       <soapenv:Body>
          <wss:createContactMoreResults>
             <wss:moreDataToken>01234567...def</wss:moreDataToken>
          </wss:createContactMoreResults>
       </soapenv:Body>
    </soapenv:Envelope>
    ```

-   In a REST “MoreResults” request, recall that the moreDataToken is specified as a query parameter in the REST endpoint URL.

    For example:

    ```
    https://c01-usa-east-integrate.boomi.com/ws/rest/<resource\_path\>?moreDataToken=01234567...def
    ```
