# Setting process options manually

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-54516828-d8fd-4bc7-a62a-6efcdd9a5fac"/>
</head>


Use the Process Options dialog to manually set process options.

## About this task

The Process Mode option determines how a process will execution regarding performance and logging. For more information about the different modes and typical use cases, see [Understanding execution modes](int-Understanding_execution_modes_2bc11045-c4a1-4601-b6fa-b1f81301e3e9.md).

## Procedure

1.  On the **Build** page, open a process.

2.  Do one of the following:

-   Click the **Options** link.

-   Click the Start step and in the Start step dialog, click the **Mode** link in the upper right.

    The Process Options dialog opens.

3.  Select a process mode: **General** or **Low Latency**.

    If the Services Enablement feature is not enabled in your account, the **Process Mode** list box will not be visible.

4.  Select or clear these options:

    -   **Allow Simultaneous Executions**

    -   **Auto Capture Errors/Warnings to Local Log**

    -   **Capture Run Dates**

    -   **Purge Data Immediately**

5.  If you selected **Low Latency**, select or clear **Only Generate Process Logs on Error**.

6.  Click **OK**.

    If you changed the process mode from **General** to **Low Latency**, a confirmation dialog opens.

7.  Click **OK**.

    The Start step dialog opens.

8.  In the **Connector** field, choose a connector.

9.  Click **OK** to confirm the change.