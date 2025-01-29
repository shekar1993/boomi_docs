# Fetch Channel Updates

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-403852dd-1ebe-4cca-861f-8d423f6415a9"/>
</head>


The Fetch Channel Updates operation fetches a batch, if present, in XML format, of up to 200 source record update requests on a specified contributing source’s channel from a universe \(domain\) under the authenticated account.

-   For a channel configured to propagate source record update requests that contain entities with all fields from golden records, the entities in fetched requests represent the current states of golden records. This sequence is also the case even for golden records for which multiple updates occurred since the most recently delivered request.

-   Suppose a channel configured to propagate source record update requests contains entities with only updated fields from golden records. In that case, the fetched requests are accumulations of all field updates since the most recently delivered requests are associated with the golden records.


Suppose deliverable update requests are among the first 201 update requests on the channel. In that case, no further update requests are evaluated for possible delivery in the batch, even if the batch contains less than the number of update requests specified in the limit query parameter (default 200).

Optionally, the operation acknowledges delivery of a previous batch of requests fetched through the same channel.

The operation automatically acknowledges delivery of a batch of requests previously fetched through the same channel if all requests in the batch have in the meantime been manually deleted.

The operation automatically deletes from batches requests in which there are no fields present as a result of the application of field-level delivery exclusions configured for the source. When all records in a batch are deleted in this manner, the resulting empty batch is automatically acknowledged by the next operation.

## Basic authentication 

To perform this operation using Basic auth, send an **HTTP POST** request to:

`https://<host>:<port>/mdm/universes/<universeID>/sources/<sourceID>/updates/<updateID>`


where

*host* is the host name or IP address of the repository.

:::note

If the source is configured with multiple channels, instead send an **HTTP POST** request to:

`https://<host>:<port>/mdm/universes<universeID>/sources/<sourceID>/channels/<channelID>/updates/<updateID>`

\(Boomi maintains this form for backward compatibility — you cannot configure newly attached sources with multiple channels.\)

:::

## JWT authentication

To perform this operation using JSON Web Token (JWT) auth, send an **HTTP POST** request to:

`https://<host>:<port>/mdm/universes/<universeID>/sources/<sourceID>/updates/<updateID>?repositoryId=<repository ID>`

:::note

If the source is configured with multiple channels, instead send an **HTTP POST** request to:

`https://<host>:<port>/mdm/universes<universeID>/sources/<sourceID>/channels/<channelID>/updates/<updateID>?repositoryId=<repository ID>`

\(Boomi maintains this form for backward compatibility — you cannot configure newly attached sources with multiple channels.\)

:::

You must have the following MDM privileges:
- **MDM - Stewardship**
- **MDM - View Data**
- **MDM - Activity Reporting**

:::note

