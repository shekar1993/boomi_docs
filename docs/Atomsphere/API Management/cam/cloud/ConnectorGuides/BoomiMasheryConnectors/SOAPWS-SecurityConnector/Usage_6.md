---
sidebar_position: 2
---

# Usage

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-d9fa7ebf6-43ef-4aeb-813c-013d7f9bab41"/>
</head>

- Supports both SOAP protocol version (SOAP 1.1 and SOAP 1.2). 

- Supports both pre processing of user client and post processing of backend response. 

- Supports default charset=UTF-8 for Content-Type if not provided. 

## SOAP WS Security Pre Processing

|**S. No.** |**Pre-Input Data** |**Request SOAP Message** |**API Management Gateway Action** |
| --- | --- | ---- | ---- |
|1 |No Configuration |<p>\<?xml version="1.0" encoding="utf-8"?\></p><p>\<soap:Envelope</p><p>xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"</p><p>xmlns:xsd="http://www.w3.org/2001/XMLSchema"</p><p>xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"\></p><p>\<soap:Body\></p><p>\<Add</p><p>xmlns="http://tempuri.org/"\></p><p>\<intA\>5\</intA\></p><p>\<intB\>5\</intB\></p><p>\</Add\></p><p>\</soap:Body\></p><p>\</soap:Envelope\></p>|With no configuration, there is no impact on the outgoing request to the backend API server. |
|2 |enable\_timestamp:true |<p>\<?xml version="1.0" encoding="utf-8"?\></p><p>\<soap:Envelope</p><p>xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"</p><p>xmlns:xsd="http://www.w3.org/2001/XMLSchema"</p><p>xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"></p><p>\<soap:Body\></p><p>\<Add</p><p>xmlns="http://tempuri.org/"></p><p>\<intA\>5\</intA\></p><p>\<intB\>5\</intB\></p><p>\</Add\></p><p>\</soap:Body\></p><p>\</soap:Envelope\></p>|With this configuration, the Connector creates the security header with the timestamp component in the outgoing request to the backend API server. It adds default timestamp of 300 seconds after that message expires. |
|3 |<p>enable\_timestamp:true </p><p>timestamp\_ttl:600 </p>|<p>\<?xml version="1.0" encoding="utf-8"?\></p><p>\<soap:Envelope</p><p>xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"</p><p>xmlns:xsd="http://www.w3.org/2001/XMLSchema"</p><p>xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"\></p><p>\<soap:Body\></p><p>\<Add</p><p>xmlns="http://tempuri.org/"\></p><p>\<intA\>5\</intA\></p><p>\<intB\>5\</intB\></p><p>\</Add\></p><p>\</soap:Body\></p><p>\</soap:Envelope\></p>|With this configuration, the Connector creates the security header with the timestamp of 600 seconds after that message expires. |
|4 |enable\_signature:true |<p>\<?xml version="1.0" encoding="utf-8"?\></p><p>\<soap:Envelope</p><p>xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"</p><p>xmlns:xsd="http://www.w3.org/2001/XMLSchema"</p><p>xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"\></p><p>\<soap:Body\></p><p>\<Add</p><p>xmlns="http://tempuri.org/"></p><p>\<intA\>5\</intA\></p><p>\<intB\>5\</intB\></p><p>\</Add\></p><p>\</soap:Body\></p><p>\</soap:Envelope\></p>|With this configuration, the Connector signs the SOAP request by adding security header with signature details. As signature algorithm is not configured in pre-inputs, by default, it uses, RSA (Rivest-Shamir-Adleman) algorithm with Secure Hash Algorithm 1. (**RSA with SHA1 i.e. SHA1withRSA**) |
|5 |<p>enable\_signature:true </p><p>signature\_algorithm:SHA1withRSA </p>|<p>\<?xml version="1.0" encoding="utf-8"?\></p><p>\<soap:Envelope</p><p>xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"</p><p>xmlns:xsd="http://www.w3.org/2001/XMLSchema"</p><p>xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"\></p><p>\<soap:Body\></p><p>\<Add</p><p>xmlns="http://tempuri.org/"\></p><p>\<intA\>5\</intA\></p><p>\<intB\>5\</intB\></p><p>\</Add\></p><p>\</soap:Body\></p><p>\</soap:Envelope\></p>|<p>With this configuration, the Connector signs the SOAP request by adding security header with signature algorithm **SHA1withRSA**. </p><p>Currently supported values for signature\_algorithm pre input are, </p><p>**RSA Algorithms** : SHA1withRSA, SHA224withRSA, SHA256withRSA, SHA384withRSA and SHA512withRSA. </p><p>**DSA Algorithms** : SHA1withDSA and SHA256withDSA. </p><p>**ECDSA Algorithms** : SHA1withECDSA, SHA224withECDSA, SHA256withECDSA, SHA384withECDSA and SHA512withECDSA. </p>|
|6 |enable\_encyption:true |<p>\<?xml version="1.0" encoding="utf-8"?\></p><p>\<soap:Envelope</p><p>xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"</p><p>xmlns:xsd="http://www.w3.org/2001/XMLSchema"</p><p>xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"\></p><p>\<soap:Body\></p><p>\<Add</p><p>xmlns="http://tempuri.org/"\></p><p>\<intA\>5\</intA\></p><p>\<intB\>5\</intB\></p><p>\</Add\></p><p>\</soap:Body\></p><p>\</soap:Envelope\></p>|<p>With this configuration, the Connector encrypts SOAP request body and encryption details are updated in security header. As encryption\_method is not configured in pre-input, by default, the Connector, uses Advanced Encryption Standard (AES) algorithm with a key length of 128 bits (http://www.w3.org/2001/04/xmlenc#aes128-cbc). i.e. **aes128-cbc**. </p><p>Connector uses default key transport method as **RSAOEP** (http://www.w3.org/2001/04/xmlenc#rsa-oaep-mgf1p). </p>|
|7 |<p>enable\_encyption:true </p><p>encryption\_algorithm:aes128-cbc </p>|<p>\<?xml version="1.0" encoding="utf-8"?\></p><p>\<soap:Envelope</p><p>xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"</p><p>xmlns:xsd="http://www.w3.org/2001/XMLSchema"</p><p>xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"\></p><p>\<soap:Body\></p><p>\<Add</p><p>xmlns="http://tempuri.org/"\></p><p>\<intA\>5\</intA\></p><p>\<intB\>5\</intB\></p><p>\</Add\></p><p>\</soap:Body\></p><p>\</soap:Envelope\></p>|<p>With this configuration, the Connector encrypts SOAP request body and encryption details are updated in security header with encryption algorithm **aes128-cbc** (http://www.w3.org/2001/04/xmlenc#aes128-cbc). </p><p>Connector uses default key transport method as **RSAOEP** (http://www.w3.org/2001/04/xmlenc#rsa-oaep-mgf1p) </p><p>Currently supported values for encryption\_algorithm pre input are: </p><p>- tripledes-cbc </p><p>- aes128-cbc </p><p>- aes128-gcm </p><p>- aes192-cbc </p><p>- aes192-gcm </p><p>- aes256-cbc </p><p>- aes256-gcm </p>|
|8 |<p>enable\_encyption:true </p><p>encryption\_algorithm:aes128-cbc </p><p>key\_transport\_method:RSA15 </p>|<p>\<?xml version="1.0" encoding="utf-8"?\></p><p>\<soap:Envelope</p><p>xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"</p><p>xmlns:xsd="http://www.w3.org/2001/XMLSchema"</p><p>xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"\></p><p>\<soap:Body\></p><p>\<Add</p><p>xmlns="http://tempuri.org/"\></p><p>\<intA\>5\</intA\></p><p>\<intB\>5\</intB\></p><p>\</Add\></p><p>\</soap:Body\></p><p>\</soap:Envelope\></p>|<p>With this configuration, the Connector encrypts SOAP request body and encryption details are updated in security header with encryption algorithm **aes128-cbc** (http://www.w3.org/2001/04/xmlenc#aes128-cbc) </p><p>Connector uses transport method as **RSA15** (http://www.w3.org/2001/04/xmlenc#rsa-1\_5) </p><p>Currently supported values for key\_transport\_method pre input are: </p><p>- RSA15 </p><p>- RSAOEP </p>|
|9 |<p>enable\_timestamp:true </p><p>timestamp\_ttl:600 </p><p>enable\_signature:true </p><p>signature\_algorithm:SHA1withRSA </p><p>enable\_encyption:true </p><p>encryption\_algorithm:aes128-cbc </p><p>key\_transport\_method:RSA15 </p>|<p>\<?xml version="1.0" encoding="utf-8"?\></p><p>\<soap:Envelope</p><p>xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"</p><p>xmlns:xsd="http://www.w3.org/2001/XMLSchema"</p><p>xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"\></p><p>\<soap:Body\></p><p>\<Add</p><p>xmlns="http://tempuri.org/"\></p><p>\<intA\>5\</intA\></p><p>\<intB\>5\</intB\></p><p>\</Add\></p><p>\</soap:Body\></p><p>\</soap:Envelope\></p>|<p>With this configuration, the Connector creates the appropriate SOAP security header with the timestamp of 600 seconds. </p><p>Connector signs the SOAP request with **SHA1withRSA** algorithm and it encrypts the SOAP message with **aes128-cbc** algorithm with key transport method as **RSA15.**</p>|

## **SOAP WS Security Post Processing**

|**S. No.** |**Post-Input Data** |**Backend Response SOAP Message** |**API Management Gateway Action** |
| :-: | :-: | :-: | :-: |
|1 |No configuration |Signed and encrypted SOAP response |Connector does not process the response because post inputs are not defined. Connector forwards the response AS-IS to the user client. |
|2 |validate\_signature:true |Signed and encrypted SOAP response |As per the post input SOAP response gets validated and Connector forwards SOAP response to the user client on successful validation. |
|3 |enable\_decryption:true |Signed and encrypted SOAP response |As per the post input SOAP response gets decrypted and Connector forwards SOAP response to the user client on successful decryption. |

## FAQs

**Is Connector compliant with SOAP 1.1 and SOAP 1.2?**

Yes. 

**Is Connector compliant with OASIS Web Services Security specifications?**

Yes, this Connector WSS features support is complaint with WS-Security 1.1 OASIS standard. https://www.oasis-open.org/committees/tc_home.php?wg_abbrev=wss

**Does Connector support SOAP signature validation as well as SOAP encryption/decryption?**

Yes. 

**Which SOAP signature algorithms does this Connector support?**

The Connector supports RSA, DSA and ECDSA based algorithms for SOAP message signature. Refer to Supported Signature and Encryption Algorithm section. 

**Which SOAP encryption algorithms does this Connector support?**

The Connector supports triple DES (3DES) and AES based algorithms for SOAP message encryption. Basically, 3DES is just DES applied three times to the information that is being encrypted. Refer to Supported Signature and Encryption Algorithm section. 

**Which key transport method for encryption does this Connector support?**

The Connector supports **RSA15** and **RSAOAEP** key transport method for SOAP message encryption. Refer to Supported Signature and Encryption Algorithm section. 

## SOAP Message With TimeStamp Example

Pre Input Configuration to sign SOAP message 

```
enable\_timestamp:true
timestamp\_ttl:600
```

**Sample SOAP request**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope
xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"
xmlns:xsd="http://www.w3.org/2001/XMLSchema"
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
<soap:Body>
<employee>
<first-name>Jane</first-name>
<last-name>Doe</last-name>
<address>Paris</address>
<phone-number>123456</phone-number>
</employee>
</soap:Body>
</soap:Envelope>
```

**SOAP message after pre processing** 

```xml
<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope
xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"
xmlns:xsd="http://www.w3.org/2001/XMLSchema"
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
<soap:Header>
<wsse:Security
xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext1.0.xsd"
xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility1.0.xsd"
soap:mustUnderstand="1">
<wsu:Timestamp wsu:Id="TS-17F5C62D7A7173578515941318864661">
<wsu:Created>2020-07-07T14:24:46.465Z</wsu:Created>
<wsu:Expires>2020-07-07T14:34:46.465Z</wsu:Expires>
</wsu:Timestamp>
</wsse:Security>
</soap:Header>
<soap:Body>
<employee>
<first-name>Jane</first-name>
<last-name>Doe</last-name>
<address>Paris</address>
<phone-number>123456</phone-number>
</employee>
</soap:Body>
</soap:Envelope>
```

## Signed SOAP Message Example

Pre Input Configuration to sign SOAP message 

```xml
enable_signature:true
signature_algorithm:SHA1withDSA
```

**Sample SOAP request** 

```xml
<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope
xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"
xmlns:xsd="http://www.w3.org/2001/XMLSchema"
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
<soap:Body>
<employee>
<first-name>Jane</first-name>
<last-name>Doe</last-name>
<address>Paris</address>
<phone-number>123456</phone-number>
</employee>
</soap:Body>
</soap:Envelope>
```

**Signed SOAP message after pre processing**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope
xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"
xmlns:xsd="http://www.w3.org/2001/XMLSchema"
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
<soap:Header>
<wsse:Security
xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext1.0.xsd"
xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility1.0.xsd"
soap:mustUnderstand="1">
<wsse:BinarySecurityToken
EncodingType="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-soapmessage-security-1.0#Base64Binary"
ValueType="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-x509-tokenprofile-1.0#X509v3"
wsu:Id="X509-FC8E3BCB479F63B9DB15941274944241">
MIIDMzCCAvGgAwIBAgIEH4jC+jALBgcqhkjOOAQDBQAwazELMAkGA1UEBhMCSU4xFDASBg
NVBAgTC01haGFyYXNodHJhMQ0wCwYDVQQHEwRQdW5lMQ4wDAYDVQQKEwVUaWJjbzE
UMBIGA1UECxMLRW5naW5lZXJpbmcxETAPBgNVBAMTCFByYXNoYW50MB4XDTIwMDUxOT
A5MzMxMFoXDTIwMDgxNzA5MzMxMFowazELMAkGA1UEBhMCSU4xFDASBgNVBAgTC01ha
GFyYXNodHJhMQ0wCwYDVQQHEwRQdW5lMQ4wDAYDVQQKEwVUaWJjbzEUMBIGA1UECx
MLRW5naW5lZXJpbmcxETAPBgNVBAMTCFByYXNoYW50MIIBuDCCASwGByqGSM44BAEwg
gEfAoGBAP1/U4EddRIpUt9KnC7s5Of2EbdSPO9EAMMeP4C2USZpRV1AIlH7WT2NWPq/xfW6
MPbLm1Vs14E7gB00b/JmYLdrmVClpJ+f6AR7ECLCT7up1/63xhv4O1fnxqimFQ8E+4P208UewwI
1VBNaFpEy9nXzrith1yrv8iIDGZ3RSAHHAhUAl2BQjxUjC8yykrmCouuEC/BYHPUCgYEA9+Gghd
abPd7LvKtcNrhXuXmUr7v6OuqC+VdMCz0HgmdRWVeOutRZT+ZxBxCBgLRJFnEj6EwoFhO3zw
kyjMim4TwWeotUfI0o4KOuHiuzpnWRbqN/C/ohNWLx+2J6ASQ7zKTxvqhRkImog9/hWuWfBpKLZ
l6Ae1UlZAFMO/7PSSoDgYUAAoGBALUaKzlOSzm33WbANONrHMwP0iMSSOfC1tJrfHMz9yXez
YpDtAYgGSuhFaKjtC+rh53gW2jB5k5yyToDHSBDnE0JmQvXIGLgEE8SOzIFemPyFWdHIIxZMh
GnN0u3GsH7LP9JwQCXRbgYQK2AvFkz1LR3TaTP0iUp+b8mVKBU57oioyEwHzAdBgNVHQ4E
FgQU1gQ/lpHAy5jXb+kO0yUMIn/h3jQwCwYHKoZIzjgEAwUAAy8AMCwCFGYbPTlPl7hf5bv/M/rg
ijvyVKvmAhQ/zm4cxsZRugvuIwtBBW3XHA+GuA==
</wsse:BinarySecurityToken>
<ds:Signature
xmlns:ds="http://www.w3.org/2000/09/xmldsig#" Id="SIGFC8E3BCB479F63B9DB15941274944545">
<ds:SignedInfo>
<ds:CanonicalizationMethod Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#">
<ec:InclusiveNamespaces
xmlns:ec="http://www.w3.org/2001/10/xml-exc-c14n#"
PrefixList="soap xsd xsi" />
</ds:CanonicalizationMethod>
<ds:SignatureMethod Algorithm="http://www.w3.org/2000/09/xmldsig#dsa-sha1" />
<ds:Reference URI="#id-FC8E3BCB479F63B9DB15941274944474">
<ds:Transforms>
<ds:Transform Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#">
<ec:InclusiveNamespaces
xmlns:ec="http://www.w3.org/2001/10/xml-exc-c14n#"
PrefixList="xsd xsi" />
</ds:Transform>
</ds:Transforms>
<ds:DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1" />
<ds:DigestValue>6nG3e+kPmrzdR0x1N5EvEhF7NxI=</ds:DigestValue>
</ds:Reference>
</ds:SignedInfo>
<ds:SignatureValue>G59d59nlKRFuNk7RqsK9MKMhqfQAPsYgBd+ylEbbDih/HyQoChMi/A==</d
s:SignatureValue>
<ds:KeyInfo Id="KI-FC8E3BCB479F63B9DB15941274944272">
<wsse:SecurityTokenReference wsu:Id="STRFC8E3BCB479F63B9DB15941274944293">
<wsse:Reference URI="#X509-FC8E3BCB479F63B9DB15941274944241"
ValueType="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-x509-tokenprofile-1.0#X509v3" />
</wsse:SecurityTokenReference>
</ds:KeyInfo>
</ds:Signature>
</wsse:Security>
</soap:Header>
<soap:Body
xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility1.0.xsd"
wsu:Id="id-FC8E3BCB479F63B9DB15941274944474">
<employee>
<first-name>Jane</first-name>
<last-name>Doe</last-name>
<address>Paris</address>
<phone-number>123456</phone-number>
</employee>
</soap:Body>
</soap:Envelope>
```

