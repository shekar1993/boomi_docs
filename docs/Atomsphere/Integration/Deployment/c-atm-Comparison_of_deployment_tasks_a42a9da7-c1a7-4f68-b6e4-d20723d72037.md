# Comparison of deployment tasks 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-a42a9da7-c1a7-4f68-b6e4-d20723d72037"/>
</head>


Review a comparison of the Legacy deployment workflow and the new packaged components deployment workflow for selected deployment tasks.

The Packaged Component Deployment functionality, originally introduced to Boomi Integration in March 2020, is automatically enabled for all new and existing accounts as of the September 2020 release. Support for Legacy Deployment functionality is removed as of the September 2020 release.

The purpose of this topic is to help Legacy Deployment users transition to the new deployment workflow, and allows users to compare deployment concepts between legacy and new functionality.

## Working with Deployments 

| I want to... | Legacy deployment workflow | New deployment workflow (Packaged Components) |
| --- | --- | --- |
| Deploy single or multiple processes and components | 1. Select the process or component on the **Deploy** page.<br />2. Use the **Attachments** tab to attach an environment to the component.<br />3. Use the **Deployments** tab to deploy one or more components to an attached environment. |1. From an open process on the Build tab or from the **Deploy** \> **Packaged Component** page, click **Create Packaged Component**.<br />2. Select a process or component in the list.<br />3. Enter optional details for the packaged component, including the custom version number and notes, and then click **Create Packaged Component**.<br />4.  Deploy the packaged component immediately by clicking the **Deploy** button from the success dialog. This deploys the packaged component to an environment on the **Deploy** \> **Deployments** page.<br /><br />OR<br /><br />1. Create a Packaged Component on the **Deploy** \> **Packaged Components** page by clicking the **Create Packaged Component** button, follow the steps in the wizard, and close the confirmation dialog without deploying.<br />2. Separately deploy the same version of the selected process or component from the **Deploy** \> **Deployments** page by clicking the **Deploy Packaged Component** button at the top of the page, and follow the steps in the Deploy wizard.<br />**Note:** You no longer have to attach components to an environment. After you create a packaged component, it can be deployed to any environment. |
| Display active deployments |1. Select an Atom, Molecule, or Atom Cloud on the **Manage** \> **Atom Management** page.<br />2. Click **Deployed Processes** to display a list of processes that are deployed to the selected container. | 1.  Go to **Deploy** \> **Deployments** to display a list of actively deployed packaged components, including all types of components in all environments to which you have access. |
| Display the deployment history for a process or component |1. Select a process or component on the **Deploy** page.<br />2. Click the **Deployments** tab. | 1.  Select an actively deployed component from the **Deploy** \> **Deployments** page.<br />2. In the **Actions**![img-int-black_gear](../Images/main-ic-gear-black-16_cdde83e4-a176-436a-86ca-1fe4937e3085.jpg) menu for a specific component in the list, select **Deployment History**. |
| Undeploy a process or component | 1. Select the deployed process or component on the **Deploy** page.<br />2. Use the **Attachments** tab to detach the attached environment from the component. The component is effectively undeployed. | 1. Select the deployed packaged component from the **Deploy** \> **Deployments** page.<br />2. In the **Actions**![img-int-black_gear](../Images/main-ic-gear-black-16_cdde83e4-a176-436a-86ca-1fe4937e3085.jpg) menu for a specific component in the list, select **Undeploy**. |

## Working with Integration Packs and the Process Library

| I want to... | Legacy deployment workflow | New deployment workflow (Packaged Components)|
| --- | --- | --- |
| Publish a process to the Process Library | 1. Select the process from the **Publishable Components** list on the **Manage** \> **Process Library** page.<br />2. Click **Publish Latest Revision** or select **Re-Publish this Version** from the **Actions** menu. | 1. Create a packaged component of the process that you want to publish on the **Deploy** \> **Packaged Components** page. Be sure to make the new packaged component *shareable* by turning on the **Sharing** option (found on the Add Details screen of the Create Packaged Component wizard).<br />2. From the **Manage** \> **Process Library** page, select the packaged process from the **Packaged Processes** list.<br />3. Click **Review and Publish** to publish the selection. |
| Add a process or API Service component to an integration pack | 1. Select the integration pack on the **Manage** \> **Integration Packs** page.<br />2. In the **Publications** list, click **![](../Images/main-ic-plus-sign-white-in-green-circle-16_4dc8c5f3-e893-4aef-ade2-0b7afe9476c1.jpg) Add** and select the components that you want to add. | 1. Create a packaged component of the process or API Service that you want to distribute on the **Deploy** \> **Packaged Components** page. Be sure to make the new packaged component *shareable* by turning on the **Sharing** option (found on the Add Details screen of the Create Packaged Component wizard).<br />2. Select the integration pack on the **Manage** \> **Integration Packs** page.<br />3. In the **Packages** list, click **Add Package** and select the packaged component that you want to add. |

**Notes:**

While there appears to be more steps required when using packaged components, keep the following in mind:

- If you already have a packaged component created for local deployment and testing, you can immediately use that package in an integration pack or process library publication without needing to create another version.

- You have greater control over selecting a specific version of a packaged component for the integration pack or process library.

- The version number stays consistent as the packaged component is channeled through various deployments, integration packs, and process libraries.

## Working with APIs for Deployment

| I want to... | Legacy deployment workflow | New deployment workflow (Packaged Components) |
| --- | --- | --- |
| Deploy a component | 1. First time only: Create ComponentEnvironmentAttachment (component ID + environment ID)<br />2. Create Deployment (component ID + environment ID) | 1. Create PackagedComponent (component ID)<br />2. Create DeployedPackage (packaged component ID + environment ID) |
| Copy/Promote | 1. Execute deployComponent (deployment ID + environment ID) | 1. Create DeployedPackage (packaged component ID + target environment ID) |

**Notes:**

When using Legacy APIs in an account enabled with Packaged Components Deployment, you still need to create an environment attachment. However, the ability to create a packaged component deployment still works. Upon calling Deployment, it creates a Packaged Component and Deployment together.
