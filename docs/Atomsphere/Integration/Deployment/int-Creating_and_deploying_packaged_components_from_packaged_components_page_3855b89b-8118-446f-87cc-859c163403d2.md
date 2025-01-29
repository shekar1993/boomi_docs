# Creating and deploying packaged components from the Packaged Components page 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-3855b89b-8118-446f-87cc-859c163403d2"/>
</head>


From the **Packaged Components** page, use the Create Packaged Components wizard to create and immediately deploy packaged components to a runtime environment.

## Before you begin

In order to deploy a component, you must first create a packaged component of the component you wish to deploy. Using the following instructions, you can both create a packaged component and deploy it from one place.

:::note

You must have the Packaged Component Management privilege and the Packaged Component Deployment privileges to perform this task.

:::

## About this task

You can create one or more packaged components a maximum of 250 packages at one time — and deploy them directly from the **Packaged Components** page.

## Procedure

1. From the **Deploy** menu, select **Packaged Components**.

    The Packaged Component landing page opens.

2. Click the **Create Packaged Component** button.

    The Packaged Components wizard opens. The Component Explorer displays only the list of components eligible for deployment.

3. From the Component Explorer, select the check box next to one or more components that you wish to create in the packaged component.

    You can use the search bar in the components list to search for a component by name or component ID, or use the filter icon to narrow results by deployed status, component type, packaged component status, or packaged component ID.

    If the component was created as a packaged component previously, a version history of the component appears in the right-most pane.

4. (Optional) Use the **Action**![gear icon](../Images/img-int-blue_gear_2e987bfd-68b2-44b9-af38-4701b3af2b97.jpg) menu to view details about your selected component and its dependent components, view historical details of all packaged component versions created for the selected component, or deselect the component as a candidate for packaging.

5. Click **Next: Add Details**.

    The Add Details screen of the wizard opens.

6. (Optional) Click the **View Included Components** action to see the primary component and all dependent components included with your selected component.

7. (Optional) Provide the following information:

    - **Version For All**— Enter the unique version ID that you want to apply to the selected component\(s\). The version must be unique to previously packaged components and can contain alphanumeric characters. If you do not populate the field,  automatically generates a version number for each component individually, which increments based on the latest revision number respectively.

        Remember that though you may have several components selected at this point for packaging, each component results in its own individual package at the completion of the wizard; only the version number, notes, and sharing options are applied in bulk to each selected packaged component.

    - **Package Notes for All**— include a note about the version of the packaged component you are about to create.

    - **Sharing**— \(Disabled by default\) enable the Sharing option to allow Process or API component types to be shared to the Process Library or Integration Packs once they are created as a packaged component.

8. Once you are finished, click the **Create Packaged Component** button. The button shows the number of components that are selected for creation.

    Your selected component\(s\) is created as a new version of the packaged component, and is added to the version history table on the Packaged Component Screen. Additionally, you are presented with a dialog in which you can choose to immediately deploy the new version of the packaged component.

9. Click **Deploy** to deploy the new version of your packaged component.

    The Deploy wizard opens.

10. In the Deployment Environment field, select an environment from the list of available options. Optionally add notes about the deployment that you may want to reference later.

11. Click **Next: Select Versions**.

    The next screen of the Deployments wizard opens.

12. From the Component Explorer, select the check box next to one or more packaged components that you wish to deploy to the environment that you selected in **Step 10**.

13. (Optional) Use the **Action**![gear icon](../Images/img-int-blue_gear_2e987bfd-68b2-44b9-af38-4701b3af2b97.jpg) menu to compare two versions of a packaged component, or to deselect the component for deployment.

14. (Optional) Click the **View Details** link in the Selected Version column to view details about the version of the packaged component that is currently selected. If applicable, click the **View Details** link in the Deployed Version column to view details about another version that was most recently deployed.

    Click **Close** on the Package Component Details dialogs to return to the Deployment wizard.

15. (Optional)  Click the **Select different package** link to select a different version of the packaged component in which to deploy. Select a different version of the packaged component to mark it instead as the candidate for deployment and click **Select Package**, or click **Cancel** to return to the Deployments wizard.

16. Click the **Next: Review** button.

    The next screen of the Deployments wizard opens.

17. Review and confirm that all selections and details are correct, then click the **Deploy** button.

    The Deployment Successful dialog appears and informs you that your recent deployment was successful.

18. Click **View Deployments** to see only your recent deployment in the Deployments table, or click **Close** to see all deployments.

## Results

The newest version of your packaged component is now available in the list of packaged components on the **Deploy** \> **Packaged Components** screen. To learn about different filters you can use to search for specific deployments, see the Related Links section.