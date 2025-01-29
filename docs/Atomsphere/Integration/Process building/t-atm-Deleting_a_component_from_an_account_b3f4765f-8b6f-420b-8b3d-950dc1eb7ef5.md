# Deleting a component from an account

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-b3f4765f-8b6f-420b-8b3d-950dc1eb7ef5"/>
</head>


In general you can delete no longer needed components from an account.

## About this task

However, you cannot delete these components:

-   Process components deployed to active Atoms or environments. If you attempt to delete one, an alert is displayed identifying the Atoms and environments.

-   Published process components shared with account groups. If you attempt to delete one, an alert is displayed giving the reason. If applicable, the alert specifies shared integration packs to which the process is assigned.

## Procedure

1.  In the Component Explorer, navigate to the folder containing the component.

2.  Click the blue arrow **![icon](../Images/main-ic-arrow-blue-down-16=GUID-CA79043B-869E-4C8B-A46E-5D4D4FA1DBEE=1=en-us=Low_ee257e3c-4362-486e-b1f1-4d613b679c4c.jpg)** next to the component's name.

3.  Select **Delete**.

    If the folder has write restrictions on it and if you are not assigned a user role that allows write access to the folder, this option is not available.

    If the component is not referenced by other components, a confirmation window appears and you can skip to the last step of this task. If the component is referenced by other components, the Confirm Deletion of Referenced Component dialog opens.

4.  If you want to view a component that references the component that you want to delete:

    1.  In the dialog, navigate to the folder containing the component.

    2.  Click the blue arrow **![icon](../Images/main-ic-arrow-blue-down-16=GUID-CA79043B-869E-4C8B-A46E-5D4D4FA1DBEE=1=en-us=Low_ee257e3c-4362-486e-b1f1-4d613b679c4c.jpg)** next to the component’s name and select **Open**.

    The component opens on another page.

    3.  After viewing the component, close the page.

5.  Click **OK** to confirm the deletion.

    This operation cannot be undone.

6.  To view all deleted components in an account, apply the **Show Deleted Components** filter in Component Explorer.

    The Show Deleted Components filter returns results for both Deleted and active components.

## Results

Upon deleting a component from the Component Explorer, the deleted component is no longer displayed in the Component Explorer and is not returned in the list of Show Where Used filter results. However, keep in mind that though references to and from the deleted component are removed, the component will still display in the process canvas until it is either replaced with an active component or is removed from the process. A deleted component requiring cleanup is indicated by red text on the process canvas.

:::note

When a component is deleted, it is no longer usable in the process canvas and is not visible by default in Component Explorer. However, deleted components can be restored. For more information about how to restore a component's functionality, see the topic [Deleted component restoration](c-atm-Deleted_component_restoration_849e05de-1a6a-4e55-a2e3-683c7acc4ae1.md).

:::