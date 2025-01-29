# Custom roles for giving read-only access to Atom Management

<head>
  <meta name="guidename" content="Platform"/>
  <meta name="context" content="GUID-5667f311-b9e0-4421-a80f-d4994287012c"/>
</head>

You can allow users to view but not modify the properties and settings of Atoms, Molecules, and Atom Clouds on the Atom Management page.

For example, your Support team needs to view the Scheduling settings for an Atom but does not need to change those settings.

The Atom Management Read Access privilege gives users read-only access to the Atom Management page. You can create a custom role that includes the Atom Management Read Access privilege and assign it to these users.

:::note

If you set up a custom role in a primary account, you can share that role with other accounts through account groups.

:::

| Privilege | Description |
| --- | --- |
| Atom Management Read Access | Read access to Atom configuration and administration. |

Users assigned a custom role with the Atom Management Read Access privilege turned on can notice the following:

- There are no Save buttons or other actions \(such as Delete or Restart\) displayed on the Atom Management panels.

- They can perform read-only actions such as searching, filtering, sorting, and viewing details about a setting or status.

:::note

If a user has the Atom Management privilege *and* the Atom Management Read Access privilege turned on, the Atom Management privilege adds the ability to modify properties and settings. Users with these privileges have full access to all actions on the Atom Management page.

:::
