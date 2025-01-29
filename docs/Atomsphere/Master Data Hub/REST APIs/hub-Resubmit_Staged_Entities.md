# Resubmit Staged Entities 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-091f8b38-66da-42bc-b728-a3a18536756b"/>
</head>


The Resubmit Staged Entities operation allows the authenticated user to resubmit specific entities to a designated staging area. This request is associated with a particular source in a given universe (deployed model)

Resubmitting entities lets you resend an entity to the staging area after you've made changes to the model so you can see how the entity would be incorporated. For example, you can change the model's match rules, re-deploy the model, and resubmit the entity to staging to see the effect.

## Basic authentication 

-   To perform this operation using Basic auth, send an **HTTP POST** request to:

    `https://<host>:<port>/mdm/universes/<universeID>/staging/resubmit`

## JWT authentication

- To perform this operation using JSON Web Token (JWT) auth, send an **HTTP POST** request to:
  `https://<host>:<port>/mdm/universes/<universeID>/staging/resubmit?repositoryId=<repository ID>`

You must have the following MDM privileges: 

- With the Advanced Security feature on your account:
    - **MDM - Stewardship** with the **View Staged Data** and **Resubmit Staged Data** Hub role entitlement for the queried repository
    or
    - **MDM - Stewardship Management**
- Without Advanced Security:
    - **MDM - Stewardship**


## Path parameters 

**universeID**  
ID of the universe

## Query parameters 

**repositoryId** <br></br>
ID of the repository. Case sensitive. Required with JWT authentication only. You can obtain the repository ID from the URL after navigating to the repository in the user interface.

## Request parameters

The following parameters appear in the request body:

- **sourceId**: ID of the source (required).
- **stagingAreaId**: ID of the Staging area (required). The ID can be obtained from the [Query Staged Entities](/docs/Atomsphere/Master%20Data%20Hub/REST%20APIs/hub-Query_Staged_Entities.md) endpoint

The following parameters are wrapped in the `<filter>` tag. Optionally, you can specify the filter operation with the op="" attribute to be AND or OR. By default the operator is AND when no operator is specified:


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
    - `sourceEntityId`(optional) - The specific source entity ID. The ID can be obtained from the [Query Staged Entities](/docs/Atomsphere/Master%20Data%20Hub/REST%20APIs/hub-Query_Staged_Entities.md) endpoint or from the Staged Entities list in the UI.
- `stagedEntryIds`(optional): Sets a filter for staged entry Ids. This tag wraps the stagedEntryId tags. 
    - `stagedEntryId`(optional) - The specific staged Entry ID. The ID can be obtained from the [Query Staged Entities](/docs/Atomsphere/Master%20Data%20Hub/REST%20APIs/hub-Query_Staged_Entities.md) endpoint.

## Request body

In the request body, wrap the entities in a `<StagingActionRequest>` element. Request body is in XML. 

```xml
<StagingActionRequest>
   <sourceId>1</sourceId>
   <stagingAreaId>sa</stagingAreaId>
   <filter op="AND">
       <state>QUARANTINED.FIELD_FORMAT_ERROR</state>
       <createDateRelative>PAST_HOUR</createDateRelative>
       <createdDate>
           <from>2024-05-11T07:28:32</from>
           <to>2023-06-11T07:28:32</to>
       </createdDate>
       <stagedEntryIds>
          <stagedEntryId>82</stagedEntryId>
          <stagedEntryId>83</stagedEntryId>
          <stagedEntryId>85</stagedEntryId>
       </stagedEntryIds>
       <sourceEntityIds>
           <sourceEntityId>sg-4</sourceEntityId>
           <sourceEntityId>sg-1</sourceEntityId>
       </sourceEntityIds>
   </filter>
</StagingActionRequest>

```

## Responses 

-   200 (OK) The body of the response is XML. The root element is `<MdmActionResponse>`. Within that element **resultCount** contains the count of deleted staged entities.

    Sample response body:

    ```xml
      <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
         <MdmActionResponse resultCount="12"/>
      ```

-   400 (Bad Request) The authenticating user does not have the API Access privilege and the Commit Staged Data entitlement required for this operation. Sample response body:

    ```xml
    <error>
       <message>You do not have permissions to access this resource.</message>
    </error>
    ```

- 400 (Bad Request) The universeID parameter value contains only space characters. Sample response body:

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

- 400 (Bad Request) The request does not contain a properly-formatted StagingActionRequest object. Sample response body:

   ```xml
   <error>
      <message>Unable to read message body. Please make sure the
         XML structure and namespace are correct.</message>
   </error>
   ```

- 404 (Not Found) universeID does not identify a universe hosted in the specified repository. Sample response body:

   ```xml
   <error>
      <message>A universe with id 'ac11cc59-c77a-4afe-8c92-ed86a7daabec' does not exist.</message>
   </error> 
   ```

- 404 (Not Found) The staging area ID specified in the request does not identify a staging area for the specified source in the specified universe. Sample response body:

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

- 403 (Forbidden) Authentication failure. Sample response body: User does not have the required MDM privilege to perform the action. Applicable to JWT auth only. Sample response body:

   ```xml
      <html>
      <head>
	      <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />
	      <title>Error 401 Invalid credentials.</title>
      </head>
      <body>
	   <h2>HTTP ERROR 401</h2>
	   <p>Problem accessing /mdm/universes/d0fa930a-9679-4848-a07b-3a9431091302/staging/resubmit. Reason:
		<pre>    Invalid credentials.</pre>
	   </p>
      </body>
      </html>
   ```