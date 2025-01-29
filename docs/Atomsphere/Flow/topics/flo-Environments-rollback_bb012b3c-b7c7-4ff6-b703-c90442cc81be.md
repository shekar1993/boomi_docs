# Rolling back a release

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-bb012b3c-b7c7-4ff6-b703-c90442cc81be"/>
</head>


Roll back a release to redeploy the previous snapshot versions of any flows included in the release.

## Overview

Rolling back a release redeploys the previous snapshot versions of any flows in the release to the environment, while simultaneously removing the current snapshot version of any flows in the release, rolling them back to the previous environment.

-   After rolling back a release to the previous environment, when a flow is run, the latest version from the previous release is used.

    For example:

    -   Release A that includes 3 flows is promoted to the production environment.

    -   Release B that includes newer versions of these 3 flows is then promoted to the production environment, replacing the previous versions of these flows from release A.

    -   However, when a problem is spotted in one of the flows, release B is rolled back to the test environment.

        Because all of the flows had previously been deployed to the production environment in release A, users running these flows will use those versions of the flow.

-   If no previous snapshot version of the flow exists, the flow is effectively removed from the environment. Users are no longer able to run the flow, until a version of the flow is once again promoted to that environment.

    For example:

    -   Release A that includes 3 flows is promoted to the production environment.

    -   However, when a problem is spotted in one of the flows, the release is rolled back to the test environment.

        Because none of the flows had previously been deployed to the production environment, users cannot run any of these flows, as they no longer exist in the production environment.


## Rolling back a release

To roll back a release:

1.  Click on the release you want to roll back in the **Release** section of the **Environments** page.
2.  The details for the release are expanded. Click **Rollback to previous release** to open the **Rollback Release** form.
3.  Confirm that you want to roll back to the previous release, and click **Rollback to previous release**.
4.  Once the release is rolled back, the **Rollback Release** form confirms this. Click **Finish**.
5.  The release is removed from the environment, and deployed back to the previous environment.

    -   All flows in the release will use the snapshot versions from the previous release.

    -   Any flow not previously deployed to the environment cannot be run, until a version of the flow is once again promoted to that environment.