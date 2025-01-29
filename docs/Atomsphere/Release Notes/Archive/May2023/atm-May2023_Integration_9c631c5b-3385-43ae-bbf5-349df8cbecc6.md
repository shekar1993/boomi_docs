#  Integration

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-9c631c5b-3385-43ae-bbf5-349df8cbecc6"/>
</head>



**Features:**

-   QuickStart UI enhancements

    -   The wizard now includes intelligent recommendations to help with configuration of commonly connected apps and record types.
    -   Direct mappings from source and destination fields are now automatically mapped leveraging the power of Suggest.
    -   Various UI enhancements including responsive design and dark mode support.
    \(INT-7471, INT-7509, INT-7767\)

    To learn more about this feature, see topic: [ Creating a process from the Start tab](/docs/Atomsphere/Integration/Process%20building/int-Creating_a_process_from_the_start_tab_66623bfb-3e42-4c77-b6db-e82dc5a4f206.md)

-   The Tracked Field filter within Process Reporting’s Documents view has been enhanced to more easily find connector fields. \(INT-7521\)

    To learn more about this feature, see topic: [ Process Reporting search options and filters](/docs/Atomsphere/Integration/Integration%20management/r-atm-Process_Reporting_search_options_and_filters_fdf2fa4d-d62c-4cae-99be-603f5f185a40.md)

-   Component locking is now available to all accounts. Account administrators can self-enable this option for their account by toggling the ON/OFF button, then refreshing the page to view changes. \(INT-7593\)

    To learn more about this feature, see topic: [: Component locking](/docs/Atomsphere/Integration/Process%20building/c-atm-Component_locking_9c951ff5-186e-46eb-908e-bf32b55e87b2.md)

-   The Account Libraries limit is increased to 200MB for all accounts. \(INT-7779\)

    To learn more about this feature, see topic: [: Account Library settings](/docs/Atomsphere/Platform/r-atm-Account_Library_Management_edc37905-b4fe-4cae-8001-b62221adb872.md)

-   A new process mode called Bridge is available. Bridge mode is low latency and generates a process log. You can filter the Process Reporting table to show Bridge mode executions by using the **Bridge Listener Execution** option. \(RUN-4178\)

:::note

MLLP and FSS connectors currently do not support Bridge mode for process executions.

:::


To learn more about this feature, see the topics [Process Options dialog](/docs/Atomsphere/Integration/Process%20building/r-atm-Process_Options_dialog_97679f9e-1130-46ed-9937-8d1af5bcdbd5.md) and [Process Reporting page](/docs/Atomsphere/Integration/Integration%20management/r-atm-Process_Reporting_page_77bf7bfe-22a1-4085-b151-0c7ab829207f.md).


**Fixes:**

-   We corrected the issue where the child process component’s name in a process call step was not captured in the process log. The name is now always captured. \(INT-5337\)
-   We fixed the issue where notes were missing from processes on the first page load, requiring you to refresh in order to view them. You can now consistently view your notes. \(INT-7821\)
-   We corrected the issue where new process step category icons within the process step palette did not update when that option was Enabled in the User Preferences. Step palette icons now show correctly as per the User Preferences selection. \(INT-7862\)
-   We fixed the issue with Component Explorer not loading in some cases, due to an incorrect connection component configuration. \(INT-8157\)
-   For WSS listeners running in Bridge mode, the quota mode will not override the process mode, so the listeners remain in Bridge mode regardless of what the quota mode is set to. You can also use the debug header to set WSS listeners running in Bridge mode to Low Latency Debug. \(RUN-5369\)




