# Deleted component restoration

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-849e05de-1a6a-4e55-a2e3-683c7acc4ae1"/>
</head>


You can restore a component that was accidentally or intentionally deleted. Deleted components are never actually purged from the platform, so they are always available to be restored.

If the folder in which the deleted component was stored is no longer visible in the Component Explorer because the folder also was deleted, you can search the Component Explorer to find the deleted folders and components. Applying the **Show Deleted Components filter** in Component Explorer displays all categories and folders that contain deleted components, as well as the deleted components themselves. This method is the best to use if you want to restore certain deleted components, not all of the deleted components in a folder or category.

After applying the Show Deleted Components filter, you can navigate to the deleted component and restore it to its original location. If you locate a deleted component but are unsure whether it is the one that you want to restore, rather than restoring it immediately you should double-click the component to open it on the process canvas. It will contain a red banner and text indicating that it is a deleted component. Once you have confirmed that it is the correct component you can save it, which restores it to its original location. If the deleted component was in a folder that also was deleted, when you restore the component its parent folder\(s\) are restored as well. If the folder in which the component is stored has write restrictions on it and if you are not assigned a user role that allows write access to that folder, you cannot restore the component.

There are some exceptions to restoring components and folders:

-   If you created a folder but never stored any components in it, you cannot restore that folder.

-   If the folder in which a component is stored has write restrictions on it and if you are not assigned a user role that allows write access to that folder, you cannot restore the component.

-   If you want to restore a folder that has write restrictions on it, you must have a user role that allows write access to that folder. You must also have write access to the folder’s parent folder. If the folder to be restored has sub-folders, you must also have write access to all of the sub-folders, including sub-folders that may have been deleted.

:::note

You can also restore a deleted process component from the Process Reporting page if the process was deployed and executed on an Atom within the last 30 days prior to being deleted. See the topic linked below for information.

:::