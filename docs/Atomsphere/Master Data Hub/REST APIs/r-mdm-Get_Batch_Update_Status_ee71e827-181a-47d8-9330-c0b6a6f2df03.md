# Get Batch Update Status 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-ee71e827-181a-47d8-9330-c0b6a6f2df03"/>
</head>


The Get Batch Update Status operation retrieves the status, in XML format, of a particular batch update for a universe \(domain\) under the authenticated account. There is an option to also retrieve the status of the individual entities in the batch.

## Basic authentication

To perform this operation using Basic auth, send an **HTTP GET** request to:

`https://<host>:<port>/mdm/universes/<universeID>/records/updates/<batchID>?[includeEntities=true|false]`

where

*host* is the host name or IP address of the repository and `port` is the port number of the shared HTTP server as configured in the account’s [Atom Management settings](/docs/Atomsphere/Integration/Integration%20management/c-atm-Atom_Management_b38a3a90-d7f6-4df0-8c00-e75a178dfdfa.md).

## JWT authentication

To perform this operation using JSON Web Token (JWT) auth, send an **HTTP GET** request to:

`https://<host>:<port>/mdm/universes/<universeID>/records/updates/<batchID>?[includeEntities=true|false]&repositoryId=<repository ID>`

You must have the following MDM privileges:

- **MDM - Batch Management** or **MDM - Activity Reporting**

:::note

