---
sidebar_position: 1
---

# Package Keys

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-0173d790-a7f4-40a9-9c7f-d3907570d4bb"/>
</head>

A Package Key is given to a developer to access a set of services, endpoints, and methods as defined in the respective Package Plan. A Plan associated with a Package Key can be replaced with another Plan in the same Package without changing the key string and without requiring a developer to change the application code. 

The main page of the **Package Keys** page displays a list of Package keys owned by the users in the system. 

The following table describes the default columns displayed in the list view on the **Package Keys** page. 

|**Column Name** |**Description** |
| ------------- | -------------- |
|Key|The key used by the associated developer to make API calls. |
|Application|The application associated with the key. |
|Status|<p>The status of a key. The following are the statuses: </p><p>- **Waiting:** This indicates that the key should be approved by an administrator. The Package key is unable to make successful API calls. </p><p>- **Disabled:** This indicates that the key is disabled. The Package Key is unable to make successful API calls. </p><p>- **Enabled:** This indicates that the key is active. The Package Key is able to make successful API calls, depending on the Plan setup. </p><p>To change the status, toggle between **Enabled** and **Disabled**. </p><p>:::note</p><p>After changing the status from **Waiting** to **Enabled** or **Disabled**, you cannot change the status back to Waiting.</p><p>::: </p>|
|Package Name|The Package associated with the Package Key. |
|Plan Name|The Plan associated with the Package Key. An API Plan defines the exact set of limits and entitlements governing access to the APIs in the system. |
|Username|The user name of the key-owner. |
|Created|The date and time when the key was created. |
|Updated|The date when the Package Key was last updated. |
|Actions| |
|![](../../Images/edit.jpg)|Click to modify the Package Key. The **Package Key Settings** page is displayed. You can modify the fields, as required. |
|![](../../Images/delete.jpg)|Click to delete the Package Key. A warning to delete the Package Key is displayed. For more information, see [Deleting Package Key](Deleting_package_keys.md). |

