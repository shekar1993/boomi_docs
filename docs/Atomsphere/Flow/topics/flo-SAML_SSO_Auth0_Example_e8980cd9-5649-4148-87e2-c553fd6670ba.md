# Using SAML single sign-on with Auth0

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-e8980cd9-5649-4148-87e2-c553fd6670ba"/>
</head>


This worked example shows how SAML single sign-on \(SSO\) can be set up using Auth0 as the identity provider.

## About this worked example

This worked example is provided for illustration purposes only, to demonstrate the example steps and settings that might be taken for a simple implementation of SAML SSO for a tenant and user. In this example, Auth0 is used as the identity provider \(IdP\).

:::note

Auth0 does not fully support groups or session expiration with SAML SSO, and has been selected as the IdP in order to provide a simple SAML SSO example.

:::

## Setting up Auth0 as the identity provider

In this worked example, the Auth0 Default App is configured to use the SAML SSO implementation.

1.  After signing in to Auth0, the Default App in **Applications** is edited.
2.  In **Addons**, the SAML2 Web App Addon is enabled.
3.  On the Addon: SAML2 Web App **Usage** tab:
    -   The **Identity Provider Certificate** PEM certificate is downloaded. This will be needed when setting up the tenant SAML SSO in .

    -   The **Identity Provider Login URL** is copied. This will be needed when setting up the tenant SAML SSO in .

    -   The **Identity Provider Metadata** is downloaded and opened in order to obtain the `<SingleLogoutService>` `HTTP-Redirect` URL. This will be needed when setting up the tenant SAML SSO in .

4.  On the Addon: SAML2 Web App **Settings** tab:
    -   The `https://flow.boomi.com/api/draw/1/authentication/saml` service provider callback URL is entered into the **Application Callback URL** field.

5.  **Save** is clicked to save the changes to the application.
6.  A new example user is created in the **Users** section.

## Setting up the tenant in Flow

Now that Auth0 has been configured, SAML SSO must be enabled and configured for the required tenant.

1.  In , an administrator signs in to the required tenant and opens the **Tenant** page.
2.  **Enable SAML Single Sign-On** is selected, and configured as follows:
    -   The contents of the previously downloaded **Identity Provider Certificate** are copied and pasted into the **Certificate** field.

    -   The previously copied **Identity Provider Login URL** is pasted into the **Redirect URI** field.

    -   The previously copied `<SingleLogoutService>` `HTTP-Redirect` URL is pasted into the **Logout Redirect URI** field.

3.  The URL in the **Flow Login URL** field is copied. This is the URL that SAML SSO users will use for signing in to .
4.  **Save Settings** is clicked to save the changes and enable SAML SSO for the tenant.

## Signing in to using SAML SSO

Now that both Auth0 and the Flow tenant have been configured for SAML SSO, the example user previously created in Auth0 is used to sign in to Flow.

1.  In a browser, the URL copied from the **Flow Login URL** field is navigated to.
2.  The browser redirects to Auth0 and prompts for user sign-in credentials.
3.  The credentials for the new example user are used to sign in.
4.  The user credentials are checked, and as this user email address did not previously exist within Flow, a new user is automatically provisioned within Flow. The user is then immediately signed in to the tenant.