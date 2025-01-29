# Contract object 

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-55c0f131-b35c-49f4-bd38-f673f51f1470"/>
</head>


Contract object operations are deprecated. Contracts are replaced with Plans. The Contract object provides the capability to create contracts, search for or update contracts, create or attach an API key to contracts, and more without using the user interface.

## Structure

 

```java
<Contract contractId="" name="" maxMessageSize="" rateLimit="" rateLimitUnit="" quotaLimit="" quotaLimitUnit="" deleted="" />
```

The Contract object uses these fields:

|Field|Type|Description|
|-----|----|-----------|
|Name|*string*|Used for QUERY operations to identify the name of the contract.|
|Delete|*Boolean*|Used for QUERY operations to delete a contract.|
|Max Message Size|*numeric*|Used to set the maximum size of a message that the API handles at the contract level. Leave blank to set to unlimited.|
|Rate Limit|*numeric*|Used to set the maximum amount of time to handle requests so that the server load is limited. When the rate limit is exceeded, requests are ignored.|
|Rate Limit Unit|*string*|Used to designate the rate limit unit. Valid values must be in capitals and are SECOND, MINUTE, HOUR, and UNLIMITED.|
|Quota Limit|*numeric*|Used to set the maximum number of requests to handle in a set amount of time to limit billing cycles. When the limit is exceeded, requests are ignored.|
|Quota Limit Unit|*string*|Used to designate the quota limit unit. Valid values must be in capitals and are DAY, WEEK, MONTH, and UNLIMITED.|
|Contract Id|*numeric*|Used for direct value gets by designating a contract's id value.|

## Supported operations 

The Contract object is supported in the following operations:

| GET        | QUERY      | CREATE     | UPDATE     | DELETE     |
|------------|------------|------------|------------|------------|
| ✅ Supported | ✅ Supported | ✅ Supported | ✅ Supported | ✅ Supported |


You can query for API Proxy/Service Component Id, Name, and Delete. Create returns a key.

## RESTish implementation 

-   **GET operation**

    Send an HTTP GET to:

    https://api.boomi.com/apim/api/rest/v1/accountId/contract/id

    where *accountId* is the Boomi API Management account that you are authenticating with and id is the Contract object you are attempting to GET.

    JSON response:

    ```
    {
    "@type": "Contract",
    "contractId": "4d50decd-f2b6-d59e-53f4-22ec4f188bb1",
    name": "Less than 0",
    "maxMessageSize": 1024 "rateLimit": 0, "quotaLimit": 0,
    "rateLimitUnit": "SECOND",
    "quotaLimitUnit": "DAY",
    "deleted": true
    }
    ```

-   **QUERY operation**

    Send an HTTP POST to:

    https://api.boomi.com/apim/api/rest/v1/accountId/contract/query

    where *accountId* is the ID of the authenticating account for the request.

    For a JSON request, send the request with the following HTTP header:

    ```
    Content-Type: application/json
    ```

    JSON request:

    ```
    {"QueryFilter": { "expression": { "operator": "and", "nestedExpression": [ { "argument": [ "c0cd5950-5f79-42a7-9dff-678d87989207" ], "operator": "EQUALS", "property": "contractId" }, { "argument": [ "false" ], "operator": "EQUALS", "property": "deleted" } ] } } }
    ```

    Response:

    ```
    {
    "@type": "ApimQueryResult",
    "result": [
    {
    "@type": "Contract",
    "contractId": "99f8e822-8f2d-fdf6-4849-6f8d236dbe34",
    "name": "v",
    "maxMessageSize": 0,
    "rateLimit": 0, 
    "quotaLimit": 0,
    "rateLimitUnit": "SECOND",
    "quotaLimitUnit": "DAY",
    "deleted": false
    },
    {
    "@type": "Contract",
    "contractId": "54e457e9-59ce-c25a-be59-70b04205c2c1",
    "maxMessageSize": 0,
    "rateLimit": 0,
    "quotaLimit": 0,
    "name": "w",
    "rateLimitUnit": "SECOND",
    "quotaLimitUnit": "DAY",
    "deleted": false
    },
    {
    "@type": "Contract",
    "contractId": "f864a76f-87e6-be52-1fe9-649640c19259",
    "name": "x",
    "rateLimit": 0, 
    "quotaLimit": 0,
    "rateLimitUnit": "SECOND",
    "quotaLimitUnit": "DAY",
    "deleted": false
    },
    {
    "@type": "Contract",
    "contractId": "9733c1e2-c640-19a4-2d78-966aea9259ab",
    "name": "y",
    "maxMessageSize": 0,
    "rateLimitUnit": "SECOND",
    "quotaLimitUnit": "DAY",
    "rateLimit": 0,
    "quotaLimit": 0,
    "deleted": false
    },
    {
    "@type": "Contract",
    "contractId": "67ada6c5-4323-18a8-b1e0-2f688c38bda2",
    "name": "z",
    "maxMessageSize": 0,
    "rateLimit": 0, 
    "quotaLimit": 0,
    "rateLimitUnit": "SECOND",
    "quotaLimitUnit": "DAY",
    "deleted": false
    }
    ],
    "numberOfResults": 5
    }
    Example of a request body that returns 0 results:
    http://api.platform.boomi.com/
    ```

