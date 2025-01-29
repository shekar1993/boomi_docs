import TrackedProperties from './_TrackedProperties.md'

# Microsoft SQL Server BCP connector 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-37970203-7a9d-4c79-b9aa-9043da2c16fd"/>
</head>


Use the Microsoft SQL Server Bulk Copy Process \(BCP\) connector to perform Bulk Copy operations on a SQL Server database.

Bulk copy operations are efficient import and export operations to load data into or export data from a single SQL Server table. Use this connector to quickly import or export a large quantity of data into or from a SQL Server database. The Microsoft SQL Server BCP connector performs imports and exports faster than the Database connector because it is optimized to reduce overhead. The connector can bypass data integrity checks when loading data and can import and export thousands of documents that can contain thousands of records. The connector can handle millions of records. Only one bulk copy process runs at a time within the during the same process.

## Connector configuration 

To configure the connector to communicate with Microsoft SQL Server BCP, set up two components:

-   Microsoft SQL Server BCP connection. The connection provides the connection credentials to the appropriate SQL Server instance.

-   Microsoft SQL Server BCP operation. The operation represents an action against a SQL Server database table.


Create one Microsoft SQL Server BCP connection component for each SQL Server database table with one or more Microsoft SQL Server BCP operations for each type of action that your interaction requires.

## Supported editions 

The connector supports SQL Server versions 2000, 2005, 2008, 2012, 2014, 2016, and 2017.

## Prerequisites 

The Microsoft SQL Server BCP connector is available on Windows only and requires the following:

-   A user name and password with sufficient permissions to perform the Bulk Copy operation on the target schema.

-   An Atom configured for Microsoft SQL Server BCP browse operations. Because the Microsoft SQL Server BCP connector is available only on Windows, you must install the Atom on Windows.

-   The bcp utility \(`bcp.exe`\) distributed with SQL Server Tools to perform bulk copy operations from the command line. Verify that it installs the correct version of the bcp utility:

    -   SQL Server 2000 uses bcp Utility version 8.0.
    -   SQL Server 2005 uses bcp Utility version 9.0

    -   SQL Server 2008 & 2008 R2 uses bcp Utility version 10.0.

    -   SQL Server 2012 uses bcp Utility version 11.0

    -   SQL Server 2014 uses bcp Utility version 12.0.

    -   SQL Server 2016 uses bcp Utility version 13.0.

    -   SQL Server 2017 uses bcp Utility version 14.0.

:::note

If you are running the connector's Atom from a machine other than the one hosting the server, install a copy of the bcp utility on the host machine.

:::

## Using trusted connections for browse operations 

Enabling trusted connections for Microsoft SQL Server BCP browse operations requires a deployed DLL file so that Java can use Windows functionality to authenticate the user. The Microsoft SQL Server BCP connector automatically deploys the file the first time it attempts a browse operation using a trusted connection. You must add this path to the Atom’s JVM configuration to locate the file. Perform these steps the first time you attempt a browse operation using a trusted connection with the Microsoft SQL Server BCP connector. The configuration is then set for subsequent attempts.


<TrackedProperties />