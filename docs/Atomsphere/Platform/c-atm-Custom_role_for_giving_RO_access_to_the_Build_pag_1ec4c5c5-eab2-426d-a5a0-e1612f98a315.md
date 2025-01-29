# Custom roles for giving read-only access to the Build page

<head>
  <meta name="guidename" content="Platform"/>
  <meta name="context" content="GUID-1ec4c5c5-eab2-426d-a5a0-e1612f98a315"/>
</head>

You can allow users to view components but not create, edit, copy, delete, or save components.

For example, your Support group needs to view components to assist users with troubleshooting. However, you cannot allow Support to create or change any components. Another example is a partner who wants to give your customers Build Read Access privilege to your account so that they can copy components but not change them.

The Build Read Access privilege gives users read-only access to the Build page. You can create a custom role that includes the Build Read Access privilege and assign it to these users.

:::note

If you set up a custom role in a primary account, you can share the role with other accounts through account groups.

:::

| Privilege | Description |
| --- | --- |
| Build Read Access | Read access to processes and components. |

Users assigned to a custom role with the Build Read Access privilege turned on **cannot**:

- Create any type of component from the **Create New** button or the Component Explorer.
- Create folders in the Component Explorer
- Edit components
- Edit process extensions
- Use the Import button to import things like profiles, certificates, and so on.
- Rename folders in the Component Explorer
- Copy components or folders into an account to which they do not have the Build Read and Write Access privilege
- Delete components
- Delete folders from the Component Explorer
- Save components
- Run a process in test mode
- Generate certificates
- Install an Atom or Molecule unless they have the Atom Management privilege.

Users assigned to a custom role with the Build Read Access privilege turned on can see the following:

- When they open a process or component it is in read-only mode. A banner across the top containing a warning that they are in read-only mode.

- If they change a component, by typing in a field for example, their changes are not saved. There are no Save or Save and Close buttons on components.

:::note

If a user has the Build Read and Write Access privilege AND the Build Read Access privilege turned on, the Build Read and Write Access privilege adds the ability to create, edit, copy delete, and save components. In other words, the user has full access to all actions on the Build page.

:::

When you replace a user's Build Read and Write Access privilege with the Build Read Access privilege, the privileges change immediately. If the user is signed into the Boomi Enterprise Platform when you make this change and if the user tries to change a component, users cannot save it even though the **Save** buttons appear. Instead, the user receives an error message. The user must sign out and sign in again to see the changes in the user interface.

## Related information

- [Custom roles](c-atm-Custom_roles_4dc17d08-b488-4ac9-8705-cc4460fe5ab9.md)
- [Adding a custom role giving read-only access to the Build page](t-atm-Adding_a_custom_role_giving_RO_access_to_the_Buil_14351287-8c8d-4931-9ad5-27cf07ad4831.md)
- [Resources and account groups](c-atm-Resources_and_account_groups_03b949ad-d9b6-4cde-ac51-aa43d47adecc.md)