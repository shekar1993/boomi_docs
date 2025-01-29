# SAP HANA Database changelog

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-4f6815b8-a776-4c0b-b4b4-523c55d547b1"/>
</head>


## Changelog

**2024-08 (Version 10, Current)**

- Upgraded the connector SDK to version 2.18.2.

- SAP HANA Database connector now supports `::` double colon while executing the stored procedure.
  - For example -

  ```
    Table Name (Stored procedure name) - STORED_PROCEDURE_NAME
    Package Name – PACKAGE_NAME
    Schema Name – SCHEMA_NAME 
    HANA full object name – “SCHEMA_NAME”.”PACKAGE_NAME::STORED_PROCEDURE_NAME”.
    ``` 

- A stored procedure with a SELECT COUNT() statement will return a valid value.

- The SAP HANA connector default document tracking has been changed from Input to output for **Query** operation, allowing users to view the output document in process reporting.

**2024-07 (Version 8)**

- Supports decimal data type for the following operations: Insert, Query, Update, Upsert, Delete, Bulk Load, and Bulk Unload.

- Supports decimal data type for Stored Procedure.

- Using the SAP HANA connector user can perform Query operation, accessing multiple tables that contain decimal data types.

- Upgraded to the latest driver version 2.19.16, to support SPS O6 Revision 67.

**2024-01 (Version 7)**

- Necessary runtime packages are now packaged with the connector.

**2023-09**

-   Dynamic insert of similar table names from different schemas is now successful and you can create a profile with the columns from the table specified in the URL without any duplicate column names.