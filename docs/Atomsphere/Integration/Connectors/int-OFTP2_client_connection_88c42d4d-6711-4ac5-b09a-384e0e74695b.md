# OFTP2 Client connection 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-88c42d4d-6711-4ac5-b09a-384e0e74695b"/>
</head>


The OFTP2 Client connection represents the OFTP2 destination for a specific trading partner or application.

**Destination Host** - 
The hostname or IP address of the responding ODETTE-FTP.

**Destination Port Number** - 
The TCP port of the responding ODETTE-FTP, usually 3305 or, if Session Level Encryption is enabled, 6619.

**Cipher Suite** - 
\(Optional\) Indicates the cipher suite used to sign and/or encrypt the file and when a signed acknowledgment is requested.
**Require Secure Authentication
\(Optional\) When checked, the destination requires secure authentication.

## SSL Options 

**Session Level Encryption** - 
When enabled, the responding ODETTE-FTP listens for secure TLS connections.

Session-level encryption provides data confidentiality by encrypting all protocol commands and data exchanged between two parties, preventing a third party from extracting any useful information from the transmission. This encryption is achieved by layering ODETTE-FTP over TLS, distinguishing between secure and insecure TCP/IP traffic by using different port numbers.

**Use Client SSL Authorization** - 
\(Optional\) When checked, client SSL authorization is required.

**Client SSL Certificate** - 
\(Optional\) When provided, the OFTP2 connector attempts to verify outbound connections using the provided private certificate.