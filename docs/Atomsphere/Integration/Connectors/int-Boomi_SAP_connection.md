# Boomi for SAP connection

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-25f403cb-5783-4c79-bf6c-a19957f54ad3"/>
</head>


The Boomi for SAP connection represents a connection to the SAP instance which requires an SAP client, server, and SAP user. If you need to connect to multiple accounts in the same environment, use a separate connection for each account and configure the URL accordingly.

## Connection tab

The Boomi for SAP connector uses simple user/password to log in. Here are the properties to configure on a connection. You can get these from your SAP Administrator or BASIS Professional.

**URL** - 
 Url; Hostname and port e.g., `http://mysapserver.com:8000`

**Follow HTTP redirects** -   
 If the server sends redirect, allow the client to follow the redirection.

**SAP Client** -   
SAP client number.

**Username** -  
SAP UserID.

**Password** - 
 SAP Password.

**SSL Client Certificate** -     
Can be used to log in via client certificate, should contain both public and private parts of the certificate.

**SSL Server Certificate** -  
If a server certificate is not trustworthy, add it here, and it can be trusted anyways. Not recommended for production use.

**Preemptive authentication** -    
Send authentication headers on initial request to the back end.

**URL Parameters** -   
Add query parameters to the URL when calling back-end services. In some cases these are necessary to connect to the back end.
 
**Connect timeout** -     
The time allowed to establish the connection with the remote host in milliseconds. The default is 30000. (30 seconds)

**Socket timeout** -    
The time waiting for data in milliseconds, that is the maximum amount of time of inactivity between two data packets after establishing the connection.

**Password authentication** - 

The Boomi Integration authentication protocol handler implements several different authentication schemes that the Java platform supports.