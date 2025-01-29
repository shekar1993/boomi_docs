# Boomi Cloud API Management January 2025 Release Notes

<head>
  <meta name="guidename" content="Cloud API Management"/>
  <meta name="context" content="GUID-ba2ea0e9-6ff9-4784-b4d5-7dc7cb795177"/>
</head>

## January 28, 2025


### We added these features: 

- Added a new SSO sign-in feature in the Boomi Enterprise Platform for Boomi Okta SSO or federated IDP users to redirect Boomi Okta SSO and federated IDP users to log in to the API Control Center and Developer Portal via Boomi Enterprise Platform.
(WA-14111)

- After integration of Boomi Cloud API Management in the Boomi Enterprise Platform, the following new sign-in features were added to sign in to the API Control Center:

  - Added a new Cloud API Management sign-in option to the Boomi Enterprise Platform dashboard for Platform-enabled users to sign in to the API Control Center. Platform users can sign in to the API Control Center by navigating the **Service>API Management> Cloud API Management** link in the Boomi Enterprise Platform dashboard. 

  - Added a new Boomi Platform account sign-in option in the Boomi Cloud API Management login page for Platform-enabled users to sign in to the API Control Center via the Boomi Enterprise Platform dashboard. In addition to the existing process for signing in to Boomi Cloud API Management for Mashery Classic users, Platform users can now sign in to the API Control Center using this sign-in option on the Boomi Cloud API Management dashboard. 

  (WA-14287)

- Boomi Cloud API Management administrators will have the following restrictions for Platform enabled users:

  - Administrators cannot enable or disable user access for the Boomi Platform user in the [Manage your Users](../../ManageControls/Users/Enabling_or_disabling_user_access.md#enabling-or-disabling-users-from-manage-your-users-page) or [User Access Settings](../../ManageControls/Users/Enabling_or_disabling_user_access.md#enabling-or-disabling-users-from-user-access-settings-page) page, as enabling or disabling accounts for Platform users will be managed by Boomi Enterprise Platform.

  - Administrators cannot add a Service User role to a user in the User Access Settings page for the Boomi Platform users. Only Boomi Cloud API Management users can add a Service User role to users created in Boomi Cloud API Management, and no other area roles can be assigned. 

  (WA-14285) (WA-14283)

- You cannot sign in to the Boomi Cloud API Management if your Account status is Disabled (inactive) in the Boomi Enterprise Platform. If you try to log in, the login attempt fails with an error message. (WA-14286) (WA-14387) 

- Added a new Boomi Platform account sign-in option in the Developer Portal login page for Platform-enabled user accounts to sign in to the Developer Portal via the Boomi Enterprise Platform dashboard. (WA-14403)





