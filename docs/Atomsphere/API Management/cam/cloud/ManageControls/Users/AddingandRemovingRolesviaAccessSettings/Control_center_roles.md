---
sidebar_position: 2
---

# Control Center Roles

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-dc8e20ca-3418-4947-b986-3c82fbdd3608"/>
</head>

Describes Control Center roles and their permissions. 

The following table describes the Boomi Cloud API Management Control Center roles and their permissions. 

|**Role** |**Permissions** |
| ------- | -------------- |
|Administrator|<p>Has access to all screens. </p><p>:::note</p><p>You must be an Area Level Administrator to import an API definition from a Swagger file. For more information, see [Importing API Definition Files](../../../DesignControls/APIdefinitions/Importing_api_definition_files.md).</p><p>::: </p>|
|API Manager|Has access to API settings (**Manage**: Domains, Scheduled Maintenance; **Design:** APIs, Packages, Notification Templates, Response Filters) |
|Call Inspector Administrator |<p>Has access to all capabilities in Call Inspector, including turning on call logging and viewing call logs (**Analyze:** Call Inspector) </p><p>:::note</p><p>Only available where Call Inspector is enabled.</p><p>::: </p>|
|Call Inspector User|<p>Has access to view call logs within Call Inspector (Analyze: Call Inspector) </p><p>:::note</p><p>Only available where Call Inspector is enabled.</p><p>::: </p>|
|Community Manager|Has access to Community, User Management, and Reports. Cannot assign administrative roles, but can create and assign custom roles. (**Analyze:** Executive Summary, Reports; **Manage:** Community, Users, Apps, Keys, Custom Roles ) |
|Content Manager|Has access to Content Management. (**Manage:** Content) |
|Organization User|Allows an Organization Administrator to assign a user to a given Organization. From there, additional permissions can be applied to the user. The Organization User role grants Organization Administrator rights, as described in the [Organizations](../../Distributedapimanagement/Organizations/Organizations.md) topic in the Distributed API Management section.|
|Portal Manager|Has access to Portal Settings and Content Management. (**Manage:** Content, Portal; **Design:** Interactive Documentation) |
|Program Manager|<p>Has access to Reports, Executive Summary, Content, Community, Users, Applications, Keys, and Portal Access Groups. </p><p>Can create and assign Portal Access Groups owned by this organization and can assign keys to plans owned by this organization. </p><p>Cannot assign administrative roles. </p><p>(**Analyze:** Executive Summary, Reports; **Manage:** Content, Community, Users, Applications, Keys, Custom Roles) </p>|
|Service User|<p>Allows only service-level access to Boomi Cloud API Management PAPI. </p><p>For more information, see [Adding Service Users](../Adding_service_users.md). </p><p>:::note</p><p> Adding a Service User role to a user's account removes all other administrative roles once the setting is saved.</p><p>::: </p>|
|Support User|<p>Has read-only access to all pages in the API Control Center dashboard. Buttons (such as Save, Create, Edit and Delete) and various fields (such as checkboxes and text boxes) are disabled for support users. </p><p>:::note</p><p>Legacy pages are not shown to support users. For more information, see [Adding Support Users](../Adding_support_users.md).</p><p>::: </p>|
|Reports User|Has access to Reports. (**Analyze: **Executive Summary, Reports) |

