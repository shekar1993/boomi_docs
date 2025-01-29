# Staging 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-6b77cac2-52cc-437b-b144-83aa5965fb3e"/>
</head>


You can stage batches of incoming source entities to preview the effect of batch submissions. This is a useful technique for testing purposes and data steward validation.

When you stage a batch, it is processed in virtually the same manner as an ordinary batch, but the source entities are not incorporated into the target domain or quarantined. You therefore have the opportunity to view the results that would have occurred had the batch actually been submitted, and you do not incur the risk of incorporating unwanted data into the domain or propagating that data to other source systems. Take advantage of this capability to reduce the uncertainty associated with the incorporation of new source systems, atypical data and source system schema changes into your Boomi DataHub projects.

You can set up staging areas for individual sources of a domain. A staging area is a named “holding pen” for staged entities targeting a domain from a given source. You can add a staging area for a source only if its Initial Load is either enabled or finished. Depending upon how you manage a staging area, it may at any given time contain entities from a single or multiple staged batches.

In the **Staged Entities** page, accessed through the Stewardship menu, you can view and manage the entities in staging areas. For each entity in a staging area the page shows the staging result — for example, Create Golden Record, Update Golden Record, Quarantine. For entities with a Quarantine result, the reason is shown. An entity’s staging result reflects the outcome that would have occurred had the entity been in an ordinary batch submitted at the same moment as the staged batch.

This is the workflow for staging a batch:

1.  In the repository page’s **Sources** tab, add a staging area for the source from which you want to stage the batch.

2.  Submit the batch for staging with a request for an Update Golden Records Repository API operation.

    If you have already built a Integration process for an Initial Load or the batching and routing of incoming updates from the source, you can adapt that process for staging simply by populating the **Staging Area ID** field in the Boomi Master Data Hub connector operation’s **Options** tab.

3.  As soon as possible, go to the **Staged Entities** page to view and manage the staged entities.

    Assuming the staging area contains only entities in this staged batch, if the entity staging results are satisfactory, you would consider committing all of the entities to the target domain for transaction processing. You also have the option to commit selected entities, delete all or selected entities from the staging area, or resubmit all or selected entities for restaging. Your handling of staged entities will depend not only on entity staging results but also on your purpose in staging the batch and domain transaction activity that may have occurred between staging of the batch and your analysis of the results.

    If you have configured data to be masked in the model, masked field data is hidden in staged entities. Masked values are visible if you have one of the following user permissions: 
      - **MDM - Privileged Data Steward** role
      - **MDM - Administrator** role
      - **MDM - Reveal Masked Data** privilege
      - **MDM - Data Steward** role (or **MDM - Stewardship** privilege) and the **Reveal Masked Data** Hub entitlement (available with the Advanced Security feature)

When you commit entities, they are submitted for transaction processing as ordinary batches. If you commit more than 200 entities at a time, they are automatically divided into multiple batches.

