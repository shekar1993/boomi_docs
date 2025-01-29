# SQL connector configuration values

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-052b58f6-aa55-4da2-b815-9d14e028c9d1"/>
</head>


Configuration values are required when installing the SQL connector.

## Configuration values

| Name            | Type      | Required or optional? | Description                                                                                                                                                                                                      |
|:---------------:|:---------:|:---------------------:|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Filter          | Filter    | Filter                | Filter                                                                                                                                                                                                           |
| No SSL          | Boolean   | Required              | Enable or disable an SSL (Secure Sockets Layer) connection to the SQL database.<br />• This is set to "False" by default so that an SSL connection is enabled.<br />• Set this value as "True" to disable SSL.        |
| Port            | Number    | Required              | The port for your database. Must be a numeric value, for example, "3306" for a MySQL database, "5432" for a PostgreSQL database.                                                                                   |
| Password        | Password  | Required              | The password for the SQL database.                                                                                                                                                                               |
| Database Name   | String    | Required              | The database name.                                                                                                                                                                                               |
| Database Schema | String    | Optional              | The database schema.<br />• If you are connecting a MySQL database, the schema is synonymous with the database, so a working example value could be the database name.<br />• If you are connecting an SQL Server database, a working example value could be "dbo".<br />• If you are connecting a PostgreSQL database, a working example value could be "public". |
| Database Type   | String    | Required              | The type of SQL database that you are connecting, using one of the supported database types:<br />• mysql<br />• postgresql<br />• sqlserver                                                                          |
| Host            | String    | Required              | The hosted location of the database. For example, "localhost" for a local database, or "mydatabase.example.us-east-1.rds.amazonaws.com" for an AWS hosted database.                                                |
| Username        | String    | Required              | The Username that has access to the required database tables for your database.                                                                                                                                 |
