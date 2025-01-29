# Source data loading

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-89bcf551-f9c8-4e37-a993-65afc9dcf7f7"/>
</head>


The process of loading an initial set of records to a Boomi DataHub domain from an attached source occurs while Initial Load mode is enabled for that source.

The process occurs while Initial Load mode is enabled for that source.

Initial Load mode is enabled for one source at a time. While Initial Load mode is enabled for a source, source record update requests are not propagated on that source's channel. This prevents the creation of duplicate source records. Update requests necessitated by newly loaded data from that source, on the other hand, are immediately propagated on the channels of previously loaded sources.

The following sample scenario describes in detail the loading of an initial source, followed by the loading of an additional source.

Consider a new domain whose attached sources are NetSuite and Salesforce. Assume:

- NetSuite will be the first of the two sources to be loaded.

- For each source a channel is configured for propagating source record update requests specifying create, update, delete and reject contributed entity operations.

- Neither source is configured to allow multiple links from individual golden records to entities in the source system.

- Source rankings are not configured.

- The domain is neither a source nor a target of references, and a default source is not designated.

The normal initial load processing for NetSuite would be as follows:

1. The user enables Initial Load mode for NetSuite.

2. The user deploys and executes a process that loads all of the records from NetSuite.
    1. The process maps the relevant NetSuite object profile to the domain profile.

    2. The process sends the batch of NetSuite entities to the repository.

3. The repository receives the batch and verifies the entities conform to the domain model and contain all required fields.

4. The repository executes any data quality steps defined in the model to perform data validation and enrichment.

5. A golden record is created for each of the loaded records. Each golden record includes a NetSuite link — the corresponding NetSuite record ID — to enable synchronization.

6. The user turns off Initial Load mode for NetSuite.

   The channel on which source record update requests targeting NetSuite will be propagated is enabled, but update requests are not propagated because none of the loaded records matched existing golden records.

7. The user deploys a process to batch and route source record updates from NetSuite to the domain.

8. The user deploys a process to route batches of source record update requests targeting NetSuite necessitated by golden record updates.

The normal initial load processing for Salesforce would be as follows:

1. The user enables Initial Load mode for Salesforce.

2. The user deploys and executes a process that loads all of the records from Salesforce.
    1. The process maps the relevant Salesforce object profile to the domain profile.

    2. The process sends the batch of Salesforce entities to the repository.

3. The repository receives the batch and verifies the entities conform to the domain model and contain all required fields.

4. The repository executes any data quality steps defined in the model to perform data validation and enrichment.

5. The repository attempts to match each Salesforce entity to a golden record.
    1. For each Salesforce entity that matches a golden record and adds or updates fields, a Salesforce link is added to the golden record and a source record update request is propagated to NetSuite through its channel. This update request results in an update to the linked NetSuite record. The updated NetSuite record is in turn contributed back to Boomi DataHub but results in a golden record update only if fields were added or updated in the NetSuite record.

    2. For each Salesforce entity that matches a golden record but does not update one or more fields, a Salesforce link is added to the golden record, but a source record update request is not propagated to NetSuite.

    3. For each Salesforce entity that does not match a golden record, a golden record is created which includes a Salesforce link. A source record update request specifying a create operation is then propagated to NetSuite through its channel. This update request results in the creation of a NetSuite record. The created NetSuite record is in turn contributed back to Boomi DataHub.

        :::note
        
        In the first and second cases, when a link to Salesforce is established, if there are fields in the golden record that were not contributed by Salesforce, a source record update request is propagated back to Salesforce on its channel.

        :::

6. The user turns off Initial Load mode for Salesforce.

   The channel on which source record update requests targeting Salesforce will be propagated is enabled.

7. The user deploys a process to batch and route source record updates from Salesforce to the domain.

8. The user deploys a process to route batches of source record update requests targeting Salesforce necessitated by golden record updates.

9. The repository checks the state of each golden record.
    1. For each golden record having only a Salesforce link, a source record update request is not sent.

    2. For each golden record having only a NetSuite link, if a source record update request specifying a create operation has not been already propagated on the Salesforce channel, one is propagated.

:::note

If you configure source rankings for a domain, you should update the rankings before initiating initial load processing for each additional source. This practice ensures rankings are applied to all loaded data.

:::