# Resources and account groups 

<head>
  <meta name="guidename" content="Platform"/>
  <meta name="context" content="GUID-03b949ad-d9b6-4cde-ac51-aa43d47adecc"/>
</head>


Primary account administrators can control clouds, connectors, roles, published processes, integration packs, and models by account group.

Users in the account group have access to the resources assigned to the account group. Sharing of these resources is set up on the Resources tab on the Account Groups page.

## Clouds 

Atom Clouds are set up primarily by partners who then share them with their customer accounts. After adding and installing an Atom Cloud, it is available for assignment on the Resources tab in the partner account.

## Connectors 

Developers can use the Connector SDK to develop connectors for private or public release. While publicly-released connectors are available for use by all users, privately-released connectors can be used only in accounts with which they are shared. Once a private connector is released, it is available for assignment on the Resources tab in the developer account.

## Roles 

Custom roles that are set up in a primary account can be shared with other accounts through account groups.

In order to share custom roles with users through an account group, the primary and other accounts must have Advanced User Security enabled. The primary account must also have account groups enabled.

1.  First the administrator of the primary account must add the custom roles on the User Management page.

2.  Then the administrator of the primary account can share the custom roles with the account group. The administrator adds the custom roles to the account group of which the other account is a member. This is accomplished on the Account Groups page’s Resources tab.

3.  Now the administrator of the other account can assign the shared custom roles to its users through the Add/Maintain User Roles dialog.


In the account group’s accounts the shared custom roles appear in the Add/Maintain User Roles dialog and have the word *\(shared\)* appended to the name. Once a shared custom role has been assigned to a user, it appears on the User Management page’s User tab next to the selected user with the word *\(shared\)* appended to the name. Note that in the account the shared custom roles do not appear in the Support Access Role list on the Account Information page. If the account uses environments, the shared custom roles do not appear on the Atom Management page’s Roles tab in the Available Roles list.

Once a user is assigned a shared custom role, they have all of the privileges associated with the role. If the privileges assigned to the custom role change in the primary account, they change for the users in the other accounts as well. \(This occurs immediately on the server side but requires a refresh of the user’s page.\) If the administrator removes an account from an account group, any users in the account who have been assigned a shared custom role lose access to that role.

If a primary account shares custom roles with an account and then Advanced User Security is disabled in either account, any custom roles that have already been shared *will remain available*. However, once the primary account’s Advanced User Security is disabled it is not able to share additional custom roles with the account groups. Once the account group account’s Advanced User Security is disabled the roles that were previously shared with it is no longer available in the Add/Maintain User Roles dialog to assign to users.

The administrator of the primary account can take away an account group’s access to a shared custom role. This takes place on the Account Groups page’s Resources tab. When the custom role is removed, users in the account group’s accounts who have been assigned the role lose access to it. \(This occurs immediately on the server side but requires a refresh of the user’s page.\)

:::note

Taking away shared custom roles could affect users’ permissions or could lock them out of accounts. For example, if a user in an account has only a shared custom role and that shared custom role is taken away, the user has no roles in the account and therefore is not able to log into the account.

:::

The administrator of the primary account has the ability to remove custom roles that have been shared through account groups. This takes place on the User Management page’s Custom Roles tab. When the administrator clicks the Remove icon, the custom role is deleted and it is no longer shared. If a custom role has been shared with an account group but has not been assigned to any users it can be removed immediately. However, if a custom role has been shared with an account group and has been assigned to users it cannot be removed until the role has been taken away from the users.

## Published Processes 

Primary account users whose role includes the Process Library privilege can publish processes and share them with managed accounts. Users of managed accounts can install copies of shared published processes in their accounts and typically use the installed processes as templates for new processes. Once a process is published, it is available for assignment on the Resources tab in the primary account.

## Integration Packs 

Primary account users whose role includes the Integration Pack privilege can create and manage packaged integration solutions called integration packs and share them with managed accounts. Users of managed accounts can install shared integration packs in their accounts. Once an integration pack is released, it is available for assignment on the Resources tab in the primary account.

## Models 

Users of primary accounts for which the service is enabled can share [models](../Master%20Data%20Hub/Modeling/c-mdm-Modeling_079b48bb-6c87-431f-ac30-5c7ed5d57814.md) with managed accounts for their use in as templates.