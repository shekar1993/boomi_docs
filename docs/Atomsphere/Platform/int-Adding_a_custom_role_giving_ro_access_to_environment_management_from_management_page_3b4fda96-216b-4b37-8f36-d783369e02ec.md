# Adding a custom role giving read-only access to Environment Management from the Environment Management page

<head>
  <meta name="guidename" content="Platform"/>
  <meta name="context" content="GUID-3b4fda96-216b-4b37-8f36-d783369e02ec"/>
</head>

Create and assign a new custom role in the **Manage** \> **Atom Management** \> **Environment Management** tab which restricts select users to read-only access for a specific environment.

1. Go to **Manage** \> **Atom Management**.

2. Select an environment to open and view its details.

3. On the Environments page, click **Add a role** next to the Roles with Access field.

   The Add/Edit Role dialog opens.

4. Enter the role name, for example, Read Only Environment Management.

5. Enter a description.

6.  In the Inherits Role list, do one of the following:

   - Select **Does not inherit a role**.
   - Select **Support**, which does not include the Environment Management privilege.

      :::note 
        
      Do not select the **Environment Management** or **Environment Management - Write access to environment configuration and administration** privileges as inherent roles, otherwise the user will no longer be limited to read-only environment access.

      :::
        
      The Production Support and Support roles are part of Advanced User Security, which is available in the Enterprise and Enterprise Plus Editions, and as an add-on to the Professional and Professional Plus Editions. To have this functionality enabled, contact your sales representative.

7. Select **Environment Management - Read access to Environment configuration and administration** from the Additional Available Privileges list.

8. If you want users to have other privileges, select additional privileges to apply to the custom role.

    Do not assign to them the **Environment Management** and the **Environment Management - Write access to environment configuration and administration** privileges because it will allow them to modify environment properties and settings.

9. Click **OK**.

10. Assign this custom role to the users.
