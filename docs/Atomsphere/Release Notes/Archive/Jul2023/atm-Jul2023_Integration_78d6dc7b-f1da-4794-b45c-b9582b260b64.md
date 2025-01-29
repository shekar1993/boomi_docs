#  Integration

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-78d6dc7b-f1da-4794-b45c-b9582b260b64"/>
</head>


Integration features and fixes are not in the Runtime Release


**Features:**

-   We improved the visibility and feel of the QuickStart wizard with the following UI/UX enhancements:

    -   The existing connection component choose uses a new style.
    -   Based on your selection in the “select source app” commonly paired applications are now also recommended in the “select target app” as part of the Most Commonly Used recommendations, using data and order structure from the Intelligence team.
    -   The Map component now has a new option that lets you reset the mappings, if you are not happy with the outcome of your mappings or the Suggest mappings.
    -   The wizard now displays a banner that shows you the top 500 record types when Action type that has more than 500.
    -   Recommendations in the Record Type dialog box now display based in the order categorized by Intelligence recommendations.
    -   Suggest now adds mappings to functions, in additon to the mappings from source to target
  
    \(INT-7936, INT-7473, INT-8064, INT-7898, INT-8248, INT-8251, INT-8373\)

    To learn more about this feature, see topic: [Creating a process from the Start tab](../../Integration/Process%20building/int-Creating_a_process_from_the_start_tab_66623bfb-3e42-4c77-b6db-e82dc5a4f206.md)

-   While maintaining your map’s existing functionality, we added a setting that allows you to ignore the input data constraint to a map function when working with the following properties function types.

    -   Get Process Property

    -   Get Dynamic Process Property

    -   Get Document Property

    This will allow the map to function to execute even if it is linked to a document element that does not exist. \(INT-3509\)

    To learn more about this feature, see topics: [Map Function components](../../Integration/Process%20building/Process%20components/r-atm-Map_Function_components_d209f3e8-3094-42de-a504-2f2dc33ab15c.md), [ c-atm-Process_Property_components.html](../../Integration/Process%20building/Process%20components/c-atm-Process_Property_components_0b0a1f0f-d712-4087-a163-35dcdc214e7a.md), and [ c-atm-Document_Properties.html](../../Integration/Process%20building/Properties/c-atm-Document_Properties_8d6971ff-fcda-49ff-8c3d-e6a5c716c329.md)

-   We made multiple improvements to the usability of the **Connector List**, such as an enhanced cache mechanism and updating the **Connector Usage Dashboard** to display the connector name, rather than the connector type. \(INT-7438\)
-   We added validation to the **Component Tree** folder generation so that it now catches invalid data before it affects the User Interface. \(INT-8140\)
-   We improved the installation process for ipacks. You can now download and install quickly and efficiently. \(INT-9035\)
-   We enhanced the bus libraries to ensure that the execution-history-ingestion service works as intended. \(INT-7270\)

**Fixes:**

-   We corrected several issues within the QuickStart wizard:

    -   We corrected the error that cut off the second line of recommended connector names.

    -   The erroneous pop-up no longer appears when you open operations created by QuickStart.

    -   In QuickStart, when creating a new process using **Salesforce**, the **Record Type** option used previously was pre-selected. This issue is now fixed and the field is reset to its default value.

    -   We corrected the defect where some users with root folder read/write permissions were not able to see and work on QuickStart.

    -   Erroneous double line above “All” recommendations in the Record Type dialog box was removed.
    -   We corrected the issue where the recommended section of the Recents panel was cut off at the bottom.
  
    \(INT-8240, INT-8246, INT-8256, INT-9039, INT-8345, INT-8120\)

-   Error messages no longer appear when user tries to access **Data Maps** under **Environment Extensions** for a Single Ipack and Multi install Ipack. \(INT-6080\)
-   We corrected an issue affecting **MS Azure SQL Data Warehouse** and **MS Azure SQL Database** connectors. The **Create New** button now creates the correct connector types when using the Inline add step button and the Connector chooser. \(INT-8346\)
-   We corrected an issue on the Document Reporting Page that caused ODETTE's tracked fields to not be visible on Tracked Field filter when this option is applied. \(INT-9049\)
-   We fixed the issue that caused connectors to be returned in a larger volume than an account was allowed to use. \(INT-8224\)
-   We corrected the issue where the initial selection of a connector from the Step Palette did not load its icon in the configuration panel. \(INT-7915\)
-   Corrected the displayed name in the **Connector Type** filter tab. \(INT-9118\)
-   We corrected the issue where deploying ipack components caused a redeployment of all components when just one failed. Now you are able to re-deploy only the failed component\(s\). \(INT-9191\)
-   In an effort to minimize confusion between the connection licenses provisioned and those entitled to your account based on your contract, we've removed the **Purchased** column from the connection licensing page. We'll be augmenting this page in an upcoming release with a more in-depth licensing report to help provide additional visibility and clarity. INT-9360