In the above-signed request, refer to the following points as per the line number: 

- **Line Number 11**: The binary security token contains the base64binary encoding of the X.509 certificate. This encoding includes the public key that the intended recipient of the SOAP message uses to verify the signature. 

- **Line Number 34**: The algorithm that is used during the hashing process to produce the message digest. 

- **Line Number 35**: The value of the message digest.

- **Line Number 38**: The digest value is then encrypted with the user's private key and included here as the signature value. 

- **Line Number 42**: References the binary security token that contains the public key that is used to verify the signature. 

## Encrypted SOAP Message Example

Pre Input Configuration to encrypt SOAP message 

```xml
enable_encyption:true
encryption_algorithm:tripledes-cbc
key_transport_method:RSA15
```

**Sample SOAP request** 

```xml
<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope
xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"
xmlns:xsd="http://www.w3.org/2001/XMLSchema"
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
<soap:Body>
<employee>
<first-name>Jane</first-name>
<last-name>Doe</last-name>
<address>Paris</address>
<phone-number>123456</phone-number>
</employee>
</soap:Body>
</soap:Envelope>
```

**Encrypted SOAP request after pre processing** 

```xml
<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope
xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"
xmlns:xsd="http://www.w3.org/2001/XMLSchema"
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
<soap:Header>
<wsse:Security
xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-
1.0.xsd"
xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility1.0.xsd"
soap:mustUnderstand="1">
<xenc:EncryptedKey
xmlns:xenc="http://www.w3.org/2001/04/xmlenc#" Id="EKE6F492C42F211191CD15941292714421">
<xenc:EncryptionMethod Algorithm="http://www.w3.org/2001/04/xmlenc#rsa-1_5" />
<ds:KeyInfo
xmlns:ds="http://www.w3.org/2000/09/xmldsig#">
<wsse:SecurityTokenReference>
<wsse:KeyIdentifier
EncodingType="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-soapmessage-security-1.0#Base64Binary"
ValueType="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-x509-tokenprofile-1.0#X509v3">
MIIDTzCCAjegAwIBAgIEfmXDxjANBgkqhkiG9w0BAQUFADBYMQswCQYDVQQGEwJJTjEOMA
wGA1UECBMFc3RhdGUxDTALBgNVBAcTBGNpdHkxDDAKBgNVBAoTA29yZzENMAsGA1UEC
xMEdW5pdDENMAsGA1UEAxMEbmFtZTAeFw0yMDA1MDcxNDEzMDVaFw0yMDA4MDUxNDE
zMDVaMFgxCzAJBgNVBAYTAklOMQ4wDAYDVQQIEwVzdGF0ZTENMAsGA1UEBxMEY2l0eTE
MMAoGA1UEChMDb3JnMQ0wCwYDVQQLEwR1bml0MQ0wCwYDVQQDEwRuYW1lMIIBIjANB
gkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAmgpHAu9qb0idPFmz0rQt3qLdS3i5XgWJhHUhT
uokGFbmLW3NWI7QWNPOMb164kdVNlu+x8Vrap391SZ/iSqf/NwFwELSB26gTmgO0jdHFpBS7
04kmh5HT0WIrmUD5DZL4Mm3VcheGXWy2C2stJ1dm88sjPmv7B6WclRSdVsqzgaTy8Vm4TILz
OWnlPpf2jAJ4tiUtUisnCWhzm1ddg1E/U2tyvrISN3nWt2H0FIagZUIFBOCChg9avfD3yGN1rk722P
PrQwgJ+JERB9kb3eiA2nUVUw/zzXNZOMfcLRaajf91fyIQnDsVD5s81fVnW6wxFT4c716kreDarfR
BS8BLQIDAQABoyEwHzAdBgNVHQ4EFgQUGAt7b/Amt76SVjDUyX79Cak3ZsAwDQYJKoZIhvc
NAQEFBQADggEBAH2VS5pNSf4MHBAJKD6qf59Pe9YMHAklQxAN9p77vAoU90a8592z+TP/CL
LghSnCdbYOHOmtQKqV4Cyqv3j1Ih6dRdqBzqMW3RzoKT2PftA49aEMKi4/rJ+5WZz8m+udi+2h
mO51svyMTcGWtxAuPez3nwCgyS75Xd2RW5X9rsnVLrreS2ftaMsNKd70zvoxLyXUtF50eLfOb/4
ED/3ov2UAhi+v7zSm1BvqN0VdNBArR5WBc1VpBpj8D+eEBzq3GIl+onQcrkAMcrw3WB7wO4Do
CJ+jHO7AJ57uqgFuxqPfbSs6YjKwpXKr60gEvk2joXuPYo66L00ovEJBam91+KQ=
</wsse:KeyIdentifier>
</wsse:SecurityTokenReference>
</ds:KeyInfo>
<xenc:CipherData>
<xenc:CipherValue>
BpXZIMC8FfIOWb2iHlbyAKL/Z5RQuzci4aIb6t6LRxX1d2lDtGisqHH3voWWsGbLSdRcmcdQ7g5n
QGMnU5xWaBWP1ZEhmtDC//LnoFaejaP8/AFsvlObjcv9hGfLUupy3M9Oip0RDnNgiz23PrucALM
44qQHhpUT2TXfj0dOT3gYzb95l2JbCCanIFRreJiXhZR+t7FTP6xf+pQkgz95uxTnluq029wSmOax
zCW17fQU4JgjX+dUV1uvMYHXLkYrnETi4OrL1gJUbQEH8EYs2VvtDtPNp1aMLUcnVkaeQr+JH
GU+HMAAKLGni1aAC3M+QUpEE7seIHGEB7V+auCDfA==
</xenc:CipherValue>
</xenc:CipherData>
<xenc:ReferenceList>
<xenc:DataReference URI="#ED-E6F492C42F211191CD15941292721832" />
</xenc:ReferenceList>
</xenc:EncryptedKey>
</wsse:Security>
</soap:Header>
<soap:Body>
<xenc:EncryptedData
xmlns:xenc="http://www.w3.org/2001/04/xmlenc#" Id="EDE6F492C42F211191CD15941292721832"
Type="http://www.w3.org/2001/04/xmlenc#Content">
<xenc:EncryptionMethod Algorithm="http://www.w3.org/2001/04/xmlenc#tripledes-cbc" />
<ds:KeyInfo
xmlns:ds="http://www.w3.org/2000/09/xmldsig#">
<wsse:SecurityTokenReference
xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecuritysecext-1.0.xsd"
xmlns:wsse11="http://docs.oasis-open.org/wss/oasis-wss-wssecurity-secext-1.1.xsd"
wsse11:TokenType="http://docs.oasis-open.org/wss/oasis-wss-soap-message-security1.1#EncryptedKey">
<wsse:Reference URI="#EK-E6F492C42F211191CD15941292714421" />
</wsse:SecurityTokenReference>
</ds:KeyInfo>
<xenc:CipherData>
<xenc:CipherValue>
yLlR2VQpEvP4qRj4PDgXngz1XnOhBTBJwUv6SKGm6ecK9+kgyiwvxgkcEdGwt8wtOjnRyFjEmv
3pM88LPDukVCCs7NwctFnScqZxO5P5mCQfxayTIcDSO69MusONkhPw7J3X0JX+soMqbuYX4I
+SLSTDdXa2xv0vNW3yNvxs6uQcrLQlAGHCQKI7mFvnoDYekceN9m0gFXfIzLV8ySXNflp3kHj1Q
ufo1MXAs9wAh5REVB+zJVyI4MSzLwTiETZ/GHkHHMfasGyAS7eRbbIOyA==
</xenc:CipherValue>
</xenc:CipherData>
</xenc:EncryptedData>
</soap:Body>
</soap:Envelope>
```

In the above-signed request, refer to the following points as per the line number: 

- **Line Number 13**: States the algorithm that was used to encrypt the symmetric key. 

- **Line Number 19**: References the binary security token that contains the public key used to encrypt the symmetric key. 

- **Line Number 25**: The encrypted symmetric key that was used to encrypt the message. 

- **Line Number 39**: The encryption algorithm that was used to encrypt the message. 

- **Line Number 50**: The encrypted message. 

## Additional SOAP Message Signatures Examples

**SOAP Signatures**

**Using SHA1withRSA**

Pre-Input configurations 

```xml
enable_signature:true
signature_algorithm:SHA1withRSA
```

**Sample SOAP request **

```xml
<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope
xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"
xmlns:xsd="http://www.w3.org/2001/XMLSchema"
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
<soap:Body>
<employee>
<first-name>Jane</first-name>
<last-name>Doe</last-name>
<address>Paris</address>
<phone-number>123456</phone-number>
</employee>
</soap:Body>
</soap:Envelope>
````

**Signed SOAP Message**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope
xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"
xmlns:xsd="http://www.w3.org/2001/XMLSchema"
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
<soap:Header>
<wsse:Security
xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext1.0.xsd"
xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility1.0.xsd" soap:mustUnderstand="1">
<wsse:BinarySecurityToken EncodingType="http://docs.oasis-open.org/wss/2004/01/oasis200401-wss-soap-message-security-1.0#Base64Binary" ValueType="http://docs.oasis-
open.org/wss/2004/01/oasis-200401-wss-x509-token-profile-1.0#X509v3" wsu:Id="X509-
27590DCA642DB7FBFA15947331217896">MIIDTzCCAjegAwIBAgIEfmXDxjANBgkqhkiG9w0BA
QUFADBYMQswCQYDVQQGEwJJTjEOMAwGA1UECBMFc3RhdGUxDTALBgNVBAcTBGNpdH
kxDDAKBgNVBAoTA29yZzENMAsGA1UECxMEdW5pdDENMAsGA1UEAxMEbmFtZTAeFw0yM
DA1MDcxNDEzMDVaFw0yMDA4MDUxNDEzMDVaMFgxCzAJBgNVBAYTAklOMQ4wDAYDVQQ
IEwVzdGF0ZTENMAsGA1UEBxMEY2l0eTEMMAoGA1UEChMDb3JnMQ0wCwYDVQQLEwR1b
ml0MQ0wCwYDVQQDEwRuYW1lMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAmg
pHAu9qb0idPFmz0rQt3qLdS3i5XgWJhHUhTuokGFbmLW3NWI7QWNPOMb164kdVNlu+x8Vrap
391SZ/iSqf/NwFwELSB26gTmgO0jdHFpBS704kmh5HT0WIrmUD5DZL4Mm3VcheGXWy2C2stJ
1dm88sjPmv7B6WclRSdVsqzgaTy8Vm4TILzOWnlPpf2jAJ4tiUtUisnCWhzm1ddg1E/U2tyvrISN3n
Wt2H0FIagZUIFBOCChg9avfD3yGN1rk722PPrQwgJ+JERB9kb3eiA2nUVUw/zzXNZOMfcLRaajf
91fyIQnDsVD5s81fVnW6wxFT4c716kreDarfRBS8BLQIDAQABoyEwHzAdBgNVHQ4EFgQUGAt7
b/Amt76SVjDUyX79Cak3ZsAwDQYJKoZIhvcNAQEFBQADggEBAH2VS5pNSf4MHBAJKD6qf59
Pe9YMHAklQxAN9p77vAoU90a8592z+TP/CLLghSnCdbYOHOmtQKqV4Cyqv3j1Ih6dRdqBzqMW
3RzoKT2PftA49aEMKi4/rJ+5WZz8m+udi+2hmO51svyMTcGWtxAuPez3nwCgyS75Xd2RW5X9rs
nVLrreS2ftaMsNKd70zvoxLyXUtF50eLfOb/4ED/3ov2UAhi+v7zSm1BvqN0VdNBArR5WBc1VpBpj
8D+eEBzq3GIl+onQcrkAMcrw3WB7wO4DoCJ+jHO7AJ57uqgFuxqPfbSs6YjKwpXKr60gEvk2joX
uPYo66L00ovEJBam91+KQ=</wsse:BinarySecurityToken>
<ds:Signature
xmlns:ds="http://www.w3.org/2000/09/xmldsig#" Id="SIG27590DCA642DB7FBFA159473312179010">
<ds:SignedInfo>
<ds:CanonicalizationMethod Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#">
<ec:InclusiveNamespaces
xmlns:ec="http://www.w3.org/2001/10/xml-exc-c14n#" PrefixList="soap xsd xsi"/>
</ds:CanonicalizationMethod>
<ds:SignatureMethod Algorithm="http://www.w3.org/2000/09/xmldsig#rsa-sha1"/>
<ds:Reference URI="#id-27590DCA642DB7FBFA15947331217899">
<ds:Transforms>
<ds:Transform Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#">
<ec:InclusiveNamespaces
xmlns:ec="http://www.w3.org/2001/10/xml-exc-c14n#" PrefixList="xsd xsi"/>
</ds:Transform>
</ds:Transforms>
<ds:DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"/>
<ds:DigestValue>iPz9cO2Il1FZDSGeH2zQQ03Tj50=</ds:DigestValue>
</ds:Reference>
</ds:SignedInfo>
<ds:SignatureValue>CGV/6jFzXDXUeopsTtiY6UOfsa73gYYU4D1MqWpXW1XDEuAaO/uZhA/zU
KkbC9Afb1l+I79uvHp6SFrY24EwNGHCSxkNgJ+JY2gs6h8rU7vDIZEvudJ011GsN8TMSojxIIl5KiB
J4nHvuPKLaWnlL2FT9OR1QXB5DabYD6NiV3pELHRqaNYVuQEINJUK+k98nNNxvIQjY6PNkuS
U3pw76vOBUZMwn6xyNmd+G1iCETvob1+zBLZfR4sBR6Gs0Q7DiGfFdm40xSUzBGP3Auqlnxjv
0EwlTlV4LnT+CBtuWUbrcPJdncW8DXDyLM9inF0vfFztdsz3fmDI36Bu6nMD/g==</ds:SignatureV
alue>
<ds:KeyInfo Id="KI-27590DCA642DB7FBFA15947331217897">
<wsse:SecurityTokenReference wsu:Id="STR27590DCA642DB7FBFA15947331217898">
<wsse:Reference URI="#X509-27590DCA642DB7FBFA15947331217896"
ValueType="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-x509-token-profile1.0#X509v3"/>
</wsse:SecurityTokenReference>
</ds:KeyInfo>
</ds:Signature>
</wsse:Security>
</soap:Header>
<soap:Body
xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility1.0.xsd" wsu:Id="id-27590DCA642DB7FBFA15947331217899">
<employee>
<first-name>Jane</first-name>
<last-name>Doe</last-name>
<address>Paris</address>
<phone-number>123456</phone-number>
</employee>
</soap:Body>
</soap:Envelope>
```

**Using SHA224withRSA**

Pre-Input configurations 

```xml
enable_signature:true
signature_algorithm:SHA224withRSA
```