-   **CREATE operation**

    Send an HTTP POST to:

    https://api.boomi.com/apim/api/rest/v1/accountId/contract/

    where *accountId* is the API Management account with which you are authenticating.

    For a JSON request, send the request with the following HTTP header:

    ```
    Content-Type: application/json
    ```

    JSON request:

    ```
    {
    "name" : "testQA"
    "maxMessageSize": 0,
    "rateLimit": 999999999999999999, 
    "rateLimitUnit": "MINUTE",
    "quotaLimit": 999999999999999999,
    "quotaLimitUnit": "MONTH"
    } 
    ```

    JSON response:

    ```
    {
    "@type": "Contract",
    "contractId": "575b480a-ae86-4aba-905f-75263bf40276",
    "name": "testQA",
    "maxMessageSize": 0,
    "rateLimit": 0, 
    "quotaLimit": 0,
    "rateLimitUnit": "DAY",
    "quotaLimitUnit": "SECOND",
    "deleted": false
    }
    ```

-   **UPDATE operation**

    Send an HTTP POST to:

    https://api.boomi.com/apim/api/rest/v1/accountId/contract/id/update

    where *accountId* is the API Management account that you are authenticating with and id is the Contract object you are attempting to UPDATE.

    For a JSON request, send the request with the following HTTP header:

    `Content-Type: application/json`

    JSON request:

    ```
    {
    "contractId":"c340ccd1-0dfd-4cff-8e40-ef4f3d6da5f9",
    "name":"how"
    "maxMessageSize": -9017668127734891520, 
    "rateLimit": 999999999999999999,
    "rateLimitUnit": "MINUTE",
    "quotaLimit": 999999999999999999, 
    "quotaLimitUnit": "MONTH"
    }
    ```

    JSON response:

    ```
    {
    "@type": "Contract",
    "contractId": "c340ccd1-0dfd-4cff-8e40-ef4f3d6da5f9",
    "name": "how",
    "rateLimit": 999999999999999999,
    "rateLimitUnit": "MINUTE", 
    "quotaLimit": 999999999999999999, 
    "quotaLimitUnit": "MONTH"
    "deleted": false
    }
    ```

-   **DELETE operation**

    Send an HTTP DELETE to:

    https://api.boomi.com/apim/api/rest/v1/accountId/contract/id/update

    where *accountId* is the API Management account that you are authenticating with and id is the Contract object you are attempting to DELETE.

    If the contract was successfully deleted, the response is a simple `<true/>`.

    For a JSON response, send the request with the following HTTP header:

    `Accept: application/json`

    If you deleted the contract successfully, the response is \{true\}.


