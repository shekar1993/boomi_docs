# Deleting a flow

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-a56e1462-73d1-4e05-9f7a-f9640e07b22a"/>
</head>


You can delete flows from the **Flows** page.

:::caution

Deleting a flow is permanent and cannot be undone.

:::

#### To delete a flow in the current tenant:

1.  Navigate to the **Flows** page.
2.  Click the **Delete Flow** icon ![Delete Flow](../Images/img-flo-Action_Delete_e55ced0f-3cf6-4eb8-b592-03dade0569ee.png) on the tile of the flow that you wish to delete.
3.  The **Confirm Delete** page is displayed and you are prompted to confirm the deletion. Deleting a flow is permanent and cannot be undone.
    -   Click **Cancel** to cancel the deletion and return to the **Flows** page.

    -   Click **Delete** to delete the flow.

4.  The flow is deleted and you are returned to the **Flows** page.

:::note

When a flow is published, a snapshot version of the flow is created. This snapshot is the package that is sent to the platform runtime engine. When we delete a flow, we delete the flow from the tenant. However, once a flow is published, the snapshot of the flow is not deleted. This means, even though a deleted flow is not available on the **Flows** page, the flow snapshot continues to exist in the tenant. For example, the deleted flow will still be shown in the **Select a Flow** drop-down menu on the **Import/Export** page.

:::