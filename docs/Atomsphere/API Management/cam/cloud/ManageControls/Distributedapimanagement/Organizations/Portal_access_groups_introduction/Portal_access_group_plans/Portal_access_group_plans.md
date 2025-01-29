---
sidebar_position: 1
---

# Portal Access Group Plans

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-1b6e97fc-c3b1-45ed-a9d1-0ce9a93381e5"/>
</head>

This page displays the Portal Access Group Plans. On the Developer Portal, the users in a specific Portal Access Group can apply for Package keys for the Package-Plans listed in the same Portal Access Group. Plans can belong to multiple Portal Access Groups in the same Organization. 

:::note

You cannot add Plans of different Organizations to the same Portal Access Groups. To add Plans to the Portal Access Group, the Plans and Portal Access Group must be owned by the same Organization. For the Portal Access Group of the parent Organization, you can add Plans that are owned by the Sub-Organization. However, Plans owned by the parent Organization cannot be added to the Portal Access Group of the Sub-Organization.

:::

An Administrator and an API Manager can add or remove Plans to the Portal Access Group, as follows: 

- **An Area Administrator and API Manager**: can add or remove Plans in the Portal Access Group. The Plans and Portal Access Group must be owned by the same Organization or its Sub-Organizations. 

- **An Organization Administrator and API Manager:** can add or remove Plans in the Portal Access Group. The Plans and Portal Access Group must be owned by the same Organization or its Sub-Organizations. 

- **A Sub-Organization Administrator and API Manager:** can add or remove Plans in the Portal Access Groups that belong to the Sub-Organization. The Plans and Portal Access Group must be owned by the same Sub-Organizations. 

## To view the Portal Access Group Plans page

1. Click **Manage > Portal Access Groups**. 

   The **Portal Access Groups** page displays a list of Portal Access Groups. 

2. Select a Portal Access Group from the Portal Access Group list. 

   The **Portal Access Group Overview** page is displayed. 

3. On the left pane, click **Plans**. 

   The **Portal Access Group Plans** page is displayed.

The following table describes the fields on the **Portal Access Group Plans** page. 

|**Field** |**Description** |
| --------- | ------------- |
|Plan Name|Name of the Package-Plan. |
|Organization|Name of the Organization that owns the Plans. |
|Action|Click ![](../../../../../Images/edit.jpg) on the Plan Settings page, where Plan properties can be modified. For more information, see [Plan Settings](../../../../../DesignControls/APIpackages/Creatingapiplans/API_plan_settings.md). |

