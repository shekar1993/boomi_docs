# Microsoft Dynamics GP connection 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-3bc296ee-4c76-4b2e-9c23-3be98f78be82"/>
</head>


The Microsoft Dynamics GP connection contains details about how to connect to the Microsoft Dynamics GP database \(typically, a Microsoft SQL Server database\) as well as the eConnect service.

If you have multiple companies to integrate, you need a separate connection for each.

## Connection tab 

**Database Host Name**: Host name or IP address of the Great Plains database server. You can use `localhost` if you install the Atom on the same server as eConnect.

**Database Port**: Database port to use, usually 1433 \(SQL Server default\).

**Database Name**: Name of the specific company database. Do not use the name *DYNAMICS*, which Great Plains uses for system-level information. You can find the name of the database in the Great Plains user interface by going to maintenance SQL list and looking for the database that corresponds to your company.

**eConnect Host Name**: Host name or IP address of the eConnect server. You can use `localhost` if you install the Atom on the same server as eConnect.

For processes that include the Microsoft Dynamics GP connection and that you created or updated after the 6 March 2013 release, you can use process extensions to extend the eConnect Host Name. The extensions enable you to change the eConnect Host Name so that it can use the same process to work with different Microsoft Dynamics GP instances. You might do this if you use integration packs. This functionality is available in the 2010 and newer versions.

**Domain User**: The Windows domain user with access to the Great Plains SQL Server database machine. You must configure the user name in the SQL Server database and grant them the DYNGRP security role. Enter in the format `domain\user`.

**Domain User Password**: The Windows domain password for the user.

**Great Plains Version**: The supported versions are 2010, or 2013/2015/2016/2018+