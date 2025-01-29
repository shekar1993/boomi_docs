---
sidebar_position: 2
---

# Usage

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-5a6c650d-403d-48ae-b813-ea669d94eac1"/>
</head>

- Third party Ping Federate credentials 'client\_id and/or client\_id:client\_secret and Ping Federate server base URL must be configured by the customer/client. 

- API Management should be able to access third-party Ping Auth server remotely using credentials.

- Confidential 'client\_id:client\_secret' and 'username:password' should be Base64-encoded in API Management. 

- Third party Ping Auth server is responsible for managing OAuth2 access token (Generate, Validate, Revoke and Delete). 

- Third party Ping Auth server must allow OAuth2.0 access token creation and validation remotely. 

- API Management does not manage or store (persistent storage of Ping Auth server generated OAuth2 access token) Ping OAuth2 access token. 
