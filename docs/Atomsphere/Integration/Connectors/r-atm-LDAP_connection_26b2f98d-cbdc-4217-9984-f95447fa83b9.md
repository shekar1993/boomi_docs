# LDAP connection 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-26b2f98d-cbdc-4217-9984-f95447fa83b9"/>
</head>


The LDAP connection contains the information that is needed to establish a connection to the data directory on an LDAP server instance.

If you use multiple instances, you need a separate connection for each instance. You can pair this connection with different LDAP operations to perform a unique action against an LDAP server.

## Connection tab 

The LDAP connection uses, by default, the standard LDAP port 389 to connect to the LDAP server. You can change the port as necessary, choose to use an encrypted SSL connection, select the authentication method with the LDAP server, and set up other options required to connect.

**Host Name** - 
Enter the IP address or host name/domain on which the LDAP server runs and where the data directory is located, installed, and configured. For example, ldap.mycompany.com or 192.168.1.1.

**Port Number** - 
Enter the port number on which the data directory receives LDAP requests.

-   The default LDAP port for Microsoft Active Directory, OpenLDAP, ADAM / AD LDS, AWS Directory Service, and Azure Active Directory is 389. When SSL is required, select the **Use SSL** check box and use the SSL/TLS-protected port 636.

-   The default LDAP port for ApacheDS is 10389. When SSL is required, select the **Use SSL** check box and use the SSL/TLS-protected port 636.


**Use SSL** - 
\(Optional\) Select this check box if the LDAP server requires an SSL connection and encryption for security purposes. When selected, verify that you set the appropriate SSL/TLS-protected port number in the **Port Number** field. See your LDAP server administrator and read your LDAP documentation to determine if you should use SSL.

**Authentication Type** - 
Select the method to authenticate with the LDAP server, and verify that your selected method matches how the LDAP server is configured.

-   None \(Anonymous\) — With anonymous authentication, the connection is treated as anonymous. In this case, the LDAP server does not know or care who is trying to connect and will allow access \(read and update\) to any object data in the data directory that has been configured to be accessible by an unauthenticated client.

-   Simple — With simple authentication \(the default\), you send the fully-qualified Distinguished Name \(DN\) of the user \(principal name\) and password to the LDAP server to authenticate. This authentication type has security issues because the password can be read from the network. To avoid exposing the password in this way, you can select the **Use SSL** check box to encrypt the connection, provided SSL is supported by the LDAP server.


**Principal Name** - 
Enter the principal name of the user \(in an LDAP server-specific format\) to log in to your account on the LDAP server. Some LDAP servers support a login user ID format such as what you see in Unix and Windows login pages \(for example, `user_name@yourcompany`\). Some support a Distinguished Name \(DN\). Some support an authorization ID format where the name is entered as a string \(for example, `cn=terry,cn=sales,dc=mygroup,dc=net`\). See your LDAP server administrator and LDAP documentation for more information about the format you should use.

**Password** - 
Click **Encrypted** and enter the user's password for your account on the LDAP server.

**Referrals** - 
A referral is a reference to object data in another data directory located on a different LDAP server that is connected to and communicates with the current LDAP server instance. Referrals are used when searching the data directory. Select how the connection handles referrals:

-   Ignore referrals — Ignore the referrals and do not follow them.

-   Automatically follow any referrals — Referrals are automatically followed. For example, when searching the data directory, the LDAP server may return several search results, in addition to some continuation references that show where to get more results. When you select this option, the LDAP server processes all of the normal entries first, and then automatically follows the referrals.


**Connection Timeout \(ms\)** - 
\(Optional\) Enter the number of milliseconds that the connector waits to complete the connection handshake with the LDAP server until it times out.

-   If you enter a connection timeout, the entry overrides the default TCP timeout.
-   If you leave this field blank, or enter zero \(0\) or a negative value, the connection uses the default network \(TCP\) timeout.

## Test Connection
You can test your connection settings before you use or save the connection in a process. The Test Connection ensures that your specified settings are correct, valid, and accessible. If the test connection is successful, you can save the connection. Otherwise, review and correct any incorrect settings, then test again.

:::info Attention

You can only run the Test Connection against containers associated with your account (local Atoms, Molecules, and Atom Clouds).

:::