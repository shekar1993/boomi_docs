
import OperationEnd from './_operationEnd.md'

# Database (Legacy) operation 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-a66d6242-d23f-461e-af4a-883efabc08d4"/>
</head>


The Database (Legacy) operation defines how to interact with the database selected in the connection, including batching and commit options. The SQL statement is contained in a database profile, which is referenced in the operation.

The operation supports two types of actions:

-   Get — retrieve data from the database.

-   Send — send data to the database.


#### Operation permissions

To ensure that the connection and actions are successful, verify that the user name and password that is configured on the database has sufficient permissions to access the objects required by your integration scenarios. For more information, see your database documentation.

## Timestamp format 

The Database connector's default timestamp format is the platform's internal date/time format: `yyyyMMdd HHmmss.SSS`. When you need to insert timestamps or date-time attributes into a database, keep in mind the connector converts the input string into a Java object. Once the Java representation is inserted into the target database, it will honor the target's formatting instead of the connector's.

## Dynamic document property values 

Configuring a connector's parameters affects how dynamic document property \(DDP\) values are handled during process execution. When you configure the connector step, keep in mind the following:

-   If parameters are configured in the connector step, the query is executed per document. As a result, the dynamic document property values are retained per document and do not merge.

-   If parameters are not configured in the connector step, the dynamic document property values are merged. The first instance of a DDP takes precedence and determines the value\(s\) retained on the return documents.

    For example:

    -   Document 1 has DDP1 and DDP2
    -   Document 2 has DDP1, DDP2, and DDP3
    If that is true, then the output document\(s\) contain the following values:

    -   DDP1 and DDP2 from Document 1
    -   DDP3 from Document 2

**Note:** Parameters are set in the **Parameters tab** and are based on the configured operation's profile.

For more information on dynamic document properties, see the [Dynamic document properties](../Process%20building/c-atm-Dynamic_Document_Properties_89d2f7a0-a490-4f35-a8b1-96af364f0211.md) topic.

## Options tab 
The following fields are available for Get or Send actions on the Options tab:



**Profile** - 
\(Get, Send\) Identifies the database profile for the operation.

**Commit Option** - 
\(Send\) Sets the commit behavior when the connector writes to the database.

-   **Commit by Profile** — performs a single commit after all statements in the profile have executed. This option avoids orphaned rows when the database profile contains multiple statements, for example tables that have a parent-child relationship.
-   **Commit by Number of Rows** — commits after a specified number of records, designated by the Batch Count, have executed. A final commit is also performed at the end of each document to commit outstanding rows. Final commits do not span documents.

**Enable JDBC Batching** - 
\(Send\) Sets the behavior for whether batches of SQL statements are executed at the JDBC operation level.

-   Select this check box if you execute SQL statements that *do not return* a Result Set. SQL statements are executed in batch, including the following:

    -   Standard INSERTS, UPDATES, and DELETES
    -   Dynamic INSERTS, UPDATES, and DELETES
    -   Stored Procedure Writes
    
:::note

If you select this check box and your database driver does not support batching, the selected check box value is ignored and the process continues without using batches. If you notice any issues when executing batched statements, clear this check box.

:::

-   Clear this check box if you execute SQL statements or triggers that *return* a Result Set. SQL statements are executed individually and not in batch. Any errors are sent to the process log.

**Link Element\(Optional\)** - 
\(Get\) Identifies the field \(usually the primary key in the database\) to split or group results into documents. The Database operation can split or group data so that rows containing the same value are grouped together into the same document. **Link Element** is used in conjunction with **Batch Count**. For example, choose an ID or key field and set **Batch Count** to 1. This results in one document for each logical record, which you can use to track individual records through the process.


:::note

For **Link Element** to function, properly order the incoming data queried from the database with an ORDER BY clause in the SQL statement.

:::

**Batch Count\(Optional\)** - 
\(Get\) Sets the number of records to appear in each document. The default value of 0 does no batching. recommends using **Batch Count** and **Link Element** when you are processing large result sets. For example, you have a query that returns 100,000 rows, so you specify a batch count of 5000 to read smaller groups. This approach breaks up the data for more efficient processing through the process steps and maps.

**Max Rows\(Optional\)** - 
\(Get\) Sets the maximum number of rows to be returned from the database. The default value is 0 \(no maximum\).

**Batch Count\(Optional\)** - 
\(Send\) Sets the number of rows to commit when you set the **Commit Option** to **Commit by Number of Rows**. The default value is 0. If this field is not set \(blank\), then it returns to the default value even when you save and reopen the component.

If you set **Commit Option** to **Commit by Number of Rows** and set this field to 0 or 1, rows are committed one at a time until completion. Batching is off.


:::note

When you set **Commit Option** to **Commit by Profile** there is no limit and **Batch Count** is ignored. All rows in the document are processed at the end as a single commit.

:::

<OperationEnd />