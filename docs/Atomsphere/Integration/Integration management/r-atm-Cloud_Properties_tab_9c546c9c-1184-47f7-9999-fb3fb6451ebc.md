# Cloud Properties tab 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-9c546c9c-1184-47f7-9999-fb3fb6451ebc"/>
</head>


Atom Cloud owners can set and manage Cloud properties and adjust the number of Atoms an account can set up in a Cloud.

The Cloud Properties tab appears on the Cloud Management page. When you click an Atom Cloud in the list, its properties appear on the tab. The Cloud Quotas section of the tab is used by the Cloud owner to determine how many Atoms an account can set up in this Cloud.

**Name**  
**Description**

**Cloud Name**  
User-defined name for the Atom Cloud. If your account owns the Atom Cloud you can change its name here or on the Atom Info tab.

**Cloud ID**  
Unique ID for the Atom Cloud.

**Allow Deployments**  
If selected, processes and deployable components can be deployed to this Atom Cloud. This feature is not applicable for Integration Packs.

**Allow Browsing**  
If selected, connector operations can use this Atom Cloud to browse and import objects.

When used with a private Atom Cloud, this property works in conjunction with the Allow Browsing property that is set in the Cloud Properties dialog:

-   If SELECTED on the Cloud Properties tab and SELECTED in the Cloud Properties dialog — Browsing is enabled for everyone.

-   If SELECTED on the Cloud Properties tab and CLEARED in the Cloud Properties dialog — Browsing is enabled for the Cloud owner but is disabled for Cloud tenants. Tenants see the Cloud in the list, but when they attempt to browse they receive an error.

-   If CLEARED on the Cloud Properties tab and CLEARED in the Cloud Properties dialog — Browsing is disabled.

-   If CLEARED on the Cloud Properties tab and SELECTED in the Cloud Properties dialog — Browsing is disabled.


**Allow Test Executions**  
If selected, process executions on this Atom Cloud can run in Test mode.

**Max. Atom Attachments per Account**  
The Atom Cloud owner can give to each account that shares this Atom Cloud the ability to set up additional Atoms in this Cloud. Enter the default number of Atoms that each account can set up. The default is 1. \(The account that owns the Cloud can set up as many Atoms as needed.\)

If you click the Add Quota icon, select an account, and enter a different number in the Cloud Quotas dialog, that number will override the number entered here.

**Classification**  
Used to indicate the type of Atom Cloud. The choices are Production or Test. The classification can be set only when you add an Atom Cloud. You cannot change it later.

The classification determines which type of license is used when a process is deployed to an environment attached to this Atom Cloud. If you want to use a Test Atom Cloud with test environments, you must have test connection licenses.

:::note

Atom Clouds added prior to the January 2014 release have their classification set to Production.

:::

**![Add Quotas](../Images/main-ic-plus-sign-white-in-green-circle-16_4dc8c5f3-e893-4aef-ade2-0b7afe9476c1.jpg) Add Quota**  
 Opens the Cloud Quotas dialog, in which you specify how many Atoms can be set up by a specific account in this Atom Cloud. You must select an account and enter a number. This number overrides the default number entered for all of your accounts in the Max. Atom Attachments per Account field.

**![Edit Quotas](../Images/main-ic-pencil-green-16_51e497cb-8c52-461c-a470-9584aaae44e6.jpg) Edit Quota**  
Used to change the maximum number of attached Atoms for the selected account.

**![Delete Quotas](../Images/main-ic-x-red-stylized-16_5cfc1d0e-0ef7-44cc-bacf-4b4116afca79.jpg) Delete Quota**  
Used to delete the maximum number of attached Atoms for the selected account.

**Account**  
A list of account IDs that allow a different number of maximum Atom attachments.

**Max. Atom Attachments**  
The number of maximum Atom attachments for the account ID.