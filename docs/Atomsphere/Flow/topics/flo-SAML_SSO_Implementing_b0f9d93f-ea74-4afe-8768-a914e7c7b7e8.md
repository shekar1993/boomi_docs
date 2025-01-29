# Implementing Flow single sign-on with SAML 

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-b0f9d93f-ea74-4afe-8768-a914e7c7b7e8"/>
</head>


The Flow single sign-on implementation uses SAML 2.0.

SAML 2.0 allows service providers (Flow for example) to query an identity provider for authentication. Flow supports service provider-initiated sign in.

To implement SAML SSO with Flow, you will need to set up an identity provider. In this context, Flow is the service provider.

Once you have set up your identity provider, you will need to enable SAML SSO on the Flow tenant that you wish to restrict access to.

-   See [Enabling SAML single sign-on for a tenant](flo_SAML_SSO_Enabling_73264b65-9306-483d-940b-e2fc0d30eb50.md).

:::note

The tenant must always have at least one admin user who is not SSO enabled; this is required for managing the tenant and the single sign-on settings.

:::

## Implementing Flow single sign-on with SAML on an existing tenant 

Existing users can access a Flow tenant that uses single sign-on by signing in to Flow as normal.

However, if a user is already a member of a tenant prior to single sign-on configuration, and has an existing account with the IdP using an email that matches their Flow user account email, the user will not be able to access the tenant using single sign-on.

This means that when implementing single sign-on against an existing tenant and Flow users, you may wish to consider the following approaches:

### Remove existing users from the tenant

If you do not have many users in the Flow tenant that you wish to use single sign-on against, it may be quicker to simply remove the existing users and have them automatically provision themselves as SSO users in the tenant.

-   Sign in to Flow and enable single sign-on for the new tenant. See [ Enabling SAML single sign-on for a tenant](flo_SAML_SSO_Enabling_73264b65-9306-483d-940b-e2fc0d30eb50.md).
  
-   Navigate to the **Tenant** page.
-   In the **Users** section, delete any users that you wish to convert into SSO users, ensuring that at least one non-SSO user is kept in the tenant.
  
-   Any users who have been deleted should now sign in to the tenant using the URL generated when enabling SAML single sign-on for the tenant. When signing in, the users are automatically provisioned as SSO users for the tenant. Repeat this process for any existing user in the tenant that you wish to convert to an SSO user.

### Migrate tenant content into a new single sign-on enabled tenant

If you have a particularly large number of users in a Flow tenant, and depending on the complexity of your tenant configuration and the flows within, you may instead wish to migrate content into a new tenant specifically set up to contain content and Flow users protected by single sign-on.

-   Create and sign in to a new Flow tenant.
  
-   Migrate the relevant flows and content into this new tenant by exporting and importing the relevant flows and assets. See [ Importing and exporting flows](c-flo-Import_Export_60fc4afb-d0dd-43fa-976e-d23a79dd0c24.md).
  
-   Enable single sign-on for the new tenant. See [ Enabling SAML single sign-on for a tenant](flo_SAML_SSO_Enabling_73264b65-9306-483d-940b-e2fc0d30eb50.md).
  
-   The relevant users should now sign in to the new tenant using the URL generated when enabling SAML single sign-on for the tenant. When signing in, the users are automatically provisioned as SSO users for the tenant.