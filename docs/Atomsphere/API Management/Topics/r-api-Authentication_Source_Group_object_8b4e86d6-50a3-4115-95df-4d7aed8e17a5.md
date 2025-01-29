# Authentication Source Group object 

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-8b4e86d6-50a3-4115-95df-4d7aed8e17a5"/>
</head>


The Authentication Source Group object enables you to create, update, delete, query, or get an Authentication Source Group without using the API Management interface.

## Structure

```java
<AuthenticationSourceGroup groupName="" groupId="" authSourceId="" description="" roles=""> </AuthenticationSourceGroup>
```

|Field|Type|Description|
|-----|----|-----------|
|groupName|*string*|The name of the Authentication Source Group.|
|groupId|*string*|A unique ID for the Authentication Source Group.|
|authSourceId|*string*|A unique ID for the Authentication Source.|
|description|*string*|A description of the Authentication Source Group.|
|roles|*string*|A list of roles consisting of the roleId and roleName.|

## Supported operations 

The following operations support the Authentication Source Group object:

| GET        | QUERY       | CREATE      | UPDATE      | DELETE      |
|------------|-------------|-------------|-------------|-------------|
| ✅ Supported | ✅ Supported | ✅ Supported | ✅ Supported | ✅ Supported |


You can use the following fields as QUERY filters for the Authentication Source Group object:

|Field|Allowed values|
|-----|--------------|
|groupName|Any string value.|
|roleName|Any string value.|
|authSourceId|Any string value.|

## RESTish implementation 

-   **GET operation**

    Send an HTTP GET to:

    https://api.boomi.com/apim/api/rest/v1/accountId/AuthenticationSourceGroup/id

    where accountId is the Boomi API Management account from which you authenticate and id is the Authentication Source Group objectyou are attempting to GET.

    For a JSON response, send the request with the following HTTP header:

    `Accept: application/json`

    JSON response:

    ```
    {
      "@type": "AuthenticationSourceGroup",
      "description": "Boomi testing",
      "groupName": "new group",
      "groupId": "d2694eb5-d5b2-43c9-a655-903c3fca9e07",
      "authSourceId": "cbdc9f32-cf7f-4fe8-a6df-c9e4ad987552",
      "roles":[
        {
          "roleId":"1333507d-742c-4fb2-bf4b-b9221afa6b91",
          "roleName":"new role"
        }
      ]
    }
    ```

-   **QUERY operation**

    Send an HTTP POST to:

    https://api.boomi.com/apim/api/rest/v1/accountId/AuthenticationSourceGroup/query

    where *accountId* is the ID of the authenticating account for the request.

    For a JSON request, send the request with the following HTTP header:

    `Content-Type: application/json`

    JSON request \(for all roles\):

    ```
    { 
      "QueryFilter" : { 
        "expression" : {
          "argument" : [ 
            "cbdc9f32-cf7f-4fe8-a6df-c9e4ad987552" 
          ], 
          "operator" : "EQUALS", 
          "property" : "authSourceId" 
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
          "@type":"AuthenticationSourceGroup",
          "roles":[
            {
              "@type":"AuthSourceRole",
              "roleId":"1333507d-742c-4fb2-bf4b-b9221afa6b91",
              "roleName":"new role"
            }
          ],
          "groupId":"708ddfef-dde3-4853-beab-6d9834ab2013",
          "authSourceId":"cbdc9f32-cf7f-4fe8-a6df-c9e4ad987552",
          "groupName":"test95"
        }
      ],
      "numberOfResults":1
    }
    ```

-   **CREATE operation**

    Send an HTTP POST to:

    https://api.boomi.com/apim/api/rest/v1/accountId/AuthenticationSourceGroup/

    where *accountId* is the API Management account with which you are authenticating.

    For a JSON request, send the request with the following HTTP header:

    `Content-Type: application/json`

    JSON request:

    ```
    { 
      "authSourceId" : "cbdc9f32-cf7f-4fe8-a6df-c9e4ad987552", 
      "groupName" : "1333507d-742c-4fb2-bf4b-b9221afa6b91Name",
      "description" : "newRole description" 
      "roles":[
        {
          "roleId":"1333507d-742c-4fb2-bf4b-b9221afa6b91",
          "roleName":"new role"
        }
      ] 
    }
    
    ```

    For a JSON response, send the request with the following HTTP header:

    `Accept: application/json`

    JSON response:

    ```
    {
      "@type": "AuthenticationSourceGroup",
      "description": "newRole description",
      "groupName": "1333507d-742c-4fb2-bf4b-b9221afa6b91Name",
      "groupId": "d2694eb5-d5b2-43c9-a655-903c3fca9e07",
      "authSourceId": "cbdc9f32-cf7f-4fe8-a6df-c9e4ad987552",
      "roles": [
        {
          "roleId":"1333507d-742c-4fb2-bf4b-b9221afa6b91",
          "roleName":"new role",
        }
      ]
    }
    ```