**Sample SOAP request**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope
xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"
xmlns:xsd="http://www.w3.org/2001/XMLSchema"
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
<soap:Body>
<employee>
<first-name>Jane</first-name>
<last-name>Doe</last-name>
<address>Paris</address>
<phone-number>123456</phone-number>
</employee>
</soap:Body>
</soap:Envelope>
```

**Signed SOAP Message**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"
xmlns:xsd="http://www.w3.org/2001/XMLSchema"
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
<soap:Header>
<wsse:Security xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wsswssecurity-secext-1.0.xsd" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-
wss-wssecurity-utility-1.0.xsd" soap:mustUnderstand="1">
<wsse:BinarySecurityToken EncodingType="http://docs.oasis-open.org/wss/2004/01/oasis200401-wss-soap-message-security-1.0#Base64Binary" ValueType="http://docs.oasisopen.org/wss/2004/01/oasis-200401-wss-x509-token-profile-1.0#X509v3" wsu:Id="X509-
81C0A152319A233A7415948059418506">MIIDdTCCAl2gAwIBAgIEa0uXYTANBgkqhkiG9w0BA
Q4FADBrMQswCQYDVQQGEwJJTjEUMBIGA1UECBMLTWFoYXJhc2h0cmExDTALBgNVBAcT
BFB1bmUxDjAMBgNVBAoTBVRpYmNvMRQwEgYDVQQLEwtFbmdpbmVlcmluZzERMA8GA1U
EAxMIUHJhc2hhbnQwHhcNMjAwNTE5MTI1ODA0WhcNMjAwODE3MTI1ODA0WjBrMQswCQY
DVQQGEwJJTjEUMBIGA1UECBMLTWFoYXJhc2h0cmExDTALBgNVBAcTBFB1bmUxDjAMBgN
VBAoTBVRpYmNvMRQwEgYDVQQLEwtFbmdpbmVlcmluZzERMA8GA1UEAxMIUHJhc2hhbnQ
wggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQD0QKIzmFcP9+U5EL3aQ0Zlkt81xd
yD2iqqn0Nyv/1R/wYLzPCSvRhipVedxJcxNqDj+UXUjyCSweBzAJoH89qaxWLt/x2lbf/HAhnN8sZxI
DWXGbN2ud+k0pO1e8Btjc+SKtnvlzaR2vhzDZ5PqcNKL0aYSUX5BTa3UcA8kvkjS+2q5pWPG8+
qN1mkuzf6tpkBIP4Woax54UzQy/ROkx84pXzniovgLSf6IQ9vhMbv8aX6UuqULr68OrI5JxgQ1lxN5
a2A9T28DALpOM3MGaK0N0b6YE1cZuHEkmRvilUokpK1kVjUOIeYTbs51eyvNcYK3oJ10Eoe3jR
HOWVUkR4RAgMBAAGjITAfMB0GA1UdDgQWBBRw74sk/7ZbUI7dWSTF76M/lKtWrjANBgkqhki
G9w0BAQ4FAAOCAQEAbwVN1n6ig2DahjTK9kALuWDsznaZkX/nNsmiSbnHYutId2qblnclcVff7lTi
8L9o9wfW7L1W7a1b8DKTO51IEI6JpFbFgT881QUvbe/UqAy3XBRrrA4b08vj5z9r0e1URs8wmom
hVvRamLaXDZpibPj+xF4JXuhmb4HxfVFCzsIH8LN36TjUs0FMxbxOMtNJpM1m5r9ZlaQeIF43Xwl
fgJzXe7lpcITuLA0BAyMC9V+ROvJvuJLZjFg0RtwAtIngJAVD900XzkkrTvFhW/wwN6izSFh/riExi73
K50c5lsFXN9PNYbdThfTbwL8pxPaQCe5bqitBmms57bxVMFnXrQ==</wsse:BinarySecurityToke
n>
<ds:Signature xmlns:ds="http://www.w3.org/2000/09/xmldsig#" Id="SIG81C0A152319A233A74159480594185110">
<ds:SignedInfo>
<ds:CanonicalizationMethod Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#">
<ec:InclusiveNamespaces xmlns:ec="http://www.w3.org/2001/10/xml-exc-c14n#"
PrefixList="soap xsd xsi"/>
</ds:CanonicalizationMethod>
<ds:SignatureMethod Algorithm="http://www.w3.org/2001/04/xmldsig-more#rsasha224"/>
<ds:Reference URI="#id-81C0A152319A233A7415948059418509">
<ds:Transforms>
<ds:Transform Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#">
<ec:InclusiveNamespaces xmlns:ec="http://www.w3.org/2001/10/xml-exc-c14n#"
PrefixList="xsd xsi"/>
</ds:Transform>
</ds:Transforms>
<ds:DigestMethod Algorithm="http://www.w3.org/2001/04/xmldsig-more#sha224"/>
<ds:DigestValue>yRgTTt7Tsob/8zf359rfu0gjVjA1HSQx/zvBOQ==</ds:DigestValue>
</ds:Reference>
</ds:SignedInfo>
<ds:SignatureValue>G7f6GKgdxZxeFVfY/VUS2ycGHgCL1djkX4Ijw9+U5phDDZ6G2ZDmf3o/WK
Ll+/0Gefw1Pd9dIjuhHjz6mXhp0APYItoSjFe5XQv0YwbXq0FJ43NciKQo9UX5u4MxC5X3tgurFz2S
bO6KnPGwWTiuL75eYuO5PIdOP9YSUMApwU46RB+7f68Oa6ii3XDmFNxcjzpbcp/Rn1wOuqPSf
qBTgXM3vfagPcVFWe19DysLOWne5kcxVcuRWi6D0znSsmM2pFNEnwyGVeDQd40YuZbO9thH
fto0gE8Z+z1k1zuFZADCanqRQQWxOkxcIzrj7WlvmKfimjlPxk+etgqXitxITg==</ds:SignatureValu
e>
<ds:KeyInfo Id="KI-81C0A152319A233A7415948059418507">
<wsse:SecurityTokenReference wsu:Id="STR81C0A152319A233A7415948059418508">
<wsse:Reference URI="#X509-81C0A152319A233A7415948059418506"
ValueType="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-x509-token-profile1.0#X509v3"/>
</wsse:SecurityTokenReference>
</ds:KeyInfo>
</ds:Signature>
</wsse:Security>
</soap:Header>
<soap:Body xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurityutility-1.0.xsd" wsu:Id="id-81C0A152319A233A7415948059418509">
<employee>
<first-name>Jane</first-name>
<last-name>Doe</last-name>
<address>Paris</address>
<phone-number>123456</phone-number>
</employee>
</soap:Body>
</soap:Envelope>
```

**Using SHA256withRSA**

Pre-Input configurations 

```xml
enable_signature:true
signature_algorithm:SHA256withRSA
```

**Sample SOAP request**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope
xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"
xmlns:xsd="http://www.w3.org/2001/XMLSchema"
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
<soap:Body>
<employee>
<first-name>Jane</first-name>
<last-name>Doe</last-name>
<address>Paris</address>
<phone-number>123456</phone-number>
</employee>
</soap:Body>
</soap:Envelope>
```

**Signed SOAP Message**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope
xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"
xmlns:xsd="http://www.w3.org/2001/XMLSchema"
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
<soap:Header>
<wsse:Security
xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext1.0.xsd"
xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility1.0.xsd" soap:mustUnderstand="1">
<wsse:BinarySecurityToken EncodingType="http://docs.oasis-open.org/wss/2004/01/oasis200401-wss-soap-message-security-1.0#Base64Binary" ValueType="http://docs.oasisopen.org/wss/2004/01/oasis-200401-wss-x509-token-profile-1.0#X509v3" wsu:Id="X509-
C321CF9942A5E3B820159473907205111">MIIDdzCCAl+gAwIBAgIER31IxzANBgkqhkiG9w0BA
QsFADBsMQswCQYDVQQGEwJJTjEVMBMGA1UECBMMTWFoYXJhc3NodHJhMQ0wCwYDV
QQHEwRQdW5lMQ4wDAYDVQQKEwVUaWJjbzEUMBIGA1UECxMLRW5naW5lZXJpbmcxETA
PBgNVBAMTCFByYXNoYW50MB4XDTIwMDQzMDA3MjgwNloXDTIwMDcyOTA3MjgwNlowbDE
LMAkGA1UEBhMCSU4xFTATBgNVBAgTDE1haGFyYXNzaHRyYTENMAsGA1UEBxMEUHVuZT
EOMAwGA1UEChMFVGliY28xFDASBgNVBAsTC0VuZ2luZWVyaW5nMREwDwYDVQQDEwhQc
mFzaGFudDCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAOf51mI+dxwDCmZW
MATUPNaBOFmkRUfOOGJiiHQ4HT91F61kXuBwcBG0IPIkrm0tFYKIbh37/P3LUVuobU63UqDB1
MtiH36bVlZsGQpej2hajIme5dcuaFW9CCJNsT+huR28NIO8ddl4v5t4OB5GM1MqSO7ZrkrrvVYnn
GJaN7wvJnYr0aOrEaO3inm8IEZ49S/hNUn9nisHxbT7x8XGRNdTX29t1VIyva6H0gbblUt6PgYad/
bE443HJMMJT/BpTlcYvZzjo97iFm1zd3ZMHM6t5EPe8uuLKSkLLRi1rxrdUAzK4SMJCFC/5G3zOj
TdXeDUmEiMw6V+2BWMCSu1H9MCAwEAAaMhMB8wHQYDVR0OBBYEFJcZEn78qTttZuPGG
g5zs7YGNbtmMA0GCSqGSIb3DQEBCwUAA4IBAQC8nezMxvgb4Z0IS8VXeuyTxT7vdEqMUkdfr
6Z516fQako0X48dIgeyHkJT+mkbcdUkwFA1ExaCpiNEVYDyU9euqOgMjlLAahRLqbwqRMzALay
HVPF4kO3MdOwzQepVXZ/0Ee2BWrDJ9XQn1UP0p7DhWGtJuYPBbFcjHeZWkUx8gqXruUix5Zo
N4sL7027Me8xz7Wm9ZAdBUzTT8cUCOwIggvxtUT4mArkcvVxMaufD4jAFbL94fYD6FzEZrd2LW
VHFUI0M+V7S/3j8Sc7+tf2hrq3d73iCRMj2e1x77mVuoF75s7hjTDfC6o0DdlhCyorQnR7JNHv1GT
9DdPMyfnGW</wsse:BinarySecurityToken>
<ds:Signature
xmlns:ds="http://www.w3.org/2000/09/xmldsig#" Id="SIGC321CF9942A5E3B820159473907205115">
<ds:SignedInfo>
<ds:CanonicalizationMethod Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#">
<ec:InclusiveNamespaces
xmlns:ec="http://www.w3.org/2001/10/xml-exc-c14n#" PrefixList="soap xsd xsi"/>
</ds:CanonicalizationMethod>
<ds:SignatureMethod Algorithm="http://www.w3.org/2001/04/xmldsig-more#rsasha256"/>
<ds:Reference URI="#id-C321CF9942A5E3B820159473907205114">
<ds:Transforms>
<ds:Transform Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#">
<ec:InclusiveNamespaces
xmlns:ec="http://www.w3.org/2001/10/xml-exc-c14n#" PrefixList="xsd xsi"/>
</ds:Transform>
</ds:Transforms>
<ds:DigestMethod Algorithm="http://www.w3.org/2001/04/xmlenc#sha256"/>
<ds:DigestValue>lEuqQGoA1M+2h7/pR7Wu+5kekWCMqaxNvuE8KTnXiBA=</ds:DigestValue>
</ds:Reference>
</ds:SignedInfo>
<ds:SignatureValue>jVm0B5FZCQJwQx0HssRD9Ch5b6/6s05MePyoSJr5qm9HBXKTa0Wrah+n
Rqbe5dNtgHScBBBRyilbp5HzK1Xd+bLKWVisMszkQpBMk0mNOdKX9sGT7zhOoRcn7YR1q+Cz
WFJ9Uz/z6JMHYegmlRdDlkknqN/hR9o2s2CYI4gkJtS1OKoEo4K0MWHY2XGrAUPGkPrietqPh2
p1QYoLCNb2sCeqREMoiv8TZ2lvW4V1Iz8qneBnFH6sbwl7UPihH1hzLjFCH7BiR3scIet5E362o5r
CtXbGkScgFQKvD7QgQshsneh3hdyzyS82167x2JkIpHyt+eYvl5PFfTrkr2vU7Q==</ds:SignatureV
alue>
<ds:KeyInfo Id="KI-C321CF9942A5E3B820159473907205112">
<wsse:SecurityTokenReference wsu:Id="STRC321CF9942A5E3B820159473907205113">
<wsse:Reference URI="#X509-C321CF9942A5E3B820159473907205111"
ValueType="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-x509-token-profile1.0#X509v3"/>
</wsse:SecurityTokenReference>
</ds:KeyInfo>
</ds:Signature>
</wsse:Security>
</soap:Header>
<soap:Body
xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility1.0.xsd" wsu:Id="id-C321CF9942A5E3B820159473907205114">
<employee>
<first-name>Jane</first-name>
<last-name>Doe</last-name>
<address>Paris</address>
<phone-number>123456</phone-number>
</employee>
</soap:Body>
</soap:Envelope>
```

**Using SHA384withRSA**

Pre-Input configurations 

```xml
enable_signature:true
signature_algorithm:SHA384withRSA
```

**Sample SOAP Request** 

```xml
<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope
xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"
xmlns:xsd="http://www.w3.org/2001/XMLSchema"
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
<soap:Body>
<employee>
<first-name>Jane</first-name>
<last-name>Doe</last-name>
<address>Paris</address>
<phone-number>123456</phone-number>
</employee>
</soap:Body>
</soap:Envelope>
```

**Signed SOAP Message**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope
xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"
xmlns:xsd="http://www.w3.org/2001/XMLSchema"
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
<soap:Header>
<wsse:Security
xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext1.0.xsd"
xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility1.0.xsd" soap:mustUnderstand="1">
<wsse:BinarySecurityToken EncodingType="http://docs.oasis-open.org/wss/2004/01/oasis-
200401-wss-soap-message-security-1.0#Base64Binary" ValueType="http://docs.oasisopen.org/wss/2004/01/oasis-200401-wss-x509-token-profile-1.0#X509v3" wsu:Id="X509-
C126D5A56E3950DFCB15947392844701">MIIDTzCCAjegAwIBAgIEIl0/lzANBgkqhkiG9w0BAQw
FADBYMQswCQYDVQQGEwJJTjEOMAwGA1UECBMFc3RhdGUxDTALBgNVBAcTBGNpdHkxD
DAKBgNVBAoTA29yZzENMAsGA1UECxMEdW5pdDENMAsGA1UEAxMEbmFtZTAeFw0yMDA1
MDcxNDIwNDZaFw0yMDA4MDUxNDIwNDZaMFgxCzAJBgNVBAYTAklOMQ4wDAYDVQQIEwV
zdGF0ZTENMAsGA1UEBxMEY2l0eTEMMAoGA1UEChMDb3JnMQ0wCwYDVQQLEwR1bml0M
Q0wCwYDVQQDEwRuYW1lMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAhyRmaD
4GE3GSIA+YXlmDOjFeW+qOlaH0Y+FVRAeys+eM6c+7Q1VgSAPUeyAIvlzb+vSQlduAWzCNQO
V+TdDqGNwUmLIuJgkLFt43fhPIKpZO+zJpBcX2K5VIXYTssFlc5btrhUFEgxGb1/szvlF+wK9gsWk
alUw90OTMlK/6h2UJT4CVTanyVqxwJnRGUQwJs6O9yg5p/1Ymn8D26vo6ZGUS9vK6iQ0Z4UKL
314j2PqVmiDgW5iwioS8j0QE2qiUGHVYFsJAoPzDAm//A+Oid4henHXJ/jHkUYRrOJvuJdbLU3xF
Av08/z+/C4L7rru0pY/Gj+NYGgbeMsZzlVr9GwIDAQABoyEwHzAdBgNVHQ4EFgQUYpY2hrwGm
OIhlKD8YMoWadWxVD0wDQYJKoZIhvcNAQEMBQADggEBADc8eMKEg8pzouNvfMsPiXXnv4e
s5VxP4a8SfL01e8gcD2FajmS88mTB2sdSRu03TUeFOavy1hUzaz35jwccVbl+EHZ7OAFIcQAHBz
D3nitzFtMnita9MlTqqcoqwyXC7Z872XbtN6thSogMQxVhWfaRSqYIdSvthskTDgZWqe8elfrNXU5x
FE5n3aqseR7KdNIdJQ+pFg3lKCSsyYFEWh4FlfDks/abp2PQHXK/TPOsC4ZqlmVJfg6Kd9dkMHa
0khHHyCPmbXbf23HBBfhKqcIoEUcW1KWZjtwO8D2+p/7jul+DD0OD0KRHl+z7FX1AyqOnkEBUj
GofvcBvcNy+6kc=</wsse:BinarySecurityToken>
<ds:Signature
xmlns:ds="http://www.w3.org/2000/09/xmldsig#" Id="SIGC126D5A56E3950DFCB15947392845175">
<ds:SignedInfo>
<ds:CanonicalizationMethod Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#">
<ec:InclusiveNamespaces
xmlns:ec="http://www.w3.org/2001/10/xml-exc-c14n#" PrefixList="soap xsd xsi"/>
</ds:CanonicalizationMethod>
<ds:SignatureMethod Algorithm="http://www.w3.org/2001/04/xmldsig-more#rsasha384"/>
<ds:Reference URI="#id-C126D5A56E3950DFCB15947392844814">
<ds:Transforms>
<ds:Transform Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#">
<ec:InclusiveNamespaces
xmlns:ec="http://www.w3.org/2001/10/xml-exc-c14n#" PrefixList="xsd xsi"/>
</ds:Transform>
</ds:Transforms>
<ds:DigestMethod Algorithm="http://www.w3.org/2001/04/xmldsigmore#sha384"/>
<ds:DigestValue>HQYReWP70IBiPVjlBQ+JOlda9YkUHfk73hjUqxhVfUrnWysEwIGH9N6LOV+zY
BJP</ds:DigestValue>
</ds:Reference>
</ds:SignedInfo>
<ds:SignatureValue>FSQN92UoigDKXv2mv/1x8DdKE8fr6v24RpU25AFPIn+bB5WHh6A8AP5yO
smt8KrMRxXQMlmLbZuQzfRPXdURJVmixZ2Kmn6DuuAC2LoZMv5pIDNCiFd4lT1+Z2tT92Yivizr
HZzeETT0Py9qp7XMIMsucVpowhRKQMqoJ96A6UNvl2TSfK21xO884II1/sHTQfEmpA6omW9+G
1it/Fnm07Gr6JVaNC9B2XcQmEsSjjLknGtCTqs450dC+hONJ4AnF9zUknDnlSp5Zz6ChbSLXf7+0
WVcuYSCg/uDR5snHrBmZxz+cQI8DODQ8G34izwT75lwnpzcQv0FuDhf5s7R7A==</ds:Signatur
eValue>
<ds:KeyInfo Id="KI-C126D5A56E3950DFCB15947392844752">
<wsse:SecurityTokenReference wsu:Id="STRC126D5A56E3950DFCB15947392844773">
<wsse:Reference URI="#X509-C126D5A56E3950DFCB15947392844701"
ValueType="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-x509-token-profile1.0#X509v3"/>
</wsse:SecurityTokenReference>
</ds:KeyInfo>
</ds:Signature>
</wsse:Security>
</soap:Header>
<soap:Body
xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility1.0.xsd" wsu:Id="id-C126D5A56E3950DFCB15947392844814">
<employee>
<first-name>Jane</first-name>
<last-name>Doe</last-name>
<address>Paris</address>
<phone-number>123456</phone-number>
</employee>
</soap:Body>
</soap:Envelope>
```

**Using SHA512withRSA**

Pre-Input configurations 

```xml
enable_signature:true
signature_algorithm:SHA512withRSA
```

**Sample SOAP request**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope
xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"
xmlns:xsd="http://www.w3.org/2001/XMLSchema"
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
<soap:Body>
<employee>
<first-name>Jane</first-name>
<last-name>Doe</last-name>
<address>Paris</address>
<phone-number>123456</phone-number>
</employee>
</soap:Body>
</soap:Envelope>
```

