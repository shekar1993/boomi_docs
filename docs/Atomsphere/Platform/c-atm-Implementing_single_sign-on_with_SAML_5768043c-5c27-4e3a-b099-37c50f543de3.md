# Implementing single sign-on with SAML

<head>
  <meta name="guidename" content="Platform"/>
  <meta name="context" content="GUID-5768043c-5c27-4e3a-b099-37c50f543de3"/>
</head>

System administrators with Advanced User Security can implement single sign-on using SAML.

:::note

This feature is part of Advanced User Security, which is available in the Enterprise and Enterprise Plus Editions, and as an add-on to the Professional and Professional Plus Editions. Consult with your Boomi account representative to enable this functionality.

:::

## The Boomi Enterprise Platform and SAML 2.0

The single sign-on implementation uses SAML 2.0 with federated authentication. SAML 2.0 allows service providers \(for example, the platform\) to query the identity providers for authentication. The platform supports both identity provider-initiated sign in and service provider-initiated sign in.

SAML 2.0 also supports several types of bindings. The platform uses the HTTP POST Binding for identity provider initiated log-ins and the Redirect/POST Bindings for service provider initiated log-ins. The HTTP POST Binding is commonly used for Web browser single sign-on. For information about SAML 2.0 and bindings, see [http://en.wikipedia.org/wiki/SAML\_2.0](http://en.wikipedia.org/wiki/SAML_2.0).

## Setting up your identity provider

To implement single sign-on, set up an identity provider within a circle of trust that includes at least one service provider, which in this case is the platform. A circle of trust is a federation of at least one service provider and at least one identity provider who agree to share authentication information with assertions about authenticated users that let service providers make authorization decisions.

:::note

In this documentation OpenAM \(previously known as OpenSSO\) is an example of what you need to set up in the identity provider.

:::
