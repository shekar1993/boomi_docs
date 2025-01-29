# Custom roles for giving write access to Environment Management

<head>
  <meta name="guidename" content="Platform"/>
  <meta name="context" content="GUID-a17ec303-c471-4c77-8f74-af147302b373"/>
</head>

You can allow users to modify the properties and settings of one or more environments on an account, but not necessarily all environments.

A custom role with the Environment Management Full Access privilege grants users write access on a per-environment basis. After creating this custom role and assigning it to a user, and then subsequently assigning the same role to a select environment \(or environments\), the user will have full access to only those environments with the matching role. This means that you could potentially use the custom role with the Environment Management Full Access privilege to grant a user write access to one environment in the account, but not to a second environment.

:::note

In order to create and assign the Environment Management role, the account administrator must first turn on the [Advanced Environment Access feature](int-Account_features_page_2f7d9196-e800-4f11-8cf9-9a2a3f06549c.md) in the**Settings** \> **Account Information and Setup** \> **Features** page of the Platform.

:::

Note that the **Environment Management Full Access** privilege differs from the **Environment Management** privilege. The Environment Management privilege automatically grants account users complete access to all environments created within the account, whereas account administrators can assign the custom role with Environment Management Full Access privilege to apply edit access to individual environments. It is highly recommended that administrators do not assign both Environment Management and the Full Access custom roles simultaneously to users; the Environment Management privilege overrides both Full Access and Read-Only privileges that may be applied.

With the Environment Management Full Access privilege, users can perform the following functions on the Atom Management screen:

- Edit any environments to which they have access
- Deploy processes to any environments in which they have access
- Schedule processes to run on the Atom, Molecule, or Atom Cloud attached to any environment in which they have access

   :::note

   The Environment Management Full Access privilege by itself does not allow users to create new environments on the account. Users must have both the Atom Management and Environment Management privileges to create environments on an account.

   :::
