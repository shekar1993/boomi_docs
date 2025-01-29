# Connector operations, filters, and parameter values

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-34d5ca37-6a21-43b6-a6f0-b2c165f7fd7f"/>
</head>

Operations for application connectors are typically configured with filters to limit the results returned. These filters are usually supplied with a value passed in from the process step that is calling the operation, including a connector step. Technology connectors like the Disk, FTP, SFTP, Mail, and HTTP Client/Server connectors also support parameters.

Message filters are defined statically. Most Send operations typically do not implement filters and therefore do not require parameters.

When configuring a filter in the operation, specify which field to filter by and the comparison operator. Do not specify the value to compare. For example, in the operation you may configure "Customer Name Equals \_\_\_\_\_". The value for that blank is provided when you use the operation in your process, either in a connector step or as a connector call look-up in various places. The value can be a static value, a value from the current document data, or a special value like the current date or the last run date of the process.

:::note

Refer to [Parameter Values](./c-atm-Parameter_Values_23a1eb13-d83b-423e-adf1-d78db4a1fbbd.md) for the full list of parameter value types. For examples of using filters, refer to [Adding a filter to an operation component](./t-atm-Adding_a_filter_to_an_operation_component_2adcb007-2973-4f0f-8762-06d4bb116f03.md) and [Adding filters to an operation and passing in parameters](./t-atm-Adding_filters_to_operation_and_passing_parameters_b194bd5e-9caf-47e5-bfd7-e2652fae5877.md).

:::

This design allows you to use the same operation component in various situations and does not tie you to a specific type of input value.

The Database connector is a little different from other application connectors. This connector’s filters are defined by the SQL statement defined in the database profile referenced in the operation instead of being defined within the operation itself. However, setting these parameter values is no different than it is for the other application connectors. The list of available inputs are the list of elements under the Parameters section of the Database profile.

## Filter operators

You can use the following operators when adding a filter to an operation:

:::note

Available filter operators depend on the operation. Not all operations support all filters.

:::

| Operator | Description |
| --- | --- |
| EQUALS | Resulting values are equal to the given value. |
| LIKE | Resulting values match a specified pattern. You can use wildcard characters to find a range of values. |
| NOT_EQUALS | Resulting values are not equal to the given value. |
| IS_NULL | Resulting values are null. |
| IS_NOT_NULL | Resulting values are not null. |
| STARTS_WITH | Resulting values start with a given character or set of characters. |
| BETWEEN | Resulting values fall between a specified range. |
| GREATER_THAN | Resulting values greater than the specified value. |
| GREATER_THAN_OR_EQUAL | Resulting values are equal to or greater than the specified value. |
| LESS_THAN | Resulting values are less than the specified value. |
| LESS_THAN_OR_EQUAL | Resulting values are equal to or less than the specified value. |

## Other ways of filtering

Some types of connector operations have actions with "implicitly" defined filters. You do not have to configure them; they appear in the list of operation inputs. For example, the NetSuite connector’s Get action allows you to query a single record with its internal ID. The operation automatically creates a filter called “internalID”.

Some types of application connector operations do not have the ability to create filters, however you can directly assign values for values elements in the request XML profile before the request is sent to the application. For example, in the QuickBooks connector you can set criteria fields directly, such as `FromModifiedDate` and `RefNumber`.

An operation represents a specific call to an application but also with specific settings including filters. This means you can have two separate "Query Customers" operations, one that filters by name and another that filters by external ID. Then, to look up a customer by name, use the Filter by Name operation. To look up a customer by external ID, use the Filter by External ID operation.