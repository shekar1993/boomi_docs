# Finding where a component is used

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-7f30a40d-1c3e-4b7d-b748-f958cacf1b0f"/>
</head>


Components can be used in multiple processes or in other components. Use the Show Where Used filter in Component Explorer to see where a component is used.

## About this task

The Show Where Used filter shows all the locations where the selected component is referenced. In the following image, for example, the Show Where Used filter is applied to the Process Property "fileInfo". The filter results are displayed in a tree hierarchy, and include both the selected component and the parent components that directly reference it. In our example, results show that 3 parent processes, "Basic Box Examples", "Box Basics: Get a File", and "Box Basics: Create a File", all commonly use the "fileInfo" process property.

![The Show Where Used filter shows results for the Process Property "fileInfo".](../Images/img-int-Show_Where_Used_filter_4cbfc615-c3bd-4263-98a7-5d9141cb8f34.png)

:::note

To see all the child components included in a Process component, you can open a Process component on the process canvas to see its configuration or if the process has been packaged, view its associated Packaged Component details from the **Deploy** \> **Packaged Components** page.

:::

## Procedure

1.  Click the blue arrow **![icon](../Images/main-ic-arrow-blue-down-16=GUID-CA79043B-869E-4C8B-A46E-5D4D4FA1DBEE=1=en-us=Low_ee257e3c-4362-486e-b1f1-4d613b679c4c.jpg)** next to the component.

2.  Select **Show Where Used**.

    The filter shows all the components and processes where the selected component is referenced. If your selected component does not show any other components in the results list, this means that the component is not used or referenced by another component.

3.  To clear the usage results, select the blue filter icon **![icon](../Images/main-ic-filter-checked_d64331c4-cbcd-420b-962d-9c7b33c254fc.jpg)** and click **Clear all filters**.

## Results

The Show Where Used filter shows you the dependent or independent reference between the given component and the parent component which uses it. For more information about the different types of component references that exist on the Integration platform, see the topic [Component References](int-Component_references_8d7cf9db-2716-4301-b8d8-46eb9f055999.md).