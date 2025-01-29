# Intra-domain references

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-67715946-8925-4e4b-a545-1b64b1100ad7"/>
</head>


When a repository processes a batch of incoming source entities for a domain having intra-domain references, it must not only attempt during the incorporation phase to resolve the source record ID for each entity to a golden record ID, it must also attempt to resolve source record IDs specified as reference field values in the entities to golden record IDs. These golden record IDs are then written as reference field values in golden records.

## Contributed Entity and Referential Integrity

For a contributed entity having a reference field value that fails to resolve:

- If referential integrity for incoming entity contributions for that reference field is enforced, the entity will be quarantined.

- Otherwise, the repository will process the update and record the referenced source entity ID as the reference field value to denote a pending relationship between the contributed entity and the referenced entity.


Conversely, in order to propagate source record update requests to source systems on their channels for a domain having intra-domain references, the repository must not only attempt to resolve the ID of each updated golden record to a source record ID, it must also attempt to resolve golden record IDs specified as reference field values to source record IDs. For an updated golden record having a reference field value that fails to resolve for a particular source:

- If referential integrity for outgoing channel update requests for that reference field is enforced, the repository will not propagate an update request to that source.

- Otherwise, the repository will propagate an update request to that source but the reference field will be omitted.


## Example Scenario

For the purpose of the following examples of the impact of intra-domain references on transactional workflow, consider a domain named Employees whose sources are NetSuite and Salesforce; the non-repeatable field Manager is an intra-domain reference field used to represent employee-manager relationships. Assume:

- Both sources contribute data to Employees and initial loading of their data has been completed.

- For each source an incremental synchronization process is deployed that batches source record updates and routes them to the repository on which Employees is hosted.

- For each source a channel is configured for propagating source record update requests necessitated by golden record updates. The channels are configured to propagate only changed fields in update requests.

- For each source a synchronization process is deployed that routes batches on the source’s channel to the source.

### Source Record Creates

If an incoming batch originating from Salesforce contains a source entity representing a new employee record:

- If the Manager field in the entity references a manager for whom a golden record exists, a golden record will be created and its Manager field will be populated with the ID of the referenced golden record.

- However, if the Manager field in the entity references a manager for whom a golden record does not exist:

  - If referential integrity for incoming entity contributions is enforced, the entity will be quarantined.

  - If, on the other hand, referential integrity for incoming entity contributions is not enforced, a golden record will be created, but its Manager field will be populated with the source entity ID specified as the Manager field value in the entity. The specified employee-manager relationship will remain pending until a golden record is created for the referenced manager. At that point the Manager field value in the referencing golden record will be updated.

If a golden record is created and its Manager field is populated with the ID of the referenced golden record:

- If referential integrity for outgoing channel update requests is not enforced, a source record update request specifying a create operation will be propagated on the NetSuite channel.

- However, if referential integrity for outgoing channel update requests is enforced, a source record update request specifying a create operation will be propagated only if the manager’s golden record is linked to a source record in NetSuite. Otherwise, the update request will be held — that is, not propagated on the NetSuite channel — until the manager’s golden record is linked to a source record in NetSuite. Only then will the ID of the manager’s golden record resolve to a NetSuite employee ID.

### Source Record Updates

If an incoming batch originating from Salesforce contains a source entity representing an updated employee record and a golden record is linked to or matches the entity:

- If the Manager field in the entity references a manager for whom a golden record exists, the Manager field in the linked or matching golden record will be updated.

- If the Manager field in the entity references a manager for whom a golden record does not exist:

  - If referential integrity for incoming entity contributions is enforced, the entity will be quarantined.

  - If, on the other hand, referential integrity for incoming entity contributions in not enforced, the Manager field in the linked or matching golden record will be updated to contain the source entity ID specified as the Manager field value in the entity. The specified employee-manager relationship will remain pending until a golden record is created for the referenced manager. At that point the Manager field will be updated again.

If the Manager field value in the linked or matching golden record is updated to the ID of the referenced golden record:

- If referential integrity for outgoing channel update requests is not enforced, a source record update request specifying an update operation will be propagated on the NetSuite channel.

- However, if referential integrity for outgoing channel update requests is enforced, a source record update request will be held — that is, not propagated on the NetSuite channel — until the manager’s golden record is linked to a source record in NetSuite. Only then will the ID of the manager’s golden record resolve to a NetSuite employee ID.

### Source Record Updates with Source Rankings

If source rankings are configured for the Manager field and the Manager field in the entity references a manager for which a golden record does not exist, source value agreement tracking data is not created.

The following exceptions to the processing noted in the previous section are noteworthy:

- If a null Manager field value in the golden record was contributed by a higher-ranked source, the entity is rejected, and the null Manager value is sent in the entity posted back to the contributing source.

- If a null Manager field value in the golden record was contributed by a lower-ranked source, the pending employee-manager relationship is created as it normally would be, and, in addition, the Manager field source value agreement tracking data for the lower-ranked source is discarded.

### Source Record Deletes

If an incoming batch originating from Salesforce contains a source entity representing a newly deleted employee record and a golden record is linked to or matches the entity, that golden record will be end-dated.

- If referential integrity for outgoing channel update requests is not enforced, a source record update request specifying a delete operation will be propagated on the NetSuite channel.

- However, if referential integrity for outgoing channel update requests is enforced, a source record update request specifying a delete operation will be propagated on the NetSuite channel only if the referenced manager’s golden record is linked to a source record in NetSuite.