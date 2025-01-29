# SAML (Deprecated) connector

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-f39faad9-1424-4673-b72f-2da032c6015c"/>
</head>

:::warning

This connector is now in Deprecated status. It is no longer available for new users and is not actively maintained. We will provide a minimum six-month notice before its retirement. We recommend upgrading to the newer supported version of this connector.

:::

The SAML (Deprecated) connector allows you to configure flow authentication via a SAML Identity Provider \(IdP\).

## Overview

The SAML (Deprecated) connector allows you to delegate user authentication to a SAML Identity Provider \(IdP\). For example, you can use this to authenticate a flow using SSO \(Single Sign On\). Any flow protected via this will act as a relaying party to accept a SAML assertion package issued by your SAML IdP. This means users can only access the flow once they have successfully logged in via their IdP.

-   When a flow protected by the is executed, the user is redirected to the IdP to log in.

-   Once the user has successfully logged in with their IdP, they will be redirected to the flow with a SAML assertion package.

-   The flow will check if the SAML assertion package is valid \(by using a certificate\). If it is valid it will be trusted and the user will be logged into the flow.

-   Authentication timeout expiration is dependent on the IdP, as follows:

    -   If an expiration time is not specified by the , it will default to 12 hours before a user is redirected to the IdP to obtain a new assertion. For example, after 12 hours a user running a flow protected by the will be redirected to the IdP to obtain a new assertion if the IdP is sent an assertion without an expiration time \(i.e. using the optional `SessionNotOnOrAfter` SAML condition\).

    -   If an expiration is specified by the \(using the optional `SessionNotOnOrAfter` SAML condition for example\) then it will be applied as the authentication timeout setting. For example, if the IdP is sent an assertion with an expiration time of 4 hours \(set using a `SessionNotOnOrAfter` SAML condition\), after 4 hours a user running a flow protected by the will be redirected to the IdP to obtain a new assertion.

    -   The minimum authentication timeout expiration supported by is 15 minutes. If the specified expiration is less than 15 minutes, the platform minimum authentication timeout value of 15 minutes is applied.


:::note

The `<NameIdentifier\>` element used to identify the subject of a SAML assertion populates the $User/User ID Boomi Flow system value. This can be useful as it allows you to load more data from a specific user from a different system into your flows. For example, this could be used to show all connector requests from the specific user.

:::

## Features

The SAML (Deprecated) connector forms part of the following features within :

- **Identity:** This feature allows you to use an existing user directory as an identity system within Flow.