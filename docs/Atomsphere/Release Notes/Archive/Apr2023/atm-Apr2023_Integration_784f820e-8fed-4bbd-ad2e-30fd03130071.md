#  Integration

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-784f820e-8fed-4bbd-ad2e-30fd03130071"/>
</head>



## Process Building 

Features:

-   We added a tile in the Start Tab called “**What apps do you want to connect**” to launch our new Quick Start wizard. This wizard lets you quickly begin automating data between applications with a few simple questions. Choose the source and target applications along with the record types you integrate, and the wizard automatically generates a process for you. You can always customize the process further as needed.\(INT-7380\)

    To learn more about this feature, see topics: [Creating a process from the Start tab](/docs/Atomsphere/Integration/Process%20building/int-Creating_a_process_from_the_start_tab_66623bfb-3e42-4c77-b6db-e82dc5a4f206.md), [ Build page layout](/docs/Atomsphere/Integration/Process%20building/c-atm-Build_page_layout_e1655cb0-e4da-47cf-bf55-11cc37f0b32f.md)

-  We updated and streamlined the connector choosers throughout the Process designer, including connector steps, connector calls for parameters values and functions, and component creation screens. (INT-7426, INT-7427, INT-7428)

    To learn more about this feature, see topic: [Connectors](/docs/Atomsphere/Integration/Connectors/c-atm-Connectors_bb305b35-0f13-4937-a918-f85dbbe1b27b.md)

-   You can now easily opt-in to use the new process step icons from the step palette. \(INT-5326\)

    To learn more about this feature, see topic: [Process building](/docs/Atomsphere/Integration/Process%20building/c-atm-Process_building_b422a00a-b17b-4ea8-ae01-d04adaf97e16.md)


Fixes:

-   We fixed the issue where test mode executions requests were occasionally not starting or updating in the UI. \(INT-7795, INT-7384\)


Known issue:

-   Fixes to test mode execution requests introduced a new issue, causing an indefinite spin at the start step during test mode.

This issue will be fixed in INT-7924.

