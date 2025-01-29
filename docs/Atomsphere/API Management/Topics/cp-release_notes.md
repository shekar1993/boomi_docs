# API Control Plane Release Notes

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-15851887-387b-42e7-a0fc-61f9bc50d039"/>
</head>

## 2025.2

- You can now connect the Control Plane to Boomi Cloud API Management. Control Plane can discover API Definitions created in Cloud API Management, APIs can be productized within Control Plane, and you can deploy and subscribe to APIs. See [How to Connect to Boomi Cloud API Management](cp-how_to_connect_to_cloud_api_management.md). 


## 2025.1

- You can now create an API without providing a specification. Previously, you had to provide an Open API Specification or Open Proxy Specification. See [APIs](cp-APIs) for more information.


## 2024.5.2

**New Features and Changes**
- You can no longer delete the Default Developer Portal. 
- If you enter your password incorrectly too often, you will be locked and must be unlocked by another global admin.

:::note

If the only global admin is locked, contact Support.

:::

## 2024.5.1

**Fix**

- The selection box for organizations did not work correctly.

## 2024.5

**New Features and Changes**
- The Boomi API Management platform is now available.
- The selection menu was not precise enough when discovering. 

**Fixes**

- When canceling some wizards, for example when creating a ruleset, error messages were displayed that had no relevance.
- When an approval request was pending, some users were shown an incorrect message.
- The dialog to delete an application did not consistently work correctly.
- For platforms that do not natively support API products, it was not possible to regenerate the access permissions inside the subscription.

## 2024.4

**New Features and Changes**

- Version 1.1 of Open Proxy Specification now supports multiple, environment-specific configurations and variable substitution.
- APIs with Open Proxy Specification can now be deployed to a Layer 7 developer portal.
- Added the copy-to-clipboard button for a URL in API deployment tiles.
- Added password reset for users that have been invited but did not activate their accounts. This is helpful if an invitation email gets lost.
- Improved handling of large number of entities. For example, in the subscription dialog, API products are now loaded continuously as the user scrolls through the list, instead of loading all at once.
- Multi-stage dialogs now have a wizard-like flow, including the ability to navigate to previous steps.
- Added a more precise explanation of the cause when an API product cannot be subscribed.
- In the developer portal try-it-out view, disabled try-it-out feature and added an explanation message when no servers are available due to the API not being deployed in any production environments.
- For Layer 7 developer portal agent, disabled or deprecated APIs are now excluded from API discovery. Added new flags to agent configuration to include them again.
- Added links to 3rd-party library license lists in account settings.
- For on-premise deployments, added the option to change ports in frontend containers.

**Fixes**

- Added input validation for environment URL. This prevents issues where try-it-out view was missing servers, due to invalid environment URLs.
- Removed "Unknown error" message if API discovery takes a long time.
- Fixed an issue in agent for Layer 7 developer portal, where unexpected application status would cause errors.

## 2024.3

**New Features and Changes**

- Added organization hierarchies. Organizations can now have parent organizations. A parent organization has full access to any entity owned by any child organization. If access to an entity (such as an API) is granted explicitly to an organization, it is implicitly granted to all of its child organizations.
- Added the ability to edit Open Proxy Specification and OpenAPI documents in administration portal.
- Added syntax highlighting and a search bar to code views for Open Proxy Specification and OpenAPI documents in administration portal.
- Full text search in developer portal now also works for word prefixes, instead of only full words. For example, typing in ‘cus' will now find APIs that contain the string 'customer'.
- Improved subscription dialogs by adding the ability to go back to the previous step.
- Improved API Product deletion dialog by removing options when they don’t apply.
- Deleted APIs will now not be re-imported on API discovery, by default (similar to how it has already been the case with plans and applications). All buttons in administration portal that start an API discovery will now open a dialog, where the user can choose to re-import deleted APIs.
- Added read-only views to organization that contain the environments to which it has publish/subscribe access.
- Removed non-accessible environments from server list in try-it-out view in developer portal.
- Icons for developer portal menu items can now be selected with a comfortable icon picker, instead of having to enter their names.
- Admins that are not global admins can now see API deployments in an environment, but only for APIs owned by their organization.
- Added several changes to improve performance and robustness for large tenants (with thousands of entities).
- Agent container can now be configured to act as agent for multiple environments, by establishing independent backend connections for each one.
- Included license report files in all docker images. Frontend and backend license reports are also accessible at specific URLs.
- Updated OWASP rule set for API validation to version 2.0. 

:::note
 Rulenames have changed - if you have extended any OWASP rules in a custom rule set, you have to update their names.

 :::

 **Fixes**

- Fixed a bug where filtering API Products by tag would not return results beyond the first 10 products.
- Fixed a misleading warning message when deleting API products.
- Fixed an issue where an unnecessary horizontal scrollbar could show up in the menu.
- Fixed a bug where reloading the administration portal after adding a documentation page to an API would lead to errors when trying to add more pages.
- Fixed a bug where agent would receive and attempt to execute commands (API deployment) multiple times.
- Fixed a bug where setting plan limits to unlimited could actually set them to 0.
- Fixed a bug where filtering tables for certain special characters (such as `#`) would not work.
- Fixed a bug where the owner field in API Product settings view would not show the actual owner.
- Fixed a bug where the organization field in developer portal settings would be empty.
- Fixed a bug where deleted organizations might still show up when managing organizations with publish/subscribe access for an environment.
- Added maximum height and optional scrollbar to info text boxes. 
- Improved the way governance dashboard looks for small resolutions.
- Fixed several minor visual glitches.