**Signed SOAP Message**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope
xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"
xmlns:xsd="http://www.w3.org/2001/XMLSchema"
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
<soap:Header>
<wsse:Security
xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext1.0.xsd"
xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility1.0.xsd" soap:mustUnderstand="1">
<wsse:BinarySecurityToken EncodingType="http://docs.oasis-open.org/wss/2004/01/oasis200401-wss-soap-message-security-1.0#Base64Binary" ValueType="http://docs.oasisopen.org/wss/2004/01/oasis-200401-wss-x509-token-profile-1.0#X509v3" wsu:Id="X509-
F99256CDCC041F41A515947395179981">MIIDTzCCAjegAwIBAgIEDRG0BDANBgkqhkiG9w0B
AQ0FADBYMQswCQYDVQQGEwJJTjEOMAwGA1UECBMFc3RhdGUxDTALBgNVBAcTBGNpd
HkxDDAKBgNVBAoTA29yZzENMAsGA1UECxMEdW5pdDENMAsGA1UEAxMEbmFtZTAeFw0y
MDA1MTIxMTMyMTNaFw0yMDA4MTAxMTMyMTNaMFgxCzAJBgNVBAYTAklOMQ4wDAYDVQ
QIEwVzdGF0ZTENMAsGA1UEBxMEY2l0eTEMMAoGA1UEChMDb3JnMQ0wCwYDVQQLEwR1
bml0MQ0wCwYDVQQDEwRuYW1lMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAtK
2100euk1VgtES3iBVMavn1nqIr+LQg1ayCC/PY5lFm3PwUFa/oS+UxcyPVYGj/Nn0JOWUnXrRFx
LEncliWGVnMxQlDOsU6Ln7IH8b6VSX/YjCQuTfiVrkruD812SwEQPKPUxh5meEcmWQHKME+V
zoVMj8zXJI518A75/fo0y6gtn1f7/totQwlCFpFLp8sLIC2flLTttWh9g71p+vPxFsFzevg4pd5R7aKLis
DGSRr4veTJRgh2wwtwY8GVMcn5C8P4FKFvNxGukxf7D4BR4SA14CaLureM3bs/BJuHbcbUoC
OA8ZYIMaUJEllxSRy1H6EP+eE1X4zGgjqM3ugMQIDAQABoyEwHzAdBgNVHQ4EFgQUfuwPbA
x/crod3d+peKsNK/2x/5UwDQYJKoZIhvcNAQENBQADggEBAJyvjfdA6S/u6PxU+Z3VQKXH1u1gv
M+A3Ho1kWVkx4t2i+sWy+EmUAuf/wH3Ta84ldGtNRCQP/hW2EuielOkRAY8rRpNMrFDY2oxL0P
ezqK1/Q9zf25jTKjDMJ7536EdYr6OOuHG84tDGSXqMmnDxISGfXvS3a69jgecJkmIygNcyzsPP6k
em+NLlMGcq3o67YnpwmmWHIM1wCIasJCisGhSCxHd1w+76f758tgZVZdgNPuid7kNszO/vHc3ci
0uh3vGN8tlGJpFu/B9O13g7ZkyrRsyfUp8lEbqTgC7e3lC/W+gaJP74U/7qrCyAebjvJaY8QtavXpoII
hNEfmbAwc=</wsse:BinarySecurityToken>
<ds:Signature
xmlns:ds="http://www.w3.org/2000/09/xmldsig#" Id="SIGF99256CDCC041F41A515947395180585">
<ds:SignedInfo>
<ds:CanonicalizationMethod Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#">
<ec:InclusiveNamespaces
xmlns:ec="http://www.w3.org/2001/10/xml-exc-c14n#" PrefixList="soap xsd xsi"/>
</ds:CanonicalizationMethod>
<ds:SignatureMethod Algorithm="http://www.w3.org/2001/04/xmldsig-more#rsasha512"/>
<ds:Reference URI="#id-F99256CDCC041F41A515947395180284">
<ds:Transforms>
<ds:Transform Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#">
<ec:InclusiveNamespaces
xmlns:ec="http://www.w3.org/2001/10/xml-exc-c14n#" PrefixList="xsd xsi"/>
</ds:Transform>
</ds:Transforms>
<ds:DigestMethod Algorithm="http://www.w3.org/2001/04/xmlenc#sha512"/>
<ds:DigestValue>b5KXmwt9JRRflUZvaJZBgIMtCsMTtSZ1IhGfqGc4pk715U8/Xf4vwod9A5sYwiv
U/ooKRJMvp1Ij9vegyel5Yg==</ds:DigestValue>
</ds:Reference>
</ds:SignedInfo>
<ds:SignatureValue>TNy6EcFDjpv+L1LCr8NeH48c0bycXI9IYecvIM12WGf/YmeMx0RvcKfUL/8M
hEgjABeolSoMhVjz/PXtjm0k2JvkN1jbpIR+tygXv9hDcbe885Nt90MuKexpnoHNN+tGQI8KMl3BR/
HknEfcwzH2NveK2uFx7ih/Fq+IPg7QEo4QrQMsL7h2cd781rOceQtm8W8aeeZBrewHXd58u9RJM
gup3FXvzPl3gKLxQ/BNUqa4sNFTXdsaz7ipUPEsQ4BRhrOym5OprgeOJA7XvrdXOo67C8oK/UM
Em3F4PxdkdjOw7rZuSly25D/zExPOA+8FRlftZFzlqGUnJ2X1GOXNQQ==</ds:SignatureValue>
<ds:KeyInfo Id="KI-F99256CDCC041F41A515947395180212">
<wsse:SecurityTokenReference wsu:Id="STRF99256CDCC041F41A515947395180223">
<wsse:Reference URI="#X509-F99256CDCC041F41A515947395179981"
ValueType="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-x509-token-profile1.0#X509v3"/>
</wsse:SecurityTokenReference>
</ds:KeyInfo>
</ds:Signature>
</wsse:Security>
</soap:Header>
<soap:Body
xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility1.0.xsd" wsu:Id="id-F99256CDCC041F41A515947395180284">
<employee>
<first-name>Jane</first-name>
<last-name>Doe</last-name>
<address>Paris</address>
<phone-number>123456</phone-number>
</employee>
</soap:Body>
</soap:Envelope>
```

**Using SHA1withDSA**

Pre-Input configurations 

```xml
enable_signature:true
signature_algorithm:SHA1withDSA
```

**Sample SOAP request**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope
xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"
xmlns:xsd="http://www.w3.org/2001/XMLSchema"
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
<soap:Body>
<employee>
<first-name>Jane</first-name>
<last-name>Doe</last-name>
<address>Paris</address>
<phone-number>123456</phone-number>
</employee>
</soap:Body>
</soap:Envelope>
```

**Signed SOAP Message**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope
xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"
xmlns:xsd="http://www.w3.org/2001/XMLSchema"
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
<soap:Header>
<wsse:Security
xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext1.0.xsd"
xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility1.0.xsd" soap:mustUnderstand="1">
<wsse:BinarySecurityToken EncodingType="http://docs.oasis-open.org/wss/2004/01/oasis200401-wss-soap-message-security-1.0#Base64Binary" ValueType="http://docs.oasisopen.org/wss/2004/01/oasis-200401-wss-x509-token-profile-1.0#X509v3" wsu:Id="X509-
57A9C687762BAF85AE15948063252481">MIIDMzCCAvGgAwIBAgIEH4jC+jALBgcqhkjOOAQD
BQAwazELMAkGA1UEBhMCSU4xFDASBgNVBAgTC01haGFyYXNodHJhMQ0wCwYDVQQHEw
RQdW5lMQ4wDAYDVQQKEwVUaWJjbzEUMBIGA1UECxMLRW5naW5lZXJpbmcxETAPBgNVB
AMTCFByYXNoYW50MB4XDTIwMDUxOTA5MzMxMFoXDTIwMDgxNzA5MzMxMFowazELMAk
GA1UEBhMCSU4xFDASBgNVBAgTC01haGFyYXNodHJhMQ0wCwYDVQQHEwRQdW5lMQ4w
DAYDVQQKEwVUaWJjbzEUMBIGA1UECxMLRW5naW5lZXJpbmcxETAPBgNVBAMTCFByYXN
oYW50MIIBuDCCASwGByqGSM44BAEwggEfAoGBAP1/U4EddRIpUt9KnC7s5Of2EbdSPO9EA
MMeP4C2USZpRV1AIlH7WT2NWPq/xfW6MPbLm1Vs14E7gB00b/JmYLdrmVClpJ+f6AR7ECLC
T7up1/63xhv4O1fnxqimFQ8E+4P208UewwI1VBNaFpEy9nXzrith1yrv8iIDGZ3RSAHHAhUAl2BQj
xUjC8yykrmCouuEC/BYHPUCgYEA9+GghdabPd7LvKtcNrhXuXmUr7v6OuqC+VdMCz0HgmdR
WVeOutRZT+ZxBxCBgLRJFnEj6EwoFhO3zwkyjMim4TwWeotUfI0o4KOuHiuzpnWRbqN/C/ohN
WLx+2J6ASQ7zKTxvqhRkImog9/hWuWfBpKLZl6Ae1UlZAFMO/7PSSoDgYUAAoGBALUaKzlOS
zm33WbANONrHMwP0iMSSOfC1tJrfHMz9yXezYpDtAYgGSuhFaKjtC+rh53gW2jB5k5yyToDHSB
DnE0JmQvXIGLgEE8SOzIFemPyFWdHIIxZMhGnN0u3GsH7LP9JwQCXRbgYQK2AvFkz1LR3Ta
TP0iUp+b8mVKBU57oioyEwHzAdBgNVHQ4EFgQU1gQ/lpHAy5jXb+kO0yUMIn/h3jQwCwYHKoZ
IzjgEAwUAAy8AMCwCFGYbPTlPl7hf5bv/M/rgijvyVKvmAhQ/zm4cxsZRugvuIwtBBW3XHA+GuA=
=</wsse:BinarySecurityToken>
<ds:Signature
xmlns:ds="http://www.w3.org/2000/09/xmldsig#" Id="SIG57A9C687762BAF85AE15948063252775">
<ds:SignedInfo>
<ds:CanonicalizationMethod Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#">
<ec:InclusiveNamespaces
xmlns:ec="http://www.w3.org/2001/10/xml-exc-c14n#" PrefixList="soap xsd xsi"/>
</ds:CanonicalizationMethod>
<ds:SignatureMethod Algorithm="http://www.w3.org/2000/09/xmldsig#dsa-sha1"/>
<ds:Reference URI="#id-57A9C687762BAF85AE15948063252664">
<ds:Transforms>
<ds:Transform Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#">
<ec:InclusiveNamespaces
xmlns:ec="http://www.w3.org/2001/10/xml-exc-c14n#" PrefixList="xsd xsi"/>
</ds:Transform>
</ds:Transforms>
<ds:DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"/>
<ds:DigestValue>3O+94wMmin5zAAANRVEcIr/ErqY=</ds:DigestValue>
</ds:Reference>
</ds:SignedInfo>
<ds:SignatureValue>DKdBFGlWwiqqN10TaKpW271U9qw3zAk0TN+hKWy3kqFC/hBw9iogaQ==
</ds:SignatureValue>
<ds:KeyInfo Id="KI-57A9C687762BAF85AE15948063252572">
<wsse:SecurityTokenReference wsu:Id="STR57A9C687762BAF85AE15948063252593">
<wsse:Reference URI="#X509-57A9C687762BAF85AE15948063252481"
ValueType="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-x509-token-profile1.0#X509v3"/>
</wsse:SecurityTokenReference>
</ds:KeyInfo>
</ds:Signature>
</wsse:Security>
</soap:Header>
<soap:Body
xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility1.0.xsd" wsu:Id="id-57A9C687762BAF85AE15948063252664">
<employee>
<first-name>Jane</first-name>
<last-name>Doe</last-name>
<address>Paris</address>
<phone-number>123456</phone-number>
</employee>
</soap:Body>
</soap:Envelope>
```

**Using SHA256withDSA**

Pre-Input configurations 

```xml
enable_signature:true
signature_algorithm:SHA256withDSA
```

**Sample SOAP request**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope
xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"
xmlns:xsd="http://www.w3.org/2001/XMLSchema"
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
<soap:Body>
<employee>
<first-name>Jane</first-name>
<last-name>Doe</last-name>
<address>Paris</address>
<phone-number>123456</phone-number>
</employee>
</soap:Body>
</soap:Envelope>
```

