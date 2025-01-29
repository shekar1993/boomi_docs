import TrackedProperties from './_TrackedProperties.md'

# Database (Legacy) connector 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-a0371711-c68d-4de0-86e0-3ab54165dabe"/>
</head>

:::info Important

This connector has been put into [Legacy status](../../Platform/atm-Feature_release_stages_00d83b66-e5db-4038-8398-fcaead4be12d.md). It is still supported, but will only receive critical security fixes. We encourage you to adopt the newest version (V2) of this connector in order to take advantage of the latest features Boomi Connectivity has to offer.

:::

Use the Database (Legacy) connector to select, insert, update and delete records in a database.

This connector stores all the relevant connection details for your database, but does not contain the SQL statements. Those are contained in the database profile.

Integration uses JDBC to connect to the database. You need a JDBC driver for each type of database you want to connect to. The Database (Legacy) connector comes pre-loaded with JDBC drivers for a few databases \(e.g., SQL Server \(jTDS\) and Oracle\). No additional steps are needed for these database types. To connect to a different type of database, you need to obtain a JDBC driver for that database and configure it in Integration. Your database vendor should be able to provide this driver. Third-party companies also sell commercial JDBC drivers. If you cannot find a JDBC driver for your database, consider using a JDBC-ODBC bridge.

## Connector configuration 

To configure a connector to communicate with your database, set up two components:

-   Database (Legacy) connection

-   Database (Legacy) operation


This design provides reusable components, which contain connection settings such as user name, password, etc. After building your connection and operation, set up your connector within a process. When you have properly configured your connector within your process, Integration can map to and from virtually any system using the Database connector to select, insert, update and/or delete data from your database.

## Supported databases 

The Database (Legacy) connector supports any database that has a JDBC driver. Some common examples include:

-   Apache Derby

-   IBM DB2

-   Microsoft ODBC

-   Microsoft SQL Server

-   MySQL

-   Oracle

-   PostgreSQL

-   SAP HANA

-   Sybase

-   Any other JDBC-compliant or ODBC-compliant database


The Database (Legacy) connector supports TLS protocol version 1.2 when both the JDBC driver and JVM also support it.

Some JDBC driver versions are pre-loaded with the Database connector, such as `jtds-1.2.jar` for SQL Server \(jTDS\) and `ojdbc14-10.2.0.4.0.jar` for Oracle. For a complete list, refer to the [Database (Legacy) connection](r-atm-Database_connection_324ffb62-7904-49de-a746-b8d051613f94.md) topic.

For a list of available database drivers in Boomi Atom Clouds, see the topic [Boomi Atom Clouds](../Getting%20started/c-atm-The_Boomi_Atom_Clouds_6c3bfab5-2fdc-4fde-a7cb-5f0c591a9f08.md). To connect with these databases in a process deployed to a Boomi Atom Cloud, no additional steps are required.

## Prerequisites 

The Database (Legacy) connector requires the following:

-   An Atom deployed locally to the database server or to another machine within your network that can access it.

-   Database connection information, including server host/IP address and port, user name, and password. The user name and password that is configured on the database must have sufficient permissions to access the objects required by the integration scenario. For more information, see your database documentation.

-   A database and tables. The Database (Legacy) connector does not create tables or other objects.

-   An installed and configured JDBC driver.


## Java 8 and 11 consideration (ODBC database connection) 

Be aware that the JDBC/ODBC bridge included in previous versions of Java was removed from Java 8 and subsequent versions. [Oracle recommends](https://docs.oracle.com/javase/7/docs/technotes/guides/jdbc/bridge.html) using JDBC drivers provided by your database vendor. Alternatively, you can use a third-party JDBC/ODBC bridge and install it like any custom JDBC driver. Verify that the Atom is running as a service, and has user rights to the ODBC connection. You can then define the database connection. For more information about support for Java 11, see the Boomiverse article [Support for Java 11](https://community.boomi.com/s/article/Support-for-Java-11).


<TrackedProperties />