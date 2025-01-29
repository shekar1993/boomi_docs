# Enabling Packaged Component Deployment for Legacy accounts 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-b134486a-2868-4cd4-868c-a0f108cb8d7e"/>
</head>


As an account administrator, use the **Settings** \> **Account Information and Setup** \> **Features** page to enable the new Packaged Component Deployment functionality.

To view the **Features** page, you must have Account Administration privileges.

Account administrators can choose to upgrade their Legacy deployment accounts to use the Packaged Component Deployment functionality. Packaged components allow users to apply consistent versions to processes and components as they are deployed to various environments on the account, making it easy to track and reference these components as they undergo several revisions throughout the deployment process.

:::caution

Once you enable Packaged Component Deployment on the account from the Account Features page, it cannot be disabled.

:::

:::note

As of the January 2020 release, all accounts have been updated automatically to use the Packaged Component Deployment workflow.

:::

To enable the new deployment feature, complete the following steps:

1. Select **Settings** \> **Account Information and Setup** and click the **Features** tab.

    The Account Features page opens with options to enable various account features.

2. Under **Packaged Component Deployment**, click **Enable**.

    **Note:** Once you enable Packaged Component Deployment on the account, it cannot be disabled.

    A confirmation dialog opens asking if you want to continue enabling Packaged Component Deployment, and allows you to automatically update Deployment roles automatically.

3. Do one of the following:

    - Click **Enable and update roles for me** to enable Packaged Component Deployment and automatically update deployment roles.
    - Click **Enable but do not update roles** to enable Packaged Component Deployment without updating deployment roles. Choose this option if you want to manually update deployment roles at a later time.
    - Click **Cancel** to return to the Account Features page without making changes.

Once the feature is enabled, users can start creating packaged components from the **Deploy** \> **Packaged Components** menu on the AtomSphere platform. After a packaged component is created, it then can be deployed from the **Deploy** \> **Deployments** menu. Users must be assigned the appropriate Packaged Component Management and Packaged Component Deployment roles in order to successfully create and deploy components. For more information about creating and deploying packaged components, see the Related Links section.
