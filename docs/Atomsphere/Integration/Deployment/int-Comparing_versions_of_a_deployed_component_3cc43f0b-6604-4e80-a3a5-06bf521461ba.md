# Comparing versions of a deployed component 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-3cc43f0b-6604-4e80-a3a5-06bf521461ba"/>
</head>


Use the **Compare Deployments** feature to view configuration differences between two versions of a packaged component.

## Procedure

1. From the **Deploy** menu, select **Deployments**.

2. To see the full list of deployments, use the Clear ![img-int-blue_circle_with_white_x](../Images/img-int-blue_circle_with_white_x_8a03d8b0-defd-4cfc-bcc1-b3d53392b78b.jpg) button to remove the "Past Week" date filter that is applied by default.

3. From the list, locate the deployed component whose versions you want to compare by sorting the **Component Name** and **Packaged Version** columns, or by applying search filters as needed.

4. Click the **Actions** ![img-int-black_gear](../Images/main-ic-gear-black-16_cdde83e4-a176-436a-86ca-1fe4937e3085.jpg) icon for the packaged component version that you want to compare, and then select **Compare Deployments**.

    The Compare Deployments dialog opens with the selected version listed in the Selected Version field.

5. In the **Compare to** field, choose one of the following:

    - **Latest Revision in Development** — this option compares the latest configuration of the selected component that you have saved on the Build tab with the version you selected in Step 3. Essentially, you are comparing the configuration changes of **a non-packaged version** of a single component with a version that **is packaged**.

    - **Another version** — this option allows you to pick another version of the same packaged component, if the component was packaged multiple times. For example, you can select to compare versions 1.0 and 2.0 of a packaged component titled Flow Service 1.

    If there is only one version created for a packaged component, you only have the option to compare to the latest component revision in development on the Build tab.

6. Click **Compare**.

    The Compare Deployments Results dialog opens and displays the primary component and any child components, if applicable, in a table. The table shows detailed information about the component, including name, type, and selected versions, modified date, as well as the last user to modify a version of the component.

7. Under both **Compare Revision column** headers, click on the links to open both versions of the selected component on the Build tab, which allows you to compare configuration differences between them.

    **Important:** When a row in the table is highlighted yellow, this indicates that there are configuration changes between both selected versions of the component. If the row is not highlighted, this indicates that no configuration changes occurred between versions.

8. (Optional) Filter rows by clicking **With Changes** and **Without Changes** at the top of the table to quickly see if configuration changes did or did not occur between both selected versions of the packaged components. The table lists primary components and child components individually that are included in the packaged component.

9. (Optional) To select a different version with which to compare, click **Back** and repeat steps 5 and 6.

10. When you are done comparing the two deployments, click **Close**.