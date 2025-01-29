# Integration Packs page \(Legacy, non-environment\)

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-b742b4d2-fc36-49a0-98aa-792cd1a6a4c2"/>
</head>

You can add, modify, delete, release, and re-release integration packs on the **Manage** \> **Integration Packs** page.

![Integration pack details open in the Manage Integration Packs page.](../Images/manage-ps-integration-packs_3076426d-33cf-4d45-80b5-28951a56bb68.jpg)

## Integration Packs 

Lists by name the integration packs that are managed by the account. To change the name or description of an existing integration pack or to modify, release, or re-release it, you must first select the integration pack in this list.

Clicking **![Add Integration Pack.](../Images/main-ic-plus-sign-green-on-white-blue-outline-16_3d421ea7-ef6b-4b9f-8c4b-1667db6191f5.jpg) Add Integration Pack** adds a new integration pack.

## Integration Pack Name

Sets the name of a new integration pack or, if a previously added integration pack is selected in the Integration Packs list, updates the name of that integration pack.

## Integration Pack Type

Sets the type of a new integration pack:

- Single Attachment — Only one instance of the integration pack can be installed per account.

- Multiple Attachments — Multiple instances of the integration pack can be installed per account.

You cannot change the type once the integration pack is added.

This list is present only if the multi-install integration packs feature is enabled in the account. If you would like to have this feature enabled, contact your Sales Representative. If this feature is not enabled, you can add only Single Attachment integration packs.

:::info

Multi-install integration packs cannot include API Service components.

:::

## Description

Sets the description of a new integration pack or, if a previously added integration pack is selected in the Integration Packs list, updates the description of that integration pack. The description can contain up to 500 characters.

## Save

Saves changes to the Integration Pack name and description. If the integration pack is new, clicking **Save** adds the integration pack to the Integration Packs list.

## Delete Integration Pack

![Delete Integration Pack.](../Images/main-ic-x-red-stylized-16_5cfc1d0e-0ef7-44cc-bacf-4b4116afca79.jpg) Initiates a request to delete the selected integration pack.

In the confirmation dialog:

- Clicking **OK** executes the request.

    Upon deletion, the integration pack is automatically uninstalled from any accounts in which it was installed, and any Atoms or environments that were attached to it are detached.

- Clicking **Cancel** cancels the request.

## Release date

Shows the date on which release of the selected integration pack is scheduled to occur. If the integration pack has previously been released, this is the date on which an update will automatically be applied to accounts in which the integration pack is installed.

## Publications

Lists the published processes and API Service components that are included in the selected integration pack. For each component, the following information is shown:

**Component Name**  
Name of the process or API Service component.

**Component Type**  
Type of component: Process or API Service.

**Current Version**  
If the integration pack is released, the version number of the published component in the release.

**Pending Version**  
If the published component is not in the current release of the integration pack, the version number of the current published component. This is the version that would be included in a new release of the integration pack.

A value of “Deleted” means the component is no longer included in the integration pack and would not be included in a new release.

**Available Version**  
If the current version of the published component is not in the current release of the integration pack, this is the current version number. This is the version that would be included in a new release of the integration pack.

You can perform the following actions on the Publications list:

**![Add button.](../Images/main-ic-plus-sign-white-in-green-circle-16_4dc8c5f3-e893-4aef-ade2-0b7afe9476c1.jpg) Add**  
Opens the Published Components dialog, which is used to add published components to the selected integration pack.



 ![In the Published Component dialog, published components are selected and assigned to an Integration Pack.](../Images/manage-db-integration-pack-assign-process_68480a06-1f25-4329-9f90-b0d69567866e.jpg)

  In the dialog:

- The **Filter Components** field is used to filter the list. As you type in this field, the list is filtered to include only components whose names partially or completely match the typed characters.

 To discontinue filtering and restore the unfiltered list, click ![Clear filters.](../Images/main-ic-x-white-in-gray-circle-16_0abafeee-d5e7-4888-9bfb-475b11b6d00f.jpg).

  - Turning on the check box for a component selects it for inclusion in the integration pack.

  - Clicking **OK** adds the selected components and closes the dialog.

- Clicking **Cancel** closes the dialog without adding any components.


**![Remove selected component from integration pack.](../Images/main-ic-x-white-in-red-circle-16_0d0c5dc5-1c5e-4117-8a58-92c5e050ec5b.jpg) Remove**  
Initiates a request to remove the selected component from the selected integration pack.

In the confirmation dialog:

 - Clicking **OK** executes the request.

 - Clicking **Cancel** cancels the request.

**![Release integration pack.](../Images/main-ic-gear-black-and-white-32_545397b0-6da2-4c4b-bbaa-3544823ddcbb.jpg) Release Integration Pack**  
Opens the Integration Pack Release dialog, which is used to release or re-release the integration pack. The new release would include any versions of the components identified in the list as “Pending” or “Available”.

![Integration Pack Release dialog with release schedule options set.](../Images/manage-db-integration-pack-release-legacy_282350c5-6b7b-4abb-8d8a-cdd2290698f1.jpg)

 In the dialog:

 - Clicking **Release Immediate** specifies an immediate release. If this is a re-release, the update would be applied immediately to managed accounts in which the integration pack is installed.

 - Clicking **Release Pending** specifies a pending release. If this is a re-release, users of managed accounts in which the integration pack is installed would have the option to apply the pending update. On the specified **Release Date**, the release control period would end — if the pending update had not yet been applied manually, it would be applied automatically. Clicking the **Release Date** field opens a calendar control for date selection.

  - Clicking **OK** releases the integration pack and closes the dialog.

 - Clicking **Cancel** cancels the request.

:::note

If there are not any versions Pending or Available, the **![Release integration pack.](../Images/main-ic-gear-black-and-white-32_545397b0-6da2-4c4b-bbaa-3544823ddcbb.jpg) Release Integration Pack** icon is disabled.

:::
