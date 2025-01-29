# FTP (Legacy) connection 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-543d9ac6-ecc5-4f3d-af02-32a363415f41"/>
</head>


The FTP (Legacy) connection contains the host connection settings such as FTP Host, Port, Connection Mode \(Active, Passive\), User, Password, and SSL \(Secure Sockets Layer\) options.

The SSL options include the ability to Use SSL, Use Implicit SSL, Use Client Authorization, and select the Client SSL Certificates.

## FTP Host tab 



**Host** - 
The host name or IP address or the domain name of the FTP server to connect to. The FTP server is where the FTP application resides.

**Port** - 
The port on which the FTP Server will listen for incoming connections from an FTP client. The default port is 21.

**Connection Mode** - 
he connection mode should match the corresponding setting on the FTP server. Contact your FTP administrator for assistance. The modes are: Active, Passive.

Passive FTP is the default connection mode because it is typically allowed by firewall configurations.

**User** - 
The user name of the account on the FTP server.

**Password** - 
The password of the account on the FTP server. For more information about data security in Boomi Integration, see the topic [Password Encryption Security](../../Platform/c-atm-Password_Encryption_Security_89953624-ed1f-4c27-9b31-24f1bf2f2d74.md).

## SSL Options tab 



**SSL Mode** - 
The SSL mode should match the corresponding setting on the FTP server. Contact your FTP administrator for assistance. The modes are: Implicit FTPS, Explicit FTPS.

**Use Client Authorization?** - 
Select if you are using a client SSL certificate.

**Client SSL Certificate** - 
Choose the Certificate component to use for client authorization. This is different from the certificate that may be required to connect to the FTPS site at the server level.

In some cases the FTPS server authorizes YOUR certificate. In this case, the company hosting the FTPS server provides an additional client SSL certificate to log into the system \(in addition to a username and password\). This client SSL certificate is then used to initiate the SSL security layer with the server SSL certificate. This certificate must be imported into Integration. For more information, see the [Certificate components](../Process%20building/c-atm-Certificate_components_9985dbf3-9b86-4983-a68d-53e7c6836763.md) topic.


:::note

If you are connecting using FTPS to a site that *does not* use a certificate signed by a trusted root authority, such as Verisign or Thawte, you need to obtain a copy of the site's public certificate and import it into your Integration account. That certificate is applied implicitly whenever the connector connects to that site. However, if the site does use a certificate from a trusted root authority, you do not need to import the certificate. It is applied automatically by Integration.

:::