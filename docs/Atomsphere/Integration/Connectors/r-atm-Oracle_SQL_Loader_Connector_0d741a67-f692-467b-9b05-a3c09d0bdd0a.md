import TrackedProperties from './_TrackedProperties.md'

# Oracle SQL\*Loader connector 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-493dfe5a-5473-439c-9b53-80d0474b03d0"/>
</head>


The Oracle SQL\*Loader connector enables you to perform bulk data uploads to an Oracle database.

This connector performs the bulk uploads faster than the Database connector. The Oracle SQL\*Loader uses the Oracle SQL\*Loader utility, is optimized to reduce overhead, and is capable of bypassing data integrity checks when loading data. The connector is capable of importing thousands of documents that may contain thousands of records, meaning that it can handle millions of records.

## Connector configuration 

To configure a connector to communicate with the Oracle SQL\*Loader, set up two components:

-   Oracle SQL\*Loader connection — The connection represents the connection credentials to the appropriate Oracle instance.
-   Oracle SQL\*Loader operation — The operation represents an action against an Oracle database table.

## Supported editions 

This connector works with SQL\*Loader 9.2 and later editions.

## Prerequisites 

The Oracle SQL\*Loader connector requires the following:

-   Oracle SQL\*Loader 9.2 or later is installed.
-   Oracle SQL\*Loader must be installed on the server on which the Atom is installed.
-   Oracle database is installed.
-   A user name and password with sufficient permissions to perform the bulk data upload on the target schema.
-   The database has been created, the table and columns have been defined, and the sequences have been defined.


<TrackedProperties />
