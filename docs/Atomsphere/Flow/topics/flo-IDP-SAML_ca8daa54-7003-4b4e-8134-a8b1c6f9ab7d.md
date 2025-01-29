# Adding a SAML identity provider

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-ca8daa54-7003-4b4e-8134-a8b1c6f9ab7d"/>
</head>


Add a Security Assertion Markup Language \(SAML\) identity provider to your tenant.

## Overview

Flow allows you to delegate flow user authentication to a SAML identity provider \(IdP\). For example, you can use this to apply SSO \(Single Sign On\) authentication to your flows.

Any flow protected with SAML identity provider authentication will act as a relaying party to accept a SAML assertion package issued by the SAML IdP. This means that users can only access the flow once they have successfully signed in through the identity provider.

-   When a flow protected by a SAML identity provider is executed, the user is redirected to the identity provider to sign in.

-   Once the user has successfully signed in to the identity provider, they are redirected back to the flow with a SAML assertion package.

-   The flow checks if the SAML assertion package is valid using the certificate and configuration information provided in the IdP metadata. If it is valid the user is signed in to the flow.


## Before you begin

Before adding a SAML identity provider in , you will need to:

-   Create a SAML 2.0 application in your SAML IdP, and add at least one user.

-   **Single Sign-On URL**: In the application, specify the SAML identity provider URL:

    -   https://flow.boomi.com/api/run/2/saml

-   **Audience**: In the application, specify the Audience tag value to use. Copy this value, as it must match the **Allowed Audience** field in the identity provider.

-   **Redirect URI**: If required, in the application, specify the SAML identity provider Redirect URI endpoint:

    -   https://flow.boomi.com/api/run/2/saml


Once you have added the SAML identity provider in , you may also need to add/configure the following:

-   **Attribute statements**: You may need to add custom attribute statements to the identity provider SAML application, to ensure that user information required by is included in the application SAML assertion.

    For example, the SAML assertion XML sent to could include these user and group attribute statements:

    ```
    <saml2:Attribute Name="email" NameFormat="urn:oasis:names:tc:SAML:2.0:attrname-format:unspecified">
        <saml2:AttributeValue
            xmlns:xs="http://www.w3.org/2001/XMLSchema"
            xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="xs:string">exampleuser@example.com
        </saml2:AttributeValue>
    </saml2:Attribute>
        <saml2:Attribute Name="firstname" NameFormat="urn:oasis:names:tc:SAML:2.0:attrname-format:unspecified">
            <saml2:AttributeValue
                xmlns:xs="http://www.w3.org/2001/XMLSchema"
                xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="xs:string">Example
        </saml2:AttributeValue>
     </saml2:Attribute>
     <saml2:Attribute Name="lastname" NameFormat="urn:oasis:names:tc:SAML:2.0:attrname-format:unspecified">
            <saml2:AttributeValue
                xmlns:xs="http://www.w3.org/2001/XMLSchema"
                xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="xs:string">User
            </saml2:AttributeValue>
    </saml2:Attribute>
    <saml2:Attribute Name="groups" NameFormat="urn:oasis:names:tc:SAML:2.0:attrname-format:unspecified">
        <saml2:AttributeValue
            xmlns:xs="http://www.w3.org/2001/XMLSchema"
            xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="xs:string">GroupA
        </saml2:AttributeValue>
    </saml2:Attribute>
    ```

-   **Identity Provider metadata**: To allow dynamic configuration, your identity provider may provide an Identity Provider metadata XML file. The contents of this XML file can be inserted into the **IdP Metadata** field when adding the SAML identity provider in .

-   **metadata**: To allow dynamic configuration, also generates a SAML metadata XML file that can be imported into your identity provider SAML application. This metadata XML allows to establish trust with your identity provider application.

    This file is only generated once you have saved the SAML identity provider in , with the link to this file only shown once you have clicked **Save** when adding a SAML identity provider in .

    In a typical configuration, acts as the service provider, with this metadata XML being used to establish trust with the SAML identity provider. This SAML XML metadata provides the information required by to interact with the SAML IdP, such as endpoint URLs, identifiers, bindings, and certificate information for example.


## Adding a SAML identity provider

To add a SAML identity provider to your tenant:

1.  On the **Home** tab, select **Identity Providers** from the main menu.
2.  The [Identity Providers page](flo-IDP-page_090915bf-801d-44a2-9d9b-87906f606908.md) is shown. Any existing identity providers that you have set up are displayed on the page. Click **New Identity Provider**.
3.  **Name**: Enter a name for the identity provider.
4.  **Type**: Select "*SAML*" from the drop-down menu. Additional fields are now shown, allowing you to configure the identity provider.
5.  **Metadata**: This link is only generated once you have saved the SAML identity provider. Click the link to open the SAML XML metadata file, which can then be imported into your SAML IdP application.
6.  **IdP Metadata**: If the SAML IdP also generates metadata XML to pass to the service provider \(\), insert the contents of this metadata XML into this field.

7.  **Allowed Audience**: The audience \(resource URI or server\) for the SAML IdP. This must match the SAML `"Audience"` tag element.
8.  **Inactive Session Timeout \(minutes\)**: The duration \(in minutes\) that a user session can be inactive for, before the session is timed out and the user is required to authenticate again. This is set to 15 minutes by default.
9.  **Active Session Timeout \(minutes\)**: The duration \(in minutes\) that any active user session will be authenticated for, before the session is timed out and the user is required to authenticate again. This is set to 60 minutes by default.
10. **Custom Attribute Mappings**: These fields allow you to enter custom Attribute names, to customize the default attribute mappings. Claim attributes are used to identify the user by the flow, allowing the flow to process the user information being sent by the IdP. Enter a new attribute mapping name in the **SAML Attribute Name** field for each attribute as required.

11. **Comments**: Enter comments or any useful information about this identity provider configuration.
12. Click **Save**.
13. You are returned to the **Identity Providers** page, with the new SAML identity provider shown in the table.
14. If you wish to import the metadata XML into your IdP application, click the link in the **SAML Metadata** field to open the generated metadata XML file, and then import this metadata into your SAML IdP. This allows to establish trust with your SAML IdP.

## Next steps

You can now apply SAML authentication to flows in your tenant using the SAML identity provider as required, either to control access to an entire flow, or by using swimlanes to control access to specific sections of a flow.

-   [Using Okta SAML for flow authentication](flo-IDP-SAML_Okta_793cb37f-536b-4974-acd8-2971bd4a076f.md)