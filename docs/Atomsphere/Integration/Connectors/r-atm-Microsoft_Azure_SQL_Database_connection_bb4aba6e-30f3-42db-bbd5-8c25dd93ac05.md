import TestConnection from './_TestCon.md'

# Microsoft Azure SQL Database connection 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-bb4aba6e-30f3-42db-bbd5-8c25dd93ac05"/>
</head>


The Microsoft Azure Database connection contains the connection settings, such as host name, port, database name, user name, password, advanced options, and connection pooling options.

## Connection tab 



**Database URL** - 
  Populates a read-only field when you specify other connection values. Used for reference only.

**Driver Type** -    
 Azure SQL Database driver is the default, which you cannot change.

The required driver file must reside in the `/<installation_directory>/userlib/database` directory.

**User** - 
  Database user name.

**Password** - 
  Database user password.

**Host** - 
   Name or IP address of the database server.

**Port** - 
  The port with which to connect to the database server.

**Database Name** - 
  The name of your database.

**Additional Options** - 
 Any additional options specified in your database URL. Name and value pairs delimited by semicolons are often used , such as `;instance=DB01`

Connect to Microsoft Azure SQL Database as a Windows user, for example: `;domain=<Your_Windows_Domain_Name>`

If you are using SQL Server, connecting as a Windows user, and connecting to a named instance, the order of the properties is important for the JDBC URL. For example: `;instance=<value>;domain=<value>`
 
**Class Name** - 
 Shows the fully qualified Java class name of the Microsoft SQL Server driver `com.microsoft.sqlserver.jdbc.SQLServerDriver`.

## Advanced Options tab 
  

  

**Write SQL to File?** - 
  Used for debugging dynamic statements, especially when writing to a database. This option works with the Database operation's Send action — not with the Get action.

If selected, any SQL statements used with this connection are not run against the database. Instead, it writes the SQL statement to a designated file.
  
**SQL File Path** - 
 Enter the full path and file name to write the SQL, such as C:/Test/sqlout.txt.

## Connection Pool tab 

:::note

Most integrations do not require connection pooling. Consider pooling if you run a large number of statements during an integration, such as a SQL lookup map function with thousands of records integrated with Oracle databases.

:::

Integration manages database connection pools as follows:

-   Identifies a connection pool by the Database connection component’s ID and its connection settings. This combination enables you to configure one component to talk to different databases. For example, you can define process extensions for connection settings so that one component can operate in separate connection pools.

-   When you change a connection’s primary settings on the **Connection** tab, such as a user or password, it creates a new connection pool when you redeploy the connection. It allows existing pools used by deployed processes to continue to operate without interruption.

-   When you change a connection’s secondary settings on the **Connection Pool** tab, such as maximum or minimum connections, it updates the existing connection pool the first time it requests the new version of the connection.

-   Every five minutes, monitors all connection pools used by the connector to reclaim unused connections and to restart extra connections to satisfy the **Minimum Connections** setting. If it does not use a connection pool in six hours and has no active connections, it is considered an expired or surplus connection.




**Enable Pooling** - 
 If selected, it enables connection pooling and other fields. Connection pooling can increase performance by using resources more efficiently.

**Maximum Connections** - 
 The maximum number of connections in the pool. For unlimited connections, set to either `-1` or `0`.

**Minimum Connections** - 
  The minimum number of connections in the pool.

**Maximum Idle Time \(sec\)** - 
  The length of time in seconds that a connection can remain open in an idle state.

**When Exhausted Action** - 
 Sets whether to wait for the connection or immediately fail when a connection becomes exhausted.

**Maximum Wait Time \(sec\)** - 
 The length of time in seconds to wait for a connection from the pool.

**Test Connection When Borrowing from Pool** - 
 If selected, verifies the validity of the connection when taking it from the pool.

**Test Connection When Returning from Pool** - 
 If selected, verifies the validity of the connection when adding it back to the pool.

**Test Idle Connections** - 
  If selected, verifies every 5 minutes that idle connections are still valid.

**Validation Query** - 
  Enter a simple SQL statement that returns a single row of data to determine the validity of the connection.

<TestConnection />