# Managing Folders in Component Explorer

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-4274ce5a-896b-4014-a1ce-f8089a9679d7"/>
</head>

Folders in Component Explorer allow you to efficiently organize your components, making them easier to find and manage. Whether you are creating a new folder structure, reorganizing existing folders, or applying permissions for secure collaboration, the following sections provide step-by-step instructions for all folder-related tasks.

<details>
<summary>Creating a folder</summary>

You can create new folders only within existing ones. For instance, if the main folder is "Primary," any new folder you create will appear as a subfolder at the next level, referred to as "Secondary." Additionally, you can create folders within these secondary folders.

1. Select the parent folder in which you want to create a folder.

2. Click the arrow icon next to it and select **New Folder**.

    - If write restrictions exist and your user role lacks access, this option is unavailable.

3. In the New Folder dialog, type a name for the folder and click **OK**.

    The new folder inherits the permissions of its parent folder.
</details>

<details>
<summary>Renaming a folder</summary>

You can rename component folders when needed.

1. Click the arrow icon next to the folder.

2. Select **Rename** to open the Rename Folder dialog.

    - If the folder has write restrictions on it and if you are not assigned a user role that allows write access to the folder, this option is not available.

    - If the folder’s parent folder has write restrictions on it and if you are not assigned a user role that allows write access to the parent folder, this option is not available.

3. Type a new name for the folder and click **OK**.
</details>

<details>
<summary>Copying a folder</summary>

1. Select the folder and click the arrow icon, then choose Copy.

2. In the **Copy Folder** dialog, select the target account and destination folder:

    - To copy within the same account, leave the default account in the required **Copy to Account** field.

    - To copy to another account, click the **Browse** icon, select an account, and click **OK**.

3. Select **Copy Passwords Across All Accounts** to include component passwords.

4. Select **Copy All Subfolders** to include sub-folders.

5. Clear **Copy Component Dependents** if you do not want to copy dependent components including those in other folders, as they are copied by default.

6. In the **Destination Folder** field, click the **Browse** icon icon and select a folder.
    - If the destination folder has write restrictions on it and if you are not assigned a user role that allows write access to the folder, you can see the folder but you cannot select it. The folder icon has a gray lock icon on it.

    - If the folder or any of the sub-folders that you are copying have write restrictions on them, those restrictions are not applied to the copies that you are creating.

7. Alternatively, create and select a new folder location using the + icon, when copying and moving folders and components, then click **OK**.
</details>

<details>
<summary>Moving a folder</summary>

1. Drag and drop the selected folder to a new location.

    - If the location is valid, it is highlighted in green. Otherwise, it is not highlighted.

    - Write restrictions on the folder, it's parent folder or destination folder will prevent the move if your user role lacks access and gives an error message.

    - Existing write restrictions on the folder and its sub-folders remain intact in the new location.
</details>

<details>
<summary>Deleting a folder</summary>

1. Select the folder and click the arrow icon, then select **Delete**.

    - If write restrictions exist on the folder or the folder's parent folder or it's sub-folders, and your user role lacks access, this option is unavailable.

:::note
    - It is not possible to delete:

        - process components deployed to active Atoms or environments.

        - published process components shared with account groups.

        - components that are referenced by other components.

    If you attempt to delete a folder or it's sub-folder containing any such components, then the folder is not deleted — instead an alert is displayed identifying the components.

    - If the folder and its sub-folders do not contain any components, or if they contain only components that do not meet the following criteria, the **Confirm Folder Delete** dialog opens and you can proceed with the deletion.

    - If the folder or its sub-folders contain components that are referenced by other components, the **Confirm Deletion of Folder with Referenced Components** dialog opens. It displays the names of the referenced components in the folders to select and proceed with the deletion.

    - If the folder and its sub-folders contain process components deployed to active Atoms or environments, the **Unable to Delete Folder** dialog is displayed. The folder, sub-folders and the deployed process components are not deleted.

    - If the folder and its sub-folders contain published process components shared with account groups, the **Unable to Delete Folder** dialog is displayed. The folder, sub-folders and the published, shared process components are not deleted.
:::

4. Confirm deletion in the appropriate dialog and click **OK** to confirm the deletion.
</details>

