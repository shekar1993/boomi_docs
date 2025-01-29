# Deploying to a different environment 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-e0572678-9d40-417c-a1ae-771de66980d4"/>
</head>


Use the **Deploy to Different Environment** action to quickly deploy a packaged component to an additional environment or environments.

## About this task

To successfully use this feature, you must have more than one environment created on the account. Deploying to another environment does not undeploy the packaged component from other environments, but rather allows you to create multiple, concurrent deployments for the same component.

## Procedure

1. From the **Deploy** menu, select **Deployments**.

2. To see the full list of deployments, use the **Clear**![img-int-blue_circle_with_white_x](../Images/img-int-blue_circle_with_white_x_8a03d8b0-defd-4cfc-bcc1-b3d53392b78b.jpg) button to remove the "Past Week" date filter that is applied by default.

3. From the list, locate the deployed component whose versions you want to compare by reading through the **Component Name** and **Packaged Version** columns, or apply search filters.

4. Click the **Actions**![img-int-black_gear](../Images/main-ic-gear-black-16_cdde83e4-a176-436a-86ca-1fe4937e3085.jpg) icon for the packaged component version that you want to deploy, and then select **Deploy to Different Environment**.

    The Deploy to Different Environment wizard opens.

    **Note:**  If you have only one environment created on your account, you receive a message stating that deploying to another environment is not possible because there is not another existing environment to deploy to.

5. In the **Deployment Environment** field, select a new environment in which to deploy the packaged component.

    The Deployment Environment field presents only those environments which have not already been used in an active deployment.

6. (Optional) Add Deployment notes, and then click **Next: Review**.

    The Deploy to Different Environment: Review screen appears as the next step in the wizard.

7. Review that your selections are correct, and then click **Deploy**.

    A confirmation message appears stating that your packaged component is successfully deployed to another environment.

8. Click **Close** on the confirmation message to return to the Deployments screen.

## Results

A new entry in the Deployments table shows your recent deployment to a different environment. Notice that the Packaged Component name and version appears multiple times in the list of Deployments, each listed with different values in the Environments column.
