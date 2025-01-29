# Deleting a Type

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-6d68d0b3-00ee-4bc9-a02a-a87ac54aaaf3"/>
</head>


You can delete types from the **Types** page.

:::caution

Deleting a type is permanent and cannot be undone.

:::

To delete a type:

1.  Navigate to the **Types** page.
2.  Click the **Delete Type** icon ![Delete Type](../Images/img-flo-Action_Delete_e55ced0f-3cf6-4eb8-b592-03dade0569ee.png) in the **Actions** column of the type row that you wish to delete.
3.  The **Confirm Delete** page is displayed and you are prompted to confirm the deletion. Deleting a type is permanent and cannot be undone.
    -   Click **Cancel** to cancel the deletion and return to the **Types** page.

    -   Click **Delete** to delete the type.

4.  The type is deleted and you are returned to the **Types** page.

:::note

If you try to delete a type that is still referenced in a flow, a message will be displayed informing you that the type cannot be deleted due to existing dependencies. Edit the type and refer to the **Dependencies** section on the **Type** page to see where the type is still referenced within the system. These dependencies will need to be removed before the type can be deleted. See [Editing a Type](t-flo-Types_Editing_63c3214c-0269-4681-adb2-f3ec7a2d39ac.md). System types cannot be deleted. See [System Types](r-flo-Types_System_d5418044-1ac0-4d01-9485-5ebd06ab7f8e.md).

:::