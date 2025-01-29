---
sidebar_position: 7
---

# API Package Notification Settings

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-55f322d9-8465-4cdf-a96a-55d3d978c349"/>
</head>

The notification emails assist developers and administrators to avoid service discontinuity, which occurs when quota or throttle limits for a particular Package Plan are exceeded. You can define distinct settings for developers and administrators on the **Notification Settings** page. 

The following table describes the fields on the **API Package Notification Settings** page. 

|**Field** |**Description** |
| ------ | ------ |
|Notification Period for Developers|<p>Notification email is sent to developers according to the option selected. The available options are **Minute, Hour, Day, Week, and Month**. </p><p>For example, if you select the option **Day**, and a notification event occurs on that day, then only one notification email is sent to the developer. </p><p>If you select the option **Hour**, and a notification event occurs in the hour, then only one notification email is sent to the developer every hour. </p>|
|Send Notification Near Quota Limit|Email notification is sent to the developer and the administrator when the developer has reached the specified percentage of quota. |
|Warn when above selected percentage of Quota|<p>The near-quota limit that can be set as a percentage value. </p><p>For example, If you enter the percentage as 70%, an email notification is sent when the developers utilizes **70%** of the quota. </p>|
|Send Notification Over Quota Limit|Email notification is sent to the developer when the developer exceeds the quota limit. |
|Send Notification Over Throttle Limit|Email notification is sent to the developer when the developer exceeds the throttle limit. |
|Notification Period for Admins|<p>Notification email is sent to administrators according to the option selected. The available options are **Minute, Hour, Day, Week, and Month**. </p><p>For example, if you select the option Day, and a notification event occurs on that day, then only one notification email is sent to the administrator. </p><p>If you select the option Hour, and a notification event occurs in the hour, then only one notification email is sent to the administrator every hour. </p>|
|Developer Near Quota - Admin Notification|Email notification is sent to the administrator when the developer reaches the near quota limit. |
|Developer Over Quota - Admin Notification|Email notification is sent to the administrator when the developer exceeds the quota limit. |
|Developer Over Throttle - Admin Notification|Email notification is sent to the administrator when the developer exceeds the throttle limit. |
|Admin Emails|Allows you to enter administrator email addresses to which data will be sent. The field allows a comma-separated list of admin email addresses. |

