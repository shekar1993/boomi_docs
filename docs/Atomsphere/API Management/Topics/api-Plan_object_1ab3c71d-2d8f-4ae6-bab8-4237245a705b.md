# Plan object 

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-1ab3c71d-2d8f-4ae6-bab8-4237245a705b"/>
</head>


The Plan object provides the capability to create plans, search for or update plans, and delete plans without using the user interface.

## Structure


`<Plan planId="" name="" description="" maxMessageSize="" rateLimit="" quotaLimit="" rateLimitUnit="" quotaLimitUnit="" status="" />`


The Plan object uses these fields:

|Field|Type|Description|
|-----|----|-----------|
|planId|*string*|The ID of the plan.|
|name|*string*|The name of the plan.|
|description|*string*|The optional description of the plan.|
|maxMessageSize|*numeric*|The maximum size of a message, in bytes, that the API handles at the plan level. Leave blank to set to unlimited.|
|rateLimit|*numeric*|The maximum amount of time to handle requests to limit the server load. When it exceeds the rate limit, it ignores new requests.|
|quotaLimit|*numeric*|The maximum number of requests to handle in a set amount of time to limit billing cycles. When it exceeds the limit, it ignores new requests.|
|rateLimitUnit|*string*|The rate limit unit. Valid values must be uppercase and are SECOND, MINUTE, HOUR, and UNLIMITED.|
|quotaLimitUnit|*string*|The quota limit unit. Valid values must be uppercase and are DAY, WEEK, MONTH, and UNLIMITED.|
|status|*string*|Status of the plan — either ENABLED or DISABLED.|

## Supported operations 

The Plan object is supported in the following operations:

| GET       | QUERY      | CREATE     | UPDATE     | DELETE     |
|-----------|------------|------------|------------|------------|
| ✅ Supported | ✅ Supported | ✅ Supported | ✅ Supported | ✅ Supported |


:::note

You can use the following fields as QUERY filters for the Plan object:

| Field | Allowed values   |
|-------|------------------|
| name  | Any string value.|
| status| ENABLED, DISABLED.|


You cannot delete a Plan object if it is associated with any deployments or used by any active subscriptions.

It is not possible to undelete a Plan object.

:::

## RESTish implementation 
-   **GET operation**

    Send an HTTP GET request to:

    https://api.boomi.com/apim/api/rest/v1/accountId/plan/id

    where *accountId* is the Boomi API Management account that you are authenticating with and id is the Plan object you are attempting to GET.

    For example, to get the Plan object with planId 4d50decd-f2b6-d59e-53f4-22ec4f188bb1, send an HTTP GET request to https://api.boomi.com/apim/api/rest/v1/accountId/plan/4d50decd-f2b6-d59e-53f4-22ec4f188bb1.

    For a JSON response, send the request with the following HTTP header:

    `Accept: application/json`

    JSON response:

    ```
    {
       "@type": "Plan",
       "planId": "4d50decd-f2b6-d59e-53f4-22ec4f188bb1", 
       "name": "apiTestKh",
       "description": "",
       "maxMessageSize": 1024,
       "rateLimit": 0, 
       "quotaLimit": 0,
       "rateLimitUnit": "SECOND",
       "quotaLimitUnit": "DAY",
       "status": "DISABLED"
    }
    ```

