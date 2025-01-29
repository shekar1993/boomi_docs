# Database V2 connector transaction processing 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="3ba305b7-c476-4ee9-a55e-6d0ad2bc8f78"/>
</head>

## Feature Overview

Transaction Processing enables integration users to create transactions using basic SQL knowledge, supporting a low-code, no-code solution. 
The Database v2 connector allows integration developers to execute data modification statements (Insert, Update, Delete, Upsert, Storedprocedure) as a single cohesive unit of work, ensuring that all operations within the transaction are either fully committed or entirely rolled back together, thereby maintaining data integrity and consistency.

:::note

Get action is not supported in a transaction.

:::

This feature currently supports one active transaction per connection in a process, i.e all Database v2 steps within that transaction must connect to the same database endpoint. See the community article [Getting Started with Transaction Processing in the Database v2 Connector](https://community.boomi.com/s/article/Getting-Started-with-Transaction-Processing-in-the-Database-v2) to learn more.

As long as there is an active transaction, the commit transaction and rollback transaction operations of the Database v2 connector step are only applicable to those Database v2 operations that join that active transaction.

You are able to start another transaction with the same connection component only after the previous transaction using that connection component has been committed or rolled back.

## Designing a Transaction

When designing transactions, it is important to follow a structured approach for reliability and consistency.

:::info Warning

This advanced feature requires careful handling of transactions. Improper use can lead to unintended results. Please follow best practices to maintain the integrity and reliability of your data.

:::

- Initiate the transaction with a Database v2 step using the **START TRANSACTION** action.
- Within the transaction, add Database v2 steps to **INSERT**, **UPDATE**, **DELETE**, **UPSERT** or **STOREDPROCEDURE** operations, ensuring that the Join Transaction property is selected in each operation.
- Finalize the transaction by adding a Database v2 step with the **COMMIT TRANSACTION** action to apply changes permanently. You may want to incorporate a Database v2 step with the **ROLLBACK TRANSACTION** action to undo any modifications and maintain data integrity, in case of errors or failures during the transaction.
- Integrate these transaction-related actions into control structures such as conditional statements or loops to effectively manage the flow of transactions within your system.

  Use logic control structures such as:

  - Branch
  - Business Rules
  - Decision
  - Flow Control 
    - Batch Options as **Run each document individually** or **Run as batches of x documents**.
    - MultiThreading and Process is not supported
  - Route
  - Try-Catch

## Known Limitations

As long as a transaction is running on a single JVM, commit and rollback can be executed. However if the process executes on multiple JVMs then the transaction context cannot be maintained.

This can happen when the following steps are used in a process with transactions enabled:
- Process call with Forked Execution enabled
- Process route with Forked Execution enabled
- Flow control with Parallel Processing Type as Processes

## Error Codes

In a Database v2 step that is part of a transaction context, selecting **Return Application Error Responses** displays the error code and error message in the document metadata.

|**Error Code**|**Error Message**|
|--------------|-----------------|
|ERR_ONGOING_TRAN|There is already an ongoing transaction for *transactionKey*|
|ERR_NO_EXISTING_TRAN|There is no existing transaction for *transactionKey*|
|ERR_CACHE_KEY_NOT_FOUND|Transaction *transactionKey* could not be found|

Where *transactionKey* is the unique transaction id

## Transaction with Concurrent Data Access Issues

- The Commit and Rollback feature allows integrators to manage transactions manually and uses default transaction isolation levels. If not properly configured, perhaps due to applied isolation levels and lock modes, there can be deadlocks or increased processing time when users access data concurrently.

- Databases have specific lock modes, such as table-level, row-level, shared, and exclusive locks. The application of these locks depends on the database configuration and isolation levels. Below are examples that can lead to deadlock situations:

  **Example 1: Wait Lock When Reading**

    1. An ongoing Database Transaction performs an INSERT, UPDATE, UPSERT, DELETE, and/or STOREDPROCEDURE operation, then the SQL Server engine applies an exclusive lock on the table during these modifications.

    2. Next, Database GET operation is performed on the same data while the ongoing transaction is still in progress, this results in a deadlock.

  **Example 2: Wait Lock When Inserting, Updating, or Deleting**

    1. A process is executed that starts a transaction which includes an INSERT, UPDATE, UPSERT, DELETE, and/or STOREDPROCEDURE operation, but does not commit or rollback the transaction.

    2. Next, another process is executed that attempts to modify the data, it will keep waiting for the first transaction to complete, potentially leading to a deadlock.

  To resolve concurrent data access issues, work with your Database Administrator.
