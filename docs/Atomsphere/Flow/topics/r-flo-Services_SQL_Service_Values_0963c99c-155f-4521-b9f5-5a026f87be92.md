# SQL (Deprecated) connector configuration values

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-0963c99c-155f-4521-b9f5-5a026f87be92"/>
</head>

:::warning

This connector is now in Deprecated status. It is no longer available for new users and is not actively maintained. We will provide a minimum six-month notice before its retirement. We recommend upgrading to the newer supported version of this connector.

:::

The following configuration values can be defined during installation of the SQL (Deprecated) connector.


## SQL (Deprecated) connector values

|Name|Type|Required or optional?|Description|
|----|----|---------------------|-----------|
|No SSL|Boolean|✅ Required|Enable or disable an SSL (Secure Sockets Layer) connection to the SQL database.<br />- This is already set to '' by default so that an SSL connection is enabled.<br /> `$False`<br />- Set this value as '' to disable SSL if you do not wish your connection to use an SSL connection.<br /> `$True`<br />**Note:** Using SSL and a Server Public Certificate is recommended best practice when implementing the SQL (Deprecated) connector, particularly if the connection between the SQL database and the SQL (Deprecated) connector is not in your private network.|
|Password|Password|✅ Required|The password for the SQL database.|
|Server Public Certificate|String|❌ Optional|A URL Server Certificate for server verification. Note: Using SSL and a Server Public Certificate is recommended best practice when implementing the SQL (Deprecated) connector, particularly if the connection between the SQL database and the SQL (Deprecated) connector is not in your private network.|
|Database Type|String|✅ Required|The type of SQL database that you are connecting using one of these valid types: mysql, postgresql, sqlserver|
|Database Schema|String|✅ Required|The database schema. Depending on the database you are connecting, this may be synonymous with the database name (MySQL), 'dbo' (SQL Server), or 'public' (PostgreSQL).|
|Database Name|String|✅ Required|The database name.|
|Host|String|✅ Required|The hosted location of the database. For example, 'localhost' for a local database, or 'mydatabase.example.us-east-1.rds.amazonaws.com' for an Amazon hosted database.|
|Port|Numeric|✅ Required|The port for your database. This must be a numeric value, for example, '3306' for a MySQL database, '5432' for a PostgreSQL database.|
|Username|String|✅ Required|The Username for your database that has access to the required database tables.|