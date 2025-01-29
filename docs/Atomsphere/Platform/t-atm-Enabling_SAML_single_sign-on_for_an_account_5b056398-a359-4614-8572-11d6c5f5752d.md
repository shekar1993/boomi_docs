# Enabling SAML single sign-on for an account

<head>
  <meta name="guidename" content="Platform"/>
  <meta name="context" content="GUID-5b056398-a359-4614-8572-11d6c5f5752d"/>
</head>

Use the **Settings** \> **Account Information and Setup** \> **SSO Options** tab to enable SAML single sign-on.

## About this task

Only administrators of the account who have access to the SSO Options tab can complete this procedure.

## Procedure

1. Select **Settings** \> **Account Information and Setup** and then click the **SSO Options** tab.

2. Under Enable SAML Single Sign-on, select the **Enable** option.

3. Click **Import**.

    The Import Certificate Wizard dialog opens.

4. Click **Browse** then select the public certificate from the identity provider.

    After import, the certificate information appears in the Identity Provider Certificate field.

5. Click **Finish**.

6. In the **Identity Provider Sign In URL** field, enter the URL to the identity provider's single sign-on service. This is your identity provider's single sign-on service POST location. \(Using OpenAM as an example, to find this information you would log into OpenAM as the administrator, go to Federation, click the identity provider that you created, and go Services. The URL that you need is in the Single SignOn Service POST Location field.\)

7. (Optional) Populate the **Sign Out Redirect URL** field to indicate the website in which the SSO user is redirected to upon signing out of the due to voluntary sign out or from a terminated user session.

8. (Optional) If you do not want to use the FEDERATION\_ID Attribute element as the federation ID, in the **Federation ID Location** field select **Federation ID is in NameID element of the Subject**.

9. If you selected the **Federation ID is in NameID element of the Subject** in Step 7, you are automatically presented with the **Name Id Policy** field. Select either the Transient or Unspecified option according to the needs of your identity provider.

10. Under SAML Authentication Context, select the type of authentication you want to require for users:

    - **Password Protected Transport** - \(Default\) Requires a username and password for authentication.

    - **Unspecified** - Accepts any type of authentication, such as token authentication.

11. The Platform Login URL and MetaData URL fields are populated automatically with your account information.

12. Click **Save**.

    Now you can set up users to use single sign-on.
