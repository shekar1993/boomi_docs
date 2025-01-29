# Enabling trace logging for various connectors 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-848172d2-594b-4ea2-8d18-ab80b5375907"/>
</head>


Set an Atom property to capture additional request and response message logging.

## Before you begin

You must have the Atom Management privilege to perform this task. If you have the Atom Management Read Access privilege, you cannot perform the task.


## About this task

Sometimes a connector call in your process encounters errors. If you need more information than the error message supplies, or if you want an alternative to using Charles Proxy, you can set an Atom property to capture additional request and response message logging.

:::note

Trace logging is available only on local Atoms, Molecules, and private Atom Clouds. You cannot use trace logging if your processes run on a Atom Cloud.

:::
  
## Procedure

1.  Go to **Manage** \> **Atom Management**.

2.  Select the Atom from the list on the left.

3.  In Settings & Configuration, click **Properties**.

4.  Click the **Advanced** tab.

5.  Select the **Connector Trace Logging** \(connector.trace\) property, then click **Add Property** and type true in the Property Value field.

6.  Click **Save**.

    Because changes to this property do not take effect until the Atom is restarted, you are prompted to restart. You have the option to restart now or restart later.

7.  If the connector that you are debugging uses the HttpURLConnection, set up the HttpCapture rules configuration file. Create a file named http\_capture\_rules.txt and save it in the `<atom_installation_directory>/conf` directory. See the troubleshooting topic for information about how to add rules to the file.

## Next steps

Detailed message logging appears in the container log for *all connectors that use this Atom and that use one of the supported frameworks*. Only set this property to “true” for as long as you need to debug the connector. Leaving it on all the time floods your account with messages.