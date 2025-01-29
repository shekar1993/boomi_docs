---
sidebar_position: 1
---

# Configuring the Content Management System

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-d6c9a83f-b7f9-48f5-922d-cbabfff5e374"/>
</head>

The **Content Management System** page allows you to add, modify, or delete custom HTML pages for your Developer Portal. 

The **Content Management System** page has a built-in WYSIWYG editor that is enriched with formatting tools similar to any word processing program. The **Preview** feature in Configuration Manager redirects you to that specific revision of that portal page. A separate style sheet and JavaScript can be customized and added to every page, thereby providing specific look-and-feel and even functionality. You can add role-based permissions to control who can view the pages. 

## Creating Custom Pages

1. On the **Content Management System** page, click **Add New Content**. 

   A page is added to the **Custom Pages** folder in the Draft mode.

2. Specify the **Type** as **Pag**e.

3. Enter the page title in the **Title** field. 

4. Specify a **Path** for this page. 

5. Select the roles that have access to this page in the **Access Permissions** field. 

6. In the **Organization** field, use the dropdown to select the **Area Level** that has access to this page. 

:::note

For more information on organizations, see [Managing Organizations](../Managing_organizations.md). 

:::

7. In the **Parent** field, use the dropdown to select the parent page. 

8. In the **Order** and **Page** fields, use the dropdowns to place the page **Above** or **Below** an existing page.

9. Click **Save** to create the page. 

10. In the **Body Content** field, enter the text. Using the editor, you can format the text. 

:::note

In the **Advanced options** section, you can modify the following options for the page: 

   - URL path 

   - Access permissions

   - Organization settings 

   - Page status 

   - Page hierarchy 

For more information, see [Setting Advanced Options](../Configure_the_CMS/Setting_advanced_options.md). 

:::

11. Click **Preview** to view this version of the page on the Developer Portal. 

:::note

The links to **Preview** are portable, so long as the recipients are supposed to have access; otherwise, they get a 404 error message. 

:::

12. Click **Publish** to publish the page on the Developer Portal. 

## Adding a Folder

To add a folder, click **New**, specify the **Type** as Page, then specify a **Title** for the folder. 

## Adding a Page to a Folder

To add a page to a folder, click the folder, then click **New**. 
