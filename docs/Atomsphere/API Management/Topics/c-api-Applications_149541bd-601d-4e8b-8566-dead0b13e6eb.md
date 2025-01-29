# Applications 

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-CD773426-39E9-4528-8B05-36C18DC340BE"/>
</head>


The **Configure APIs and Applications** \> **Applications** link in the API Management menu opens the Applications page, which is used to view and manage your Applications that allow entities to access an API.

Users create Applications which serve to allow another entity, such as a business unit or third-party application, to access the API. An API Key is generated for each subscription of the Application so that users can be authorized for specific API access with a specific Plan.

Applications are grouped by API Gateway.

**Name**  
 **Description**

**Search box**    
Use this to search for applications by application name or owner name. Search results respect the selected filter. For example, if in the Enabled view you search for an application named MyApp, only applications containing MyApp in their name with status Enabled will be listed.

**Application Name**  
The name of the registered application.

**Owner Name**  
The name of the application owner.

**Subscriptions**  
Indicates the number of total subscriptions for the Application, even if the subscriptions are disabled or expired. Click on the text in this field to add or modify a subscription.

Either you as the API publisher or the Developer Portal user as the API consumer can disable a specific subscription to an application. If you want to disable the subscription, click **Disabled by Publisher**. If you disable the subscription status, the Developer Portal user will be unable to enable it. However, if a Developer Portal user disables the subscription, you are able to enable it.

If the application status is disabled, you are unable to modify the individual subscription status.

**Date Created**  
The date that the application was created.
 
**Last Used**  
The last time an API was called on an Atom by this application.

**Status**  
Indicates whether the application is enabled or disabled. Click **Enabled** or **Disabled** to change the status.

Either you as the API publisher or the Developer Portal user as the API consumer can disable the application. If you want to disable the application, click **Disabled by Publisher** in the Application Status window. If you disable the application status, the Developer Portal user will be unable to enable it. However, if a Developer Portal user disables the application, which shows as **Disabled by Consumer**, you are able to enable it. As the API publisher, you cannot select **Disabled by Consumer** in the Application Status window.

When disabling the application status, the associated API Keys are disabled, but the subscription statuses are not modified. However, if the application status is disabled, you are unable to modify the subscription status.

**Remove**  
Click ![Delete icon](../Images/img-delete_icon_29151734-bc83-42b9-b115-9e227e434698.jpg) to delete the application.

Clicking on the name of an Application opens the Application page that allows you to edit the Application. 