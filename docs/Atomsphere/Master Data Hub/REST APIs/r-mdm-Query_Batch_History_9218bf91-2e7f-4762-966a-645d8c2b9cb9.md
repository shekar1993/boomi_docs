# Query Batch History 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-9218bf91-2e7f-4762-966a-645d8c2b9cb9"/>
</head>


The Query Batch History operation retrieves records of incoming batches of source entries contributed to a specific universe \(domain\) under the authenticated account. The response provides information about each batch, including the batch ID, contributing source, batch status, creation timestamp, and processing end time.

## Basic authentication

To perform this operation using Basic auth, send an **HTTP POST** request to:

`https://<host>:<port>/mdm/universes/<universeID>/records/updates`

where

`host` is the host name or IP address of the repository and `port` is the port number of the shared HTTP server as configured in the account’s [Atom Management settings](/docs/Atomsphere/Integration/Integration%20management/c-atm-Atom_Management_b38a3a90-d7f6-4df0-8c00-e75a178dfdfa.md).

## JWT authentication

To perform this operation using JSON Web Token (JWT) auth, send an **HTTP POST** request to:

`https://<host>:<port>/mdm/universes/<universeID>/records/updates?repositoryId=<repository ID>`

You must have the following MDM privileges:

- **MDM - Batch Management** or **MDM - Activity Reporting**

:::note

You can implement requests for this operation in processes using the [HTTP Client connector](/docs/Atomsphere/Integration/Connectors/r-atm-HTTP_Client_connector_d64af80e-febe-4cd2-89ad-e3d0fc53c502.md), as demonstrated by example 1 in the sample process [Hub: Read Batch Information](https://platform.boomi.com/#build;processLibrary=4195924d-7d8a-4b94-ba77-b2d0b56f2824), which you can install in your account from the process library in Integration. 

:::

## Path parameters 

**universeID**  
ID of the universe

## Query parameters

**repositoryId** <br></br>
ID of the repository. Case sensitive. Required with JWT authentication only. You can obtain the repository ID from the URL after navigating to the repository in the user interface.

## Request body

The body of the request must conform to the following structure:

```xml
<BatchHistoryQuery offsetToken="" limit="">
   <sourceId></sourceId>
   <fromDate></fromDate>
   <toDate></toDate>
   <state></state>
</BatchHistoryQuery>
```

where

-   The optional *offsetToken* and *limit* attributes for `<BatchHistoryQuery>` are used for paging. The limit value is the maximum number of batches to return per page. Boomi DataHub enforces a maximum of 200 entries per page regardless of the limit value. The *offsetToken* value corresponds to the *offsetToken* value returned from a previous Query Batch History request.

-   The child elements of `<BatchHistoryQuery>` set query filter parameters:

    -   `<sourceId>` (optional) sets a filter by source. Specify the source by its unique ID.

    -   `<fromDate>` and `<toDate>` (both optional) set a time span filter. The date and time format is *YYYY-MM-ddTHH:mm:ssZ* (UTC).

    -   `<mdm:state>` (optional) sets a filter by the batch status. This element can repeat — one token per occurrence. The following tokens are valid:

        -   CREATED — Batches created for which processing has not yet begun.

        -   PARSING — Validate batches for specification of a valid contributing source for the target universe and validate batches whose entities are for conformance with the universe layout.

        -   PARSED — Batches specify a valid contributing source for the target universe and whose entities conform with the universe layout and are ready for enrichment.

        -   ENRICHING — Batches to which to apply data quality steps are to the entities.

        -   ENRICHED — Batches to which to apply data quality steps to the batch entities and the entities are ready to be processed for incorporation in the target universe.

        -   PROCESSING — Batches whose entities are being processed for incorporation in the target universe.

        -   ERRORED — Batches whose entities failed processing with an unexpected error.

        -   COMPLETED — Batches where incorporation of entities are in the target universe.

        -   COMPLETED\_ERRORS — Could not process entities in batches for incorporation into the target universe due to an unexpected error

    You must omit elements corresponding to unused filter parameters from `<BatchHistoryQuery>`.

    For example:

    ```xml
    <BatchHistoryQuery offsetToken="abc" limit="10">
       <sourceId>salesforce<sourceId>
       <state>ERRORED</state>
       <state>COMPLETED_ERRORS</state>
    </BatchHistoryQuery>
    
    ```

## Responses 

-   200 \(OK\) The body contains the XML representation of the query results. The root element `<BatchHistoryResponse>` has a totalCount attribute that specifies the total number of batches satisfying the query and a resultCount attribute that specifies the number of batches returned on this “page” of results. The offsetToken attribute is returned only if there are additional results to retrieve for the query. You can use the returned token in a subsequent Query Batch History request to get the next “page” of results.

    Within each `<batch>` element:

    -   `<batchId>` is the system ID of the batch.

    -   `<source>` is the ID of the batch’s contributing source.

    -   `<state>` is the query filter token corresponding to the batch status.

    -   `<createdAt>` is the time stamp of the creation of the batch.

    -   `<endedAt>` is the time stamp of the completion of processing of the batch. This element may not be present for batches in CREATED state.

    Sorting of the `<batch>` elements are in the same manner as sorting batches in the **Batch Report Detail** view in Boomi DataHub: by the time stamp returned in the `<createdAt>` element, from newest to oldest.

    Sample response body:

    ```xml
    <BatchHistoryResponse totalCount="25" resultCount="10" offsetToken="MQ==">
       <batch>
          <batchId>20</batchId>
          <source>salesforce</source>
          <state>COMPLETED</state>
          <createdAt>2016-01-22T14:09:09Z</createdAt>
          <endedAt>2016-01-22T14:09:10Z</endedAt>
       </batch>
       ... 
       <batch>
          <batchId>11</batchId>
          <source>salesforce</source>
          <state>COMPLETED_ERRORS</state>
          <createdAt>2016-01-22T13:13:13Z</createdAt>
          <endedAt>2016-01-22T13:13:15Z</endedAt>
       </batch>
    </BatchHistoryResponse>
    
    ```

-   400 (Bad Request) The *universeID* parameter value contains only space characters. Sample response body:

   ```xml
   <error>
      <message>The given universe id is blank.</message>
   </error> 
   ```

- 400 (Bad Request) The request body is empty. Sample response body:

   ```xml
   <error>
      <message>Unable to read message body. Please make sure the XML structure is correct.</message>
   </error> 
   ```

-   400 \(Bad Request\) The request does not contain a properly-formatted BatchHistoryQuery object. Sample response body:

    ```xml
    <error>
       <message>Unable to read message body. Please make sure the XML structure is correct.</message>
    </error>
    ```

- 404 (Not Found) *universeID* does not identify a universe under the authenticated account. Sample response body:

   ```xml
   <error>
      <message>A universe with id 'ac11cc59-c77a-4afe-8c92-ed86a7daabec' does not exist.</message>
      <message>Universe definition with id 'ac11cc59-c77a-4afe-8c92-ed86a7daabec' could not be loaded from plugin component directory 'plugins/mdm/bundles/ac11cc59-c77a-4afe-8c92-ed86a7daabec'.</message>
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