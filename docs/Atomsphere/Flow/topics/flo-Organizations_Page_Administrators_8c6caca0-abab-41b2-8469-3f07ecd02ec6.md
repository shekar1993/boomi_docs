# Organization Settings page for Organization Administrators

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-8c6caca0-abab-41b2-8469-3f07ecd02ec6"/>
</head>


The **Organization Settings** page allows Organization Administrators to manage and administer an Organization. This includes managing the tenants, users and local runtime connections within an Organization.

## Opening the page

-   Select **Organizations** from the top [Settings menu](c-flo-Settings_menu_12a0188d-00cb-4039-97bd-11f89e83f3ca.md).


## Page Overview

If you are signed in as an Organization Administrator for the tenant, the **Organization Settings** page is divided into sections for managing different areas of the Organization.

:::note

If you are not signed in as an Organization Administrator, this page presents a different set of options. See [Organization Settings page](flo-Organizations_Page_5d231fef-6306-42be-83b1-606ea13293df.md).

![The Organization Settings page](../Images/img-flo-Organizations_Page_69c07d50-bc77-4b73-800b-7fc8d9d4d83e.png)

:::

## Current Organization

The details of the current Organization are displayed.

-   **Name**: The name of the Organization.

-   **ID**: The unique ID of the Organization. This information is also displayed in the **Account** menu. See [c-flo-Tenant\_menu\_de6da113-3aab-4c23-aff0-5e42908b3536.md](c-flo-Tenant_menu_de6da113-3aab-4c23-aff0-5e42908b3536.md).


**Leave this Organization**: Click **Leave this Organization** to leave an Organization.

This will remove your Organization Administrator user role from the Organization. See [Leaving an Organization](flo-Organizations_Leaving_Organizations_ebcf4141-c761-4aba-a21b-5d2ac2cd0932.md).

:::caution

Leaving an Organization permanently removes your Organization Administrator user role from the Organization. If you wish to rejoin an Organization that you have left, you will need to request a new invitation from the Organization Administrator.

:::

## Organization Invitations

Any invitation requests to join an Organization are displayed in the **Invitations for Tenant** and **Invitations for user** tables.

**Invitations for tenant**: Provides details of any invitations that have been sent to your tenant. Accepting an invitation will add your tenant into the requesting Organization.

**Invitations for user**: Provides details of any invitations that have been sent to your user account. Accepting an invitation will add your user account as an Organization Administrator into the requesting Organization.

-   **Actions**: This column allows you to manually perform actions for each invitation:

    -   Click **Join** to accept the invitation and join the Organization.

    -   Click **Reject** to reject the invitation if you do not wish to join the Organization.

-   **Organization**: The name of the Organization that the invitation has come from.

-   **Status**: The current status of the invitation:

    -   **invited**: The invitation email has been sent, but you have not yet accepted the request.

    -   **rejected**: The invitation was rejected.

-   **Date Sent**: The date that the invitation was sent by the Organization.


## Tenants

This section allows you to manage the tenants that belong to the Organization.

**Invite Tenant**: Click **Invite Tenant** to invite a tenant to join the current Organization. See [Adding tenants to an Organization](flo-Organizations_Adding_Tenants_af7f41a8-a5f4-497f-ab5d-a3f14b4e005d.md).

**Create Tenant**: Click **Create Tenant** to create and provision a new tenant within the current Organization, using either the current user, an existing user, or by adding a new user to the tenant. See [Creating a new tenant within an Organization](flo-Organizations_Provisioning_Tenants_2b461501-301f-40a7-80e5-d6c54e5eb546.md).

**Tenants in the organization**: Provides details of any tenants that already belong to the current Organization, including any subtenants within a top-level tenant.

Click the **Expand row** icon to show additional details of which users can access the tenant. Click the icon again to collapse the row details.

To search for/filter the tenant list, enter text into the **Search** field, and click the **Search** icon or press **Enter**. Only the tenant names matching the text are displayed in the list. Partial search terms can be used, for example, entering “Doc” will filter the list so that only tenant names containing “Doc” are displayed.

