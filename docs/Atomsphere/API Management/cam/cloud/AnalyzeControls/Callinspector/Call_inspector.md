---
sidebar_position: 1
---

# Call Inspector

<head>
  <meta name="guidename" content="Cloud API Management"/>
  <meta name="context" content="GUID-a3134fad-8693-4c00-a046-5cedc641041e"/>
</head>


Call Inspector is a diagnostic feature that is used to trace API calls as they pass through the system. It gives detailed information about how requests and responses actually look as they pass through different points. Customers can use Call Inspector for such use cases as troubleshooting API calls or supporting new integrations. The API call data can be captured by enabling the call logs for a specified endpoint and time period. 

The following Area Level Control Center Roles can access the Call Inspector tab: 

- Administrator 

- Call Inspector Administrator 

- Call Inspector User 

:::note

An Area administrator can assign the Call Inspector Administrator and Call Inspector User roles to other users. 

:::

Following are the access restrictions for the various user roles: 

- The users with **Call Inspector Administrator **role are restricted to the Call Inspector tab. They cannot perform other administrative functions but can view the **Call Inspector** tab and its sub-tabs. 

- The users with **Call inspector User** role have access only to the [Viewer](Viewer/Viewer.md) sub-tab under **Call Inspector**. They cannot enable call capture as they do not have access to [Log Settings](Logsettings/Log-settings.md) sub-tab. 
