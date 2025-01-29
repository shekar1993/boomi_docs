# Adding an OIDC identity provider

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-22f7e42f-cf6c-419a-a16d-88d6e9c2e3f6"/>
</head>


Add an OpenID Connect \(OIDC\) identity provider to your tenant.

## Overview

Flow allows you to delegate flow user authentication to an OIDC identity provider \(IdP\). For example, you can use this to apply SSO \(Single Sign On\) authentication to your flows.

Any flow protected with OIDC identity provider authentication will act as a relaying party to accept an OIDC access token issued by the OIDC IdP. This means that users can only access the flow once they have successfully signed in through the identity provider.

-   When a flow protected by an OIDC identity provider is executed, the user is redirected to the identity provider to sign in.

-   Once the user has successfully signed in to the identity provider, they are redirected back to the flow with an OIDC access token.

-   The flow checks if the access token is valid. If it is valid the user is signed in to the flow.


## Before you begin

Before adding an OIDC identity provider, you will need to have created an application in the IdP service, added at least one user, and copied a number of values to use during installation. You will need these values:

-   Client ID

-   Client Secret key

-   Well Known URL

-   Allowed Audience


**Redirect URI**: If required, the Redirect URI endpoint for an IdP service using a OIDC identity provider is:

-   https://flow.boomi.com/api/run/1/oidc


## Adding an OIDC identity provider

To add an OIDC identity provider to your tenant:

1.  On the **Home** tab, select **Identity Providers** from the main menu.
2.  The [Identity Providers page](flo-IDP-page_090915bf-801d-44a2-9d9b-87906f606908.md) is shown. Any existing identity providers that you have set up are displayed on the page. Click **New Identity Provider**.
3.  **Name**: Enter a name for the identity provider.
4.  **Type**: Select "*OIDC*" from the drop-down menu. Additional fields are now shown, allowing you to configure the identity provider.
5.  **Client ID**: The full Client ID obtained from your IdP application. The Client ID is the public identifier required for all OIDC protected flows.
6.  **Client Secret**: The full Client Secret key obtained from your IdP application. For security reasons, previously added keys are not shown.
7.  **Well Known URL**: The Well Known configuration URL for the IdP authorization server. This metadata declares the endpoint locations and capabilities of the authorization server.

    Example: "*https://www.example.com/auth/realms/master/.well-known/openid-configuration*"

8.  **Allowed Audience**: The audience \(resource URI or server\) for the access token. This must match the `"aud"` claim in the access token.
9.  **Resource**: Some IdPs such as Microsoft Azure AD allow you to specify where the resource/data belongs, to control access to this resource/data. This field can be left blank if this feature is not used or required by your IdP.
10. **Send Access Token to Connectors**: Enable this setting to send the access token of the OIDC identity provider runtime user in a connector request. Requests made to a connector in a flow will then include an additional `x-boomi-flow-user-access-token` request header. This optional setting is disabled by default.
11. **Custom Attribute Mappings**: These fields allow you to enter custom Attribute names, to customize the default attribute mappings. Enter a new attribute mapping name in the **Claim Name** field for each attribute as required.
12. **Comments**: Enter comments or any useful information about this identity provider configuration.
13. Click **Save**.
14. You are returned to the **Identity Providers** page, with the new OIDC identity provider shown in the table.

## Next steps

You can now apply authentication to flows in your tenant using the identity provider as required, either to control access to an entire flow, or by using swimlanes to control access to specific sections of a flow.

-   [Using OIDC for flow authentication](flo-IDP-Authentication_92b789da-b206-4bc1-8951-5c632e460b88.md)