import OperationEnd from './_operationEnd.md'
import TrackingDir from './_TrackObject.md'
import ReturnErrRes from './_ReturnResponse.md'
import ReqRes from './_ReqRes.md'


# Microsoft SQL Server BCP operation 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-43f92229-a4bf-46cd-be64-776d4a4c3d29"/>
</head>


The Microsoft SQL Server BCP inbound and outbound actions import data into and export data from SQL Server.

## Query 

You can use the Microsoft SQL Server BCP operation's inbound Query action to export data from SQL Server. For example, you can export an entire database table or the results of a SQL query. The connector uses JDBC to browse for a list of schemas and tables within a particular database. does not support Query filtering or paging.

You can export a single table at a time. If you need data from multiple tables, create a view on the server and export data from the view.

When exporting, there is no limit to the number of records you can include in a document. The bcp utility saves all the documents to disk in a single file that the Microsoft SQL Server BCP connector reads then passes as documents in batches of the configured batch size, as determined by the Number of Records per Batch setting.

## Create 

You can use the Microsoft SQL Server BCP operation's outbound Create action to import data into SQL Server. A Create action imports data into a new record inserted into the target SQL Server table.

The Microsoft SQL Server BCP connector processes documents in batches of up to 5000 documents to ensure it does not exhaust critical system resources. Each batch corresponds to a single bcp utility run. The bcp utility run allows the commitment of records in batches. The number of records processed before a commit is configurable through the Number of Records Per Batch field. Each commit transaction serves as a checkpoint, declaring those records as successful if the process fails at a later time.

-   The connector processes documents in a batch of 5000 documents per bcp utility run.

-   By default, it imports all the records in a run as one batch.

-   For large process runs, you can set the number of records to process before committing the transaction in the Number of Records Per Batch field, so it does not need to repeat the entire process if an error occurs when inserting a record later in the process.

-   If the transaction for any batch fails, it reverses insertions from the current batch only. Batches already imported by committed transactions are unaffected by a later failure.

-   If an application error occurs, such as a primary key duplication, all subsequent records in the run fail. The process also stops any remaining records if it reaches the maximum number of allowed data errors for the run.

-   To get high levels of throughput, recommends that documents contain anywhere from 1000 to 5000 records, which results in the bcp utility processing from 5 to 25 million records per run.


With the Microsoft SQL Server BCP connector, you must set Create parameters in a Map step or read in from a disk or a Message step. If you configure parameters on the **Connector** step dialog's **Parameters** tab, it reads the first record of the document only.

The Microsoft SQL Server BCP connector reads data in XML format. Therefore, use an XML output profile to map input profiles. Alternatively, you can read XML data from a Message step.

## Data types 

When you import XML data, the Microsoft SQL Server BCP connector translates it to the string data type. The bcp utility translates string data to the appropriate SQL Server column type.

When you export, the bcp utility translates data to character format. The Microsoft SQL Server BCP connector then translates the data from delimited text to XML character data.

SQL Server supports these advanced data types:

-   varbinary\(max\)/image \(BLOBs\)

-   varchar\(max\)/text \(CLOBs\)

-   nvarchar\(max\)/ntext \(NCLOBs\)

-   XML


Microsoft SQL Server BCP connector translates advanced data types to character data during processing. Also, it processes BLOBs as Base64 character data that can escape and be nested into a single field in an XML document.

When used with and the Microsoft SQL Server BCP connector, the bcp utility offers these data formats:

-   It uses character formats with other applications and which convert data to character format on import or export.

-   Unicode support that enables using extended character sets. If your files include special characters or extended character sets, use Unicode to ensure correct translation.


## **Options** tab 

Click **Import Operation**, then use the Import wizard to select the object with which to integrate. The **Objects** and **Filters** tabs are visible but are not used by the Microsoft SQL Server BCP connector.

Configuring the Microsoft SQL Server BCP operation configures several bcp utility arguments.

The following fields appear on the **Options** tab:

 
  

<TrackingDir />
<ReqRes />
<ReturnErrRes />


**Table Pattern / Table Name Pattern** - 
 Defines the string pattern to use when browsing to filter the number of table results.

**Include Tables** - 
 If selected \(the default\), it includes tables in the browse results. If cleared, and if you also clear **Include Views**, it does not return data.

**Include Views** - 
 If selected, it includes views in the browse results. It can also import data only to non-partitioned views. If cleared \(the default\), and if you also clear **Include Tables**, it does not return data.

**Use Unicode Character Format** - 
  Sets the bcp utility's `-w` argument.

 -   If selected for export \(Query\) operations, it exports data in Unicode character format.

 -   If cleared for import \(Create\) operations, it does not interpret special characters correctly and can corrupt the data. Select if the input data is in Unicode character format.


**Field Delimiter** - 
 Specify a field delimiter to use when importing or exporting data. Use a hexadecimal value. The default value, 0x0009, is for a horizontal tab \("\\t"\). Some delimiters, such as & and %, are special DOS characters interpreted by the command line before the command runs. To use characters as delimiters, precede them with an escape character to set the bcp utility's `-t` argument.

**Record Delimiter** - 
 Specify a record delimiter to use when importing or exporting data. Use a hexadecimal value, such as the default value, 0x000D0x000A that calls for a line feed and a carriage return \("\\r\\n"\). It sets the bcp utility's `-r` argument.

**Keep Identity Values** \(Create only\)  
  If selected, it populates identity values in the input file in the destination table. It sets the bcp utility's `-E` argument.

**Quoted Identifiers** - 
 Used to set the bcp utility's `-q` argument. Select if a database, owner, table, or view name contains a space or a single quotation mark or if the object name is a keyword. If cleared, the operation is likely to stop with an error.

**Keep Null Values** \(Create only\)  
 Used to set the bcp utility's `-k` argument. If selected, it retains null values in the input data rather than applying configured default values.

**Number of Records Per Batch** - 
 Used to set the bcp utility's `-b batch_size` argument.

  -   In export \(Query\) operations, enter the number of records to include per document. The default is 1.

 -   In import \(Create\) operations, enter the number of records to process before committing the transaction. The default is 10.


**Maximum Number of Errors** \(Create only\)  
 Used to set the bcp utility's `-m max_errors` argument. Enter the maximum number of syntax and compilation errors allowed per batch before the process ends.

**Lock Table** \(Create only\)  
  Used to set the bcp utility's `-h "hintTABLOCK"` argument. If selected, it puts a table-level lock on the destination table during import, which can improve performance.

**Check Constraints** \(Createonly\)  
  Used to set the bcp utility's `-h "hintCHECK_CONSTRAINTS"` argument.

-   If selected, it checks the CHECK and FOREIGN KEY constraints on the target table or import view.

 -   If cleared, it ignores any CHECK and FOREIGN KEY constraints. After the operation, the constraint on the table is marked as not trusted.

 -   The Microsoft SQL Server BCP connector always checks the unique, primary key and not null constraints regardless of this setting. The Check Constraints setting refers to explicit constraint settings enabled for a specific table.


**Fire Triggers** \(Create only\)  
 If selected, it runs defined triggers during import and sets the bcp utility's `-h "hintFIRE_TRIGGERS"` argument.

**Debug Mode** - 
  If selected, it does not delete temporary files after running the process.

<OperationEnd />
