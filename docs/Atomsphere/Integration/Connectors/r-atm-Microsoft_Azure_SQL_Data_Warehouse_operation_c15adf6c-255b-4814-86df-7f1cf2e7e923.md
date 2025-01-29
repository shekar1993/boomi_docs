# Microsoft Azure SQL Data Warehouse operation 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-c15adf6c-255b-4814-86df-7f1cf2e7e923"/>
</head>


The Microsoft Azure SQL Data Warehouse operation defines how to interact with the connection, including batching and commit options.

The Microsoft Azure SQL Data Warehouse profile contains the SQL statement, which is referenced in the operation.

The Microsoft Azure SQL Data Warehouse operation supports two types of actions:

-   Get — Used to retrieve data from the Azure SQL Data Warehouse.

-   Send — Used to send data to the Azure SQL Data Warehouse.


## **Options** tab, Get action 

When you configure a Get action, the following fields appear on the **Options** tab:


  

**Profile** - 
  Identifies the Azure SQL Data Warehouse profile the operation uses to get data.

**Link Element** - 
  \(Optional\) Identifies the field, usually the primary key in the Azure SQL Data Warehouse, to split or group results into documents. The Microsoft Azure SQL Data Warehouse operation can split or group data so that it groups together rows containing the same value into the same document. Used in conjunction with Batch Count, you typically choose an ID or key field as the link element and specify a batch count of 1. The results are one document for each logical record, which you can use to track individual records through the process.

For Link Element to function, properly order the incoming data queried from the Azure SQL Data Warehouse with an order by clause in the SQL statement.

**Batch Count**   
  \(Optional\) Sets the number of records to appear in each document. The default value of 0 does not batch. Use Batch Count with a link element, which recommends, using Batch Count and Link Element when you are processing large result sets. The approach breaks up the data for more efficient processing through the process steps and maps. For example, for a query that returns 100,000 rows, specify a batch count of 5000 to read smaller groups.

**Max Rows** - 
  \(Optional\) Sets the maximum number of rows to return from the Azure SQL Data Warehouse. The default value is 0 \(no maximum\).

:::note

You can use the Link Element and Batch Count fields in the same way as the Flat File Split.

:::

## Options tab, Send action 



**Profile**   
 Used to choose an Azure SQL Data Warehouse profile.

**Commit Option** - 
 This option sets the commit behavior when the connector writes to the Azure SQL Data Warehouse:
-   Commit by Number of Rows commits after a specified number of records, designated by the Batch Count, have run. Also, it does a final commit at the end of each document for outstanding rows. Final commits do not span documents.
  -   Commit by Profile does a single commit after all statements in the profile run. The option avoids orphaned rows when the Azure SQL Data Warehouse profile contains multiple statements, for example tables that have a primary-secondary relationship.


**Batch Count** - 
 Sets the number of rows to commit. When blank \(and you set the Commit Option to Number of Rows\), there is no limit. It processes all rows in the document at the end as a single commit.