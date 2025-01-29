# Enabling debug and trace logging in an Atom

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-eb1edc08-109f-4608-bcb6-348dea654eb4"/>
</head>

Set Atom properties to enable debug logging, trace logging, or both.

## Before you begin

You must have the Atom Management privilege to perform this task. If you have the Atom Management Read Access privilege, you cannot perform the task.

## About this task

Use debug and trace logging to output and examine debug statements and trace messages to help with troubleshooting issues. The two types of logging work in conjunction with each other as follows:

- By default, both debug logging and trace logging are disabled in an Atom. The default logging will include SEVERE, WARNING, and INFO log messages \(no FINE, FINER, or FINEST\). When a WARNING or SEVERE log message is generated, related debug messages will also be generated in the range from SEVERE to FINE.

- If debug logging is enabled and trace logging is disabled, logging will include SEVERE to FINE log messages (no FINER or FINEST).

- If trace logging is enabled, debug logging is enabled automatically. Logging will include all message levels, from SEVERE to FINEST.

  If connector trace logging is enabled (by setting the Connector Trace Logging property to true), container trace logging is enabled automatically. For more information, see the topic [Connector troubleshooting](./c-atm-Connector_troubleshooting_a9354e4d-0c45-4402-8de9-b582f66a6403.md).

:::info Important

Enable debug logging or trace logging only for troubleshooting. Disable debug and trace logging immediately after completing troubleshooting. Leaving this enhanced logging enabled during general operations can adversely affect the Atom’s performance.

:::

## Procedure

1. Select **Manage** \> **Atom Management**.

2. Select the Atom, Molecule, or Cloud Molecule from the list on the left.

3. In Settings & Configuration, click **Properties**.

4. In the Properties panel, click the **Advanced** tab.

5. Depending on the level of logging that you want to enable, do one of the following:

   - Select the **Enable Debug Logging** property \(`com.boomi.container.debug`\), click **![A small blue circle with a white plus sign in the center](../Images/main-ic-plus-sign-white-in-blue-circle-16_98f7af60-dd5f-4037-90cd-05cc9dfc5502.jpg) Add a Property**, and select its Property Value check box.

     Debug logging is enabled, but trace logging remains disabled.

   - Select the **Enable Trace Logging** property \(`com.boomi.container.trace`\), click **![A small blue circle with a white plus sign in the center](../Images/main-ic-plus-sign-white-in-blue-circle-16_98f7af60-dd5f-4037-90cd-05cc9dfc5502.jpg) Add a Property**, and select its Property Value check box.

     Both trace logging and debug logging are enabled.

6. Click **Save**.

    Because changes to this property do not take effect until the Atom is restarted, you are prompted to restart. You have the option to restart now or restart later.
