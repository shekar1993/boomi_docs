import TestConnection from './_TestCon.md'


# Oracle E-Business Suite V2 connection

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-c745af48-5b46-4aeb-8096-f9ff7709be7f"/>
</head>


The Oracle EBS V2 connection represents a single account including login credentials. If you have multiple systems, you need a separate connection for each.

## Connection tab

**EBS Database Connection String** - 
Enter the JDBC connection string of your Oracle EBS database instance. This is used for direct Oracle EBS database integration scenarios. The connection string must start as: `jdbc:oracle:thin@` followed by host name, port number and database instance name. For example, `jdbc:oracle:thin:@54.221.8.208:1531/orcl`.

**Pooled Connection** - 
Pooled Connection includes a specific number of connections with a single physical database connection for a specific number of processes, instead of having a connection established for each process. If selected, connections are pooled. The connection pool is seeded with one initial connection. New connections are created, as needed, up to the maximum of 32. The pool size, however, is determined by the minimum. If there is a discrepancy between the minimum and maximum, additional connections above the minimum are closed on return. As a result, the minimum number of connections is set to equal the maximum. There are two dead connection checks: a 10–minute check on the pool, and a 30–minute check that shuts down pools that have not been used within the last ten minutes.

There are no parameters used for Pooled Connection. A field named Message Type is included and enabled on the operation UI. There are separate instances for every service user: XML Gateway, Business Event, and DBC File. Since there are two separate schemas for XML Gateway and Business Event, if a user is enabled with Pooled Connection, for each of this service \(XML Gateway and Business Event\), the user has separate Pooled Connection instances. For the DBC File, the user has another separate Pooled Connection instance. Therefore, in this case, the user has three instances. This occurs in the background process, and also Pooled Connection concept.

There are two different Pooled Connections. One is for the PLSQL and REST operation, and the other is for XML Gateway and Business Event message types. The PLSQL and REST Pooled Connection includes single database connection, whereas XML Gateway and Business Event Message Type include 10 database connections.

:::note

-   Pooled Connection is available in the connection, and should be enabled before the start of process execution.
-   Pooled Connection is enabled for both LISTEN and SEND operations for XML Gateway.
-   Pooled Connection is enabled only for LISTEN operations for Business Event.
-   Pooled Connection is enabled for both JDBC and DBC file, for the previous two services.

:::

**Connection using DBC File?** - 
If selected, the connection will be performed using the database user credentials available in the uploaded ebsdb.dbc JAR file. The User Name and Password provided should be of the Application User having “UMX\|APPS\_SCHEMA\_CONNECT” role with all the required access for the DBC file. For more information about using the DBC JAR file, see the Creating an ebsdb.dbc JAR file section.

    
:::note

DBC file support is available with PLSQL\_QUERY, PLSQL\_EXECUTE, LISTEN, and SEND operations.

:::

**User Name** - 
Specify the username for the Oracle EBS user account. Applicable for REST API or database instance.

**Password** - 
Enter the password for the user’s Oracle EBS account.

**EBS Rest URL** - 
Enter the entire URL/web address \(including the protocol used “http or https”\) of your Oracle EBS application instance. For example, [http://ip-172-31-0-28.localdomain:8000](http://ip-172-31-0-28.localdomain:8000/). This is mandatory for using Oracle REST services.

**Use Token Based Authentication** - 
Select the check box to use encrypted token-based authentication, in addition to username and password. Applicable only for EBS REST URL-based connections.

**Rest Locator Alias** - 
Enter the service alias name of the deployed Rest Service Locator API as defined in your Oracle Integration Repository. Rest Service Locator alias is used for calling “getRestInterface” service operation. It returns the Web Application Description Language \(WADL\) file URL for required API which will eventually be used for request and response profile generation of the connector.

**NLS Language \(Optional\)** - 
Specify the native language as defined in the Oracle EBS instance \(AMERICAN by default\). This allows you to store, process, and retrieve data in the native language set for the EBS instance.

**Org Id \(Optional\)** - 
Specify the organization ID of the Oracle EBS instance. This is required if a service execution is dependent on any organization.


:::note

**NLS Language** and **Org\_Id** are optional values to be passed.

:::

-   If the NLS Language element is specified, REST requests can be consumed in the language passed. All corresponding REST responses and error messages can also be returned in the same language. If no language is identified, then the default language of the user is used.
-   If a service execution is dependent on organization, then you must pass the Org\_Id element of that REST request.

## Test connection

You can test your connection settings before you use the connection in a process or before you save the connection. Test Connection ensures that the connection settings that you specify are correct, valid, and can be accessed. If the test connection is successful, you can save the connection. Otherwise, review and correct any incorrect settings, then test again.

-   To perform REST Execute and/or QUERY operation, specify the REST URL value and test the connection to the REST APIs.
-   To perform PL/SQL Execute and/or QUERY operation, LISTEN operations for XML Gateway and Business Event, and SEND operations for XML Gateway, provide the EBS Database Connection String value and test the connection to the Oracle Database.


:::note

Populating both the Connection String and REST URL value at a time is not allowed. If you populate both, the EBS details will be ignored at the implementation level.

:::