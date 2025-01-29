# Packaged component and deployment privileges 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-0279167d-0370-4208-a66d-e4ba74dc1079"/>
</head>


User roles and privileges determine what a user can see and do in the deployment workflow. Building components, creating packaged components, and deploying all require different user privileges.

| Privilege | Enables the user to... |
| --- | --- |
| Build Read and Write Access | Design, build, and modify processes and components. |
| Packaged Component Management | Create and manage deployable packaged components. This privilege was formerly known as Package Management. |
| Packaged Component Deployment | Deploy packaged components to test and production environments. This privilege was formerly known as Process Deployment. |


The Standard User role and the Administrator role include *all* of these privileges. So users who are assigned one of those roles can build, create packaged components, *and* deploy by default.

However, as a best practice, Boomi recommends that you establish a separation of duties, especially as it relates to different environments. For example:

- Developers might be allowed to build, create packaged components, and deploy to a Development environment, but they should not be allowed to deploy to the Production environment.

- You might want to divide tasks among different users in a given environment, having one user who builds and creates packaged components, and another who deploys. To separate these tasks, you can create custom roles (such as a Build and Packaged Components role, or a Packaged Components and Deploy role) and assign to them only the privileges that are needed. Then those roles can be assigned to one or more environments, as appropriate.

:::note

If you have custom roles that include any of the following privileges, you should consider adding the Packaged Component Management privilege to those roles:

- Build Read and Write Access
- Integration Pack
- Packaged Component Deployment
- Process Library

:::
