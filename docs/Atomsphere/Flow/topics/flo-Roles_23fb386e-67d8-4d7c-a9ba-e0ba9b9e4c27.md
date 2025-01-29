# User roles

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-23fb386e-67d8-4d7c-a9ba-e0ba9b9e4c27"/>
</head>


User roles are assigned to tenant users to control and manage access to functionality within a tenant.

## Overview

There are two main user roles that can be assigned to a tenant user:

-   **Administrator**: Users assigned to this role can access all areas of functionality within a tenant.

-   **Standard user**: Users assigned to this role can access most areas of functionality within a tenant, but are denied access to certain areas such as tenant and Organization settings pages, functionality, and API endpoints.


## User role privileges

-   A tenant *user* corresponds to a unique email address that is given direct access to a tenant.

-   A *user role* is assigned to a tenant user to enable a particular set of privileges.

-   A *privilege* is a right reserved to a role that allows a user to access or perform actions in a specific area of a tenant.


As each user role is configured with a different set of access privileges, assigning the correct role to an individual user allows you to control what functionality a user can access within a tenant.

For example, if you require a user to be able to manage tenant and Organization settings, you would need to assign them to the Administrator role. However, if you do not want a user to be able to access or modify your tenant or Organization settings, you would assign them to the Standard user role.

-   See [User role privileges](flo-Roles_Privileges_ad679279-a8fd-4b6e-bccc-e99bbd2c3c05.md) for a detailed table of user role privileges.


## Managing user roles

Assign a role to a user by selecting the role from the **Role** field in the **Users** section of the **Tenant** page. See [Tenant page](c-flo-Tenant_Settings_Page_5cf56ab8-1bcc-48f1-b497-b80491a09a73.md).

-   When a completely new user account and tenant is created, the initial user is automatically assigned to the Administrator user role.

-   When a new user is created and added to an existing tenant, they are automatically assigned to the Standard user role. An Administrator can then upgrade their user role if required.

-   When a new SAML single sign-on user is created and added to an existing tenant, they are automatically assigned to the Standard user role. An Administrator can then upgrade their user role if required.

-   When a user role is changed, although access restrictions are immediately applied, user interface changes are only updated when the user next signs in to . For example, if a Standard user is changed to an Administrator, the **Settings** menu will only become visible once they have signed in again.

-   As well as being assigned to one of these user roles, a user can also be separately set up as an Organization Administrator. See [Organizations](flo-Organizations_bd4d88aa-6da0-471a-b0bb-4ac481804747.md).

-   User roles are assigned at a tenant level; this means that users can have different user roles assigned in different tenants if they belong to multiple tenants.

-   To prevent users accidentally locking themselves out of their tenant account, an Administrator user is unable to change their own user role to that of a Standard user.


:::note

User roles do not apply to the runtime users of your flows; they are only applied for user management within the build time application.

:::