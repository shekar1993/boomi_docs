# Inter-domain references 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-c9ce6651-626c-43b6-a83e-73dcc6be261b"/>
</head>


When a repository processes a batch of incoming source entities for a domain having inter-domain references, it must not only attempt during the incorporation phase to resolve the source record ID for each entity to a golden record ID, it must also attempt to resolve source record IDs specified as reference field values in the entities to the IDs of golden records in other domains. These golden record IDs are then written as reference field values in golden records.

For a contributed entity having a reference field value that fails to resolve:


-   If referential integrity for incoming entity contributions for that reference field is enforced, the entity will be quarantined.


-   Otherwise, if the entity has a linked golden record, the repository will process the update and record the referenced source entity ID as the reference field value to denote a pending relationship between the contributed entity and the referenced entity.

The same is true if the entity matches a golden record not yet linked to the source with this exception: If the unresolvable reference field is specified for matching in the satisfied match rule, the entity will be quarantined and will be automatically resubmitted for incorporation when a golden record for the referenced entity is created in the referenced domain.


:::note

The repository can incorporate incoming source entities containing non-required references to a domain that does not exist. However, it will not be possible for the repository to propagate synchronized requests in this case due to the lack of a mechanism binding individual referenced golden records to their sources. For example, if the domain Contacts has a non-required reference field specifying a domain Accounts that does not exist, there will not be any way for the repository to identify source records to which individual referenced accounts are intended to be linked.

:::

Conversely, for a domain having inter-domain references, in order to propagate source record update requests to sources on their channels, the repository must not only attempt to resolve the ID of each updated golden record to a source record ID, it must also attempt to resolve golden record IDs specified as reference field values to source record IDs. For an updated golden record having a reference field value that fails to resolve for a particular source:

-  If referential integrity for outgoing channel update requests for that reference field is enforced, the repository will not propagate an update request to that source. Instead, the update request will be held. Once a subsequent golden record update resolves the reference field value, the update request will be propagated. Propagation will typically occur immediately, but a short delay is possible.

-   Otherwise, the repository will propagate an update request to that source but the reference field will be omitted.


:::note

References to domains for which a default source is designated are resolved differently than described here. The resolution differences are covered in a linked related topic about references to reference data domains.

:::

For the purpose of the following examples of the impact of inter-domain references on transactional workflow, consider domains named Contacts and Accounts whose sources are NetSuite and Salesforce; Contacts contains a single reference field. That field is named Account and it references Accounts. The field is non-repeatable. Assume:


-   Both sources contribute data to Contacts and Accounts and initial loading of their data has been completed.

-  For each source an incremental synchronization process is deployed that batches source record updates and routes them to the repository on which the domains are hosted.

-   For each source a channel is configured for propagating source record update requests necessitated by golden record updates. The channels are configured to propagate only changed fields in update requests.

-   For each source a synchronization process is deployed that routes batches on the source’s channel to the source.


## Source record Creates 

If an incoming batch originating from Salesforce contains a source entity representing a new contact record:

-   If the Account field in the entity references an account for which a golden record exists, a golden record will be created and its Account field will be populated with the ID of the referenced golden record.


-   However, if the Account field in the entity references an account for which a golden record does not exist:

    - If referential integrity for incoming entity contributions is enforced, the entity will be quarantined.

    - If, on the other hand, referential integrity for incoming entity contributions is not enforced, a golden record will be created, but its Account field will be populated with the source entity ID specified as the Account field value in the entity. The specified contact-account relationship will remain pending until a golden record is created for the referenced account, thereby resolving the reference. At that point the Account field value in the referencing golden record will be updated.


If a golden record is created and its Account field is populated with the ID of the referenced golden record:


-  If referential integrity for outgoing channel update requests is not enforced, a contact source record update request specifying a create operation will be propagated on the NetSuite channel

-   However, if referential integrity for outgoing channel update requests is enforced, a contact source record update request specifying a create operation will be propagated only if the account’s golden record is linked to a source record in Netsuite. Otherwise, the update request will be held — that is, not propagated on the NetSuite channel — until the account’s golden record is linked to a source record in NetSuite. Only then will the ID of the account’s golden record resolve to a NetSuite account ID. At that point the update request will be propagated.


## Source record Updates

If an incoming batch originating from Salesforce contains a source entity representing an updated contact record and a golden record is linked to the entity:

-   If the Account field in the entity references an account for which a golden record exists, the Account field in the linked golden record will be updated.

-   If the Account field in the entity references an account for which a golden record does not exist:

    -  If referential integrity for incoming entity contributions is enforced, the entity will be quarantined.

    -  If, on the other hand, referential integrity for incoming entity contributions in not enforced, the Account field in the linked golden record will be updated to contain the source entity ID specified as the Account field value in the entity. The specified contact-account relationship will remain pending until a golden record is created for the referenced account, thereby resolving the reference. At that point the Account field will be updated again.


All of the above is true if the entity matches a golden record in Contacts not yet linked to Salesforce, unless a value in the entity of a reference field specified for matching in the satisfied match rule does not resolve to an existing golden record in Accounts. In that case the entity will be quarantined and will be automatically resubmitted for incorporation in Contacts if and when a golden record for the referenced account is created in Accounts.

If the Account field value in the linked or matching golden record is updated to the ID of the referenced golden record:

-   If referential integrity for outgoing channel update requests is not enforced, a contact source record update request specifying an update operation will be propagated on the NetSuite channel

-   However, if referential integrity for outgoing channel update requests is enforced, a contact source record update request will be held — that is, not propagated on the NetSuite channel — until the account’s golden record is linked to a source record in NetSuite. Only then will the ID of the account’s golden record resolve to a NetSuite account ID. At that point the update request will be propagated.


## Source record Updates with source rankings 

If source rankings are configured for the Account field and the Account field in the entity references an account for which a golden record does not exist, source value agreement tracking data is not created.

The following exceptions to the processing noted in the previous section are noteworthy:

-   If a null Account field value in the golden record was contributed by a higher-ranked source, the entity is rejected, and the null Account value is sent in the entity posted back to the contributing source.

-   If a null Account field value in the golden record was contributed by a lower-ranked source, the pending contact-account relationship is created as it normally would be, and, in addition, the Account field source value agreement tracking data for the lower-ranked source is discarded.


## Source record Deletes 

If an incoming batch originating from Salesforce contains a source entity representing a newly deleted contact record and a golden record is linked to the entity, that golden record will be end-dated.

-   If referential integrity for outgoing channel update requests is not enforced, a source record update request specifying a delete operation will be propagated on the NetSuite channel.

-   However, if referential integrity for outgoing channel update requests is enforced, a source record update request specifying a delete operation will be propagated on the NetSuite channel only if the referenced account’s golden record is linked to a source record in NetSuite.