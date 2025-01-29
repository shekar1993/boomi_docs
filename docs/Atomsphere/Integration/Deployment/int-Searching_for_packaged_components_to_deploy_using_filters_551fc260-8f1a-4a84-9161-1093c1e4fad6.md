# Searching for packaged components to deploy using filters 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-551fc260-8f1a-4a84-9161-1093c1e4fad6"/>
</head>


Use filters on the Deploy Packaged Component wizard \(accessed from the **Deploy** \> **Deployments** page\) to quickly find packaged components to deploy.

## Procedure

1. In the **Deploy** menu, select **Deployments**.

    The Deployments page is displayed.

2. Click the **Deploy Packaged Component** button.

3. In the **Select Environment** screen of the wizard, choose the environment you wish to deploy to and optionally add notes about the deployment.

4. Click the **Next: Select Versions** button.

    The Select Packaged Components screen appears. In the Select Packaged Components screen of the Deploy wizard, you will notice that the screen displays the Component Explorer and the folder hierarchy of all packaged components that are available for deployment. This part of the screen is where you can filter for packaged components to deploy.

    :::note
    
    If you do not see a component in the list that you want to deploy, make sure that you have first created a packaged component for it. Packaged components are created from the **Deploy** \> **Packaged Components** page.

    :::

5. Click the **Add Filters**![img-atm-Add_filter](../Images/img-atm-Add_filter_e3ea3e31-68f5-46f4-b975-4f37e3d3df53.jpg) button next to the Component Explorer search bar.

    A list of filters appears.

6. Apply the following filters as necessary:

    - **Deployed Status** — Narrows results by showing packaged components based on whether or not they are actively deployed \(**Deployed**\) or those that are not deployed \(**Not Deployed**\).
    - **Component Type** — Narrows results based on a specific category or type of component. For example, filter by "Processes" to show only those packaged components that were created on the Build tab as process components. Search for packages by selecting one or more component types from the list.

        The following types of components can be deployed independently: Process, API, Certificate \(public X.509\), Process Route, Trading Partner, Custom Library, Flow Service.

    - **Release Version** — Filter by the specific version name given to a packaged component. You must enter the exact version in order to successfully produce filter results.

    You can select any combination of filters by turning on check boxes \(or entering values in the Release Version filter\). A package must match all selected filters to be included in the list.

7. Click **Apply**.

    Only those packaged components that match your applied filters appear in the Component Explorer.

8. To reset the list, click the **Filter**![img-int-applied_filter_green_check](../Images/img-int-applied_filter_green_check_b010f8af-623c-42ce-8149-3df96f55be76.jpg) button and then **Clear all filters**.

9. To select the packaged component for deployment from the list of filtered results, turn on the check box.

    A table detailing the component's packaged and deployed history appears to the right. From the table, you can select a different version of the packaged component to deploy, if you wish.

10. Complete the steps within the wizard to initiate the deployment of your selections.
