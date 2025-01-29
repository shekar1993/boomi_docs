# Adding a filter to an operation component

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-2adcb007-2973-4f0f-8762-06d4bb116f03"/>
</head>

The operation component page's Query Definition tab may contain configuration options that allow you to add filters to limit the results of your query.

:::note

For a full list of available filter operators, refer to [Connector operations, filters, and parameter values](./c-atm-Connector_operations_filters_and_parameter_values_34d5ca37-6a21-43b6-a6f0-b2c165f7fd7f.md).

:::

1. Create an operation component.

2. Select a connector action and use the Import Wizard to select an object type.

3. After completing the Import Wizard, select the **object node** on the **Objects** tab in the lower left.

4. Click the **Filters** tab in the lower right.

5. Click the blue arrow to the left of **Filter** then select **Add Logical Sub-Group**.

6. Do one of the following:

   - Keep the **Logical - AND** node \(the default operator\).

   - Select **OR** from the Operator list. The node changes to **Logical - OR**.

7. Click the blue arrow to the left of the node and select **Add Expression**.

8. Select the **Expression** node to see the filter options.

9. For each filter, in the **Filter Name** field, add a reference name for the expression.

   A common practice is to define the selected field name and associated operator \(e.g., AccountName=, Type!=\).

10. To select a field, click **![icon](../Images/main-ic-magnifying-glass-16_cd0f3352-63b0-4d15-af6d-86e11b9d14eb.jpg)Browse** next to **Field**, choose a field, and then click **OK**.

11. Select an operator.

12. Select **Insert Expression** under the **Logical** node \(repeat steps 6-11\) to define more filters.

13. Save the operation component.
