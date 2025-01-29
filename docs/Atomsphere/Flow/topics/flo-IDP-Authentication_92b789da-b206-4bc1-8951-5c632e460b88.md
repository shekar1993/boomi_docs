# Using OIDC for flow authentication

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-92b789da-b206-4bc1-8951-5c632e460b88"/>
</head>


This worked example shows how to apply authentication to a flow using Keycloak OIDC as a identity provider.

## Before you begin

Before using this worked example, ensure that you are familiar with the following concepts and procedures:

-   Adding an identity provider in . See [Identity Providers](flo-IDP_cc718062-51e1-4c35-b9e7-3e971ac28249.md).

-   Setting advanced properties for a flow. See [Flow Properties](c-flo-Flow_Properties_b74d944d-9fec-43da-9ae3-fe0a5a370d00.md).


## About this worked example

This worked example is provided for illustration purposes only, to demonstrate the example steps and settings involved in adding an OIDC identity provider to a tenant in, and then using it to apply identity provider authentication to an entire flow.

## Setting up an identity provider

This example uses the Keycloak Open Source Identity and Access Management Server as an example identity provider, configured to use the OIDC protocol.

A Keycloak instance is created, and configured as follows:

-   A main "FlowOIDC" client is set up, and configured to use the "openid-connect" client protocol.

-   A single user group is added, named "GroupA".

-   A single user is added to GroupA, named "UserA".


## Adding the identity provider to the tenant

The identity provider is then set up in the tenant. See [Adding an OIDC identity provider](flo-IDP-OIDC_22f7e42f-cf6c-419a-a16d-88d6e9c2e3f6.md).

This example uses the following settings:

-   **Name**: OIDC IdP

-   **Type**: OIDC

-   **Client ID**: The **Client ID** for the "FlowOIDC" client.

-   **Client Secret**: The credentials **Secret** key generated for the "FlowOIDC" client.

-   **Well Known URL**: The Well Known configuration URL for the Keycloak authorization server, located in the Master Realm Settings **Endpoints** configuration.

-   **Allowed Audience**: The default "account" audience is used in this example.

-   **Resource**: Not set.

-   **Custom Attribute Mappings**: Not set.


## Applying identity provider authentication to the flow

Now that the Keycloak IdP is set up and configured in the tenant, it can be used to provide authentication.

In this example, a simple flow is added to test that the authentication is working correctly. This flow consists of a single step map element joined to the Start element, that presents an "Authentication success!" message.

In the **Flow Properties** form for the flow, the **Authentication** section is configured to use the identity provider that has been set up, and to only allow access to users belonging to the group set up in Keycloak.

-   **Identity Provider**: The "OIDC IdP" identity provider is selected.

-   **Allowed Groups**: The "GroupA" group is added.


When the flow is run, the Keycloak user sign-in page is displayed.

-   If the "UserA" Keycloak account is used to sign in, authentication is successful and the user proceeds in the flow to the "Authentication success!" message.

-   If any other user credentials are used to sign in, authentication will fail, with the user unable to access the flow.