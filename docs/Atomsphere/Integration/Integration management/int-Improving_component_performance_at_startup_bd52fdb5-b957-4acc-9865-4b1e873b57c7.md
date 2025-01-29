# Improving component performance at startup 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-bd52fdb5-b957-4acc-9865-4b1e873b57c7"/>
</head>


Manually add custom container properties in the **Properties Panel, Custom tab** for Atoms, Molecules, and Atom Clouds to improve component performance at startup.

## Before you begin

You must have the Atom Management privilege to perform this task. If you have the Atom Management Read Access privilege, you cannot perform the task. The container must be online and you must be the owner of the Atom, Molecule, or Atom Cloud to view and edit the Properties panel, Custom tab.

## About this task

The following custom properties can be added manually in the Properties panel's Custom tab to improve component loading performance:

-   `com.boomi.container.enableUseDirectoryStreamWhenFindingComponents` - When enabled, uses a more efficient method of loading components, `Files.newDirectoryStream`, instead of `File.listFiles`. Setting this property to False reverts to the `File.listFiles` method of loading components.

-   `com.boomi.container.skipNotificationOfLoadedComponentsWhenProcessRouteInitialized` - When enabled, the initial loading of components are skipped when a process executes for the first time. The default value for this property is False.

    :::note
    
    For Singapore Integration Test Cloud, Canada Integration Test Cloud, and Japan Integration test cloud, this property is set by default to True.

    :::


Use the following instructions to enable or disable these properties:

## Procedure

1.  In the service, go to **Manage** \> **Atom Management**.

2.  Select an Atom, Molecule, or Atom Cloud from the list on the left.

3.  Under **Settings & Configuration**, click **Properties**.

4.  Under the **Container Properties** heading, click **Add a Property**.

5.  In the Property Name field, enter `com.boomi.container.enableUseDirectoryStreamWhenFindingComponents`. In the Property Value field, enter False.

6.  Repeat Step 4 by clicking **Add a Property** again.

7.  In the Property Name field, enter `com.boomi.container.skipNotificationOfLoadedComponentsWhenProcessRouteInitialized`. In the Property Value field, enter True.

8.  Click **Save**.

9.  You are prompted to restart your container. Click **Yes, restart now** to immediately restart your container or click **No, restart later** to manually restart your container at a later time.