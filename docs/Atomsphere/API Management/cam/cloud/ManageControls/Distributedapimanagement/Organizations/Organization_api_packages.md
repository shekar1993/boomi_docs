---
sidebar_position: 7
---

# Organization API Packages

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-00b9ae30-c357-4933-8fd8-ec6ebb1b4e89"/>
</head>

API Packages are collection of APIs that are owned by an Organization. The **Organization API Packages** page displays a list of API Packages for a specific Organization and its Sub-Organizations, if any. You have to specify the Organization name while creating the API Package. To add an Organization name for an API Package, see [Creating a Package](../../../DesignControls/APIpackages/Creating_api_packages.md). 

This page can be accessed by the Organization Administrator. 

The Organization Administrator can: 

- View and modify the API Packages.

- Change the Organization ownership of the API Packages from the API Package Settings page. 

  :::note
  
  To change the Organization ownership of the API Packages, you should be the Administrator or the API Manager of both the Organizations: the one that currently owns the APIs and the one that would own the APIs after the ownership is changed. 

  :::

An Area Administrator can create API Packages from APIs that belong to various Organizations. These Packages are available at the Area level. An Organization Administrator can create Packages from APIs that are owned by the Organization and Sub-Organization. A Sub-Organization Administrator can create API Packages from APIs that are owned by the Sub-Organization. 

To add API Packages to an Organization, see [Creating a Package](../../../DesignControls/APIpackages/Creating_api_packages.md). 

## To view the API Packages page

1. Click **Manage > Organizations**. 

   The **Organizations** page displays a list of Organizations. 

1. Select an Organization in the Organization list. 

   The **Organization Overview** page is displayed. 

1. On the left pane, click **API Packages**. 

   The **Organization API Packages** page is displayed.

The following table describes the fields on the **Organization API Packages** page. 

|**Field** |**Description** |
| ----------- | ------------ |
|API Package Name|Name of the API Packages. |
|Organization|The Organization name that owns the API Packages. |
|Actions| |
|![](../../../Images/navigation.jpg)|Click > to navigate to the API Packages page. You can create Plans. For more information, see [Creating a Plan](../../../DesignControls/APIpackages/Creatingapiplans/Creating_api_plans.md).|
|![](../../../Images/edit.jpg)|Click the settings icon to modify the API Package Settings, API Package Key Properties, and API Package Notification Settings. |