**Signed SOAP Message**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope
xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"
xmlns:xsd="http://www.w3.org/2001/XMLSchema"
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
<soap:Header>
<wsse:Security
xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext1.0.xsd"
xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility1.0.xsd" soap:mustUnderstand="1">
<wsse:BinarySecurityToken EncodingType="http://docs.oasis-open.org/wss/2004/01/oasis200401-wss-soap-message-security-1.0#Base64Binary" ValueType="http://docs.oasisopen.org/wss/2004/01/oasis-200401-wss-x509-token-profile-1.0#X509v3" wsu:Id="X509-
4EC4D91315F4584EAF15948065704201">MIIDKzCCAuagAwIBAgIEKO+r4DANBglghkgBZQME
AwIFADBlMQswCQYDVQQGEwJJTjEUMBIGA1UECBMLTWFoYXJhc2h0cmExDTALBgNVBAcT
BFB1bmUxDjAMBgNVBAoTBVRpYmNvMQ4wDAYDVQQLEwVUaWJjbzERMA8GA1UEAxMIUH
Jhc2hhbnQwHhcNMjAwNTE5MDkzNTE1WhcNMjAwODE3MDkzNTE1WjBlMQswCQYDVQQGE
wJJTjEUMBIGA1UECBMLTWFoYXJhc2h0cmExDTALBgNVBAcTBFB1bmUxDjAMBgNVBAoTBV
RpYmNvMQ4wDAYDVQQLEwVUaWJjbzERMA8GA1UEAxMIUHJhc2hhbnQwggG3MIIBLAYHKo
ZIzjgEATCCAR8CgYEA/X9TgR11EilS30qcLuzk5/YRt1I870QAwx4/gLZRJmlFXUAiUftZPY1Y+r/F
9bow9subVWzXgTuAHTRv8mZgt2uZUKWkn5/oBHsQIsJPu6nX/rfGG/g7V+fGqKYVDwT7g/bTxR
7DAjVUE1oWkTL2dfOuK2HXKu/yIgMZndFIAccCFQCXYFCPFSMLzLKSuYKi64QL8Fgc9QKBgQ
D34aCF1ps93su8q1w2uFe5eZSvu/o66oL5V0wLPQeCZ1FZV4661FlP5nEHEIGAtEkWcSPoTCg
WE7fPCTKMyKbhPBZ6i1R8jSjgo64eK7OmdZFuo38L+iE1YvH7YnoBJDvMpPG+qFGQiaiD3+Fa
5Z8GkotmXoB7VSVkAUw7/s9JKgOBhAACgYBBXk5mHQclTe1g2Yo1BhG5mfLQBFUIN1taGSIR
hzoG6ZjgQx75TQsCzuslGIec3655WvjXLmORHLCe+6OwMeKwu9FL4Web6eBzKFsGlKOcypxFq
0Hl9AU8fGJX97MPe6CkK1BTlUqWE/0Q0Tr31eZURQynRH1EwBsCnt84L5uwIKMhMB8wHQYD
VR0OBBYEFDKpRN/rd6Ud7eDhcJfZTCgROiN6MA0GCWCGSAFlAwQDAgUAAzAAMC0CFEVs
kS3pBCBBAxWSAIV6VUKrvhZhAhUAjYdlNd98IF/w5bXILiELzGJpp7Q=</wsse:BinarySecurityTo
ken>
<ds:Signature
xmlns:ds="http://www.w3.org/2000/09/xmldsig#" Id="SIG4EC4D91315F4584EAF15948065704385">
<ds:SignedInfo>
<ds:CanonicalizationMethod Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#">
<ec:InclusiveNamespaces
xmlns:ec="http://www.w3.org/2001/10/xml-exc-c14n#" PrefixList="soap xsd xsi"/>
</ds:CanonicalizationMethod>
<ds:SignatureMethod Algorithm="http://www.w3.org/2009/xmldsig11#dsa-sha256"/>
<ds:Reference URI="#id-4EC4D91315F4584EAF15948065704274">
<ds:Transforms>
<ds:Transform Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#">
<ec:InclusiveNamespaces
xmlns:ec="http://www.w3.org/2001/10/xml-exc-c14n#" PrefixList="xsd xsi"/>
</ds:Transform>
</ds:Transforms>
<ds:DigestMethod Algorithm="http://www.w3.org/2001/04/xmlenc#sha256"/>
<ds:DigestValue>UQI9zC+uc8j7PxEHgeV3L34lDzo5IWXo4D8PJmbPL0g=</ds:DigestValue>
</ds:Reference>
</ds:SignedInfo>
ds:SignatureValue>
<ds:KeyInfo Id="KI-4EC4D91315F4584EAF15948065704232">
<wsse:SecurityTokenReference wsu:Id="STR4EC4D91315F4584EAF15948065704243">
<wsse:Reference URI="#X509-4EC4D91315F4584EAF15948065704201"
ValueType="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-x509-token-profile1.0#X509v3"/>
</wsse:SecurityTokenReference>
</ds:KeyInfo>
</ds:Signature>
</wsse:Security>
</soap:Header>
<soap:Body
xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility1.0.xsd" wsu:Id="id-4EC4D91315F4584EAF15948065704274">
<employee>
<first-name>Jane</first-name>
<last-name>Doe</last-name>
<address>Paris</address>
<phone-number>123456</phone-number>
</employee>
</soap:Body>
</soap:Envelope>
```

**Using SHA1withECDSA**

Pre-Input configurations 

```xml
enable_signature:true
signature_algorithm:SHA1withECDSA
```

**Sample SOAP request** 

```xml
<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope
xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"
xmlns:xsd="http://www.w3.org/2001/XMLSchema"
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
<soap:Body>
<employee>
<first-name>Jane</first-name>
<last-name>Doe</last-name>
<address>Paris</address>
<phone-number>123456</phone-number>
</employee>
</soap:Body>
</soap:Envelope>
```

**Signed SOAP Message** 

```xml
<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope
xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"
xmlns:xsd="http://www.w3.org/2001/XMLSchema"
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
<soap:Header>
<wsse:Security
xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext1.0.xsd"
xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility1.0.xsd" soap:mustUnderstand="1">
<wsse:BinarySecurityToken EncodingType="http://docs.oasis-open.org/wss/2004/01/oasis200401-wss-soap-message-security-1.0#Base64Binary" ValueType="http://docs.oasisopen.org/wss/2004/01/oasis-200401-wss-x509-token-profile-1.0#X509v3" wsu:Id="X509-
4EC4D91315F4584EAF15948068307646">MIIB7DCCAZCgAwIBAgIEA6PezTALBgcqhkjOPQQB
BQAwazELMAkGA1UEBhMCSU4xFDASBgNVBAgTC01haGFyYXNodHJhMQ0wCwYDVQQHEw
RQdW5lMQ4wDAYDVQQKEwVUaWJjbzEUMBIGA1UECxMLRW5naW5lZXJpbmcxETAPBgNVB
AMTCFByYXNoYW50MB4XDTIwMDUxOTEyMzgyNloXDTIwMDgxNzEyMzgyNlowazELMAkGA1
UEBhMCSU4xFDASBgNVBAgTC01haGFyYXNodHJhMQ0wCwYDVQQHEwRQdW5lMQ4wDAY
DVQQKEwVUaWJjbzEUMBIGA1UECxMLRW5naW5lZXJpbmcxETAPBgNVBAMTCFByYXNoYW
50MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAED4T25D/xhoLc0LPal/WV3O/gdD6ck4apRNRX
BWKY1+Way8yVECJdrpkizR/sMYdPn7TXb2GOXRAj/yWZwQwoPqMhMB8wHQYDVR0OBBYEF
N8LWxsVlL80sjN+0p1n5No/hIo2MAsGByqGSM49BAEFAANJADBGAiEA4wVzvpFVmiqy5lAnzY9
FmsDCDQ6cAHDBOjweKPRu9vMCIQDZ6SqhHxm6C4qq4pzWzU4/dk1CRfkvsVbRuAVBEQIrEg
==</wsse:BinarySecurityToken>
<ds:Signature
xmlns:ds="http://www.w3.org/2000/09/xmldsig#" Id="SIG4EC4D91315F4584EAF159480683076810">
<ds:SignedInfo>
<ds:CanonicalizationMethod Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#">
<ec:InclusiveNamespaces
xmlns:ec="http://www.w3.org/2001/10/xml-exc-c14n#" PrefixList="soap xsd xsi"/>
</ds:CanonicalizationMethod>
<ds:SignatureMethod Algorithm="http://www.w3.org/2001/04/xmldsig-more#ecdsasha1"/>
<ds:Reference URI="#id-4EC4D91315F4584EAF15948068307649">
<ds:Transforms>
<ds:Transform Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#">
<ec:InclusiveNamespaces
xmlns:ec="http://www.w3.org/2001/10/xml-exc-c14n#" PrefixList="xsd xsi"/>
</ds:Transform>
</ds:Transforms>
<ds:DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"/>
<ds:DigestValue>EVpNn7cIk4zV377Y3CegkfpIl3c=</ds:DigestValue>
</ds:Reference>
</ds:SignedInfo>
<ds:SignatureValue>Fs93HKExoHLaIazLysr89xQpmkd8XPqfT66o1xA31oqu+ZDjEQvuayHW9pK
cPJsy22jbuXuGZPKPoADuLZHWoA==</ds:SignatureValue>
<ds:KeyInfo Id="KI-4EC4D91315F4584EAF15948068307647">
<wsse:SecurityTokenReference wsu:Id="STR4EC4D91315F4584EAF15948068307648">
<wsse:Reference URI="#X509-4EC4D91315F4584EAF15948068307646"
ValueType="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-x509-token-profile1.0#X509v3"/>
</wsse:SecurityTokenReference>
</ds:KeyInfo>
</ds:Signature>
</wsse:Security>
</soap:Header>
<soap:Body
xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility1.0.xsd" wsu:Id="id-4EC4D91315F4584EAF15948068307649">
<employee>
<first-name>Jane</first-name>
<last-name>Doe</last-name>
<address>Paris</address>
<phone-number>123456</phone-number>
</employee>
</soap:Body>
</soap:Envelope>
```

**Using SHA224withECDSA**

Pre-Input configurations 

```xml
enable_signature:true
signature_algorithm:SHA224withECDSA
```

**Sample SOAP request** 

```xml
<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope
xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"
xmlns:xsd="http://www.w3.org/2001/XMLSchema"
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
<soap:Body>
<employee>
<first-name>Jane</first-name>
<last-name>Doe</last-name>
<address>Paris</address>
<phone-number>123456</phone-number>
</employee>
</soap:Body>
</soap:Envelope>
```

**Signed SOAP Message** 

```xml
<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope
xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"
xmlns:xsd="http://www.w3.org/2001/XMLSchema"
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
<soap:Header>
<wsse:Security
xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext1.0.xsd"
xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility1.0.xsd" soap:mustUnderstand="1">
<wsse:BinarySecurityToken EncodingType="http://docs.oasis-open.org/wss/2004/01/oasis200401-wss-soap-message-security-1.0#Base64Binary" ValueType="http://docs.oasisopen.org/wss/2004/01/oasis-200401-wss-x509-token-profile-1.0#X509v3" wsu:Id="X509-
4EC4D91315F4584EAF159480705562911">MIIB7TCCAZGgAwIBAgIEPOpcIDAMBggqhkjOPQ
QDAQUAMGsxCzAJBgNVBAYTAklOMRQwEgYDVQQIEwtNYWhhcmFzaHRyYTENMAsGA1UE
BxMEUHVuZTEOMAwGA1UEChMFVGliY28xFDASBgNVBAsTC0VuZ2luZWVyaW5nMREwDwY
DVQQDEwhQcmFzaGFudDAeFw0yMDA1MTkxMjU1NDNaFw0yMDA4MTcxMjU1NDNaMGsxCz
AJBgNVBAYTAklOMRQwEgYDVQQIEwtNYWhhcmFzaHRyYTENMAsGA1UEBxMEUHVuZTEO
MAwGA1UEChMFVGliY28xFDASBgNVBAsTC0VuZ2luZWVyaW5nMREwDwYDVQQDEwhQcmF
zaGFudDBZMBMGByqGSM49AgEGCCqGSM49AwEHA0IABEzzDOk73SzrdD2vF4ZMLnKoUO8
d4dMGxMiygJHAti3e4IXt3+AnopmHURSC6cHapv34O2Yl26QAa4FZ4JSZXWyjITAfMB0GA1UdD
gQWBBTHhreOVYzAHWGxT3uQrIJZvsYbyDAMBggqhkjOPQQDAQUAA0gAMEUCIC9lUHTFgW
UvmRsbbZ17yNm50AUjlOIdl14/+wavzMpqAiEAoiACwZjgPcHxfiLXrLH6Ww0vAL4guhgHdxgE9vr
K4F0=</wsse:BinarySecurityToken>
<ds:Signature
xmlns:ds="http://www.w3.org/2000/09/xmldsig#" Id="SIG4EC4D91315F4584EAF159480705563015">
<ds:SignedInfo>
<ds:CanonicalizationMethod Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#">
<ec:InclusiveNamespaces
xmlns:ec="http://www.w3.org/2001/10/xml-exc-c14n#" PrefixList="soap xsd xsi"/>
</ds:CanonicalizationMethod>
<ds:SignatureMethod Algorithm="http://www.w3.org/2001/04/xmldsig-more#ecdsasha224"/>
<ds:Reference URI="#id-4EC4D91315F4584EAF159480705562914">
<ds:Transforms>
<ds:Transform Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#">
<ec:InclusiveNamespaces
xmlns:ec="http://www.w3.org/2001/10/xml-exc-c14n#" PrefixList="xsd xsi"/>
</ds:Transform>
</ds:Transforms>
<ds:DigestMethod Algorithm="http://www.w3.org/2001/04/xmldsigmore#sha224"/>
<ds:DigestValue>W+bl1ziNc6F8LejvwT0A7YPieco1c+5Se81gwQ==</ds:DigestValue>
</ds:Reference>
</ds:SignedInfo>
<ds:SignatureValue>LhbIzcfsNOgOBV8aUcyYgpHmxizOHCRwO49F5myE3A+Z5SWIZbnpOHUk
kIsYSl+CJFbL35hAHgDSIbqjaRAa5g==</ds:SignatureValue>
<ds:KeyInfo Id="KI-4EC4D91315F4584EAF159480705562912">
<wsse:SecurityTokenReference wsu:Id="STR4EC4D91315F4584EAF159480705562913">
<wsse:Reference URI="#X509-4EC4D91315F4584EAF159480705562911"
ValueType="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-x509-token-profile1.0#X509v3"/>
</wsse:SecurityTokenReference>
</ds:KeyInfo>
</ds:Signature>
</wsse:Security>
</soap:Header>
<soap:Body
xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility1.0.xsd" wsu:Id="id-4EC4D91315F4584EAF159480705562914">
<employee>
<first-name>Jane</first-name>
<last-name>Doe</last-name>
<address>Paris</address>
<phone-number>123456</phone-number>
</employee>
</soap:Body>
</soap:Envelope>
```

**Using SHA256withECDSA**

Pre-Input configurations 

```xml
enable_signature:true
signature_algorithm:SHA256withECDSA
```

**Sample SOAP request** 

```xml
<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope
xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"
xmlns:xsd="http://www.w3.org/2001/XMLSchema"
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
<soap:Body>
<employee>
<first-name>Jane</first-name>
<last-name>Doe</last-name>
<address>Paris</address>
<phone-number>123456</phone-number>
</employee>
</soap:Body>
</soap:Envelope>
```

**Signed SOAP Message** 

```xml
<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope
xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"
xmlns:xsd="http://www.w3.org/2001/XMLSchema"
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
<soap:Header>
<wsse:Security
xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext1.0.xsd"
xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility1.0.xsd" soap:mustUnderstand="1">
<wsse:BinarySecurityToken EncodingType="http://docs.oasis-open.org/wss/2004/01/oasis200401-wss-soap-message-security-1.0#Base64Binary" ValueType="http://docs.oasisopen.org/wss/2004/01/oasis-200401-wss-x509-token-profile-1.0#X509v3" wsu:Id="X509-
4EC4D91315F4584EAF159480726827416">MIIB7DCCAZGgAwIBAgIEDxtKGjAMBggqhkjOPQQ
DAgUAMGsxCzAJBgNVBAYTAklOMRQwEgYDVQQIEwtNYWhhcmFzaHRyYTENMAsGA1UEBx
MEUHVuZTEOMAwGA1UEChMFVGliY28xFDASBgNVBAsTC0VuZ2luZWVyaW5nMREwDwYDV
QQDEwhQcmFzaGFudDAeFw0yMDA1MTkxMTE4MDRaFw0yMDA4MTcxMTE4MDRaMGsxCzA
JBgNVBAYTAklOMRQwEgYDVQQIEwtNYWhhcmFzaHRyYTENMAsGA1UEBxMEUHVuZTEOM
AwGA1UEChMFVGliY28xFDASBgNVBAsTC0VuZ2luZWVyaW5nMREwDwYDVQQDEwhQcmFz
aGFudDBZMBMGByqGSM49AgEGCCqGSM49AwEHA0IABK0IlluLkZz5B9PinjcJJnwVk3EyLSV3
LBrUXTZcbiVewCy3kcxlG77ip5/JWlg7R+QH3VpndyoclAyk/3lT4PmjITAfMB0GA1UdDgQWBBRR
dxQLaKAZOmNW/kaFuNeZIusvTDAMBggqhkjOPQQDAgUAA0cAMEQCIBWTfJ9ujvSezlDsyzetR
LwRi+Ax7WFWP1WHqNwH1XWZAiAuFFQjcp24smaaIY7UI34Oju8iFFsidAku/FCSIY7A4g==</ws
se:BinarySecurityToken>
<ds:Signature
xmlns:ds="http://www.w3.org/2000/09/xmldsig#" Id="SIG4EC4D91315F4584EAF159480726827620">
<ds:SignedInfo>
<ds:CanonicalizationMethod Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#">
<ec:InclusiveNamespaces
xmlns:ec="http://www.w3.org/2001/10/xml-exc-c14n#" PrefixList="soap xsd xsi"/>
</ds:CanonicalizationMethod>
<ds:SignatureMethod Algorithm="http://www.w3.org/2001/04/xmldsig-more#ecdsasha256"/>
<ds:Reference URI="#id-4EC4D91315F4584EAF159480726827419">
<ds:Transforms>
<ds:Transform Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#">
<ec:InclusiveNamespaces
xmlns:ec="http://www.w3.org/2001/10/xml-exc-c14n#" PrefixList="xsd xsi"/>
</ds:Transform>
</ds:Transforms>
<ds:DigestMethod Algorithm="http://www.w3.org/2001/04/xmlenc#sha256"/>
<ds:DigestValue>d6iDFfNDZKPKsMLOS7aveVCd9ZDazyo8qi5jSc2ibi4=</ds:DigestValue>
</ds:Reference>
</ds:SignedInfo>
<ds:SignatureValue>IOz/2F+N/0ZCN45tqxHdiYcBZCHJv87K6yxxD98VT87l+zpNUwz+IvusZW+P
evX4lesKklAcTePC9Uf/LYlSuA==</ds:SignatureValue>
<ds:KeyInfo Id="KI-4EC4D91315F4584EAF159480726827417">
<wsse:SecurityTokenReference wsu:Id="STR4EC4D91315F4584EAF159480726827418">
<wsse:Reference URI="#X509-4EC4D91315F4584EAF159480726827416"
ValueType="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-x509-token-profile1.0#X509v3"/>
</wsse:SecurityTokenReference>
</ds:KeyInfo>
</ds:Signature>
</wsse:Security>
</soap:Header>
<soap:Body
xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility1.0.xsd" wsu:Id="id-4EC4D91315F4584EAF159480726827419">
<employee>
<first-name>Jane</first-name>
<last-name>Doe</last-name>
<address>Paris</address>
<phone-number>123456</phone-number>
</employee>
</soap:Body>
</soap:Envelope>
```

**Using SHA384withECDSA**

Pre-Input configurations 

```xml
enable_signature:true
signature_algorithm:SHA384withECDSA
```

**Sample SOAP request** 

```xml
<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope
xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"
xmlns:xsd="http://www.w3.org/2001/XMLSchema"
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
<soap:Body>
<employee>
<first-name>Jane</first-name>
<last-name>Doe</last-name>
<address>Paris</address>
<phone-number>123456</phone-number>
</employee>
</soap:Body>
</soap:Envelope>
```

**Signed SOAP Message** 

```xml
<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"
xmlns:xsd="http://www.w3.org/2001/XMLSchema"
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
<soap:Header>
<wsse:Security xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wsswssecurity-secext-1.0.xsd" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-
wss-wssecurity-utility-1.0.xsd" soap:mustUnderstand="1">
<wsse:BinarySecurityToken EncodingType="http://docs.oasis-open.org/wss/2004/01/oasis200401-wss-soap-message-security-1.0#Base64Binary" ValueType="http://docs.oasisopen.org/wss/2004/01/oasis-200401-wss-x509-token-profile-1.0#X509v3" wsu:Id="X509-
4EC4D91315F4584EAF159480747320621">MIIB7DCCAZGgAwIBAgIEPLruITAMBggqhkjOPQQ
DAwUAMGsxCzAJBgNVBAYTAklOMRQwEgYDVQQIEwtNYWhhcmFzaHRyYTENMAsGA1UEBx
MEUHVuZTEOMAwGA1UEChMFVGliY28xFDASBgNVBAsTC0VuZ2luZWVyaW5nMREwDwYDV
QQDEwhQcmFzaGFudDAeFw0yMDA1MTkxMTE5NDRaFw0yMDA4MTcxMTE5NDRaMGsxCzAJ
BgNVBAYTAklOMRQwEgYDVQQIEwtNYWhhcmFzaHRyYTENMAsGA1UEBxMEUHVuZTEOMA
wGA1UEChMFVGliY28xFDASBgNVBAsTC0VuZ2luZWVyaW5nMREwDwYDVQQDEwhQcmFza
GFudDBZMBMGByqGSM49AgEGCCqGSM49AwEHA0IABJyzxZRNMOV69k7nQRXFuC7syNRs
3He8PU5QiNZ+FDICdk0+WWkBddUKG6yHVFDILlvucE3AY9hcVDRvnwPGxH2jITAfMB0GA1Ud
DgQWBBTDvGFwRs2ilC07O6v+K7ybavbxEzAMBggqhkjOPQQDAwUAA0cAMEQCIBgYk1inygXI
TPwajO9i7eGg9J8/iyGEdx4MR7V1OOgoAiAMU4fOj2GF2awhAXG/llriEaaibDQRnsHlBDIsQN43h
A==</wsse:BinarySecurityToken>
<ds:Signature xmlns:ds="http://www.w3.org/2000/09/xmldsig#" Id="SIG4EC4D91315F4584EAF159480747320825">
<ds:SignedInfo>
<ds:CanonicalizationMethod Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#">
<ec:InclusiveNamespaces xmlns:ec="http://www.w3.org/2001/10/xml-exc-c14n#"
PrefixList="soap xsd xsi"/>
</ds:CanonicalizationMethod>
<ds:SignatureMethod Algorithm="http://www.w3.org/2001/04/xmldsig-more#ecdsasha384"/>
<ds:Reference URI="#id-4EC4D91315F4584EAF159480747320724">
<ds:Transforms>
<ds:Transform Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#">
<ec:InclusiveNamespaces xmlns:ec="http://www.w3.org/2001/10/xml-exc-c14n#"
PrefixList="xsd xsi"/>
</ds:Transform>
</ds:Transforms>
<ds:DigestMethod Algorithm="http://www.w3.org/2001/04/xmldsig-more#sha384"/>
<ds:DigestValue>//A6Ih0spl0G7KakFAn2Hns7+aBJM8YSFNfbM3xtNN8xk332HubMRGTILoPJyY
hh</ds:DigestValue>
</ds:Reference>
</ds:SignedInfo>
<ds:SignatureValue>EPGJS0/BCj7XMoqZrgSblPze0ddP+kcgUmjCdV4TiXKSDIRwYi6/49X8Fnh+
N0AE1eUtpzuKdf9ysROdSnuPwg==</ds:SignatureValue>
<ds:KeyInfo Id="KI-4EC4D91315F4584EAF159480747320622">
<wsse:SecurityTokenReference wsu:Id="STR4EC4D91315F4584EAF159480747320623">
<wsse:Reference URI="#X509-4EC4D91315F4584EAF159480747320621"
ValueType="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-x509-token-profile1.0#X509v3"/>
</wsse:SecurityTokenReference>
</ds:KeyInfo>
</ds:Signature>
</wsse:Security
<soap:Body xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurityutility-1.0.xsd" wsu:Id="id-4EC4D91315F4584EAF159480747320724">
<employee>
<first-name>Jane</first-name>
<last-name>Doe</last-name>
<address>Paris</address>
<phone-number>123456</phone-number>
</employee>
</soap:Body>
</soap:Envelope>
```

**Using SHA512withECDSA**

Pre-Input configurations 

```xml
enable_signature:true
signature_algorithm:SHA512withECDSA
```

**Sample SOAP request** 

```xml
<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope
xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"
xmlns:xsd="http://www.w3.org/2001/XMLSchema"
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
<soap:Body>
<employee>
<first-name>Jane</first-name>
<last-name>Doe</last-name>
<address>Paris</address>
<phone-number>123456</phone-number>
</employee>
</soap:Body>
</soap:Envelope>
```

**Signed SOAP Message**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"
xmlns:xsd="http://www.w3.org/2001/XMLSchema"
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
<soap:Header>
<wsse:Security xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wsswssecurity-secext-1.0.xsd" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-
wss-wssecurity-utility-1.0.xsd" soap:mustUnderstand="1">
<wsse:BinarySecurityToken EncodingType="http://docs.oasis-open.org/wss/2004/01/oasis200401-wss-soap-message-security-1.0#Base64Binary" ValueType="http://docs.oasisopen.org/wss/2004/01/oasis-200401-wss-x509-token-profile-1.0#X509v3" wsu:Id="X509-
4EC4D91315F4584EAF159480765116926">MIIB7DCCAZGgAwIBAgIEQQfUTTAMBggqhkjOPQ
QDBAUAMGsxCzAJBgNVBAYTAklOMRQwEgYDVQQIEwtNYWhhcmFzaHRyYTENMAsGA1UE
BxMEUHVuZTEOMAwGA1UEChMFVGliY28xFDASBgNVBAsTC0VuZ2luZWVyaW5nMREwDwY
DVQQDEwhQcmFzaGFudDAeFw0yMDA1MTkxMTIxMzFaFw0yMDA4MTcxMTIxMzFaMGsxCzA
JBgNVBAYTAklOMRQwEgYDVQQIEwtNYWhhcmFzaHRyYTENMAsGA1UEBxMEUHVuZTEOM
AwGA1UEChMFVGliY28xFDASBgNVBAsTC0VuZ2luZWVyaW5nMREwDwYDVQQDEwhQcmFz
aGFudDBZMBMGByqGSM49AgEGCCqGSM49AwEHA0IABMoUDtRd9Wsw5ck8Jj21AMMZTcB
OO/cw2hpK9NJbDUmC8sKLPWEYZ3DhqxkGX9fWcp8NQfupcSxMOGPB7w3az9qjITAfMB0GA1
UdDgQWBBSKMj9yroB5ZiWXhKG3tTV+RaYi3jAMBggqhkjOPQQDBAUAA0cAMEQCID6vHSOjZ
Mc43ukwJo2TQC2qruo9l43e5DsWmhxJMFTKAiBZWJ7FQftEcKHliuZyIpnnZ6Hxjvqz7MFbWGcA
qtOfnQ==</wsse:BinarySecurityToken>
<ds:Signature xmlns:ds="http://www.w3.org/2000/09/xmldsig#" Id="SIG4EC4D91315F4584EAF159480765117130">
<ds:SignedInfo>
<ds:CanonicalizationMethod Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#">
<ec:InclusiveNamespaces xmlns:ec="http://www.w3.org/2001/10/xml-exc-c14n#"
PrefixList="soap xsd xsi"/>
</ds:CanonicalizationMethod>
<ds:SignatureMethod Algorithm="http://www.w3.org/2001/04/xmldsig-more#ecdsasha512"/>
<ds:Reference URI="#id-4EC4D91315F4584EAF159480765117029">
<ds:Transforms>
<ds:Transform Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#">
<ec:InclusiveNamespaces xmlns:ec="http://www.w3.org/2001/10/xml-exc-c14n#"
PrefixList="xsd xsi"/>
</ds:Transform>
</ds:Transforms>
<ds:DigestMethod Algorithm="http://www.w3.org/2001/04/xmlenc#sha512"/>
<ds:DigestValue>dkzkmisRzz4ly1bE01Rn4du7/HosKuc2x0UmwmCBGxeGJi5nfHqbBESUgMOo4
gM0mHSP2Z4CKxlf5X1nJVeLqw==</ds:DigestValue>
</ds:Reference>
</ds:SignedInfo>
<ds:SignatureValue>gDEODbxqIP7vZV0g1Nxkrh97ahHReL7Un7KyBw8/Xr6HyNrRjHgfBOPTWU
snFEL/KwKx7bDSWFyKHQmjknNIDA==</ds:SignatureValue>
<ds:KeyInfo Id="KI-4EC4D91315F4584EAF159480765116927">
<wsse:SecurityTokenReference wsu:Id="STR4EC4D91315F4584EAF159480765116928">
<wsse:Reference URI="#X509-4EC4D91315F4584EAF159480765116926"
ValueType="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-x509-token-profile1.0#X509v3"/>
</wsse:SecurityTokenReference>
</ds:KeyInfo>
</ds:Signature>
</wsse:Security>
</soap:Header>
<soap:Body xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurityutility-1.0.xsd" wsu:Id="id-4EC4D91315F4584EAF159480765117029">
<employee>
<first-name>Jane</first-name>
<last-name>Doe</last-name>
<address>Paris</address>
<phone-number>123456</phone-number>
</employee>
</soap:Body>
</soap:Envelope>
```

