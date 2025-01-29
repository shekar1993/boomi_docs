# Returning multiple response outputs 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-d52c1abe-094f-40d5-a570-7ad287e730ad"/>
</head>


In order for a process to return multiple objects back to a single client request, modify the **Response Output Type** field on the Shared Web Server panel in Atom Management.

## About this task

**Note:** Any output type definition in the Web Services Server operation assumes that there is a Return Documents step specified in the process. It is the only process step that can aggregate and return document data to the client application that made the request. Review the Returning Responses to Web Service Requests topic for a better understanding.

## Procedure

1.  In the **Response Output Type** list, select Multiple XML Objects or Multiple JSON Objects.

2.  For the **Response Profile**, select the XML or JSON profile that contains the base fields for the response.

3.  Define the **Maximum Number of Documents Returned** field to determine the number of object records that you would like returned in a single response.

4.  **Save and Close** the operation.

5.  Redeploy the process.

## Example


-   For SOAP responses, a process returns data that contain a node named “wss:” + `<Object Name>` + “ResponseList” to support multiple XML loops.

    The following SOAP response example shows formatted SOAP response data that contains multiple objects:

    ```java
    <S:Envelope xmlns:S="http:.xmlsoap.org/soap/envelope/">
       <S:Body>
          <wss:createContactResponse xmlns:wss="http://www.boomi.com/connector/wss">
             <wss:ContactResponseList>
                <ContactResp>
                   <FirstName>John</FirstName>
                   <LastName>Doe</LastName>
                   <InternalID>0001</InternalID>
                   <Created>04/15/10 12:00:00</Created>
                </ContactResp>
                <ContactResp>
                   <FirstName>Jane</FirstName>
                   <LastName>Doe</LastName>
                   <InternalID>0002</InternalID>
                   <Created>04/15/10 12:00:01</Created>
                </ContactResp>
             </wss:ContactResponseList>
          </wss:createContactResponse>
       </S:Body>
    </S:Envelope>
    ```

-   For HTTP responses, a process returns data that is the same in structure but without the SOAP envelope — for example:

    ```java
    <wss:ContactResponseList xmlns:wss="http://www.boomi.com/connector/wss">
        <ContactResp>
            <FirstName>John</FirstName>
            <LastName>Doe</LastName>
            <InternalID>0001</InternalID>
            <Created>04/15/10 12:00:00</Created>
        </ContactResp>
        <ContactResp>
            <FirstName>Jane</FirstName>
            <LastName>Doe</LastName>
            <InternalID>0002</InternalID>
            <Created>04/15/10 12:00:01</Created>
        </ContactResp>
    </wss:ContactResponseList>
    ```

:::note

If you are using API Management, you can set overrides in a REST or SOAP API endpoint definition in an API Service component for the **Response Output Type** and **Response Profile** settings in a Web Services Server operation.

:::