## SOAP implementation 
-   **GET operation**

    Request: get a object

    ```
    <soapenv:Envelope xmlns:soapenv="http://xmlsoap.org/soap/envelope/" 
    xmlns:soap="http://soap.apim.api.platform.boomi.com/"
          xmlns:apim="http://apim.api.platform.boomi.com/" 
    xmlns:api="http://api.platform.boomi.com/"
       <soapenv:Header/>
       <soapenv:Body>
          <soap:get>
             <!--Optional:-->
             <apim:objectType>Contract</apim:objectType>
             <apim:objectId>517bfe7a-5db6-4729-93fb-e907908374d8</apim:objectId>
          </soap:get>
       </soapenv:Body>
    </soapenv:Envelope>
    
    
    
    ```

    Response:

    ```
    <S:Envelope xmlns:S="http://xmlsoap.org/soap/envelope/"
       <S:Body>
          <ns4:getResponse xmlns:apim="http://apim.api.platform.boomi.com/" 
    xmlns:bns="http://api.platform.boomi.com/" 
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
    xmlns:ns4="http://soap.apim.api.platform.boomi.com/"
             <apim:result xsi:type="apim:Contract" deleted="true" quotaLimitUnit="UNLIMITED" rateLimitUnit="UNLIMITED" name="apiTestKh"  rateLimit: "0"  quotaLimit:" 0"  contractId="517bfe7a-5db6-4729-93fb-e907908374d8"/>
          </ns4:getResponse>
       </S:Body>
    </S:Envelope>
    
    
    
    
    ```

-   **DELETE operation**

    Request: delete a contract object

    ```
    <soapenv:Envelope xmlns:soapenv="http://xmlsoap.org/soap/envelope/" 
    xmlns:soap="http://soap.apim.api.platform.boomi.com/" 
    xmlns:apim="http://apim.api.platform.boomi.com/"
       <soapenv:Header/>
       <soapenv:Body>
          <soap:delete>
             <apim:objectType>Contract</apim:objectType>
             <apim:objectId>517bfe7a-5db6-4729-93fb-e907908374d8</apim:objectId>
          </soap:delete>
       </soapenv:Body>
       </soapenv:Envelope>
    ```

    Response:

    ```
    <S:Envelope xmlns:S="http://schemas.xmlsoap.org/soap/envelope/"
       <S:Body>
          <ns4:deleteResponse xmlns:apim="http://apim.api.platform.boomi.com/" 
       xmlns:bns="http://api.platform.boomi.com/" 
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
       xmlns:ns4="http://soap.apim.api.platform.boomi.com/"
             <apim:successful>true</apim:successful>
          </ns4:deleteResponse>
       </S:Body>
    </S:Envelope>
    ```

-   **QUERY operation**

    Request:

    ```
    
    
    <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:soap="http://soap.apim.api.platform.boomi.com/" xmlns:apim="http://apim.api.platform.boomi.com/" xmlns:api="http://api.platform.boomi.com/"> <soapenv:Header> 	 <wsse:Security xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd"> <wsse:UsernameToken wsu:Id="UsernameToken" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd"> <wsse:Username>username</wsse:Username> <wsse:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">password</wsse:Password> </wsse:UsernameToken> </wsse:Security> </soapenv:Header> <soapenv:Body> 	<soap:query> <apim:objectType>Contract</apim:objectType> <apim:objectId></apim:objectId> </soap:query> </soapenv:Body> </soapenv:Envelope>
    
    
    ```

    Response:

    ```
    <S:Envelope xmlns:S="http://xmlsoap.org/soap/envelope/"
       <S:Body>
          <ns4:queryResponse xmlns:apim="http://apim.api.platform.boomi.com/" 
                             xmlns:bns="http://api.platform.boomi.com/" 
                             xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
                             xmlns:ns4="http://soap.apim.api.platform.boomi.com/"
                <apim:results numberOfResults="46"
                    <bns:result xsi:type="apim:Contract" deleted="false" quotaLimitUnit="DAY" rateLimitUnit="UNLIMITED" name="aaa" "rateLimit: "0" quotaLimit:" 0"contractId="3a8e02c0-976b-4571-94f1-186619906198"/>
                    <bns:result xsi:type="apim:Contract" deleted="false" quotaLimitUnit="DAY" rateLimitUnit="SECOND" maxMessageSize="1024" name="1stContracts" rateLimit: "0" quotaLimit:" 0" contractId="3664c0d8-d193-74b2-d2c2-bfb54356fed5"/>
                    <bns:result xsi:type="apim:Contract" deleted="false" quotaLimitUnit="DAY" rateLimitUnit="SECOND" maxMessageSize="5120" name="2ndContact" rateLimit: "0" quotaLimit:" 0"  contractId="46429c65-202d-ce1a-a5fc-d3a025174e80"/>
                    <bns:result xsi:type="apim:Contract" deleted="false" quotaLimitUnit="DAY" rateLimitUnit="HOUR" rateLimit="5" name="fgfg"  rateLimit: "0" quotaLimit:" 0" contractId="ba14c9fe-82b6-5f53-547c-8873d8b621cf"/>
             </apim:results>
          </ns4:queryResponse>
       </S:Body>
    </S:Envelope>
    ```

