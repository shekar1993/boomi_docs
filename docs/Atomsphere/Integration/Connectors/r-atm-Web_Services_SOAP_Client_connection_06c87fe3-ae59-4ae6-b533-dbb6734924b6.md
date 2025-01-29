# Web Services SOAP Client connection 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-06c87fe3-ae59-4ae6-b533-dbb6734924b6"/>
</head>


The Web Services SOAP Client connection contains the information to connect a single endpoint URL to a web service SOAP application, including login credentials.

If you use multiple sites, use a separate connection component for each. You can pair a connection with different Web Service SOAP Client operations to perform a unique action against a Web Service SOAP Client instance.

## Web Services SOAP Client connection tab 



**WSDL URL** - 
The URL pointing to the web service definition to execute. To create a web service operation from a Web Services Description Language \(WSDL\) from a local directory, enter a URL in this format: `file:///C:/..../filename`. This field is not extensible.


:::note

The operation definition from the WSDL is cached in the operation component during browsing and serves as the operation definition to execute against.

:::

**SOAP Endpoint URL** - 
The SOAP endpoint URL \(location\) to execute against. This field is extensible, however, if this field is blank, the endpoint URL is taken from the WSDL.

**Security Type** - 
Security type sets the type of security to use for the web service:

-   **None** — No login information is required.

-   **Basic** — BASIC authentication is required for login.

-   **Basic \(Non-Preemptive\)** — BASIC authentication is required for login. This type is available for Document-Literal and RPC-Literal styles. When selected, a 401 status code is returned from the Integration request. After the 401 status code has been returned, another request is sent with the credentials. This security type allows you to connect to web services that require BASIC authentication and attempts to set cookies for session maintenance.

-   **WS-Security: Text Password** — password in plain text. This security type includes the **UserName Token** settings described in the Web Services SOAP Client WS Security Tab. That is the security information contains Password Type, User Name, Password, Nonce, and Created settings. This option is backwards compatible.

-   **WS-Security Password Digest** — password in digest format. This security type includes the **UserName Token** settings described in the Web Services SOAP Client WS Security Tab. That is the security information contains Password Type, User Name, Password, Nonce, and Created settings. This option is backwards compatible.

-   **WS-Security \(Advanced\)** — Boomi recommends using this WS security type when developing new processes instead of Text Password or Password Digest.

-   **HTTP Authentication** — the HTTP protocol handler implements these authentication schemes: SPNEGO \(Kerberos and NTLM\), NTLM, HTTP Digest, HTTP Basic.

    
:::note

While the HTTP Authentication protocol handler supports SPNEGO, which includes the NTLM and Kerberos sub-mechanisms, Boomi has not tested Kerberos and does not provide technical support for it.

:::


**User** - 
The user name for Basic, Basic \(Non-Preemptive\), and WS-Security.

**Password** - 
The password for Basic, Basic \(Non-Preemptive\), and WS-Security.

**Client SSL Certificate** - 
\(Optional\) Used to select, edit, or remove a private certificate component for SSL client authentication.

**Trust SSL Server Certificate** - 
\(Optional\) Used to select, edit, or remove a public certificate component for SSL server authentication.

You can add a private or public \(trusted\) certificate component to a Web Services SOAP Client connection. If you are connecting to a secure site \(i.e., the URL begins with `https`\) that *does not* use a certificate signed by a trusted root authority, such as Verisign or Thawte, obtain a copy of the site's public certificate and import it into your Integration account. Once imported and added to the Web Services SOAP Client connection, it is applied implicitly whenever the connector connects to that site. However, if the site does use a certificate from a trusted root authority, you do not need to import the certificate; it is applied automatically by Integration.

Review the Password Encryption Security topic to understand how passwords are securely stored in a connection component.

## Web Services SOAP Client WS security tab 

Select the WS-Security \(Advanced\) security type when using the WS Security tab. Otherwise the Connection tab’s User Name and Password fields must be populated. You can tailor your security requirements by changing the security order. Simply drag the ![](../Images/main-ic-dots-16-gray-on-white_404b1c3f-e21a-4b67-ba76-65412d39eb70.jpg) image next to each security option up or down.

To view the complete response containing the utilized Web Services security option, turn on **Expose Response Envelope** in the Web Services SOAP Client Operation.

|WS Security Option|Name|Description|
|------------------|----|-----------|
|**UserName Token**|**Password Type**|Used to select whether a password is sent as part of the token and, if yes, whether it is text or digest.|
||**User Name**|The user name for the UserName Token option.|
||**Password**|The password for the UserName Token option.|
||**Nonce**|If selected, a random value is included in each UserName Token that is sent. Previously, this was on by default.|
||**Created**|If selected, part of the UserName Token is included in the SOAP header as a security block. This is on by default.|
|**Timestamp**|**Time To Live**|Sets the length of time in seconds that a message is valid before the tag expires.|
|**Encryption**|**Encrypt Certificate**|Used to browse for a public-key encryption certificate, which you can then edit. You can edit or remove encrypted certificates but not add them.|
||**Decrypt Certificate**|Used to browse for a private-key decryption certificate. You can edit or remove decrypted certificates but not add them.|
||**Key Identifier Type**|Used to select the key identifier type.|
||**Symmetric Algorithm**|Used to select the symmetric-key algorithm for encryption and decryption in AES \(Advanced Encryption Standard\) or Triple DES \(3DES or Triple Data Encryption\).|
||**Key Encoding Algorithm**|Used to select the RSA \(Rivest-Shamir-Adleman\) or RSAOEP cryptosystem algorithm for converting encryption and decryption keys.|
||**Digest Algorithm**|Used to select the hash algorithm used for data integrity verification.|
||**Add Part**|Used to encrypt only certain parts of the outgoing message. If cleared, the whole message is encrypted. <br />-   Name<br />-   Namespace<br /> -   Encode — Enter “Content” to encrypt the inner parts of the element; enter “Element” to encrypt the whole element.|
|**Signature**|**Signing Certificate**|Used to browse the key store for a signing certificate to sign the outbound message. You can edit or remove signed certificates but not add them.|
||**Signing Verification Certificate**|Used to browse the key store for a signing verification certificate to verify the signature in the response message returned. You can edit or remove signing verification certificates but not add them.|
||**Key Identifier Type**|Used to select a key identifier type.|
||**Signature Algorithm**|Used to select a signature in RSA \(Rivest-Shamir-Adleman\), DSA \(Digital Signature Algorithm\), or HMAC \(Hash-based Message Authentication Code\).|
||**Signature Canonicalization**|Used to select whether to include or exclude a sub-document’s comments.|
||**Digest Algorithm**|Used to select a secure one-way hash algorithm in either SHA \(Secured Hash Algorithm\) or RIPEMD \(RACE Integrity Primitives Evaluation Message Digest\).|
||**Use Single Certificate**|Sets the token type. If selected, a Single Certificate Token is used \(ValueType URI = \#X509v3\). If cleared, a Certificate Path Token is used \(ValueType URI = \#X509PIKPathv1\) where \# is the root URL for the specification.|
||**Add Part**|Used to sign only certain parts of the outgoing message. If cleared, the whole message is signed. The following items identify the XML element to sign:<br />-   Name<br />-   Namespace<br />-   Encode— Not used in the Signature option.|