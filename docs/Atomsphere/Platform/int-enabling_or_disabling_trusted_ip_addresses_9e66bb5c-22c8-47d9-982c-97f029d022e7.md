# Enabling or disabling trusted IP addresses

<head>
  <meta name="guidename" content="Platform"/>
  <meta name="context" content="GUID-9e66bb5c-22c8-47d9-982c-97f029d022e7"/>
</head>

As an administrator, use the **Settings** \> **Account Information and Setup** \> **Trusted IP Addresses** page to enable or disable the Trusted IP Address feature on an account.

## About this task

As an administrator, enable the Trusted IP Addresses feature to allow a specified list of IP addresses the ability to make calls to the AtomSphere and Partner APIs associated with an account. Requests made to the AtomSphere API are only granted if the call originates from an address specified in the list. Disabling the Trusted IP Addresses feature removes restrictions on origins that are allowed to make calls to AtomSphere APIs associated with an account.

:::note

If you add your first IP address entry while the Trusted IP Addresses feature is disabled, the platform automatically changes the feature's state to enabled. After adding your first IP address and re-disable the feature, you can add subsequent addresses to the feature without enabling the feature. Conversely, if you delete your only IP address entry from the Trusted IP Addresses list, the platform automatically changes the feature's state to disabled.

:::

## Procedure

1. Select **Settings** \> **Account Information and Setup** and click the **Trusted IP Addresses** tab.

2. To enable the Trusted IP Addresses feature, toggle the **Trusted IP Addresses OFF** switch to **Trusted IP Addresses ON**.

   If you have not yet added an IP address to the page, the Add/Edit IP Address dialog automatically opens and prompts you to define Name, Type, and number values for your first IP address. Click **Save** to save values, or **Cancel** to exit without saving changes.

   :::note 

   This dialog will not automatically open if you previously added IP addresses; in this case, see the Related Links section to learn how to add more IP addresses.

   :::

3. To disable the Trusted IP Addresses feature, toggle the **Trusted IP Addresses ON** switch to **Trusted IP Addresses OFF**.

   The list of added IP addresses is still visible on the **Trusted IP Addresses** page. Although the entries are still visible, the feature does not enforce any addresses access to APIs until the feature is enabled.
   