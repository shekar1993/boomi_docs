# Single sign-on with SAML authentication

<head>
  <meta name="guidename" content="Platform"/>
  <meta name="context" content="GUID-71c031d5-5912-4255-bb8e-61a129afabc1"/>
</head>

System administrators can enable single sign-on use for the Boomi Enterprise Platform.

If you use multiple software applications that are related but that operate independently from one another, your system administrator can enable single sign-on. This means you will be able to log into one of the systems once and have access to all of the authorized applications. For example, you may work on a Windows network and use the platform. To log into Windows and the platform normally you need to remember two different URLs, two user names that may be the same but probably are different, and two passwords that may be the same but may need to be different because of different password policies. With single sign-on enabled you could log into Windows and simply click a link to go directly into the platform.

For more information about single sign-on, see [http://en.wikipedia.org/wiki/Single\_sign\_on](http://en.wikipedia.org/wiki/Single_sign_on). The supports single sign-on with SAML authentication and federation IDs for the Integration, Boomi DataHub, and API Management applications.

:::note

This feature is part of Advanced User Security, which is available in the Enterprise and Enterprise Plus Editions, and as an add-on to the Professional and Professional Plus Editions. Consult with your Boomi account representative to enable this functionality.

:::

## What Is SAML?

Security Assertion Markup Language \(SAML\) is an XML-based standard that allows security domains within software applications to exchange information about users trying to log into one of the related applications and then to either allow or prevent the user from logging in. One of the applications is considered the identity provider and the other application is the service provider.

- In this example, Windows Active Directory is the identity provider because it is the "gatekeeper" that stores and serves user names and passwords and handles authentication. If a user clicks a link in the identity provider to a service provider's application, the identity provider passes the user's information to the service provider.

- In this example, the platform is the service provider. Service providers offer services that access protected resources and they handle authorization. When a user clicks a link to access the platform, the platform receives the identity provider's user information and determines whether the user should be allowed access to the service or application.

For more information about SAML see [http://en.wikipedia.org/wiki/Security\_Assertion\_Markup\_Language](http://en.wikipedia.org/wiki/Security_Assertion_Markup_Language).

## What are federation IDs?

The Boomi Enterprise Platform's implementation of single sign-on with SAML uses a federation ID to identify the user who is requesting access to the application. In the platform, each user must have a federation ID that uniquely identifies the user within the account. When you enable single sign-on with SAML the user's federation ID appears in **Setup** on the **User Management tab** in the Add/Maintain User Roles dialog. It also appears in the identity provider on each user's record.

:::note

Federation IDs are case sensitive.

:::

## Benefits of single sign-on with SAML

Platform users benefit from using single sign-on because they:

- Need to remember only one URL and one user name.
- Need to remember and maintain only one password.
- Do not need to spend time logging in and out of multiple systems.

Platform administrators benefit from using single sign-on because:

- They can manage user access and user passwords from one application.
- They have fewer passwords to maintain, which saves time.
- It is easier to manage user access, especially when they need to take away a user's access to many applications. They can remove a user's access in the identity provider application, and his access is removed from all related service provider applications.
- Centrally managed user access and passwords are more secure.

:::note

If you are using single sign-on, you need to use an [API token](../Platform/int-AtomSphere_API_Tokens_page_6a75a1f6-709c-4b08-b3bd-85fe2ac02e18.md) to authenticate.

:::