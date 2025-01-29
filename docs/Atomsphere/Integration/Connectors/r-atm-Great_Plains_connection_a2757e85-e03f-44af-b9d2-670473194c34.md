# Great Plains connection 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-a2757e85-e03f-44af-b9d2-670473194c34"/>
</head>


The Great Plains connection contains details about how to connect to the Great Plains database \(typically, a Microsoft SQL Server database\) as well as the eConnect service. If you have multiple companies to integrate, create a separate connection for each.

**Note:** Use the Great Plains connector with Microsoft Great Plains 9.x and 10.x only. If you are using Microsoft Dynamics GP 2010, or 2013/2015/2016/2018+, use the Microsoft Dynamics GP connector. To learn more, see the topic [Microsoft Dynamics GP connector](r-atm-Microsoft_Dynamics_GP_connector_d3980054-06a1-42fb-adb7-03fc4d63de4b.md).

## Connection tab 



**Database Host Name** - 
 Host name or IP address of the Great Plains database server.

**Database Port** - 
 The database port number, usually 1433 \(SQL Server default\).

**Database Name** - 
 Name of the specific company database. Do not use the term *DYNAMICS* database, which Great Plains uses for system-level information. You can find the name of the database in the Great Plains user interface by going to Microsoft Dynamics GP \> Maintenance \> SQL and looking for the database that corresponds to your company.

**Domain User** - 
 The Windows domain user with access to the Great Plains SQL Server database machine. You must configure the user name in the SQL Server database and grant them the *DYNGRP* security role.

**Domain User Password** - 
  The Windows domain password for the user.

**eConnect RMI Port** - 
 The eConnect server RMI registry port number, which you need when there is a TCP port conflict.

**Great Plains Version** - 
 Choose a supported version: 9.x or 10.x. If you are using Microsoft Dynamics GP 2010, or 2013/2015/2016/2018+, use the Microsoft Dynamics GP connector.