---
sidebar_position: 6
---

# Creating and Managing Package Keys for Users

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-55dea058-3c6d-4f45-892f-fa67d1c0dcfe"/>
</head>

The Package Keys, sometimes simply referred to as keys, associated with a user can be created and managed on the **User** page. The **User** page can be viewed by clicking the user name or the display name. All Package Keys associated with a user are listed on the **User Package Keys** page. 

## To Create or Manage Package Keys

1. Go to **Manage > Users**. Or from the **Get Started** page, click **Users**. 

2. On the **Users** page, click a username.

3. In the left pane, click the **Package Keys** tab. 

   The **User Package Keys** page is displayed.

   The following table describes the columns displayed on the **User Package Keys** page. 

   |**Column Name** |**Description** |
   | -------------- | ----------- |
   |Key|The Package Key associated with the user. |
   |Application|The application for which the key is created. |
   |<p>Package-Plan</p><p> </p>|The Package name to which the plan is associated, and the Plan assigned to the Package Key. |
   |Status|<p>The status of a Package Key. The following are the statuses: </p><p>- **Enabled:** This indicates that the key is active. The Traffic Manager accepts API calls for the key. </p><p>- **Waiting:** This indicates that the key is created and pending for the approval. The Traffic Manager rejects API calls for the key. </p><p>- **Disabled:** This indicates that the key is disabled. The Traffic Manager rejects API calls for the key. </p><p>To change the status, toggle between **Enabled** and **Disabled**. </p><p>:::note</p><p>After changing the status from Waiting to Enabled or Disabled, you cannot change the status back to Waiting.</p><p>::: </p>|
   |Created|The date and time when the Package Key was created. |
   |Updated|The date and time when the Package Key was last updated. |
   |Actions| |
   |![](../../Images/edit.jpg)|<p>Click to modify the Package Key. The Package Settings page is displayed. For more information about Package Keys, see [Package Keys](../Packagekeys/Package_keys.md). </p><p>:::note</p><p>Once the Package Key is created, you cannot modify the Package key. You can only modify the Package Key settings.</p><p>::: </p>|
   |![](../../Images/delete.jpg)|Click to delete the Package Key. A warning to delete the application is displayed. For more information, see [Deleting Package Keys](../Packagekeys/Deleting_package_keys.md). |

4. To create a new package key for the user, click **New Package Key**.

5. In the **New Package Key** page, specify information in the following fields: 

   |**Field** |**Description** |
   | :-: | :-: |
   |User|This field is not available. |
   |Application|Select an application from the drop-down list corresponding to the selected user. |
   |Package|Select a package from the drop-down list. |
   |Plan|Select a plan from the drop-down list corresponding to the selected package. |
   |Generate a New Key|Enable the checkbox to have a system-generated key value. |
   |Create a Custom Key|Enable the checkbox to enter a customized key value in the **Custom Key field**. |

6. Click **Save and close** to finish creating the new Package Key. 
