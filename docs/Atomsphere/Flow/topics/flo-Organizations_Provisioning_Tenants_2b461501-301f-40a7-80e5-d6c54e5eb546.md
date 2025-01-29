# Creating a new tenant within an Organization

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-2b461501-301f-40a7-80e5-d6c54e5eb546"/>
</head>


As well as adding existing tenants to an Organization, Administrators can create and provision a new tenant directly within an Organization.

-   When creating a new tenant within an Organization, either the current user, another existing user, or a new user can be added to the tenant.

-   Choosing to add a new user will begin the process of provisioning a new user account for the email address you provide.

-   New tenants created in this way are automatically added to the Organization.


## Creating a new tenant within an Organization

To provision a new tenant within an Organization:

1.  Navigate to the **Organization Settings** page. See [Organization Settings page for Organization Administrators](flo-Organizations_Page_Administrators_8c6caca0-abab-41b2-8469-3f07ecd02ec6.md).
2.  In the **Tenants** section, click **Create Tenant**.
3.  The **Create Tenant** form is displayed.
4.  Enter a valid email address for any user that you wish to add in the **Email** field, and click **Add**.
    -   At least one user must be added to the tenant.

    -   The list is pre-populated with users who already exist in the current tenant.

    -   If the user does not currently have a account, adding them into this field will begin the process of provisioning a new account for the email address added. Once a new user has successfully provisioned themselves within , they are added to the new tenant.

5.  Enter the name for the new tenant in the **Tenant name** field. Only letters, numbers, "-" and "." characters, are permitted.
6.  Click **Create**.
    -   The new tenant is provisioned and automatically added to the Organization.

    -   If the current or an existing user was added to the tenant, they are able to select the newly provisioned tenant when changing tenant in the **Account** menu. See [Account Menu](c-flo-Tenant_menu_de6da113-3aab-4c23-aff0-5e42908b3536.md).

    -   If the creation of a new user was selected as part of the new tenant provisioning, an email is sent to the email address provided, with instructions for completing the provisioning process.

7.  Continue provisiong new tenants as required, or close the form to return to the **Organization Settings** page.
    -   The **Tenants in the organization** table updates to display any newly provisioned tenants.