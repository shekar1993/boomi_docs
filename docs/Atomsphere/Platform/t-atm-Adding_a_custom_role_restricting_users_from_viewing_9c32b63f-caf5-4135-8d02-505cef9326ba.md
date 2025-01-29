# Adding a custom role restricting users from viewing data

<head>
  <meta name="guidename" content="Platform"/>
  <meta name="context" content="GUID-9c32b63f-caf5-4135-8d02-505cef9326ba"/>
</head>

Add custom roles with restricted view in **Settings** \> **Account Information and Setup** \> **User Management** \> **Custom Roles**.

## Procedure

1. Select **Settings** \> **Account Information and Setup** and click the **User Management** tab.

2. On the Custom Roles tab click the **Add** icon.

    The Add/Edit Role dialog opens.

3. Enter the role name, for example, Cannot View Data.

4. (Optional) Enter a description.

5. In the **Inherits Role** list box, make sure that **Does not inherit a role** is selected.

6. (Optional) If you want the user to be able to execute or retry processes, select **Execute - Execute or retry available Processes**.

7. Select **View Results - View and monitor Process execution activity and logs**.

8. Make sure that **View Data - View data in Process reporting** is cleared.

9. (Optional) If you want users to have other privileges, select additional privileges to apply to the custom role. Do not assign to them another role that includes the View Data privilege.

10. Click **OK**.

11. Assign this custom role to the users.

## Related information

- [Custom roles for restricting access to data and documents](c-atm-Custom_roles_for_restricting_access_to_data_f9bdc759-30d6-4fea-94f2-2db90f6a7d97.md)
