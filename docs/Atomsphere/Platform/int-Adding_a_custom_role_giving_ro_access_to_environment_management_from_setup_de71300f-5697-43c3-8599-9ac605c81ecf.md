# Adding a custom role giving read-only access to Environment Management in Setup

<head>
  <meta name="guidename" content="Platform"/>
  <meta name="context" content="GUID-de71300f-5697-43c3-8599-9ac605c81ecf"/>
</head>

Create and assign a new custom role in the **Settings** \> **Account Information and Setup** \> **User Management** \> **Custom Roles** tab which restricts select users to read-only access for a specific environment.

## Before you begin

In order for environment access controls to take affect, the account administrator must turn on the Advanced Environment Access feature from the **Settings** \> **Account Information and Setup** \> **Features** page.

1. Select **Settings** \> **Account Information and Setup** and click the **User Management** tab.

    The User Management page opens.

2. On the Custom Roles tab, click the **Add** ![img-int-white_plus_sign_gray_circle](Images/main-ic-plus-sign-white-in-gray-circle-16_00e24f81-d327-49fe-9310-9f999a92cb52.jpg) icon.

    The Add/Edit Role dialog opens.

3. Enter the role name, for example, Read-Only Environment Management.

4. Enter a description.

5. In the Inherits Role list, do one of the following:

   - Select **Does not inherit a role**.
   - Select **Support**, which does not include the Environment Management privilege.

      :::info 
        
      Do not select the Environment Management or the Environment Management - Write access to environment configuration and administration privileges as inherent roles, otherwise the user will no longer be limited to read-only environment access.

      :::

   The Production Support and Support roles are part of Advanced User Security, which is available in the Enterprise and Enterprise Plus Editions, and as an add-on to the Professional and Professional Plus Editions. To have this functionality enabled, contact your sales representative.

6. Select **Environment Management - Read access to Environment configuration and administration** from the Additional Available Privileges list.

7. Select **Atom Management** from the Additional Available Privileges list.

   The Atom Management privilege is also required, otherwise the user cannot access the Atom Management page where environments are viewed and accessed.

8. If you want users to have other privileges, select additional privileges to apply to the custom role.

   :::info Important

   Do not assign the Environment Management or the Environment Management - Write access to environment configuration and administration privileges because it will allow them to modify environment properties and settings.

   :::

9. Click **OK**.

10. Switch to the **Users** tab on the User Management page, select a user that you want to give read-only access to.

11. Click the **Edit** ![img-int-gray_edit_pencil](./Images/img-int-gray_edit_pencil_0121d5cf-a405-41ee-a9d4-e65141ca4191.jpg) icon, and turn on the check box next to the new read-only custom role in the Add/Maintain User Roles dialog.

12. Click **OK**.

    The new custom role is now applied to the user. Repeat steps 9-11 to assign the read-only environment access role to additional account users as needed.

13. Navigate to **Manage** \> **Atom Management**, and open an environment by selecting the environment from the list or by clicking on a tile with the environment's name.

14. In the **Roles with Access** field, turn on the check box for the new read-only custom role that you created in steps 2-9.

    The new **Environment Management - Read access to Environment configuration and administration** access role is applied to the environment. Repeat Steps 12-13 to assign the read-only access restriction to additional environments as necessary.

## Results

When this read-only access role is applied to an environment, users that are also assigned the same role in User Management may view \(but not edit\) the environment. To clarify, in order for restricted access to work successfully on a per environment basis, custom roles must match between what is assigned to the environment in the **Roles with Access** field on the Environment Management page, and what is assigned to the user in User Management.
