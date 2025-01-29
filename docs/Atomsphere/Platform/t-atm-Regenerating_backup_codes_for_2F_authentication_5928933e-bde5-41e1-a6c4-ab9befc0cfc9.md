# Regenerating backup codes for two-factor authentication

<head>
  <meta name="guidename" content="Platform"/>
  <meta name="context" content="GUID-5928933e-bde5-41e1-a6c4-ab9befc0cfc9"/>
</head>

From the **Settings** page, regenerate and download authentication backup codes for users of two-factor authentication \(2FA\).

## Before you begin

:::info

Backup codes are available only if you authenticate with SAML SSO.

:::

To generate backup codes, you must first enable and configure two-factor authentication \(2FA\) on your account.

## About this task

You generate an initial set of backup codes automatically through the 2FA configuration wizard. However, backup codes can be regenerated from the **Settings > Account Information and Setup** > **Authentication** page. Use backup codes to log into the Boomi Enterprise Platform in the event that you cannot access the Time-based, One-Time Password (TOTP) authenticator application from your desktop or mobile device..

To access and download backup codes, do the following:

## Procedure

1. Select **Settings** \> **User Information** and click the **Authentication** tab.

    The Authentication page is displayed.

2. Click **Regenerate Backup Codes**.

3. Generating new codes will invalidate the previous set you have generated. Click **OK** to continue.

    The Backup Codes dialog appears with a list of 10 unique backup codes.

4. In the Backup Codes dialog, click **Download**.

5. Download and save a set of 10 backup codes to a secure place, like a password manager.

    :::note
    
    It is best practice to download your new set of backup codes immediately to avoid getting locked out of your account. Boomi recommends that you treat your backup codes with the same level of security as you would a password.

    :::

6. When you are finished, click **Close** to return to the Authentication page.

## Results

Each backup code can be used only once. It is recommended that you keep track of codes you have already used.
