# Using the Microsoft SQL Server BCP Import Wizard 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-428cf604-beb6-4c34-86be-4ffe9f8feeea"/>
</head>


By using the Microsoft SQL Server BCP Import Wizard, you define the web service object you are integrating based on the action you specified.

## Procedure

1.  Create or open a Microsoft SQL Server BCP Operation component.

2.  In the **Connector Action** field select either **Create** or **Query**.

3.  Click the **Import** button.

    The Microsoft SQL Server BCP Import Wizard opens.

4.  In the **Browse In** field, select **Cloud** or **Atom**.

    You can run this connector on an Atom. You cannot run this connector in a Atom Cloud. You also can run it in your private cloud if high security is off or if you added additional permissions to it.

5. **Optional:**  If you selected Atom, select an Atom from the list.

6.  Select a Microsoft SQL Server BCP Connection component and click **Next**.

7.  Enter a table pattern.

8.  Select **Include Tables** and/or **Include Views**.

    No data is returned if neither check box is checked.

9.  Click **Next**.

10. Select an object type.

    The list of available objects depends entirely on the SQL Server database target.

11. Click **Next**.

12. Review the results and click **Finish**.