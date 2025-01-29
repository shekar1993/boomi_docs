import TestConnection from './_TestCon.md'


# Microsoft Azure SQL Data Warehouse connection

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-4c61ea6b-f90e-4378-9ef3-a3e4678c8242"/>
</head>


The Microsoft Azure SQL Data Warehouse connection contains the connection settings, such as host, port, Azure SQL Data Warehouse name, user, password, advanced options, and connection pooling options.

## Connection tab 



**Azure SQL Data Warehouse URL** - 
 Populates the read-only field when it specifies other connection values. Used for reference only.

**Driver Type** - 
 You cannot change the Azure SQL Data Warehouse driver, which is the default.

 The required driver file must reside in the `/<installation_directory>/userlib/database` directory.

 Upload the JAR files into your Integration account library (**Settings > Account Information** and **Setup > Account Libraries**). For more information, see the topics [Creating a Custom Library component](../Process%20building/t-atm-Creating_a_Custom_Library_Component_8fce64fb-4b85-4977-9876-e0d616526228.md), and [Custom library deployment considerations](../Process%20building/c-atm-Custom_library_deployment_considerations_7fccfe31-e438-4fa6-bab0-7f395eef5fe3.md) to deploy the appropriate Atom, Molecule, Atom Cloud, or environment. Uploaded or imported files first pass through a virus scanner. The upload or import results in an error if it detects a virus, and then rejects the file. If an error persists, contact Boomi Support.

:::note

Uploaded or imported files pass through a virus scanner first. If the scan detects a virus, you receive an error message, and the scan rejects the file. If an error persists, contact Boomi Support.

:::

**User** - 
 The Azure SQL Data Warehouse user name.

**Password** - 
  The Azure SQL Data Warehouse user password.

**Host** - 
 The name or IP address of the Azure SQL Data Warehouse server.

**Port**    
  The port with which to connect to the Azure SQL Data Warehouse server. Common defaults are:

 -   SQL Server: 1433

  -   Oracle: 1521

 -   Sybase: 5000

  -   Derby: 1527

  -   DB2: 50000

 -   MySQL: 3306


**Azure SQL Data Warehouse Name** - 
 The name of your Azure SQL Data Warehouse.

**Additional Options**   
 Any additional options specified in your database URL. Name and value pairs delimited by semicolons are often used, such as `;instance=DB01`

Connect to SQL Server as a Windows user, for example: `;domain=<Your Windows Domain Name>`

 If you are using SQL Server, connecting as a Windows user, and connecting to a named instance, the order of the properties is important for the JDBC URL. For example: `;instance=<value\>;domain=<value\>`

**Class Name** - 
 Shows the fully qualified Java class name of the JDBC driver. Refer to the JDBC vendor's documentation for the class name. For example: `sun.jdbc.odbc.JdbcOdbcDriver`

**Connection URL** \(Custom Azure SQL Data Warehouse type only\)    
 Refer to the JDBC vendor's documentation for the connection URL syntax.

 Example pattern: `jdbc:<Azure SQL Data Warehouse type\>://<host\>:<port\>/<Azure SQL Data Warehouse name\>;<additional options name/value pairs\>`

 Example URL: `jdbc:mysql//localhost:3306/MyAzure SQL Data Warehouse;option1=value;option2=value`

To create an ODBC database connection, see the topic linked below.

## Advanced Options tab 



**Write SQL to File?**     
 Used for debugging dynamic statements, especially when writing to an Azure SQL Data Warehouse. This option works with the Azure SQL Data Warehouse operation's Send action — not with the Get action.

 If selected, any SQL statements used with this connection are not run against the Azure SQL Data Warehouse. Instead, the SQL statement is written to the file that you designate.

**SQL File Path** - 
  Enter the full path and file name to write the SQL, such as C:/Test/sqlout.txt.

## Connection Pool tab 

:::note

Most integrations do not require connection pooling. Consider pooling if you run a large number of statements during an integration, such as a SQL lookup map function with thousands of records integrated with Oracle Azure SQL Data Warehouses.

:::

Integration manages the Azure SQL Data Warehouse connection pools as follows:

-   Uses Azure SQL Data Warehouse Connection component’s ID and connection settings to identify a connection pool. This combination enables the configuration of one component to talk to different Azure SQL Data Warehouses. For example, you can define process extensions for connection settings so one component can operate in separate connection pools.

-   When you change a connection’s primary settings on the **Connection** tab, such as a user or password, it creates a new connection pool when you redeploy the connection. It allows existing pools used by deployed processes to continue to operate without interruption.

-   When you change a connection’s secondary settings on the **Connection Pool** tab, such as maximum or minimum connections, it updates the existing connection pool the first time it requests the new version of the connection.

-   Every five minutes, Integration monitors all connection pools used by the connector to reclaim unused connections and to restart extra ones to satisfy the **Minimum Connections** setting. In addition, it considers it an expired or surplus connection if it does not use a connection pool in six hours and does not have active connections.


  
 

**Enable Pooling** - 
 If selected, it enables connection pooling and other fields. Connection pooling can increase performance by using resources more efficiently.

**Maximum Connections**   
  The maximum number of connections in the pool. For unlimited connections, set to either -1 or 0.

**Minimum Connections** - 
 The minimum number of connections in the pool.

**Maximum Idle Time \(sec\)** - 
 The length of time in seconds that a connection can remain open in an idle state.

**When Exhausted Action**   
  Sets whether to wait for connection or immediately fail when a connection becomes exhausted.

**Maximum Wait Time \(sec\)** - 
  The length of time in seconds to wait for a connection from the pool.

**Test Connection When Borrowing from Pool** - 
  If selected, Integration verifies the validity of the connection when taking it from the pool.

**Test Connection When Returning from Pool** - 
 If selected, Integration verifies the validity of the connection when adding it back to the pool.

**Test Idle Connections** - 
 If selected, Integration verifies the validity of idle connections every 5 minutes.

**Validation Query** - 
 Enter a simple SQL statement that returns a single row of data to determine the validity of the connection.


<TestConnection />