-   **Actions**: Click the **Delete** icon in this column to remove the tenant \(and associated subtenants\) from the current Organization. Only top-level tenants can be removed from an Organization; individual subtenants cannot be removed here. See [Removing tenants from an Organization](flo-Organizations_Removing_Tenants_114becc7-aabe-4e06-8528-70b5d6dce067.md).

-   **Tenant**: The tenant/subtenant name.

-   **Users**: The number of users in the tenant.

-   **Date Joined**: The date that the tenant/subtenant joined the Organization.


**Tenants with pending or rejected invitations**: Provides details of any pending or rejected invitations that have been sent from the current Organization to a tenant.

-   **Actions**: Click the **Delete** icon to acknowledge and remove an invitation from the table.

-   **Tenant**: The name of the tenant that the invitation has been sent to.

-   **Status**: The current status of the invitation:

    -   **invited**: The invitation email has been sent, but has not yet been accepted.

    -   **rejected**: The invitation has been rejected.

-   **Date Sent**: The date that the invitation was sent by the Organization.


## Administrators

This section allows you to manage Administrator user accounts for the current Organization.

**Invite User**: Click to invite a user to join the current Organization as an Administrator. See [Adding Administrators to an Organization](flo-Organizations_Adding_Administrators_9aaffe3f-1345-45b0-9f46-0354565074ee.md).

**Current Administrators**: Provides details of the current Organization Administrators.

-   **Actions**: Click the **Delete** icon in this column to remove the Administrator from the current Organization. See [Removing Administrators from an Organization](flo-Organizations_Removing_Users_30c052ed-ad1f-473c-a444-a8109f443829.md).

-   **User**: The user e-mail address used to identify the user in Boomi Flow.

-   **Date Joined**: The date that the user joined the Organization as an Administrator.


**Users with pending or rejected invitations**: Provides details of any pending or rejected invitations that have been sent from the current Organization to a user.

-   **Actions**: Click the **Delete** icon to acknowledge and remove an invitation from the table.

-   **User**: The The user e-mail address that the invitation has been sent to.

-   **Status**: The current status of the invitation:

    -   **invited**: The invitation email has been sent, but has not yet been accepted.

    -   **rejected**: The invitation has been rejected.

-   **Date Sent**: The date that the invitation was sent by the Organization.


## Local Runtimes

This section allows you to create and manage local runtime connections in the current Organization.

Local runtime connections are used to connect a local runtime environment to the platform. This is the local runtime entity in the cloud that you can use to perform actions in a local runtime, such as deploying flows and viewing metrics. See [Flow Multicloud](c-flo-MC_149c8266-5449-4c3c-afc4-a53f814bd7bb.md).

**New Local Runtime Connection**: Click to open the **Create Local Runtime** page that allows you to set up a new local runtime connection. See [Creating a local runtime connection in Boomi Flow](c-flo-MC_Creating_Local_Runtime_in_Flow_9569e2be-f4fe-4284-9559-58b5b9036b52.md).

**Search**: Filter the runtime connections displayed in the table by entering text to filter by. Click on the search icon to apply the filter.

The table provides details of existing local runtime connections that have been set up for the current Organization.

-   **Actions**: This column allows you to manually perform actions for the connection:

    -   Click the **Edit** icon to edit the local runtime connection settings.

    -   Click the **Delete** icon to delete the local runtime connection. This does not delete the local runtime environment itself, only the connection between the local runtime environment and the platform.

-   **Connection Name**: The name of the connection.

-   **Version**: The version of the local runtime:

    -   **\[version number\]**: The specific version number of the local runtime is displayed. For connections to a local runtime containing multiple runtime nodes, the version shown is the highest version number of any of the runtime nodes.

    -   **Unknown**: Indicates that no version has been reported for the local runtime.

-   **Status**: The status of a local runtime connection:

    -   **Online**: Indicates that the local runtime is connected, i.e. at least one node has recently reported.

    -   **Unknown**: Indicates that the local runtime may not be successfully connected, i.e. no node has recently reported, or no reports have ever been received from a node.

-   **Shared Tenants**: How many tenants the local runtime is shared with; local runtime connections can be shared with your other tenants, allowing those tenants to deploy flows directly to the local runtime environment.