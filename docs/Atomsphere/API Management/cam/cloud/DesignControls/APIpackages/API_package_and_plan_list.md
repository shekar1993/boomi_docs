---
sidebar_position: 5
---

# API Package and Plan List

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-1242c18e-eae8-4c29-9cf9-8964868b8c8d"/>
</head>

After an API Package is created, you can create, modify, and delete Plans associated with the Package on the **API Package & Plan List page**. While you are viewing or creating Plans, you can access the API Package related settings by using the navigational tabs on the left pane of the page. 

The API Package name, and date and time when the API Package was created are displayed on the page. The **New Plan** button displayed at the top-right corner of the **API Package & Plan List** page can be used to create new Plans. For more information, see [Creating a Plan](Creatingapiplans/Creating_api_plans.md). 

The following table describes the fields on the API Package & Plan List page. 

|**Field** |**Description** |
| -------- |------|
|Name|List of Plans that are sorted by the date and time of creation. |
|Status|<p>Displays the status of the plan as either **Active** or **InActive** that was set while creating or editing the plan: </p><p>- **Active:** The plan is enabled so that the Traffic Manager processes all the API calls according to the configuration rule. Calls made by developers, using a key for this Package Plan, are not blocked automatically. </p><p>- **InActive:** The plan is disabled so that all the API calls for the plan are blocked by the Traffic Manager. Developers who make calls with a key to this Package Plan receive a blocked call message. </p><p>:::note</p><p>The Traffic Manager continues to block the API calls until the Plan is Enabled.</p><p>::: </p>|
|Self-Service Keys|<p>Displays the **Self-Service Keys** status configured in the Key Properties of a plan. </p><p>- **Enabled:** Developers can get a key for a plan by themselves. </p><p>- **Disabled:** Developers cannot get a key for a plan by themselves. </p>|
|Admin Keys|<p>Displays the **Admin Keys** status configured in the Key Properties of a plan. </p><p>- **Enabled:** Administrators can generate an API key for developers. </p><p>- **Disabled:** Administrators cannot generate an API key for developers. </p>|
|Created|Date and time when the Plan was created. |
|Updated|Date and time when the Plan was last updated. |
|Actions| |
|![](../../Images/edit_2.jpg)|Navigates to the Plan Settings page, where Plan properties can be edited. For more information, see [Plan Settings](api-plan-settings.htm). |
|![](../../Images/delete%202.jpg)|Deletes a Plan. |

[ref1]: Aspose.Words.56a8fe2e-9f89-419a-bcec-c82d51d30a12.001.png