-   **UPDATE operation**

    Send an HTTP POST to:

    https://api.boomi.com/apim/api/rest/v1/accountId/AuthenticationSourceGroup/id/update

    where *accountId* is the API Management account with which you are authenticating, and id is the Authentication Source Group object you are attempting to UPDATE.

    For a JSON request, send the request with the following HTTP header:

    `Content-Type: application/json`

    JSON request:

    ```
    { 
      "description" : "this is a group with roles associated with the name", 
      "roles" : [ ], 
      "groupId" : "a8efcb51-9dfe-4d58-a42c-7d805bf8948b", 
      "authSourceId" : "cbdc9f32-cf7f-4fe8-a6df-c9e4ad987552", 
      "groupName" : "1333507d-742c-4fb2-bf4b-b9221afa6b91NameUpdated" 
    }
    ```

    For a JSON response, send the request with the following HTTP header:

    `Accept: application/json`

    JSON response:

    ```
    {
      "@type": "AuthenticationSourceGroup",
      "description": "this is a group with roles associated with the name",
      "groupName": "1333507d-742c-4fb2-bf4b-b9221afa6b91NameUpdated",
      "groupId": "a8efcb51-9dfe-4d58-a42c-7d805bf8948b",
      "authSourceId": "cbdc9f32-cf7f-4fe8-a6df-c9e4ad987552",
      "roles": []
    }
    ```

