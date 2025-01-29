---
sidebar_position: 2
---

# Organization Overview

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-cc6409e4-b85e-4137-adee-f2b16b0e63aa"/>
</head>

The O**rganization Overview** page displays an overview of the Organization. This page displays the following: 

- **Control Center Users:** The number of Control Center users who belong to the Organization is displayed. You can navigate to the Control Center Users page where you can add users to the Organization. 

- **Portal Access Groups:** The number of Portal Access Groups that belong to the Organization is displayed. You can navigate to the Portal Access Groups page where you can add Portal Access Groups to the Organization. 

- **API Packages:** The number of API Packages that belong to the Organization is displayed. You can navigate to the API Packages page where you can view the API Packages. While creating Packages you should specify the Organization that the Package belongs to. For more information, refer to [Creating a Package](../../../DesignControls/APIpackages/Creating_api_packages.md). 

- **API Definitions:** The number of API Definitions that belong to the Organization is displayed. You can navigate to the API Definitions page where you can view the API Definitions. While creating an API Definition, you should specify the Organization that the API Definition belongs to. For more information, refer to [Creating an API Definition](../../../DesignControls/APIdefinitions/Creating_api_definitions.md).

On the **Organization Overview **page, you can rename an Organization, delete an Organization, and add a description for the Organization. 

:::note

Only the Organization Administrator can access this page. 

:::

## To view an Organization Overview page:

1. Click **Manage > Organizations**. 

   The **Organizations** page displays a list of Organizations. 

2. Select an Organization in the Organization list. 

   The **Organization Overview** page is displayed.

The following table describes the fields on the **Organization Overview** page. 

|**Field** |**Description** |
| -------- | ------------ |
|Click to add Description|<p>Click **Edit** to modify the description of the Organization. </p><p>:::note</p><p>This field is visible only to Control Center users with the Administrator role in the Organization, in the parent Organization (in case of Sub-Organization) or the Area.</p><p>::: </p>|
|Control Center Users|Center users are users with certain permissions that allow them to modify the resources in the Organization. To know more about Control Center users, click Control Center Users. |
|Portal Access Groups|Portal Access Groups provide access to specific plans and APIs for specific users on the Developer Portal. To know more about Portal Access Groups, click Portal Access Groups. |
|API Definitions|API definitions are those that are owned and modifiable by users with API permissions in the Organizations. If necessary, the Organization ownership of each API can be changed on the [API Definition Settings](../../../DesignControls/APIdefinitions/API_definition_settings.md) page. To know more about API definitions, click **API Definitions**. |
|API Packages|API Packages are assembled from APIs owned by the Organization. To know more about API Packages, click **API Packages**. |

