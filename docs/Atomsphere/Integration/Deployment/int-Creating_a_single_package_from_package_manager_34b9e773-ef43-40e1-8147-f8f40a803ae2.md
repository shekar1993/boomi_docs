# Creating a single packaged component from the Packaged Components page 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-34b9e773-ef43-40e1-8147-f8f40a803ae2"/>
</head>


Use the wizard on the Packaged Components page \(**Deploy** \> **Packaged Components\)** to create a deployable packaged component.

## Before you begin

You must have the Packaged Component Management privilege to perform this task.

## About this task


You can create a package for any deployable component from the **Packaged Component** page.

## Procedure

1. From the **Deploy** menu, select **Packaged Component**.

    The Packaged Component landing page is displayed.

2. Click **Create Packaged Component**.  
    
    The Packaged Components wizard opens. The Component Explorer displays only the list of components eligible for deployment.

3. From the Component Explorer, select the check box next to a single component that you wish to create in the packaged component.

    You can use the search bar in the components list to search for a component by name or component ID, or use the filter icon to narrow results by deployed status, component type, packaged component status, or packaged component ID. 

    If the component was created as a packaged component previously, a version history of the component appears in the right-most pane.

4. **Optional:** Use the **Action** ![img-int-black_gear](../Images/main-ic-gear-black-16_cdde83e4-a176-436a-86ca-1fe4937e3085.jpg) menu to view details about your selected component and its dependent components, view historical details of all packaged component versions created for the selected component, or deselect the component as a candidate for packaging.

5. Click **Next: Add Details**.

    The wizard displays the Add Details screen of the Create Packaged Component wizard.

6. (Optional) Click the **View Included Components** action to see the primary component and all dependent components included with your selected component.

7. (Optional) Provide the following information:

    - **Version For All**— Enter the unique version ID that you want to apply to the selected component. The version must be unique to previously packaged components and can contain alphanumeric characters. If you do not populate the field, automatically generates a version number for each component individually, which increments based on the latest revision number respectively.

    - **Package Notes for All**— Define any notes that may tell you helpful or specific information about this particular version of the packaged component.

    - **Sharing**— \(Disabled by default\) Enable the Sharing option to allow Process or API component types to be shared to the Process Library or Integration Packs once they are created as a packaged component.

8. Once you are finished, click the **Create Packaged Component** button. The button shows that one component is selected for creation as a packaged component.

    Your selected component is created as a new version of the packaged component, and is added to the version history table on the Packaged Component Screen. Additionally, you are presented with a dialog in which you can choose to immediately deploy the new version of the packaged component.

9. Click **Deploy** to deploy the new version of your packaged component, or click **Close** to cancel and deploy at a later time.

## Results

The newest version of your packaged component is now available in the list of packaged components on the **Deploy** \> **Packaged Components** screen. To learn about different filters you can use to search for specific packaged components or to learn how to create multiple packaged components at once, see the Related Links section.