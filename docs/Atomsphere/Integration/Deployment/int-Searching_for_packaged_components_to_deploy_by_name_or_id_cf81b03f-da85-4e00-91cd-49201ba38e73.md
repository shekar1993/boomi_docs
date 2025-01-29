# Searching for packaged components to deploy by component name or ID 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-cf81b03f-da85-4e00-91cd-49201ba38e73"/>
</head>


Use the search bar on the Deploy Packaged Component wizard \(accessed from the **Deploy** \> **Deployments** page\) to quickly find packaged components to deploy using the component name or component ID.

## Procedure

1. In the **Deploy** menu, select **Deployments**.

    The Deployments page is displayed.

2. Click the **Deploy Packaged Component** button.

3. In the **Select Environment** screen of the wizard, choose the environment you wish to deploy to, and optionally add notes about the deployment.

4. Click **Next: Select Versions**.

    The Select Packaged Components screen appears. In the Select Packaged Components screen of the Deploy wizard, you will notice that the screen displays the Component Explorer and the folder hierarchy of all packaged components that are available for deployment. This part of the screen is where you can search for packaged components to deploy.

    :::note
    
    If you do not see a component in the list that you want to deploy, make sure that you have first created a packaged component for it. Packaged components are created from the **Deploy** \> **Packaged Components** page.

    :::

5. In the search box above the Component Explorer, do one of two things:

    - Type all or part of a component's name. Results with characters that match your entry appear as you type.
    - Enter the Component ID. Locate a component ID by opening the component in the Build tab, and view the Revision History. Copy the value in the Component ID field of the Revision History dialog.
  
    :::info Important

    The search bar returns results for component name and ID only, not the packaged component ID and version.

    Only those results that match your search bar entry will appear in the Component Explorer.

    :::

    1. To clear search results, click the Clear ![img-hub-circle_white_x_in_gray](../Images/main-ic-x-white-in-gray-circle-16_0abafeee-d5e7-4888-9bfb-475b11b6d00f.jpg) button inside the search bar.

    2. To select the packaged component for deployment from the list of filtered results, turn on its check box.

       A table detailing the component's packaged and deployed history appears to the right. From the table, you can select a different version of the packaged component to deploy, if you wish.

    3. Complete the steps within the wizard to initiate the deployment of your selections.
