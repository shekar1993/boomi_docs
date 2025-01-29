# Comparing two versions of a packaged component 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-9d8d96e1-3bab-4dc2-9c74-65526691b6f6"/>
</head>


Use the **Compare Packaged Components** feature to view configuration differences between two versions of a packaged component.

## Procedure

1. From the **Deploy** menu, select **Packaged Components**.

    The Packaged Components page opens.

2. From the list, locate a packaged component that you want to compare differences between versions.

    You can review the **Component Name** and **Version** columns to quickly find your selection, or apply search filters.

3. Click the **Actions** ![img-int-black_gear](../Images/main-ic-gear-black-16_cdde83e4-a176-436a-86ca-1fe4937e3085.jpg) icon for the packaged component version that you want to compare, and then select **Compare Packaged Components**.

    The Compare Packaged Components dialog opens with the selected version listed in the Selected Version field.

4. In the **Compare to** field, choose one of the following:

    - **Latest Revision in Development**— this option compares the latest revision of the selected component that is saved on Build tab with the version you selected in Step 3. Essentially, you are comparing the configuration changes of **a non-packaged version** of a single component with a version that **is packaged**.
  
    - **Another version**— this option allows you to pick another version of the same packaged component, if the component was packaged multiple times. For example, you can select to compare versions 1.0 and 2.0 of a packaged component titled Flow Service 1.
    If there is only one version created for a packaged component, you only have the option to compare to the latest component revision in development on the Build tab.

5. Click **Compare**. 

    The Compare Packaged Components Results dialog opens and displays the primary component and any child components in the table, if applicable. The table shows detailed information about the component, including name, type, and selected versions, modified date, as well as the last user to modify a version of the component.

6. Under both **Compare Revision column** headers, click on the links to open both versions of the selected component on the Build tab, which allows you to compare configuration differences between them.

    :::info Important

    When a row in the table is highlighted yellow, this indicates that there are configuration changes between both selected versions of the component. If the row is not highlighted, this indicates that no configuration changes occurred between versions.

    :::

7. (Optional) Filter rows by clicking **With Changes** and **Without Changes** at the top of the table to quickly see if configuration changes did or did not occur between both selected versions of the packaged components. The table lists primary components and child components individually that are included in the packaged component.

8. (Optional) To select a different version to compare, click **Back** and repeat steps 4 and 5.

9. When you are done comparing the two packaged component versions, click **Close**.