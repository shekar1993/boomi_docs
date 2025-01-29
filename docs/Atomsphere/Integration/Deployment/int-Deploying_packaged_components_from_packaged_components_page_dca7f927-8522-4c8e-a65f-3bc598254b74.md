# Deploying packaged components from the Packaged Components page

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-dca7f927-8522-4c8e-a65f-3bc598254b74"/>
</head>


Use the packaged component's **Actions** menu on the **Packaged Components** page to deploy a single version of the packaged component to a runtime environment.

## Before you begin

In order to deploy a component, you must first create a packaged component of the component you wish to deploy.

:::note

You must have the Packaged Component Management privilege and the Packaged Component Deployment privileges to perform this task.

:::


## Procedure

1. From the **Deploy** menu, select **Packaged Components**.  
    The Packaged Component landing page opens.

2. Click the **Actions** ![img-int-black_gear](../Images/main-ic-gear-black-16_cdde83e4-a176-436a-86ca-1fe4937e3085.jpg) icon for the package version that you want to deploy and select **Deploy**.

    The Deploy wizard opens.

3. In the Deployment Environment field, select an environment from the list of available options. Optionally add notes about the deployment that you may want to reference later.

4. Click **Next: Select Versions**.

    The next screen of the Deployments wizard opens. In the Component Explorer, the check box is already turned on for the packaged component that you selected in **Step 2**.

5. (Optional) Use the **Action** ![img-int-black_gear](../Images/main-ic-gear-black-16_cdde83e4-a176-436a-86ca-1fe4937e3085.jpg) menu to compare two versions of a packaged component, or to deselect the component for deployment.

6. (Optional) Click the **View Details** link in the Selected Version column to view details about the version of the packaged component that is currently selected. If applicable, click the **View Details** link in the Deployed Version column to view details about another version that was most recently deployed.

    Click **Close** on the Package Component Details dialogs to return to the Deployment wizard.

7. (Optional) Click the **Select different package** link to select a different version of the packaged component in which to deploy. Select a different version of the packaged component to mark it instead as the candidate for deployment and click **Select Package**, or click **Cancel** to return to the Deployments wizard.

8. Click the **Next: Review** button.

    The next screen of the Deployments wizard opens.

9. Review and confirm that all selections and details are correct, then click the **Deploy** button.

    The Deployment Successful dialog appears and informs you that your recent deployment was successful.

10. Click **View Deployments** to see only your recent deployment in the Deployments table, or click **Close** to see all deployments.