**Additional SOAP Encryption Examples**

**Encryption Algorithm** : http://www.w3.org/2001/04/xmlenc#tripledes-cbc And

**Key Transport Method** : http://www.w3.org/2001/04/xmlenc#rsa-1\_5**

Pre-Input configurations 

```xml
enable_encyption:true
encryption_algorithm:tripledes-cbc
key_transport_method:RSA15
```

**Sample SOAP request** 

```xml
<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope
xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"
xmlns:xsd="http://www.w3.org/2001/XMLSchema"
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
<soap:Body>
<employee>
<first-name>Jane</first-name>
<last-name>Doe</last-name>
<address>Paris</address>
<phone-number>123456</phone-number>
</employee>
</soap:Body>
</soap:Envelope>
```

**Encrypted SOAP Message**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"
xmlns:xsd="http://www.w3.org/2001/XMLSchema"
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
<soap:Header>
<wsse:Security xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wsswssecurity-secext-1.0.xsd"
xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility1.0.xsd"
soap:mustUnderstand="1">
<xenc:EncryptedKey xmlns:xenc="http://www.w3.org/2001/04/xmlenc#" Id="EK4EC4D91315F4584EAF159480882417031">
<xenc:EncryptionMethod Algorithm="http://www.w3.org/2001/04/xmlenc#rsa-1_5" />
<ds:KeyInfo xmlns:ds="http://www.w3.org/2000/09/xmldsig#">
<wsse:SecurityTokenReference>
<wsse:KeyIdentifier
EncodingType="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-soapmessage-security-1.0#Base64Binary"
ValueType="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-x509-tokenprofile-1.0#X509SubjectKeyIdentifier">
GAt7b/Amt76SVjDUyX79Cak3ZsA=</wsse:KeyIdentifier>
</wsse:SecurityTokenReference>
</ds:KeyInfo>
<xenc:CipherData>
<xenc:CipherValue>
CDyjqneogEbA3xTBLXfb1va5QRbmwj6Cjizd96aMP7RVwG8XnVwzvENgZM5Wqt3y4mGoxUzI0x
3OF9Xss9hsz+Qx4aHVcfJjWV3dma1Nt6i8rrK7dUXPS4f101OqIiTJl8/MDQnVVm69TL/EiurkDNH
Rlnq+M/77ejGak/PlNxQzMVEpTWwjuMMUW6SA3wqtdEyJWj1AwcHQ8McBZkQnHowQLJDKn5
9kJfbv/sT6jn15QubS1dfP/hCX+HYgUZLTY/3JHiB5FMornOQ3b4DQKqfxzmFcE4htifaVjQkhyZ8n
GxHqGVf63bXIfhSIyW19I6FyHPrxo//XAey6yUN1eg==
</xenc:CipherValue>
</xenc:CipherData>
<xenc:ReferenceList>
<xenc:DataReference URI="#ED-4EC4D91315F4584EAF159480882420532" />
</xenc:ReferenceList>
</xenc:EncryptedKey>
</wsse:Security>
</soap:Header>
<soap:Body>
<xenc:EncryptedData xmlns:xenc="http://www.w3.org/2001/04/xmlenc#" Id="ED4EC4D91315F4584EAF159480882420532"
Type="http://www.w3.org/2001/04/xmlenc#Content">
<xenc:EncryptionMethod Algorithm="http://www.w3.org/2001/04/xmlenc#tripledes-cbc" />
<ds:KeyInfo xmlns:ds="http://www.w3.org/2000/09/xmldsig#">
<wsse:SecurityTokenReference
xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-
secext-1.0.xsd"
xmlns:wsse11="http://docs.oasis-open.org/wss/oasis-wss-wssecurity-secext-1.1.xsd"
wsse11:TokenType="http://docs.oasis-open.org/wss/oasis-wss-soap-message-security1.1#EncryptedKey">
<wsse:Reference URI="#EK-4EC4D91315F4584EAF159480882417031" />
</wsse:SecurityTokenReference>
</ds:KeyInfo>
<xenc:CipherData>
<xenc:CipherValue>
eyBcdvjspRM9yJPDRciKG78yYUL5DGarrAvSLmavlBDr8zjdRR+zRnK1vmYSlOuXGfG++TFrmY
X+iQG951ujPscSPEe1hXVEqD7i/+0A4stssL+x/7LDWKsXeI0BE9v9CASPhr+/Pa+u4z7jTAd64Iqfj
pU+ln8LcAzVaNH00+eXW3v//2T3L6bzY/Y9ZPWQf6pzE5rp+gCoe3zmHI1S//01CZ4bgTjRr5Y1cnI
SMgqfIraM04dJgNI6MXfMFgMsLXoeB8fezh1ZDsDlraoziA==
</xenc:CipherValue>
</xenc:CipherData>
</xenc:EncryptedData>
</soap:Body>
</soap:Envelope>
```

**Encryption Algorithm : http://www.w3.org/2001/04/xmlenc#aes128-cbc. Key Transport Method : http://www.w3.org/2001/04/xmlenc#rsa-oaep-mgf1p**

Pre-Input configurations 

```xml
enable_encyption:true
encryption_algorithm:aes128-cbc
key_transport_method:RSAOEP
```

**Sample SOAP request** 

```xml
<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope
xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"
xmlns:xsd="http://www.w3.org/2001/XMLSchema"
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
<soap:Body>
<employee>
<first-name>Jane</first-name>
<last-name>Doe</last-name>
<address>Paris</address>
<phone-number>123456</phone-number>
</employee>
</soap:Body>
</soap:Envelope>
```

**Encrypted SOAP Message** 

```xml
<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"
xmlns:xsd="http://www.w3.org/2001/XMLSchema"
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
<soap:Header>
<wsse:Security xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wsswssecurity-secext-1.0.xsd"
xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility1.0.xsd"
soap:mustUnderstand="1">
<xenc:EncryptedKey xmlns:xenc="http://www.w3.org/2001/04/xmlenc#" Id="EK4EC4D91315F4584EAF159480913377433">
<xenc:EncryptionMethod Algorithm="http://www.w3.org/2001/04/xmlenc#rsa-oaep-mgf1p"
/>
<ds:KeyInfo xmlns:ds="http://www.w3.org/2000/09/xmldsig#">
<wsse:SecurityTokenReference>
<wsse:KeyIdentifier
EncodingType="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-soapmessage-security-1.0#Base64Binary"
ValueType="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-x509-tokenprofile-1.0#X509SubjectKeyIdentifier">
GAt7b/Amt76SVjDUyX79Cak3ZsA=</wsse:KeyIdentifier>
</wsse:SecurityTokenReference>
</ds:KeyInfo>
<xenc:CipherData>
<xenc:CipherValue>
Kmxki3Qz/mCXzUWCLQnGAzbUow+pU6ROPSU08yuvYBRx7ewirRadnaz39uSfBmtd4svAJoC8x
lHVEcKuEPMWPo/wCenVmU96HQ1E2hl4YiPmTgBFVrAbbXaYUlbRBnVTMA4+dPRYaWvUWzh
XkeNOCktT7m4ZyY6E9WJ06MnGdWJaO/pXnQROeJs5F+hIB1IAfW+sfkP+PDHvzkSnY0io0Nhd
POl/K6Lp35nkVZHmjf24fhqLO/BISQhwi3WElvIvuqLMqZzcgFdquPHUbcJjCDaRsivdLutI+6Nq2G1
HJw38rEwN7s6WJfD4iqu2ZknediJ/Bkr2ZuBNy6IxANPpEA==
</xenc:CipherValue>
</xenc:CipherData>
<xenc:ReferenceList>
<xenc:DataReference URI="#ED-4EC4D91315F4584EAF159480913377734" />
</xenc:ReferenceList>
</xenc:EncryptedKey>
</wsse:Security>
</soap:Header>
<soap:Body>
<xenc:EncryptedData xmlns:xenc="http://www.w3.org/2001/04/xmlenc#" Id="ED-
4EC4D91315F4584EAF159480913377734"
Type="http://www.w3.org/2001/04/xmlenc#Content">
<xenc:EncryptionMethod Algorithm="http://www.w3.org/2001/04/xmlenc#aes128-cbc" />
<ds:KeyInfo xmlns:ds="http://www.w3.org/2000/09/xmldsig#">
<wsse:SecurityTokenReference
xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecuritysecext-1.0.xsd"
xmlns:wsse11="http://docs.oasis-open.org/wss/oasis-wss-wssecurity-secext-1.1.xsd"
wsse11:TokenType="http://docs.oasis-open.org/wss/oasis-wss-soap-message-security1.1#EncryptedKey">
<wsse:Reference URI="#EK-4EC4D91315F4584EAF159480913377433" />
</wsse:SecurityTokenReference>
</ds:KeyInfo>
<xenc:CipherData>
<xenc:CipherValue>
o/OohlA/UIbEere6f6S4GyQfBQfimOrPrbvqk6t/2YCJMhwxi10mYLOO6iCd7IqlGdsVwVbAz+w8XQ
UNNBa3DyjxUgE65mn+sI2MTjzloVl9bdyXPAicfejHvkqtVMcm/yPlTOuyC5+N4dx9+EXpucGqoiLC
37x/1N543NJls84x6XogWCpPWgpCvedb957p2DlHrPsLsWj+snCLpJgfZ7C4M8WTn+334C0bFW
0NzgD6FfIu+uSGLok9x6xSzY6rIdwFgaD3wRXXAzAmpVf2deVvOxeU0UuODkzB/9gV+tE=
</xenc:CipherValue>
</xenc:CipherData>
</xenc:EncryptedData>
</soap:Body>
</soap:Envelope>
```

**Encryption Algorithm: http://www.w3.org/2009/xmlenc11#aes128-gcm.** 

**Key Transport Method: http://www.w3.org/2001/04/xmlenc#rsa-1\_5**

Pre-Input configurations 

```xml
enable_encyption:true
encryption_algorithm:aes128-gcm
key_transport_method:RSA15
```

**Sample SOAP request** 

```xml
<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope
xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"
xmlns:xsd="http://www.w3.org/2001/XMLSchema"
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
<soap:Body>
<employee>
<first-name>Jane</first-name>
<last-name>Doe</last-name>
<address>Paris</address>
<phone-number>123456</phone-number>
</employee>
</soap:Body>
</soap:Envelope>
```

**Encrypted SOAP Message**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"
xmlns:xsd="http://www.w3.org/2001/XMLSchema"
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
<soap:Header>
<wsse:Security xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wsswssecurity-secext-1.0.xsd"
xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility1.0.xsd"
soap:mustUnderstand="1">
<xenc:EncryptedKey xmlns:xenc="http://www.w3.org/2001/04/xmlenc#" Id="EK4EC4D91315F4584EAF159480981833335">
<xenc:EncryptionMethod Algorithm="http://www.w3.org/2001/04/xmlenc#rsa-1_5" />
<ds:KeyInfo xmlns:ds="http://www.w3.org/2000/09/xmldsig#">
<wsse:SecurityTokenReference>
<wsse:KeyIdentifier
EncodingType="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-soapmessage-security-1.0#Base64Binary"
ValueType="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-x509-tokenprofile-1.0#X509SubjectKeyIdentifier">
GAt7b/Amt76SVjDUyX79Cak3ZsA=</wsse:KeyIdentifier>
</wsse:SecurityTokenReference>
</ds:KeyInfo>
<xenc:CipherData>
<xenc:CipherValue>
OsvA22dtunobWNSuFNoqjlW/WVOeTdWIvocznlLlKdmIJm9U8JjeOBaHDSbACzuORxFgNCs/76
z3lYAHDinDDqeWOtlTAlmiy8vDf8bFHAoJu1U6OeKPN/o/HZrTupjdUCOfr6erRbFM8nMWPz3b07
xe0ZJSS4XdD6782GQ3rE/ULA+Wjxxy+DyoJ1G61NxxkJo92Bg8Y8hvMiP+9a9btFwewIp+fK7YkB
NByAvnGlug/g9NJHauVxkMzAuRsbsH+l/amCsTbeExB4zCixKT/xtESLsQelSCXFQDySve9gdksI
WLcswKnP3VCjbso3bDVSzWQxA446l6qnM8xqTmMA==
</xenc:CipherValue>
</xenc:CipherData>
<xenc:ReferenceList>
<xenc:DataReference URI="#ED-4EC4D91315F4584EAF159480981833836" />
</xenc:ReferenceList>
</xenc:EncryptedKey>
</wsse:Security>
</soap:Header>
<soap:Body>
<xenc:EncryptedData xmlns:xenc="http://www.w3.org/2001/04/xmlenc#" Id="ED4EC4D91315F4584EAF159480981833836"
Type="http://www.w3.org/2001/04/xmlenc#Content">
<xenc:EncryptionMethod Algorithm="http://www.w3.org/2009/xmlenc11#aes128-gcm" />
<ds:KeyInfo xmlns:ds="http://www.w3.org/2000/09/xmldsig#">
<wsse:SecurityTokenReference
xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecuritysecext-1.0.xsd"
xmlns:wsse11="http://docs.oasis-open.org/wss/oasis-wss-wssecurity-secext-1.1.xsd"
wsse11:TokenType="http://docs.oasis-open.org/wss/oasis-wss-soap-message-security1.1#EncryptedKey">
<wsse:Reference URI="#EK-4EC4D91315F4584EAF159480981833335" />
</wsse:SecurityTokenReference>
</ds:KeyInfo>
<xenc:CipherData>
<xenc:CipherValue>
P02nXtCP7E3kCStk1TX70jU7rlOim9jgUm5S72M6Ny5p6bAE2yNv5dcVOh5EAWRoYvqVcZzMc
Oeq38cq9/T34eo5VG44IVPh4DHqz+ZIpuQ+elMR8GjPFCW1xdvsF8TOffssy+odlVbGHsW10adv8
PkP6JYyfPwdOA4fhaAeZqpCx2X7lg1SG03kx9x2nxijbEm5UsZ5FRMU36SR9Wqpzd3jo3sDlqC+k
V/2xv+cg9oa+gMDN/BRFQtcFOERP6YK6HWni0VkMbAL13SnBoVKqK8WAw0IIXaItl5wzEd3ZR
M=
</xenc:CipherValue>
</xenc:CipherData>
</xenc:EncryptedData>
</soap:Body>
</soap:Envelope>
```

