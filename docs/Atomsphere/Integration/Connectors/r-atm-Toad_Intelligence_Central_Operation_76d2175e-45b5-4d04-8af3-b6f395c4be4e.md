import OperationEnd from './_operationEnd.md'
import TrackingDirection from './_TrackingDirection.md'

# Toad Intelligence Central operation

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-76d2175e-45b5-4d04-8af3-b6f395c4be4e"/>
</head>


The Toad Intelligence Central operation defines how to interact with your Toad Intelligence Central data repository, and supports the outbound Execute action to create or update a Toad Intelligence Central data set.

To complete creating a new Toad Intelligence Central operation, click **Import Operation** to initialize the profiles.

## Options tab 

**Connector Action** - 
 Execute is the only available action in this operation.

**Object** - 
 The Toad Intelligence Central object with which to integrate is selected by default.



**Return Application Error Responses** - 
 When an error prevents an operation from completing, this setting does the following:

-   If cleared, aborts the process and reports the error on the Process Reporting page.

 -   If selected, continues processing and passes the error response to the next component to be processed as the connection output.

<TrackingDirection />


**Atom** - 
  Used to select the Atom. If your Atom does not appear in the list, see the [Atom Management](../Integration%20management/c-atm-Atom_Cloud_management_dc01f897-a4c8-462f-b6ac-ffb5cbcddb81.md) topic for more information.
    
**Connection** - 
 Used to browse for and select the Toad Intelligence Central connection, edit the connection settings, or add a new Toad Intelligence Central connection.

**Table** - 
 The name of the Toad Intelligence Central data set to create to store data.

**Columns** - 
 Used to create the columns of the data set. Enter the column or field name, space, and column or field type. The supported column types are: varchar, bigint \(20\), datetime, and double. Separate multiple entries with commas. For example:

 ```
 first_name varchar,last_name varchar(100),id bigint,created_on datetime,salary double
```

 Size specification for double column types is not supported.

**Primary Keys** - 
  \(Optional\) A comma-separated list of column names that is combined into a primary key for the data set.


<OperationEnd />