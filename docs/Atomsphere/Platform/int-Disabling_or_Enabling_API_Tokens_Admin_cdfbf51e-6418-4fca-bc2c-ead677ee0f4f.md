# Disabling or enabling user API tokens on an account

<head>
  <meta name="guidename" content="Platform"/>
  <meta name="context" content="GUID-cdfbf51e-6418-4fca-bc2c-ead677ee0f4f"/>
</head>

As an account administrator, use the **Settings** \> **Account Information and Setup** \> **Token Management** page to disable or enable user API tokens on an account.

## Before you begin

To view the **Token Management** page, you must have Account Administration and API Access privileges.

## About this task

As an administrator of an account, you can choose to disable or enable any API tokens that have been created by users on an account. Disabling a token does not delete the token, but rather puts the token in an inactive state. You can choose to make the token active again by enabling the token.

Disabling an API token invalidates user authentication by the token. Therefore, disabling a token requires users to replace the token in all locations it was previously used in order to continue making successful calls to the AtomSphere API and Partner APIs. Enabling an API token that has been disabled will reinstate the token's validity for user authentication.

Use the following steps to disable or enable user API tokens on an account:

## Procedure

1. Select **Settings** \> **Account Information and Setup** and click the **Token Management** tab.

2. In the list of API tokens, click the **Action** icon ![img-int-blue_gear](./Images/img-int-blue_gear_2e987bfd-68b2-44b9-af38-4701b3af2b97.jpg) next to the API token you want to disable or enable.

3. Depending on whether you want to disable or enable an API token, do the following:

   - To disable a token, select **Disable** from the list of actions.
   - To enable a token, select **Enable** from the list of actions. The **Enable** action shows only when the token has been previously disabled.

4. Depending on which action you implemented, confirm changes to the status of your API token by veiwing the **Status** column on the **API Token Management** page.

## Related information

- [AtomSphere API Tokens settings](int-AtomSphere_API_Tokens_page_6a75a1f6-709c-4b08-b3bd-85fe2ac02e18.md)
- [API Token Management](int-Tokens_Management_page_32da8ba5-1209-45ae-81a4-5a0ae8bb6392.md)
- [Searching for user API tokens by name or token value](int-Search_for_user_API_token_by_name_000de74b-3fdc-460c-a7b5-b6bcf4e6f99d.md)
- [Searching for user API tokens by using a filter](int-Search_for_user_API_token_by_filter_50fccfc2-dce0-47b2-b4d5-67ac1443ee5e.md)
- [Revoking user API tokens on an account](int-Revoking_API_tokens_Admin_864d1833-8d3e-4b27-9510-cabe7ef2449c.md)
