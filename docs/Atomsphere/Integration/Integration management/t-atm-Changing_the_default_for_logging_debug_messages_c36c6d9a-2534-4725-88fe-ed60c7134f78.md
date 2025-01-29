# Changing the default for logging debug messages 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-c36c6d9a-2534-4725-88fe-ed60c7134f78"/>
</head>


Set the container property to change the level at which the container prints buffered debug messages.

## Before you begin

You must have the Atom Management privilege to perform this task. If you have the Atom Management Read Access privilege, you cannot perform the task.

## About this task

The Debug Log Level Threshold container property \(`com.boomi.container.debugThreshold`\) controls which log messages cause the container log to write buffered debug messages \(FINE level messages\). By default, this container property is not set, which means that an Atom will print buffered debug messages whenever a log message at the WARNING level or higher is written.

If you have a high-performance Atom, you may want to change this property to SEVERE to reduce superfluous logging. If set to OFF, debugging messages are never written to the container log.

## Procedure

1.  Select **Manage** \> **Atom Management**.

2.  Select the Atom from the list on the left.

3.  In Settings & Configuration, click **Properties**.

4.  Click the **Advanced** tab.

5.  To change the level at which the container prints buffered debug messages, select the **Debug Log Level Threshold** property and click **Add Property**.

6.  Do one of the following:

    -   To reduce the amount of debug messages, set the **Property Value** field to SEVERE.

    -   To stop logging debug messages, set the **Property Value** field to OFF.

7.  Click **Save**.

    Because changes to these properties do not take effect until the Atom is restarted, you are prompted to restart. You have the option to restart now or restart later.