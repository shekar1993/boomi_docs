---
sidebar_position: 2
---

# Adding a Notification Email Template Set

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-467aca00-fa5b-4eda-8ba7-3c8f0fbae20f"/>
</head>

Different template sets can be created to notify different types of notifications. The template sets can be assigned to Plans. The developers are categorized based on the contract they have with API Management. The different categories of developers can then be notified efficiently using template sets. 

## Procedure

To add a template set:

1. On the **Notification Emails** page, click **Add Template Set**. 

   The **Email Template Set: (template set name)** page is displayed. 

2. Enter the name for the template set. 

   By default, the **Over Throttle** tab is selected. 

3. Complete the following fields. 

   |**Field** |**Description** |
   | ---- | ---- |
   |Send "From" Address|Email address from where the mails are sent to the developers. |
   |Subject|Subject name for the notification. |
   |Body|Notification message that developers receive. |

   :::note
   
   In the similar way, you can add other templates, such as **Near Quota Limit, Over Quota, and Key Registration**. The **Variables** panel displays the ready-made variables with brief description that can be used to create a template. 

   :::

4. Click **Save**. 

   By clicking **Clone**, an exact copy of the template set can be created. Any time during the process of creating templates, you can cancel the process by clicking **Cancel** or go back to the **Notifications Emails** page by clicking **Back to List**. 
