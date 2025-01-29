# Creating a Microsoft Azure database connection 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-442c426e-72d1-430b-8781-c741f097abee"/>
</head>


By creating a Microsoft Azure database connection, you can use the Azure database with Boomi Integration.

## About this task
Boomi Cloud users have the Azure driver installed for them. Private cloud owners who want to use Azure need to download the Azure database driver from Microsoft and place it in the `/<installation_directory>/userlib/database` directory. To place the driver in this directory, upload the JAR file into your Integration account library \(**Settings** \> **Account Information and Setup** \> **Account Libraries**\), add that file to a Custom Library component, and deploy the component to the appropriate Atom, Molecule, Atom Cloud, or environment.


:::note

Uploaded or imported files pass through a virus scanner first. If the scan detects a virus, you receive an error message, and the scan rejects the file. If an error persists, contact Boomi Support.

:::

For JAR files that support a connector, you create a Custom Library component with a type of Connector and select a connector type — in this case, Database. When you deploy the component, the JAR files that it references are deployed to the `/<installation_directory>/userlib/database` directory. If the userlib/database directory does not exist, Boomi Integration creates it.

## Procedure

1.  In Integration, create a Database connection.

2.  On the Connection tab, make the following entries:

    a.  Database Type — Select Custom.

    b.  User — Enter the name you use to sign in to your Microsoft Azure account.

    c.  Password — Enter your Azure SQL database account password — not your Azure account password.

    d.  Class Name — Enter `com.microsoft.sqlserver.jdbc.SQLServerDriver`

    e.  Connection URL — Build the connection URL like this: `jdbc:sqlserver://<host_name>:<port_no>;database=<db_name>`

    The property “encrypt = true” is optional, but if you set it, specify hostNameInCertificate

    If the server name in the connection string is shortName.domainName, set the hostNameInCertificate property to \*.domainName.

3.  Click **Save and Close**.

4.  Verify that your connection is working by browsing the Azure database.