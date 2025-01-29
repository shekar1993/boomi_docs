# Published API object 

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-a4a34dc2-e08f-40d8-b4a4-4948a15eb19d"/>
</head>


You can use the Published API object to identify the currently deployed Atom’s environment, the API, and the URIs for supported metadata objects \(REST, SOAP, OData\).

## Structure 

:::note 

If you do not see a PublishedApi object used in an old deployment, redeploy this API to that environment.

:::

:::note 

If you have multiple authentication methods configured for an Atom, then the API endpoint URLs returned in the results use the default authentication method configured in the Shared Web Server settings.

:::

``` 
<PublishedApi environmentId="" atomId="" componentId="" name="" description="">
  <rest swaggerUrl="" swaggerUiLink="" />
  <soap11 wsdlUrl="" />
  <soap12 wsdlUrl="" />
  <odata2 serviceUrl="" />
</PublishedApi>/>
```

The Published API object uses these fields:

|Field|Description|
|-----|-----------|
|environmentID|The *environment Id* of this API \(lookup on the platform environment API\).|
|atomId|The *container Id* where this API exists \(lookup using the platform Atom API\).|
|componentId|The Id of the API Service component.|
|name|The name of the API Service component.|
|description|The description of the API Service component.|
|rest|The metadata endpoints to use REST for this API.|
|soap11|The metadata endpoints to use SOAP 1.1 for this API.|
|soap12|The metadata endpoints to use SOAP 1.2 for this API.|
|odata|The metadata endpoints to use OData 2 for this API.|

## Supported operations 

Query is supported by two calls:

-   Query retrieves a limited number of records in a response. When the record limit is reached, a token for more results and numberOfResults is returned.
-   QueryMore retrieves subsequent records in chunks from the previous query. To iterate through records in a result set, call queryMore\(\) repeatedly until finishing processing all records in the result set \(the Done flag is true\).


| GET            | QUERY         | CREATE          | UPDATE          | DELETE          |
|----------------|---------------|-----------------|-----------------|-----------------|
| x Not supported| ✅ Supported   | x Not supported | x Not supported | x Not supported |


## RESTish implementation 

-   **QUERY operation**

    Send an HTTP POST to:

    ``` 
    https://api.boomi.com/apim/api/rest/v1/accountId/PublishedApi/query
    ```

    Where *accountId* is the ID of the authenticating account for the request.

    For a JSON request, send the request with the following HTTP header:

    ``` 
    Content-Type: application/json
    ```

    XML request:

    ```
    <QueryConfig
        xmlns="http://api.platform.boomi.com/">
        <QueryFilter>
            <expression operator="and"
                xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="GroupingExpression">
                <nestedExpression operator="EQUALS" property="environmentId"
                    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="SimpleExpression">
                    <argument>c23xxxxc-0xf3-441x-9726-42xx30x7w4ca</argument>
                </nestedExpression>
                <nestedExpression operator="EQUALS" property="atomId"
                    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="SimpleExpression">
                    <argument>3c19f2xx-015x-446x-x9xx-801xx65838x5</argument>
                </nestedExpression>
            </expression>
        </QueryFilter>
    </QueryConfig>
    ```

    Response:

    ```
    {
        "@type": "ApimQueryResult",
        "result": [
            {
                "@type": "PublishedApi",
                "description": "26afternoonAll",
                "rest": {
                    "@type": "RestInfo",
                    "swaggerUrl": "https://connect.qa.boomi.com/ws/rest/xxxx/swagger.json",
                    "swaggerUiLink": "https://connect.qa.boomi.com/meta/rest/ui/index.html?apiPath=%xxxx"
                },
                "name": "26afternoonAll",
                "componentId": "88xxx52f-6402-4x0x-x2xx-4x51x0x09x97",
                "atomId": "3c19f2xx-015f-446b-xx9e-801xx65838x5",
                "environmentId": "c23x66xx-07x3-441x-9726-42ae30a704ca"
            },
            {
                "@type": "PublishedApi",
                "description": "31has",
                "rest": {
                    "@type": "RestInfo",
                    "swaggerUrl": "https://connect.qa.boomi.com/ws/rest/xxxxx/swagger.json",
                    "swaggerUiLink": "https://connect.qa.boomi.com/meta/rest/ui/index.html?apiPath=%xxxxx"
                },
                "name": "31has",
                "componentId": "a2exxxdf-xxf4-4xx2-b78a-d42e3227f826",
                "atomId": "3c19f2ba-xxxx-446b-xxxx-801ac65838e5",
                "environmentId": "c23d66bc-xxxx-441d-xxxx-42ae30a704ca"
            },
            {
                "@type": "PublishedApi",
                "description": "1",
                "rest": {
                    "@type": "RestInfo",
                    "swaggerUrl": "https://connect.qa.boomi.com/wxs/xxxx/swagger.json",
                    "swaggerUiLink": "https://connect.qa.boomi.com/xxxx/rest/ui/index.html?apiPath=%2F"
                },
                "name": "31nohas",
                "componentId": "92f87f80-xxxx-4d8d-xxxx-9f616a94f36f",
                "atomId": "3c19f2ba-xxxx-xxxx-xxxx-801ac65838e5",
                "environmentId": "c23d66bc-xxxx-xxxx-xxxx-42ae30a704ca"
            }
        ],
        "numberOfResults": 3
    }
    
    ```


## SOAP implementation 

-   **QUERY operation**

    Request without filters:

    ```
    <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:soap="http://soap.apim.api.platform.boomi.com/" xmlns:apim="http://apim.api.platform.boomi.com/" xmlns:api="http://api.platform.boomi.com/">
    <soapenv:Header/>
       <soapenv:Body>
          <soap:query>
             <apim:objectType>PublishedApi</apim:objectType>
             <!--Optional:-->
             <api:queryConfig>
                <api:QueryFilter>
                </api:QueryFilter>
             </api:queryConfig>
          </soap:query>
       </soapenv:Body>
    </soapenv:Envelope>
    ```

    Request with filters:

    ```
    <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:soap="http://soap.apim.api.platform.boomi.com/" xmlns:apim="http://apim.api.platform.boomi.com/" xmlns:api="http://api.platform.boomi.com/">
    <soapenv:Header/>
       <soapenv:Body>
          <soap:query>
             <apim:objectType>PublishedApi</apim:objectType>
             <!--Optional:-->
             <api:queryConfig>
                <api:QueryFilter>
                   <api:expression operator="and" xsi:type="api:GroupingExpression" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
                      <api:nestedExpression operator="EQUALS" property="httpStatus" xsi:type="api:SimpleExpression">
                         <api:argument>200</api:argument>
                      </api:nestedExpression>
                      <api:nestedExpression operator="BETWEEN" property="timeBlock" xsi:type="api:SimpleExpression">
                         <api:argument>2018-01-01T00:00:00Z</api:argument>
                         <api:argument>2018-09-01T00:00:00Z</api:argument>
                      </api:nestedExpression>
                   </api:expression>
                </api:QueryFilter>
             </api:queryConfig>
          </soap:query>
       </soapenv:Body>
    </soapenv:Envelope>
    ```