# Mail connection 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-b2f790b0-7ad7-4e9d-94cb-05daf76add5f"/>
</head>


The Mail connection contains the connection and login information for your email server.

## Connection tab 


**Host** - 
The IP address or the domain name of the mail server. The mail server is where the mail application resides. The Mail connector receives files from or sends files to the mail server.

**Port** - 
The command port on which the mail server listens for incoming connections from a mail client. The default command port for sending is 25. The default port for receiving is 110.


:::note

If you have trouble sending email using port 25 on any Boomi Cloud, we strongly recommend that you configure the connection to use a different port such as 587, 110, 993, or 995. By switching to an alternative port, you avoid the possibility of email sporadically being blocked and not sent in your process. We have noticed that some mail servers may throttle and limit email sent using port 25 with the intention of reducing spam. The Boomi Clouds also throttle and limit email on this port.

:::

**Use TLS?** - 
Select if you are using the TLS \(Transport Layer Security\) protocol. All data exchanged between Integration and the server is encrypted with a digital security certificate, which makes it difficult to steal your email and/or password. You must import this certificate into Integration. For more information, see the linked Certificate components topic. When making the connection to the mail server, automatically uses the correct certificate.

**Use SSL?** - 
Select if you are using the SSL \(Secure Sockets Layer\) protocol and manually import the certificate into the Java keystore. All data exchanged between Integration and the server is encrypted with a digital security certificate, which makes it difficult to steal your email and/or password. For more information, see the linked Certificate components topic. When making the connection to the mail server, Integration automatically uses the correct certificate.

**User/Password Authorization?** - 
Select to provide login credentials \(e.g., username and password\) to authorize yourself with the mail server.

**User** - 
\(Available if Use SMTP Authorization is on\) The user name of the account on the mail server.

**Password** - 
\(Available if Use SMTP Authorization is on\) The password of the account on the mail server.