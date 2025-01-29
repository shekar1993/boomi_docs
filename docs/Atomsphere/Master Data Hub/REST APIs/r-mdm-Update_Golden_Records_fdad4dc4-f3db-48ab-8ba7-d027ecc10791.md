# Update Golden Records 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-fdad4dc4-f3db-48ab-8ba7-d027ecc10791"/>
</head>


The Update Golden Records operation sends a batch of entities from a contributing source for updating a universe \(domain\) under an authenticated account. The entities are represented in XML format. You can also use this operation to stage a batch of entities.

## Basic authentication 

-   To perform this operation as an update using Basic auth, send an **HTTP POST** request to:

    `https://<host>:<port>/mdm/universes/<universeID>/records`

    where

-   To perform this operation for staging using Basic auth, send an **HTTP POST** request to

    `https://<host>:<port>/mdm/universes/<universeID>/staging/<stagingAreaID>`

## JWT authentication

- To perform this operation as an update using JSON Web Token (JWT) auth, send an **HTTP POST** request to:
  `https://<host>:<port>/mdm/universes/<universeID>/records?repositoryId=<repository ID>`

- To perform this operation for staging using JSON Web Token (JWT) auth, send an **HTTP POST** request to:
  `https://<host>:<port>/mdm/universes/<universeID>/staging/<stagingAreaID>?repositoryId=<repository ID>`

You must have the following MDM privileges: 

- **MDM - Batch Management** 


:::note

