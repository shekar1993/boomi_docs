# Query Staged Entities 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-fe3bd69b-8158-4435-b378-8fa8a072055c"/>
</head>

The Query Staged Entities operation returns staged entities from a designated staging area. This request is associated with a particular source in a given universe (deployed model) for the authenticated user.

## Basic authentication

To perform this operation using Basic auth, send an **HTTP POST** request to

`https://<host>:<port>/mdm/universes/<universeID>/staging`

## JWT authentication

To perform this operation using JSON Web Token (JWT) auth, send an **HTTP POST** request to:

`https://<host>:<port>/mdm/universes/<universeID>/staging?repositoryId=<repository ID>`

You must have the following MDM privileges: 

- With the Advanced Security feature on your account:
    - **MDM - Stewardship** with the **View Staged Data** Hub role entitlement for the queried repository
    or
    - **MDM - Stewardship Management**
- Without Advanced Security:
    - **MDM - Stewardship**

Field values are masked if:
- Model fields contain masking configurations
- The request uses JWT authentication
- You do not have permission to view masked data. You can view masked data if you have the **MDM Administrator** or **MDM Privileged Data Steward** role, the **MDM - Reveal Masked Data** privilege, or the **Reveal Masked Data** entitlement.

## Path parameters 

**universeID**  
ID of the universe

## Query parameters 

**repositoryId** <br></br>
ID of the repository. Case sensitive. Required with JWT authentication only. You can obtain the repository ID from the URL after navigating to the repository in the user interface.

## Request parameters

The following parameters appear in the request body:

Within the `StagingQueryRequest` element, you can set the following attributes:

- **includeSummary**(optional) - Adds the `<StagingAreaSummary>` section to the response, detailing the number of records for each entity `<state>` result in the response.

- **includeRecords**(optional) - Includes or removes the records returned in the response. Value is boolean.

- **offsetToken**(optional) - Sets the starting point to retrieve records which allows you to skip a specific number records. For example, in a set of 20 records, 10 skips the first 10 records and queries the remaining 10. 

- **limit**(optional) - Sets the maximum number of query results to return. 200 is the maximum value and the default.

The following elements specify the source and staging area to query:

- **sourceId**: ID of the source (required).

- **stagingAreaId**: ID of the Staging area (required). The ID can be obtained from the Query Staged Entities endpoint

### Filters

The following parameters are wrapped in the `<filter>` tag. You must have at least one filter in the request. Optionally, you can specify the filter operation with the op="" attribute to be AND or OR. By default the operator is AND when no operator is specified: 

