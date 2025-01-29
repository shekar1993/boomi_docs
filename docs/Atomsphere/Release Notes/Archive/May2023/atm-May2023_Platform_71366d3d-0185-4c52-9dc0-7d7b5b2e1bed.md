#  Boomi Enterprise Platform

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-71366d3d-0185-4c52-9dc0-7d7b5b2e1bed"/>
</head>





**Features:**

-   Account Administrators that normally restrict Boomi Support access to their accounts by setting the Support Access Role to "No Access" can now provide temporary access by using the **Support Team Access** feature on the Account Information page in the . When our support teams request access, you can approve the request and set the role and expiration date for the temporary user to access the account. If your Support Access Role is set to anything else, this feature is not available. \(ADSEC-1814\)

    **Deferred:** Subsequent to the May 2023 Runtime Release, release of this feature was postponed and will be rescheduled.

-   Changes made to the **Support Access Role** drop-down on the Account Information page in the generate an audit log record with the message "An account support access role has been modified." \(ADSEC-2012\)

-   Component folder icons are updated to the latest design and for better visibility in dark mode. Folder icon appearance now varies depending on whether it is open or closed and for access and role restrictions. \(UU-381\)

-   If Event Streams is enabled for your account, you can access it through a tile on the Home Page or by clicking **Services** in the top navigation bar. \(UU-473\)

-   The Home Page header has been migrated to a more efficient code base. There are minor design changes to the Account switcher and Sign-out dialog.

:::note

Only the Home Page header is affected. The headers in the rest of the are unchanged.

:::

\(UU-386\)


