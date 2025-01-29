---
sidebar_position: 1
---

# Preparing a Database

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-b49fcd6d-5dce-4b54-a1c2-47a30979d0eb"/>
</head>

Local Edition requires having a MySQL database of a version 8.0.23 or higher. You can optionally configure the database for secure communication. MySQL 8 supports both TLS 1.2 and TLS 1.3 secured connections. TLS 1.3 provides higher security. Depending on your deployment architecture, you may need to enable replication. Check your cloud provider or MySQL documentation for replication.

The following steps must be performed by your DBA.

## Procedure

1. Create a `masherysolar` database. 

   ```
   CREATE DATABASE masherysolar;	
   ```				

2. Create the `masheryonprem` user.

   ```
   CREATE USER `masheryonprem` identified by <password>;
   ```

3. Grant the following privileges to the masheryonprem user.

   ```
   GRANT SELECT, INSERT, UPDATE, DELETE ON masherysolar.* TO masheryonprem;
   GRANT CREATE TEMPORARY TABLES ON masherysolar.* TO masheryonprem;
   GRANT EVENT, ALTER ROUTINE, CREATE ROUTINE, EXECUTE ON masherysolar.* TO
   masheryonprem;
   FLUSH PRIVILEGES;
   ```

4. Create a schema for the masherysolar database. The SQL script for creating the schema is available in `<extract location>/scripts` folder

   a. `apim-le-db-schema\_6.0.0.sql`

   b. `apim-le-db-token-purger-schema\_6.0.0.sql`

Replace name of database in the following command

```
MYSQL\_PWD=$ROOT\_PWD mysql -h $MYSQL\_SERVICE\_HOST -uroot --database=name masherysolar < apim-le-db-schema\_6.0.0.sql

MYSQL\_PWD=$ROOT\_PWD mysql -h $MYSQL\_SERVICE\_HOST -uroot --database=name masherysolar < apim-le-db-token-purger-schema\_6.0.0.sql
```

5. Do the following database server settings:
   
   - Setup timezone tables. This requires Database administrator permissions to be able to modify system tables.

      To prepare the Time Zone tables for on-premises MySQL, see the [Populating the Time Zone Tables](https://dev.mysql.com/doc/refman/8.0/en/time-zone-support.html#time-zone-installation) section of the MySQL Documentation.

   - Load timezone information from operating system: 

      `mysql_tzinfo_to_sql /usr/share/zoneinfo | mysql -u root mysql`

   - Configure Event scheduler. Local Edition uses MySQL scheduled events to perform clean up of different tables.
      `msql config file/my.cnf`

       ```
      [mysqld]
      ...
      ...
      event\_scheduler=ON
      ```

6. Secure connection settings 

   Securing connection to mysql is your choice. Enabling secure connections is specific to each cloud provider and host mysql server.

   For detailed steps on using Encrypted connections with MySQL, see [Securing Connections to an External MySQL 8 compliant database](../Installation/Securing_connections_to_external_MySQL_8_compliant_databases.md).
