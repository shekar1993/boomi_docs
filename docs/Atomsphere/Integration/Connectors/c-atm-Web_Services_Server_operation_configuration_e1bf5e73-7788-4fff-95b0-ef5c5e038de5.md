# Web Services Server operation configuration 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-e1bf5e73-7788-4fff-95b0-ef5c5e038de5"/>
</head>


To build and publish an API powered by , you need to understand the basics of our Web Services Server connector and how to build an operation.

The Web Services Server operation allows you to define a single object and operation type that controls:

-   The required structure of the request and response data

-   The endpoint URL for all REST/SOAP/simple HTTP requests


Here are the basic steps to configure a Web Services Server operation:

1.  Choose an operation type and enter an object name.

2.  Choose Single XML Object or Single JSON Object as input. \(Note SOAP endpoints cannot accept JSON input data.\)

3.  Choose Single XML Object or Single JSON Object as output. \(Note that SOAP endpoints cannot return JSON data.\)

4.  Ignore profiles for the moment.

5.  The Result Content Type is set to application/XML or application/JSON.

6.  Save the simple URL path for future use.


>
:::note

If you are using API Management, you can define REST and SOAP API endpoints in API Service components. An endpoint derives its default configuration from the Web Services Server connector operation used in the process to which the endpoint is linked, but you can define overrides, including an override for the endpoint URL. This lets you expose different sets of endpoints for use by different customers or partners. For more information see the topic about Designing APIs, linked below.

:::

## Multiple structured objects 

You can configure a Web Services Server connector operation to group or split like-structured XML and JSON records in REST/SOAP/simple HTTP requests and responses \(REST/simple HTTP only for JSON\). The XML or JSON profile definition only needs to contain the base fields for a single object. Multiple records can be grouped in the same request or response where the “List” identifier is used as a means to group or split the records.

In order for a process to send multiple objects within one client request, you need to perform the following steps:

1.  In the Web Services Server operation, in the **Input Type** list, select Multiple XML Objects or Multiple JSON Objects.

2.  For the **Request Profile**, select the XML or JSON profile that contains the base fields for the request.

3.  Save and close the operation.

4.  Redeploy the process.


>
:::note

If you are using API Management, you can set overrides in a REST or SOAP API endpoint definition in an API Service component for the **Input Type** and **Request Profile** settings in a Web Services Server operation.

:::

This example shows how multiple XML objects are structured within one request.

Consider an XML profile is structured like this:

```
<Contact>
   <FirstName></FirstName>
   <LastName></LastName>
   <Email></Email>
   <CreateDate></CreateDate>
</Contact>
```

-   For SOAP requests, an process accepts requests that contain a List node named `<Object Name>` + “List” and parses the data accordingly.

    Here is an example of multiple XML objects in one SOAP request/response:

    ```java
    <soapenv:Envelope xmlns:soapenv="http:.xmlsoap.org/soap/envelope/" xmlns:wss="http://www.boomi.com/connector/wss">
       <soapenv:Header/>
       <soapenv:Body><wss:createContact>
    	 <wss:ContactList>
                <Contact>
                   <FirstName>John</FirstName>
                   <LastName>Doe</LastName>
                   <Email>JohnDoe@abc.com</Email>
                   <CreateDate>01/01/10</CreateDate>
                </Contact>
                <Contact>
                   <FirstName>Jane</FirstName>
                   <LastName>Doe</LastName>
                   <Email>JaneDoe@abc.com</Email>
                   <CreateDate>01/01/10</CreateDate>
                </Contact>
             </wss:ContactList>
          </wss:createContact>
       </soapenv:Body>
    </soapenv:Envelope>
    ```

   
:::note

Note that the “wss” namespace prefixes the object name and list. This is the predefined structure for all SOAP requests and responses.

:::

-   For HTTP requests, an process accepts requests that contain a root node named Object Name + "List" and parses the data accordingly.

    Here is an example of multiple XML objects in one HTTP request/response:

    ```java
    <ContactList>
       <Contact>
          <FirstName>John</FirstName>
          <LastName>Doe</LastName>
          <Email>JohnDoe@abc.com</Email>
          <CreateDate>01/01/10</CreateDate>
       </Contact>
       <Contact>
          <FirstName>Jane</FirstName>
          <LastName>Doe</LastName>
          <Email>JaneDoe@abc.com</Email>
          <CreateDate>01/01/10</CreateDate>
       </Contact>
    </ContactList>
    ```


By default, the API process implicitly splits each object record into its own document. Reviewing the documents in Process Reporting would show two individual XML documents \(for the case above\) without any of the request formatting — for example:

```java
<?xml version='1.0' encoding='UTF-8'?>
     <Contact>
         <FirstName>John</FirstName>
         <LastName>Doe</LastName>
         <Email>JohnDoe@abc.com</Email>
         <CreateDate>01/01/10</CreateDate>
     </Contact>
```