You can implement requests for this operation in processes using the [ Boomi Master Data Hub connector](/docs/Atomsphere/Integration/Connectors/r-atm-MDM_connector_ff690a6f-288d-44b3-96fb-e81afb046703.md), as demonstrated by the sample process [Hub: Update Golden Records](https://platform.boomi.com/#build;processLibrary=4195924d-7d8a-4b94-ba77-b2d0b56f2824), which you can install in your account from the process library in Integration.

You can also use [Boomi DataHub connector's update golden records operation](/docs/Atomsphere/Integration/Connectors/int-BDH_Update_Golden_Records.md).

:::

## Path parameters 

**universeID**  
ID of the universe

**stagingAreaID**  
ID of the staging area

## Query parameters 

**repositoryId** <br></br>
ID of the repository. Case sensitive. Required with JWT authentication only. You can obtain the repository ID from the URL after navigating to the repository in the user interface.

## Request body

In the request body wrap the entities in a `<batch>` element. Specify the contributing source by its ID in the `<batch>` element’s src attribute. The entities must conform to the deployed model for the universe. In each entity, wrap the source record ID in an `<id>` element.

For example, the following is a batch from source SF:

```xml
<batch src="SF">

     <!-- first entity -->
     <contact>
       <id>1</id>
       <name>bob</name>
       <city>berwyn</city>
       <phones>
         <phone>
           <number>311 555-1234</number>
           <type>home</type>
         </phone>
         <phone>
           <number>311 555-4321</number>
           <type>mobile</type>
         </phone>
       </phones> 
       <email>bob@gmail.com</email>
     </contact>

     <!-- second entity -->
     <contact op="CREATE">
       <id>2</id>
       <name>sam</name>
       <city>pottstown</city>
       <phones>
         <phone>
           <number>311 555-8765</number>
           <type>mobile</type>
         </phone>
       </phones> 
       <email>sam@gmail.com</email>
     </contact>

     <!-- third entity -->
     <contact op="DELETE">
       <id>3</id>
       <name>eric</name>
       <city>lansdale</city>
       <phones>
         <phone>
           <number>311 555-9012</number>
           <type>home</type>
         </phone>
         <phone>
           <number>311 555-2109</number>
           <type>mobile</type>
         </phone>
       </phones> 
       <email>eric@gmail.com</email>
     </contact>

     <!-- fourth entity -->
     <contact>
       <id>4</id>
       <name>bill</name>
       <city>malvern</city>
       <phones>
         <phone op="UPSERT">
           <number>311 555-3456</number>
           <type>home</type>
         </phone>
         <phone op="UPSERT">
           <number>311 555-6543</number>
           <type>mobile</type>
         </phone>
       </phones> 
       <email>bill@gmail.com</email>
     </contact>

</batch> 

```

-   The first entity above is a normal update — creating a new golden record or a potential update to a linked golden record. If you omit the op attribute, its presence is implied with the value of “UPSERT”.

-   In the second entity, the op attribute value CREATE indicates a request to force the creation of a golden record. In this case, it skips matching. The created golden record can potentially duplicate if the entity is successfully incorporated. If an incorporation error occurs because a source entity with the ID specified in the entity has a linked golden record and you configure the contributing source to disallow multiple links from individual golden records to source entities, it quarantines the entity.

-   In the third entity the presence of the op attribute value DELETE on the entity’s root `<contact>` element indicates a request for the end-dating of the linked golden record.

    :::note
    
    Dedicated repository API operations, End-date Single Golden Record and End-date Multiple Golden Records, exist for end-dating a golden record\(s\).

    :::

-   In the fourth entity, a routine update, the op attribute value UPSERT in the `<phones>` collection items indicates a request for an update to `<phones>` collection items with matching keys in a linked golden record. Add the specified items to the collection if there are no such items. Either none or all items in an individual collection in an entity must have an operation specified. The supported operation types are UPSERT and DELETE. In addition, you can select operations only for collections for which you enable item identification by key field value.


The *grid* attribute is optional in an entity. The *grid* attribute value is expected to be a golden record ID.

-   Suppose a golden record with a specific ID exists in the domain, but there is no link from the golden record to the source. In that case, it establishes a link from the golden record to the source entity specified in the entity’s `<id>` element.

    This technique is most applicable to a non-contributing source, such as a data warehouse. However, the alternative of designating the source upon attachment as non-contributing is preferred because links to selected non-contributing sources establish automatically and would not need a Source to Boomi DataHub integration.

-   Suppose a golden record with the specified ID exists in the domain. In that case, links go from the golden record to the source. You can configure the contributing source to disallow multiple links from individual golden records to source entities. The updated golden record links to the source entity specified in the entity’s `<id>` element. References in other golden records to the entity are updated accordingly.

:::note

`*MDM*` (exactly as shown here in uppercase with leading and trailing asterisks) is not a valid source ID because it is used to distinguish batches submitted manually in the Boomi DataHub service. If `*MDM*` is specified as the source ID, the response is an unknown source error.

## Responses 

-   202 \(Accepted\) The request body conformed to all of batch update format requirements, and the update was accepted by the Repository for processing. The response body specifies the URL of the created batch update resource. The last segment of the URL specifies the ID assigned to the batch update resource. You can use this ID to get the status of the accepted batch update. Sample response body:

    ```
    http://host:port/mdm/universes/851a6a64-6a88-4916-a5b7-d6a974d54318/records/updates/42
    ```

-   400 (Bad Request) The *universeID* parameter value contains only space characters. Sample response body:

    ```xml
    <error>
      <message>The given universe id is blank.</message>
    </error> 
    ```

- 400 (Bad Request) The `<batch>` element’s *src* attribute value specifies a valid contributing source but the XML document contains invalid markup. Sample response body:

  ```xml
  <error>
    <message>When trying to parse a batch update for universe with id '851a6a64-6a88-4916-a5b7-d6a974d54318'.</message>
    <message>Unexpected EOF; was expecting a close tag for element <batch>
      at [row,col {unknown-source}]: [1,16]</message>
  </error> 
  ```

-   400 \(Bad Request\) The `<batch>` element’s *src* attribute value does not specify a contributing source for the specified universe. Sample response body:

    ```xml
    <error>
          <message>An update batch from source 'FOO' for the universe with id '851a6a64-6a88-4916-a5b7-d6a974d54318' cannot be accepted for processing because this source is not allowed to contribute records.</message>
    </error> 
    ```

- 400 (Bad Request) The request body is empty. Sample response body:

  ```xml
  <error>
    <message>When trying to parse a batch update for universe with id '851a6a64-6a88-4916-a5b7-d6a974d54318'.</message>
    <message>Unexpected EOF in prolog at [row,col {unknown-source}]: [1,0]</message>
  </error> 
  ```

- 400 (Bad Request) The request body does not start with a `<batch>`tag. Sample response body:

  ```xml
  <error>
    <message>An update batch for universe with id '851a6a64-6a88-4916-a5b7-d6a974d54318' could not be processed because it starts with a 'foo' tag instead of with a 'batch' tag.</message>
  </error> 
  ```

- 400 (Bad Request) The `<batch>` element does not have a populated source src attribute. Sample response body:

  ```xml
  <error>
    <message>An update batch for universe with id '851a6a64-6a88-4916-a5b7-d6a974d54318' does not contain a source ('src') attribute.</message>
  </error> 
  ```

-   400 \(Bad Request\) The batch contains more source entities than the specified universe is configured to accept in a single batch. Sample response body:

    ```xml
    <error>
          <message>The batch update with id '1' from source 'FOO' was rejected because it contains more source entities than the universe 'contact' can accept in a single batch (current max is: 200).</message>
    </error> 
    ```

-   400 \(Bad Request\) The `<batch>` element’s *src* attribute value specifies a source attached to the universe, but it did not load the source. Sample response body:

    ```xml
    <error>
          <message>An update batch from source 'FOO' for the universe with id '31cb0f62-b239-4d96-b112-bc4fafea362d' cannot be accepted for processing because this source is not yet marked as one that can send updates.</message>
    </error>
    ```

- 404 (Not Found) *universeID* does not identify a universe under the authenticated account. Sample response body:

  ```xml
  <error>
    <message>A universe with id 'ac11cc59-c77a-4afe-8c92-ed86a7daabec' does not exist.</message>
    <message>Universe definition with id 'ac11cc59-c77a-4afe-8c92-ed86a7daabec' could not be loaded from plugin component directory 'plugins/mdm/bundles/ac11cc59-c77a-4afe-8c92-ed86a7daabec'.</message>
  </error>
  ``` 

-   404 \(Not Found\) The `<batch>` element’s *src* attribute value does not identify a source attached to the specified universe. Sample response body:

    ``` xml
    <error>
          <message>Source with code 'FOO' does not exist under universe '31cb0f62-b239-4d96-b112-bc4fafea362d'.</message>
    </error>
    ```

- 404 (Not Found) *stagingAreaId* does not identify a staging area for a source in the specified universe. Sample response body:

  ```xml
  <error>
    <message>A staging area with id SFStaging was not found in universe: ac11cc59-c77a-4afe-8c92-ed86a7daabec</message>
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