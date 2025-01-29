# Promoting a release

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-85e7790e-d62e-4778-a54f-b8ed1c7bc7bb"/>
</head>


Promote a release to deploy it to the next environment in the development life cycle.

## Overview

Promoting a release moves it forward to the next stage in the development life cycle. The release is removed from the current environment, and deployed to the next environment.

For example:

-   Once you have finished building the release in the development environment, you can promote the release to the test environment and test the flows in the release.

-   Once the release has been tested and is ready to go live, you can promote it to the production environment.


You can only promote a release forward to the next environment. To move a release back to the previous environment, you must roll it back. See [Rolling back a release](flo-Environments-rollback_bb012b3c-b7c7-4ff6-b703-c90442cc81be.md).

## Promoting a release

To promote a release to the next environment:

1.  Click on the release you want to promote in the **Release** section of the **Environments** page.
2.  The details for the release are expanded. Click **Promote to \[environment\]**.
3.  The **Promote release** form opens. Check that the **Target environment** is correct, and click **Promote to \[environment\]**.
4.  Once the release is promoted, the **Promote release successful** dialog is shown. Click **Finish**.
5.  The release is removed from the current environment, and deployed to the next environment.
    -   To run a flow in the new environment, expand the release details in the **Release** section of the **Environments** page, and click the **Run in \[environment\]** link in the **Flow URL** column.

    -   The Environment ID in the Flow Run URL changes to the new environment.