**Encryption Algorithm: http://www.w3.org/2001/04/xmlenc#aes192-cbc.** 

**Key Transport Method: http://www.w3.org/2001/04/xmlenc#rsa-oaep-mgf1p**

Pre-Input configurations 

```xml
enable_encyption:true
encryption_algorithm:aes192-cbc
key_transport_method:RSAOEP
```

**Sample SOAP request** 

```xml
<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope
xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"
xmlns:xsd="http://www.w3.org/2001/XMLSchema"
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
<soap:Body>
<employee>
<first-name>Jane</first-name>
<last-name>Doe</last-name>
<address>Paris</address>
<phone-number>123456</phone-number>
</employee>
</soap:Body>
</soap:Envelope>
```

**Encrypted SOAP Message**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"
xmlns:xsd="http://www.w3.org/2001/XMLSchema"
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
<soap:Header>
<wsse:Security xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wsswssecurity-secext-1.0.xsd"
xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility1.0.xsd"
soap:mustUnderstand="1">
<xenc:EncryptedKey xmlns:xenc="http://www.w3.org/2001/04/xmlenc#" Id="EK4EC4D91315F4584EAF159481009212737">
<xenc:EncryptionMethod Algorithm="http://www.w3.org/2001/04/xmlenc#rsa-oaep-mgf1p"
/>
<ds:KeyInfo xmlns:ds="http://www.w3.org/2000/09/xmldsig#">
<wsse:SecurityTokenReference>
<wsse:KeyIdentifier
EncodingType="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-soapmessage-security-1.0#Base64Binary"
ValueType="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-x509-tokenprofile-1.0#X509SubjectKeyIdentifier">
GAt7b/Amt76SVjDUyX79Cak3ZsA=</wsse:KeyIdentifier>
</wsse:SecurityTokenReference>
</ds:KeyInfo>
<xenc:CipherData>
<xenc:CipherValue>
Zkm096BVebw+S9SV3wK9Lp95mBo+1Cbj8ke7Vjm3kvePU50YgT+ejcwdP1VmieGBXKSKL7Ojr
CZzllnemIakhmO3+uwM6ISkCddTVQT7CZoJpKFkwjOmLFUWVKb7VK6I3sgaX1Ss7U/cjoR4rsN
bjYms0B1YBusdXlKFjdUOh4j+9Y8pQqrkxBYZYnvgv94gWxkHdsPL97cB/RaUDs2pX00ug14Jvba
YETo3SU4+q7E/nLEJeFbs4BSVQRQ96DLdctCj5d/VrgVWxCgGhhv1xXnsuTC5GwjSVs5jgwal20
xdXI00TrEVK1SeRbOq115/zY9EsGRv8POfVDLrO4XUwA==
</xenc:CipherValue>
</xenc:CipherData>
<xenc:ReferenceList>
<xenc:DataReference URI="#ED-4EC4D91315F4584EAF159481009212738" />
</xenc:ReferenceList>
</xenc:EncryptedKey>
</wsse:Security>
</soap:Header>
<soap:Body>
<xenc:EncryptedData xmlns:xenc="http://www.w3.org/2001/04/xmlenc#" Id="ED4EC4D91315F4584EAF159481009212738"
Type="http://www.w3.org/2001/04/xmlenc#Content">
<xenc:EncryptionMethod Algorithm="http://www.w3.org/2001/04/xmlenc#aes192-cbc" />
<ds:KeyInfo xmlns:ds="http://www.w3.org/2000/09/xmldsig#">
<wsse:SecurityTokenReference
xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecuritysecext-1.0.xsd"
xmlns:wsse11="http://docs.oasis-open.org/wss/oasis-wss-wssecurity-secext-1.1.xsd"
wsse11:TokenType="http://docs.oasis-open.org/wss/oasis-wss-soap-message-security1.1#EncryptedKey">
<wsse:Reference URI="#EK-4EC4D91315F4584EAF159481009212737" />
</wsse:SecurityTokenReference>
</ds:KeyInfo>
<xenc:CipherData>
<xenc:CipherValue>
1hfaPDISdL9YQeCPTkmBIwkurgV7ztDw7k06uwbY7YLK6YDVyorZbWL3i7FDh3TS6WUyJqi9/Ra
5ubeZgHvEdimmgxiSszBrrzYd8bpsTM6dDnHnnAYo90SaDZjuPkyKxZPDgoSaa8KHyi0Ic6Mxc7a
md2WVfPW/rXaV1U7ZlQueNnndeTk9+ZSnXOkBuuzf6kU01WFv/iGBRiKdfENhkCLxnQIPHMa5a
PVDJ4aAS+/LEX8nJ7oPwLD/NOGIJZowR5vIOr9egxONOHhIhQLftji+U6tMEZ4dCUiAkeHIb1k=
</xenc:CipherValue>
</xenc:CipherData>
</xenc:EncryptedData>
</soap:Body>
</soap:Envelope>
```

**Encryption Algorithm: http://www.w3.org/2009/xmlenc11#aes192-gcm.** 

**Key Transport Method: http://www.w3.org/2001/04/xmlenc#rsa-1\_5**

Pre-Input configurations 

```xml
enable_encyption:true
encryption_algorithm:aes192-gcm
key_transport_method:RSA15
```

**Sample SOAP request** 

```xml
<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope
xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"
xmlns:xsd="http://www.w3.org/2001/XMLSchema"
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
<soap:Body>
<employee>
<first-name>Jane</first-name>
<last-name>Doe</last-name>
<address>Paris</address>
<phone-number>123456</phone-number>
</employee>
</soap:Body>
</soap:Envelope>
```

**Encrypted SOAP Message** 

```xml
<?xml version="1.0" encoding="UTF-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"
xmlns:xsd="http://www.w3.org/2001/XMLSchema"
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
<soap:Header>
<wsse:Security xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wsswssecurity-secext-1.0.xsd"
xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility1.0.xsd"
soap:mustUnderstand="1">
<xenc:EncryptedKey xmlns:xenc="http://www.w3.org/2001/04/xmlenc#" Id="EK4EC4D91315F4584EAF159481027659139">
<xenc:EncryptionMethod Algorithm="http://www.w3.org/2001/04/xmlenc#rsa-1_5" />
<ds:KeyInfo xmlns:ds="http://www.w3.org/2000/09/xmldsig#">
<wsse:SecurityTokenReference>
<wsse:KeyIdentifier
EncodingType="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-soapmessage-security-1.0#Base64Binary"
ValueType="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-x509-tokenprofile-1.0#X509SubjectKeyIdentifier">
GAt7b/Amt76SVjDUyX79Cak3ZsA=</wsse:KeyIdentifier>
</wsse:SecurityTokenReference>
</ds:KeyInfo>
<xenc:CipherData>
<xenc:CipherValue>
W20zkKU5cClPG+2ovDl/imAxLVXkhbuJNEuvgXZ6BIPjp+fnBKL/vQIYXFpYrCwdd3np40UhS6YU
7Fmvq5B/s6tIF/bC/6OsaCyRL01YsPXS6Pi1A73tOwxrG4qN1jkI9zxIWDEbOXRYUpBSjyE0hOnkp
FM5QUL1g9QSVwFcDE09fuTGjsmGt5X+JXAWhYEEHQ/ttFUdenbdJFokwmG1QyRBIpR8CvLy
QChp4qAvG1GiJe57xDC+nTCQqP0v1XtoPHRg/r1Dy59GGN6KqjK3xzfNdK4Mka/wi7+/s6gEuJ1u
WFI5BvXmYTZFEWkI17KTdFijfp0C64AFYNf//gaVBQ==
</xenc:CipherValue>
</xenc:CipherData>
<xenc:ReferenceList>
<xenc:DataReference URI="#ED-4EC4D91315F4584EAF159481027659140" />
</xenc:ReferenceList>
</xenc:EncryptedKey>
</wsse:Security>
</soap:Header>
<soap:Body>
<xenc:EncryptedData xmlns:xenc="http://www.w3.org/2001/04/xmlenc#" Id="ED4EC4D91315F4584EAF159481027659140"
Type="http://www.w3.org/2001/04/xmlenc#Content">
<xenc:EncryptionMethod Algorithm="http://www.w3.org/2009/xmlenc11#aes192-gcm" />
<ds:KeyInfo xmlns:ds="http://www.w3.org/2000/09/xmldsig#">
<wsse:SecurityTokenReference
xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecuritysecext-1.0.xsd"
xmlns:wsse11="http://docs.oasis-open.org/wss/oasis-wss-wssecurity-secext-1.1.xsd"
wsse11:TokenType="http://docs.oasis-open.org/wss/oasis-wss-soap-message-security1.1#EncryptedKey">
<wsse:Reference URI="#EK-4EC4D91315F4584EAF159481027659139" />
</wsse:SecurityTokenReference>
</ds:KeyInfo>
<xenc:CipherData>
<xenc:CipherValue>
PLexTgpB7CwYw2EhIU3dKXbYGkosV7r+lIMp11qsmkMNCSVspV176pjzzAXv+D2J7Wr2nn7T6R
pf4fX5+8kvAiMRiRd7NDjCrm9yV/sRZ+0dIcdjKXCmKceecOBdUHF4r5gMFhKbftOwz++LSu+Z0p
7TcvL39TDGVbUrjxVuniBB91clls2imdsrbGae2vJSI8QFF9biK9Y8qm41nXFKnjxznv6bDppHAoHC
S5vKdXbCJ7QRJhPsjI9XtXHD7ostAtSc3k8fyRgShAFpAMFBqAc7wVgt1lIQYbA3nwCsqtg=
</xenc:CipherValue>
</xenc:CipherData>
</xenc:EncryptedData>
</soap:Body>
</soap:Envelope>
```

**Encryption Algorithm: http://www.w3.org/2001/04/xmlenc#aes256-cbc.**

**Key Transport Method: http://www.w3.org/2001/04/xmlenc#rsa-oaep-mgf1p**

Pre-Input configurations

enable_encyption:true
encryption_algorithm:aes256-cbc
key\_transport\_method:RSAOEP

Sample SOAP request

```xml
&lt;?xml version="1.0" encoding="UTF-8"?&gt;
<soap:Envelope
    xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"
    xmlns:xsd="http://www.w3.org/2001/XMLSchema"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    &lt;soap:Body&gt;
        &lt;employee&gt;
            &lt;first-name&gt;Jane&lt;/first-name&gt;
            &lt;last-name&gt;Doe&lt;/last-name&gt;
            &lt;address&gt;Paris&lt;/address&gt;
            &lt;phone-number&gt;123456&lt;/phone-number&gt;
        &lt;/employee&gt;
    &lt;/soap:Body&gt;
&lt;/soap:Envelope&gt;

Encrypted Soap Message

