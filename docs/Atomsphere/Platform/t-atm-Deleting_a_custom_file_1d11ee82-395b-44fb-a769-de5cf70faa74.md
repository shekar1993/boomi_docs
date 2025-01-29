# Deleting a custom file 

<head>
  <meta name="guidename" content="Platform"/>
  <meta name="context" content="GUID-1d11ee82-395b-44fb-a769-de5cf70faa74"/>
</head>


You can delete custom JAR files but should not delete one that is referenced in a Custom Library component.

## Procedure

1.  On the **Manage Account Libraries** page, select the JAR file that you want to delete.

2.  In the **![Gear or Actions icon](Images/main-ic-gear-black-16_cdde83e4-a176-436a-86ca-1fe4937e3085.jpg) Actions** menu for the file, select **Delete**.

    If the JAR file is referenced in a Custom Library component that is not yet deployed, a warning message is displayed. Deleting the file could cause problems with the component. You can cancel the delete request or click **Delete** to continue.

    If the JAR file is referenced in a Custom Library component that *is* deployed, an error message is displayed. You cannot delete a JAR file while any components that reference the file are deployed.

3.  In the confirmation dialog, click **OK** to confirm the deletion.

    The JAR file is removed from your account library and the space that it occupied is released.