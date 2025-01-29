# Importing with the QuickBooks Import Wizard 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-670cfc93-3d88-43a8-9dfb-3567c23be9af"/>
</head>


Using the **QuickBooks Import Wizard**, you define the web service object you are integrating based on a specified action.

## Procedure

1.  Create or open a QuickBooks operation component.

2.  In the **Connector Action** field, select either **Get** or **Send**.

3.  Click the **Import** button.

    The **QuickBooks Import Wizard** opens.

4.  Select a country: **Global**, **US**, **Canada** or **UK**.

    If you are using the QuickBooks Online REST API Edition, you must select **Global**.

5.  If you selected US, Canada or UK, select a QuickBooks Desktop or Online version.

6.  Click **Next**.

7.  Select an object type.

8.  Select an action.

    The actions vary based on the edition of QuickBooks and which object type you selected in the previous step.

    1.  If you are using QuickBooks Desktop or Online, the actions are: Add, Query, Modify \(Mod\), Delete \(Del\), and None.

    2.  If you are using the QuickBooks Online REST API Edition, the actions are: Create, Update, Get, Delete, and Query.

9.  Click **Next**.

10. Review the results and click **Finish**.