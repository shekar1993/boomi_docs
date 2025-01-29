---
sidebar_position: 1
---

# Organization API Definitions

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-11d4b0f7-32b8-4f04-905e-9aa752b480e2"/>
</head>

The **Organization API Definitions** page displays a list of API Definitions for a specific Organization and its Sub-Organizations, if any. You have to specify the Organization name while creating the API Definition. To add an Organization name to an API Definition, see [Creating an API](../../../../DesignControls/APIdefinitions/Creating_api_definitions.md). 

This page can be accessed by the Organization Administrator and the API Manager. 

The Organization Administrator can: 

- View and modify the API Definitions. 
- Change the Organization ownership of the API Definitions on the API Definition Settings page. 

On the Organization API Definitions page, the Organization Administrator can set the Control Center visibility of the APIs. The API Definitions in the Organization are made visible (read-only) to other Organizations. Hence, the users in the other Organizations can view the API Definitions for various business requirements. To know more about API Definitions, see [API Definitions](../../../../DesignControls/APIdefinitions/API_definitions.md) and [API Definition & Endpoint List](../../../../DesignControls/APIdefinitions/Endpoints/Endpoints.md). 

To add an API Definition to an Organization, see [Creating an API](../../../../DesignControls/APIdefinitions/Creating_api_definitions.md). 

## To view the API Definitions page

1. Click **Manage > Organizations**. 

   The **Organizations** page displays a list of Organizations. 

1. Select an Organization in the Organization list. 

   The **Organization Overview** page is displayed. 

1. On the left pane, click **API Definitions**. 

   The **Organization API Definitions** page is displayed.

The following table describes the fields on the **Organization API Definitions** page. 

|**Field** |**Description** |
| -------- | ---------- |
|API Definition Name|Name of the API Definition owned by the Organization. |
|Control Center visibility|<p>The Organization names for which the API definitions are visible. </p><p>The API Definitions in the Organization are made visible (read-only) to other Organizations. Hence, the users in the other Organizations can view the API Definitions for various business requirements. You can add multiple Organizations. </p><p>:::note</p><p>The API Definition can be modified only by the Administrator or API Manager of the Organization that owns the API. All other Organizations users (including the API Manager and the Administrator) in the Control Center visibility have read-only access to that API definition.</p><p>::: </p><p>To add Organizations to the Control Center visibility list, see [Control Center Visibility](./API_control_center_visibility.md). </p>|
|Organization|The Organization to which the API Definition belongs. |
|Actions| |
|![](../../../../Images/navigation.jpg)|Click > to navigate to the [Access Settings](../../../Users/AddingandRemovingRolesviaAccessSettings/Adding_and_removing_roles_via_access_settings.md) page where you can assign roles to the users. |
|![](../../../../Images/edit.jpg)|Click the settings icon to navigate to the [API Definition Edit](../../../../DesignControls/APIdefinitions/API_definition_settings.md) page. |

