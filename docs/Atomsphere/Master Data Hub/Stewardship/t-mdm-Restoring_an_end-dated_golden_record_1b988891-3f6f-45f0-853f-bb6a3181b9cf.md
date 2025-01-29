# Restoring an end-dated golden record 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-1b988891-3f6f-45f0-853f-bb6a3181b9cf"/>
</head>


You can restore an end-dated golden record in the Golden Records screen so it is active again.

## About this task

End-dated golden records are records that are marked as inactive. This is useful when you want to indicate which records you plan to delete. Data stewards can review end-dated records to ensure they should be [permanently deleted from the Boomi Hub Cloud](/docs/Atomsphere/Master%20Data%20Hub/Stewardship/hub-Purging_golden_records_5076fa51-e045-4557-a7b3-894c3b274fb4.md).

You can also restore end-dated golden records using the [Repository API](/docs/Atomsphere/Master%20Data%20Hub/REST%20APIs/hub-Restore_End-dated_Golden_Record_for_Transaction_a0555bc1-7dd0-4590-83a4-0339f7306c89.md).

- If an entity is quarantined because it is linked to an end-dated record, you can restore a golden record from the quarantine entry details on the Stewardship > Quarantine screen.

- If an entity is quarantined because it refers to an end-dated golden record, Boomi DataHub automatically resubmits the quarantine entity after you restore the record. Automatic resubmittal helps you easily resolve Reference Unknown and Matching Reference Unknown errors.

## Procedure

1.  Select **Stewardship** \> **Golden Records**.

2.  In the repository/domain list, select the domain.

3.  Click **End-dated**.

4.  In the data grid, click the Updated Date of the golden record.

    The detail view opens.

5.  In the **![](../Images/main-ic-gear-gray_54d864eb-b5de-4ee6-9b31-975dae0a5762.jpg) Actions** menu, select **Restore this record**.

6.  In the confirmation dialog, click **OK**.

    Boomi DataHub sends a single Restore Record update request to each source linked to the golden record. This occurs even if the golden record is linked to multiple entities in a source system. Boomi DataHub also attempts to resolve pending references in the golden record.