# Copying the components of a packaged component to the Component Explorer 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-4dc2abae-39f0-416c-b453-cdb937d8f45e"/>
</head>


From the **Packaged Components** page, use the **Copy to Component Explorer** action to copy the components in a packaged component to a different folder on the Build tab.

## About this task

Copying a packaged component to the Component Explorer creates copies of the components in that packaged component to a new folder on the Build tab. You can copy components whether or not their packages have been deployed. The newly copied components must be packaged before they can be deployed.

## Procedure

1. On the Packaged Components page (**Deploy** > **Packaged Components**), locate a packaged component in the list.

    You can also copy the components in a package to the Component Explorer from the Deployments page **(Deploy** > **Deployments**) or the Deployment History panel. The remaining steps in this task are the same from any location.

2. Click the **Actions** ![img-int-black_gear](../Images/main-ic-gear-black-16_cdde83e4-a176-436a-86ca-1fe4937e3085.jpg) icon for the version of the packaged component that you want to copy and select **Copy to Component Explorer**.

    The Copy to Component Explorer dialog opens.

    For processes, API Service components, and Processing Group components, a packaged component consists of the primary component and all the dependent components that are required to support that component (such as subprocesses, connectors, or maps). For other deployable components (such as certificates and API Proxy components), a package is the component itself. By default, the primary component is listed first, followed by any dependent components.

3. In the **Destination Folder** field, do one of the following:

    - Click the **Choose** icon to locate an existing folder.

        If the destination folder is write-protected and you are not assigned a user role that allows write access to the folder, you can see the folder but you cannot unselect it.

    - Click **Create** ![img-int-green_circle_plus_sign](../Images/main-ic-plus-sign-white-in-green-circle-16_4dc8c5f3-e893-4aef-ade2-0b7afe9476c1.jpg) to create a new folder.

4. To remove a dependent component from the list of components that will be copied, clear the component’s check box.

    You can copy all components or select one or more components. The primary component is always copied and its checkbox cannot be cleared.

    :::note

    If you choose not to copy any of the dependent components, the newly copied primary component will continue to refer to the original dependent components.

    :::

5. To open a specific component within the packaged component, click the name in the**Component Name** field.

    The Build page opens in a separate browser tab or window with the selected component displayed.

6. To contact the user who last modified a specific component within the package, copy and paste from the email address in the **Modified By** field into a new email from whatever email service you choose.

7. When you are ready to copy the selected components, click **Copy n Components**.

    If any of the components have extensions defined \(as indicated in the **Has Extensions** field\), the component is copied but the extension values are not. You do not have to redefine the extensions in the copied component, but you do have to reset the extension values for the component. You set extension values on the Extensions dialog in Atom Management \(**Manage** \> **Atom Management** in the service\).

## Results

Your deployed process and associated components are successfully copied to the Component Explorer.