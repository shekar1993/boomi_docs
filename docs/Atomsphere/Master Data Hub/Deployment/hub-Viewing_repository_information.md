# Viewing repository information 

<head>
  <meta name="guidename" content="Master Data Hub"/>
  <meta name="context" content="GUID-4e36910d-ac80-4a04-b600-7dd9ed621444"/>
</head>


The repositories and repository pages provide information about the records, deployed models, pending channel updates to the source, and source attachments. They also include tags on the cards of the main repository screen that indicate when you can deploy a model update and when sources are in [Initial Load mode](/docs/Atomsphere/Master%20Data%20Hub/Deployment/t-mdm-Loading_data_from_a_source_8c5915de-5144-45a0-8d21-b798879e174a.md).  

## Prerequisites

You must have the following permissions to view repository information: 

- MDM - View Repositories<br/>
or
- MDM - Repository management

## Procedure

1. Navigate to Repositories. If you’ve [created a repository](/docs/Atomsphere/Master%20Data%20Hub/Getting%20started/t-mdm-Creating_a_repository_a495f9fb-2748-492b-a726-fb678645e7cd.md), a card displays with the following information about the card.
    - **Golden Records** - Number of golden records in the repository. 
    - **Quarantine** - Number of quarantined entries in the repository. If the count is zero, no information displays.

    :::note

    When an end-dated golden record is purged from the Golden Records page, the quarantine entries count can take more than a minute to update.

    :::

    - **Deployed Models** - Number of models deployed to the repository.
    - **Last Updated** - Date of the most recent deployment of a model or model update to the repository. If no models are deployed to the repository, no information displays.
    - **Pending Batches** - Number of pending batches of incoming source entities into the repository. Pending batches are batches the repository has not processed yet.
    - **Pending Channel Deliveries** - Number of outbound source record update requests in the repository. Pending deliveries are deliveries that have not received acknowledgement as received by the source system. Acknowledgement is sent to Hub through the integration or through the repository API.
    - **UPDATES AVAILABLE** - This tag indicates that at least one of the models deployed to the repository is no longer the most recent version. There is a new version of the model available that you can deploy. Click the tag to open the Model.
    - **SOURCES SYNCING** - This tag indicates that at least one of the contributing sources is currently in Initial Load mode. Click the tag to open the source configuration page for the deployed model.
2. Click the **Action** icon on the card to open the **Activity** tab and view the inbound and outbound activity for each source attached to models in the repository. The Action icon appearance indicates the amount of pending inbound source record updates that have not been processed yet by the repository.
    -   ![](../Images/Common/mdm-ic-hamburger-16_19fde1ac-5615-477d-9ddb-80315f60897d.jpg) — high level of activity \(1,000 or more pending records\)

    -   ![](../Images/Common/mdm-ic-hamburger-openface-16_266f6eec-9d0e-4f53-acc2-88b748e6da86.jpg) — medium level of activity \(500–999 pending records\)

    -   ![](../Images/Common/mdm-ic-hamburger-roll-bottom-16_d3253305-4210-4b44-99f0-116360b2c4ff.jpg) — low level of activity \(1–499 pending records\)

    -   ![](../Images/Common/mdm-ic-hamburger-invisible-16_18ac16ca-b108-4428-ba56-93750aaa2437.jpg) — no pending records
3. Click the gear icon that displays on the card if you have the **MDM - Repository Management** privilege. Click the icon to:
    - Open the repository **Properties**. You can edit the name of the repository. The Boomi Hub Cloud that hosts the repository is listed but cannot be changed. If the selection for your desired Hub Cloud is not available, your account has not been provisioned to have access to that Hub Cloud. To request access, contact your representative.
    - Delete the repository. When you delete a repository, all attached records are deleted and cannot be restore. Read [Deleting a repository](/docs/Atomsphere/Master%20Data%20Hub/Governance/t-mdm-Deleting_a_repository_3b3bb2e6-f7a1-4f97-b702-d57ad89eac0b.md) to learn more.
4. Click the Repository name to open the Repositories page. The **Summary** tab includes all your deployed models, the current deployed version, deployment date, golden record count and quarantine count in purple (if applicable). 

    :::note

    When an end-dated golden record is purged from the Golden Records page, the quarantine entries count can take more than a minute to update.

    :::

    You can click into a specific deployed model to view its settings and source attachments.

    The colored dot icon next a domain name indicates the domain’s status:

-   ![Green dot icon](../Images/Common/main-ic-dot-green-12_2f68f523-a6b0-4691-831c-1dbdf0f6ef2e.jpg) — Indicates that Initial Load mode is not active for any source. The attached sources are in operational mode and function according to their settings.

-   ![Blue dot icon](../Images/main-ic-dot-blue-12_947211c8-281d-4c03-95eb-3e7951d56f3e.jpg) — Indicates that Initial Load mode is active for one or more contributing sources. All contributing sources are required to load data into the repository after they are attached to the deployed model.

    The **Update Available** tag indicates that there is a newer version of the model available for deployment. You can click the Version number to open a side panel and deploy the new version.

    Red highlighting in the version number indicates there was a failure of an attempt to deploy that version. Pause the pointer on the version number to see the reason for failure. If there is not any domain data or you do not need the data, you may be able to recover from the failure by selecting the domain Summary tab and clicking [Clear Model Data](/docs/Atomsphere/Master%20Data%20Hub/Governance/t-mdm-Clearing_data_for_a_domain_ab21c86f-7f4b-4416-825b-f926afbd05e0.md). If you cannot recover from the failure, contact Support.

5. Click **Deploy a model** to deploy a model or new model version to the repository. You can see this option if you have the following permissions:
    - **MDM - View Repositories**
    - **MDM - Model Deployment**
6. Click the **Configure** tab to view authentication credentials for the repository. Read [Generating an authentication token for a repository](/docs/Atomsphere/Master%20Data%20Hub/Getting%20started/t-mdm-Generating_an_authentication_token_for_a_repository_9999de57-2f8b-4053-9b41-cf7e89136ccf.md) to learn more.
7. Click the **Activity** tab to view data about inbound and outbound date in the repository. Read [Viewing pending repository activity](/docs/Atomsphere/Master%20Data%20Hub/Governance/t-mdm-Viewing_pending_activity_for_a_repository_8d83f96b-8396-4332-bb44-684ec053896c.md) to learn more.
8. Click the **Log** tab to view and filter repository audit logs. Read [Viewing and filtering the repository audit log](/docs/Atomsphere/Master%20Data%20Hub/Governance/c-mdm-Audit_log_4cb7f2e6-f9b3-4e4c-b0ce-ca94aa3c3e77.md) to learn more.