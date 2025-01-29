# Authorizing as a QuickBooks REST API application 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-377974a3-4086-48d5-acc0-09f274dec2e9"/>
</head>


By authorizing Integration as a QuickBooks REST API application, you can use the QuickBooks Online REST API 2013 Edition.

## Before you begin

You must already have a QuickBooks Online account and you must have an Intuit developer account. You can create a developer account on the [Intuit Partner Platform](https://developer.intuit.com/us).

## About this task

If you are using the QuickBooks Online REST API 2013 Edition, you must use your Intuit developer account to access the QuickBooks Online REST API’s service endpoint and authorize as a REST API application.

## Procedure

1.  Log into the [Intuit Partner Platform](https://developer.intuit.com/us).

2.  Go to the **MyApps** tab.

3.  Click **Create New App**, then click **QuickBooks API**.

    The **Manage** tab is selected on the left and the **Create New QuickBooks API App** page opens.

4.  On the **Create New QuickBooks API App** page, enter the following information:

    1.  In **Name of App**, type boomi.

    2.  In **Host Name Domain**, type boomi.com.

    3.  In **App URL**, type https://platform.boomi.com.

    4.  In **Disconnect Landing URL**, enter https://platform.boomi.com.

    5.  In **Manage Users URL**, enter https://platform.boomi.com.

    6.  In **OpenID URL**, enter https://platform.boomi.com.

    7.  In **Data Source**, click the button in the **Read/Write** column next to **All Accounting**.

    8.  Click **Save**.

    The page is saved and the “boomi” page opens. It displays the App ID, Type, Created date and Modified date. The Development section also appears.

5.  Switch from Development to Production by clicking **Production**.

6.  In the **Production** section, click the **OAuth Consumer Key** and **OAuth Consumer Secret** to see their values. Copy these values. You need them when you create a QuickBooks Online REST API connection in .

    If you use the Production key and secret in your connection, you will have an unlimited number of connections. If you use the Development key and secret in your connection, the limit is 10 connections.

7.  Click **Save**.

   8.  Exit the Intuit Partner Platform.

       For Integration authorization, you do not need to complete the remaining steps for the various reviews. They are needed only by application vendors who are marketing their application to others in the Intuit marketplace.

## Next steps

After you authorize Integration as a REST API application on the Intuit site, you can generate an OAuth access token to authorize to connect to your QuickBooks Online account. Do this by creating a QuickBooks connection that uses the Online REST API and using that connection in your processes.