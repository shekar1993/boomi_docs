# Commit Staged Entities 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-adf462ae-ce9c-4e6b-8f41-c5088d1bdaed"/>
</head>


The Commit Staged Entities operation sends a request to commit specified entities in a specified staging area for a source of a specified universe \(domain\) hosted in a specified repository under a specified account accessible to the authenticating user.

To perform this operation, send an HTTP POST request to:

`https://api.boomi.com/mdm/api/rest/v1/<accountID>/repositories/<repositoryID>/universes/<universeID>/staging/commit`

:::note

This operation requires the authenticating user to have the Commit Staged Data entitlement in addition to the API Access privilege.

You can implement requests for this operation in processes using the [HTTP Client connector](/docs/Atomsphere/Integration/Connectors/r-atm-HTTP_Client_connector_d64af80e-febe-4cd2-89ad-e3d0fc53c502.md), as demonstrated by example 1 in the sample process [ Hub: Move Staged Entities](https://platform.boomi.com/#build;processLibrary=7a24b7d3-a197-410c-aa98-1a2519896ffa), which you can install in your account from the process library in Integration.

:::

The body of the request must conform to the following structure:

```xml
<mdm:StagingActionRequest xmlns:mdm="http://mdm.api.platform.boomi.com/"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
   <mdm:sourceId></mdm:sourceId>
   <mdm:stagingAreaId></mdm:stagingAreaId>
   <mdm:filter>
      <mdm:stagedEntryId></mdm:stagedEntryId>  
      <mdm:sourceEntityId></mdm:sourceEntityId>
      <mdm:entityResult></mdm:entityResult>
      <mdm:createDateRelative></mdm:createDateRelative>
      <mdm:createDateFrom></mdm:createDateFrom>
      <mdm:createDateTo></mdm:createDateTo>
   </mdm:filter>
</mdm:StagingActionRequest>

```

where

-   `<mdm:sourceId>` and `<mdm:stagingAreaId>` specify the staging area. For a given source, each staging area must be assigned a unique ID. These are required elements.

-   `<mdm:filter>` sets query filter parameters:

    -   `<mdm:stagedEntryId>` \(optional\) sets a filter by staging entry ID. You can obtain the ID using a Query Staged Entities request. This element can repeat — one ID per occurrence.

    -   `<mdm:sourceEntityId>` \(optional\) sets a filter by source entity ID.

    -   `<mdm:entityResult>`. \(optional\) sets a filter by staging result. This element can repeat — one token per occurrence. The following tokens are valid:

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

        - QUARANTINED.FIELD_FORMAT_ERROR — entities that quarantine because they contain data not in conformance with either their field type, validation options for the specified field type in the domain model, or with the Boomi DataHub system 255-character limit for text and Enumeration field values. This token corresponds to the Entity Result filter criterion Quarantined and the Quarantine Cause filter criterion Field Format Error on the Staged Entities page.

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

        - QUARANTINED.REQUIRES_UPDATE_WITH_BASE_VALUE_APPROVAL — entities that quarantine because there is a pending link from the matching golden record to the contributing source and the entity has a field with a base value (the value of the field in the golden record’s base version for the source when creating the pending link).-  

    -   `mdm:createDateRelative>` \(optional\) sets a filter for a time span ending at the time of the request. The following tokens are valid.

         - PAST_HOUR — this token corresponds to the Created Date filter criterion Past Hour on the Staged Entities page.

         - PAST_24_HOURS — this token corresponds to the Created Date filter criterion Past 24 Hours on the Staged Entities page.

        - PAST_WEEK — this token corresponds to the Created Date filter criterion Past Week on the Staged Entities page. 

    -   `<mdm:createDateFrom>` and `<mdm:createDateTo>` \(both optional\) set a time span filter. The format is yyyy-mm-ddThh:mm:ss — for example, 2015-07-31T14:25:07.

        If `<mdm:createDateRelative>` is present and contains a valid token, and ignores `<mdm:createDateFrom>` and `<mdm:createDateTo>`.

    Elements corresponding to unused filter parameters must be omitted from `<mdm:filter>`.

    For example:

    ```xml
    <mdm:StagingActionRequest xmlns:mdm="http://mdm.api.platform.boomi.com/"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
       <mdm:sourceId>SF</mdm:sourceId>
       <mdm:stagingAreaId>SFStaging</mdm:stagingAreaId>
       <mdm:filter>
          <mdm:entityResult>QUARANTINED.ENRICH_ERROR</mdm:entityResult>
       </mdm:filter>
    </mdm:StagingActionRequest>
    
    ```


## Path parameters 

**accountID**  
ID of the account

**repositoryID**  
ID of the repository

**universeID**  
ID of the universe


## Responses 

-   200 \(OK\) The body of the response is XML. The root element is `<mdm:MdmActionResponse>`. Within that element `<mdm:resultCount>` contains the count of committed entities, some of which may be quarantined.

    Sample response body:

    ```xml
    <mdm:MdmActionResponse xmlns:mdm="http://mdm.api.platform.boomi.com/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
       <mdm:resultCount>2</mdm:resultCount>
    </mdm:MdmActionResponse>
    ```

-   400 \(Bad Request\) The authenticating user does not have the API Access privilege and the Commit Staged Data entitlement required for this operation. Sample response body:

    ```xml
    <error>
       <message>The authenticated user does not have access rights to this functionality</message>
    </error>
    ```

- 400 (Bad Request) The *universeID* parameter value contains only space characters. Sample response body:

   ```xml
   <error>
      <message>The given universe id is blank.</message>
   </error> 
   ```

- 400 (Bad Request) *repositoryID* does not identify a repository under the specified account. Sample response body:

   ```xml
   <error>
      <message>Could not find containerAccount for container id 
         dbe797ff-6d6f-44e9-acd9-d77494a44b15 and account id account-123456</message>
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

- 403 (Forbidden) Authentication failure. Sample response body:

   ```xml
   <UserMessage id="error.user.login" type="error">
      <Data>Incorrect user name and password combination.</Data>
   </UserMessage>
   ```

- 403 (Forbidden) One or more path parameter values are omitted. Sample response body:

   ```xml
   <UserMessage id="error.user.login" type="error">
      <Data>Incorrect user name and password combination.</Data>
   </UserMessage>
   ```

- 403 (Forbidden) *accountID* does not identify an account accessible to the authenticating user. Sample response body:

   ```xml
   <UserMessage id="error.user.login" type="error">
      <Data>Incorrect user name and password combination.</Data>
   </UserMessage>
   ```

- 404 (Not Found) *universeID* does not identify a universe hosted in the specified repository. Sample response body:

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
   