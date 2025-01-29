---
sidebar_position: 5
---

# Using Interactive Documentation

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-2ba8028d-1b34-4225-a189-542a6b631264"/>
</head>

You can test an API from the **Interactive Documentation** page of your Portal. You need to add /interactive-documentation to the client domain URL to access the Interactive Documentation page. 

The Interactive Documentation URL is in the following format: 

`*https://developer.<clientname>.com/interactive-documentation*`

For example, `*http://acme.com/interactive-documentation*`

## Enabling the Endpoint for OpenAPI 3 (Swagger)

1. Ensure the following are on HTTPS: 

   - Developer Portal 

   - URLs in the swagger 

   - Token 

   - Resource Endpoints 

2. In the API Management Control Center, navigate to **Design > API Definitions > your API name > Endpoint Methods > Endpoint CrossOrigin Resource Sharing**, and enable CrossOrigin Resource Sharing (CORS) for both token and resource endpoints. 

3. Enable the HTTP OPTIONS method for the resource endpoint. 

Performing these steps ensure that you avoid browser-mixed content and cross-origin restrictions. 

## Using OAuth2 in OpenAPI 3 (Swagger)

The following is an example of the OpenAPI 3.0 specification that uses OAuth 2.0. 

```xml
{
"openapi": "3.0.0",
"info": {
"title": "Acme OAuth API",
"description": "",
"contact": {},
"version": "1.0"
},
"servers": [
{
"url": "https://server.api.acme.com/acmeoauth/v1",
"variables": {}
}
],
"paths": {
"/product": {
"get": {
"tags": [
"Default"
],
"summary": "v1 product",
"description": "",
"operationId": "V1Product",
"parameters": [
{
"name": "productId",
"in": "query",
"description": "",
"style": "form",
"explode": true,
"schema": {
"type": "string"
}
}
],
"responses": {
"200": {
"description": "",
"headers": {},
"content": {
"text/plain": {
"schema": {
"type": "object"
}
}
}
}
},
"deprecated": false,
"security": [
{
"oauthToken": []
}
]
}
},
"/order": {
"get": {
"tags": [
"Default"
],
"summary": "v1 order",
"description": "",
"operationId": "V1Order",
"parameters": [
{
"name": "orderId",
"in": "query",
"description": "",
"style": "form",
"explode": true,
"schema": {
"type": "string"
}
}
],
"responses": {
"200": {
"description": "",
"headers": {},
"content": {
"text/plain": {
"schema": {
"type": "object"
}
}
}
}
},
"deprecated": false,
"security": [
{
"oauthToken": []
}
]
}
}
},
"components": {
  "securitySchemes": {
"oauthToken": {
"type": "oauth2",
"description": "Mashery OAuth Idp",
"flows": {
"clientCredentials": {
"tokenUrl": "https://server.api.acme.com/oauth2/auth/c2p49gb3my95ym5hgsxf9wav",
"scopes": {}
}
}
}
}
},
"security": [
{
"oauthToken": []
}
],
"tags": [
{
"name": "Default",
"description": ""
}
]
}
```




