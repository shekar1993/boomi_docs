# Deployment scenarios 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-543a6766-a835-425f-87b0-40053b4d7c30"/>
</head>


Review some common scenarios for deploying processes or components to an environment.

## Deploying a process and its dependent components 

One of the most common deployment tasks is to deploy a process and all of its dependent components to an environment such as Test.

1. Create a packaged component version of the process or component from the [Build page](int-Creating_a_packaged_component_from_the_build_page_d234828e-5e6e-41e3-a440-05017ab07001.md) or the [Packaged Component page](int-Packaged_components_page_36b36378-4f73-4ad8-bac8-b72e87ceee93.md).

    The process and all of the dependent components that are required to support the process \(such as maps or profiles and any subprocesses\) are included in the packaged component. By creating a *packaged component*, you create a record of what that process looks like in development at a given point in time. Although you can create a packaged component at any time during its development, you typically want to create it when you have finished building the process, and are ready to test it or share it with other users.

    :::note

    If your process includes Process Route components, you need to create an individual packaged component of the Process Route, and then deploy it and all of its subprocesses independently from the parent process.

    :::

2. Deploy the packaged component to the selected environment from the [Deployments page](int-Deployments_page_5c7e1d3c-ba1c-470e-9f96-2ac61bc70ab4.md).

    In addition to selecting an environment to deploy to, you can provide notes about the deployment, display detailed information about the versoin of the packaged component that you are deploying, or choose a different version to deploy, and more. A *deployment* consists of a single version of a packaged component that is deployed to a specified environment.


:::note

You can also [create a packaged component and deploy it](int-Creating_and_deploying_packaged_components_from_packaged_components_page_3855b89b-8118-446f-87cc-859c163403d2.md) directly from the Packaged Components page.

:::

## Deploying multiple processes or components 

You might want to deploy multiple processes or components to an environment at the same time as part of a coordinated release. You can create multiple packaged components at one time and assign them all the same version ID to help you track their usage.

1. Create a packaged component version of the processes and components you want to deploy from the [Packaged Component page](int-Packaged_components_page_36b36378-4f73-4ad8-bac8-b72e87ceee93.md).

    You can [create multiple packaged components](int-Creating_multiple_packages_from_package_manager_734c16d2-6f75-480b-aad1-459b72052e04.md) by turning on one or more check boxes in the components list. An individual packaged component version is created for each component, but all packaged components are assigned the same version ID. A common version ID helps you track the group of related components.

2. Deploy the packaged components to the selected environment from the [Deployments page](int-Deployments_page_5c7e1d3c-ba1c-470e-9f96-2ac61bc70ab4.md).

    By default, the most recent version of each packaged component will be deployed, but you can choose a different version of any packaged component. You can also provide notes about the overall deployment.


:::note

You can also [create multiple packaged components and deploy them](int-Creating_and_deploying_packaged_components_from_packaged_components_page_3855b89b-8118-446f-87cc-859c163403d2.md) directly from the Packaged Components page.

:::

## Deploying a different version of a previously deployed packaged component 

You can deploy a different version of a packaged process or component that is actively deployed to an environment. For example, you might need to redeploy a previous version to roll back a deployment that has problems or deploy an updated version to roll out enhancements. Before you deploy a different version, you can compare two versions of the packaged component—the one that is actively deployed and the one that you are thinking about deploying in its place.

1. From the Deployments page, [compare two versions of the deployed packaged component](int-Comparing_versions_of_a_deployed_component_3cc43f0b-6604-4e80-a3a5-06bf521461ba.md) to identify the differences.

    The comparison results highlight the differences between the two version of a packaged component. You can contact the user who last modified a component within either version or select a different version with which to compare.

2. After you identify the version of the packaged component that you want to deploy, do the following:

    1. Create a new deployment (**Deploy Packaged Components** button on the Deployments page).

    2. Select the version that you want to deploy (**Select different package** from the Select Packaged Components page of the Deploy wizard).

    3. Review and complete the deployment.

    The newly deployed packaged component version is displayed on the Deployments page and the previous packaged component version is removed from the list.