-   **QUERY operation**

    Send an HTTP POST request to:

    https://api.boomi.com/apim/api/rest/v1/accountId/plan/query

    where *accountId* is the ID of the authenticating account for the request.

    For a JSON request, send the request with the following HTTP header:

    ```
    Content-Type: application/json
    ```

    JSON request body: retrieve all of the account’s enabled plans:

    ```
    {
      "QueryFilter" :
        {
          "expression": 
            {
              "argument": ["ENABLED"],
              "operator": "EQUALS",
              "property": "status"
            }
        }
    }
    ```

    For a JSON response, send the request with the following HTTP header:

    `Accept: application/json`

    JSON response:

    ```
    {
       "@type": "ApimQueryResult",
       "result": [
          {
             "@type": "Plan",
             "planId": "99f8e822-8f2d-fdf6-4849-6f8d236dbe34",
             "name": "v",
             "description": "",
             "maxMessageSize": 0,
             "rateLimit": 0, 
             "quotaLimit": 0,
             "rateLimitUnit": "SECOND",
             "quotaLimitUnit": "DAY",
             "status": "ENABLED"
          },
          {
             "@type": "Plan",
             "planId": "54e457e9-59ce-c25a-be59-70b04205c2c1",
             "maxMessageSize": 0,
             "rateLimit": 0,
             "quotaLimit": 0,
             "name": "w",
             "description": "",
             "rateLimitUnit": "SECOND",
             "quotaLimitUnit": "DAY",
             "status": "ENABLED"
          },
          {
             "@type": "Plan",
             "planId": "f864a76f-87e6-be52-1fe9-649640c19259",
             "name": "x",
             "description": "",
             "rateLimitUnit": "SECOND",
             "quotaLimitUnit": "DAY",
             "rateLimit": 0, 
             "quotaLimit": 0,
             "status": "ENABLED"
          },
          {
             "@type": "Plan",
             "planId": "9733c1e2-c640-19a4-2d78-966aea9259ab",
             "name": "y",
             "description": "",
             "maxMessageSize": 0,
             "rateLimitUnit": "SECOND",
             "quotaLimitUnit": "DAY",
             "rateLimit": 0,
             "quotaLimit": 0,
             "status": "ENABLED"
          },
          {
             "@type": "Plan",
             "planId": "67ada6c5-4323-18a8-b1e0-2f688c38bda2",
             "name": "z",
             "description": "",
             "maxMessageSize": 0,
             "rateLimit": 0, 
             "quotaLimit": 0,
             "rateLimitUnit": "SECOND",
             "quotaLimitUnit": "DAY",
             "status": "ENABLED"
          }
       ],
       "numberOfResults": 5
    }
    ```

-   **CREATE operation**

    Send an HTTP POST request to:

    https://api.boomi.com/apim/api/rest/v1/accountId/plan/

    where *accountId* is the API Management account that you are authenticating with.

    For a JSON request, send the request with the following HTTP header:

    ```
    Content-Type: application/json
    ```

    JSON request body:

    ```
    {
       "name": "how",
       "description": "",
       "maxMessageSize": 0,
       "rateLimit": 9999, 
       "quotaLimit": 9999,
       "rateLimitUnit": "MINUTE",
       "quotaLimitUnit": "MONTH"
    } 
    ```

    For a JSON response, send the request with the following HTTP header:

    `Accept: application/json`

    JSON response:

    ```
    {
       "@type": "Plan",
       "planId": "575b480a-ae86-4aba-905f-75263bf40276",
       "name": "how",
       "description": "",
       "maxMessageSize": 0,
       "rateLimit": 9999, 
       "quotaLimit": 9999,
       "rateLimitUnit": "MINUTE",
       "quotaLimitUnit": "MONTH",
       "status": "ENABLED"
    }
    ```

-   **UPDATE operation**

    Send an HTTP POST request to:

    https://api.boomi.com/apim/api/rest/v1/accountId/plan/id/update

    where *accountId* is the API Management account that you are authenticating with and id is the Plan object you are attempting to UPDATE.

    For a JSON request, send the request with the following HTTP header:

    ```
    Content-Type: application/json
    ```

    For example, to update the Plan object with planId 575b480a-ae86-4aba-905f-75263bf40276, from the CREATE example above, and change its maximum message size from 0 to 2048, send an HTTP POST request to https://api.boomi.com/apim/api/rest/v1/accountId/plan/575b480a-ae86-4aba-905f-75263bf40276/update.

    JSON request body:

    ```
    {
       "planId":"575b480a-ae86-4aba-905f-75263bf40276",
       "name": "how",
       "description": "",
       "maxMessageSize": 2048, 
       "rateLimit": 9999,
       "rateLimitUnit": "MINUTE",
       "quotaLimit": 9999, 
       "quotaLimitUnit": "MONTH"
    }
    ```

    For a JSON response, send the request with the following HTTP header:

    `Accept: application/json`

    JSON response:

    ```
    {
       "@type": "Plan",
       "planId": "575b480a-ae86-4aba-905f-75263bf40276",
       "name": "how",
       "description": "",
       "maxMessageSize": 2048,
       "rateLimit": 9999,
       "rateLimitUnit": "MINUTE", 
       "quotaLimit": 9999, 
       "quotaLimitUnit": "MONTH",
       "status": "ENABLED"
    }
    ```