-   **DELETE operation**

    Send an HTTP DELETE to:

    https://api.boomi.com/apim/api/rest/v1/accountId/AuthenticationSourceGroup/id

    where *accountId* is the API Management account with which you are authenticating, and id is the Authentication Source Group object you are attempting to DELETE.

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
             <!--Optional:-->
             <apim:objectType>AuthenticationSourceGroup</apim:objectType> 
             <!-Optional:-> 
             <apim:objectId>f52ad15e-1658-4040-83a1-fafed4ad18e1</apim:objectId>
          </soap:get>
       </soapenv:Body>
    </soapenv:Envelope>
    ```

    Response:

    ```
    <S:Envelope xmlns:S="http://schemas.xmlsoap.org/soap/envelope/">
       <S:Body>
          <ns4:getResponse xmlns:apim="http://apim.api.platform.boomi.com/" xmlns:bns="http://api.platform.boomi.com/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:ns4="http://soap.apim.api.platform.boomi.com/"> 
             <apim:result xsi:type="apim:AuthenticationSourceGroup" groupName="b7afd120-cb9d-4b14-af17-3a816a43b94aName" authSourceId="cbdc9f32-cf7f-4fe8-a6df-c9e4ad987552" groupId="f52ad15e-1658-4040-83a1-fafed4ad18e1"> 
                <apim:description>Create group with Role</apim:description> 
                <apim:roles roleName="0fe41b55-fc9b-4b10-9126-dd38a2bc10a7" roleId="46f97bc4-5d72-462c-bb29-ad98de7fefa6"/> 
             </apim:result>
          </ns4:getResponse>
       </S:Body>
    </S:Envelope>
    ```

-   **QUERY operation**

    The following example queries the Authentication Source Group named *CreateTest1*.

    Request:

    ```
    <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:soap="http://soap.apim.api.platform.boomi.com/" 
            xmlns:apim="http://apim.api.platform.boomi.com/" xmlns:api="http://api.platform.boomi.com/">
       <soapenv:Header/>
       <soapenv:Body>
          <soap:query>
             <!--Optional:-->
             <apim:objectType>AuthenticationSourceGroup</apim:objectType> 
             <!-Optional:-> 
             <api:queryConfig> 
                <api:QueryFilter> 
                <api:expression operator="EQUALS" xsi:type="api:SimpleExpression" property="groupName" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"> 
                   <!-Zero or more repetitions:-> 
                   <api:argument>CreateTest1</api:argument> 
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
          <ns4:queryResponse xmlns:apim="http://apim.api.platform.boomi.com/" xmlns:bns="http://api.platform.boomi.com/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:ns4="http://soap.apim.api.platform.boomi.com/"> 
             <apim:results numberOfResults="1"> 
                <bns:result xsi:type="apim:AuthenticationSourceGroup" groupName="CreateTest1" authSourceId="cbdc9f32-cf7f-4fe8-a6df-c9e4ad987552" groupId="f52ad15e-1658-4040-83a1-fafed4ad18e1"> 
                   <apim:description>Create group with Role</apim:description> 
                   <apim:roles roleName="0fe41b55-fc9b-4b10-9126-dd38a2bc10a7" roleId="46f97bc4-5d72-462c-bb29-ad98de7fefa6"/>
                </bns:result>
             </apim:results>
          </ns4:queryResponse>
       </S:Body>
    </S:Envelope>
    ```

-   **CREATE operation**

    Request:

    ```
    <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:soap="http://soap.apim.api.platform.boomi.com/" xmlns:apim="http://apim.api.platform.boomi.com/" xmlns:api="http://api.platform.boomi.com/">
       <soapenv:Header/>
       <soapenv:Body>
          <soap:create>
             <!-Optional:-> 
             <apim:object xsi:type="apim:AuthenticationSourceGroup" authSourceId="cbdc9f32-cf7f-4fe8-a6df-c9e4ad987552" groupName="b7afd120-cb9d-4b14-af17-3a816a43b94aName" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"> 
             <!-Optional:-> 
             <apim:description>Create group with Role</apim:description> 
             <!-Zero or more repetitions:-> 
             <apim:roles roleName="0fe41b55-fc9b-4b10-9126-dd38a2bc10a7" roleId="46f97bc4-5d72-462c-bb29-ad98de7fefa6"/> 
           </apim:object>
          </soap:create>
       </soapenv:Body>
    </soapenv:Envelope>
    ```

    Response:

    ```
    <S:Envelope xmlns:S="http://schemas.xmlsoap.org/soap/envelope/">
       <S:Body>
          <ns4:createResponse xmlns:apim="http://apim.api.platform.boomi.com/" xmlns:bns="http://api.platform.boomi.com/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:ns4="http://soap.apim.api.platform.boomi.com/"> 
             <apim:result xsi:type="apim:AuthenticationSourceGroup" groupName="b7afd120-cb9d-4b14-af17-3a816a43b94aName" authSourceId="cbdc9f32-cf7f-4fe8-a6df-c9e4ad987552" groupId="f52ad15e-1658-4040-83a1-fafed4ad18e1"> 
                <apim:description>Create group with Role</apim:description> 
                <apim:roles roleName="0fe41b55-fc9b-4b10-9126-dd38a2bc10a7" roleId="46f97bc4-5d72-462c-bb29-ad98de7fefa6"/> 
             </apim:result>
          </ns4:createResponse>
       </S:Body>
    </S:Envelope>
    ```

-   **UPDATE operation**

    Request:

    ```
    <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:soap="http://soap.apim.api.platform.boomi.com/" xmlns:apim="http://apim.api.platform.boomi.com/" xmlns:api="http://api.platform.boomi.com/">
       <soapenv:Header/>
       <soapenv:Body>
          <soap:update>
             <!-Optional:-> 
             <apim:object xsi:type="apim:AuthenticationSourceGroup" groupId="f52ad15e-1658-4040-83a1-fafed4ad18e1" authSourceId="cbdc9f32-cf7f-4fe8-a6df-c9e4ad987552" groupName="testGroupName" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"> 
                <!-Optional:-> 
                <apim:description>Desc Updated</apim:description> 
                <!-Zero or more repetitions:->
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
             <apim:result xsi:type="apim:AuthenticationSourceGroup" groupName="testGroupName" authSourceId="cbdc9f32-cf7f-4fe8-a6df-c9e4ad987552" groupId="f52ad15e-1658-4040-83a1-fafed4ad18e1"> 
                <apim:description>Desc Updated</apim:description> 
             </apim:result>
          </ns4:updateResponse>
       </S:Body>
    </S:Envelope>
    ```

-   **DELETE operation**

    Request:

    ```
    <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" 
    xmlns:soap="http://soap.apim.api.platform.boomi.com/" 
    xmlns:apim="http://apim.api.platform.boomi.com/">
       <soapenv:Header/>
       <soapenv:Body>
          <soap:delete>
             <apim:objectType>AuthenticationSourceGroup</apim:objectType>
             <apim:objectId>5f0129a4-6134-4851-8699-64413d809efe</apim:objectId>
          </soap:delete>
       </soapenv:Body>
    </soapenv:Envelope>
    ```

    Response:

    ```
    <S:Envelope xmlns:S="http://schemas.xmlsoap.org/soap/envelope/">
       <S:Body>
          <ns4:deleteResponse xmlns:apim="http://apim.api.platform.boomi.com/" 
          xmlns:bns="http://api.platform.boomi.com/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
          xmlns:ns4="http://soap.apim.api.platform.boomi.com/">
             <apim:successful>true</apim:successful>
          </ns4:deleteResponse>
       </S:Body>
    </S:Envelope>
    ```