# FTP V2 connection 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-0cb8c1ba-68d8-43b5-b04b-4f69ae752946"/>
</head>


The FTP V2 connection represents and contains the information that is needed to open and establish a data connection session \(either passive or active\) with an external FTP server.

## Connection tab 

The session and connection to the FTP server remains open until all of the queued commands are completed, and then the session closes. The connection supports basic authentication \(user name and password\), and SSL/TLS 1.2 \(FTPS\) for secure transmission that protects your user name, password, encrypts the files being transferred, and protects the file metadata the connector generates as output to ensure your data is safe.


:::note

To establish a connection when using SSL/TLS encryption, the Atom must have access to the certificate on the FTP server. By default, certificate authority \(CA\) certificates are included in the Java runtime on the Atom. However, if the Atom does not have the certificate from the FTP server, you must manually deploy it to the Atom.

:::



**Host** - 
\(Required\) Enter the host name of the FTP server that you want to access and exchange data with. The host is where the FTP server resides. You can enter the host name, an IP address, or a domain name.

**Port** - 
\(Optional\) Enter the port number that the FTP server opens to listen for incoming connections from an FTP client. This field only accepts integers \(whole numbers\), and if you leave it blank the connector uses the standard FTP port 21.

**Connection Mode** - 
\(Required\) Determines how a data connection session is established, either in a passive or active mode. Verify that your selection matches the corresponding setting on the FTP server. Contact your FTP administrator for assistance.

Passive is the default mode, and is typically allowed by firewall and router configurations.

**Connection Timeout \(ms\)** - 
\(Optional\) Enter the number of milliseconds that the connector waits to complete the connection handshake to the FTP server until it times out. If you enter zero \(0\), the connection waits indefinitely.

**Read Timeout \(ms\)** - 
\(Optional\) Enter the number of milliseconds that the connector waits to complete the FTP data transfer until it times out. If you enter zero \(0\), the connection waits indefinitely.

**Remote Directory** - 
\(Optional\) Enter the directory \(relative or absolute directory path\) on the FTP server where the connector reads files from, writes files to, or deletes files from. If you leave this field blank or specify a relative directory path, the connector uses the default working directory configured on the FTP server as the base folder. This directory is typically the home directory of the logged in user. You can override this value using the Remote Directory input document property.


:::note

The connector uses the Unix style for paths. See the Prerequisites section in the connector topic for more information about how this style affects the path you specify here.

:::

**SSL Mode** - 
\(Required\) Determines the Secure Socket Layer \(SSL\) setting for the connection, either None \(default\), Implicit, or Explicit to establish a secure and encrypted connection with the FTP server. By selecting Implicit or Explicit , the connection uses FTPS, or FTP using an SSL/TLS 1.2 connection. Verify that your selection matches the corresponding setting on the FTP server. See your FTP administrator for assistance.

**User Name** - 
\(Optional\) Enter the user name of the account that is required to access files and folders on the FTP server. If the FTP server does not require a user name, leave this field blank.

**Password** - 
\(Optional\) Click the **Click to Set** button to open the Password window, and enter the password of the account that is required to access files and folders on the FTP server. If the FTP server uses anonymous FTP, you do not have to provide a password.

## Connection troubleshooting 

**Error: 425 cannot open the connection with the FTP server** - 

When the connection to the FTP server cannot be opened while attempting an operation, the FTP server may send an error 425 in the following situations:

-   The data channel is blocked or closed to the FTP server you are attempting to connect to. Verify that port 21 \(the standard FTP port\) is open on the server for the current active or passive connection. Active connections may not be allowed based on how your network is configured. If you open port 21 and still cannot connect, check the other devices \(such as routers\) to verify that the appropriate ports are open.
-   You have configured the FTP server to require SSL session reuse. The connector does not support session reuse, so you should disable that option on your FTP server.