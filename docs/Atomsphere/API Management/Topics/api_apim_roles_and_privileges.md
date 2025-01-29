# API Management Roles and Privileges

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-ibb0a70f-eb42-42e2-9dd6-5c7ad946470c"/>
</head>

Administrators give a Boomi Enterprise Platform user access to one or more Boomi accounts using their unique email address. User management is performed in Integration. Administrators assign a role to a user to control their access to areas in API Management.

Administrators can control general account and user settings for all Boomi Enterprise Platform services by navigating to User Information > Account Information and Setup. Administrators can configure user access in User Information > Account Information and Setup > User Management. Read [User management settings](/docs/Atomsphere/Platform/r-atm-User_management_baf961e2-b480-4fca-a3f5-8262aed6c031.md) to learn more about general settings for the platform.

Administrators can assign a role to a user for a specific account. Roles contain a list of privileges. A privilege is an allowable action or access to a specific area of API Management.

The following API Management role is provided with a predefined list of privileges:

- API Manager - APIs and and Applications - Read and write access to APIs and Applications.

The table below shows the predefined standard roles for users, the privileges assigned to each role, and descriptions of the privileges.

|Privilege|Description| API Manager role|
|---|---|---|
|API Management - Access| Access to API Management. Gives access to all of API Management except the dashboard.  Additional privileges must be granted to access specific environments to modify deployments within the environment. For example, if a user does not have access to environment A, they can see deployments in environment A but cannot modify them (such as change the authentication or assign a plan). Users get access to the environment either by having a privilege that gives access to all environments, like Environment Management, or by having a role that grants access to a specific environment. See [Roles within an environment](../../Integration/Integration%20management/c-atm-Roles_within_an_environment_36c3859d-4895-44e2-b166-5ba2d911a53e.md).|Excluded|
|API Management - APIs|Read and write access to APIs.  This gives users write access to the areas in API Management where they can modify deployed APIs: Deployed APIs, API Lifecycle, and Manage APIs.|Included|
|API Management - Applications|Read and write access to API applications and subscriptions.|Included|
|API Management - Dashboard| Access to the API Management Dashboard.|Excluded|
|API Management - Gateway| Gateway configuration and administration.|Excluded|

:::note
`API Management - Roles` and `API Management - Testing` are deprecated privileges that should not be used.
:::

## Control Plane and Cloud API Management 

API Control Plane and Cloud API Management are accessible from the Boomi platform in API Management if you have the appropriate entitlements. The following roles and privileges have been added to allow for navigation between the applications.

  :::note
  You cannot use the following privileges in custom roles, and the following roles cannot be extended.
  :::

Roles:

  - API Control Plane Manager - This role has access to administrative functions in the API Control Plane. Includes the `API Control Plane User` and `User Management - Limited` privileges to create users and has limited management of users privileges.
  - Cloud API Management Administrator - This role has access to administrative functions in Cloud API Management. Includes the `Cloud API Management User` and `User Management - Limited` privileges to create users and has limited management of users privileges. This role is granted to Boomi Administrator users.

|Privilege|	Description|	API Control Plane Manager role|	Cloud API Management Administrator role|
|---|---|---|---|
| User Management - Limited|Can add users to the account on the Boomi platform and edit the roles on existing users.  Can only modify roles that are comprised of privileges already assigned to the authenticated user. | Included| Included|
|API Control Plane User | Access to the API Control Plane.| Included| Excluded|
|Cloud API Management User|Access to Cloud API Management. | Excluded|Included |

## Assigning a predefined role


1. In the Boomi Enterprise platform, navigate to Settings > Account Information and Setup > User Management.
2. Do one of the following:
    - For existing users:
        - Select the user and click the Edit icon.
        - Select the role or roles.
        - Click OK.
    - For new users:
        - Select the plus icon to create a new user.
        - Enter the new user’s email address and name.
        - Select the role or roles.
        - Click OK. The new user will receive a registration email.