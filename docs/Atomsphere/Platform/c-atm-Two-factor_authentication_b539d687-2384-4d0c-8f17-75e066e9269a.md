# Two-factor authentication

<head>
  <meta name="guidename" content="Platform"/>
  <meta name="context" content="GUID-13923381-952C-4C42-92F3-1CBE326F765A"/>
</head>

Two-factor authentication is a verification process that requires users to confirm their identities at sign in by providing a temporary pass code.

## How it works

2FA is an optional but highly recommended security feature introduced to the Boomi Enterprise Platform. Enabling 2FA makes an account much less susceptible to security threats by placing higher requirements at the user sign in stage.

Typically, users need only to provide their user name and password credentials to sign in to the Boomi Enterprise Platform. 2FA takes this process a step further by additionally requiring users to enter a temporary six-digit authentication code sent directly to a device of their choosing, such as a desktop computer or smart phone. To generate this code, users simply download an authenticator application, commonly referred to as a Time-based One Time Password (TOTP) application, to their device. Boomi recommends the **Google Authenticator** application for Android and iOS mobile devices. For accounts with high-security requirements, Boomi recommends using the **Okta Verify** application.

:::note

Refer to your application's help guide for specific user instructions.

:::

After configuring the TOTP authenticator application to communicate with the Boomi Enterprise Platform, the authenticator application generates one-time-use codes every 30 seconds. Users have between 30-60 seconds to enter the code into the platform before it is invalidated, in which case they must enter a new one.

## User and account-level 2FA

Users have the option to configure 2FA on their own personal user ID from the **Settings** \> **Account Information and Setup** \> **Authentication** panel, and need to provide an authentication code any time they sign in to the Boomi Enterprise Platform.

Administrators can also enable 2FA on accounts they manage. If an administrator implements account-level 2FA, users are required to configure 2FA on their user ID in order to sign in to or switch such accounts. Users cannot access these accounts until they configure 2FA. After setting up 2FA on their user ID, users sign in to the Boomi Enterprise Platform with an authentication code and can proceed into the account as normal.

## Resetting 2FA

You might need to reset 2FA if you've been locked out of your account or need to change devices to generate the authentication code. Currently, you must contact Boomi Support to help reset 2FA for your account. You can access Boomi Support through the **Resources** menu in Platform. 

## Backup codes

:::info

Backup codes are available only for users who authenticate with SAML SSO.

:::

Technology is not always reliable. At times when a 2FA user cannot access their TOTP authenticator application (for example when a phone is broken or lost), Boomi provides backup codes as an alternative way for users to fulfill 2FA requirements and enter the Boomi Enterprise Platform.

For use in emergency situations, backup codes are generated during 2FA setup and act as supplementary, one-time-use codes. After the initial 2FA setup, users can regenerate backup codes from the **Settings** \> **Account Information and Setup** \> **Authentication** panel.

Unlike codes from a TOTP authentication application, backup codes are generated in sets of 10 from the interface and should be downloaded immediately to a secure location. Note that each code can only be used once; it is highly recommended that you track which codes you use.

:::note

If you can neither access the authenticator application nor backup codes to sign in, contact your Boomi account administrator. After verifying your identity, administration users then contact Boomi Support on your behalf. Allow Support up to two business days to resolve access to your account.

:::

## 2FA with Single-Sign On

When users sign in to the Boomi Enterprise Platform using single-sign on (SSO), 2FA is not enforced. Administration users with both SSO and 2FA enabled are the only users able to manually sign in with their Platform credentials. In such cases, administration users must enter an authentication code provided by their TOTP authenticator application.

## Authenticating API calls with 2FA

When accounts are enabled with 2FA, Boomi provides two ways for you to authenticate your API calls: API tokens or using an authentication code generated from your TOTP application.

API tokens are generally used when you regularly make calls to an API from your 2FA account. API tokens allow you to automate your calls using a single token that is generated straight from the Boomi Enterprise Platform. You can add API tokens from the **Settings menu** \> **Account Information and Setup** \> **AtomSphere API Tokens** page. For more information about API tokens, see the topic [AtomSphere API Tokens settings](/docs/Atomsphere/Platform/int-AtomSphere_API_Tokens_page_6a75a1f6-709c-4b08-b3bd-85fe2ac02e18.md). For more information about how to authenticate API calls using an API token, see the [AtomSphere API and Partner API authentication](https://developer.boomi.com/docs/APIs/PlatformSOAPAPI/Platform_API_and_Partner_API_authentication) topic.

Without an API token, you are required to enter a new TOTP authentication code in your API call tool. However, authentication codes expire every 60 seconds and therefore require you to frequently reenter new codes to make new or additional calls. This method is ideal for when you make infrequent calls or in ad-hoc scenarios. In this case, enter X-Boomi-OTP as an HTTP header in your API call tool of choice, and enter a TOTP authentication code as its value. For more information about how to authenticate API calls, see the AtomSphere API and Partner API authentication topic.