-   **CREATE operation**

    Request:

    ```
    <soapenv:Envelope xmlns:soapenv="http://xmlsoap.org/soap/envelope/" 
    xmlns:soap="http://soap.apim.api.platform.boomi.com/"
    xmlns:apim="http://apim.api.platform.boomi.com/" xmlns:api="http://api.platform.boomi.com/"<soapenv:Header/>
       <soapenv:Body>
          <soap:create>
             <apim:object xsi:type="apim:Contract" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" name="apiTestKh" quotaLimitUnit="DAY" rateLimitUnit="UNLIMITED"  rateLimit: "0" quotaLimit:" 0"
             </apim:object>
          </soap:create>
       </soapenv:Body>
    </soapenv:Envelope>
    
    
    ```

    Response:

    ```
    <S:Envelope xmlns:S="http://schemas.xmlsoap.org/soap/envelope/"
       <S:Body>
          <ns4:createResponse xmlns:apim="http://apim.api.platform.boomi.com/" xmlns:bns="http://api.platform.boomi.com/" **xmlns:xsi**="http://www.w3.org/2001/XMLSchema-instance" **xmlns:ns4**="http://soap.apim.api.platform.boomi.com/"
             <apim:result xsi:type="apim:Contract" deleted="false" quotaLimitUnit="UNLIMITED" rateLimitUnit="UNLIMITED" name="apiTestKh" rateLimit: "0" quotaLimit:" 0"  contractId="517bfe7a-5db6-4729-93fb-e907908374d8"/>
          </ns4:createResponse>
       </S:Body>
    </S:Envelope>
    ```

-   **UPDATE operation**

    Request: update a contract

    ```
    <soapenv:Envelope xmlns:soapenv="http://xmlsoap.org/soap/envelope/" 
    xmlns:soap="http://soap.apim.api.platform.boomi.com/"
    xmlns:apim="http://apim.api.platform.boomi.com/" 
    xmlns:api="http://api.platform.boomi.com/"
       <soapenv:Header/>
       <soapenv:Body>
          <soap:update>
             <apim:object xsi:type="apim:Contract" 
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
             quotaLimitUnit="WEEK" rateLimitUnit="HOUR" name="apiTestKh" contractId="3da1c4dc-2d74-2a5f-4b82-fa6d7113e9b5" rateLimit: "0" quotaLimit:" 0"
             </apim:object>
          </soap:update>
       </soapenv:Body>
    </soapenv:Envelope>
    ```

    Response:

    ```
    <S:Envelope xmlns:S="http://xmlsoap.org/soap/envelope/"
       <S:Body>
          <ns4:updateResponse xmlns:apim="http://apim.api.platform.boomi.com/" 
    xmlns:bns="http://api.platform.boomi.com/" 
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
    xmlns:ns4="http://soap.apim.api.platform.boomi.com/"
             <apim:result xsi:type="apim:Contract" deleted="false" quotaLimitUnit="UNLIMITED" 
    quotaLimitUnit="WEEK" rateLimitUnit="HOUR" rateLimitUnit="UNLIMITED" rateLimit: "0" quotaLimit:" 0"name="apiTestKh" contractId="3da1c4dc-2d74-2a5f-4b82-fa6d7113e9b5"/>
          </ns4:updateResponse>
       </S:Body>
    </S:Envelope>
    ```