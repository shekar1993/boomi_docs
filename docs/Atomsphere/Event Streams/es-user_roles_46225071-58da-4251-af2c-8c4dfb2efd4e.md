# User roles 

<head>
  <meta name="guidename" content="Event Streams"/>
  <meta name="context" content="GUID-46225071-58da-4251-af2c-8c4dfb2efd4e"/>
</head>


Event Streams uses role-based access to limit the operations available to users. You can assign roles to users through **Settings** \> **User Management**. For more information, see our [User Management settings](/docs/Atomsphere/Platform/r-atm-User_management_baf961e2-b480-4fca-a3f5-8262aed6c031.md) documentation.

A Boomi Enterprise Platform user corresponds to a unique email address that can be given direct access to one or more Boomi accounts. You can access the **User Management** page within **Account Settings & Management**.

-   A **role** is assigned to a user to enable a set of privileges.


-   A **privilege** is a right reserved to a role that allows a user to access or perform actions in a specific area of the Boomi Enterprise Platform. There are two predefined standard roles for Event Streams users: **Administrator** and **Access**.


**Event Streams - Administrator** - This role provides access to create, edit, and configure :

-   Create/delete a topic

-   Create a subscription


**Event Streams - Access** - This role provides read-only access to Event Streams . All Administrator-level operations are disabled.

:::note

The **Boomi Default Administrator** role supersedes the Event Streams roles when more than one role applies to the same user.

:::

| Privilege               | Event Streams Administrator | Event Streams Access |
|-------------------------|-----------------------------|----------------------|
| View Management UI      | ✅ Included                  | ✅ Included           |
| Create a topic          | ✅ Included                  | ✗ Excluded           |
| Delete a topic          | ✅ Included                  | ✗ Excluded           |
| Create a subscription   | ✅ Included                  | ✗ Excluded           |