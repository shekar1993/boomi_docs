# Using Okta SAML for flow authentication

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-793cb37f-536b-4974-acd8-2971bd4a076f"/>
</head>


This worked example shows how to apply authentication to a flow using SAML Okta as a identity provider.

## Before you begin

Before using this worked example, ensure that you are familiar with the following concepts and procedures:

-   Adding an identity provider in . See [Identity Providers](flo-IDP_cc718062-51e1-4c35-b9e7-3e971ac28249.md).

-   Setting advanced properties for a flow. See [Flow Properties](c-flo-Flow_Properties_b74d944d-9fec-43da-9ae3-fe0a5a370d00.md).


## About this worked example

This worked example is provided for illustration purposes only, to demonstrate the example steps and settings involved in adding Okta SAML as an identity provider to a tenant in , and then using it to apply authentication to an entire flow.

-   Learn more about using Okta SAML in the [Okta Help Center](https://help.okta.com/en-us/Content/index.htm?cshid=csh-index)


## Setting up Okta SAML

This example uses Okta as an identity provider, configured to use the SAML protocol.

An Okta application is created, and specific settings configured as follows:

-   **Sign-in method**: SAML 2.0

-   **Single Sign On URL**: https://flow.boomi.com/api/run/2/saml

-   **Audience Restriction**: FlowAudience \(this value must match the **Allowed Audience** field when adding the SAML identity provider in \)

-   **Name ID Format**: EmailAddress

-   **Atttibute Statements**: may require the following custom attribute statements to be added, to ensure that the required user information is included in the application SAML assertion.

    -   **Name**: email / **Value**: user.email

    -   **Name**: firstname / **Value**: user.firstName

    -   **Name**: lastname / **Value**: user.lastName

    Previewing the SAML assertion should show these attribute statements included in the XML. For example:

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
    ```

-   **Group Attribute Statements**: may require the following custom group attribute statement to be added, to ensure the required group information is included in the application SAML assertion. In this example, we use a simple "Contains" filter to include the "Group A" group.

    -   **Name**: groups / **Filter**: Contains GroupA

    Previewing the SAML assertion should show this attribute statement included in the XML. For example:

    ```
    <saml2:Attribute Name="groups" NameFormat="urn:oasis:names:tc:SAML:2.0:attrname-format:unspecified">
        <saml2:AttributeValue
            xmlns:xs="http://www.w3.org/2001/XMLSchema"
            xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="xs:string">GroupA
        </saml2:AttributeValue>
    </saml2:Attribute>
    ```

-   **Identity Provider metadata**: The contents of this XML file is inserted into the **IdP Metadata** field when adding the SAML identity provider in .

-   **Assignments**: The "Example User" and "GroupA" are added to the Okta Directory and assigned to the application.


## Adding the Okta identity provider to the tenant

The identity provider is then set up in the tenant. See [Adding a SAML identity provider](flo-IDP-SAML_ca8daa54-7003-4b4e-8134-a8b1c6f9ab7d.md).

This example uses the following settings:

-   **Name**: Okta SAML IdP

-   **Type**: SAML

-   **IdP Metadata**: The contents of the **Identity Provider metadata** XML file in the Okta application

-   **Allowed Audience**: FlowAudience \(this must match the **Audience Restriction** value in the Okta application\)


All other settings are left as the default values. For example, no custom attribute mappings need to be added in .

## Applying OKTA SAML authentication to the flow

Now that the Okta SAML IdP is set up and configured in the tenant, it can be used to provide authentication.

In this example, a simple flow is added to test that the authentication is working correctly. This flow consists of a single step map element joined to the Start element, that presents an "Authentication success!" message.

In the **Flow Properties** form for the flow, the **Authentication** section is configured to use the "Okta SAML IdP" identity provider, and to only allow access to users belonging to the "GroupA" group set up in Okta.

-   **Identity Provider**: The "Okta SAML IdP" identity provider is selected.

-   **Allowed Groups**: The "GroupA" group is added.


When the flow is run, the Okta SAML authentication is used to control access to the flow.

-   If the "Example User" Okta account is used to sign in, authentication is successful and the user proceeds in the flow to the "Authentication success!" message.

-   If any other user credentials are used to sign in, authentication will fail, with the user unable to access the flow.