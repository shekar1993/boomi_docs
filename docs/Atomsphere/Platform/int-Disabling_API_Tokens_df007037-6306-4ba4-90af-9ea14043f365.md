# Disabling or enabling an API token on a user account

<head>
  <meta name="guidename" content="Platform"/>
  <meta name="context" content="GUID-df007037-6306-4ba4-90af-9ea14043f365"/>
</head>

Use the **Settings** \> **User Information** \> **AtomSphere API Tokens** page to disable or enable API tokens on your user account.

## Before you begin

To view the AtomSphere API Tokens page, you must have the API Access privilege.

## About this task

As a user, you can choose to disable or enable an API token on your user account from the **Settings** \> **User Information** \> **AtomSphere API Tokens** page. Disabling a token does not delete the token, but rather puts the token in an inactive state. You can choose to make the token active again by enabling the token.

Disabling an API token invalidates authentication by the token. Therefore, disabling a token requires you to replace the token in all locations it was previously used in order to continue making successful calls to the AtomSphere API and AtomSphere Partner APIs. Enabling an API token that has been disabled will reinstate the token's validity for authentication.

Use the following steps to disable or enable an API token on your user account:

## Procedure

1. Select **Settings** \> **User Information** and click the **AtomSphere API Tokens** tab.

2. In the list of API tokens, click the **Action** icon ![img-int-blue_gear](./Images/img-int-blue_gear_2e987bfd-68b2-44b9-af38-4701b3af2b97.jpg) next to the API token you want to disable or enable.

3. Depending on whether you want to disable or enable an API token, do the following:

   - To disable a token, select **Disable** from the list of actions.
   - To enable a token, select **Enable** from the list of actions. The **Enable** action shows only when the token has been previously disabled.

4. Depending on which action you implemented, confirm changes to the status of your API token by veiwing the **Status** column on the **AtomSphere API Tokens** page.

## Next steps

As described above, replace any disabled tokens where it was previously used to make calls to the AtomSphere API and AtomSphere Partner APIs. Otherwise, your calls will be interrupted.

## Related information

- [AtomSphere API Tokens settings](int-AtomSphere_API_Tokens_page_6a75a1f6-709c-4b08-b3bd-85fe2ac02e18.md)
- [API Token Management](int-Tokens_Management_page_32da8ba5-1209-45ae-81a4-5a0ae8bb6392.md)
- [Adding new API Tokens on a user account](int-Adding_API_tokens_d788aee3-026f-41c5-bebb-bf7f94500db3.md)
- [Renaming an API Token on a user account](int-Renaming_API_Tokens_ca4e1e3c-cd2d-4b90-9273-d6a847578479.md)
- [Revoking API tokens on a user account](int-Revoking_API_Tokens_bccb9f5e-8c95-4f2b-a9d4-9e761d7ec1b8.md)
