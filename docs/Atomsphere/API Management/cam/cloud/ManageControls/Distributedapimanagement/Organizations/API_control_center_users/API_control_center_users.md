---
sidebar_position: 1
---

# API Control Center Users

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-2c3a8fe7-9cc1-47d2-b375-237308fabe6b"/>
</head>

The **Organization Control Center Users** page displays a list of API Control Center Users. The API Control Center Users have role-based access to the resources such as API Definitions, Portal Access Groups, Packages, and Interactive Documentation in a specific Organization. Based on the roles, the users can view and modify the API Control Center resources on the Dashboard. 

When an Organization is created, the following four user roles are created: 

- Administrator 

- API Manager 

- Community Manager 

- Reports User 

:::note

When the Organization or a Sub-Organization is created, only the above four roles are available to assign to the users. But after assigning the roles to the users, one could be an Administrator of a parent Organization or a Sub-Organization; or, an API Manager of a parent Organization or a Sub-Organization. Area Administrator is not assigned through the Control Center Users. However, the following table describes the functionality of the Area Administrator. 

:::

The following table describes the functionality of the users after the role is assigned. 

|**Role** |**Description** |
| ------- | ------------- |
|Area Administrator|<p>On the Dashboard, can view and modify all the resources on the Dashboard within the Area, Organizations, and Sub-Organizations and can create Organizations; Sub-Organizations; and Portal Access Groups for Organizations and Sub-Organizations. </p><p>This permission level is required to import an API definition from a Swagger file. </p>|
|Organization Administrator|On the Dashboard, can view and modify all the resources on the Dashboard within the Organizations and Sub-Organizations and can create Sub-Organizations and Portal Access Groups for the Organizations and Sub-Organizations. |
|Sub-Organization Administrator|On the Dashboard, can view and modify all the resources on the Dashboard within the Sub-Organization and can create Portal Access Groups for Sub-Organizations. |
|Organization API Manager|On the Dashboard, can view and modify API Definitions, Packages, Domains, Notification Templates, Response Filters, and Scheduled Maintenance for the Organization and its Sub-Organizations. |
|Sub-Organization API Manager|On the Dashboard, can view and modify API Definitions, Packages, Domains, Notification Templates, Response Filters, and Scheduled Maintenance for a Sub-Organization. |
|Organization Community Manager|On the Dashboard, can view and modify Reports for APIs and Packages, Community, Users with keys and/or roles, Applications, Package Keys, and add users to Portal Access Groups in an Organization and its Sub-Organizations. |
|Sub-Organization Community Manager|On the Dashboard, can view and modify Reports for APIs and Packages, Community, Users with keys and/or roles, Applications, Package Keys, and add users to Portal Access Groups in a Sub-Organization. |
|Area Reports User|On the Dashboard, can view Reports of Services and Packages that are owned by an Area, all the Organizations, and Sub-Organizations. |
|Organization Reports User|On the Dashboard, can view only those Reports of Services and Packages that are owned by the Organization to which the Reports User belongs to and can also view the Reports of Services and Packages that are owned by its Sub-Organizations. |
|Sub- Organization Reports User|On the Dashboard, can view only those Reports of Services and Packages that are owned by the Sub-Organization to which the Report User belongs. |

The Area Administrator and Organization Administrator assigns the Organization users to one or multiple roles. For example, a user can be assigned to the Administrator and the API Manager roles. Based on the roles, the users can view their Organization's API Control Center resources on the Dashboard. 

## To view the API Control Center User page

1. Click **Manage > Organizations**. 

   The **Organizations** page displays a list of Organizations. 

2. Select an Organization in the Organization list. 

   The **Organization Overview** page is displayed. 

3. On the left pane, click **Control Center Users**. 

   The Organization **Control Center Users** page is displayed.

The following table describes the fields on the **Control Center Users** page. 

|**Field** |**Description** |
| -------- | --------- |
|Control Center Username|Names of the users who belong to the Organization. |
|Control Center roles|<p>Roles assigned to the users of the Organization. Currently, the users can be assigned to the following four roles: </p><p>- Administrator </p><p>- API Manager </p><p>- Community Manager </p><p>- Reports User </p><p>Click the **Control Center roles** drop-down list for the respective user to add the Organization roles. To know more about this, see [Adding Control Center roles](Adding_api_control_center_roles.md). </p>|
|Actions|Click > to navigate to the [Access Settings](../../../Users/AddingandRemovingRolesviaAccessSettings/Adding_and_removing_roles_via_access_settings.md) page where you can assign roles to the users. |

