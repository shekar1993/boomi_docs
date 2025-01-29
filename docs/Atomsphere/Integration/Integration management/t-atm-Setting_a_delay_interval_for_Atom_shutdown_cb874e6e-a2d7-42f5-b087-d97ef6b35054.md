# Setting a delay interval for Atom shutdown 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-cb874e6e-a2d7-42f5-b087-d97ef6b35054"/>
</head>


Set the amount of time an Atom pauses before shutting down.

## Before you begin

You must have the Atom Management privilege to perform this task. If you have the Atom Management Read Access privilege, you cannot perform the task.

## About this task

During the delay interval the Atom is still running, but the status endpoint `\(http://<host\>:<port\>/\_admin/status\)` returns an HTTP status code of 503 Service Unavailable. This status indicates that the Atom is not ready to accept new requests.

## Procedure

1.  In the **Manage** menu, select **Atom Management**.

2.  Select the Atom from the list on the left.

3.  In Settings & Configuration, click **Properties**.

4.  On the **Advanced** tab:

    1.  Select the **Atom Pending Shutdown Delay** property and click **Add Property**.

    2.  In the **hr** \(hours\), **min** \(minutes\), **sec** \(seconds\), and/or **ms** \(milliseconds\) fields, type a value\(s\) to specify the amount of time that the Atom should pause.

        The default is 0 milliseconds, which means there is no delay before the Atom shuts down. There is no upper limit.

5.  Click **Save**.

    Because changes to this property do not take effect until the Atom is restarted, you are prompted to restart. You have the option to restart now or restart later.