# Adding a QuickBooks Online REST API connection 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-df65f6d7-c0ff-4a70-839e-c7667cd7a436"/>
</head>


By adding a QuickBooks Online REST API connection, you authorize Boomi Integration to access QuickBooks Online data.

## Before you begin

To complete this task, you must have an authorized Boomi Integration as a QuickBooks REST API Application and your OAuth Consumer Key and OAuth Consumer Secret.

## About this task

QuickBooks Online REST API users need to authorize \(using `OAuth`\) Integration’s access to their QuickBooks Online data. You can do this by creating a QuickBooks connection that uses the Online REST API.

## Procedure

1.  In the Boomi Integration QuickBooks connection component, select the **QuickBooks Online REST API 2013** edition.

2.  Enter your OAuth Consumer Key.

3.  In the **Consumer Secret** field, select **Click to Set**, enter your Consumer Secret, and click **OK**.

4.  In the **Access Token** field, click **Generate**.

    The Generate OAuth Access Tokens dialog opens. The page referenced by the link in this dialog opens automatically in a new browser window.

5. **Optional:** If the browser does not allow pop-ups, open the link manually.

6.  On the external application page, type your sign-in credentials.

7.  Choose the QuickBooks company \(**boomi.com**\), and click **Authorize**.

    You receive a PIN and Company ID. Make a note of both because you need them in the following steps.

8.  Copy the PIN from the external application into the **PIN** field in the **Generate OAuth Access Tokens** dialog.

9.  Click **Next**.

    The **Generate OAuth Access Tokens** dialog closes and populates the **Access Token**, **Token Secret**, and **Token Expiration Date** fields.

10. Enter the Company ID.

11. Click **Save**.

## Results

After saving the connection and using it in a deployed process, its OAuth access token is available whenever Integration needs to access QuickBooks data.

The connection’s access token is valid until the date shown in the **Token Expiration Date** field. You can generate a new access token at any time and redeploy it in a process. A new access token does not affect the status of any existing tokens.