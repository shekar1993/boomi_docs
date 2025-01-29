# Authentication Source Role object 

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-ccc600e5-4d57-4d9a-ae8c-8ff433c054ac"/>
</head>


The Authentication Source Role object enables you to create, update, delete, query, or get an Authentication Source Role without using the API Management interface.

## Structure 

```java
<AuthenticationSourceRole roleName="" roleId="" authSourceId="" description=""> </AuthenticationSourceRole>
```

|Field|Type|Description|
|-----|----|-----------|
|roleName|*string*|The name of the Authentication Source Role.|
|roleId|*string*|A unique ID for the Authentication Source Role.|
|authSourceId|*string*|A unique ID for the Authentication Source.|
|description|*string*|A description of the Authentication Source.|

## Supported operations 
The following operations support the Authentication Source Role object:

| GET        | QUERY       | CREATE      | UPDATE      | DELETE      |
|------------|-------------|-------------|-------------|-------------|
| ✅ Supported | ✅ Supported | ✅ Supported | ✅ Supported | ✅ Supported |


You can use the following fields as QUERY filters for the Authentication Source Role object:

|Field|Allowed values|
|-----|--------------|
|roleName|Any string value.|
|authSourceId|Any string value.|

## RESTish implementation 

-   **GET operation**

    Send an HTTP GET to:

    https://api.boomi.com/apim/api/rest/v1/accountId/AuthenticationSourceRole/id

    where *accountId* is the Boomi API Management account with which you are authenticating, and id is the Authentication Source Role object you are attempting to GET.

    For a JSON response, send the request with the following HTTP header:

    `Accept: application/json`

    JSON response:

    ```
    { 
      "@type": "AuthenticationSourceRole", 
      "description": "Create role name with all caps",
      "roleId": "6a5d7d07-dbb9-4a89-8595-294ffc9ccbe9", 
      "authSourceId": "e532808b-69f6-4da6-97e3-0e88bff18663", 
      "roleName": "ADMIN" 
    }
    ```

-   **QUERY operation**

    Send an HTTP POST to:

    https://api.boomi.com/apim/api/rest/v1/accountId/AuthenticationSourceRole/query

    where *accountId* is the ID of the authenticating account for the request.

    For a JSON request, send the request with the following HTTP header:

    `Content-Type: application/json`

    JSON request \(for all roles\):

    ```
    {
      "QueryFilter" : {
        "expression" : {
          "argument":["e532808b-69f6-4da6-97e3-0e88bff18663"], 
          "operator":"EQUALS", "property":"authSourceId",
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
          "@type": "AuthenticationSourceRole",
          "description": "Create Test", 
          "roleId": "7f57585f-76f6-404b-ad5f-4c0963aa2627", 
          "authSourceId": "e532808b-69f6-4da6-97e3-0e88bff18663", 
          "roleName": "Admin123" 
        }, 
        { 
          "@type": "AuthenticationSourceRole", 
          "description": "Create Test", 
          "roleId": "f8a3b574-8c03-454b-aba6-1eb910f37138", 
          "authSourceId": "e532808b-69f6-4da6-97e3-0e88bff18663", 
          "roleName": "admin" 
        },
      ],
      "numberOfResults": 2
    }
    ```

-   **CREATE operation**

    Send an HTTP POST to:

    https://api.boomi.com/apim/api/rest/v1/accountId/AuthenticationSourceRole/

    where *accountId* is the API Management account with which you are authenticating.

    For a JSON request, send the request with the following HTTP header:

    `Content-Type: application/json`

    JSON request:

    ```
    { 
      "roleName" : "TestNew", 
      "description" : "TestNew", 
      "authSourceId" : "abc12345-zyxw-9876-mn45-01234defghij" 
    }
    ```

    For a JSON response, send the request with the following HTTP header:

    `Accept: application/json`

    JSON response:

    ```
    { 
      "@type": "AuthenticationSourceRole", 
      "description": "TestNew", 
      "roleId": "xyz98765-abcd-1234-45mn-defghik01234", 
      "authSourceId": "abc12345-zyxw-9876-mn45-01234defghij", 
      "roleName": "TestNew" 
    }
    ```

