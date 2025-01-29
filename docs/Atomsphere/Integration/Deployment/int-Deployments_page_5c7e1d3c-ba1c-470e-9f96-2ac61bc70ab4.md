# Deployments page 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-5c7e1d3c-ba1c-470e-9f96-2ac61bc70ab4"/>
</head>


The Deployments page \(**Deploy** \> **Deployments**\) lets you manage active deployments and create new deployments. A deployment consists of a single version of a packaged component that has been deployed to a specified environment.

:::note

You must have the Process Deployment privilege to access the Deployments page.

:::

The Deployments page shows a list of all the packages that are **actively** deployed, including all types of components in all environments. If you undeploy a packaged component, it is removed from the list of deployments. If you deploy a different version of a packaged component, the new version is displayed and the previous package version is removed from the list. To display all the deployments for a given packaged component over time, you can use the **View Deployment History** action.

:::note

A date filter of **Past Week** is applied to the list by default. You can change the date filter or clear it.

:::

The list of deployments that you see is limited by the environments to which you have access. By default, the list of deployments is sorted by deployment date in descending order. You can also sort the list by:

- Component name
- Packaged component versions
- Deployment environment
- Component type
- The user who deployed the package

As you review the list of active deployments, you can use filters to display:

- A specific component that is actively deployed
- All the components of a given type \(for example, a Process or Flow Service type\)
- Everything that was deployed by a specific user
- Everything that is deployed to a specific environment
- A deployment that is associated with a specific packaged component version ID
- A deployment that is associated with a given packaged component ID. This ID is different from the packaged version, and can be found in the [Packaged Component details](int-Viewing_deployed_packaged_component_details_81ac8f18-a63c-4155-a94a-4bd99e9e4ee8.md) dialog.

## The Active Deployments table

The following list describes the various table columns you see on the Deployments landing page:

- **Actions** - You can use the **Actions**![img-int-black_gear](../Images/main-ic-gear-black-16_cdde83e4-a176-436a-86ca-1fe4937e3085.jpg) menu to perform the following actions for a deployment:

- **Deploy to Different Environment** — Easily deploy the packaged component to an additional environment without having to go through the Deployment wizard process. This will not remove the packaged component from the current environment in which it is already deployed.

- **Rollback** — Select a different version of the selected packaged component to deploy. Use this action item when you want to quickly revert to another version, for example when a newly deployed version encounters an issue. This action undeploys the original version and deploys the new version you selected.

- **Undeploy** — Undeploy the packaged component from the environment in which it is deployed. Undeploying a deployments removes the packaged component from the list of deployments, as only active deployments are displayed.

- **Deployment History** — View the packaged component's deployment history, which includes details about all deployed versions of the component to the specified environment. Use the Action menu ![img-int-black_gear](../Images/main-ic-gear-black-16_cdde83e4-a176-436a-86ca-1fe4937e3085.jpg) on the Deployment History panel to view packaged component details, compare deployments, or copy the component to the component explorer.

- **Compare Deployments** — View configuration differences between two versions of a packaged component. This feature is also available from the Deployment History panel.

- **Copy to Component Explorer** — Copy a deployed package to a different folder in the Build tab. The newly copied components cannot be not deployed until they are converted into packaged components.

- **Component Name** - The name of the component that was created into a packaged component and then deployed.

- **Component Type** - The type of component that was created into a packaged component and then deployed.

- **Packaged Version** - An alphanumeric value that identifies the packaged component version. The packaged component version was specified by the user who first created the package.

- **Environment** - The name of the production or test environment in which the packaged component was deployed.

- **Deployment Date** - The date and time in which the version of a packaged component was last deployed.

- **Deployed By** - The user who last deployed the version of a packaged component.

- **Deployment Notes** - Notes that describe the deployment, if any were provided during the Deployment wizard process.
