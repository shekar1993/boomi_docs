# Deleting a domain’s quarantine entries 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-ef69ed4b-c5d4-47d2-a953-8e58219615ea"/>
</head>


Upon making changes to source data or the integration process that routes incoming batches to the repository for the purpose of resolving quarantine entries, you should delete the entries and re-execute the process. As you review quarantined entities that require manual approval for incorporation in the domain, you can effectively reject an entity simply by deleting its quarantine entry.

## Procedure

1.  Select **Stewardship** \> **Quarantine**.

2.  In the repository/domain list, select the domain.

3.  Do one of the following:

    ![Delete menu actions](../Images/Stewardship/mdm-mn-quarantine-delete_deddabca-443f-4f6e-affb-55fcc7494b6a.jpg)

    -   To delete selected quarantine entries, select their check boxes, click **Delete** and in the drop-down menu, select **Selected**.

    -   To delete all quarantine entries associated with a particular source, including those not listed due to filtering, click **Delete** and in the drop-down menu, select **By Source**.

    -   To delete all quarantine entries, including those not listed due to filtering, click **Delete** and in the drop-down menu, select **All**.

    A confirmation dialog appears.

4.  If you are deleting all quarantine entries associated with a source, select the **Source**. Otherwise, skip to step 5.

5.  Click **OK**.

    :::note
    
    Another way to delete a single quarantine entry is to select **Delete** in the **![](../Images/main-ic-gear-gray_54d864eb-b5de-4ee6-9b31-975dae0a5762.jpg) Actions** menu in its detail view. This too requires confirmation.

    :::