## 2024.2.1

**Fix**

- Fixed an error relating to users within the Administration and Developer Portal containers during the installation in OpenShift.

## 2024.2

**New Features and Changes**

-Improved the way metrics are processed and stored, which increases accuracy and responsiveness of metrics on several platforms.
- New and improved documentation in the environment creation wizard.
- Added the `Allow Subscription in Self-Service` switch for API products. When enabled, subscriptions will be possible in developer portal.
- Added read-only overview over all rules within a rule set.
- Added editor for rule set files.
- Added an option to assign rule sets to organizations. Rule sets will only be applied to APIs from assigned organizations. If no organizations are assigned, rule sets will be applied globally.
- In application overview, metrics are shown from production and non-production environments, similar to API overview.
- Emails sent by developer portal are now branded and the email footer text can be customized.
- Removed some stacktraces and unnecessary lines from agent logs, to improve readability.
- Menu item `Governance` has been added to the tutorial for new users.
- Added the ability to change the plan of an existing subscription. A new switch has been added for developer portals, to configure if this feature is available from the portal.
- Improved error messages reported by rule set validation.
- Added a new advanced configuration option to control how APIs are merged during API discovery. Instead of the name reported by the gateway, it is now possible to use the title or first tag from the OpenAPI specification.
- Added oAuth callback url and scope to applications. As of now, these values will be included when the application is deployed to Layer 7.
- Added the ability to upload and version terms of use documents that can be attached to some or all API products as well as developer portals. In the developer portal, each user will be required to confirm the attached documents when subscribing to an API product or when registering (setting their password). Additionally, the exact version of the confirmed documents for a user or a subscription can be found in admin-portal.
- Added an option to limit access for subscribing or publishing APIs in certain environments. Instead of being publicly available, environments can be configured so that only users from selected organizations are allowed to subscribe or publish APIs.
- Added an option to overwrite how API urls are generated. The url pattern that is normally reported by the agent can now be overwritten for each API. Additionally, the way that this pattern is integrated into the environment URL can now be configured, potentially overwriting the platform default for that environment.
- Added webhooks. You can now register webhooks and link them to certain events (currently creation and deletion of subscriptions). When the event occurs, a JSON payload is sent to the webhook URL containing detailed information. If transmission fails, it will be attempted again later, with exponential backoff. It is also possible to manually retry or permanently cancel a failed transmission.

**Fixes**

- Fixed a bug where API product icon did not show in the menu.
- Fixed layout issues in the onboarding page.
- Fixed overlapping text in the API overview.
- Fixed an issue where the developer portal would show tags not belonging to any visible API.
- Fixed an incorrect icon in the set password page.
- Fixed a bug where the frontend would fail to show multiple dialogs in succession.
- Fixed word wrapping in the API specification page.
- Fixed a bug where self-registering a new organization would fail if an organization with the same display name already exists.
- Fixed a bug where the logo of a branded developer portal would not be used in the set password page.
- Fixed a bug where unreleased API versions would show up in developer portal.
- Fixed some errors in OpenAPI documentation of the API control plane backend.
- Fixed an issue where the wrong color scheme was applied to some buttons in developer portal.
- Fixed a security issue where users from consumer organizations could still manually access parts of the backend Rest API that should only be accessible for users that can log into admin portal.
- Fixed wrong error message when selecting a too large interval in metrics page.
- Fixed a bug where developer portal did not show owner information about APIs and API products that were not owned by the current users organization.

## 2024.1

**New Features and Changes**

- Enhanced the readability of truncated text to ensure critical information is conveyed effectively and nothing is missing.
- Introduced CodeMirror as an integrated file viewer for ruleset files & API specification files, enhancing the readability of the code and introduced the possibility to jump to code lines.
- Added a Ruleset Creation Wizard to simplify the configuration of new rulesets and make it easier to set it up correctly.
- Added InfluxDB to enhance the display and analysis of metrics.
- Added a navigation link within the Admin Portal to the Developer Portal to facilitate navigation to the portal.
- Enhanced the environment setup process by removing the agent configuration from the creation wizard.
- Added the option to decouple and make rate limits and quotas optional, enhancing the flexibility in the management of API plans.
- Enhanced user guidance in the Developer Portal by introducing informative tooltips.

**Fixes**

- Fixed a bug where rate limits were not functioning as intended.
- Fixed a bug where deleted users' emails interfered with other users' access.
- Fixed a bug preventing the creation of new URL menu items for the Developer Portal.
- Fixed a bug making LDAP user email address fields unusable.
- Fixed a bug where security violations were not displayed in the API ruleset violations if it was only one violation to display.
- Various typo and minor cosmetic corrections have been made throughout the platform for an improved user experience.