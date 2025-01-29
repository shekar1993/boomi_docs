# Account Features settings

<head>
  <meta name="guidename" content="Platform"/>
  <meta name="context" content="GUID-2f7d9196-e800-4f11-8cf9-9a2a3f06549c"/>
</head>

As an administrator, use **Account Features** in the **Settings** menu to configure user access controls for various features on your account.

## Advanced Environment Access

Enabling the Advanced Environment Access feature allows account administrators to use the following custom privileges to apply granular user access controls at the environment level:

- [Environment Management Read Access](int-Custom_roles_for_giving_ro_access_to_environment_management_f13f9092-7e7b-469e-a03f-1659134c4c3c.md)— when a custom role with this privilege is created and assigned to a user in **Settings** \> **Account Information and Setup** \> **User Management** and then assigned to a specific environment in **Manage** \> **Atom Management**, users with the custom role can view \(but not edit\) information in the environment.

- [Environment Management Full Access](int-Custom_roles_for_giving_write_access_to_environment_management_a17ec303-c471-4c77-8f74-af147302b373.md)— when a custom role with this privilege is created and assigned to a user **Settings** \> **Account Information and Setup** \> **User Management** and then assigned to a specific environment in **Manage** \> **Atom Management**, users with the custom role can both view and edit information in the environment.

    :::note
    
    It is highly recommended that administrators do not assign both Environment Management and the Full Access custom roles simultaneously; the Environment Management privilege overrides both Full Access and Read-Only roles.

    :::

To leverage this feature once it has been enabled from Setup, the administrator needs to do the following:

1. Navigate to **Settings** \> **Account Information and Setup** \> **User Management** to create custom roles with both or either Environment Management Read Access or Environment Management Full Access privileges.

2. Assign these new custom roles to users of the account.

3. Finally, navigate to **Manage** \> **Atom Management**, select an environment, and add the newly create custom roles in the **Roles With Access** field as desired.

   By doing this, the administrator specifies that the environment can be edited by those users assigned with the Full Access role, or viewed by those users assigned with the Read-Only role.

When the Advanced Environment Access feature is toggled **ON**, it enforces the read and write custom roles configured on the environment, and user's access is displayed as labels on each environment tile within the Atom Management page. After assigning roles to both users and environments, standard users who are currently logged into the platform notice changes upon a page refresh; otherwise, users notice changes the next time they log in.

If the Advanced Environment Access toggle is toggled **OFF**, the account configuration assumes the Environment Management privilege only \(if applied\), and access controls cannot be applied on a per environment basis.

## Data Collection

Data Collection allows Boomi to utilize the statistical data and information gathered during your regular use of the Platform to help us improve the future development of our product features and updates. By opting in to Data Collection, you benefit through the following capabilities:

- Recommended filters when building connector Query operations.
- Recommended fields when building maps (Boomi Suggest).
- Recommended solutions to troubleshoot and fix document or process errors (Boomi Resolve).

When the Data Collection feature is toggled **ON**, you allow your Boomi account data to be transmitted electronically to Boomi, authorize us to retain and use the information when developing future generally available product features and updates, and use the data for Boomi-internal analytics reporting.

If the Data Collection feature is toggeld **OFF**, your product functionality is not affected. However, Boomi cannot consider your data when developing future product features and updates. Furthermore, your account does not participate in, nor does it benefit from the features. Any data that has already been collected for your account will be removed in 24 hours. If you opt back in before the data is removed, the data is not removed.

:::info

If your account is opted in to Data Collection when it should not be, opt out by toggling the **Data Collection** setting to OFF. This setting is only available to account administrators. If you are an account administrator and do not see the option, contact your Boomi account administrator. After verifying your identity, administration users then contact Boomi Support on your behalf. Allow Support up to two business days to opt your account out of Data Collection.

:::

## RSS Feeds Access

Dynamically enable or disable user access to Boomi RSS feeds on an account. When RSS Feeds Access is disabled for a user, the user is unable to view RSS Monitor Feed and RSS Alerts Only Feed links on Settings and Atom Management pages.

Users who previously subscribed to Boomi RSS feeds prior to disablement will no longer receive updates. Attempting to access RSS feeds through the AtomSphere API results in an error message that reads "Access to RSS Feeds is disabled on this account." RSS feeds are off by default for new users.


## API Lifecycle

Advanced versioning and service lifecycle management for your APIs.

## License Enforcement

Allows users to proceed with deployments even after hitting the available connection count limit in their account.