You can implement requests for this operation in processes using the [HTTP Client connector](/docs/Atomsphere/Integration/Connectors/r-atm-HTTP_Client_connector_d64af80e-febe-4cd2-89ad-e3d0fc53c502.md), as demonstrated by example 2 in the sample process [Hub: Read Batch Information](https://platform.boomi.com/#build;processLibrary=4195924d-7d8a-4b94-ba77-b2d0b56f2824), which you can install in your account from the process library in Integration.

:::

## Path parameters 

**universeID**  
ID of the universe

**batchID**  
ID of the batch update. To obtain the needed ID of the batch update resource \(batchID parameter\), first perform an Update Golden Records operation and extract the ID from the response body — the ID is the last segment of the URL of the batch update resource.


## Query parameters

**includeEntities**  

  -   Set to *true* to request entity status in addition to batch status.

  -   Set to *false* \(the default\) to request batch status only.

**repositoryId** <br></br>
ID of the repository. Case sensitive. Required with JWT authentication only. You can obtain the repository ID from the URL after navigating to the repository in the user interface.

## Responses 

-   200 \(OK\) The body contains the XML representation of the batch status and, if requested, the status of the entities in the batch.

    Within the root `<batch>` element:

    -   `<source>` is the ID of the batch’s contributing source.

    -   `<createdByType>` indicates the type of submission, using one of the following tokens:

        -   API — contributed the batch.

        -   STAGING — staged the batch.

        -   EDIT — created the batch as a result of the editing and resubmission by a user of a quarantined entity.

        -   RESUBMIT — created the batch as a result of the resubmission \(without editing\) by a user of one or more quarantined entities.

        -   SELECTIVE\_MERGE — created the batch as a result of the selective merging by a user of fields in a quarantined entity into a matching golden record.

        -   STAGING\_COMMIT — created the batch as a result of the committing by a user of one or more staged entities for incorporation in the target domain.

        -   STAGING\_REPLAY — created the batch as a result of the resubmission by a user of one or more staged entities.

    -   `<trackbackId>` is included if the batch was contributed only as a result of  connector operation during the run of a process. The element content is in the format `atomsphere:<account_ID>@<execution_ID>`, where account\_ID is that of the account in which the process ran and execution\_ID is the system run ID.

    -   `<state>` indicates the batch status, using one of the following tokens:

        -   CREATED — created the batch, but processing has not begun.

        -   PARSING— validating the batch for specification of a valid contributing source for the target universe or validating the batch entities for conformance with the universe layout.

        -   PARSED — the batch specifies a valid contributing source for the target universe and the batch entities conform with the universe layout. The entities are ready for enrichment.

        -   ENRICHING — applying data quality steps to the batch entities.

        -   ENRICHED — applied data quality steps to the batch entities and the entities are ready for processing for incorporation in the target universe.

        -   PROCESSING — processing the batch entities for incorporation in the target universe.

        -   ERRORED — processing failed for all batch entities with an unexpected error.

        -   COMPLETED — incorporated all batch entities in the target universe.

        -   COMPLETED\_ERRORS — could not process one or more batch entities for incorporation in the target universe due to an unexpected error.

    -   `<createdAt>` is creation the time of the batch record.

    -   `<updatedAt>` is the last update time of the batch record.

    -   `<parseStart>` is the starting time of the parsing \(validation\) phase of processing.

    -   `<parseEnd>` is the ending time of the parsing \(validation\) phase of processing.

    -   `<enrichStart>` is the starting time of the enrichment phase of processing during which data quality steps are applied.

    -   `<enrichEnd>` is the ending time of the enrichment phase of processing during which data quality steps are applied.

    -   `<incorporateStart>` is the starting time of the incorporation phase of processing.

    -   `<incorporateEnd>` is the ending time of the incorporation phase of processing.

    -   `<endedAt>` is the ending time of processing.

    -   `<entityCount>` is the count of entities.

    -   `<quarantinedCount>` is the count of quarantined entities.

    -   `<createdCount>` is the count of golden records created as a result of processing.

    -   `<deletedCount>` is the count of golden records deleted as a result of processing.

    -   `<updatedCount>` is the count of golden records updated as a result of processing.

    -   `<entities>` is included if the query parameter includeEntities is true. Within `<entities>` there is an `<entity>` element for each entity in the batch. The id attribute value is the system-assigned batch entity ID.

        Within an `<entity>` element:

        -   `<createdAt>` is the creation time of the entity in the batch.

        -   `<UpdatedAt>` is the update time of the entity in the batch.

        -   `<state>` indicates the entity state, using one of the following tokens:

            -   PARSED — the entity conforms with the universe layout and is ready for enrichment.

            -   ENRICHED — applied the data quality steps and the entity is ready for processing for incorporation in the target universe.

            -   PROCESSING — processing is in progress to incorporate the entity in the target universe.

            -   ERRORED — the entity failed processing with an unexpected error.

            -   QUARANTINED — quarantined the entity. The reason for quarantining is given in `<stateDetail>`.

            -   COMPLETED — completed the processing of the entity. The manner of resolution is given in `<stateDetail>`.

        -   If processing of the entity completed or quarantined, `<stateDetail>` indicates the resolution manner of the entity, using one of the following tokens:

            -   CREATED — a golden record.

            -   UPDATED — a matching golden record.

            -   DELETED — end-dated a matching golden record.

            -   LINKED — a matching golden record to the source entity.

            -   LINKED\_WITH\_UPDATE — linked and updated a matching golden record to the source entity.

            -   NOOP — did not create, update, end-date, or link a golden record.

            -   AMBIGUOUS\_MATCH — quarantined due to matching 10 or more golden records, regardless of links to source records \(1,000 or more in the case of an exact matching expression grouped with a fuzzy matching expression\).

            -   DUPLICATE\_KEY — quarantined because it contained multiple collection items with the same key values.

            -   ENRICH\_ERROR — quarantined due to data quality step failure.

            -   FIELD\_FORMAT\_ERROR — quarantined because it contained data not in conformance with either their field type, validation options for that field type specified in the domain model, or with the system 255-character limit for text and **Enumeration** field values.

            -   INCORPORATE\_ERROR — quarantined during incorporation due to an error other than an unresolvable collection item reference.

            -   MATCH\_REFERENCE\_UNKNOWN — quarantined due to having reference field values that do not resolve to golden records.

            -   MULTIPLE\_MATCHES — quarantined due to matching multiple golden records not yet linked to a record in the source.

            -   PARSE\_FAILURE — quarantined due to failure to structurally conform with the field layout specified in the domain model.

            -   POSSIBLE\_DUPLICATE — quarantined due to matching golden records already linked to a record in the source.

            -   RECORD\_ALREADY\_ENDDATED — quarantined due to having a link from an end-dated golden record.

            -   REFERENCE UNKNOWN — quarantined due to unresolvable collection item reference errors.

            -   REQUIRED\_FIELD — quarantined due to the omission of fields specified as required or as key fields for collections in the domain model.

            -   REQUIRES\_APPROVAL — quarantined due to the satisfaction of conditions configured for the source requiring the manual approval of new entity contributions.

            -   REQUIRES\_END\_DATE\_APPROVAL — quarantined due to the source being configured to require manual approval of contributed entities that would end-date matching golden records.

            -   REQUIRES\_UPDATE\_APPROVAL — quarantined due to the satisfaction of conditions configured for the source requiring the manual approval of contributed entities that would match golden records.

            -   REQUIRES\_UPDATE\_WITH\_BASE\_VALUE\_APPROVAL — quarantined because there is a pending link from the matching golden record to the contributing source and the entity has a field with a base value \(the value of the field in the golden record’s base version for the source when creating the pending link\).

        -   `<message>` indicates the cause of the quarantining of the entity, if applicable.

        -   `<sourceEntityId>` is the source entity ID.

        -   `<recordId>` is the ID of the created, updated, or end-dated golden record, if applicable.

        -   `<transactionId>` is the system transaction ID assigned upon the entity’s initial submission.

    Sample response body for a request in which the query parameter includeEntities is false or omitted:

    ```xml
    <batch>
          <batchId>42</batchId>
          <source>SF</source>
          <createdByType>API</createdByType>
          <trackbackId>atomsphere:account-123456@execution-fedcba98-7654-3210-fedc-ba9876543210-2013.08.28</trackbackId>
          <state>COMPLETED</state>
          <createdAt>2016-10-31T15:12:21Z</createdAt>
          <updatedAt>2016-10-31T15:12:37Z</updatedAt>
          <parseStart>2016-10-31T15:12:21Z</parseStart>
          <parseEnd>2016-10-31T15:12:21Z</parseEnd>
          <enrichStart>2016-10-31T15:12:21Z</enrichStart>
          <enrichEnd>2016-10-31T15:12:37Z</enrichEnd>
          <incorporateStart>2016-10-31T15:12:37Z</incorporateStart>
          <incorporateEnd>2016-10-31T15:12:37Z</incorporateEnd>
          <endedAt>2016-10-31T15:12:37Z</endedAt>
          <entityCount>200</entityCount>
          <quarantinedCount>5</quarantinedCount>
          <createdCount>195</createdCount>
          <deletedCount>0</deletedCount>
          <updatedCount>0</updatedCount>
    </batch> 
    ```

    Sample response body for a request in which the query parameter includeEntities is true:

    ```xml
    <batch>
          <batchId>42</batchId>
          <source>SF</source>
          <createdByType>API</createdByType>
          <trackbackId>atomsphere:account-123456@execution-fedcba98-7654-3210-fedc-ba9876543210-2013.08.28</trackbackId>
          <state>COMPLETED</state>
          <createdAt>2016-10-31T15:12:21Z</createdAt>
          <updatedAt>2016-10-31T15:12:37Z</updatedAt>
          <parseStart>2016-10-31T15:12:21Z</parseStart>
          <parseEnd>2016-10-31T15:12:21Z</parseEnd>
          <enrichStart>2016-10-31T15:12:21Z</enrichStart>
          <enrichEnd>2016-10-31T15:12:37Z</enrichEnd>
          <incorporateStart>2016-10-31T15:12:37Z</incorporateStart>
          <incorporateEnd>2016-10-31T15:12:37Z</incorporateEnd>
          <endedAt>2016-10-31T15:12:37Z</endedAt>
          <entityCount>200</entityCount>
          <quarantinedCount>5</quarantinedCount>
          <createdCount>195</createdCount>
          <deletedCount>0</deletedCount>
          <updatedCount>0</updatedCount>
          <entities>
            <entity id="9533">
              <createdAt>2016-10-31T15:12:21Z</createdAt>
              <updatedAt>2016-10-31T15:12:37Z</updatedAt>
              <state>COMPLETED</state>
              <stateDetail>CREATED</stateDetail>
              <sourceEntityId>6f78f990-dbb9-4d97-94ff-64f7d31bc66f</sourceEntityId>
              <recordId>5df0d7ed-bece-4ce4-92e8-605a642d2ffa</recordId>
              <transactionId>d1684e83-5e78-4fbe-99f0-32f08e507288</transactionId>
            </entity>
            .
            .
            .
            <entity id="9732">
              <createdAt>2016-10-31T15:12:21Z</createdAt>
              <updatedAt>2016-10-31T15:12:37Z</updatedAt>
              <state>QUARANTINED</state>
              <stateDetail>FIELD_FORMAT_ERROR</stateDetail>
              <message>The record's {Age} field value '41a' is not in a valid INTEGER format.</message>
              <sourceEntityId>ee80eb70-202f-4baf-aa30-d09110a16589</sourceEntityId>
              <transactionId>982e5ba7-52fa-420f-9749-8322646c2f28</transactionId>
            </entity>
          </entities>
    </batch> 
    ```

-   400 (Bad Request) The *universeID* parameter value contains only space characters. Sample response body:

    ```xml
    <error>
      <message>The given universe id is blank.</message>
    </error> 
    ```

- 404 (Not Found) *universeID* does not identify a universe under the authenticated account. Sample response body:
  
  ```xml
  <error>
    <message>A universe with id 'ac11cc59-c77a-4afe-8c92-ed86a7daabec' does not exist.</message>
    <message>Universe definition with id 'ac11cc59-c77a-4afe-8c92-ed86a7daabec' could not be loaded from plugin component directory 'plugins/mdm/bundles/ac11cc59-c77a-4afe-8c92-ed86a7daabec'.</message>
  </error> 
  ```
  
-   404 \(Not Found\) *batchID* does not identify a batch update for the specified universe. Sample response body:

    ```xml
    <error>
          <message>A batch with id '46' does not exist.</message>
    </error> 
    ```

- 401 (Invalid Credentials) JWT auth token is expired. Sample response body:
   ```xml
   <body>
   <h2>HTTP ERROR 401</h2>
      <p>Problem accessing /mdm/universes. Reason:
      <pre>Invalid credentials.</pre>
   </p>
   </body>
   ```

- 403 (You do not have permissions to access this resource) User does not have the required MDM privilege to perform the action. Applicable to JWT auth only. Sample response body:

   ```xml
   <error><message>You do not have permissions to access this resource.</message></error>
   ```  