# Resolving matching issues for a quarantined entity 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-49051dad-e48f-4bcc-b6a6-8ce90c45d578"/>
</head>


During the maintenance phase of a Boomi DataHub, a common quarantine management task is resolving matching errors arising from the application of match rules.

## Before you begin

Masked values are visible if you have one of the following user permissions: 

- **MDM - Privileged Data Steward** role
- **MDM - Administrator** role
- **MDM - Reveal Masked Data** privilege
- **MDM - Data Steward** role or (**MDM - Stewardship** privilege) and the **Reveal Masked Data** Hub entitlement (available with the Advanced Security feature)


## Procedure

1.  Select **Stewardship** \> **Quarantine**.

2.  In the repository/domain list, select the domain.

    The quarantine entry list appears.

    ![Quarantine entries list filtered on matching errors](../Images/Stewardship/mdm-ps-domain-quarantine-tab_90ae25b1-9671-4378-bba8-76a081942580.jpg)

3.  In the list, click the **Quarantined Date** for the quarantined entity.

    The quarantine entry details appears.

    ![Quarantine entry details view for an entity quarantined as a potential duplicate](../Images/Stewardship/mdm-ps-domain-quarantine-tab-detail_39f0dc40-4d16-404e-96d1-559eed9e6187.jpg)

4.  In the **![](../Images/main-ic-gear-gray_54d864eb-b5de-4ee6-9b31-975dae0a5762.jpg) Actions** menu, select **Match**.

    The Resolve Matching Issues wizard opens.

    ![Resolve Matching Issues wizard’s initial screen](../Images/Stewardship/mdm-db-resolve-intro_f6b6042b-5e51-488c-91e6-9968d8507eee.jpg)

5.  Click **Next**.

    -   If the quarantined entity is a potential duplicate of existing golden records, the wizard advances to the Potential Duplicates screen — continue with step 6.

    -   Otherwise, multiple golden records are eligible matches for the quarantined entity so the wizard advances to the Choose a Match screen — skip to step 11.

6.  In the Potential Duplicates screen, click the arrow icons to navigate between golden records for which the quarantined entity is a potential duplicate and for each presented golden record, compare the golden record fields with the entity’s fields.

    ![Potential Duplicate screen of the Resolve Matching Issues wizard](../Images/Stewardship/mdm-db-resolve-dup-reject_84493d36-872b-4607-bbc8-a7f5cedcfcd4.jpg)

7.  Do one of the following:

    -   To mark the entity as eligible for incorporation into the domain as a new golden record despite the entity being a potential duplicate, select **Ignore potential duplicates and create a record**.

    -   To indicate you want to selectively merge fields from the entity into a matching golden record, select **Merge selected entity fields into an existing record**, navigate to the golden record, and select **Selectively merge fields into this record**.

        ![Selectively merging fields from a potential duplicate entity into a matching golden record](../Images/Stewardship/mdm-db-resolve-dup-merge_d13f3f2c-4842-4032-82d8-795deb24bec6.jpg)

    -   To indicate you want to reject the entity, select **Reject this quarantined entity**.

8.  To advance to the next screen, click **Next**

    -   If you selected the option to selectively merge fields, the wizard advances to the Selectively Merge Fields screen— continue with step 9.

    -   If you selected the option to mark the entity as eligible for incorporation but multiple golden records are eligible matches for the entity, the wizard advances to the Choose a Match screen — skip to step 11.

    -   Otherwise, the wizard advances to the Matching Conflicts Resolved screen — skip to step 14.

9.  In the Selectively Merge Fields screen, select the check box for each entity field whose value you want to be merged into the golden record you selected in step 7.

    ![Selecting fields from a potential duplicate entity to merge into a matching golden record](../Images/Stewardship/mdm-db-resolve-dup-merged_192a6a04-1d11-468a-b076-602810dc68af.jpg)

10. To advance to the Matching Conflicts Resolved screen, click **Next** — skip to step 14.

11. In the Choose a Match screen, click the arrow icons to navigate between eligible matching golden records and for each eligible match, compare the golden record fields with the entity’s fields.

    ![Choose a Match screen of the Resolve Matching Issues wizard](../Images/Stewardship/mdm-db-resolve-conflict-choose_7fbb58df-7793-4d89-ace3-305243587cdc.jpg)

12. When the golden record you want to link with the source entity is presented, select **Choose**.

    ![Choosing the golden record to link to the source entity](../Images/Stewardship/mdm-db-resolve-conflict-matched_1f77516e-70fe-4804-9596-eba7df08539d.jpg)

13. To advance to the Matching Conflicts Resolved screen, click **Next**.

14. In the Matching Conflicts Resolved screen, review the summary of the pending resolution of the quarantined entity.

    ![Matching Conflicts Resolved screen of the Resolve Matching Issues wizard](../Images/Stewardship/mdm-db-resolve-resolved_5f997111-f800-4f13-9bdc-320010551684.jpg)

15. To initiate the attempt to incorporate the entity, click **Submit**.

    -   If, in the Potential Duplicates screen, you marked the entity as eligible for incoporation into the domain as a new golden record despite the entity being a potential duplicate, the repository attempts to incorporate the entity.

    -   If, in the Selectively Merge Fields screen, you selected fields from the entity to merge into the golden record you selected in the Potential Duplicates screen, the repository attempts to update the golden record and propagates an update request specifying a Reject Contributed Entity operation on the channel of the contributing source.

    -   If, in the Potential Duplicates screen, you indicated you wanted to reject the entity, the repository propagates an update request specifying a Reject Contributed Entity operation on the channel of the contributing source.

    -   If, in the Choose a Match screen, you chose a golden record to link to the source entity, the repository attempts to create the link.

## Next steps

:::note
    
The quarantine entry remains in the list, even if the entity is successfully incorporated, until you close the detail view by clicking Close or clicking elsewhere in the Quarantine page. The list is then updated. If the entity was not incorporated, there will be a new quarantine entry for it. 

Before you close the detail view, though, you can click ![](../Images/main-ic-arrow-gray-up_3394c903-2719-4d4b-82cc-ec8cd74d99d2.jpg) **Previous** and **Next** ![](../Images/main-ic-arrow-gray-down_c4b5bff8-7fde-4200-b305-68bff70fecf0.jpg) to navigate to detail for other entries and individually resolve them.

:::