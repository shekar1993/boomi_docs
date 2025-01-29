# Understanding Unified Login

<head>
  <meta name="guidename" content="Platform"/>
  <meta name="context" content="GUID-504dc8cc-c7c2-4887-94cd-9b6b702d58a7"/>
</head>

Boomi has a unified login across products, allowing you to use a single set of credentials to access any Boomi service, including Platform, Boomi Go, Discover, and Flow. With unified login, custom password policies are no longer supported. We continue to recommend that you set up two-factor authentication on your account for added security.

For more information about the migration to the unified login experience, see the Community article [Boomi's Planned Changes for a Unified Login Experience](https://community.boomi.com/s/article/Boomi-s-Planned-Changes-for-a-Unified-Login-Experience#requirements).

:::note

If you are part of a FedRAMP account or use SAML SSO, you are not affected by this change.

:::

## Password requirements

Your password must meet the following requirements:

- Must be at least 12 characters long
- Does not contain part of the user’s login email
- Does not contain the user’s first or last name
- Is not a password on a list of commonly used or weak passwords (such as “changme”, “12345”, or “password”)’

Passwords cannot consist solely of a sequence, a repeated character, or a keyboard pattern (such as “qwertyui”), however you can have a password that consists of a mixture of upper and lower case characters in a sequence.

User accounts will be locked after six unsuccessful attempts to log in.

## Additional resources

- [Two-factor authentication](./c-atm-Two-factor_authentication_b539d687-2384-4d0c-8f17-75e066e9269a.md)
- [Setting up two-factor authentication](./t-atm-Setting_up_two-factor_authentication_a7c41d56-e9a9-4200-96eb-d3308520ab68.md)
- [Enabling accounts to require two-factor authentication](./t-atm-Enabling_accounts_to_require_2F_authentication_aef68efd-f082-45ca-8109-237d53408006.md)
