import OperationEnd from './_operationEnd.md'

# Microsoft Azure SQL Database operation 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-5f4bdbb9-aaf6-4780-98a9-12841b56f284"/>
</head>


The Microsoft Azure SQL Database operation defines how to interact with the connection, including batching and commit options.

The database profile contains the SQL statement, which the operation references.

The Microsoft Azure SQL Database operation supports two types of actions:

-   **Get**: The action retrieves data from the Microsoft Azure SQL Server.

-   **Send**: The action sends data to the Microsoft Azure SQL Server.


## Options tab, Get action 

When you configure a Get action, the following fields appear on the **Options** tab:

**Profile**: Identifies the database profile the operation uses to get data.

**Link Element**: \(Optional\) Identifies the field; usually the primary key in the Microsoft Azure SQL Server, to split or group results into documents. For example, the Microsoft Azure SQL Database operation can split or group data to group rows containing the same value into the same document. Used in conjunction with Batch Count, you typically choose an ID or key field as the link element and specify a batch count of 1. The results are one document for each logical record, which you can use to track individual records through the process.

For the Link Element to function, properly order the incoming data queried from the Microsoft Azure SQL Database with an order by clause in the SQL statement.

**Batch Count**: \(Optional\) Sets the number of records to appear in each document. The default value of 0 does not batch. Instead, use Batch Count with a link element, which Boomi recommends, using Batch Count and Link Element when you are processing large result sets. This approach breaks up the data for more efficient processing through the process steps and maps. For example, for a query that returns 100,000 rows, specify a batch count of 5000 to read smaller groups.

**Max Rows**: \(Optional\) Sets the maximum number of rows to return from the Microsoft Azure SQL Database. The default value is 0 \(no maximum\).

:::note

You can use the Link Element and Batch Count fields in the same way as the Flat File Split.

:::

## Options tab, Send action

When you configure a Send action, the following fields appear on the **Options** tab:

**Profile**: Used to choose a database profile.

**Commit Option**: This option sets the commit behavior when the connector writes to the Microsoft Azure SQL Database:

-   Commit by Number of Rows commits after a specified number of records, designated by the Batch Count, have run. A final commit is also done at the end of each document to commit outstanding rows. Final commits do not span documents.
-   Commit by Profile does a single commit after all statements in the profile have run. This option avoids orphaned rows when the database profile contains multiple statements, for example tables that have a primary-secondary relationship.


**Batch Count**: Sets the number of rows to commit. When blank and you set the Commit Option to Number of Rows, there is no limit. It processes all rows in the document at the end as a single commit.

<OperationEnd />