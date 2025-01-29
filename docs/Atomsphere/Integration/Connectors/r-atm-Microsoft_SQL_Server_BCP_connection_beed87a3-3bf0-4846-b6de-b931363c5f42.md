import TestConnection from './_TestCon.md'

# Microsoft SQL Server BCP connection 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-beed87a3-3bf0-4846-b6de-b931363c5f42"/>
</head>


The Microsoft SQL Server BCP connection contains authentication details for the Bulk Copy Program \(bcp\) utility and how to connect to the appropriate SQL Server instance.

## Connection tab 

The Microsoft SQL Server BCP connection configures several bcp utility arguments. The following fields appear on the **Connection** tab:

**Server name** - 
  The name of the server hosting the target database. If available, you can include the instance name in the format: `serverName\instanceName`. This entry sets the bcp utility's `-S [server_name\instance_name]` argument.

**Use Trusted Connection** - 
 If selected, connects to SQL Server using Windows Integrated Authentication and validates the account name and password using the Windows principal token in the operating system. This entry sets the bcp Utility's `-T` argument.

**User Name**    
The user name to connect to the database. You must use the user name if you do not use a trusted connection. You must have sufficient permissions to perform the bulk copy operation on the target schema. This sets the bcp utility's `-U login-id` argument.

-   Exporting — To export the table or view, you must enable the SELECT permission.

 -   Importing — To import the table, you must enable INSERT and SELECT permissions. You need the ALTER TABLE permission when using options that require data definition language \(DDL\) operations, such as disabling constraints.


**Password** - 
  It requires the password for the user name if you do not use a trusted connection. This entry sets the bcp utility's `-P` password argument.

**Database Name** - 
  The name of the database that contains the target data. This entry sets the bcp utility's `-d` database\_name argument

**Schema Name Pattern** - 
 The name of the schema that contains the target table. Enter the percent \(%\) sign to search all schemas. If blank, it searches all objects without a schema.

**SQL Server Version**    
Used to select a SQL Server version:

 -   2012 and newer
 -   2008

 -   2005

 -   2000


For details about the arguments, see [bcp Utility](http://msdn.microsoft.com/en-us/library/ms162802.aspx) on the Microsoft Ignite website.

<TestConnection />