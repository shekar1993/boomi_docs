# Database (Legacy) connection 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-324ffb62-7904-49de-a746-b8d051613f94"/>
</head>


The Database (Legacy) connection contains the connection settings for the database, including the host name, port, database name, user name, password, advanced options, and connection pooling options.

## Pre-loaded drivers 

The connector comes with a list of JDBC-compliant databases you can connect to and a custom connection option. A few of the databases in the Connection tab's **Driver Type** drop-down have pre-loaded \(packaged\) JDBC drivers. Your database connection may require newer or specific versions of a driver, while a custom connection requires drivers of another JDBC- or ODBC-compliant database.


:::note

In addition to the connector's drivers, the Boomi Atom Clouds contain database drivers for some versions of the following databases: SQL Server, PostgreSQL, and MySQL. For more information, see the topic [Boomi Atom Clouds](../Getting%20started/c-atm-The_Boomi_Atom_Clouds_6c3bfab5-2fdc-4fde-a7cb-5f0c591a9f08.md).

:::

## Adding other JDBC drivers 

If your connection requires other JDBC drivers, upload the JAR file containing the drivers to your account library. Once uploaded, you can create Custom Library components capable of containing JARs. Use these deployable components to place the JARs in the appropriate directory for the connector's reference.

:::note

Uploaded or imported files pass through a virus scanner first. If the scan detects a virus, you receive an error message, and the scan rejects the file. If an error persists, contact Boomi Support.

:::

#### Overriding the connector's pre-loaded JDBC drivers

Override the connector's pre-loaded JDBC drivers to use a newer version of a driver. You do not need to configure a custom connection.

1.  Upload the JAR files into your Integration account library \(**Settings** \> **Account Information and Setup** \> **Account Libraries**\).
2.  Create a Custom Library component. Select **General** for the Custom Library Type.
3.  Deploy the component to the appropriate Atom, Molecule, Atom Cloud, or environment. When you deploy the component, the JAR files that it references are deployed to the `/<installation_directory>/userlib` directory. You may need to restart the Atom after deploying these components.

The new driver is used instead of the version packaged with the connector.

#### Overriding a Boomi Cloud's JDBC drivers

Override the Boomi Cloud's pre-loaded JDBC drivers to use a newer version of a driver. You do not need to configure a custom connection.

1.  Upload the JAR files into your Integration account library \(**Settings** \> **Account Information and Setup** \> **Account Libraries**\).
2.  Create a Custom Library component. Select **General** for the Custom Library Type.
3.  Deploy the component to the appropriate Atom, Molecule, Atom Cloud, or environment. When you deploy the component, the JAR files that it references are deployed to the `/<installation_directory>/userlib` directory. You may need to restart the Atom after deploying these components.

The new driver is used instead of the version packaged with the Boomi Cloud.

#### Using JDBC drivers for a custom connection

You need the database drivers of another JDBC- or ODBC-compliant database to setup a custom connection.

1.  Upload the JAR files into your Integration account library \(**Settings** \> **Account Information and Setup** \> **Account Libraries**\).
2.  Create a Custom Library component. For JAR files that support a connector, you create a Custom Library component with a type of **Connector** and select a connector type—in this case, Database.
3.  Deploy the component to the appropriate Atom, Molecule, Atom Cloud, or environment. When you deploy the component, the JAR files that it references are deployed to the `/<installation_directory>/userlib/database` directory. If the userlib/database directory does not exist, Integration creates it. You may need to restart the Atom after deploying these components.

The driver is now available for use with a custom connection.

## Connection tab 



**Database URL** - 
Read-only field is populated as other connection values are specified. Used for reference only.

**Driver Type** - 
Select the database to connect to from the drop-down list or select "Custom" to specify the Connection URL directly. The following drivers are packaged with the Database connector:

| Driver Type                                       | Packaged Driver                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|---------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| SQL Server (jTDS) — formerly called MS SQL Server | jtds-1.2.jar for SQL Server versions 7/2000/2005.                                                                                                                                                                                                                                                                                                                                                                                                           |
| Oracle                                            | ojdbc14-10.2.0.4.0.jar for Oracle versions 9i/10g.                                                                                                                                                                                                                                                                                                                                                                                                          |
| MySQL                                             | Drivers are not included. You can download the drivers from the MySQL, Downloads page.                                                                                                                                                                                                                                                                                                                                                                      |
| SQL Server (Microsoft)                            | sqljdbc4.jar for the Atom Cloud. For local Atoms, your version of Java determines which driver you will use. Drivers for local Atoms are not included. Use the driver version appropriate for your runtime environment. For more information about SQL Server drivers, compatibility, and available downloads, see the Microsoft JDBC Driver for SQL Server support matrix and Download Microsoft JDBC Driver for SQL Server pages from the Microsoft help. |
| SAP HANA                                          | ngdbc.jar contains the SAP HANA JDBC driver. Drivers are not included for any Atoms. You can download the JAR file (drivers included) from the SAP Support Portal or the SAP Development Tools page.                                                                                                                                                                                                                                                        |
| Custom                                            | Drivers are not included, but can be used with MSSQL 2008, 2012; Oracle 8i, 11g, 12c; Apache Derby; IBM DB2; Microsoft ODBC; PostgreSQL; Sybase; and any other JDBC- or ODBC-compliant database. You can download the drivers from the vendor's website. If you want to create a custom connection, see the Creating a custom Database connection topic.                                                                                                    |

