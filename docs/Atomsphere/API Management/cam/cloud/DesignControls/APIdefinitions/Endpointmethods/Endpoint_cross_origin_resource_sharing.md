---
sidebar_position: 9
---

# Endpoint Cross-Origin Resource Sharing

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-dc9ac510-7a85-4df1-a339-32926ece9a62"/>
</head>

Endpoint Cross-Origin Resource Sharing is a W3C standard that defines how the browser and server should interact when cross-domain requests are made. 

The following table described the fields on the **Endpoint Cross-Origin Resource Sharing** page. 

|**Field** |**Description** |
| ----- | ----- |
|Allow CORS Requests from any domain|When the option is enabled, and an appropriate CORS pre-flight request is made, the Traffic Manager handles the request and prepares an appropriate pre-flight response on behalf of the back-end host server. For the actual cross-domain request that needs to be made to a back-end system, the Traffic Manager adds appropriate CORS headers, such as Access-Control-Allow-Origin, Access-Control-Allow-Methods. These headers are added only after the Traffic Manager checks against configured rules before passing the request through the host server. If the configured rules do not allow the cross-domain request, an error response is sent for that particular cross-domain request. |
|Sub-domain matching allowed?|If disabled, exact matching will be done on the Origin header on incoming requests, against allowed origins specified. |
|List of headers allowed|List of headers used to validate and determine what can be added to Access-Control-Allow header. Leave this field blank to allow any incoming header. |
|List of headers to expose|List of headers that will be added to Access-Control-Expose-Headers on the response. |
|Are cookies allowed?|If enabled, Access-Control-Allow-Credentials is set to true on the response, which controls whether credentialed requests or cookies are allowed. |
|Max Age for CORS Pre Flight (minutes)|The maximum time for which the pre-flight request results are allowed to be cached by the calling application. |

