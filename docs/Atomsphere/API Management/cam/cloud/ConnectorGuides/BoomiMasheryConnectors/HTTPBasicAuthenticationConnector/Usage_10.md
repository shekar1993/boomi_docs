---
sidebar_position: 2
---

# Usage

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-cc7d72b2-f74b-4319-a16d-fe5bbf5f4b51"/>
</head>

- The Connector supports basic authentication between user client and API Management gateway according to [rfc](https://tools.ietf.org/html/rfc7617). 

- Username specified as `client_id(package key)` and password specified as secret must be configured while defining package key for an application. Refer to How To Configure Basic Credentials in API Management Control Center sub section under Configuring Endpoint Call Processing section. 

## CAUTION

"The Basic authentication scheme is not a secure method of user authentication, nor does it in any way protect the entity.The most serious flaw of Basic authentication is that it results in the cleartext transmission of the user's password over the physical network. Many other authentication schemes address this problem.Because Basic authentication involves the cleartext transmission of passwords, it SHOULD NOT be used (without enhancements such as HTTPS [RFC2818]) to protect sensitive or valuable information." 

Above excerpt is from [Basic Auth RFC](https://tools.ietf.org/html/rfc7617#section-4)

Industry best secure practices & Boomi recommends to use better authentication schemes like OAuth2.0 access token (natively supported by API Management), third party based [JWT token Authentication Connector](HTTPS://DOCS.MASHERY.COM/CONNECTORSGUIDE/GUID-86B923C0-9FC7-47F6-89FF-C9C54006D53F.HTML) or via third party based [OAuth2.0 access token validation Connector](HTTPS://DOCS.MASHERY.COM/CONNECTORSGUIDE/GUID-6EA7CEBC-ED8B-4A94-92AC-4FF18374E7CC.HTML). 

## FAQs

**What other authentication options are available out of box besides HTTP Basic Auth in API Management?**

Other authentication options are supported in API Management product are [API Key Authentication](HTTPS://DOCS.MASHERY.COM/DESIGN/GUID-517A43A4-F054-41D1-9F5C-C736B557AF88.HTML) / [Mashery OAuth2.0 access token](HTTP://DOCS.MASHERY.COM/DESIGN/GUID-2D1DEABD-0630-41BA-807C-FD139B80482B.HTML). In addition, the following API security features are powered by Boomi Cloud API Management connectors: 

- [Third Party IDP based JWT token](http://docs.mashery.com/connectorsguide/jwt-authentication-connector.xml)

- [Third party IDP based OAuth2.0 access token](http://docs.mashery.com/connectorsguide/oauth20-token-authentication-connector.xml)

**Is Connector compliant with RFC if Authorization header is not present in the request or credentials are not present in this header with Basic scheme?**

Yes. 

**What status code Connector respond if Authorization header is not present in the request or credentials are not present in this header with Basic scheme?**

In the above scenario, the Connector responds with 401 Unauthorized response along with WWW-Authenticate header to the user client. 

**Does Connector support backward compatibility for API Management platform error response codes as Proxy server. Refer to https://support.mashery.com/docs/read/mashery_api/20_reporting/Authentication?**

Yes. The Connector supports configurable parameter `Keep_Mashery_Default_Response_Code` to achieve it. If parameter is configured as true, then Connector responds with 403 response compliant with API Management platform error response codes. 
