---
sidebar_position: 1
---

# User Management

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-c9c57f57-66cf-47ad-b565-1161e08499b5"/>
</head>

Depending on whether you are a Boomi Cloud API Management user or a Boomi Enterprise Platform user, you can perform various user management tasks from the **Manage>Users** page.

**Administrators can perform** the following management functions in the API Control Center for **Boomi Cloud API Management areas**:

- Can Enable or Disable Boomi Cloud API Management user.

- Can assign Service User role to Boomi Cloud API Management user.

- Can assign Control Center role to Boomi Cloud API Management user. 

- Can add Boomi Cloud API Management user to the Portal Access Group. 

- Can add API keys to new partner developer users. 

- Can assign new roles to your administrative personnel. 

- Can delete Boomi Cloud API Management user.


However, on the **Manage>Users** page, the **administrators have the following restrictions** in the API Control Center for **Boomi Enterprise Platform-enabled areas**:

- Cannot Enable or Disable the Platform user, but can enable or disable Boomi Cloud API Management users in the Platform-enabled area.

  :::info
  
  The Boomi Enterprise Platform maintains the status of Platform-enabled users. Therefore, administrators **cannot Enable** or **Disable** Boomi Enterprise Platform users. Hence, the Enable or Disable status is greyed out by default in the Manage your Users and User Access Settings page for Platform-enabled users in the API Control Center (To learn more, see the [Manage your Users](../../ManageControls/Users/Enabling_or_disabling_user_access.md#enabling-or-disabling-users-from-manage-your-users-page) page).

  :::

- Cannot delete Platform users, but can delete Boomi Cloud API Management or Developer Portal users in Platform-enabled areas.

- Cannot assign Service User role to Platform user, but can assign only Service User role with at least one additional area-level role to Boomi Cloud API Management or Developer Portal users.