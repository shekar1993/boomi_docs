# Deploying packaged components from the Deployments page 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-6b45230f-dab2-4c10-bdba-2f0761d589c3"/>
</head>


From the Deployments page, deploy packaged components that were previously created but not yet deployed. You can deploy a maximum of 250 packages at one time.

## Before you begin

You must have the Packaged Component Deployment privilege to perform this task.

## About this task

Components must be created into a packaged component before they can be deployed. You can deploy a packaged component on the Build page or the Packaged Components page.

## Procedure

1. From the **Deploy** menu, select **Deployments**.

    The Deployments landing page opens.

2. Click the **Deploy Packaged Component** button.

    The Deploy wizard opens.

3. In the Deployment Environment field, select an environment from the list of available options. Optionally add notes about the deployment that you may want to reference later.

4. Click **Next: Select Versions**.

    The Deploy: Select Packaged Components screen of the Deployments wizard opens.

5. (Optional) From the Component Explorer, select the check box next to one or more packaged components that you wish to deploy to the environment that you selected in **Step 3**.

6. (Optional) Use the **Action** menu ![img-int-black_gear](../Images/main-ic-gear-black-16_cdde83e4-a176-436a-86ca-1fe4937e3085.jpg) to compare two versions of a packaged component, or to deselect the component as a candidate for deployment.

7. (Optional) Click the **View Details** link in the Selected Version column to view details about the version of the packaged component that is currently selected. If applicable, click the **View Details** link in the Deployed Version column to view details about another version that was most recently deployed.

    Press **Close** on the Package Component Details dialogs to return to the Deployment wizard.

8. (Optional) Click the **Select different package** link to select a different version of the packaged component in which to deploy. Select a different version of the packaged component to mark it instead as the candidate for deployment and click **Select Package**, or press **Cancel** to return to the Deployments wizard.

9. Click the **Next: Review** button.

    The Review screen of the Deployments wizard opens.

10. Review and confirm that all selections and details are correct, then click the **Deploy** button.

    The Deployment Successful dialog appears and informs you that your recent deployment was successful.

11. Click **View Deployments** to see only your recent deployment in the Deployments table, or click **Close** to see all deployments.

## Results

The newest version of your packaged component is now available in the list of packaged components on the **Deploy** \> **Packaged Components** screen. To learn about different filters you can use to search for specific deployments, see the Related Links section.