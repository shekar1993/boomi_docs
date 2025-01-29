---
sidebar_position: 1
---

# Overview of SOAP WS-Security Connector

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-88c35931-0809-4774-82ed-e2d5944e361a"/>
</head>

## Release Notes

|**API Management (Release Date)** |**Release Type** |**Release Description** |
| --- | ---- | ---- |
|October 8, 2020 |New Feature |Supports SOAP WS-security specs to validate SOAP API calls for SOAP message signature, apply encryption/decryption to enforce integrity and confidentiality on messages. |
| | |Supports optionally creating the security header with the timestamp component in the outgoing request to the backend API server. |

## Description

**Web Services Security (WS-Security, WSS)** is an extension to SOAP to apply security to web services. It is a member of the Web service specifications and was published by OASIS. 

The protocol specifies how integrity and confidentiality can be enforced on messages and allows the communication of various security token formats, such as Security Assertion Markup Language (SAML), Kerberos, and X.509. Its main focus is the use of XML Signature and XML Encryption to provide end-to-end security. 

This connector enforces WS-Security policies that can be configured with options for Encryption, Signature and Timestamp. 

If Encryption is configured, the incoming request is encrypted before proxying the call to the backend API and the backend response is decrypted before sending it to the client. 

If Signature is configured, the incoming request creates the appropriate SOAP header with the signature components, and the signature is verified on the outgoing response. 

If Timestamp is configured, the incoming request creates the appropriate SOAP header with the timestamp component. 

## Related Links

- [Usage](Usage_6.md)

- [Design and Implementation](Design_and_implementation_27.md)

- [Configuring Endpoint Call Processing](Configuring_endpoint_call_processing_12.md)

- [Local Edition Porting and Chaining](Porting_and_chaining_3.md)
