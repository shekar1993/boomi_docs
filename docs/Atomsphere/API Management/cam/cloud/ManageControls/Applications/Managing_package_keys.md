---
sidebar_position: 5
---

# Managing Package Keys

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-8dd8347d-09aa-42f6-a9bf-7f62f0d353b8"/>
</head>

The Package Keys associated with an application can be managed on the application information page. 

## Procedure

To manage the Package Keys:

1. On the **Applications** page, click the application name. 

   The **Application Settings** page is displayed. 

2. In the left pane, click the **Package Keys** tab. 

   The Package Keys associated with the applications are listed.

   The following table describes the fields on the **Application's Package Keys** page. 

   |**Column Name** |**Description** |
   | -------------- | ----------- |
   |Key|The Package Key associated with the application. |
   |Package-Plan|<p>The Package associated with the application. </p><p>The Plan under the Package for which the key is currently assigned. </p>|
   |Status|<p>The status of a key. The following are the statuses: </p><p>- **Waiting:** This indicates that the key needs to be approved by an administrator. The Package Key is unable to make successful API calls. </p><p>- **Disabled:** This indicates that the key is disabled. The Package Key is unable to make successful API calls. </p><p>- **Enabled:** This indicates that the key is active. The Package Key is able to make successful API calls, depending on Plan setup. </p><p>To change the status, toggle between **Enabled** and **Disabled**. </p><p>:::note</p><p>After changing the status from **Waiting** to **Enabled or Disabled**, you cannot change the status back to **Waiting**.</p><p>::: </p>|
   |Created|The date when the Package key was created. |
   |Updated|The date when the Package key was last updated. |
   |Actions| |
   |![](../../Images/edit.jpg)|<p>Click to modify the Package Key settings. The Package Key Settings page is displayed. You can modify the fields, as required. </p><p>:::note</p><p>Once the Package Key is created, you cannot modify the Package Key. You can only modify the Package Key settings.</p><p>::: </p>|
   |![](../../Images/delete.jpg)|Click to delete the Package Key. A warning to delete the Package Key is displayed. For more information, see [Deleting Package Keys](../Packagekeys/Deleting_package_keys.md). |

3. In the **Key** field, click the Package Key or click ![](../../Images/edit.jpg). 

   The **Package Keys Settings** page is opened. For more information about Package Keys, see [Package Keys](../Packagekeys/Package_keys.md). 


