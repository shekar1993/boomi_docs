# Custom roles for giving read-only access to Environment Management

<head>
  <meta name="guidename" content="Platform"/>
  <meta name="context" content="GUID-f13f9092-7e7b-469e-a03f-1659134c4c3c"/>
</head>

Account administrators can use a custom role with the Environment Management Read-Only privilege to allow users to view but not modify the properties and settings of select environments on an account.

For example, your Support team needs to view the settings for an environment but does not need to change those settings.

A custom role with the Environment Management Read Access privilege gives users read-only access to specific environments on the Atom Management page. After the administrator creates this custom role and assigns it to a user, and then subsequently assigns the same role to a select environment \(or environments\), the user has read access to only those environments with the matching role. This means that you can potentially use the Read Access custom role to grant a user read access to one environment in the account, but not to a second environment.

:::note

In order to create and assign the Environment Management role, the account administrator must first turn on the [Advanced Environment Access feature](./int-Account_features_page_2f7d9196-e800-4f11-8cf9-9a2a3f06549c.md) in the**Settings** \> **Account Information and Setup** \> **Features** page of the Platform.

:::

Users assigned a custom role with the Environment Management Read-Only Access privilege can notice that there are no actionable items displayed on the Environment Management panel, such as the ability to add and subtract roles in the Roles with Access field, or to add and subtract Attachments. On the Atom Management screen, users with the Read-Only privilege also do not have the ability to schedule or deploy processes to any environments in which they do not have access.

:::note

For this feature to take affect, the user must be assigned both the Read-Only Access privilege role and the Atom Management privilege, but not the Environment Management privilege. The Atom Management privilege allows the user to see the full list of environments available on the account. However, if a user also has the Environment Management privilege turned on, it gives the user the ability to modify properties and settings, provides them full access to all actions on the Environment Management page, and ultimately overwrites read-only access.

Additionally, it is important to remember that a user's privileges must match between what is assigned the user on the User Management page and what is assigned to the environment on the Environment Management page, otherwise access does not work as intended. If a user's privileges does not match that of the environment, they do not see the environment listed on the Atom Management page.

:::
