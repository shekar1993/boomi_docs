# Adding tenants to an Organization

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-af7f41a8-a5f4-497f-ab5d-a3f14b4e005d"/>
</head>


Administrators can invite existing tenants to join an Organization.

-   Only top-level tenants can be invited to join an Organization, subtenants cannot be invited.

-   All subtenants associated with the tenant are automatically added if the invitation is accepted.


## Adding a tenant to an Organization

To add a tenant to an Organization, an existing Administrator for the Organization must first invite the tenant.

1.  An Organization Administrator initiates the process by sending an invitation to a tenant.
    1.  Click **Invite Tenant** in the **Administrators** section of the **Organization Settings** page. The **Invite a tenant** form is displayed.
    2.  Enter either the tenant name \(e.g. '@tenantName'\) or the unique tenant id.
    3.  Click **Send Invite**.
    4.  The user account associated with the tenant is sent an email invitation. The **Users with pending or rejected invitations** table on the **Organizations Settings** page updates to display the pending invitation. If required, click the **Delete** icon to delete an invitation \(if it has not yet been accepted\).
2.  Once the user receives the invitation, they can either accept or reject the invitation. See [Joining an Organization](flo-Organizations_Joining_Organizations_e0bf8f6d-9d07-49ae-8496-302a2926d4d2.md).
    -   If the user accepts the invitation, the tenant is added to the **Tenants in the Organization** table on the **Organization Settings** page.

    -   If the user rejects the invitation, their user account is added to the **Tenants with pending or rejected invitations** table on the **Organization Settings** page. If required, click the **Delete** icon to acknowledge and remove the rejected invitation from the table.


If you wish to provision a new tenant within the Organization instead of adding an existing tenant, see [Creating a new tenant within an Organization](flo-Organizations_Provisioning_Tenants_2b461501-301f-40a7-80e5-d6c54e5eb546.md).