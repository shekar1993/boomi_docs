import TestConnection from './_TestCon.md'

# Oracle E-Business \(EBS\) connection 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-1d2a0fb0-b539-4421-a978-388875aa20bf"/>
</head>


The Oracle E-Business \(EBS\) connection represents a single Oracle E-Business Suite instance, including sign-in credentials.

If you use multiple databases, you need a separate connection for each database. You can pair the connection with different Oracle E-Business operations to perform a unique action against an Oracle E-Business Suite instance.

## Connection pooling 

When you enable **Pooled Connection**, it seeds the pool with one initial connection. It creates new connections as needed up to the maximum of 32. The pool size, however, is determined by the minimum. If there is a discrepancy between the minimum and maximum, it closes additional connections above the minimum on return. As a result, the minimum number of connections is set to equal the maximum. There are two dead connection checks: a 10–minute check on the pool and a 30–minute check that shuts down pools that have not been used within the last ten minutes.

Default pool settings

-   Total number of connections: 1
-   Number of initial connections: 1
-   Number of available connections: 1
-   Minimum number of connections: 32
-   Maximum number of connections: 32
-   Maximum number of open sessions: 32
-   Maximum wait time for a connection: 180 seconds

## Connection tab 

**JDBC Connection String** - 
 \(Optional\) Use to specify the JDBC connection string. If you leave this field blank, it uses the host, port, instance, and sign-in credentials to connect to the Oracle E-Business Suite instance. When specified, the string must start as follows: `jdbc:oracle:thin@`. For example, `jdbc:oracle:thin:@54.221.8.208:1531/orcl` In addition, you must specify the user name and password.

**Host** - 
 The host name to use if you do not specify the JDBC Connection String.

**Port** - 
  The port number to use if you do not specify the JDBC Connection String.

**Instance** - 
 The instance name to use if you do not specify the JDBC Connection String.

**User Name** - 
 The user name for signing into the JDBC or host. The user must have the appropriate access to the Oracle E-Business objects.

**Password** - 
  The password for signinginto the JDBC or host.

**Pooled Connection** - 
 If selected, it pools connections.

<TestConnection />