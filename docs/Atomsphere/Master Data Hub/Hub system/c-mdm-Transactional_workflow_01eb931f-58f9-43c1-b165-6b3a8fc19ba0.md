# Transactional workflow 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-01eb931f-58f9-43c1-b165-6b3a8fc19ba0"/>
</head>


Once a contributing source is loaded into a domain, the data steward needs to ensure that integration processes that query for record updates from that source, and source record update requests targeting that source, are deployed and executed on a regular schedule.

- Updates from the source are propagated to the repository to which each domain is hosted as batches of entities.

- Likewise, requests targeting a source system are propagated from the repository as batches of entities on the channel configured for the source. Multiple pending requests for a given entity, regardless of the batch in which they are propagated, are combined into a single request reflecting the current version of the associated golden record. In the case of a channel configured to propagate entities containing only updated fields, when there are multiple pending requests for a given entity, differences are merged to reflect the current version of the associated golden record.

The repository processes batches asynchronously, one batch at a time per domain and source, in the order of batch submission. Individual entities in a batch can be quarantined.

A transaction ID is assigned to each entity. A given entity’s assigned transaction ID persists through quarantining of that entity, if that occurs, and ultimately through incorporation of the entity in the domain as a version of a golden record. The transaction ID persists even if the entity is quarantined multiple times prior to incorporation.

The repository does not process batches for a domain while performing any of the following actions on that domain:

- Deploying the domain model

- Updating the state of any source

- Deleting a source

- Clearing domain data

- Deleting a staging area

:::note

From the perspective of integration processes querying for source record updates, there is no difference between creates and updates, and the processes therefore need not differentiate them.
The processes consider all such operations to be updates.

:::

:::note

If a source record update request specifying an update operation is present on a channel when the associated golden record is end-dated, the request is updated to specify a delete operation.

:::

:::note

Small batch-optimized processing is an optional Boomi DataHub feature. If the feature is enabled for a repository, processing of incoming source entities to domains hosted in the repository is optimized for batches of 10 or fewer source entities. To request enablement of small batch-optimized processing for a repository, contact your Boomi account representative.

:::

:::note

The linked transaction processing examples illustrate a single domain with only two or three sources for the sake of simplicity. However, a Boomi DataHub project can encompass multiple domains with inter-domain references. Furthermore, a single domain can be configured with more than three sources.

:::

