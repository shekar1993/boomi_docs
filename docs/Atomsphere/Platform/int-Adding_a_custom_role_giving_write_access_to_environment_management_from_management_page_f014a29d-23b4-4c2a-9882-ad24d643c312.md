# Adding a custom role giving write access to Environment Management from the Environment Management page

<head>
  <meta name="guidename" content="Platform"/>
  <meta name="context" content="GUID-f014a29d-23b4-4c2a-9882-ad24d643c312"/>
</head>

Create and assign a new custom role in the **Manage** \> **Atom Management** \> **Environment Management** tab which grants environment write access to users for a specific environment.

## Procedure

1. Go to **Manage** \> **Atom Management**.

2. Select an environment to open and view its details.

3. On the Environments page, click **Add a role** next to the Roles with Access field.

    The Add/Edit Role dialog opens.

4. Enter a name for the role. For example, "Write Access Environment Management."

5. Enter a description.

6. In the Inherits Role list, do one of the following:

   - Select **Does not inherit a role**.
   - Select **Support**, which does not include the Environment Management privilege.

   :::note

   Do not select the **Environment Management** privilege as an inherent role, otherwise users will be allowed to modify the properties and settings of all environments.

   :::

   The Production Support and Support roles are part of Advanced User Security, which is available in the Enterprise and Enterprise Plus Editions, and as an add-on to the Professional and Professional Plus Editions. To have this functionality enabled, contact your Boomi sales representative.

7. Select **Environment Management - Write access to Environment configuration and administration** from the Additional Available Privileges list.

8. Select additional privileges to apply to the environment as necessary.

   Do not assign to users the **Environment Management** privilege because it will allow them to modify the properties and settings of all environments.

9. Click **OK**.

10. In the account menu, select **Setup** and click the **User Management** tab.

11. In the **Users** tab on the User Management page, select a user that you want to give environment write access to.

12. Click the **Edit** icon, and

   The Add/Maintain User Roles dialog opens.

13. Turn on the check box next to the new write access custom role that you created in steps 3-9.

14. Click **OK**.

## Results

The custom role for giving write access to an environment is now successfully created and assigned to users. When this write access role is applied to an environment, users that are also assigned the same role in User Management may view and edit the environment. To clarify, in order for restricted write access to work successfully on a per environment basis, custom roles must match exactly between what is assigned to the environment in Environment Management and what is assigned to the user in User Management.
