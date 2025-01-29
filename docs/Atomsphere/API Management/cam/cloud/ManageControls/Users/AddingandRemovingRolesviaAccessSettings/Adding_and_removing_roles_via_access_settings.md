---
sidebar_position: 1
---

# Adding and Removing Roles via Access Settings

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-613e295c-eac1-4c98-8b77-d45208c6e6e8"/>
</head>

You can assign Control Center Roles to users in an Organization. Specific roles can be added to or removed from user accounts on the Users page. Users have role-based access to the Boomi Cloud API Management Control Center resources. You can also add users to the Portal Access Groups for a specific Organization. For more information about managing roles and what they can do in the Boomi Cloud API Management system. 

## To view the User Access Settings page

1. Click **Manage>Users**. The **Manage your Users page** is displayed. 

2. Click a **username**. The **User Access Settings** page is displayed.

The following table describes the fields on the **User Access Settings** page: 

|**Field** |**Description** |
| -------- | ------------ |
|Account Status|<p>- **Enabled:** When the status is enabled, the user can logon to the Boomi Cloud API Management Control Center and can view and modify the API Management Control Center resources. The user can also view the access the resources on the Boomi Cloud API Management Portal. </p><p>- **Disabled:** When the status is disabled, all the permissions for the user are revoked. The user cannot log in to the API Control Center via Boomi Enterprise Platform or Boomi Cloud API Management dashboard.</p><p>:::note</p><p>If you try to log in, the login attempt fails with the following error message: _We were unable to log you in at this time. This probably isn’t your fault. Your account may be disabled or a system error occurred._</p><p>:::</p>|
|Control Center Roles|<p>The Control Center Users have role-based access to the resources such as API Definitions, Portal Access Groups, Packages, and Interactive Documentation in a specific Organization. Based on the roles, the users can view and modify the Control Center resources on the Dashboard. A Control Center role in any organization provides the user the ability to sign into Control Center. For a full list of roles and their descriptions, see [Control Center Roles](Control_center_roles.md). </p><p>:::note</p><p>The user may have roles outside of your organizations that are not visible to you. The user roles that belong to Organizations other than your own Organization are not visible on this page.</p><p>::: </p><p>To add Control Center Roles for the User, see [Adding Control Center Users and Roles](../../Distributedapimanagement/Organizations/API_control_center_users/Adding_api_control_center_users_and_roles.md). </p>|
|Portal Access Groups|<p>The Portal Access Group is a group of Control Center resources (Plans and Interactive Documentation) and Portal Users (developers). You can use Portal Access Groups to provide role-based user access to resources on your Portal. The users in a specific Portal Access Group has access only to the resources in that Portal Access Group. </p><p>:::note</p><p>The Portal Access Groups that belong to this user may have memberships in other portal access groups that aren't shown here because they are outside of your organizations. The user may belong to Portal Access Group owned by other Organizations.</p><p>::: </p>|

## To add Control Center Roles

1. In the **Control Center Roles** section, type the Organization name in the **Organization** field. Alternatively, use the autocomplete feature to select an Organization name in the list. 

2. Select a role from the **Control Center Role** list.

3. Click ![](../../../Images/add.jpg). 

   The Control Center Roles for the specific Organization is added to the list. 

   :::note
   
   You can add multiple Control Center Roles. To add multiple users, follow step 1 to step 3. 

   :::

4. Click **Save**. 

   The Control Center Roles are added to a specific Organization for the user. 

## To delete Control Center Roles

1. In the **Control Center Roles** section, click ![](../../../Images/delete_2.jpg) for the Control Center Role you want to delete.

2. Click **Save**. 

   The Control Center Role for the user in a specific Organization is deleted. 

## To add Portal Access Groups

1. In the **Portal Access Groups** section, type an Organization name in the **Organization** field. Alternatively, use the autocomplete feature to select an Organization name in the list. 

2. Select a Portal Access Group from the **Select a Portal Access Group** list.

3. Click ![](../../../Images/add.jpg). 

   The Portal Access Group for specific Organization is added to the list. 

   :::note
   
   You can add multiple Portal Access Group. To add multiple users, follow step 1 to step 3. 

   :::

4. Click **Save**. 

   The Portal Access Group is added to a specific Organization for the user. 

## To delete Portal Access Groups

1. In the **Portal Access Groups** section, click ![](../../../Images/delete_role.jpg) for the Portal Access Group you want to delete.

2. Click **Save**. 

   The Portal Access Group for the user in a specific Organization is deleted. 


