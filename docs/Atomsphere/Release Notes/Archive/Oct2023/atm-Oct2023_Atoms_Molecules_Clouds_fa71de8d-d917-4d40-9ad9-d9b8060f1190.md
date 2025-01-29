# Atoms, Molecules, and Atom Clouds

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-fa71de8d-d917-4d40-9ad9-d9b8060f1190"/>
</head>


**We added these features:**

- You can add the following container properties to streamline the logging process during executions:

  - com.boomi.container.logging.queueSize - Increase the size of the logging queue to allow a larger number of log statements.
  - com.boomi.container.logging.timeOut - Set a timeout period for log messages to be added to the logging queue. If the initial attempt fails, the log handler attempts to add the log after the timeout period. If the second attempt fails, the handler discards the message.

  (RUN-5035)

  To learn more about these features, see the topic [Properties panel, Custom tab](/docs/Atomsphere/Integration/Integration%20management/r-atm-Properties_panel_Custom_tab_5fa074ca-cada-4746-946d-42b20c67cf74.md).

- You can set the container property com.boomi.container.forceRestart.cancelQueueExecutions to TRUE to cancel Atom queue listener executions that run longer than the value set in com.boomi.container.forceRestart so that the Atom Restart Thread is not blocked when Cloud nodes are restarting. (RUN-5748)

  To learn more about this feature, see the topic [Properties panel, Basic tab](/docs/Atomsphere/Integration/Integration%20management/r-atm-Properties_panel_Basic_tab_8eb9b9cf-e371-44ba-897f-4232ce22f122.md).