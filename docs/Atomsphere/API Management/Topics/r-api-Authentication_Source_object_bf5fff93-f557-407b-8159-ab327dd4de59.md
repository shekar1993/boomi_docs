# Authentication Source object 

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-bf5fff93-f557-407b-8159-ab327dd4de59"/>
</head>

The Authentication Source object enables you to query Authentication Sources without using the API Management interface.



## Structure 

```java
<AuthenticationSource name="" type="" authSourceId="" brokerIsCurrent="" description=""> </AuthenticationSource>
```

|Field|Type|Description|
|-----|----|-----------|
|name|*string*|The name of the Authentication Source.|
|type|*string*|The type of the Authentication Source: OPENID, SAML, or BASIC|
|authSourceId|*string*|A unique ID for the Authentication Source.|
|brokerIsCurrent|*boolean*|Whether or not the Authentication Source currently matches the version saved to the Authentication Broker.|
|description|*string*|A description of the Authentication Source.|

## Supported operations 

The following operations support the Authentication Source object:

| GET            | QUERY         | CREATE          | UPDATE          | DELETE          |
|----------------|---------------|-----------------|-----------------|-----------------|
| x Not supported| ✅ Supported   | x Not supported | x Not supported | x Not supported |


You can use the following fields as QUERY filters for the Authentication Source object:

| Field | Allowed values                      |
|-------|------------------------------------|
| name  | Any string value.                   |
| type  | • *OPENID* <br></br>• *SAML*<br></br> • *BASIC*             |



## RESTish implementation 

-   **QUERY operation**

    Send an HTTP POST to:

    https://api.boomi.com/apim/api/rest/v1/accountId/AuthenticationSource/query

    where *accountId* is the ID of the authenticating account for the request.

    For a JSON request, send the request with the following HTTP header:

    `Content-Type: application/json`

    JSON request \(for all roles\):

    ```
    {
      "QueryFilter" : {
        "expression" : {
          "operator" : "and",
          "nestedExpression" : [
            {
              "argument": ["BASIC AUTH Source"],
              "operator": "EQUALS",
              "property": "name"
            },
            {
              "argument": ["BASIC"],
              "operator": "EQUALS",
              "property": "type"
            }
          ]
        }
      }
    }
    
    ```

    For a JSON response, send the request with the following HTTP header:

    `Accept: application/json`

    JSON response:

    ```
    {
      "@type":"ApimQueryResult",
      "result":[
        {
          "@type":"AuthenticationSource",
          "description":"",
          "authSourceId":"422afaca-5789-4173-8e89-e78b8fff50f7",
          "name":"BASIC AUTH Source",
          "type":"BASIC",
          "brokerIsCurrent":true
        }
      ],
      "numberOfResults":1
    }
    ```


## SOAP implementation 

-   **QUERY operation**

    The following example queries the Application named *CreateTest1*.

    Request:

    ```
    <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:soap="http://soap.apim.api.platform.boomi.com/" xmlns:apim="http://apim.api.platform.boomi.com/" xmlns:api="http://api.platform.boomi.com/"<soapenv:Header/>
       <soapenv:Body>
          <soap:query>
             <!--Optional:-->
             <apim:objectType>authenticationSource</apim:objectType>
             <!--Optional:-->
             <api:queryConfig>
                <api:QueryFilter>
                <api:expression operator="and" xsi:type="api:GroupingExpression" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"<api:nestedExpressionoperator="EQUALS" property="type" xsi:type="api:SimpleExpression"
                       <api:argument>BASIC</api:argument>
                     </api:nestedExpression><api:nestedExpression operator="EQUALS" property="name" xsi:type="api:SimpleExpression"
                     <api:argument>BASIC AUTH Source</api:argument>
                   </api:nestedExpression>
                      </api:expression>
                </api:QueryFilter>
             </api:queryConfig>
          </soap:query>
       </soapenv:Body>
    </soapenv:Envelope>
    ```

    Response:

    ```
    <S:Envelope xmlns:S="http://schemas.xmlsoap.org/soap/envelope/">
       <S:Body>
          <ns4:queryResponse xmlns:apim="http://apim.api.platform.boomi.com/" xmlns:bns="http://api.platform.boomi.com/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:ns4="http://soap.apim.api.platform.boomi.com/"<apim:results numberOfResults="1"
                <bns:result xsi:type="apim:AuthenticationSource" brokerIsCurrent="true" type="BASIC" name="BASIC AUTH Source" authSourceId="f68a74de-c9d1-4309-8e0a-8347f8b12b38"
                   <apim:description>API description</apim:description>
                </bns:result>
             </apim:results>
          </ns4:queryResponse>
       </S:Body>
    </S:Envelope>
    ```