# Changing your password to comply with a new password policy

<head>
  <meta name="guidename" content="Platform"/>
  <meta name="context" content="GUID-f6dec8ce-9220-496e-b792-6f6cd89c8342"/>
</head>

Users need to change their password whenever an account owner changes the password rules.

:::note

Custom password policy rules are available only to FedRAMP and SAML SSO administrators.

:::

## About this task

When the password policy for an account changes, users are automatically prompted to change their password the next time they sign in to the . Users are also prompted to change passwords when they switch to an account that requires a stricter password than the user's current password fulfills. In either case, users are redirected to the **User Information** page in order to change their password.

## Procedure

1. From the **User Information** page, read the list of required password policy rules that are listed on the screen.

2. Type your old password in the **Current Password** field.

3. Type a new password in the **New Password** field that complies with all password policy rules in the list.

4. Type the new password again in the **Confirm New Password** field.

    If this password does not match the one that you entered in the **New Password** field, you see an error message.

5. Click **OK**.

    After changing your password, you are signed out of the session and returned to the sign in page. You are also signed out of all other sessions where you were signed in with the same user ID.

6. If your new password complies with the new password policy, you can sign in with your new, compliant password.

    If your new password does not comply with the new password policy, you are prompted to change your password again and must repeat Steps 1-5.