-   **UPDATE operation**

    Send an HTTP POST to:

    https://api.boomi.com/apim/api/rest/v1/accountId/AuthenticationSourceRole/id/update

    where *accountId* is the API Management account with which you are authenticating, and id is the Authentication Source Role object you are attempting to UPDATE.

    For a JSON request, send the request with the following HTTP header:

    `Content-Type: application/json`

    JSON request:

    ```
    {
      "description" : "NewTest", 
      "authSourceId" : "abc12345-zyxw-9876-mn45-01234defghij", 
      "roleId" : "xyz98765-abcd-1234-45mn-defghik01234", 
      "roleName" : "TestNew" }
    ```

    For a JSON response, send the request with the following HTTP header:

    `Accept: application/json`

    JSON response:

    ```
    {
      "@type": "AuthenticationSourceRole", 
      "description": "NewTest", 
      "roleId": "xyz98765-abcd-1234-45mn-defghik01234", 
      "authSourceId": "abc12345-zyxw-9876-mn45-01234defghij", 
      "roleName": "TestNew" }
    ```

-   **DELETE operation**

    Send an HTTP DELETE to:

    https://api.boomi.com/apim/api/rest/v1/accountId/AuthenticationSourceRole/roleId

    where *accountId* is the API Management account with which you are authenticating, and roleId is the Authentication Source Role object you are attempting to DELETE.

    The response is `<true/>` when you delete the group successfully.

    For a JSON response, send the request with the following HTTP header:

    `Accept: application/json`


## SOAP implementation 

-   **GET operation**

    Request:

    ```
    <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:soap="http://soap.apim.api.platform.boomi.com/" xmlns:apim="http://apim.api.platform.boomi.com/">
      <soapenv:Header/>
      <soapenv:Body>
        <soap:get>
          <apim:objectType>AuthenticationSourceRole</apim:objectType>
            <apim:objectId>29c72cea-bb39-482d-aa9a-76be2a33fde3</apim:objectId>
        </soap:get>
      </soapenv:Body>
    </soapenv:Envelope>
    ```

    Response:

    ```
    <S:Envelope xmlns:S="http://schemas.xmlsoap.org/soap/envelope/">
      <S:Body>
        <ns4:getResponse xmlns:apim="http://apim.api.platform.boomi.com/" xmlns:bns="http://api.platform.boomi.com/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:ns4="http://soap.apim.api.platform.boomi.com/">
          <apim:result xsi:type="apim:AuthenticationSourceRole" roleName="ADMINONE" authSourceId="991ce877-a0cf-41a5-b87c-9eb9a0376e3b" roleId="29c72cea-bb39-482d-aa9a-76be2a33fde3">
            <apim:description>Administrator with all privilege</apim:description>
          </apim:result>
        </ns4:getResponse>
      </S:Body>
    </S:Envelope>
    ```

-   **QUERY operation**

    The following example queries the Authentication Source Roles named ADMINONE.

    Request:

    ```
    <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:soap="http://soap.apim.api.platform.boomi.com/" xmlns:apim="http://apim.api.platform.boomi.com/" xmlns:api="http://api.platform.boomi.com/"
    <soapenv:Header/><soapenv:Body><soap:query><apim:objectType>AuthenticationSourceRole</apim:objectType><api:queryConfig><api:QueryFilter>
               <api:expression operator="and" 
               xsi:type="api:GroupingExpression"xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                      <api:nestedExpression operator="EQUALS" 
                      property="roleName" 
                      xsi:type="api:SimpleExpression"<api:argument>ADMINONE</api:argument></api:nestedExpression>
                      <api:nestedExpression operator="EQUALS" 
                      property="authSourceId" 
                      xsi:type="api:SimpleExpression"<api:argument>991ce877-a0cf-41a5-b87c-9eb9a0376e3b</api:argument></api:nestedExpression></api:expression></api:QueryFilter></api:queryConfig></soap:query></soapenv:Body>
    </soapenv:Envelope>
    ```

    Response:

    ```
    <S:Envelope xmlns:S="http://schemas.xmlsoap.org/soap/envelope/">
    	<S:Body>
    		<ns4:queryResponse xmlns:apim="http://apim.api.platform.boomi.com/" xmlns:bns="http://api.platform.boomi.com/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:ns4="http://soap.apim.api.platform.boomi.com/">
    			<apim:results numberOfResults="1">
    				<bns:result xsi:type="apim:AuthenticationSourceRole" roleName="ADMINONE" authSourceId="991ce877-a0cf-41a5-b87c-9eb9a0376e3b" roleId="29c72cea-bb39-482d-aa9a-76be2a33fde3">
    					<apim:description>Create and maintain roles. User access to an API can be restricted by associating the API with roles. Roles are then assigned to groups and users are assigned groups.</apim:description>
    				</bns:result>
    			</apim:results>
    		</ns4:queryResponse>
    	</S:Body>
    </S:Envelope>
    ```

