# Oracle Database changelog

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-40b4de7f-43eb-4908-a66a-a45787706cf3"/>
</head>


## Changelog

**2024-01 \(Version 13, Current\)**

- Necessary runtime packages are now packaged with the connector.
- The connector correctly updates Database Null, when the input is provided as null for Nullable Field/Column and throws an error when input is null for Non Nullable Field/Column. (CONC-2667)
- The connector successfully retrieves values larger than or lesser than INTEGER limit (-2147483648 to 2147483647) in NUMBER type columns for Oracle database without any error. (CONC-1793)
- The connector handles numeric data bigger than “2147483647” as decimal value.
- Test connections successfully work with/without connection pooling enabled for Oracle Database step.
- Vulnerability issue of type Denial of Service was resolved to make the Connector more secure.