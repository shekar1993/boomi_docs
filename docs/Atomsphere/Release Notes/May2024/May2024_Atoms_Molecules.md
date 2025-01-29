# Atoms, Molecules, and Atom Clouds

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-088a31a5-225e-4d32-9547-b49bc6775476"/>
</head>

**We added these features:**

- In our continued efforts to improve performance and stability for clustered runtimes, we made the following optimizations:

  - A copy of the Java runtime libraries (JRE/JDK) can now be automatically copied to local nodes, instead of using the shared file system. This eliminates latency and addresses the `NoClassDefFoundException` error reported by some customers running in Windows environments.

  - Configuring local storage is simplified, now with a single container property to enable copying of all applicable assets (e.g. working directory and temp files; JARs for runtime, connector, and custom libraries; and Java runtime).

  (RUN-3921)

  To learn more about this feature, refer to topics: [Molecule and Atom Cloud local storage](/docs/Atomsphere/Integration/Integration%20management/c-atm-Molecule_and_Atom_Cloud_working_data_storage_b18ef1af-1e37-4a33-8712-d600f4e7b29d.md) and [Properties panel, Basic tab](/docs/Atomsphere/Integration/Integration%20management/r-atm-Properties_panel_Basic_tab_8eb9b9cf-e371-44ba-897f-4232ce22f122.md)

- The following container properties for tuning the logger are now available in the Properties panel's Advanced tab:

  - **Logger Timeout** (`com.boomi.container.logging.timeOut`): Set a timeout period for log messages to be added to the logging queue. If the initial attempt fails, the log handler attempts to add the log after the timeout period. If the second attempt fails, the handler discards the message.

  - **Logger Queue Size** (`com.boomi.container.logging.queueSize`): Increase the size of the logging queue to allow a larger number of log statements. (RUN-6513)
