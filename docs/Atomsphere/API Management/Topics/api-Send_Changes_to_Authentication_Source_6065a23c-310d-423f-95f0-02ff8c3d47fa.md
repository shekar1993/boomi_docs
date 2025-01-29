# Send Changes to Authentication Source 

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-6065a23c-310d-423f-95f0-02ff8c3d47fa"/>
</head>

You can use the `sendChangesToAuthSource` operation to send Authentication Source changes to the Gateway without using the user interface.

## RESTish implementation 

Send an HTTP POST to:

https://api.boomi.com/apim/api/rest/v1/accountId/sendChangesToAuthSource/id

where *accountId* is the API Management account that you are authenticating with and id is the Authentication Source object from which you are attempting to send changes to the Gateway. Ensure that the request body is empty.

For a JSON response, send the request with the following HTTP header:

`Accept: application/json`

If the changes are successfully sent to the Gateway, the response is `{true}`.

## SOAP implementation 

Request:

```
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:soap="http://soap.apim.api.platform.boomi.com/" xmlns:apim="http://apim.api.platform.boomi.com/">
   <soapenv:Header/>
   <soapenv:Body>
      <soap:sendChangesToAuthSource>
         <!--Optional:-->
         
      <apim:authSourceId>9bef7bdf-818b-4691-96c2-e96992c8827c</apim:authSourceId></soap:sendChangesToAuthSource>
   </soapenv:Body>
</soapenv:Envelope> 
```

Response:

```
<S:Envelope xmlns:S="http://schemas.xmlsoap.org/soap/envelope/"<S:Body>
      <ns4:sendChangesToAuthSourceResponse xmlns:apim="http://apim.api.platform.boomi.com/" xmlns:bns="http://api.platform.boomi.com/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:ns4="http://soap.apim.api.platform.boomi.com/"
         <apim:result>true</apim:result>
      </ns4:sendChangesToAuthSourceResponse>
   </S:Body>
</S:Envelope>
```