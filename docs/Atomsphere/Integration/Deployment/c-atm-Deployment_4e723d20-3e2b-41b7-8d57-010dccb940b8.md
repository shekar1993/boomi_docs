# Deployment 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-4e723d20-3e2b-41b7-8d57-010dccb940b8"/>
</head>


Deployment is the means by which you prepare your processes and deployable components to run and operate in a test or production environment.

Boomi Deployment is similar to traditional software development concepts of building and releasing product. The deployment functionality performs several important functions:

- Controls the deployment of specific versions to different runtime environments as part of the development life cycle (for example, “stage” vs. “production”).

- Manages versioning of processes and other deployable components.

- Isolates the version of processes running in runtime environments from ongoing changes made in the **Build** tab.

- Provides full audit history for versioning and deployments.


After you configure and test processes and components in the **Build** tab, the next step is to deploy them to one or more environments. Deployed processes can accommodate full production-scale data volumes, batch processes can be scheduled for automated execution, and listener processes such as API Services and event-driven connectors are activated to receive incoming requests.

## Deployable components 

In addition to processes, the following types of components can also be packaged and deployed independently:

- API Proxy
- API Service
- Certificate (public X.509)
- Custom Library
- Flow Service
- Process Route
- Processing Group

Though an independent component may have been included in a process' or another component's configuration, they are stand-alone in nature and are not included during the packaging stage of deployment. Due to this, they must be packaged and deployed independently, and as a result, provide you more granular control over deployment versioning.

## How deployment works 

There are two steps to deployment:

1. Create and manage point-in-time versions of processes or other deployable components. These are called **Packaged Components**.

2. Assign those specific versions to one or more environments to be available to run. This is called a **Deployment**.

The creation of a packaged component is a “snapshot” of the current revision of a process and all its included components (such as maps, profiles, connections, etc.). This packaged component version is isolated from future changes in the **Build** tab so ongoing configuration changes to the process or other component do not affect it. That version can then move through a development life cycle, such as promoting from a “test” environment to a “production” environment.

:::note

After you create a packaged component in preparation for deployment, you can share that same packaged process component in the Process Library or add it to an integration pack. You can also add packaged API Service components to an integration pack.

:::

The **Deploy** menu provides access to the following deployment tools:

- The [Packaged Components](int-Packaged_components_094d4856-e4ed-4c20-b47a-87ae2e48542b.md) option lets you create and manage packaged components for the processes and components that you build.

- The [Deployments](int-Deploy_packaged_components_e77ca157-43b3-46d2-bfb8-bf0ed6cd8f69.md) option lets you monitor existing deployments and create new deployments.


## An example of a typical deployment workflow 

In this scenario there are two environments, “Test” and “Production”. A typical workflow might be as follows:

1. A process and related components are created and configured in the Build tab.
2. Test Mode is used to verify the process is working.
3. A packaged component, “v1”, is created for the process.
4. The packaged component “v1” is deployed to the Test environment.
5. The process is tested more fully in the Test environment with a larger set of data, and an issue found with the field mapping rules.
6. The map component is modified and retested in the **Build** tab.
7. A new packaged component, “v2”, is created for the same process.
8. The packaged component “v2” is deployed to the Test environment and retested. No issues are found this time.
9. The same packaged component “v2” is deployed to the Production environment.
10. Future development continues in the **Build** tab but does not affect the packaged component “v2” running in the Production environment.

When you deploy a new version of a process to an environment, the new version replaces the previous version currently running on the associated Atom runtimes. Any in-progress executions will complete with the previous version but future executions will use the new version.