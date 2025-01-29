#  Integration

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-5b53521d-56d0-4bbd-b30a-855239426aab"/>
</head>



**Features:**

-   We improved the visibility and feel of the Quick Start wizard with the following UI/UX enhancements:

    -   Added a new indicator that displays the progress of your process creation.
    -   Processes created with Quick Start are now stored under Quick Start, in their own folder, specific to each user account; for better organization and easier findability.
  
    \(INT-8061, INT-8294\)

-   We reimplemented and enhanced the keyword mappings search for Connectors in the connector chooser, step palette, quickstart, and step adder. Now direct text matches show up first, followed by keyword matches. We also enhanced the keyword mappings in the step and component chooser to behave in the same manner. \(INT-9044\)

    To learn more about this feature, see topic: [Adding steps to a process](../../Integration/Process%20building/t-atm-Adding_shapes_to_a_process_e3e49675-225a-4591-b5c9-a559aa4c045a.md)

-   We enhanced the integration pack deployment process to retry download attempts if the authorization token expires. Atoms now retry download attempts until it is successful. \(INT-9192\)

    To learn more about this feature, see topics: [ Integration pack development](c-atm-Integration_pack_development_1dbd79c2-3cca-4456-aab8-3f8dc37b191a.md), [Deployments page](int-Deployments_page_5c7e1d3c-ba1c-470e-9f96-2ac61bc70ab4.md), and [ Deploying packaged components](int-Deploying_packaged_components_7fbf095e-2d5b-4abe-bed8-44e1873014de.md).

-   We improved the user experience by making logging in and switching between accounts faster and more efficient. \(INT-7695\)

**Fixes:**

-   We corrected several issues within the Quick Start wizard:

    -   The ‘verifying credentials’ pop-up no longer remains visible when closing the pop-up.
    -   The Connector Editor dialog box closes as expected when you click the X icon.
    -   Mapping results no longer miss the suggested default value in the created function.
  
    \(INT-8203, INT-9301, INT-9305\)

-   Corrected the issue that caused Process Execution details to not appear when clicking on the time stamp from the process reporting page. \(INT-9473\)