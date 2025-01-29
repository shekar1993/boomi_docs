---
sidebar_position: 1
---

# Creating Package Keys

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-05328519-fc95-4df5-92b5-ba0b0d1e21e2"/>
</head>

A Package Key is generated when you create an application and associate it with one or more Packages. For more information, see [Applications](../../Applications/Applications.md). 

:::note

Package Keys cannot exist without an associated application. 

:::

**To create a new Package Key for an existing application:**

1. Go to **Manage > Package Keys**, or click on **Package Keys** from the Get Started page.

   The **Package Keys** page is displayed. 

2. On the Package Keys page, click **New Package Key**.

   The **Create a new package key** pop-up window is displayed. 

   In the **Create a new package key** pop-up window, specify information in the following fields: 

   |**Field** |**Description** |
   | -------- | -------- |
   |User|Enter or select a username for which you want to create the package key. |
   |Application|Select an application from the drop-down list corresponding to the selected user. |
   |Package|Select a package from the drop-down list. |
   |Plan|Select a plan from the drop-down list corresponding to the selected package. |
   |Generate a New Key|Enable the checkbox to have a system-generated key value. |
   |Create a Custom Key|Enable the checkbox to enter a customized key value in the Custom Key field. |

3. Click **Save and close**. 

   A Package Key for a specific application is created, and you should see a message that the Package Key was created successfully: 

   Refresh the page to see the newly-created Package Key. 

   :::note
   
   Once the Package Key is created, you cannot modify the Package Key. You can only modify the Package Key settings.

   ::: 
