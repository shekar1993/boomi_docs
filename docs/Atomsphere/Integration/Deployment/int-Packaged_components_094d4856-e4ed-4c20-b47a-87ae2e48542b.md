# Packaged Components

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-094d4856-e4ed-4c20-b47a-87ae2e48542b"/>
</head>


Creating a packaged component of your deployable components or processes that you have built is the first step in deployment. Deployable components must be packaged before they can be deployed or shared to the Process Library or as part of an integration pack.

When you create a packaged component or process, you essentially take a "snapshot" of its development on the Build tab, typically when you are done building the process or component and are ready to deploy it to your test or production environment.

## Why do I create Packaged Components? 

The act of creating a packaged component applies a single, user-defined version number to a component or process that stays associated with the component even as it gets deployed various times across multiple environments (or shared among process libraries and integration packs). Packaged components eliminate the versioning issue users encounter in Legacy deployment, where version numbers often become mismatched as the component is deployed between multiple, different environments various times.

In Legacy, say that you made several revisions to a process and then deployed it to a quality assurance (QA) environment for testing, but needed to apply a few more changes after getting feedback from your administrator. After some more development, you deployed it again for testing to the QA environment. Each time the process is deployed to the test environment, it was automatically given a new version number. However, upon the first time you deploy the final revision to your production environment (but maybe the second or third time deploying to QA), the component gets its own new version number that doesn't match the final version number in your test environment.

With the new deployments workflow utilizing packaged components, users now have the ability to assign a single version number that can be tracked and referenced throughout various deployments.

## Understanding versions

Each time you create a packaged component of a process or component, a new *version* of the package is generated. You can specify an alphanumeric version ID that suits your needs, such as 1.0, Version 1.0, or Alpha Release, or let generate a version number for you. If you choose not to specify your own custom version, automatically generates a version number for each component individually, which increments based on the latest revision number respectively. For example, if you packaged the component previously and used 8.0 as a version number but do not populate this field, will apply 9.0 as the new version number when you package the same component again.

The version ID that you specify uniquely identifies that version of the packaged component and stays with the version no matter where it is deployed or shared. For instance, you may specify your own version number if you want to adopt numbering for an external source \(for example, when coordinating your integrations with application or database changes external to as part of your next release\), or if you want to loosely group multiple components to be deployed together.

You can create any number of packaged component versions for a single process or component. For instance, you might want to create a packaged component when the initial development is complete, and then again for each time a fix is applied after testing has been performed. You could also tie your packaged components to some larger milestones, such as the coordinated rollout of an integration project.

## More about Packaged Components

For processes, API Service/Proxy components, and Processing Group components, a packaged component contains the primary component and all the dependent components that are required to support that component \(such as subprocesses, connectors, or maps\). For other deployable components \(such as certificates\), a packaged component is comprised of the individual component itself.

You create and manage deployable packaged components from the **Packaged Components** page \(**Deploy** \> **Packaged Components**\). In addition to creating new packaged packaged components, you can manage them by:

- Reviewing the history of the packaged component
- Viewing detailed information about a specific package version
- Comparing two versions of a package
- Determining if the component was shared to an integration pack or process library

:::note

You must have the Packaged Component Management privilege \(formerly known as Package Management\) to create and manage deployable packages.

You can also package processes and components from the **Build** page provided that you have both the Build Read and Write Access privilege and the Packaged Component Management privilege.

:::

## Packaged Component Usage

Packaged components give you greater control over the life cycle and distribution of your processes and components. By creating a packaged component \(or rather, creating a version of the finished product in development\) and giving it a unique version ID, you can keep track of where each version is being used and whether the same version is being used in more than one place. And if you make a packaged component shareable, that same packaged component with its unique version ID can be:

- Deployed to one or more environments
- Published in the Process Library
- Added to an integration pack

All packaged components can be deployed, but only packaged components that were marked as shareable when they were created can be published in the Process Library or added to an integration pack. Furthermore, only certain types of packaged components can be shared:

- Processes that do not contain Process Route components can be shared in the Process Library.

- API Service components and processes that do not contain Process Route components can be added to an integration pack.

- Other types of deployable components \(such as certificates and custom libraries\) can be deployed, but they cannot be shared.