**Class Name** - 
Shows the fully qualified Java class name of the JDBC driver. Refer to the JDBC vendor's documentation for the class name. For example: `sun.jdbc.odbc.JdbcOdbcDriver`

**User Name** - 
Database user name.

**Password** - 
Database user password.

**Host** - 
Name or IP address of the database server.

**Port** - 
The port that is used to connect to the database server. Common defaults are the following:

-   SQL Server: 1433

-   Oracle: 1521

-   Sybase: 5000

-   Derby: 1527

 -   DB2: 50000

-   MySQL: 3306



:::note

Refer to vendor documentation for additional ports and port number assignments.

:::

**Database Name** - 
The name of your database.

**Additional Options** - 
Any additional options to be specified in your database URL.

-   For *all database types*, name/value pairs delimited by semicolons are often used. For example, `;instance=DB01`

-   For the *SQL Server \(jTDS\)* Driver Type, you can add additional options to connect to SQL Server as a Windows user. For example:

        ```
        ;domain=<Your Windows Domain Name>
        ```


:::note

If you are using the *SQL Server \(jTDS\)* Driver Type to connect as a Windows user and are connecting to a named instance, the order of the properties is important for the JDBC URL. For example: `;instance=<value>;domain=<value>`

:::


**Connection URL** \(Custom database type only\)
Refer to the JDBC vendor's documentation for the connection URL syntax.

Example pattern:

```
jdbc:<database type>://<host>:<port>/<database name>;<additional options name/value pairs>
```

Example URL:

```
jdbc:mysql//localhost:3306/MyDatabase;option1=value;option2=value
```

## Advanced Options tab 


**Write SQL to File?** - 
Used for debugging dynamic statements, especially when writing to a database. This option works with the Database operation's Send action, and not with the Get action.

If selected, any SQL statements used with this connection *are not executed against the database*. Instead, the SQL statement is written to the file that you designate.

**SQL File Path** - 
Enter the full path and file name to write the SQL, such as C:/Test/sqlout.txt.

## Connection Pool tab 

This section describes how Integration manages connection pools:

-   A connection pool is identified by the connection component’s ID and its connection settings. This combination enables you to configure one component to talk to different databases. For example, you can define process extensions for connection settings so that one component can operate in separate connection pools.

-   When you change a connection’s primary settings on the Connection tab, such as user or password, a new connection pool is created when the connection is redeployed. This allows existing pools that are used by deployed processes to continue to operate without interruption.

-   When you change a connection’s secondary settings on the Connection Pool tab, such as maximum or minimum connections, the existing connection pool is updated the first time the new version of the connection is requested.

-   Every 30 minutes Integration monitors all connection pools used by the connector to reclaim unused connections and to restart extra connections needed to satisfy the Minimum Connections setting. When a connection pool has not been used in six hours and it has no active connections, then it is considered a dead or surplus connection.


There are several ways you can change your pool settings:

-   To override the connection pool settings, change your connection settings and restart your Atom.
-   To make changes immediately, change your connection settings and redeploy your process.
-   To make changes without restarting your Atom, for example in extensions, make the changes. Then, leave the connection unused for 30 minutes in a process. The idle timeout generates a fresh connection pool the next time your process runs.


:::note

Most integrations do not require connection pooling. Consider pooling if you use low latency to speed up processes or if you execute a large number of statements during an integration, such as a SQL lookup map function with thousands of records that is integrated with Oracle databases.

:::



**Enable Pooling** - 
If selected, connection pooling is enabled and other fields are enabled. Connection pooling may increase performance by using resources more efficiently.

**Maximum Connections** - 
The maximum number of connections in the pool. For unlimited connections, set to either -1 or 0.

**Minimum Connections** - 
The minimum number of connections in the pool.

**Maximum Idle Time** - 
The length of time in seconds that a connection can remain open in an idle state. The default value is zero (0), which means an unlimited maximum idle time. If you want close a connection quickly, you should set this to something greater than 0.

**When Exhausted Action** - 
Sets whether to wait for connection, or immediately fail when a connection becomes exhausted.

**Maximum Wait Time** - 
The length of time in seconds to wait for a connection from the pool.

**Test Connection When Borrowing From Pool** - 
If selected, Integration verifies that the connection is still valid when taking it from the pool.

**Test Connection When Returning From Pool** - 
If selected, Integration verifies that the connection is still valid when adding it back to the pool.

**Test Idle Connections** - 
If selected, Integration verifies every 5 minutes that idle connections are still valid.

**Validation Query** - 
Enter a simple SQL statement that returns a single row of data to determine if the connection is valid.

import TestConnection from './_TestCon.md'

<TestConnection />