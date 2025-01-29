# Packaged Components page 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-36b36378-4f73-4ad8-bac8-b72e87ceee93"/>
</head>


The **Deploy** \> **Packaged Components** page lets you create and manage packaged components as the first step in the deployment process.

:::note

You must have the Packaged Component Management privilege to access this page.

:::

When you select **Packaged Components** from the **Deploy** menu, the Packaged Components landing page is displayed, and shows a list of all packaged components that are created on the account.

By default, packages are sorted by the date created in descending order. You can search for previously created packaged components by name or version. You can also apply filters to sort the list by:

- Component
- Component Type
- Sharing capabilities
- Packaged Component ID
- Deleted Status

## The Packaged Components table 

The Packaged Components table shows the following information for each packaged component:

**Actions**  
You can use the Actions ![img-int-black_gear](../Images/main-ic-gear-black-16_cdde83e4-a176-436a-86ca-1fe4937e3085.jpg) menu to perform the following actions for a packaged component:

- Deploy a packaged component
- View the details for a packaged component
- View the version history of a packaged component
- Compare two versions of a packaged component
- Copy a component to the Component Explorer on the Build tab
- Delete a packaged component version
- Restore a deleted packaged component version \(applicable on for deleted packaged component versions\)

**Component Name**  
The name of the component that is used to create a packaged component.

**Component Type**  
The type of component selected to create the packaged component. For example, a process, Flow Service, Certificate, etc.

**Version**  
An alphanumeric value that identifies the version of the packaged component. The version was specified by the user who created the packaged component.

**Created Date**  
The date and time at which the version of packaged component was created.

**Notes**  
Notes that describe the version of the packaged component, if any were provided in the wizard for creating packaged components.

**Deployed To**  
If the packaged component is currently deployed, the Deployed To column indicates to which environment the component is deployed. This column shows information only for those packaged components that are actively deployed; if a packaged component is undeployed or has not yet been deployed, the column shows a "––" symbol.

**Sharing**  
Indicates whether the packaged component can be shared in the Process Library or as part of an integration pack. All packaged components can be deployed, but only packages that were marked as shareable when they were created can be published in the Process Library or added to an integration pack.

This field appears only for API Service components and processes that do not contain Process Route components. Other types of deployable components \(such as certificates, custom libraries, and API Proxy components\) can be deployed, but they cannot be shared.

**Status**  
A status of **Active** indicates that this packaged component version is operative and is eligible for use in a deployment, the Process Library, or part of an integration pack. A status of **Deleted** indicates this packaged component version is deleted from the account and cannot be used in a deployment, the Process Library, or an integration pack.

The Package Component page only shows Active status packaged components by default. To view deleted versions of packaged components, you must apply the **Show Deleted Packaged Components** filter.

Deleted packaged components can be restored from the Packaged Components page by first applying the **Show Deleted Packaged Components** filter and selecting **Restore** from the **Action** menu \(![gear icon](../Images/main-ic-gear-black-16_cdde83e4-a176-436a-86ca-1fe4937e3085.jpg)\).