- `state`(optional): sets a filter by staging result status. This element can repeat — one token per occurrence. The following tokens are valid:
    -  COMPLETED.* — entities that, if contributed when staged, would not be quarantined.

    - COMPLETED.CREATED — entities that, if contributed when staged, result in the creation of a golden record. This token corresponds to the Entity Result filter criterion Create Record on the Staged Entities page.

    - COMPLETED.UPDATED — entities that, if contributed when staged, result in updating a golden record. This token corresponds to the Entity Result filter criterion Update Record on the Staged Entities page.

    - COMPLETED.DELETED — entities that, if contributed when staged, result in the end-dating of a golden record. This token corresponds to the Entity Result filter criterion Delete Record on the Staged Entities page.

    - COMPLETED.LINKED — entities that, if contributed when staged, result in the linking of a golden record to the source entity. This token corresponds to the Entity Result filter criterion Link Record on the Staged Entities page.

    - COMPLETED.LINKED_WITH_UPDATE — entities that, if contributed when staged, result in the linking of a golden record to the source entity and the updating of that golden record. This token corresponds to the Entity Result filter criterion Link and Update Record on the Staged Entities page.

    - COMPLETED.NOOP — entities that, if contributed when staged, would not create, update, end-date, or link a golden record. This token corresponds to the Entity Result filter criterion No Change to Record on the Staged Entities page.

    - QUARANTINED.* — entities that, if contributed when staged, would quarantine. This token corresponds to the Entity Result filter criterion Quarantine and the Quarantine Cause filter criterion All on the Staged Entities page.

    - QUARANTINED.AMBIGUOUS_MATCH — entities that quarantine due to their matching 10 or more golden records, regardless of links to source records (1,000 or more in the case of an exact matching expression grouped with a fuzzy matching expression). This token corresponds to the Entity Result filter criterion Quarantined and the Quarantine Cause filter criterion Ambiguous Match on the Staged Entities page.

    - QUARANTINED.DUPLICATE_KEY — entities that quarantine because they contain multiple collection items with the same key values. This token corresponds to the Entity Result filter criterion Quarantined and the Quarantine Cause filter criterion Duplicate Collection Key on the Staged Entities page.

    - QUARANTINED.ENRICH_ERROR — entities that quarantine due to a data quality step failure. This token corresponds to the Entity Result filter criterion Quarantined and the Quarantine Cause filter criterion Data Quality Error on the Staged Entities page.

    - QUARANTINED.FIELD_FORMAT_ERROR — entities that quarantine because they contain data not in conformance with either their field type, validation options for the specified field type in the domain model, or with the Master Data Hub system 255-character limit for text and Enumeration field values. This token corresponds to the Entity Result filter criterion Quarantined and the Quarantine Cause filter criterion Field Format Error on the Staged Entities page.

    - QUARANTINED.INCORPORATE_ERROR — entities causing errors other than unresolvable references during the staging of incorporation. This token corresponds to the Entity Result filter criterion Quarantined and the Quarantine Cause filter criterion Other Incorporation Error on the Staged Entities page.

    - QUARANTINED.MATCH_REFERENCE_UNKNOWN — entities that quarantine due to their having a value in a reference field specified for matching in a match rule that does not resolve to a golden record. This token corresponds to the Entity Result filter criterion Quarantined and the Quarantine Cause filter criterion Reference Matching Error on the Staged Entities page.

    - QUARANTINED.MULTIPLE_MATCHES — entities that quarantine due to their matching multiple golden records not yet linked to a record in the source. This token corresponds to the Entity Result filter criterion Quarantined and the Quarantine Cause filter criterion Multiple Matches on the Staged Entities page.

    - QUARANTINED.PARSE_FAILURE — entities that quarantine due to their failure to structurally conform with the field layout specified in the domain model. This token corresponds to the Entity Result filter criterion Quarantined and the Quarantine Cause filter criterion Data Integration Error in the Staged Entities page.

    - QUARANTINED.POSSIBLE_DUPLICATE — entities that quarantine due to their matching golden records linked to a record in the source. This token corresponds to the Entity Result filter criterion Quarantined and the Quarantine Cause filter criterion Potential Duplicate on the Staged Entities page.

    - QUARANTINED.RECORD_ALREADY_ENDDATED — entities that quarantine due to the existence of a link from an end-dated golden record. This token corresponds to the Entity Result filter criterion Quarantined and the Quarantine Cause filter criterion Record Already End-dated on the Staged Entities page.

    - QUARANTINED.REFERENCE UNKNOWN — entities that quarantine due to their having unresolvable references, either collection items or fields for which referential integrity for entity contributions is enforced. This token corresponds to the Entity Result filter criterion Quarantined and the Quarantine Cause filter criterion Unknown Reference Value on the Staged Entities page.

    - QUARANTINED.REQUIRED_FIELD — entities that quarantine due to their omission of fields specified as required or as key fields for collections in the domain model. This token corresponds to the Entity Result filter criterion Quarantined and the Quarantine Cause filter criterion Required Field Omitted on the Staged Entities page.

    - QUARANTINED.REQUIRES_APPROVAL — entities that quarantine due to their satisfying conditions configured for their source requiring the manual approval of new entity contributions. This token corresponds to the Entity Result filter criterion Quarantined and the Quarantine Cause filter criterion Create Approval Required on the Staged Entities page.

    - QUARANTINED.REQUIRES_END_DATE_APPROVAL — entities that quarantine due to their configured sources requiring manual approval of contributed entities that would end-date matching golden records. This token corresponds to the Entity Result filter criterion Quarantined and the Quarantine Cause filter criterion End-date Approval Required on the Staged Entities page.

    - QUARANTINED.REQUIRES_UPDATE_APPROVAL — entities that quarantine due to their satisfying conditions configured for their source requiring the manual approval of contributed entities that update matching golden records. This token corresponds to the Entity Result filter criterion Quarantined and the Quarantine Cause filter criterion Update Approval Required on the Staged Entities page.

    - QUARANTINED.REQUIRES_UPDATE_WITH_BASE_VALUE_APPROVAL — entities that quarantine because there is a pending link from the matching golden record to the contributing source and the entity has a field with a base value (the value of the field in the golden record’s base version for the source when creating the pending link).

- `createDateRelative`(optional): Use one of the following date filters. If value is present, createdDate is ignored. 
    - PAST_HOUR
    - PAST_24_HOURS
    - PAST_WEEK
- `createdDate`(optional): The date the entity was created in the staging area. This tag wraps the to and from tag. 
   - `from`: The start date for filtering entities by created date. Format is `yyyy-MM-dd'T'HH:mm:ss'Z'`. Value can be an empty string.
   - `to`: The end date for filtering entities by created date. Format is `yyyy-MM-dd'T'HH:mm:ss'Z'`. Value can be an empty string.
- `sourceEntityIds`(optional): Sets a filter by source entities. This tag wraps specific source entity Ids.
    - `sourceEntityId`(optional) - The specific source entity ID. The ID can be obtained from the Query Staged Entities endpoint or from the Staged Entities list in the UI.
- `stagedEntryIds`(optional): Sets a filter for staged entry Ids. This tag wraps the stagedEntryId tags. 
    - `stagedEntryId`(optional) - The specific staged Entry ID. The ID can be obtained from the Query Staged Entities endpoint.
    
