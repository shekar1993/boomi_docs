# Creating a custom Database connection 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-778c837a-abd3-4e9c-854b-f76f34b9452b"/>
</head>


By creating a custom database connection, you can connect to any database that has a JDBC driver.

## About this task

You can create a custom database connection by obtaining a JDBC driver for the database and configuring it for use with your Atom. This procedure describes the steps to create a custom database connection with the Amazon Redshift data warehouse as an example with a local Atom. Amazon Redshift uses the PostgreSQL JDBC driver, which you do not need to install if you are using a Boomi Atom Cloud because the driver is already installed.

## Procedure

1.  Download the PostgreSQL JDBC driver.

2.  Place the PostgreSQL driver file in the `/<installation_directory\>/userlib/database` directory by uploading the JAR file into your Integration account library \(**Settings** \> **Account Information and Setup** \> **Account Libraries**\), adding that file to a Custom Library component, and deploying the component to the appropriate Atom, Molecule, Atom Cloud, or environment.

    
:::note

Uploaded or imported files pass through a virus scanner first. If the scan detects a virus, you receive an error message, and the scan rejects the file. If an error persists, contact Boomi Support.

:::

3.  In Integration, create a Database connection.

4.  On the **Connection** tab, enter the following information:

    a.  **Database Type** -  Custom

    b.  **User** -  your\_user\_name

    c.  **Password** -  your\_password

    d.  **Class Name** -  org.postgresql.Driver

    e.  **Connection URL** -  `jdbc:postgresql://<endpoint>:<database_port>/<database_name>?tcpKeepAlive=true`

5.  Click **Save and Close**.