# Managing Components in Component Explorer

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-220bf37c-bb41-44a0-915c-8ce05889a9ba"/>
</head>

The Component Explorer allows users to manage components by editing, copying, moving, and deleting them efficiently. Whether you are editing, copying, moving or deleting a component, the following sections provide instructions for all component-related tasks.

<details>
<summary>Editing a component</summary>

You can edit components directly in the build page.

1.  Navigate to the folder containing the component in the Component Explorer.

2.  Double-click the component to open it.

    -  If the folder has no write restrictions or you have the necessary user role, the component opens in editable mode on the process canvas.

    - If the folder has write restrictions and you lack access, the component opens in read-only mode.

3.  To edit the component's name, enter a new name in the text box next to the component type (max 255 characters).

4.  To edit the component's description, click **Edit Description Here** and enter a new description.

5.  Click **Save** or **Save and Close**.

    For information on how to configure different types of components, see the specific topics in the Build section of the table of contents.
</details>

<details>
<summary>Copying a component</summary>

You can create a copy of a component within the same account or in a different account. This is useful for creating variations of a component or for sharing components across projects.

:::note
- Only the latest revision of a component can be copied. To copy an older revision, you need to open that revision, save it as a new component, and then copy the new component.
- Process Route components and their associated subprocesses are not dependent components. You must copy these independently.
:::

1. In the Component Explorer, navigate to the folder containing the component you want to copy.

2. Click the blue arrow **![icon](../Images/main-ic-arrow-blue-down-16=GUID-CA79043B-869E-4C8B-A46E-5D4D4FA1DBEE=1=en-us=Low_ee257e3c-4362-486e-b1f1-4d613b679c4c.jpg)** next to the component name.

3. Select **Copy**.

   The Copy Component dialog opens.

4. In the **Enter Name Here** field, type the name to assign to the copy.

   :::note

   If you skip this step, the name assigned to the copy is the source component name appended with a space followed by a number — for example, Source Component Name 2.

   :::

5. To copy the component to the same account, accept the default in the **Copy to Account** field and skip to step 8. To copy to another account, click the **Browse ![icon](../Images/main-ic-magnifying-glass-16_cd0f3352-63b0-4d15-af6d-86e11b9d14eb.jpg)** icon.

   The Choose Account dialog opens.

6. Find the account, select it and click **OK**.

7. \(Enabled only when copying to a different account.\) To copy passwords used by the component, select **Copy Passwords Across All Accounts**.

8. If you do not want to copy dependents that the component references, clear **Copy Component Dependents**.

   Component dependents copy by default. You cannot clear the check box if you copy a component to a different account. All referenced components, including dependents, must exist under the same account and copy to the destination account.

   :::note

   Process Route components and the subprocesses that they call are not dependent components. You must copy those components independently.

   :::

9. In the **Destination Folder** field, do one of the following:

   - In **Destination folder**, click on the text box to select a folder from the list.
   - In **Destination folder**, click on the green arrow on the far right of the text box to create a new folder. A new folder dialog box opens, where you can create a new name for your folder and then you select a parent folder to save it in.

   If a folder has write restrictions on it and if you do not have write access to the folder, you can see the folder but you cannot select it. There is a gray lock on the folder icon ![icon](../Images/main-ic-folder-yellow-with-lock_f6a422b9-3994-4569-87ee-bc5c81c81d9a.jpg).

10. Alternatively, you can create and select a new folder location when copying and moving folders and components. Click the plus \(+\) symbol to create a new folder.

11. Click **OK**.

</details>

<details>
<summary>Moving a component to another folder</summary>

You can move a component by dragging and dropping it to a different location in Component Explorer, or using the Move Component function in the Folder Details for a given component.

1.  In the Component Explorer, navigate to the folder containing the component.

2.  Click the component, drag and drop it to another folder.

    If the destination folder is valid, the folder's name is highlighted in green. If the source folder or the destination folder has write restrictions on it and if you are not assigned a user role that allows write access to those folders, you receive an error message and the component does not move.

3.  Alternatively, open a component on the Build page and click **Folder Details** at the top of the opened component.

4.  Under **Move to Another Folder** in the Folder Details dialog, choose a folder in the hierarchy and click **Confirm Move**.

    Moving a component in this manner saves any changes you may have made to the component. You are prompted to confirm a final time before the component is saved and moved.

    You can create and select a new folder location when copying and moving folders and components. Click the plus \(+\) symbol to create a new folder.

</details>

<details>
<summary>Deleting a component</summary>

You can delete no longer needed components from an account.
However, you cannot delete these components:

-   Process components deployed to active Atoms or environments. If you attempt to delete one, an alert is displayed identifying the Atoms and environments.

-   Published process components shared with account groups. If you attempt to delete one, an alert is displayed giving the reason. If applicable, the alert specifies shared integration packs to which the process is assigned.

1.  In the Component Explorer, navigate to the folder containing the component.

2.  Click the arrow **![icon](../Images/main-ic-arrow-blue-down-16=GUID-CA79043B-869E-4C8B-A46E-5D4D4FA1DBEE=1=en-us=Low_ee257e3c-4362-486e-b1f1-4d613b679c4c.jpg)** next to the component's name.

3.  Select **Delete**.

    If the folder has write restrictions on it and if you are not assigned a user role that allows write access to the folder, this option is not available.

    If the component is not referenced by other components, a confirmation window appears and you can skip to the last step of this task. If the component is referenced by other components, the Confirm Deletion of Referenced Component dialog opens.

4.  If you want to view a component that references the component that you want to delete:

    1.  In the dialog, navigate to the folder containing the component.

    2.  Click the arrow **![icon](../Images/main-ic-arrow-blue-down-16=GUID-CA79043B-869E-4C8B-A46E-5D4D4FA1DBEE=1=en-us=Low_ee257e3c-4362-486e-b1f1-4d613b679c4c.jpg)** next to the component’s name and select **Open**.

    The component opens on another page.

    3.  After viewing the component, close the page.

5.  Click **OK** to confirm the deletion.

    This operation cannot be undone.

6.  To view all deleted components in an account, apply the **Show Deleted Components** filter in Component Explorer.

    The Show Deleted Components filter returns results for both Deleted and active components.

Upon deleting a component from the Component Explorer, the deleted component is no longer displayed in the Component Explorer and is not returned in the list of Show Where Used filter results. However, keep in mind that though references to and from the deleted component are removed, the component will still display in the process canvas until it is either replaced with an active component or is removed from the process. A deleted component requiring cleanup is indicated by red text on the process canvas.

:::note

When a component is deleted, it is no longer usable in the process canvas and is not visible by default in Component Explorer. However, deleted components can be restored. For more information about how to restore a component's functionality, see the topic [Deleted component restoration](c-atm-Deleted_component_restoration_849e05de-1a6a-4e55-a2e3-683c7acc4ae1.md).

:::

</details>