&lt;?xml version="1.0" encoding="UTF-8"?&gt;
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    &lt;soap:Header&gt;
        <wsse:Security xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd"
            xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd"
            soap:mustUnderstand="1">
            &lt;xenc:EncryptedKey xmlns:xenc="http://www.w3.org/2001/04/xmlenc#" Id="EK-4EC4D91315F4584EAF159481052445841"&gt;
                &lt;xenc:EncryptionMethod Algorithm="http://www.w3.org/2001/04/xmlenc#rsa-oaep-mgf1p" /&gt;
                &lt;ds:KeyInfo xmlns:ds="http://www.w3.org/2000/09/xmldsig#"&gt;
                    &lt;wsse:SecurityTokenReference&gt;
                        <wsse:KeyIdentifier
                            EncodingType="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-soap-message-security-1.0#Base64Binary"
                            ValueType="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-x509-token-profile-1.0#X509SubjectKeyIdentifier">
                            GAt7b/Amt76SVjDUyX79Cak3ZsA=&lt;/wsse:KeyIdentifier&gt;
                    &lt;/wsse:SecurityTokenReference&gt;
                &lt;/ds:KeyInfo&gt;
                &lt;xenc:CipherData&gt;
                    &lt;xenc:CipherValue&gt;                    cerHQFmtIfkWOIfVL9MA4Qe5iIcmxwo/z4DjxP2zo6ncUr3lB0BB/aRap5EXHZwvheG8SQq413YnuYu7w6VoOuaWLRRG4T8iUIb2GWRq0JcSPd4P1wzbCzVC6/WyPHRnMHGbD5oyQIRmsuzLn28dghkAZIKmyInCctooFYMu6PEkVU4sF3ExmXPQBG972yw/NW0l2KaJu1PxEcDZUcV+7zusNkikdNH6UjVToJ3Jlaaq7ZctP4kntePd9GGq5cZBUOBagSAFFL7gdeEIyx8N4cWtcnUKmvMN8RcRzUVg0koFF8HC7ErHkn7TGb8wJSQviMWfw9LW84qdhr57YIBNCA==
                    &lt;/xenc:CipherValue&gt;
                &lt;/xenc:CipherData&gt;
                &lt;xenc:ReferenceList&gt;
                    &lt;xenc:DataReference URI="#ED-4EC4D91315F4584EAF159481052445842" /&gt;
                &lt;/xenc:ReferenceList&gt;
            &lt;/xenc:EncryptedKey&gt;
        &lt;/wsse:Security&gt;
    &lt;/soap:Header&gt;
    &lt;soap:Body&gt;
        <xenc:EncryptedData xmlns:xenc="http://www.w3.org/2001/04/xmlenc#" Id="ED-4EC4D91315F4584EAF159481052445842"
            Type="http://www.w3.org/2001/04/xmlenc#Content">
            &lt;xenc:EncryptionMethod Algorithm="http://www.w3.org/2001/04/xmlenc#aes256-cbc" /&gt;
            &lt;ds:KeyInfo xmlns:ds="http://www.w3.org/2000/09/xmldsig#"&gt;
                <wsse:SecurityTokenReference
                    xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd"
                    xmlns:wsse11="http://docs.oasis-open.org/wss/oasis-wss-wssecurity-secext-1.1.xsd"
                    wsse11:TokenType="http://docs.oasis-open.org/wss/oasis-wss-soap-message-security-1.1#EncryptedKey">
                    &lt;wsse:Reference URI="#EK-4EC4D91315F4584EAF159481052445841" /&gt;
                &lt;/wsse:SecurityTokenReference&gt;
            &lt;/ds:KeyInfo&gt;
            &lt;xenc:CipherData&gt;
                &lt;xenc:CipherValue&gt;
                    TinQHBJNIdoDqKINCJHbwcPAzFj0hCTtj6XT9DMbHOBINQSBiIMUbdyy4afxB9Pd/AaU4rOhQuqPLHOWyIdAY0lErHvLlrmf8nVBSdvLJ4wiP2tA+wDRH+ruHnyE5puIMnJ20taePjgo8RYFS25BTE92E+HEqC/IAWzJrpQw/Igha5xKk2bYgikhf2uvJyj/sZJLEpQZr48S0mfc2G9d0szaxV9cJON7BNRugdIaAmsvBRLQXVxHTn6c05G117aiU2XCx7GqFsAr2unbLUeOvAt6JL2JtVOBQx1O2f4+XDo=
                &lt;/xenc:CipherValue&gt;
            &lt;/xenc:CipherData&gt;
        &lt;/xenc:EncryptedData&gt;
    &lt;/soap:Body&gt;
&lt;/soap:Envelope&gt;
```

**Encryption Algorithm: http://www.w3.org/2009/xmlenc11#aes256-gcm.**

**Key Transport Method: http://www.w3.org/2001/04/xmlenc#rsa-1_5**

Pre-Input configurations

```xml
enable_encyption:true
encryption_algorithm:aes256-gcm
key_transport_method:RSA15
```

Sample SOAP request

```xml
&lt;?xml version="1.0" encoding="UTF-8"?&gt;
<soap:Envelope
    xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"
    xmlns:xsd="http://www.w3.org/2001/XMLSchema"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    &lt;soap:Body&gt;
        &lt;employee&gt;
            &lt;first-name&gt;Jane&lt;/first-name&gt;
            &lt;last-name&gt;Doe&lt;/last-name&gt;
            &lt;address&gt;Paris&lt;/address&gt;
            &lt;phone-number&gt;123456&lt;/phone-number&gt;
        &lt;/employee&gt;
    &lt;/soap:Body&gt;
&lt;/soap:Envelope&gt;

Encrypted SOAP Message

&lt;?xml version="1.0" encoding="UTF-8"?&gt;
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    &lt;soap:Header&gt;
        <wsse:Security xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd"
            xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd"
            soap:mustUnderstand="1">
            &lt;xenc:EncryptedKey xmlns:xenc="http://www.w3.org/2001/04/xmlenc#" Id="EK-4EC4D91315F4584EAF159481077527643"&gt;
                &lt;xenc:EncryptionMethod Algorithm="http://www.w3.org/2001/04/xmlenc#rsa-1_5" /&gt;
                &lt;ds:KeyInfo xmlns:ds="http://www.w3.org/2000/09/xmldsig#"&gt;
                    &lt;wsse:SecurityTokenReference&gt;
                        <wsse:KeyIdentifier
                            EncodingType="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-soap-message-security-1.0#Base64Binary"
                            ValueType="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-x509-token-profile-1.0#X509SubjectKeyIdentifier">
                            GAt7b/Amt76SVjDUyX79Cak3ZsA=&lt;/wsse:KeyIdentifier&gt;
                    &lt;/wsse:SecurityTokenReference&gt;
                &lt;/ds:KeyInfo&gt;
                &lt;xenc:CipherData&gt;
                    &lt;xenc:CipherValue&gt;                        VQ8NBPvQdNz4tSlSKnVO8fsUzY2fbzJM03OmRdfQQUytoQcfrF9UyeE2O5Dc+tnCt7bpO2Lam821e5eR+daHOGH1mJb5K0ZITSHWBcEVEcIKDatL439G/oPVG0L76NpX28Hrv3QRGNxlDOGAaxmp8cNF1dmSgpAqTUIYi7enbg5N4SN+H8bzrSciVi0mjdtn+en5Zd1Mwy3zHtjr/bnyOKu3dqOduWUXwSScSb1/YS5VHcxzKF82WkRN2VDXC+oiBwT6N3KqSgYsvpg7fF+8alSPbPGxrsne7Rvaq1Cd0I7gjQRFs+6G8Aa8pA6ceFoord2Rhwy0OiOLpbABF9o/ig==
                    &lt;/xenc:CipherValue&gt;
                &lt;/xenc:CipherData&gt;
                &lt;xenc:ReferenceList&gt;
                    &lt;xenc:DataReference URI="#ED-4EC4D91315F4584EAF159481077527744" /&gt;
                &lt;/xenc:ReferenceList&gt;
            &lt;/xenc:EncryptedKey&gt;
        &lt;/wsse:Security&gt;
    &lt;/soap:Header&gt;
    &lt;soap:Body&gt;
        <xenc:EncryptedData xmlns:xenc="http://www.w3.org/2001/04/xmlenc#" Id="ED-4EC4D91315F4584EAF159481077527744"
            Type="http://www.w3.org/2001/04/xmlenc#Content">
            &lt;xenc:EncryptionMethod Algorithm="http://www.w3.org/2009/xmlenc11#aes256-gcm" /&gt;
            &lt;ds:KeyInfo xmlns:ds="http://www.w3.org/2000/09/xmldsig#"&gt;
                <wsse:SecurityTokenReference
                    xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd"
                    xmlns:wsse11="http://docs.oasis-open.org/wss/oasis-wss-wssecurity-secext-1.1.xsd"
                    wsse11:TokenType="http://docs.oasis-open.org/wss/oasis-wss-soap-message-security-1.1#EncryptedKey">
                    &lt;wsse:Reference URI="#EK-4EC4D91315F4584EAF159481077527643" /&gt;
                &lt;/wsse:SecurityTokenReference&gt;
            &lt;/ds:KeyInfo&gt;
            &lt;xenc:CipherData&gt;
                &lt;xenc:CipherValue&gt;
                    nW1JFN3YKvxkVpdlfxQo/eOoOBNHhZrsm2/VkELmokcA8AEmiyRYYz5iDQZWiISchSL4Ra1Lg4MedmLhWyWIVQXLjq1+jiUX1zLFplPiz84RlrbrjkLPWff+epFV1lkVLvtX09i3qa1mZ6EOEpcwqqMT79jPw5ZG7O97+S4HAYQhBMiCcIg4fXhyawHsJ/dkJqOjq6ME0+iTcYzlc/0FLb06pColZ7d/wm9SWDMm2mYDHRthS/qBizaDXWl5kGjJL5ZWJd4V5jiJAv66QvmfB4MuJ4ylEN7MMp4iZrqensU=
                &lt;/xenc:CipherValue&gt;
            &lt;/xenc:CipherData&gt;
        &lt;/xenc:EncryptedData&gt;
    &lt;/soap:Body&gt;
&lt;/soap:Envelope&gt;
```

**Additional SOAP Decryption Example**

Post-Input configurations

enable_decryption:true

Encrypted SOAP response

```xml

&lt;?xml version="1.0" encoding="UTF-8"?&gt;
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    &lt;soap:Header&gt;
        <wsse:Security xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd"
            xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd"
            soap:mustUnderstand="1">
            &lt;xenc:EncryptedKey xmlns:xenc="http://www.w3.org/2001/04/xmlenc#" Id="EK-4EC4D91315F4584EAF159481077527643"&gt;
                &lt;xenc:EncryptionMethod Algorithm="http://www.w3.org/2001/04/xmlenc#rsa-1_5" /&gt;
                &lt;ds:KeyInfo xmlns:ds="http://www.w3.org/2000/09/xmldsig#"&gt;
                    &lt;wsse:SecurityTokenReference&gt;
                        <wsse:KeyIdentifier
                            EncodingType="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-soap-message-security-1.0#Base64Binary"
                            ValueType="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-x509-token-profile-1.0#X509SubjectKeyIdentifier">
                            GAt7b/Amt76SVjDUyX79Cak3ZsA=&lt;/wsse:KeyIdentifier&gt;
                    &lt;/wsse:SecurityTokenReference&gt;
                &lt;/ds:KeyInfo&gt;
                &lt;xenc:CipherData&gt;
                    &lt;xenc:CipherValue&gt;                        VQ8NBPvQdNz4tSlSKnVO8fsUzY2fbzJM03OmRdfQQUytoQcfrF9UyeE2O5Dc+tnCt7bpO2Lam821e5eR+daHOGH1mJb5K0ZITSHWBcEVEcIKDatL439G/oPVG0L76NpX28Hrv3QRGNxlDOGAaxmp8cNF1dmSgpAqTUIYi7enbg5N4SN+H8bzrSciVi0mjdtn+en5Zd1Mwy3zHtjr/bnyOKu3dqOduWUXwSScSb1/YS5VHcxzKF82WkRN2VDXC+oiBwT6N3KqSgYsvpg7fF+8alSPbPGxrsne7Rvaq1Cd0I7gjQRFs+6G8Aa8pA6ceFoord2Rhwy0OiOLpbABF9o/ig==
                    &lt;/xenc:CipherValue&gt;
                &lt;/xenc:CipherData&gt;
                &lt;xenc:ReferenceList&gt;
                    &lt;xenc:DataReference URI="#ED-4EC4D91315F4584EAF159481077527744" /&gt;
                &lt;/xenc:ReferenceList&gt;
            &lt;/xenc:EncryptedKey&gt;
        &lt;/wsse:Security&gt;
    &lt;/soap:Header&gt;
    &lt;soap:Body&gt;
        <xenc:EncryptedData xmlns:xenc="http://www.w3.org/2001/04/xmlenc#" Id="ED-4EC4D91315F4584EAF159481077527744"
            Type="http://www.w3.org/2001/04/xmlenc#Content">
            &lt;xenc:EncryptionMethod Algorithm="http://www.w3.org/2009/xmlenc11#aes256-gcm" /&gt;
            &lt;ds:KeyInfo xmlns:ds="http://www.w3.org/2000/09/xmldsig#"&gt;
                <wsse:SecurityTokenReference
                    xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd"
                    xmlns:wsse11="http://docs.oasis-open.org/wss/oasis-wss-wssecurity-secext-1.1.xsd"
                    wsse11:TokenType="http://docs.oasis-open.org/wss/oasis-wss-soap-message-security-1.1#EncryptedKey">
                    &lt;wsse:Reference URI="#EK-4EC4D91315F4584EAF159481077527643" /&gt;
                &lt;/wsse:SecurityTokenReference&gt;
            &lt;/ds:KeyInfo&gt;
            &lt;xenc:CipherData&gt;
                &lt;xenc:CipherValue&gt;
                    nW1JFN3YKvxkVpdlfxQo/eOoOBNHhZrsm2/VkELmokcA8AEmiyRYYz5iDQZWiISchSL4Ra1Lg4MedmLhWyWIVQXLjq1+jiUX1zLFplPiz84RlrbrjkLPWff+epFV1lkVLvtX09i3qa1mZ6EOEpcwqqMT79jPw5ZG7O97+S4HAYQhBMiCcIg4fXhyawHsJ/dkJqOjq6ME0+iTcYzlc/0FLb06pColZ7d/wm9SWDMm2mYDHRthS/qBizaDXWl5kGjJL5ZWJd4V5jiJAv66QvmfB4MuJ4ylEN7MMp4iZrqensU=
                &lt;/xenc:CipherValue&gt;
            &lt;/xenc:CipherData&gt;
        &lt;/xenc:EncryptedData&gt;
    &lt;/soap:Body&gt;
&lt;/soap:Envelope&gt;
```

Decrypted SOAP Response

```xml
&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"&gt;
    &lt;soap:Header&gt;
        &lt;wsse:Security xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd" soap:mustUnderstand="1"&gt;
            &lt;xenc:EncryptedKey xmlns:xenc="http://www.w3.org/2001/04/xmlenc#" Id="EK-4EC4D91315F4584EAF159481113675345"&gt;
                &lt;xenc:EncryptionMethod Algorithm="http://www.w3.org/2001/04/xmlenc#rsa-1_5"/&gt;
                &lt;ds:KeyInfo xmlns:ds="http://www.w3.org/2000/09/xmldsig#"&gt;
                    &lt;wsse:SecurityTokenReference&gt;
                        &lt;wsse:KeyIdentifier EncodingType="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-soap-message-security-1.0#Base64Binary" ValueType="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-x509-token-profile-1.0#X509SubjectKeyIdentifier"&gt;GAt7b/Amt76SVjDUyX79Cak3ZsA=&lt;/wsse:KeyIdentifier&gt;
                    &lt;/wsse:SecurityTokenReference&gt;
                &lt;/ds:KeyInfo&gt;
                &lt;xenc:CipherData&gt;                    &lt;xenc:CipherValue&gt;RyoR5t89fYE5h/lPyqC42BT+HA5JCiXVk2p+agjGtYzELFd7EjhWhSJr67KULGx9iTIcMaVLS5xwghZUYYFDkB+ogz85D1thIirUFQaSr/SMj/sHR8bf3rhmws5JG65QQfVkLy7TQvCr9Q+zhdcyyFV+mSj2199pP99eQuFCJfwlkGx75/RsDq9U4FFxAjexYr7vXR897VylfMnvMOxc2qEbbv2aNGrKeEBYs6MbKe8GZSrFz4/iqTy2NU/L6TDgEmTSPnBuyOu432XTkuUGY558Wd6Qm7apRJYdO6W24fyzB7hcobqkJiQOCNgjlD1b5gsRC+QTk+68yQhpvM71aw==&lt;/xenc:CipherValue&gt;
                &lt;/xenc:CipherData&gt;
                &lt;xenc:ReferenceList&gt;
                    &lt;xenc:DataReference URI="#ED-4EC4D91315F4584EAF159481113675446"/&gt;
                &lt;/xenc:ReferenceList&gt;
            &lt;/xenc:EncryptedKey&gt;
        &lt;/wsse:Security&gt;
    &lt;/soap:Header&gt;
    &lt;soap:Body&gt;
        &lt;employee&gt;
            &lt;first-name&gt;Jane&lt;/first-name&gt;
            &lt;last-name&gt;Doe&lt;/last-name&gt;
            &lt;address&gt;Paris&lt;/address&gt;
            &lt;phone-number&gt;123456&lt;/phone-number&gt;
        &lt;/employee&gt;
    &lt;/soap:Body&gt;
&lt;/soap:Envelope&gt;
```








