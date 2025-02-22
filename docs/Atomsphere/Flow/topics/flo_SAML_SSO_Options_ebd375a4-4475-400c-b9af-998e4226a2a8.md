# SAML single sign-on settings

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-ebd375a4-4475-400c-b9af-998e4226a2a8"/>
</head>


SAML single sign-on for a tenant is enabled on the **Tenant** page.

## Accessing the settings

1.  Open the **Tenant** page. See [Tenant page](c-flo-Tenant_Settings_Page_5cf56ab8-1bcc-48f1-b497-b80491a09a73.md).
2.  Select **Enable SAML Single Sign-On** in the **Single Sign-on** section.
3.  The page updates to display additonal fields that allow you to configure SAML single sign-on for the tenant \(see below\).

## SAML single sign-on settings

The following fields allow you to configure SAML single sign-on for the selected tenant with your IdP details.

-   **Certificate**: Public certificate of the identity provider \(IdP\). This certificate is used by to validate the authorization requests passed from your identity provider to the tenant.

    -   Paste the contents of your identity provider certificate into the **Certificate** field.

    -   The certificate must be a PEM-encoded public X.509 certificate.

-   **Redirect URI**: URI to the IdP's single sign-on service, to allow users to authenticate in the IdP. This is provided by the IdP, and determines where will redirect to when the SAML SSO process is initiated.

-   **Logout Redirect URI** \(optional\): URI that a user is redirected to, in order to sign them out of the IdP's current session. This is provided by the IdP, and is used to support any future SLO implementation inside .

-   **Flow Login URL**: URL that single sign-on users use to sign in to .

    -   This URL is where the IdP directs sign-in requests for the tenant.

    -   When using this URL, single sign-on users are only able to sign in to this tenant and any subtenants.

    -   This field is read-only.

    -   Click the **Copy Flow Login URL to clipboard** icon to copy the URL to the clipboard.

-   **First Name Claim Attribute Name** \(optional\): Enter a custom name if the SAML assertion generated by the IdP does not include any of the following supported claim attribute names:

    -   first\_name

    -   givenName

    -   User.Firstname

    -   http://schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname

    If the SAML assertion does not support any of the names listed, or if a custom name is not provided, the flow user's first name will not be set in the system.

-   **Last Name Claim Attribute Name** \(optional\): Enter a custom name if the SAML assertion generated by the IdP does not include any of the following supported claim attribute names:

    -   last\_name

    -   sn

    -   User.Lastname

    -   http://schemas.xmlsoap.org/ws/2005/05/identity/claims/surname

    If the SAML assertion does not support any of the names listed, or if a custom name is not provided, the flow user's last name will not be set in the system.

-   **Email Address Claim Attribute Name** \(optional\): Enter a custom name if the SAML assertion generated by the IdP does not include any of the following supported claim attribute names:

    -   email

    -   User.email

    -   http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress

    If the SAML assertion does not support any of the names listed, or if a custom name is not provided, the SAML SSO authentication will fail.

-   **Group Claim Attribute Name** \(optional\): If the SAML assertion generated by the IdP includes a claim that represents groups/roles that the user is a member of and you wish to restrict tenant access based on those groups, enter the claim attribute name that references groups inside the SAML assertion.

-   **Groups** \(optional\): Allows you to restrict tenant access based on the groups in your IdP.

    -   Enter a group name and click **Add**. Repeat this process to add all required groups.

    -   Click the **Delete** icon in the **Actions** column to delete a group.

    -   Group names must match exactly what will be included as values in the specified **Group Claim Attribute Name**.

    -   A user must be a member of at least one of these groups to be authorized to access the tenant.