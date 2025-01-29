# OFTP2 Communication Method configuration 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-8023d41a-5525-4f9a-a5be-91139839eeae"/>
</head>


To set up OFTP2 as a communication method for a trading partner, you can use default settings \(configured in a My Company trading partner\), shared communication \(configured in a Communication Channel component\), or manually configure specific settings in the **Edit OFTP2 Configuration** dialog. The dialog opens from within the trading partner **Communication** tab when you add OFTP2 as a communication method or click OFTP2 in the Communication Method list.

## My Company settings 

Identification Information

**Name**  
**Definition**

**ODETTE ID**  
Uniquely identifies the initiator participating in the ODETTE-FTP session. Limited to 25 characters.

**Password**  
Authenticates the trading partner and is assigned by bilateral agreement.

**Decryption Certificate**  
The private certificate used to decrypt incoming data from your partners.

**Acknowledgment Signing Certificate**  
The private certificate used to sign EERPs sent to this destination.

**Signing Certificate**  
The private certificate used by the destination to verify that data is sent from a valid initiator.

**Session Authentication Challenge Certificate**  
The private certificate used to decrypt the session authentication challenge from your partners.

OFTP2 Server Settings

OFTP2 Server settings are managed by the Atom's shared server and can be configured by navigating to **Manage** \> **Atom Management** \> **OFTP2 Server**.

The following sections are the default settings that you can use for other partners that appear in the same Start step or Trading Partner step that uses OFTP2 by selecting **Use All Defaults**. You might want to configure default settings if all of your trading partners are handled by the same OFTP2 destination.

Default Partner Connection Settings

**Name**    
**Definition**

**Destination Host**  
The host name or IP address of the responding ODETTE-FTP.

**Destination Port Number**  
The TCP port of the responding ODETTE-FTP, usually 3305 or, if session-level encryption is required, 6619.

**Session Level Encryption**  
Session-level encryption provides data confidentiality by encrypting all protocol commands and data exchanged between two parties, preventing a third party from extracting any useful information from the transmission. The encryption is achieved by layering ODETTE-FTP over TLS, distinguishing between secure and insecure TCP/IP traffic by using different port numbers.

**Use Client SSL Authorization**  
 \(Available only when Session Level Encryption is enabled\) When checked, the server performs client authorization.

**Client SSL Certificate**  
\(Available only when Use Client SSL Authorization is enabled\) The private certificate used by the OFTP2 connector to verify outbound connections.

**Cipher Suite**  
 Indicates the cipher suite that should be used when a signed acknowledgment or secure authentication is requested. You can select from the following cipher suites:

 -   TRIPLEDES\_RSA\_SHA1

-   AES\_RSA\_SHA1

 -   TRIPLEDES\_RSA\_SHA256

 -   AES\_RSA\_SHA256

 -   TRIPLEDES\_RSA\_SHA512

 -   AES\_RSA\_SHA512


**Require Secure Authentication**  
When checked, this destination requires secure authentication.

Default Security Options

**Name**  
**Description**

**Sign Outbound Files**  
When checked, if this step's connection includes your private Signing Certificate, outbound files will be signed.

**Encrypt Outbound Files**  
When checked, if this step's connection includes a partner-provided public Encrypting Certificate, outbound files will be encrypted.

**Request Signed EERP Acknowledgments**  
When checked, requests that EERPs returned for the data must be signed.

Default Send Options

**Name**  
**Description**

**Virtual File Dataset Name**  
Dataset name of the Virtual File being transferred, assigned by bilateral agreement. The Virtual File Dataset Name can be set as a document property in the process that includes the OFTP2 Client connector.

**Virtual File Description**  
A description for the Virtual File being transferred, assigned by bilateral agreement. The Virtual File Description can be set as a document property in the process that includes the OFTP2 Client connector.

**Use Compression**  
When checked, data is compressed using the \[ZLIB\] compression algorithm.

**Note:** The **Change Direction** option is not available to configure in the Trading Partner step.

## Trading Partner settings 

Identification Information

**Name**  
**Definition**

**ODETTE ID**  
Uniquely identifies the responder participating in the ODETTE-FTP session. Limited to 25 characters.

**Password**  
Authenticates the trading partner and is assigned by bilateral agreement.

**Encrypting Certificate**  
The public certificate used to encrypt the data sent to this destination.

**Acknowledgment Verification Certificate**  
The public certificate used to verify signatures received from this destination.

**Signature Verification Certificate**  
The public certificate used to verify signatures received from this destination.

**Session Authentication Encrypting Certificate**  
The public certificate used to encrypt the session authentication challenge for this destination.

**Client SSL Certificate**  
The public certificate used to verify inbound connections.

Connection Settings

**Name**  
**Definition**

**Destination Host**  
The host name or IP address of the responding ODETTE-FTP.

**Destination Port Number**  
The TCP port of the responding ODETTE-FTP, usually 3305 or, if session-level encryption is required, 6619.

**Session Level Encryption**  
Session-level encryption provides data confidentiality by encrypting all protocol commands and data exchanged between two parties, preventing a third party from extracting any useful information from the transmission. The encryption is achieved by layering ODETTE-FTP over TLS, distinguishing between secure and insecure TCP/IP traffic by using different port numbers.

**Use Client SSL Authorization**  
\(Available only when Session Level Encryption is enabled\) When checked, the server performs client authorization.

**Client SSL Certificate**  
\(Available only when Use Client SSL Authorization is enabled\) The private certificate used to verify outbound connections.

**Cipher Suite**  
Indicates the cipher suite that should be used when a signed acknowledgment or secure authentication is requested. You can select from the following cipher suites:

 -   TRIPLEDES\_RSA\_SHA1

 -   AES\_RSA\_SHA1

  -   TRIPLEDES\_RSA\_SHA256

 -   AES\_RSA\_SHA256

 -   TRIPLEDES\_RSA\_SHA512

 -   AES\_RSA\_SHA512


Require Secure Authentication    
When checked, this destination requires secure authentication.

Security Options

**Name**  
**Description**

**Sign Outbound Files**  
When checked, if this step's connection includes your private Signing Certificate, outbound files will be signed.

**Encrypt Outbound Files**  
When checked, if this step's connection includes a partner-provided public Encrypting Certificate, outbound files will be encrypted.

**Request Signed EERP Acknowledgments**  
When checked, requests that EERPs returned for the data must be signed.

Send Options

**Name**  
**Description**

**Virtual File Dataset Name**  
Dataset name of the Virtual File being transferred, assigned by bilateral agreement. The Virtual File Dataset Name can be set as a document property in the process that includes the OFTP2 Client connector.

**Virtual File Description**  
A description for the Virtual File being transferred, assigned by bilateral agreement. The Virtual File Description can be set as a document property in the process that includes the OFTP2 Client connector.

**Use Compression**  
When checked, data is compressed using the \[ZLIB\] compression algorithm.

**Note:** The **Change Direction** option is not available to configure in the Trading Partner step.