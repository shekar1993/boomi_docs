# Enabling SAML single sign-on for a tenant

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-73264b65-9306-483d-940b-e2fc0d30eb50"/>
</head>


SAML single sign-on is enabled for a tenant on the **Tenant** page.

-   Any tenant or subtenant can be configured for single sign-on access.

-   The tenant administrator must have SAML configured on their selected IdP. The IdP requires a service provider callback URL. This should be set as:

    -   https://flow.boomi.com/api/draw/1/authentication/saml

-   If your IdP requires an `Audience Restriction` value, this should be set to 'boomi-flow' to identify as the service provider.

-   The session JSON Web Token \(JWT\) honors the IdP session expiration if this is supported by the IdP SAML implementation.

-   The IdP must be configured to provide at least an email address claim in the generated SAML assertion.

-   The following example decoded assertion is what would expect from the IdP:

    ```
    <saml:AttributeStatement>
      <saml:Attribute Name="email" NameFormat="urn:oasis:names:tc:SAML:2.0:attrname-format:basic">
        <saml:AttributeValue xsi:type="xs:string">test@example.com</saml:AttributeValue>
      </saml:Attribute>
    </saml:AttributeStatement>
    ```


1.  Ensure that you are signed in to the tenant that you wish to enable SAML single sign-on for.

2.  Open the **Tenant** page. See [Tenant page](c-flo-Tenant_Settings_Page_5cf56ab8-1bcc-48f1-b497-b80491a09a73.md).

3.  Select the **Enable SAML Single Sign-On** toggle in the **Single Sign-on** section.

4.  The page updates to display additional fields that allow you to configure SAML single sign-on for the tenant. See [SAML single sign-on settings](flo_SAML_SSO_Options_ebd375a4-4475-400c-b9af-998e4226a2a8.md) for full information on these fields and settings.

5.  Enter the relevant details in the mandatory **Certificate**, **Redirect URI**, and optional **Logout Redirect URI** fields.

6.  Enter details as required in the optional claim mapping section fields **First Name Claim Attribute Name**, **Last Name Claim Attribute Name**, **Email Address Claim Attribute Name**, and **Group Claim Attribute Name**. These fields allow you to enter custom Attribute names.

7.  Add any groups as required into the **Groups** field. This allows you to restrict tenant access based on the groups in your IdP.

8.  Click **Save Settings** to enable SAML single sign-on for the tenant.

9.  Copy the contents of the generated **Flow Login URL** read-only field, and implement as a URL that allows users to sign in to the tenant using SAML single sign-on \(for example a bookmarked URL or a URL received in an email\). As the **Flow Login URL** only provides single sign-on access to a specific tenant, a single URL cannot be used to provide access to all users across multiple tenants \(such as using a single button to launch the single sign-on\).