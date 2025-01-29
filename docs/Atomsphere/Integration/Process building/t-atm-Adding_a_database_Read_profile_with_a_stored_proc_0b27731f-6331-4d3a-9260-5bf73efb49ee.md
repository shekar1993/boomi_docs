# Adding a database (legacy) Read profile with a stored procedure

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-0b27731f-6331-4d3a-9260-5bf73efb49ee"/>
</head>

:::note

The Database (Legacy) Profile and Database (Legacy) connector are no longer actively maintained. We encourage you to migrate to the updated [Database V2 connector](../Connectors/int-Database_V2_connector_7b04dbdd-ef36-4a2f-b6ff-b038b3f60ff2.mdx).

:::

You can call a stored procedure to extract data. The Database Profile Import Wizard automates many of the steps for creating profiles for Oracle, MySQL, and MSSQL stored procedures. To learn more about the wizard, see the linked topic about generating a database profile with the Import Wizard.

## Procedure

1.  Create a database profile.

2.  On the Options tab, set the Execution Type field to **Read**.

3.  On the Data Elements tab, select a **Statement** node.

4.  To call a stored procedure, choose **Stored Procedure Read** in the Type field.

5.  In the **Stored Procedure** field, enter the stored procedure's name.

    You can add input, output, input/output, and return parameters.

6.  To add a parameter, click the drop-down arrow ![icon](../Images/main-ic-arrow-blue-down-16=GUID-CA79043B-869E-4C8B-A46E-5D4D4FA1DBEE=1=en-us=Low_ee257e3c-4362-486e-b1f1-4d613b679c4c.jpg) next to **Parameters** and choose **Add Parameter**.

7.  Click the newly-created parameter to edit its properties. After adding a parameter, you can do the following:

    1.  Change the parameter’s name.

    2.  Select a direction: **in**, **out**, **in/out** or **return**.

        Change the position. The return parameter should be first in the list. If you do not remember to create the Return parameter first, you can drag it to the first position. One return parameter can be defined per statement.

    3.  Select a value type.

        Input and input/output parameters can be only simple \(supporting one value\). Output parameters can be simple \(supporting one value\) or complex \(supporting multiple values\). Parameter return values can be simple or complex.

    4.  Select a data type if the parameter’s value type is “Value.”

8.  Repeat the previous step to create additional parameters.

9.  To remove a parameter, click the drop-down arrow and choose **Delete Parameter**.

10. You must create the output fields manually to match the number of columns returned by the stored procedure.

11. Click **Save**.