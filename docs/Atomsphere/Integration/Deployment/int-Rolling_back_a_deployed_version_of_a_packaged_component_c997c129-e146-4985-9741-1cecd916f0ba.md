# Rolling back a deployed version of a packaged component 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-c997c129-e146-4985-9741-1cecd916f0ba"/>
</head>


Use the Rollback deployment feature to quickly restore (or redeploy) a previous version of a deployed packaged component in the event that a newly deployed version encounters an issue.

## About this task

By choosing to rollback an existing deployment, you redploy an older version of the same packaged component to the same environment and simultaneously undeploy the current version.

## Procedure

1. From the **Deploy** menu, select **Deployments**.

2. To see the full list of deployments, use the **Clear**![img-int-blue_circle_with_white_x](../Images/img-int-blue_circle_with_white_x_8a03d8b0-defd-4cfc-bcc1-b3d53392b78b.jpg) button to remove the "Past Week" date filter that is applied by default.

3. From the list, locate the deployed component whose versions you want to roll back by using the **Component Name** and **Packaged Version** columns, or apply search filters as needed.

4. Click the **Actions**![img-int-black_gear](../Images/main-ic-gear-black-16_cdde83e4-a176-436a-86ca-1fe4937e3085.jpg) icon for the packaged component version that you want to roll back, and then select  **Rollback**.

    The Rollback dialog opens.

5. Select the packaged component version that you want to redeploy as part of the rollback.

    :::info Important
    
    Only versions that have been previously deployed to this environment are available for selection.

    :::

6. (Optional) Click **View Details** to see details about the selected version of a packaged component, like included deployments, previous deployments, and if it was shared to the process library or integration packs.

7. (Optional) Add Deployment notes, and then click **Next: Review**.

    The Rollback: Review screen appears as the next step in the wizard.

8. Review that your selections are correct, and then click **Deploy**.

    A confirmation message appears stating that your packaged component is successfully deployed as a previous version.

9. Click **Close** on the confirmation message to return to the Deployments screen.

## Results

Because the packaged component version is rolled back and therefore no longer active, you do not see the original version in the list of Deployments list. However, you can access the Deployments Detail panel that shows records of all deployments— both active and inactive— which occurred for a given component.
