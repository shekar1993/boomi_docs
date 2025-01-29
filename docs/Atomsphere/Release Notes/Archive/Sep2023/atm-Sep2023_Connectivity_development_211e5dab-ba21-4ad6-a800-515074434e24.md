# Connectivity development 

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-211e5dab-ba21-4ad6-a800-515074434e24"/>
</head>


## Connector Release Scheduling updates 

**We fixed these issues:**

-   A connector was not being released at a scheduled future date when a new classification was created using the API and which did not have a version associated with it. \(CON-8128\)

-   A connector was having pending versions removed when the Runtime Release window ended. \(CON-3164\)

-   A connector release that was scheduled within the RC window with a release date after the end of the Runtime Release window would erase its pending release. \(CON-8135\)