-   **DELETE operation**

    Send an HTTP DELETE request to:

    https://api.boomi.com/apim/api/rest/v1/accountId/plan/id

    where *accountId* is the API Management account that you are authenticating with and id is the Plan object you are attempting to DELETE.

    For example, to delete the Plan object with planId 575b480a-ae86-4aba-905f-75263bf40276, send an HTTP DELETE request to https://api.boomi.com/apim/api/rest/v1/accountId/plan/575b480a-ae86-4aba-905f-75263bf40276.

    For a JSON response, send the request with the following HTTP header:

    ```
    Accept: application/json
    ```

    If you deleted the plan successfully, the JSON response is `{true}`.


## SOAP implementation 

-   **GET operation**

    Request: get the Plan object with planId 4d50decd-f2b6-d59e-53f4-22ec4f188bb1:

    ```
    <soapenv:Envelope xmlns:soapenv="http://xmlsoap.org/soap/envelope/" 
    xmlns:soap="http://soap.apim.api.platform.boomi.com/"
          xmlns:apim="http://apim.api.platform.boomi.com/" 
    xmlns:api="http://api.platform.boomi.com/"
       <soapenv:Header/>
       <soapenv:Body>
          <soap:get>
             <!--Optional:-->
             <apim:objectType>Plan</apim:objectType>
             <apim:objectId>4d50decd-f2b6-d59e-53f4-22ec4f188bb1</apim:objectId>
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
             <apim:result xsi:type="apim:Plan" status="DISABLED" quotaLimitUnit="DAY" rateLimitUnit="SECOND" maxMessageSize="1024" name="apiTestKh" description="" rateLimit="0"  quotaLimit="0" planId="4d50decd-f2b6-d59e-53f4-22ec4f188bb1"/>
          </ns4:getResponse>
       </S:Body>
    </S:Envelope>
    
    ```

