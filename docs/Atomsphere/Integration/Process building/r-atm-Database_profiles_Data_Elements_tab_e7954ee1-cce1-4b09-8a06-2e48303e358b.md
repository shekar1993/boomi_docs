# Database (Legacy) profile's Data Elements tab

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-e7954ee1-cce1-4b09-8a06-2e48303e358b"/>
</head>

:::note

The Database (Legacy) Profile and Database (Legacy) connector are no longer actively maintained. We encourage you to migrate to the updated [Database V2 connector](../Connectors/int-Database_V2_connector_7b04dbdd-ef36-4a2f-b6ff-b038b3f60ff2.mdx).

:::

On the database profile's Data Elements tab you define statements, results sets, fields, parameters and/or conditions used in the profile.

When you select an item in the tree on the left, its configuration settings appear on the right. For some profile types you can use the Import Wizard, which automatically configures these settings by inspecting the database column metadata. In all cases you can view or edit the settings manually.

## Statements

The statement’s available settings vary based on whether the Execution Type \(on the **Options** tab\) is set to Read or Write.

- **Display Name** - User-defined name for the statement. The default is “Statement”.

- **Type \(Read profiles only\)** - Statement type: Select or Stored Procedure Read.

- **Type \(Write profiles only\)** - Statement type: Standard Insert/Update/Delete, Dynamic Insert, Stored Procedure Write, Dynamic Update or Dynamic Delete.

- **Position** - Number that indicates the statement's location in relation to its parent.

- **SQL Script** - \(Available for a Read profile’s SELECT statements and a Write profile’s Standard Insert/Update/Delete statements.\) Used to enter any valid SQL statement.

- **Stored Procedure** - \(Available for Read and Write profiles' stored procedures.\) Used to enter the name of the stored procedure.

- **Table Name** \(Write profiles only\) - \(Available for Dynamic Inserts, Updates or Deletes.\) Used to enter the table name.

- **Edit** - \(Available for a Read profile’s SELECT statements and a Write profile’s Standard Insert/Update/Delete statements.\) Opens the code editor, which can be used, as an alternative to the **SQL Script** field, to enter any valid SQL statement.

## Conditions

Conditions are the WHERE clause parameters you set to make the update or deletion unique. Conditions are available only when the Execution Type \(on the Options tab\) is set to Write and the statement type is Dynamic Delete or Dynamic Update. After you add a condition, the following configuration options are available:

- **Field Name** - User-defined name for the condition.

- **Position** - Number that indicates the condition's location in relation to its parent.

- **Operator** - Select the operator from these choices:

  - Equal To
  - Not Equal To
  - Greater Than
  - Greater Than or Equal To
  - Less Than
  - Less Than or Equal To

- **Data Type** - Choose the element data type. Note that number and date formats are not explicitly configured because they are handled automatically by the associated Database Connection component and corresponding database driver.

  - Character — Default type for character-based values. All values are surrounded with single quotes in the SQL statement.
  - Number — Type for numeric values. Choose this type instead of character if it is a database field-level requirement.
  - Date/Time — Type for date/time values. Choose this type instead of character if it is a database field-level requirement.

For more information about formatting Number and Date elements, see [Number data type](r-atm-Number_data_type_25bd3c61-4613-42cb-9282-b16756fa47fa.md) and [Date/Time data type](r-atm-DateTime_data_type_05826c0b-8b49-4d8f-94a5-9ce7c15d64d0.md) topics.

## Fields

Each set of fields is a result set or output parameter. Only stored procedure Read profiles can have multiple result sets.

Fields are not available when the Execution Type \(on the Options tab\) is set to Write and the statement type is Dynamic Delete.

Fields can be reordered within a statement by dragging and dropping them but they are automatically placed above the statement’s conditions.

- **Linked Parameter** - For stored procedure Read profiles only. Used to associate the result set with an output parameter.

## Field

If you are using a stored procedure Read profile and a result set \(Fields\) is linked to a parameter whose Value Type field is set to Value, you can add only one field to the result set.

After you add a field to a result set, the following configuration options are available:

- **Field Name** - User-defined name. Specific name of a WHERE condition field in a database table. It is a best practice to have Field Name match the database column name or alias, although it is not a requirement.

- **Position** - Number that indicates the field's location in relation to its parent.

- **Mandatory** - Turn on this check box if the given field should contain a value. This is for use with the Cleanse step; leave it off otherwise. Note that this is not related to the database table schema definition.

- **Enforce Unique** \(Write profiles only\) - This setting affects a specific field mapping behavior when this profile is referenced as the destination profile in a map. \(It has no effect when referenced as the source profile.\) If the check box is selected, the map produces only a single row for each unique value mapped to this field.

- **Data Type** - Choose the element data type. Note that number and date formats are not explicitly configured because they are handled automatically by the associated Database Connection component and corresponding database driver.

  - Character — Default type for character-based values. All values are surrounded with single quotes in the SQL statement.
  - Number — Type for numeric values. You should choose this type over character if it is a database field-level requirement.
  - Date/Time — Type for date/time values. You should choose this type over character if it is a database field-level requirement.
  - Blob — Type for binary large object fields.
  - Clob — Type for character large object fields.

For more information about formatting Number and Date elements, see [Number data type](r-atm-Number_data_type_25bd3c61-4613-42cb-9282-b16756fa47fa.md) and [Date/Time data type](r-atm-DateTime_data_type_05826c0b-8b49-4d8f-94a5-9ce7c15d64d0.md) topics.

## Parameters

Parameters are available only when the Execution Type \(on the Options tab\) is set to Read. After you add a field, the following configuration options are available:

- **Parameter Name** - User-defined name.

  When a parameter is added, \[IN\] is appended to its name to indicate that it is an input parameter. Select statements are always input parameters so \[IN\] always appears. If you change a stored procedure’s parameter’s Direction field to something other than “in”, the word in square brackets changes to reflect that change.

- **Position** - Number that indicates the parameter's location in relation to its parent.

- **Direction** - Indicates the parameter type. Valid values are:

  - in — input parameter \[IN\]
  - out — output parameter \[OUT\]
  - in\_out — input/output parameter \[IN\_OUT\]
  - return — procedure return value \[RETURN\]. Only one Return parameter can be defined per statement. The Return parameter should be first in the list.

- **Value Type**

  - Value — Used for simple parameters. Allows a single field to be specified for the parameter in the profile.
  - Cursor — Used for complex parameters. Available only if the Direction field is set to “out” or “return”. Allows multiple fields to be specified for the parameter in the profile.

  You cannot change the Value Type field from Cursor to Value if more than one output field is defined in the result set.

- **Data Type** - Choose the element data type. Note that number and date formats are not explicitly configured because they are handled automatically by the associated Database Connection component and corresponding database driver.

  - Character — Default type for character-based values. All values are surrounded with single quotes in the SQL statement.
  - Number — Type for numeric values. Choose this type instead of character if it is a database field-level requirement.
  - Date/Time — Type for date/time values. Choose this type instead of character if it is a database field-level requirement.

If you are using a stored procedure Read profile and a result set \(Fields\) is linked to a parameter whose Value Type field is set to Value, then the Data Type field is disabled. The Data Type field displays the data type for the associated parameter.

For more information about formatting Number and Date elements, see [Number data type](r-atm-Number_data_type_25bd3c61-4613-42cb-9282-b16756fa47fa.md) and [Date/Time data type](r-atm-DateTime_data_type_05826c0b-8b49-4d8f-94a5-9ce7c15d64d0.md) topics.
