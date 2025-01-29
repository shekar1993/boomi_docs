# Copying a component

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-83a52ee7-e4b0-4c8e-9256-9905b1baba67"/>
</head>

You can copy a component to another account or to a different folder within the same account.

For processes that contain Process Route components, the process routes and the subprocesses that they call are not copied as part of this operation. Because they are not dependent components, you must copy process routes and their subprocesses independently.

When copying a component, you can copy only the latest revision. If you want to copy a previous revision, you can open the revision and make a new save, then copy the component as described below.

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
