# OFTP2 Client operation 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-a56473ee-12be-4346-9e19-03fb469c56fa"/>
</head>


The OFTP2 Client operation contains the OFTP2 settings for communicating with a specific trading partner. Your trading partner should provide the information to configure the operation.

The operation supports the Get and Send actions.

## OFTP2 Info tab, Get action 

Identify the responding trading partner in the **OFTP2 From** section:

**ODETTE ID** - 
Uniquely identifies the responder participating in the ODETTE-FTP session. Limited to 25 characters.

**Password** - 
Authenticates the trading partner and is assigned by bilateral agreement.

**Acknowledgment Verification Certificate** - 
The public certificate used to verify signed End-to-End Responses \(EERPs\) sent from this destination.

**Signature Verification Certificate** - 
he public certificate used to verify signatures received from this destination.

**Session Authentication Encrypting Certificate** - 
The public certificate used to encrypt the session authentication challenge for this destination.

Identify the initiating trading partner in the **OFTP2 To** section:

**ODETTE ID** - 
Uniquely identifies the initiator participating in the ODETTE-FTP session. Limited to 25 characters.

**Password** - 
Authenticates the trading partner and is assigned by bilateral agreement.

**Decryption Certificate** - 
The private certificate used to decrypt incoming data from your partners.

**Acknowledgment Signing Certificate** - 
The private certificate used to sign EERPs sent to this destination.

**Session Authentication Challenge Certificate** - 
The private certificate used to decrypt the session authentication challenge from your partners.

## OFTP2 Info tab, Send action 

Identify the initiating trading parter in the **OFTP2 From** section:

**ODETTE ID** - 
Uniquely identifies the initiator participating in the ODETTE-FTP session. Limited to 25 characters.

**Password** - 
Authenticates the trading partner and is assigned by bilateral agreement.

**Decryption Certificate** - 
The private certificated used to decrypt incoming data from your partners.

**Acknowledgment Signing Certificate** - 
The private certificated used to sign EERPs sent to this destination.

**Signing Certificate** - 
The private certificate used to enable the remote location to verify that the data came from a valid initiator.

**Session Authentication Challenge Certificate** - 
The private certificated used to decrypt the session authentication challenge from your partners.

Identify the responding trading partner in the **OFTP2 To** section:

**ODETTE ID** - 
Uniquely identifies the responder participating in the ODETTE-FTP session. Limited to 25 characters.

**Password** - 
Authenticates the trading partner and is assigned by bilateral agreement.

**Encrypting Certificate** - 
The public certificate used to encrypt the data sent to this destination.

**Acknowledgment Verification Certificate** - 
The public certificate used to verify signatures received from this destination.

**Signature Verification Certificate** - 
The public certificate used to verify signatures received from this destination.

**Session Authentication Encrypting Certificate** - 
The public certificate used to encrypt the session authentication challenge for this destination.

## Options tab 

The Options tab is available only for the Send action.

#### Security Options

**Sign Outbound Files** - 
When checked, if this step's connection includes your private Signing Certificate, outbound files will be signed.

**Encrypt Outbound Files** - 
When checked, if this step's connection includes a partner-provided public Encrypting Certificate, outbound files will be encrypted.

**Request Signed EERP Acknowledgments** - 
When checked, requests that the EERP returned for the data must be signed.

#### Send Options

**Virtual File Dataset Name** - 
Dataset name of the Virtual File being transferred, assigned by bilateral agreement. The Virtual File Dataset Name can be set as a document property in the process that includes the OFTP2 Client connector.

**Virtual File Description** - 
A description for the Virtual File being transferred, assigned by bilateral agreement. The Virtual File Description can be set as a document property in the process that includes the OFTP2 Client connector.

**Use Compression** - 
When checked, data is compressed using the \[ZLIB\] compression algorithm.

**Change Direction** - 
When checked, after sending, the client attempts to receive any waiting documents and acknowledgments.