You can implement requests for this operation in its standard form in processes using the [Boomi Master Data Hub connector](/docs/Atomsphere/Integration/Connectors/r-atm-MDM_connector_ff690a6f-288d-44b3-96fb-e81afb046703.md), as demonstrated by the sample process [ Hub: Fetch Channel Updates - Auto](https://platform.boomi.com/#build;processLibrary=4195924d-7d8a-4b94-ba77-b2d0b56f2824), which you can install in your account from the process library in Integration.

You can also use [Boomi DataHub connector's fetch channel updates operation](/docs/Atomsphere/Integration/Connectors/int-BDH_Fetch_Channel_Updates.md).

:::

## Path parameters 

**universeID**  
ID of the universe

**sourceID**  
ID of the source

**channelID**  
(multiple-channel sources only) ID of the channel

**updateID**  
(optional) ID of the channel update to be acknowledged


## Query parameters 

**limit**  
\(optional\) Maximum number of source record update requests in the fetched batch. 200 is the maximum meaningful value and the default.

**repositoryId** <br></br>
ID of the repository. Case sensitive. Required with JWT authentication only. You can obtain the repository ID from the URL after navigating to the repository in the user interface.

## Responses

-   200 \(OK\) Channel updates are pending. The response body contains the source record update requests. Sample response body:

    ```xml
    <batch id="2" fmt="DIFF" src="SF">
          <contact grid="b1fe318c-b80f-44d0-8df0-4b0290c07744" op="UPDATE" ts="04-24-2012T16:42:00.000-0400">
            <id>4</id>
            <name>jeff</name>
          </contact>
          <contact grid="c4d94a09-a181-4259-97c8-bba9f198a89c" op="CREATE" ts="04-24-2012T16:42:37.000-0400">
            <id />
            <name>jason</name>
            <city>east norriton</city>
            <email>jason@gmail.com</email>
          </contact>
          <contact enddate="04-24-2012T16:43:57.000-0400" grid="b1fe318c-b80f-44d0-8df0-4b0290c07744" op="DELETE" ts="04-24-2012T16:43:57.000-0400">
            <id>5</id>
            <name>pete</name>
            <city>king of prussia</city>
            <email>pete@gmail.com</email>
          </contact>
    </batch> 
    ```

    The root element, `<batch>`, has the following attributes:

    -   id — batch ID. To acknowledge the receipt of this batch of source record update requests and receive the next batch, the API client would, in a subsequent Fetch Channel Updates operation, specify the id attribute value as the updateID parameter value.

    -   fmt — channel type \(FULL or DIFF\). Update requests sent through FULL channels contain all fields in the golden record. Update requests sent through DIFF channels include only the fields that have changed values.

    -   src — ID of the destination source system for the update requests. The update requests represented in `<batch>` are ordered based on the occurrence of their associated golden record updates, from oldest to newest. The root element for each update request contains a child element, `<id>`, in addition to master data. The `<id>` element contains the source entity ID in the case of a UPDATE, DELETE, RESTORE, or REJECT\_DUPLICATE operation but is empty in the case of a CREATE operation.

    The root element for each update request has the following attributes:

    -   grid \(CREATE, UPDATE, RESTORE, or DELETE operation only\) — ID of the associated golden record.

    -   ts — timestamp for the associated golden record update in the case of a CREATE or UPDATE operation, for the end-dating of the associated golden record in the case of a DELETE operation, for the restoring of the associated golden record in the case of a RESTORE operation, or for the rejection of the quarantined entity in the case of a REJECT\_DUPLICATE operation.

    -   op — operation \(CREATE, UPDATE, DELETE, RESTORE, or REJECT\_DUPLICATE\).

    -   enddate \(DELETE operation only\) — timestamp for the end-dating of the associated golden record. If this attribute is populated, its value is the same as the value of the ts attribute.

-   204 \(No Content\) There are not any update requests on the specified channel.

-   400 (Bad Request) The *universeID* parameter value contains only space characters. Sample response body:

    ```xml
    <error>
      <message>The given universe id is blank.</message>
    </error> 
    ```

- 400 (Bad Request) The update identified by updateID was already acknowledged. Sample response body:

  ```xml
  <error>
    <message>The update with id '3' in channel with id '4ff6d6ff-577e-4f64-ae45-3b6450dd53ce' has already been acknowledged.</message>
  </error> 
  ```

- 400 (Bad Request) *channelID* does not identify a channel for which Initial Load is complete. Sample response body:

  ```xml
  <error>
    <message>The channel '4ff6d6ff-577e-4f64-ae45-3b6450dd53ce' for source 'QB' in universe 'a28c2bc9-e6c7-4aa2-8a7e-a2e77ca9b887' is CREATED but needs to be STRAPPED before update requests are allowed.</message>
  </error> 
  ```

- 404 (Not Found) *universeID* does not identify a universe under the authenticated account. Sample response body:

  ```xml
  <error>
    <message>A universe with id 'ac11cc59-c77a-4afe-8c92-ed86a7daabec' does not exist.</message>
    <message>Universe definition with id 'ac11cc59-c77a-4afe-8c92-ed86a7daabec' could not be loaded from plugin component directory 'plugins/mdm/bundles/ac11cc59-c77a-4afe-8c92-ed86a7daabec'.</message>
  </error> 
  ```

- 404 (Not Found) *sourceID* does not identify a source attached to the specified universe. Sample response body:

  ```xml
  <error>
    <message>Source with code 'FOO' does not exist under universe '851a6a64-6a88-4916-a5b7-d6a974d54318'.</message>
  </error> 
  ```

- 404 (Not Found) *channelID* does not identify a channel for the specified source. Sample response body:

  ```xml
  <error>
    <message>Channel with id '4ff6d6ff-577e-4f64-ae45-3b6450dd53ce' for source 'FOO' does not exist under universe '851a6a64-6a88-4916-a5b7-d6a974d54318'.</message>
  </error> 
  ```

- 404 (Not Found) *updateID* does not identify a batch of source record update requests for the specified channel. Sample response body:

  ```xml
  <error>
    <message>A batch with id 'foo' does not exist.</message>
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
  