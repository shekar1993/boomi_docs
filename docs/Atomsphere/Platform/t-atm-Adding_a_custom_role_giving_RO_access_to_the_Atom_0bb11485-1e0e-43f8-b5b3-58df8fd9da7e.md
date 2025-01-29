# Adding a custom role giving read-only access to Atom Management

<head>
  <meta name="guidename" content="Platform"/>
  <meta name="context" content="GUID-0bb11485-1e0e-43f8-b5b3-58df8fd9da7e"/>
</head>

Add custom roles in the **Settings** \> **Account Information and Setup** \> **User Management** \> **Custom Roles** tab.

## Procedure

1. Select **Settings** \> **Account Information and Setup** and click the **User Management** tab.

2. On the Custom Roles tab click the **Add** icon.

    The Add/Edit Role dialog opens.

3. Enter the role name, for example, Read Only Atom Management.

4. **Optional:** Enter a description.

5. In the **Inherits Role** list, do one of the following:

    - Select **Does not inherit a role**.

    - Select **Support**, which does not include the Atom Management privilege.

:::note

The Production Support and Support roles are part of Advanced User Security, which is available in the Enterprise and Enterprise Plus Editions, and as an add-on to the Professional and Professional Plus Editions. To have this functionality enabled, contact your Boomi sales representative.

:::

6. Select the **Atom Management Read Access - Read access to Atom configuration and administration** check box.

7. (Optional) If you want users to have other privileges, select additional privileges to apply to the custom role.

    Do *not* assign to them the Atom Management privilege because it will allow them to modify Atom, Molecule, and Atom Cloud properties and settings.

8. Click **OK**.

9. Assign this custom role to the users.
