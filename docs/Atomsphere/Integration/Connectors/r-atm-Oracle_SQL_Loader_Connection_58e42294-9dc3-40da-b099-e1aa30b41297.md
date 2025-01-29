# Oracle SQL\*Loader connection 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-58e42294-9dc3-40da-b099-e1aa30b41297"/>
</head>


The Oracle SQL\*Loader connection represents a single Oracle SQL\*Loader instance, including sign-in credentials.

You create one Oracle SQL\*Loader connection component for each Oracle database table, with one or more Oracle SQL\*Loader operations. You create a connection for each type of interaction required by your integration scenario.

## Connection tab 

The following fields appear on the **Connection** tab:



**Server Name** - 
  The name of the server hosting the target database.

**Port Number** - 
 The port number of the server hosting the target database. The default port is 1521.

**User Name** - 
  The user name that connects to the database.

**Password** - 
 The password for the user name.

**Database Name** - 
 The name of the database that contains the target data.

**Schema Name** - 
 The name of the schema that contains the target table. If you leave it blank, it searches all objects without a schema.