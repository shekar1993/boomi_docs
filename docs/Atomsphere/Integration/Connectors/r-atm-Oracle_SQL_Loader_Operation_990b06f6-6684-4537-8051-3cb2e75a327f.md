import OperationEnd from './_operationEnd.md'
import TrackingDir from './_TrackObject.md'
import ReturnErrRes from './_ReturnResponse.md'

# Oracle SQL\*Loader operation 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-990b06f6-6684-4537-8051-3cb2e75a327f"/>
</head>


The Oracle SQL\*Loader connector supports only the Create action.

## Create 

Create is an outbound action that translates data from an XML profile to the SQL data type to insert data in a new record into the target Oracle table.

Boomi Integration handles standard Oracle data types, such as dates and times, numbers, and characters. Because the Oracle SQL\*Loader connector expects input data to be in XML format, you might need to map the input data to XML before sending it to the connector.

The Oracle SQL\*Loader supports advanced data types, including:

-   BLOB — The Oracle SQL\*Loader connector can handle BLOB data only if it is the last column in the input data and the database table. For more information, see [http://www.orafaq.com/wiki/BLOB](http://www.orafaq.com/wiki/BLOB).

-   CLOB — For more information, see [http://www.orafaq.com/wiki/CLOB](http://www.orafaq.com/wiki/CLOB).

-   NCLOB — For more information, see [http://www.orafaq.com/wiki/NCLOB](http://www.orafaq.com/wiki/NCLOB).


## Options tab 

Click **Import Operation**, then use the Import wizard to select the object with which you want to integrate. The following fields appear on the **Options** tab:

<TrackingDir />

**Response Profile** - 
Select or add an XML profile component that represents the structure received by the connector.

<ReturnErrRes />

**Table Pattern** - 
 \(Optional\) A string pattern to use when browsing to filter the number of tables in the results.

**ID Column Name** - 
  \(Optional\) Name of the column that stores the sequence value. It uses the default sequence to generate the value.

**Use Unicode Character Format** - 
 Select this option if the input data is in Unicode character format. If cleared, it does not interpret special characters correctly and the data can become corrupted. Input data is UTF-16 encoding format.

**Keep Null Values** - 
  If selected, it retains null values in the input data, rather than applying configured default values. Clearing the check box is the default.

**Maximum Number of Errors** - 
 The maximum number of errors allowed before the SQL\*Loader process ends. The default is 10.

**Check Constraint During Import** - 
  If selected, it checks the constraints on the target table or view when you import data.

 If cleared \(the default\), it locks the table and validates the input data against the constraints after importing all data. Clear this option to improve performance.

**Parallel Load** - 
 Select only if the process uses the **Flow Control** step when you select the **Parallel Processing** option prior to invoking this connector. When selected, it enables multiple bulk uploads to the same target table in parallel.

The default is clearing the check box. Usually, you do not need this option.

**Debug Mode** - 
 When selected, it does not delete temporary files after the process runs. If selected, the temporary files \(the Oracle SQL\*Loader control file, Oracle SQL\*Loader log file and Oracle SQL\*Loader errors file\) are in the system \\temp directory on the server on which you install the Atom. The file names all start with `blk_`. The default is clearing the check box.

<OperationEnd />