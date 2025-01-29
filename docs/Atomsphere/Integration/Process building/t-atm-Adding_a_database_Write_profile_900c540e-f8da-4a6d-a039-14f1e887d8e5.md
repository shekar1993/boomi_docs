# Adding a database (legacy) Write profile

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-900c540e-f8da-4a6d-a039-14f1e887d8e5"/>
</head>

:::note

The Database (Legacy) Profile and Database (Legacy) connector are no longer actively maintained. We encourage you to migrate to the updated [Database V2 connector](../Connectors/int-Database_V2_connector_7b04dbdd-ef36-4a2f-b6ff-b038b3f60ff2.mdx).

:::

For Write profiles, the Data Elements tab is where you define the SQL statement\(s\) to insert, update, or delete records. Use the Data Elements tab to select the data for the database Write for mapping data. Select input fields based on requirements. Database Write profiles use input fields as the destination profile in a map.

## Procedure

1. Create a database (legacy) profile.

2. On the Options tab, set the Execution Type field to **Write**.

3. On the Data Elements tab click the **Statement** node.

4. Do one of the following:

   - Set the Type field to **Standard Insert/Update/Date** and enter or cut and paste your SQL statement in the **SQL Script** field or the code editor. To open the code editor, click **Edit**.

   - Set the Type field to **Stored Procedure Write** and in the **Stored Procedure** field, enter the stored procedure's name.

   - Set the Type field to **Dynamic Insert**, **Dynamic Update** or **Dynamic Delete** and enter a table name.

5. If you set the Type field to one of the Dynamic options, you can click **Import** to launch the Import Wizard to automatically generate the statement and input fields.

6. On the Data Elements tab, add fields as needed.

   Only Dynamic Delete profiles do not contain fields.

   1. Click the drop-down arrow ![icon](../Images/main-ic-arrow-blue-down-16=GUID-CA79043B-869E-4C8B-A46E-5D4D4FA1DBEE=1=en-us=Low_ee257e3c-4362-486e-b1f1-4d613b679c4c.jpg) next to Fields and choose **Add Field**.

   2. Select the field in the left pane and in the right pane, change the field’s name.

   3. Turn on the **Mandatory** and/or the **Enforce Unique** check boxes, as needed.

   4. Expand the Data Format Options section and select a data type.

   5. Repeat these steps as needed to add more fields.

      :::note

      Each question mark defined in the SQL statement serves as a placeholder and must bind positionally to the field listed in the profile.

      :::

7. Dynamic Update and Dynamic Delete profiles can contain conditions. Add conditions as needed.

   1. Click the drop-down arrow ![icon](../Images/main-ic-arrow-blue-down-16=GUID-CA79043B-869E-4C8B-A46E-5D4D4FA1DBEE=1=en-us=Low_ee257e3c-4362-486e-b1f1-4d613b679c4c.jpg) next to Conditions and choose **Add Condition**.

   2. Select the condition in the left pane and in the right pane, change the condition’s name.

   3. Select an operator.

   4. Expand the Data Format Options section and select a data type.

   5. Repeat these steps as needed to add more conditions.

8. Click **Save**.
