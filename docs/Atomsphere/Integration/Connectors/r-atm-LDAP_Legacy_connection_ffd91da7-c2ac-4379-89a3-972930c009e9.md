# LDAP (Deprecated) connection 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-ffd91da7-c2ac-4379-89a3-972930c009e9"/>
</head>


The LDAP (Deprecated) connection represents a single LDAP server, including login credentials.

If you use multiple instances, you need a separate connection component for each instance. You can pair this connection with different LDAP (Deprecated) operations to perform a unique action against an LDAP server.

## Connection tab 

**Server Name** - The LDAP/Active Directory \(AD\) server name, such as localhost or 192.168.1.1.

**Port Number** - 
The LDAP/AD server port, such as 389 or 636 \(SSL\).

**Use SSL** - 
\(Optional\) Select this check box if the server requires SSL connection. You cannot set a user password in AD without an SSL connection.

**User Name** - 
The user Distinguished Name \(DN\) that the connector uses to access the LDAP/AD. For example, `cn=terry,cn=sales,dc=wdcigroup,dc=net`.

**Password** - 
The user's password.

**LDAP Properties file** - 
Used for backward compatibility only. For new connections, use Attributes in the operation. Specify the LDAP properties file \(e.g., LDAPMethods.properties\) if you want the connector to generate the schema based on the attributes that you have specified. For more information, see the linked Active Directory sample properties file and OpenLDAP sample properties file topics. If no file is specified, the connector loads the default properties file inside the connector. For example, `c:\config\LDAPMethods.properties`

**Timeout duration\(s\)** - 
The maximum request time in seconds for a query operation until the connection times out.