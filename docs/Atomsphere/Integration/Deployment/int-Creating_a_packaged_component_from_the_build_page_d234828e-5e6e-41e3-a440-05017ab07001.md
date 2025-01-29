# Creating a packaged component from the Build page 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-d234828e-5e6e-41e3-a440-05017ab07001"/>
</head>


After configuring and saving a process or component on the **Build** page, use the **Create Packaged Component** button to begin the deployment process by creating a packaged component.

## Before you begin

You must have the Build Read and Write Access privilege and the Packaged Component Management privilege to perform this task. Only deployable components have the ability to be packaged.

## About this task

You can create a packaged component for any deployable component while the component is open on the **Build** page.

## Procedure

1. With the component that you want to package open on the **Build** page, click **Create Packaged Component**.

    :::note

    You must save the component at least once before the **Create Packaged Component** button is available.

    :::

    The Create Packaged Components wizard opens.

2. Verify that the component you selected is correct, then click the **Next: Add Details** button on the dialog.

    The Create Packaged Components: Add Details screen opens on the wizard.

3. (Optional) In the Packaged Component table, click **View Components** to review the list of components that are included in the packaged component.

    For processes, API Service components, and Processing Group components, a packaged component consists of the primary component and all the dependent components that are required to support that component \(such as subprocesses, connectors, or maps\). For other deployable components \(such as certificates\), a packaged component is the component itself.

    You can review the list of components, but you cannot modify it.

4. (Optional) Provide the following information:

    - **Version for All** — Enter the unique version ID that you want to apply to the selected component. The version must be unique to previously packaged components and can contain alphanumeric characters. If you do not populate the field,  automatically generates a version number for each component individually, which increments based on the latest revision number respectively.

    - **Package Notes for All** — Define any notes that may tell you helpful or specific information about this particular version of the packaged component. Remember that though you may have several components selected, each component results in its own individual package at the completion of the wizard; only the version number, notes, and sharing options are applied in bulk to each selected packaged component.

    - **Sharing** — \(Disabled by default\) Enable the Sharing option to allow Process or API component types to be shared to the Process Library or added to Integration Packs once they are created as a packaged component.

5. Click **Create Packaged Component**.

    Your new packaged component is created. Information about your new packaged component is immediately available from the **Deploy** \> **Packaged Components** page.

    A dialog screen opens asking if you want to deploy your new packaged component.

6. To deploy your new packaged component, click **Deploy**. Otherwise, click **Close**.

    If you do not wish to deploy the packaged component at this time, you can do so at any time from the Deployments page \(**Deploy** \> **Deployments**\).