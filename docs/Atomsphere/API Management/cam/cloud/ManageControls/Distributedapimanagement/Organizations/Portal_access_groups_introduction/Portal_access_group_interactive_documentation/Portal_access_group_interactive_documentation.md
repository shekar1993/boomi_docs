---
sidebar_position: 1
---

# Portal Access Group Interactive Documentation

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-339581f1-1500-4039-a609-978ef6d70a66"/>
</head>

This page displays the Portal Access Group Interactive Documentation. On the Developer Portal, the users in a specific Portal Access Group can view and interact with the Interactive Documentation listed on this page. 

:::note

You cannot add Interactive Documentation items of different Organizations in the same Portal Access Groups. To add Interactive Documentation to the Portal Access Group, the APIs for which the Interactive Documentation is created and the Portal Access Group must be owned by the same Organization. For the Portal Access Group of the parent Organization, you can add Interactive Documentation of the APIs that are owned by the Sub-Organization. However, Interactive Documentation of the APIs owned by the parent Organization cannot be added to the Portal Access Group of its Sub-Organization.

:::

An Administrator and an API Manager can add or remove Interactive Documentation items to the Portal Access Group, as follows: 

- **An Area Administrator and API Manager**: can add Interactive Documentation to the Portal Access Groups, that belong to specific Organizations and its Sub-Organizations. To add Interactive Documentation to the Portal Access Group, the APIs for which the Interactive Documentation is created and the Portal Access Group must be owned by the same Organization or its Sub-Organization. 

- **An Organization Administrator and API Manager:** can add Interactive Documentation to the Portal Access Groups that belong to specific Organizations and its Sub-Organizations. To add Interactive Documentation to the Portal Access Group, the APIs for which the Interactive Documentation are created and the Portal Access Group must be owned by the same Organization or its Sub-Organization. 

- **A Sub-Organization Administrator and API Manager:** can add Interactive Documentation to the Portal Access Groups that belong to the Sub-Organization. To add Interactive Documentation to the Portal Access Group, the APIs for which the Interactive Documentation are created and the Portal Access Group must be owned by the same Sub-Organization. 

## To view the Portal Access Group Interactive Documentation page

1. Click **Manage > Portal Access Groups**. 

   The **Portal Access Groups** page displays a list of Portal Access Groups. 

2. Select a Portal Access Group from the Portal Access Group list. 

   The **Portal Access Group Overview** page is displayed. 

3. On the left pane, click **Interactive Documentation**. 

   The **Portal Access Group Interactive Documentation** page is displayed.

The following table describes the fields on the **Portal Access Group Interactive Documentation** page. 

|**Field** |**Description** |
| -------- | --------- |
|Interactive Documentation Name|Name of the Interactive Documentation. |
|Organization|Name of the Organization that owns the Interactive Documentation. |
|Action|Click ![](../../../../../Images/edit.jpg) to display the **Edit Interactive Documentation** page, where Interactive Documentation can be edited. For more information, see [Importing and Editing Interactive Documentation](../../../../../DesignControls/Interactivedocumentation/Creating_and_editing_interactive_documentation_for_an_api_definition.md). |

