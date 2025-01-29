# Adding a custom role giving read-only access to the Build page

<head>
  <meta name="guidename" content="Platform"/>
  <meta name="context" content="GUID-14351287-8c8d-4931-9ad5-27cf07ad4831"/>
</head>

Add custom roles in the **Settings** \> **Account Information and Setup** \> **User Management** \> **Custom Roles** tab.

## Procedure

1. Select **Settings** \> **Account Information and Setup** and click the **User Management** tab.

2. On the Custom Roles tab click the **Add** icon.

    The Add/Edit Role dialog opens.

3. Enter the role name. For example, Read Only Access to Build Page.

4. (Optional) Enter a description.

5. In the **Inherits Role** list, do one of the following:

    - Select **Does not inherit a role**.

    - Select either **Production Support** or **Support**, which do not include the Build Read and Write Access privilege.

   :::note
   
   The Production Support and Support roles are part of Advanced User Security, which is available in the Enterprise and Enterprise Plus Editions, and as an add-on to the Professional and Professional Plus Editions. To have this functionality enabled, contact your Boomi sales representative.

   :::

6. Select the **Build Read Access - Read access to processes and components** check box.

7. (Optional) To grant users other privileges, select additional privileges to apply to the custom role. Do NOT assign to them the Build Read and Write Access privilege because it allows users to create, edit, copy delete, and save components.

8. Click **OK**.

9. Assign this custom role to the users.