-   **CREATE operation**

    Request:

    ```
    <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:soap="http://soap.apim.api.platform.boomi.com/" xmlns:apim="http://apim.api.platform.boomi.com/"
    	<soapenv:Header/>
    		<soapenv:Body>
    			<soap:create>
    				<apim:object xsi:type="apim:AuthenticationSourceRole" 
    				roleName="ADMINONE" 
    				authSourceId="991ce877-a0cf-41a5-b87c-9eb9a0376e3b" 
    				xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"<apim:description>Administrator with all privilege</apim:description>
    				</apim:object>
    			</soap:create>
    		</soapenv:Body>
    </soapenv:Envelope>
    ```

    Response:

    ```
    <S:Envelope xmlns:S="http://schemas.xmlsoap.org/soap/envelope/"<S:Body><ns4:createResponse xmlns:apim="http://apim.api.platform.boomi.com/" xmlns:bns="http://api.platform.boomi.com/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:ns4="http://soap.apim.api.platform.boomi.com/"
             <apim:result xsi:type="apim:AuthenticationSourceRole" 
             roleName="ADMINONE" 
             authSourceId="991ce877-a0cf-41a5-b87c-9eb9a0376e3b" 
             roleId="29c72cea-bb39-482d-aa9a-76be2a33fde3"<apim:description>Administrator with all privilege</apim:description></apim:result></ns4:createResponse></S:Body>
    </S:Envelope>
    ```

-   **UPDATE operation**

    Request:

    ```
    <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:soap="http://soap.apim.api.platform.boomi.com/" xmlns:apim="http://apim.api.platform.boomi.com/"
    	<soapenv:Header/>
    	<soapenv:Body>
    		<soap:update>
    			<apim:object xsi:type="apim:AuthenticationSourceRole" 
    			roleName="ADMINONE" 
    			authSourceId="991ce877-a0cf-41a5-b87c-9eb9a0376e3b" 
    			roleId="29c72cea-bb39-482d-aa9a-76be2a33fde3" 
    			xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"<apim:description>Create and maintain roles. User access to an API can be restricted by associating the API with roles. Roles are then assigned to groups and users are assigned groups.</apim:description>
    			</apim:object>
         	</soap:update>
      	</soapenv:Body>
    </soapenv:Envelope>
    ```

    Response:

    ```
    <S:Envelope xmlns:S="http://schemas.xmlsoap.org/soap/envelope/">
    	<S:Body>
    		<ns4:updateResponse xmlns:apim="http://apim.api.platform.boomi.com/" xmlns:bns="http://api.platform.boomi.com/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:ns4="http://soap.apim.api.platform.boomi.com/">
    			<apim:result xsi:type="apim:AuthenticationSourceRole" roleName="ADMINONE" authSourceId="991ce877-a0cf-41a5-b87c-9eb9a0376e3b" roleId="29c72cea-bb39-482d-aa9a-76be2a33fde3">
    				<apim:description>Create and maintain roles. User access to an API can be restricted by associating the API with roles. Roles are then assigned to groups and users are assigned groups.</apim:description>
    			</apim:result>
    		</ns4:updateResponse>
    	</S:Body>
    </S:Envelope>
    ```

-   **DELETE operation**

    Request:

    ```
    <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:soap="http://soap.apim.api.platform.boomi.com/" xmlns:apim="http://apim.api.platform.boomi.com/">
    	<soapenv:Header/>
    	<soapenv:Body>
    		<soap:delete>
    			<apim:objectType>AuthenticationSourceRole</apim:objectType>
    			<apim:objectId>90278d09-e8eb-412c-8621-66e71e187ab5</apim:objectId>
    		</soap:delete>
    	</soapenv:Body>
    </soapenv:Envelope>
    ```

    Response:

    ```
    <S:Envelope xmlns:S="http://schemas.xmlsoap.org/soap/envelope/">
    	<S:Body>
    		<ns4:deleteResponse xmlns:apim="http://apim.api.platform.boomi.com/" xmlns:bns="http://api.platform.boomi.com/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:ns4="http://soap.apim.api.platform.boomi.com/">
    			<apim:successful>true</apim:successful>
    		</ns4:deleteResponse>
    	</S:Body>
    </S:Envelope>
    ```