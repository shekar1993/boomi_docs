import PartnerSupport from './_PartnerSupport.md'

# OP Database - Partner connector

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-0e1d3fcb-4ae7-4df0-bd37-9a6cb4406c5d"/>
</head>

<PartnerSupport />

The OP Database — Partner Connector allows you to process or retrieve data from any JDBC-supported database using Database drivers. It enables you to Insert, Get, Update, Upsert, Delete and Execute Stored procedures on the data available in the database.

:::note

The documentation for this connector is provided by a partner.

:::

## Connector configuration

To configure the connector, set up the following two components:

* **Connection**: The connection contains all connection settings.

* **Operation**: Represents an action used to interact with the provider.

## Prerequisites

The connector requires the following:

* Database connection information, including server host/IP address and port, user name, and password. The user name and password configured on the database must have sufficient permissions to access the objects required by the integration scenario. For more information, see your database documentation.

* A database and tables. The Database connector does not create tables or other objects.

* An installed and configured JDBC driver if using the custom database type.

* Atom running with Java 11

### **Supported Editions**

The connector supports any JDBC-compliant or ODBC-compliant database (tested with Microsoft SQL Server, PostgreSQL, H2, IBM DB2, MariaDB database).

The connector comes with a set of pre-defined databases with pre-loaded configurations and drivers:

* Microsoft SQL Server

* PostgreSQL

* IBM DB2

* MariaDB

Please note that while the connector offers comprehensive functionality with these databases, there may be limitations with certain databases or drivers. For example, the MongoDB JDBC driver has limited support, typically allowing only select statements in the cloud environment.

Atom Cloud uses high-level Java security policies, meaning some JDBC drivers may not work.

## Tracked Properties

This connector has no predefined tracked properties. See the topic [Adding tracked fields to a connector operation](../../Integration/Process%20building/t-atm-Adding_tracked_fields_to_a_connector_operation_f71821dd-95ee-4ebd-bfc9-3333262f56f6.md) to learn how to add a custom tracked field.