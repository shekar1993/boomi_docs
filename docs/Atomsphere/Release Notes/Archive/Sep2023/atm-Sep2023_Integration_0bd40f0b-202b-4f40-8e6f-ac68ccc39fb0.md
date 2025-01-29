#  Integration

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-0bd40f0b-202b-4f40-8e6f-ac68ccc39fb0"/>
</head>



**We added these features:**

-   In the Quick Start wizard, the text in the progress bar was changed from *Connecting to Recommendations* to *Generating Recommendations*. \(INT-9727\)
-   New component and process state icons. You can enable these in your User Preferences. \(INT-6232\)
-   Enhanced keyword mappings search in the step palette. \(INT-9551\)
-   For better accuracy, we renamed the column names in the Connection Licensing table. *Atom\_id* and *atom\_name* are now *container\_id* and *container\_name*. \(INT-9509\)
-   New Connection licensing objects to the Boomi connectors. \(INT-9092\)

**We fixed these issues:**

-   When refresh takes longer than two seconds, you now see a refresh icon, rather than a blank page. \(INT-6258\)
-   The magnifying glass icon no longer spins when searching for a component. \(INT-9537\)
-   The step description box now closes correctly when navigating to a new window. \(INT-7912\)
-   Downgraded a misleading SEVERE level container log error to a FINE level error when loading components in the Molecule container. \(INT-8184\)
-   The platform now generates a token for component download access for use during deployments. This prevents unnecessary duplicate access checks during integration pack deployment and improves platform health. \(INT-9565\)