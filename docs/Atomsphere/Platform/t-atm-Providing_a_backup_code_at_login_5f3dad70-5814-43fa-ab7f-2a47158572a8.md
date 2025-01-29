# Providing a backup code at sign in

<head>
  <meta name="guidename" content="Platform"/>
  <meta name="context" content="GUID-5f3dad70-5814-43fa-ab7f-2a47158572a8"/>
</head>

Provide a backup code at sign in for users of two-factor authentication \(2FA\).

## Before you begin

After setting up 2FA on your user ID, ensure that you have downloaded a set of backup codes from the initial 2FA setup wizard or from the **Settings** page.

:::info

Backup codes are available only if you authenticate with SAML SSO.

:::

## About this task

In the event that you lose access to your TOTP authenticator application, you can alternatively enter a backup code to sign in to the . You generate a set of backup codes during 2FA setup, or regenerate a new set from the **Settings** \> **Account Information and Setup** \> **Authentication** page.

## Procedure

1. On the sign in page of the , enter your user name and password.

2. Click **Sign In**.

3. Click the **Need to use your backup code?** link.

4. In the provided field, enter a backup code. Since each code can be used only once, keep track of which one you use.

    :::note
    
    Clicking the **Don't have a backup code?** link returns you to the previous authentication code entry screen.

    :::

5. Click **Continue** to complete the sign in.

## Results

If you can neither access the authenticator application nor backup codes to sign in, contact your Boomi account administrator. After verifying your identity, administration users then contact Boomi Support on your behalf. Allow Support up to two business days to resolve access to your account.
