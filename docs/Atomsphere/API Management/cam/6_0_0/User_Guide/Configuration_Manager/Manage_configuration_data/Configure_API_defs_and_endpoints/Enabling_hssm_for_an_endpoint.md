---
sidebar_position: 2
---

# Enabling Highly Secure Secret Management for an Endpoint

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-035741ad-a745-4a20-b46f-cc38daa3bef5"/>
</head>

The Highly Secure Secret Management (HSSM) involves securing credentials to protect sensitive information. 

Local Edition supports the sending request with the apikey and authentication credentials in the authorization header for a service endpoint that requires apikey and basic authentication. For both non-HSSM and HSSM-enabled areas, the apikey from authorization header is used to identify the service endpoint of an application. For the HSSM-enabled area, the apikey and secret are hashed during authentication to match the stored credentials.

Authentication is processed by an authenticator adapter and apikey is retrieved by the apikey locator. Since the authenticator adapter has the same name as the apikey locator for a service endpoint, the name of the authenticator adapter is also used for the apikey locator.

As a result, the name for the authenticator and apikey locator to use is based on the authenticator set for the service endpoint.

 
