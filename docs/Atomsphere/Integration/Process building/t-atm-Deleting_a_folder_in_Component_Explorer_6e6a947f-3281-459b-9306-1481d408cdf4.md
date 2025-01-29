# Deleting a folder in the Component Explorer

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-6e6a947f-3281-459b-9306-1481d408cdf4"/>
</head>


If you no longer need a component folder, you can delete it.

## About this task


It is not possible to delete

-   process components deployed to active Atoms or environments.

-   published process components shared with account groups.

-   components that are referenced by other components.


If you attempt to delete a folder containing any such components, the folder is not deleted — instead an alert is displayed identifying the components. This is also the case if you try to delete a folder containing a sub-folder containing any such components.

## Procedure

1.  Click the blue arrow **![icon](../Images/main-ic-arrow-blue-down-16=GUID-CA79043B-869E-4C8B-A46E-5D4D4FA1DBEE=1=en-us=Low_ee257e3c-4362-486e-b1f1-4d613b679c4c.jpg)** next to the folder.

2.  Select **Delete**.

    If the folder has write restrictions on it and if you are not assigned a user role that allows write access to the folder, this option is not available.

    If the folder’s parent folder has write restrictions on it and if you are not assigned a user role that allows write access to the parent folder, this option is not available.

    If the folder and its sub-folders do not contain any components, or if they contain only components that *do not* meet the three criteria in the note at the top of this topic, the Confirm Folder Delete dialog opens. Skip to step 4.

    If the folder or its sub-folders contain components that are referenced by other components, the Confirm Deletion of Folder with Referenced Components dialog opens. It displays the names of the referenced components in the folders. Go to the next step.

    If the folder contains a sub-folder with write restrictions on it and if you are not assigned a user role that allows write access to the sub-folder, you will be prevented from deleting the folder.

3.  Do one of the following:

    -   To delete only the components that are not used, make sure that the **Delete unreferenced components only** check box is selected. If the folder and its sub-folders contain only unused components, the folder will be deleted. If the folder or its sub-folders contain components that are used, the folder will not be deleted.

    -   To delete components that are used, components that are not used, and the folder and sub-folders, clear the **Delete unreferenced components only** check box.

4.  Click **OK** to confirm the deletion.

    If the folder and its sub-folders do not contain any components, the folder is deleted.

    If the folder and its sub-folders contain only components that are not used, the folder, sub-folders and the unused components are deleted.

    If the folder and its sub-folders contain components that are used, the result depends on your selection in the previous step.

    If the folder and its sub-folders contain process components deployed to active Atoms or environments, the Unable to Delete Folder dialog is displayed. The folder, sub-folders and the deployed process components are not deleted. Continue to the next step.

    If the folder and its sub-folders contain published process components shared with account groups, the Unable to Delete Folder dialog is displayed. The folder, sub-folders and the published, shared process components are not deleted. Continue to the next step.

5. **Optional:** Click **OK** to continue.