# Single sign-on with SAML authentication 

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-00ee23ce-43ee-4024-9fd8-d13fc0f23b82"/>
</head>


Single sign-on (SSO) using SAML authentication can be enabled for Flow tenants.

Single sign-on can be enabled so that users are automatically logged into a Flow tenant using SAML authentication to provide access as an authorized application. With single sign-on enabled, a user can log into an identity provider (IdP) and simply click a generated hyperlink to sign directly into a Flow tenant.

Setting up a tenant to use SAML authorization credentials allows administrators to add new Flow users to a specific tenant without having to go through the Flow provisioning by invitation process. A user can simply be added into the identity provider, and when the user signs in using the generated **Flow Login URL** hyperlink, they are automatically provisioned and signed in to the relevant Flow tenant as an SSO user.

To get started with using Flow SAML single sign-on, see:

-   [Implementing single sign-on with SAML](flo-SAML_SSO_Implementing_b0f9d93f-ea74-4afe-8768-a914e7c7b7e8.md)
-   [Enabling SAML single sign-on for a tenant](flo_SAML_SSO_Enabling_73264b65-9306-483d-940b-e2fc0d30eb50.md)
-   [SAML single sign-on settings](flo_SAML_SSO_Options_ebd375a4-4475-400c-b9af-998e4226a2a8.md)
-   [Single sign-on with Flow](flo-SAML_SSO_SSO_23c6880e-0eea-4496-b3a8-69612b742178.md)

A worked example shows how SAML single sign-on can be set up using Auth0 as the identity provider:

-   [Using SAML single sign-on with Auth0](flo-SAML_SSO_Auth0_Example_e8980cd9-5649-4148-87e2-c553fd6670ba.md)

:::note

Flow single sign-on with SAML authentication is a separate feature from single sign-on for the Boomi Enterprise Platform. To learn more about how system administrators can enable single sign-on use for the Boomi Enterprise Platform, see the topic [Single sign-on with SAML authentication](/docs/Atomsphere/Platform/c-atm-Single_sign-on_with_SAML_authentication_71c031d5-5912-4255-bb8e-61a129afabc1.md).

:::

## What is SAML?

Security Assertion Markup Language (SAML) is an XML-based standard that allows security domains within software applications to exchange information about users trying to log into one of the related applications and then to either allow or prevent the user from logging in. One of the applications is considered the identity provider and the other application is the service provider.

-   For example, Windows Active Directory could be used as the identity provider because it is the "gatekeeper" that stores and serves usernames and passwords, and handles authentication. If a user clicks a link in the identity provider to a service provider's application, the identity provider passes the user's information to the service provider.

-   In this example the Flow application is the service provider. Service providers offer services that access protected resources and they handle authorization. When a user clicks a link to access Flow, it receives the identity provider's user information and determines whether the user should be allowed access.

## Benefits of single sign-on with SAML

Flow application users benefit from using single sign-on because they:

-   Need only to access a unique URL (per tenant) with a single username.
-   Do not need to spend time logging in and out of multiple systems.

Flow administrators benefit from enabling single sign-on because:

-   They can manage user access and user passwords from one application.
-   They have fewer passwords to maintain, which saves time.
-   It is easier to manage user access, especially when they need to take away a user's access to many applications. They can remove a user's access in the identity provider application, and their access is then removed from all related service provider applications.
-   Centrally managed user access and passwords are more secure.
-   Users can be created in the identity provider and automatically provisioned within Flow when the user signs in to the SAML SSO enabled Flow tenant.