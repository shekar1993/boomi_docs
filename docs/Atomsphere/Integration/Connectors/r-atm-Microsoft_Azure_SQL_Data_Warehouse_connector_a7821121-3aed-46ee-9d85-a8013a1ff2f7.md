# Microsoft Azure SQL Data Warehouse connector 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-5F4A2FA9-3C2F-464B-B1E9-B7E3BE2A6F79"/>
</head>


The Microsoft Azure SQL Data Warehouse connector makes it easy to work with Microsoft Azure SQL Warehouse.

This connector pre-configures the Database connector with the necessary settings to simplify building relational queries against structured data stored in a Microsoft Azure SQL Data Warehouse. As a result, information on process reporting runs, the run history on the Start step, the process log, and licensing information shows the connection as Database rather than Microsoft Azure SQL Data Warehouse.

## Connector configuration 

To configure a Boomi Integration connector to communicate with the Azure SQL Data Warehouse, set up two components:

-   Microsoft Azure SQL Data Warehouse connection

-   Microsoft Azure SQL Data Warehouse operation


This approach creates reusable components that contain connection settings \(such as URL, User, Password, and Account\) and operation settings \(such as Object, Action, and data definitions\). After building your connection and operation, set up your connector within a process. When you define the process correctly, Integration can map to and from virtually any system using this connector to retrieve data from or send data to the Azure SQL Data Warehouse.

## Prerequisites 

The Microsoft Azure SQL Data Warehouse connector requires the following:

-   Microsoft Azure Data Warehouse connection information, including server host, IP address and port, user name, and password. The user name and password configured on the database must have sufficient permissions to access the objects required by the integration. For more information, refer to the documentation for your database.
-   If you use local Atoms, put the Microsoft SQL Server Driver appropriate for your runtime environment in the `<installation\_directory\>/userlib/database` directory. You can do that in one of two ways:

:::note 
    
For more information about SQL Server drivers, compatibility, and available downloads, see the [Microsoft JDBC Driver for SQL Server support matrix](https://docs.microsoft.com/en-us/sql/connect/jdbc/microsoft-jdbc-driver-for-sql-server-support-matrix?view=sql-server-ver15#java-and-jdbc-specification-support) and [Download Microsoft JDBC Driver for SQL Server](https://docs.microsoft.com/en-us/sql/connect/jdbc/download-microsoft-jdbc-driver-for-sql-server?redirectedfrom=MSDN&view=sql-server-ver15) pages from the Microsoft help.

:::

-   Upload the JAR file into your account library \(**Setup** \> **Account Libraries**\), add that file to a **Custom Library** component, and deploy it to the appropriate Atom, Molecule, Atom Cloud, or environment.

  For JAR files that support a connector, you create a **Custom Library** component with a type of **Connector** and select a connector type — in this case, *Database*. When you deploy the component, it deploys the referenced the JAR files to the `/<installation_directory>/userlib/database` directory. Integration creates the `userlib/database` directory if it does not exist.

-   Load the JAR file manually into the appropriate directory of a local Atom, Molecule, or private Atom Cloud. After you load the JAR files, you must restart the Atom, Molecule, or private Atom Cloud. If the userlib/database directory does not exist, you must create it.

-   If you use a Atom Cloud to connect to the Azure SQL Data Warehouse, it installs the SQL Server JDBC driver `sqljdbc4.jar` for you.


The Microsoft Azure SQL Data Warehouse connector uses the same driver as SQL Server. It does not include drivers for local Atoms. You can download the drivers from the [Microsoft, Download Microsoft JDBC Driver for SQL Server page](https://msdn.microsoft.com/en-us/library/mt683464(v=sql.110).aspx).

## Tracked properties 

The Microsoft Azure SQL Data Warehouse connector has no tracked properties.