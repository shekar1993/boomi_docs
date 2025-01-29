# Working with an API after being granted access 

<head>
  <meta name="guidename" content="API Management"/>
  <meta name="context" content="GUID-49fd3f32-e3fc-410a-aafe-78479d502c43"/>
</head>


After requesting access to an API, the API owner must validate your request and attach a contract to it to set your access limits.

## About this task

There is no current in-application messaging system that will notify you when your request is approved. Therefore, you should communicate with the owner of the Developer Portal to know when the request is approved. Otherwise, monitor the Subscriptions page to see when an approved subscription appears.


## Procedure

1.  From the Developer Portal, click **Subscriptions**.

    A list of your subscriptions appears.

2.  Click on the name of your subscription.

3.  Then, click on the API Name to open the relevant subscription details page.

4.  On the Subscriptions page for the API, notice the API Key displayed with a copy button next to the box.

5.  Copy the API Key to the clipboard by clicking **Copy**.

6.  Then, specify the API Key in the X-API-Key header field to access the API. 