<!-- - `field`(optional) - sets a filter by field. Field has the following attributes:
    - **name** - The field name. For example, ACCOUNT_NUMBER. The data type is a string.
    - **value** - The field's value in the entity. -->


## Request body

In the request body, wrap the entities in a `<StagingQueryRequest>` element.

```xml
<StagingQueryRequest offsetToken=""
  limit="20">
   <sourceId>1</sourceId>
   <stagingAreaId>sa</stagingAreaId>
   <filter op="OR">
       <state>QUARANTINED.FIELD_FORMAT_ERROR</state>
       <createDateRelative>PAST_HOUR</createDateRelative>
       <createdDate>
           <from>2024-05-11T07:28:32</from>
           <to>2023-06-11T07:28:32</to>
       </createdDate>
       <sourceEntityIds>
           <sourceEntityId>sg-4</sourceEntityId>
           <sourceEntityId>sg-1</sourceEntityId>
       </sourceEntityIds>
   </filter>
</StagingQueryRequest>
```


## Responses 

- 200 (OK) The body contains the XML representation of the query results. It returns a maximum of 200 results per request unless the limit query parameter for a given request specifies a lower maximum number of results.

    Each `<StagedEntity>` element represents a staged entity. The element has the following attributes:

    - **Id** - staged entity Id.
    - **sourceEntityId** - source entity Id.
    - **createdDate** - date the staged entity was created.
    - **state** - staging result status which indicates if the entity would be quarantined after being submitted as an entity in the repository.
    - **title** - record title for the record associated with the entity.

    Field values are masked if model fields contain masking configurations, the user cannot view masked data, and the request uses JWT authentication. Masking is not applied with basic authentication. This is a sample response body:

``` xml
    <StagingQueryResponse resultCount="5" totalCount="5">
   <StagedEntity id="5" sourceEntityId="modelforstaging3" createdDate="2024-04-30T10:44:09Z" state="QUARANTINED.POSSIBLE_DUPLICATE">
       <entity>
           <modelforstaging>
               <first_name>Williams</first_name>
               <lastname>Fiction</lastname>
               <address_1>CA</address_1>
           </modelforstaging>
       </entity>
   </StagedEntity>
   <StagedEntity id="4" sourceEntityId="modelforstaging2" createdDate="2024-04-30T10:42:53Z" state="COMPLETED.NOOP">
       <entity>
           <modelforstaging>
               <first_name>Williams 2</first_name>
               <lastname>Fiction 2</lastname>
               <address_1>WA</address_1>
           </modelforstaging>
       </entity>
   </StagedEntity>
   <StagedEntity id="3" sourceEntityId="modelforstaging1" createdDate="2024-04-30T10:42:53Z" state="COMPLETED.NOOP">
       <entity>
           <modelforstaging>
               <first_name>Williams</first_name>
               <lastname>Fiction</lastname>
               <address_1>CA</address_1>
           </modelforstaging>
       </entity>
   </StagedEntity>
   <StagedEntity id="2" sourceEntityId="modelforstaging2" createdDate="2024-04-30T10:42:11Z" state="COMPLETED.CREATED">
       <entity>
           <modelforstaging>
               <first_name>Williams 2</first_name>
               <lastname>Fiction 2</lastname>
               <address_1>WA</address_1>
           </modelforstaging>
       </entity>
   </StagedEntity>
   <StagedEntity id="1" sourceEntityId="modelforstaging1" createdDate="2024-04-30T10:42:11Z" state="COMPLETED.CREATED">
       <entity>
           <modelforstaging>
               <first_name>Williams</first_name>
               <lastname>Fiction</lastname>
               <address_1>CA</address_1>
           </modelforstaging>
       </entity>
   </StagedEntity>
   <StagingAreaSummary>
       <entityResultSummary name="QUARANTINED.POSSIBLE_DUPLICATE" count="1"/>
       <entityResultSummary name="COMPLETED.NOOP" count="2"/>
       <entityResultSummary name="COMPLETED.CREATED" count="2"/>
   </StagingAreaSummary>
</StagingQueryResponse>
```


- 400 (Bad Request) The universeID value contains only space characters. Sample response body:

    ```xml
    <error>
          <message>The given universe id is blank.</message>
    </error> 
    ```

- 400 (Bad Request) The request does not specify a staging area ID. Sample response body:

   ```xml
      <error>
         <message>The given staging id is blank.</message>
      </error>
   ```

- 404 (Not Found) universeID does not identify a universe under the authenticated account. Sample response body:

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
      Invalid credentials.</p>
   </body>
    ```

- 403 (You do not have permissions to access this resource) User does not have the required MDM privilege to perform the action. Applicable to JWT auth only. Sample response body:

```xml
   <error><message>You do not have permissions to access this resource.</message></error>
```