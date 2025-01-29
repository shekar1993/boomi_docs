# Deleting a value

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-6aebdd89-a9e7-4935-b6a9-633bfb036cef"/>
</head>


You can delete values from the **Values** page.

:::caution

Deleting a value is permanent and cannot be undone.

:::

To delete a value:

1.  Navigate to the **Values** page.
2.  Click the **Delete Value** icon ![Delete Value](../Images/img-flo-Action_Delete_e55ced0f-3cf6-4eb8-b592-03dade0569ee.png) in the **Actions** column of the value row that you wish to delete.
3.  The **Delete Value** dialog is shown, prompting you to confirm the deletion. Deleting a value is permanent and cannot be undone.
    -   Click **Cancel** to cancel the deletion and return to the **Values** page.

    -   Click **Delete** to delete the value.

4.  Once the value is deleted, you are returned to the **Values** page.

:::note

If you try to delete a value that is still referenced in a flow, a message will be displayed informing you that the value cannot be deleted due to existing dependencies. Edit the value and refer to the **Dependents** section on the **Value** page to see where the value is still referenced within the system. These dependencies will need to be removed before the value can be deleted. See [Editing a value](/docs/Atomsphere/Flow/topics/t-flo-Values-Edit_fdf5c84e-efa5-4ea6-9095-324c205598f2.md).

:::