-   **QUERY operation**

    Request: retrieve all of the account’s enabled plans:

    ```
    <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:soap="http://soap.apim.api.platform.boomi.com/" xmlns:apim="http://apim.api.platform.boomi.com/" xmlns:api="http://api.platform.boomi.com/">
       <soapenv:Header>
          <wsse:Security xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd"> <wsse:UsernameToken wsu:Id="UsernameToken" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
          <wsse:Username>username</wsse:Username>
          <wsse:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">password</wsse:Password>
          </wsse:UsernameToken> </wsse:Security> </soapenv:Header>
       <soapenv:Body>
          <soap:query>
             <apim:objectType>Plan</apim:objectType>
    	     <api:queryConfig>
    	         <api:QueryFilter>
    		       <api:expression operator="EQUALS" property="status" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="api:SimpleExpression">
    		           <api:argument>ENABLED</api:argument>
    			</api:expression>
    	         </api:QueryFilter>
    	    </api:queryConfig>
          </soap:query>
       </soapenv:Body>
    </soapenv:Envelope>
    
    ```

    Response:

    ```
    <S:Envelope xmlns:S="http://xmlsoap.org/soap/envelope/"
       <S:Body>
          <ns4:queryResponse xmlns:apim="http://apim.api.platform.boomi.com/" 
                             xmlns:bns="http://api.platform.boomi.com/" 
                             xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
                             xmlns:ns4="http://soap.apim.api.platform.boomi.com/"
                <apim:results numberOfResults="5"
                    <bns:result xsi:type="apim:Plan" status="ENABLED" quotaLimitUnit="DAY" rateLimitUnit="SECOND" maxMessageSize="0" name="v" description="" rateLimit="0" quotaLimit="0" planId="99f8e822-8f2d-fdf6-4849-6f8d236dbe34"/>
                    <bns:result xsi:type="apim:Plan" status="ENABLED" quotaLimitUnit="DAY" rateLimitUnit="SECOND" maxMessageSize="0" name="w" description="" rateLimit="0" quotaLimit="0" planId="54e457e9-59ce-c25a-be59-70b04205c2c1"/>
                    <bns:result xsi:type="apim:Plan" status="ENABLED" quotaLimitUnit="DAY" rateLimitUnit="SECOND" maxMessageSize="0" name="x" description="" rateLimit="0" quotaLimit="0" planId="f864a76f-87e6-be52-1fe9-649640c19259"/>
                    <bns:result xsi:type="apim:Plan" status="ENABLED" quotaLimitUnit="DAY" rateLimitUnit="SECOND" maxMessageSize="0" name="y" description="" rateLimit="0" quotaLimit="0" planId="9733c1e2-c640-19a4-2d78-966aea9259ab"/>
                    <bns:result xsi:type="apim:Plan" status="ENABLED" quotaLimitUnit="DAY" rateLimitUnit="SECOND" maxMessageSize="0" name="z" description="" rateLimit="0" quotaLimit="0" planId="67ada6c5-4323-18a8-b1e0-2f688c38bda2"/>
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
    xmlns:apim="http://apim.api.platform.boomi.com/" xmlns:api="http://api.platform.boomi.com/">
    <soapenv:Header/>
       <soapenv:Body>
          <soap:create>
             <apim:object xsi:type="apim:Plan" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" maxMessageSize="0" name="how" description="" quotaLimitUnit="MONTH" rateLimitUnit="MINUTE"  rateLimit="9999" quotaLimit="9999">
             </apim:object>
          </soap:create>
       </soapenv:Body>
    </soapenv:Envelope>
    
    ```

    Response:

    ```
    <S:Envelope xmlns:S="http://schemas.xmlsoap.org/soap/envelope/"
       <S:Body>
          <ns4:createResponse xmlns:apim="http://apim.api.platform.boomi.com/" xmlns:bns="http://api.platform.boomi.com/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:ns4="http://soap.apim.api.platform.boomi.com/"
             <apim:result xsi:type="apim:Plan" status="ENABLED" quotaLimitUnit="MONTH" rateLimitUnit="MINUTE" maxMessageSize="0" name="how" description="" rateLimit="9999" quotaLimit="9999" planId="575b480a-ae86-4aba-905f-75263bf40276"/>
          </ns4:createResponse>
       </S:Body>
    </S:Envelope>
    ```

-   **UPDATE operation**

    Request: update the Plan object that has planId 575b480a-ae86-4aba-905f-75263bf40276, from the previous CREATE example, and change its maximum message size from 0 to 2048:

    ```
    <soapenv:Envelope xmlns:soapenv="http://xmlsoap.org/soap/envelope/" 
    xmlns:soap="http://soap.apim.api.platform.boomi.com/"
    xmlns:apim="http://apim.api.platform.boomi.com/" 
    xmlns:api="http://api.platform.boomi.com/"
       <soapenv:Header/>
       <soapenv:Body>
          <soap:update>
             <apim:object xsi:type="apim:Plan" 
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
              status="ENABLED" quotaLimitUnit="MONTH" rateLimitUnit="MINUTE" maxMessageSize="2048" name="how" description="" rateLimit="9999" quotaLimit="9999" planId="575b480a-ae86-4aba-905f-75263bf40276">
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
             <apim:result xsi:type="apim:Plan" status="ENABLED" quotaLimitUnit="MONTH" rateLimitUnit="MINUTE" maxMessageSize="2048" name="how" description="" rateLimit="9999" quotaLimit="9999" planId="575b480a-ae86-4aba-905f-75263bf40276"/>
          </ns4:updateResponse>
       </S:Body>
    </S:Envelope>
    ```

-   **DELETE operation**

    Request: delete the Plan object that has planId 575b480a-ae86-4aba-905f-75263bf40276:

    ```
    <soapenv:Envelope xmlns:soapenv="http://xmlsoap.org/soap/envelope/" 
    xmlns:soap="http://soap.apim.api.platform.boomi.com/" 
    xmlns:apim="http://apim.api.platform.boomi.com/"
       <soapenv:Header/>
       <soapenv:Body>
          <soap:delete>
             <apim:objectType>Plan</apim:objectType>
             <apim:objectId>575b480a-ae86-4aba-905f-75263bf40276</apim:objectId>
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