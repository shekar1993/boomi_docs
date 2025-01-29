# Creating multiple packaged components from the Packaged Components page 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-734c16d2-6f75-480b-aad1-459b72052e04"/>
</head>


Use the wizard on the Packaged Component page \(**Deploy** \> **Packaged Components\)** to bulk create one or more deployable packages.

## Before you begin

You must have the Packaged Component Management privilege to perform this task.

## About this task

You can create multiple packaged components at a single time from the Packaged Components page.

When you create multiple packaged components at one time, the version number, note, and Sharing option that you apply in the wizard \(Step 7\) are applied to **all** components that are selected, though each selection will result in its own individual packaged component so that they can be deployed independently from one another.

:::note

Because the same version, note, and sharing option are applied to all selections in the packaged component wizard, it is advised that you only do a bulk creation when you have made minor adjustments across the various selected components in support of some common purpose. Otherwise, it is recommended that you create packaged components one-by-one.

:::

## Procedure

1. From the **Deploy** menu, select **Packaged Components**.

    The Packaged Components landing page is displayed.

2. Click **Create Packaged Component**.  
 The Packaged Components wizard opens. The Component Explorer displays only the list of components eligible for deployment.

3. In the components list, select one or more check boxes for the components that you want to use to create your packaged components.  

    You can use the search bar in the components list to search for a component by name or component ID, or use the filter icon to narrow results by deployed status, component type, packaged component status, or packaged component ID.  

    Version history of each component appears in the right-most pane.

4. (Optional) Use the **Action**![img-int-black_gear](../Images/main-ic-gear-black-16_cdde83e4-a176-436a-86ca-1fe4937e3085.jpg) menu to view details about your selected component and its dependent components, view historical details of all packaged component versions created for the selected component, or deselect the component as a candidate for packaging.

5. Click **Next: Add Details**.  
    
    The wizard displays the Add Details screen of the Create Packaged Component wizard.

6. (Optional) Click the **View Included Components** action to view all dependent components included in each selected component.

7. (Optional) Provide the following information:

    - **Version For All**— Enter the unique version ID that you want to apply to the selected component\(s\). The version must be unique to previously packaged components and can contain alphanumeric characters. If you do not populate the field, automatically generates a version number for each component individually, which increments based on the latest revision number respectively.

        Remember that though you may have several components selected at this point for packaging, each component results in its own individual package at the completion of the wizard; only the version number, notes, and sharing options are applied in bulk to each selected packaged component.

    - **Package Notes for All**— Define any notes that may tell you helpful or specific information about this particular version of the packaged component.

    - **Sharing**— \(Disabled by default\) Enable the Sharing option to allow Process or API component types to be shared to the Process Library or Integration Packs once they are created as a packaged component.

8. Once you are finished, click the **Create Packaged Component** button. The button shows the number of components that are selected for creation as their own individual packaged component.

    The Deploy dialog appears.

9. Click **Deploy** to deploy the new version of your packaged component, or click **Close** to cancel and deploy at a later time.

## Results


The newest version of your packaged component is now available in the list of packaged components on the **Deploy** \> **Packaged Components** screen. To learn about different filters you can use to search for specific packaged components or to learn how to create a single packaged component, see the Related Links section.