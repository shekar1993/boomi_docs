---
sidebar_position: 1
---

# Managing Configuration Data

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-586bc9a5-05f1-4604-9c62-0ae7afeb1e15"/>
</head>

You can manage the following configuration data: 

- [API Definitions](./Configure_API_defs_and_endpoints/Configuring_api_definitions_and_endpoints.md): An API definition is a set of configurable properties that specify the function of an API within the Traffic Manager. After creating API definitions, you can create endpoints and method definitions for the API. An endpoint is a mapped location of a public host name/request path and the origin host server/endpoint path. In other words, it can be both the URI that is accessed by developers and the URI used by the Traffic Manager to send API calls to. Each endpoint contains a unique combination of request and endpoint paths, protocols, rules, accessible methods, and other settings that differentiate one endpoint from the other within an API.

- [Members](../Manage_configuration_data/Configuring_members.md): A member is a way through which Local Edition stores contact information for the API key owners and allows Developer Portal access. You must register a user by following the Member Registration process. 

- [Content Management System](../Manage_configuration_data/Configure_the_CMS/Configuring_the_content_management_system.md): it comprises 2 parts: content authorization and publishing the content to the Developer Portal. The content management system allows you to author and organize documents such as pages and custom pages by using access control. Once published, the documents are available in the Developer Portal.

- [API Packages](../Manage_configuration_data/Configuring_api_packages_and_plans.md): A package object stores data for limit-based notifications, for example, sending an email to a developer when they are near their quota usage, as well as an array of plans. Packages are a collection of plans, which in turn are a collection of services, endpoints, and methods that ultimately can be used by a developer. Create API access plans that can be tailored to groups of developers or partners, without any coding. Each API Plan constitutes a set of entitlement rules, limits, and filters that might be enforced when developers make calls to specific API methods or resources. An administrator can group related plans into a package, similar to how your cell phone or cable provider might bundle their services, thereby enabling easy management of Package Keys, including simple upgrading or downgrading of service. An API package is a fast, easy, and efficient mode of offering APIs as a product: bundling together multiple services, endpoints, and methods, as well as restricting access down to the individual call and data elements. 

- **Package Keys:** A package key object tracks access to a package and plan. The key represents a developer's access to the array of services, endpoints, and methods included in a plan as well as the limits associated with said access. By using configuration manager, you can view and search package keys. A plan associated with a package key can be replaced with another plan in the same package without changing the key string and without requiring a developer to change the application code. Configuration Manager also allows you to [Search Package Keys](../Manage_configuration_data/Configure_apps_and_package_keys/Searching_package_keys.md). 

- [Interactive Documentation](../Manage_configuration_data/Configuring_interactive_documentation.md): Interactive documentation for developer portal users. 

- [API HTTPS Client Profiles](../Manage_configuration_data/Configuring_api_https_client_profiles.md): With an HTTPS Client profile, you can configure one or more trusted CA certificates. These CA certificates are used for verifying backend customer server certificates.. 

- [Applications](../Manage_configuration_data/Configure_apps_and_package_keys/Configuring_apps_and_package_keys.md): An application is the name of the client system that a developer is building that consumes your API. For example, it might be the name of a mobile application, the name/URL of a website, or the name of an internal business system. The Applications page displays all the registered applications. A Package Key is given to a developer to access a set of services, endpoints, and methods as defined in the respective Package Plan. 

- [Portal Domains](../Manage_configuration_data/Configuring_portal_domains.md): Manage developer portal domains. 

- [API Domains](../Manage_configuration_data/Configuring_api_domains.md): Manage allowlisted domain names. 

- **Portal Access Groups:** The Portal Access Group is a group of Control Center resources (Plans and Interactive Documentation) and Portal users (developers). You can use Portal Access Groups to provide role-based user access to resources on your portal. The users in a specific Portal Access Group have access only to the resources in that Portal Access Group. The users can request Package Keys for API Package and Plans on the Developer Portal that are in the Portal Access Group.

- [Portal Configuration](../Manage_configuration_data/Manage_portal_settings/Managing_portal_settings.md): Manage portal settings. 

- [Scheduled Maintenance Events](../Manage_configuration_data/Managing_scheduled_maintenance_events.md): Plan and schedule maintenance events. After creating the event, you can select endpoints for maintenance. Any calls that are made to an API during the maintenance duration are not directed to the selected endpoints and API users get error messages with 503 Service Unavailable. The error message returned is customizable.

- [Organizations](../Manage_configuration_data/Managing_organizations.md): Organization signifies a larger business unit of a company. Organization is a container for assets, Portal Access Groups, roles, and Sub-Organizations. Sub- organization signifies departments in a business unit. You can build hierarchies to reflect your own organizational structure; assign portal content and API assets to cleanly separate responsibilities across teams. 

- [Cluster Settings](../Manage_configuration_data/Configure_cluster_settings/Configuring_cluster_settings.md): Includes administrator information, and provides master operational settings for the configuration, with fields and values that impact the entire area. 

- **Notification Templates**: Notification emails are sent to the developers when they register for a new key or when the API calls reach or cross a specific limit. Notification emails can also be sent to notify developers about their API usage. Notification email templates are associated with API Plans, thereby allowing you to provide custom notifications to different API Plan users.

- **Certificates:** Configure certificates.

- **Identities:** Configure identities.

- **Verbose Logging:** Configure verbose logs.
