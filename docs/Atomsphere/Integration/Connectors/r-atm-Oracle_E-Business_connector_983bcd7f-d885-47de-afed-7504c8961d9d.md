import TrackedProperties from './_TrackedProperties.md'

# Oracle E-Business \(EBS\) connector 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-9f6dc6c0-d070-4725-837e-9eb15e42114f"/>
</head>


The Oracle E-Business \(EBS\) connector \(classified as an Enterprise connector\) enables you to connect to the Oracle E-Business Suite. This integration runs database stored procedure calls \(Execute operation\) and queries \(Query operation\) using Java \(JDBC\).

## Supported integrations 

:::info Attention

The Oracle E-Business \(EBS\) connector is not available for use by customers who have not previously used it. Boomi encourages you to take advantage of the functionality provided by the [Oracle E-Business Suite V2 connector](../Connectors/int-Oracle_EBS_V2_connector_5083af8a-8d20-4262-8020-aac9cf558d4e.mdx).

:::

The connector supports the following integrations:

-   Execute operations call Oracle PL/SQL stored procedures as defined in the Oracle Integration Repository PL/SQL interfaces. PL/SQL procedures are categorized by module, package, and procedure name.
-   Query operations run basic SQL SELECT queries for E-Business objects for which you define the returned fields, specify nested filter expressions, and return results sorted by one or more fields.
-   The Oracle EBS connector supports stored procedures with the collection types TABLE, ARRAY, and VARRAY as arguments and as nested types for RAW and ANYDATA data types.

When you perform an import, it adds both the Execute and Query operations using the metadata in the Oracle E-Business database schema.

## Connector configuration 

To configure a connector to communicate with the Oracle E-Business Suite, set up two components:

-   Oracle E-Business connection
-   Oracle E-Business operation

This design provides reusable of components that contain connection settings \(such as URL, user name, password\) and operation settings \(such as Object, Action, data definitions\). After building your connection and operation, set up your connector within a process. When you define the Oracle E-Business connector within your process, Integration can map to and from virtually any system using the connector to retrieve or send data to the Oracle E-Business Suite.

## Supported editions 

Boomi Integration supports Oracle E-Business Suite Version 11.

:::info Important

If you need to integrate with Oracle E-Business Suite version 12 or later, use the HTTP Client connector or Web Services SOAP Client connector. You can use these connectors to integrate with Oracle E-Business Suite by interfacing with the Oracle E-Business Suite Integrated SOA Gateway \(ISG\).

:::

## Limitations 

The following known limitations affect this connector:

-   Boomi supports running PL/SQL stored procedure calls. However, Boomi does not currently support function calls.
-   Boomi does not support all Oracle data types. If a Query or Execute stored procedure’s defined parameter or result set uses one of the following data types, you receive an exception error:
    -   BLOB

    -   CLOB

    -   ROW

    -   SDO\_GEOMETRY \(Spatial\)

    -   XML


## Prerequisites 

To implement a connection to the Oracle E-Business Suite from :

-   You must install an Atom, which you can install on a different machine than the Oracle E-Business Suite. However, the Atom must have network connectivity to the Oracle E-Business Suite machine.
-   The user must have access to the Oracle E-Business Suite database and objects in order to query, execute PL/SQL, and create and delete temporary database objects.
-   The Oracle E-Business connector requires a database account that has CREATE privileges. See your Oracle E-Business documentation or contact your Oracle E-Business administrator for assistance.

## Implementation considerations 

If you are unsure whether to use the Database connector or the Oracle E-Business connector, consider the following:

-   Are you querying data from Oracle?
    -   You can do many database queries using the Database connector if you know the tables and elements to access and the SQL queries to perform. The Oracle E-Business connector enables you to query specific business objects and tables but not write complex SQL queries such as joins. The Database connector allows this.
-   Are you writing data to Oracle?
    -   If you are writing data to Oracle, you can write to the Oracle Interface tables in the E-Business schema using the Database connector. You can then use the tools from within the E-Business Suite to validate and load the data from the Interface tables into the production tables. A common example is orders that require approval or inventory checks before being fulfilled.
    -   If you are writing data to Oracle and using the Oracle E-Business connector, which leverages PL/SQL \(API\) procedures as opposed to the ODBC/JDBC database drivers used by the Database connector, you can avoid writing to the Interface tables and leverage the logic built into the PL/SQL procedures that write directly to the production tables.
    -   You can write directly to the production tables using the Database connector. This process works well if you know which tables and elements to update or insert. You must also be familiar with the interdependencies between the tables in the Oracle E-Business Suite.

The primary advantage of the Oracle E-Business connector is the logic and validation in the PL/SQL API code that automatically performs the updates to multiple underlying tables and maintains the interdependencies between the associated tables.

<TrackedProperties />