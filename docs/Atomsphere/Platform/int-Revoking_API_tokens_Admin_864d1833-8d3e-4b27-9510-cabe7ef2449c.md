# Revoking user API tokens on an account 

<head>
  <meta name="guidename" content="Platform"/>
  <meta name="context" content="GUID-864d1833-8d3e-4b27-9510-cabe7ef2449c"/>
</head>


As an account administrator, use the **Settings** \> **Account Information and Setup** \> **Token Management** page to disable or enable user API tokens on an account.

## Before you begin

To view the Token Management page, you must have Account Administration and API Access privileges.

## About this task

As an administrator, you can revoke any API tokens on an account. Revoking a token ends the validity of a user's token and ultimately deletes it from both the user account and the **Token Management** page. You may wish to revoke a token if the token has been compromised, or because the token is no longer in use.

Use the following steps to revoke user API tokens on an account:

## Procedure

1.  Select **Settings** \> **Account Information and Setup** and click the **Token Management** tab.

2.  In the list of API Tokens, click the **Action** icon ![img-int-blue_gear](./Images/img-int-blue_gear_2e987bfd-68b2-44b9-af38-4701b3af2b97.jpg) next to the user API token you want to revoke.

3.  Select **Revoke** from the list of actions.

    A message displays asking for confirmation to revoke the API token.

4.  Click **OK** to continue, or click **Cancel** to exit and return to the **Token Management** page without making changes.

## Next Steps

Revoking a token is a permanent action and requires users to replace the token with a valid, active token in all locations it was previously used to continue making successful calls to the AtomSphere API and Partner APIs.