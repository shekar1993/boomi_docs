---
sidebar_position: 9
---

# API Definition Interactive Documentation Access Control

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-2e922d5a-dd6a-4322-91eb-6e3205a4db3f"/>
</head>

The **Interactive Documentation Access Control** setting (**Design > APIs**) for an API in the API Management Control Center allows you to specify a required Administrative Role or Portal Access Group required to see the Interactive Documentation items on the [Interactive Documentation](../Interactivedocumentation/Interactive_documentation.md) page. The **Interactive Documentation Docs** or **API Explorer** feature on the Developer Portal provides an interactive interface for your developers to learn how to use your API. Through Interactive Documentation, your developer will quickly be able to make API requests and see the live responses returned from your API.

For the selected Interactive Documentation item, use the **Access Control** menu to specify the roles that will have access to the API definition in the portal. Click a role from the **Unselected** list to give access; click a role from the **Current** list to remove access. The portal will display only those Interactive Documentation items that are appropriate for the user's given roles. 

## How to Restrict Access to the Interactive Documentation Page

The **Interactive Documentation** page can be accessed on any portal by clicking the **API Explorer** link or by entering `<domain_name>/interactive-documentation` in the address bar. On some portals, developers can access **Interactive Documentation** without logging on to the portal, whereas in other portals, developers are required to have an account created to access **Interactive Documentation**. 

By restricting API access to a specific group of users or developers, you can ensure that other users do not see the API. In general, when a developer/user has not been assigned any role, the access settings configured for the **Everyone** role are applied to the developer/user. 


**Draft comments:**

Title: How to Restrict API Access by Role 

Draft comments: This section will be removed. 

By default, every user can read and/or use certain APIs on the portal. If you want any particular user or user group restricted from using Interactive Documentation docs for a specific API, you can achieve it by configuring access on the **API Definition Access Control** page. 

The following are the steps to configure user access for a particular API. 

1. Select the desired API from the **Design > APIs** list of APIs.
 
2. Click on the **Access Control link** on the left.

3. To restrict user groups from accessing the API, remove the role from the C**urrent Roles** list by clicking the role. This moves the role to the **Unselected Roles** list. 

4. To enable access to the API for a particular role, select the role from the **Unselected Roles** list. This moves the role to the **Current Role**s list. Now, users assigned to this role can test the API by using **I/O Docs** on the portal. For more information about how to create a role in the Dashboard, see [Creating a Portal Access Group](../../ManageControls/Distributedapimanagement/Organizations/Portal_access_groups_introduction/Creating_a_portal_access_group.md)

5. Click **Save**. 

6. Assign this role to the desired developers from the Users list. Now, only the selected users or developers can access the API from the Portal. For more information about assigning a role, see [Adding Portal Access Group Users](../../ManageControls/Distributedapimanagement/Organizations/Portal_access_groups_introduction/Portal_access_group_users/Adding_portal_access_group_users.md)

7. To test access settings, log onto the Portal with credentials of one of the users selected in the previous step. 

8. On the Portal, click the **I/O Docs** or **API Explorer** link or enter `<domain_name>/io-docs` in the address bar. For example, developer.company-name.com/io-docs. On the **I/O Docs** page, you should be able to see that the API that was exposed to this user role is available in the drop-down. 

:::note

Along with this API, the user or developer may see other APIs that are available to everyone.

:::

