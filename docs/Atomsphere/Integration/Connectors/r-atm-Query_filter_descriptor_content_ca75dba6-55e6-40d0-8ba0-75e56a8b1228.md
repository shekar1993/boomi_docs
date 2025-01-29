# Query filter descriptor content 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-ca75dba6-55e6-40d0-8ba0-75e56a8b1228"/>
</head>


Multiple QueryFilterConfig elements can be included in the connector descriptor. uses the first one that is defined on an OperationConfig, which includes the `QUERY` operation, and ignore any others.

Each bullet describes an XML element unless prefixed with an "@", in which case it is an attribute.

-   GenericConnectorDescriptor.operation.queryFilter \(QueryFilterConfig\) — Configuration which describes how users should be able to build query expressions for the connector's QUERY operation.

    -   @grouping \(enum\) — The type of grouping/nesting supported by the query operation using the logical operators `AND` and `OR`. Defaults to `"any"`.

        -   "none" — The QueryFilter supports no groupings \(only one expression allowed\).

            Example: `(foo lessThan 30)`

        -   "any" — The QueryFilter supports any arbitrary grouping and nesting of `AND`'s and `OR`'s.

            Example: `((foo lessThan 30) OR (baz lessThan 42) OR ((bar isNull) AND (bazz isNotNull))) AND (buzz greaterThan 55)`

        -   "noNestingImplicitOr" — The QueryFilter supports any number of non-nested expressions which will be `OR`'ed together.

            Example: `((foo lessThan 30) OR (baz lessThan 42))`

        -   "noNestingImplicitAnd" — The QueryFilter supports any number of non-nested expressions which will be `AND`'ed together.

            Example: `((foo lessThan 30) AND (baz lessThan 42))`

        -   "singleNestingImplicitOr" — The QueryFilter supports one level of nesting, where the top level groupings will be `OR`'ed together and the nested expression groups will be `AND`'ed together.

            Example: `((foo lessThan 30) AND (baz lessThan 42)) OR (buzz greaterThan 55)`

        -   "singleNestingImplicitAnd" — The QueryFilter supports one level of nesting, where the top level groupings will be `AND`'ed together and the nested expression groups will be `OR`'ed together.

            Example: `((foo lessThan 30) OR (baz lessThan 42)) AND (buzz greaterThan 55)`

    -   @sorting \(enum\) — The type of sorting supported by the query operation. Defaults to `"none"`

        -   "none" — The query operation does not support sorting
        -   "one" — The query operation supports one sorting statement

        -   "unbounded" — The query operation supports any number of sorting statements

    -   operator \(SimpleExpressionOperatorConfig\) — One or more operators supported by the query operation.

        -   @id \(string\) — The actual name of the operator which will be passed to the query operation.

        -   @label \(string\) — Optional text string which will be displayed in the GUI for the operator. If not defined, the id will be used.

        -   @numArguments \(integer\) — The number of arguments used by the operator \(besides the property name\). For example, a `(foo isNull)` expression would have 0 arguments, a `(foo lessThan value)` expression would have 1 argument, and a `(foo between low high)` expression would have 2 arguments \(where `"foo"` is the property name\). Defaults to 1.

        -   helpText \(string\) — Optional help text displayed for the operator in the GUI.

        -   supportedType \(OperatorConfigDataType\) — Optional data type\(s\) to limit the query filter operators available by field type

            -   type \(string\) — The data type of the fields that allow this operator \(required\)

            -   typeNamespace \(string\) - Optional namespace for ambiguous types

    -   sortOrder \(SimpleSortOrderConfig\) — Zero or more sort orders supported by the query operation

        -   supportedType \(OperatorConfigDataType\) — Optional data type\(s\) to limit the query sort operators available by field type

            -   type \(string\) — The data type of the fields that allow this operator \(required\)

            -   typeNamespace \(string\) — Optional namespace for ambiguous types