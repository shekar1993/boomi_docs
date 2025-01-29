# Database V2 changelog

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-afce5fa5-894b-4d7a-8211-6f0611059032"/>
</head>

## Changelog

**2025-01 (Version 30, Current)**

- The Database v2 connector has been updated to enhance the performance of the **INSERT** action across all four supported databases: Oracle, MySQL, PostgreSQL and MSSQL.

**2024-12 (Version 29)**

- The connector now supports **Transaction Processing** feature for **STOREDPROCEDURE** action.

**2024-11 (Version 25, Cancelled)**

- This version was cancelled during the Runtime release window and reverted back to version 24.

**2024-08 (Version 24)**

- The connector now supports Transaction Processing for INSERT, UPDATE, DELETE, and UPSERT actions.

:::warning

This advanced feature requires careful handling of transactions, as improper use can lead to unintended results. Please ensure that you follow best practices to maintain the integrity and reliability of your data.

:::

**2024-06 (Version 22)**

- Resolved an issue where the Filter field was not visible during import operations.

**2024-06 (Version 21)**

- When importing stored procedures in the Database V2 connector, the user can specify a string or wildcard to limit the number of stored procedures that are searched.

- The Database V2 connector resolves the `nvarchar` parameter successfully when it is used in the WHERE clause of a Standard Get action to a MSSQL database.

**2024-02 (Version 20)**

- Processes invoking a Oracle Database stored procedure that has default input parameters with multiple document scenarios execute without error.

**2024-01 (Version 18)**

- Users can pass all parameters except default and nullable procedure parameters, else the connector displays an exception message.
  - The Stored Procedure nullable is used when the parameter value is not provided.
- Users can set Null on the Nullable Stored Procedure parameters.
  - The Stored Procedure default is used when the parameter value is not provided.
- The connector successfully inserts all the records when Batch Count is entered.
- The connector successfully returns null value instead of incorrect values when data with null values are fetched from the database.
- The connector successfully retrieves large integer values (>2147483647) in NUMBER type columns for all Database v2 databases without any error.
- The connector supports Oracle data type ROWID and successfully imports profile objects from all the database rows including the ones having data type as ROWID without any exceptions.
- The connector successfully supports inserting/updating/selecting any range of decimal values supported by the Oracle database without any data truncation or loss.
- Database NULL value is getting inserted for Json datatype when trying to insert a null node while executing the STOREDPROCEDURE action in Database V2-PostgreSQL.
- Suitable error message is displayed for constraints instead of displaying `[400] Bad request` for Database V2 operations.
- The connector supports and stores database NULL, when incoming data of type NVARCHAR is NULL.
- Test connections successfully work with or without connection pooling enabled for DatabaseV2 connector with PostgreSQL database.

**2023-10**

- The update to this connector has been removed from the platform release. If you applied version 14 during the runtime release, be aware that you will be reverted back to version 13.

**2023-09 \(Version 13\)**

-   Users can insert null on the nullable parameters using standard insert for NVARCHAR items without getting any errors.

-   Users can update null on the nullable parameters for NVARCHAR items without getting any errors.

-   The connector sends JSON parameters, including double quotes, in the right format to the database.

-   A dynamic null value update is considered valid on all the nullable parameters.

-   You can set Null type on the nullable columns through standard insert.

    This fix is not backward compatible and we recommend the use of null type for all the existing and new nullable inputs.

-   You can set Null type on the nullable columns through upsert.

    This fix is not backward compatible and we recommend the use of null type for all the existing and new nullable inputs.

-   The connector correctly formats the JSON format input parameter for the StoredProcedure action and gives correct format data output to the database.

-   For the stored procedure called from Database V2, the JSON object is successfully formatted for CLOB/VARCHAR type input parameter.

-   The connector correctly handles special characters used in the values for the input parameter of a stored procedure and outputs the correct format data to the database.