---
sidebar_position: 2
---

# Adding Applications

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-492738a1-add9-45f4-9f8f-8460016d8abc"/>
</head>

Generally, developers create applications from the Portal. You can also create applications from the Dashboard to grant additional access to developers. To generate Package Keys for a user, an application should be created for that user, if the user does not have one, or if the applications already have the maximum allowed set of Package Keys. 

:::note

Package keys cannot exist without an associated application. 

:::

## Procedure

To add an application:

1. Click **Manage > Applications**. 

   The **Applications** page is displayed. 

2. On the **Applications** page, click **New Application**.

   The **New Application** pop-up window is displayed. 

3. On the **New Application** page, enter the following details. 

   |**Field** |**Description** |
   | -------- | ----------- |
   |Application Name|The application name. |
   |User|The user who owns the application. |

4. Click **Save and close** to finish creating the application for the user. 

   Or, click **Save and continue** to save the application, and open the **Generate keys** for this application pop-up window, where you can select a package and plan for the application, as well as create the keys for the same application.

   In the **Generate keys for this application** pop-up window, use the drop-down lists to select a **Package and plan** and **Package key type**, then specify a **Package key** value. Then, click **Save and close**. 

   :::note
   
   If the **Custom** option is selected, use the **Package key value** field to provide a value for key. If **Auto-generate** option is selected, the key value will be automatically generated. 

   :::
