# Revoking API tokens on a user account 

<head>
  <meta name="guidename" content="Platform"/>
  <meta name="context" content="GUID-bccb9f5e-8c95-4f2b-a9d4-9e761d7ec1b8"/>
</head>


Use the **Settings** \> **User Information** \> **AtomSphere API Tokens** page to revoke API tokens on your user account.

## Before you begin

To view the AtomSphere API Tokens page, you must have the API Access privilege.

## About this task

As a user, you can choose to revoke an API token. Revoking a token ends the validity of your token and ultimately deletes it from your user account. You may wish to revoke a token if the token has been compromised, if you forgot the value, hit the limit on the number of tokens allowed for your user, or because the token is no longer in use.

Use the following steps to revoke API tokens that exist on your user account:

## Procedure

1.  Select **Settings** \> **User Information** and click the **AtomSphere API Tokens** tab.

2.  In the list of API tokens, click the **Action** icon ![img-int-blue_gear](./Images/img-int-blue_gear_2e987bfd-68b2-44b9-af38-4701b3af2b97.jpg) next to the API token you want to revoke.

3.  Select **Revoke** from the list of actions.

    A message displays asking for confirmation to revoke the API token.

4.  Click **OK** to continue, or click **Cancel** to exit and return to the **AtomSphere API Tokens** page without making changes.

## Results

When you click **OK**, the revoked token is deleted from your user account and no longer appears in the list on the API Tokens page. Clicking **Cancel** retains the token and its validity, and the token continues to appear in the list of API tokens.

## Next steps

Revoking a token is a permanent action, and requires you to replace the token with a valid, active token in all locations it was previously used to continue making successful calls to the AtomSphere API and AtomSphere Partner APIs.

## Related information

- [AtomSphere API Tokens settings](int-AtomSphere_API_Tokens_page_6a75a1f6-709c-4b08-b3bd-85fe2ac02e18.md)
- [API Token Management](int-Tokens_Management_page_32da8ba5-1209-45ae-81a4-5a0ae8bb6392.md)
- [Adding new API Tokens on a user account](int-Adding_API_tokens_d788aee3-026f-41c5-bebb-bf7f94500db3.md)
- [Renaming an API Token on a user account](int-Renaming_API_Tokens_ca4e1e3c-cd2d-4b90-9273-d6a847578479.md)
- [Disabling or enabling an API token on a user account](int-Disabling_API_Tokens_df007037-6306-4ba4-90af-9ea14043f365.md)