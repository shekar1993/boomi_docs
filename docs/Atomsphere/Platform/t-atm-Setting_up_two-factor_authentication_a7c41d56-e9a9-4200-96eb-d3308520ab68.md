# Setting up two-factor authentication

<head>
  <meta name="guidename" content="Platform"/>
  <meta name="context" content="GUID-a7c41d56-e9a9-4200-96eb-d3308520ab68"/>
</head>


Use the **Settings** \> **Account Information and Setup** \> **Authentication** page to configure two-factor authentication \(2FA\) for your user ID.

## Before you begin

Download a Time-based One-Time Password \(TOTP\) authenticator application to a device of your choosing, like a desktop or mobile device. Refer to your application's help guide for specific user instructions.

## Procedure

1.  Select **Settings** \> **Account Information and Setup** and click the **Authentication** tab.

2.  Toggle on **Two-factor Authentication**.

    The 2FA wizard opens.

3.  Using the TOTP authenticator application from your desktop or mobile device, do one of the following:

    -   Scan the QR code provided by the 2FA wizard.
    -   Manually enter a code into your authenticator application. To generate this code, click the **setup code** link on the 2FA wizard.
    
    This synchronizes the to the authenticator application.

4.  On the 2FA wizard, click **Next**.

5.  On the **Verify Authentication Setup** page of the 2FA wizard, enter a six-digit code generated by your authenticator application.

6.  Click **Next**.

7.  Click the **Download** link to download and save a set of 10 backup codes to a secure location.

    :::note
    
    It is best practice to download your new set of backup codes immediately to avoid getting locked out of your account. recommends that you treat your backup codes with the same level of security as you would a password.

    :::

8.  When you are done, click **Finish** to exit the wizard.

## Results

You have successfully configured 2FA on your account. After the initial setup of 2FA on an account, you can access the **Settings** \> **Account Information and Setup** \> **Authentication** page to reconfigure 2FA and regenerate backup codes. If you decide to disable 2FA on an account, reenabling requires you to complete these steps again.