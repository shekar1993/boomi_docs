# Single sign-on

<head>
  <meta name="guidename" content="Platform"/>
  <meta name="context" content="GUID-e9aa88ba-4724-424e-9694-14e8ebbe92ed"/>
</head>

This topic covers signing in to the service provider, differences for new SSO users, and SSO and account access.

:::note

This feature is part of Advanced User Security, which is available in the Enterprise and Enterprise Plus Editions, and as an add-on to the Professional and Professional Plus Editions. Consult with your Boomi account representative to enable this functionality.

:::

## Signing in to the service provider

You may be signed in to the application you use the most: the identity provider. To sign in to the service provider \(the \), click a link in the identity provider's application to access the service provider.

If you are not signed in to the identity provider but click a link \(for example a bookmarked URL or a URL received in an email\) that is supposed to take you to the service provider's sign in page, single sign-on redirects you to the identity provider's sign in page. After you sign in, you are redirected to the target of the service provider's link and gain access to it without having to log in a second time.

If you also have access to accounts that do not use single sign-on, you have to sign in to those accounts normally by clicking the URL and entering your user name and password.

Administrators can use both methods to sign in to either type of account.

## Differences for new single sign-on users

If you used to sign in to the normally but now use single sign-on, you may notice these differences in the platform:

- You no longer need to sign in to the platform.

- You no longer can change your email address or password on the User Information tab. Your account administrator is able to change the password when you log into the platform “normally.”

If you have access to multiple types of accounts, see the topic Single sign-on with SAML authentication.

## Single sign-on and account access

Single sign-on \(SSO\) is set up on an  account, and then for individual users of that account.

Depending on whether they have administrative privileges, SSO users have varying sign in experiences when they belong to multiple accounts. Use the following table to see how different SSO users sign into the , and what accounts are available to them.

| SSO user type | Sign in method | Account access |
| --- | --- | --- |
| Non-administrative SSO users | Platform user name and password credentials | Have direct access to non-SSO accounts only. |
| Non-administrative SSO users | Identity Provider \(IDP\) |Have access only to SSO-enabled federating/restricting accounts and to other accounts that are a part of Account Groups. |
| Administrative SSO users | Platform user name and password credentials | Have direct access to any non-SSO accounts to which they belong, and only to those accounts that the user is an administrator of \(SSO or non-SSO\). |
| Administrative SSO users|Identity Provider \(IDP\) | Have direct access only to SSO-enabled federating/restricting accounts and to other accounts that are a part of Account Groups. |

## SSO user lockout

The following table describes the different types of SSO users, how they access the , and how a locked SSO user can either unlock themselves or have an account administrator unlock them on their behalf.

| SSO user type | Sign in method | Unlock method |
| --- | --- | --- |
| Regular, non-SSO user | User name and password credentials on the sign in page | Regular non-SSO users can unlock themselves using the **Reset your password** link on the sign in page. |
| SSO user, administrator privileges | User name and password credentials on the sign in page, or their Identity Provider \(IDP\) | When locked from the platform, SSO users with administrator privileges have the ability to unlock themselves using the **Reset your password** link on the sign in page. This is because an SSO administrator has the ability to sign in from either the platform sign in page or their IDP. |
| SSO user, non-administrator privileges with access only to SSO-enabled accounts | Identity Provider \(IDP\) | Because these users must use their IDP to sign in and cannot do so using their user name and password credentials, they do not have the option to unlock themselves using the **Reset your password** link. Therefore, the administrator of user federating/restricting account must unlock them on their behalf from the User Management page.To learn about how to unlock user with SSO only access that is locked as result of using their IDP, see the topic [Unlocking a user with single sign-on access](int-Unlocking_an_sso_user_ee1a1ec0-0997-4434-b76a-fcafd6b3a9fa.md). |
| SSO user, non-administrator privileges with access to both SSO and non-SSO enabled accounts | User name and password credentials on the sign in page to log into their non-SSO accounts, OR their Identity Provider \(IDP\) to log into their SSO-enabled accounts. | In some cases, the SSO user has access to multiple accounts where some accounts use single sign-on and some do not. How the user chooses to sign in \(IDP or using their user name/password\) upon getting their account locked determines how the user is unlocked:-   When signing in via an IDP, these users have access to only those **SSO accounts to which they belong**. If the user gets locked out, the user can unlock themselves using the **Reset your password** link.<br /><br />When signing in using user name and password credentials on the sign in page, these users have access only to those **non-SSO accounts to which they belong**. If the user gets locked out because of invalid credentials, the user can unlock themselves using the **Reset your password** link.|

## Additional resources

- [Identity provider OpenAM \(previously named OpenSSO\)](https://forgerock.org/openam/)

- [Redirect and POST bindings](http://www.oasis-open.org/committees/download.php/27819/sstc-saml-tech-overview-2.0-cd-02.pdf)

- [SAML](http://en.wikipedia.org/wiki/Security_Assertion_Markup_Language)

- [SAML 2.0 and bindings](http://en.wikipedia.org/wiki/SAML_2.0)

- [Single sign-on](http://en.wikipedia.org/wiki/Single_sign_on)