# OP Database - Partner connection

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-c1901336-84f8-4a3f-a831-8a62d2f6a2cf"/>
</head>

The Database connection contains the connection settings for the database, including the hostname, port, database name, user name, password, advanced options, and connection pooling options.

## Connection tab
| Video Type | Link |
|:---|---:|
| Setting up pre-defined connections |  https://drive.google.com/file/d/12-cD8HwYET4Hp71sTB9oI4csAvknXx2J/preview  |
|  Setting up custom connections  |  https://drive.google.com/file/d/1w6I5Wmo9B5jiFZjjdl3osTHN3TDJbfJf/preview  |

- **Database Type**: The type of database that you want to connect to
    - 	Postgres
	-	MySQL
	-	MSSQL
	-	Oracle
	-	MariaDB
	-	IBM DB2
	-	SAP HANA
	-	Custom (Not one of the pre-defined databases)

- **Host**: Name or IP address of the database server (Only available with pre-defined databases)

- **Port**: The port that is used to connect to the database server (Only available with pre-defined databases)
- **Database Name**: The name of your database (Only available with pre-defined databases)
- **Connection URL**: Refers to the Database URL. It is mandatory to include the database name in the connection URL (Only available with custom databases)
- **Class Name**: The class name of the database driver to be sent to the respective database (Only available with custom databases)
- **Case Sensitive Character**: The case-sensitive character for the database (Only available with custom databases)
- **Upsert Type**: The type of upsert to use (Only available with custom databases)
- **Field Case**: The case the database uses for non-case-sensitive fields (Only available with custom databases)
- **Get All Tables Query**: A command used to retrieve all tables if the information cannot be retrieved through the metadata (Only available with custom databases)
- **Get All Stored Procedures Query**: A command used to retrieve all stored procedures if the information cannot be retrieved through the metadata (Only available with custom databases)
- **User Name**: The database user on whose behalf the connection is made
- **Password**: The user's password
- **Schema Name**: The name of your schema (MariaDB does not use schemas)
- **Connection Timeout** (ms): Enter the maximum time (in milliseconds) that the connector can wait to complete the connection handshake with the database
- **Read Timeout** (ms): Enter the maximum time (in milliseconds) that the Molecule or Atom Cloud can spend attempting to read data from the database
- **Enable Connection Pooling** : If selected, connection pooling is enabled, allowing connections to be reused for future requests. Connection pooling may improve performance by utilising resources more efficiently. The default is false.
	- **Maximum Connections**: The maximum number of connections allowed in the pool. The default is -1, which indicates an unlimited number of connections. You will receive an error if you attempt to exceed the maximum (Connection pooling must be enabled)
	- **Minimum Connections**: Enter the minimum number of connections allowed in the pool. The default is 0 (Connection pooling must be enabled)
	- **Maximum Idle Time**: Enter the maximum amount of time (in seconds) that a connection can remain open in an idle state. The default is 0 (Connection pooling must be enabled)
	- **When Exhausted Action**: Indicate whether to wait for a connection or immediately fail, when a connection pool is exhausted (Connection pooling must be enabled)
	- **Maximum Wait Time** (Optional): Enter the maximum amount of time (in seconds) to wait for a connection from the pool. The default is 0.
	- **Test Connection When Borrowing from Pool**: Select this option to verify if a connection is still valid while taking it from the pool (Connection pooling must be enabled)
	- **Test Connection When Returning from Pool**: Select this option to test if a connection is still valid when returning it to the pool (Connection pooling must be enabled)
	- **Test Idle Connections**: Select this option to test if the idle connections are still valid (Connection pooling must be enabled)

- **Validation Query**: Enter a simple SQL Statement to return a single row of data, if the connection is valid (Connection pooling must be enabled)
- **Connection Properties**: Use the Add Property button to add additional connection properties, if required to establish a connection to the database.

## JDBC drivers
|  Driver Type  |  Group ID  |  Artifact ID  |  Version  |
|:---|:--:|:--:|---:|
|  Postgres  |  org.postgresql  |  postgresql  |  42.7.4  |
| MySQL  |  com.mysql  |  mysql-connector-j  |  9.1.0  |
| MSSQL |  com.microsoft.sqlserver  |  mssql-jdbc  |  12.8.1.jre11  |
|  Oracle  |  com.oracle.database.jdbc  |  ojdbc11  |  23.5.0.24.07  |
|  MariaDB  |    |    |  mariadb-java-client-3.4.1.jar  |
|  MariaDB  |  org.mariadb.jdbc | mariadb-java-client  |  3.5.0  |
|  IBM DB2  |  com.ibm.db2  |  jcc  |  11.5.9.0  |
|  SAP HANA  |  com.sap.cloud.db.jdbc  |  ngdbc  |  2.22.12  |

:::note

 Using PostgreSQL in Atom Cloud may cause some FilePermission issues. If this is the case, add this connection property:

 Key: `sslfactory`
 Value: `org.postgresql.ssl.NonValidatingFactory`

:::

## Adding other JDBC drivers
|  Video Type  |  Link  |
|:---|---:|
| Adding additional JDBC drivers |  https://drive.google.com/file/d/1eda1ryenKRBmHoaOkluFH1xhwZbmMRrv/preview  |

If your connection requires other JDBC drivers, upload the JAR file containing the drivers to your account library. Once uploaded, you can create Custom Library components capable of containing JARs. Use these deployable components to place the JARs in the appropriate directory for the connector's reference.

:::note

You need the database drivers of another JDBC- or ODBC-compliant database to set up a custom connection.

:::

## Prerequisites
- Boomi Platform opened
- Connector uploaded
- Connection created
- JDBC driver downloaded 

## Adding the JAR to Boomi
If the JAR is not in the Boomi account:

1. Go to **Settings** > **Account Information and Setup** > **Deployment Resources** > **Account Libraries**.
2. Click **Upload a File**. Then upload the jar.
3. Go to **Services** > **Integration** > **Build**.
4. Click **Create Custom Library**.
5. Choose Connector as the type. For JAR files that support a connector, you create a Custom Library component with a type of Connector and select a connector type, such as Database.
6. Select the connector to upload to.
7. Add all jars (JDBC drivers) to upload.
8. Click **Save**.
9. Create a packaged component and go through the steps.
10. Deploy the component to the appropriate Atom, Molecule, Atom Cloud, or environment. When you deploy the component, the JAR files that it references are deployed to the `/<installation_directory>/userlib/database directory`. If the `userlib/database` directory does not exist, Integration creates it. 

You may need to restart the Atom after deploying these components.

The driver is now available for use with a custom connection.

To see all libraries deployed:
1. In Platform, go to **Manage** -> **Atom management**.
2. Click on the atom, then go to **Runtime** -> **Installed Libraries**.
3. This lists all the installed jars and their folders.

## Test Connection

You can test your connection settings before you use or save the connection in a process. The Test Connection ensures that your specified settings are correct, valid, and accessible. If the test connection is successful, you can save the connection. Otherwise, review and correct any incorrect settings, then test again.

:::info Attention

You can only run the **Test Connection** against containers associated with your account (local Atoms, Molecules, and Atom Clouds).

:::
