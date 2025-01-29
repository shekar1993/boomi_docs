# Adding outputs to a database (legacy) Read profile

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-aadcb459-3fd5-45b4-b766-84eac0648741"/>
</head>

:::note

The Database (Legacy) Profile and Database (Legacy) connector are no longer actively maintained. We encourage you to migrate to the updated [Database V2 connector](../Connectors/int-Database_V2_connector_7b04dbdd-ef36-4a2f-b6ff-b038b3f60ff2.mdx).

:::

Outputs represent the individual columns or fields returned by the query or stored procedure. These are the elements in a data map from which you can map. If you used the Import Wizard, the fields are created automatically. However, if you entered a SQL statement manually or want to modify the automatically generated query, add fields manually.

## About this task

In stored procedure Read profiles, you can specify multiple result sets \(called “Fields”\). You drag and drop fields \(results sets\) within a statement to reorder them. Place the fields above the statement’s parameters. Each can be linked to an output or return parameter.

## Procedure

1.  Create or open a database Read profile.

    By default, each statement contains one result set.

2.  To add another result set to a stored procedure Read profile, click the drop-down arrow ![icon](../Images/main-ic-arrow-blue-down-16=GUID-CA79043B-869E-4C8B-A46E-5D4D4FA1DBEE=1=en-us=Low_ee257e3c-4362-486e-b1f1-4d613b679c4c.jpg) next to **Statement** and choose **Add Fields**.

3.  To link a result set in a stored procedure Read statement to an output or return parameter, click the result set. On the right side, select a parameter from the **Linked Parameter** list.

4.  To add a field to a result set, click the drop-down arrow ![icon](../Images/main-ic-arrow-blue-down-16=GUID-CA79043B-869E-4C8B-A46E-5D4D4FA1DBEE=1=en-us=Low_ee257e3c-4362-486e-b1f1-4d613b679c4c.jpg) next to **Fields** and choose **Add Field**.

    If a result set is associated with a parameter whose type is “Value” \(simple\), then only a single field can be added to the result set. The field’s data type is inherited from the output parameter.

    If a result set is associated with a parameter whose type is “Cursor” \(complex\), then multiple fields can be added to the result set. You can set different data types for these fields.

5.  Click the newly created field to edit its properties to the right. After you have added a field you can do the following:

    1.  Change the field’s name.

    2.  Select **Mandatory**.

    3.  Change its **Data Type**.

        If this field is in a result set associated with a parameter whose type is “Value” \(simple\), then the field’s data type is inherited from the output parameter and cannot be changed.

6.  Repeat the previous step for each field returned by the query.

7.  The columns returned are matched to the output fields by position, not by name. You can change the order of the outputs by dragging and dropping one field onto another.

8.  To remove a field, click the drop-down arrow and choose **Delete Field**.

    Be aware that the number of outputs defined must match the number of columns returned. If not, the process fails during execution. The order of the outputs must match the columns returned.

9.  Click **Save**.