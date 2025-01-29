# Query Staged Entities 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-7982259b-f4bd-4bfd-b9a0-ef14c9a11a64"/>
</head>


The Query Staged Entities operation sends a query of the entities in a specified staging area for a specified universe \(domain\) hosted in a specified repository under a specified account accessible to the authenticating user.

To perform this operation, send an HTTP POST request to:

`https://api.boomi.com/mdm/api/rest/v1/<accountID>/repositories/<repositoryID>/universes/<universeID>/staging`

:::note

This operation requires the authenticating user to have the **API Access** privilege and either the **MDM - View Data** privilege or the **View Staged Data** entitlement.


You can implement requests for this operation in processes using the [HTTP Client connector](/docs/Atomsphere/Integration/Connectors/r-atm-HTTP_Client_connector_d64af80e-febe-4cd2-89ad-e3d0fc53c502.md), as demonstrated by example 2 in the sample process [ Hub: Read Staging Area Information](https://platform.boomi.com/#build;processLibrary=7a24b7d3-a197-410c-aa98-1a2519896ffa), which you can install in your account from the process library in which you can install in your account from the process library in Integration. 

:::

The body of the request must conform to the following structure:

```xml
<mdm:StagingQueryRequest xmlns:mdm="http://mdm.api.platform.boomi.com/"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" includeSummary="" includeRecords="" offsetToken="" limit="">
   <mdm:sourceId></mdm:sourceId>
   <mdm:stagingAreaId></mdm:stagingAreaId>
   <mdm:filter>
      <mdm:sourceEntityId></mdm:sourceEntityId>
      <mdm:entityResult></mdm:entityResult>
      <mdm:createDateRelative></mdm:createDateRelative>
      <mdm:createDateFrom></mdm:createDateFrom>
      <mdm:createDateTo></mdm:createDateTo>
   </mdm:filter>
</mdm:StagingQueryRequest>

```

where

-   Setting the optional Boolean attribute includeSummary for `<mdm:StagingQueryRequest>` to false omits summary counts from the response. The default is true. Setting the optional Boolean attribute includeRecords for `<mdm:StagingQueryRequest>` to true includes individual entities in the response. The default is false.

-   The optional offsetToken and limit attributes for `<mdm:StagingQueryRequest>` are used for paging. The limit value is the maximum number of staged entities to return per page. Boomi DataHub enforces a maximum of 200 entities per page regardless of the limit value. The offsetToken value corresponds to the same value returned from a previous Query Staged Entities request.

-   `<mdm:sourceId>` and `<mdm:stagingAreaId>` specify the staging area. For a given source, each staging area must be assigned a unique ID. These elements are required.

-   `<mdm:filter>` sets query filter parameters:

    -   `<mdm:sourceEntityId>` \(optional\) sets a filter by source entity ID.

    -   `<mdm:entityResult>`. \(optional\) sets a filter by staging result. This element can repeat — one token per occurrence. The following tokens are valid:
  
           - COMPLETED.* — entities that, if contributed when staged, would not be quarantined.

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

         - QUARANTINED.REQUIRES_UPDATE_WITH_BASE_VALUE_APPROVAL — entities that quarantine because there is a pending link from the matching golden record to the contributing source and the entity has a field with a base value (the value of the field in the golden record’s base version for the source when creating the pending link). 

    -   `<mdm:createDateRelative>` \(optional\) sets a filter for a time span ending at the time of the request. The following tokens are valid:
  
         - PAST_HOUR — this token corresponds to the Created Date filter criterion Past Hour on the Staged Entities page.

         - PAST_24_HOURS — this token corresponds to the Created Date filter criterion Past 24 Hours on the Staged Entities page.

         - PAST_WEEK — this token corresponds to the Created Date filter criterion Past Week on the Staged Entities page.

    -   `<mdm:createDateFrom>` and `<mdm:createDateTo>` \(both optional\) set a time span filter. The format is *yyyy-mm-ddThh:mm:ss* — for example, 2015-07-31T14:25:07. The specified times are UTC.

        If `<mdm:createDateRelative>` is present and contains a valid token, it ignores `<mdm:createDateFrom>` and `<mdm:createDateTo>`.

    Elements corresponding to unused filter parameters must be omitted from `<mdm:filter>`.

    For example:

    ```xml
    <mdm:StagingQueryRequest xmlns:mdm="http://mdm.api.platform.boomi.com/"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" includeSummary="true" includeRecords="true" 
      offsetToken="abc" limit="10">
       <mdm:sourceId>SF</mdm:sourceId>
       <mdm:stagingAreaId>SFStaging</mdm:stagingAreaId>
       <mdm:filter>
          <mdm:entityResult>QUARANTINED.ENRICH_ERROR</mdm:entityResult>
       </mdm:filter>
    </mdm:StagingQueryRequest>
    
    ```


## Path parameters 

**accountID**  
ID of the account

**repositoryID**  
ID of the repository

**universeID**  
ID of the universe


## Responses 

-   200 \(OK\) The body contains the XML representation of the query results. The root element is `<mdm:StagingQueryResponse>`. If includeRecords in the request was set to true, `<mdm:StagingQueryResponse>` has a totalCount attribute that specifies the total number of staged entities satisfying the query and a resultCount attribute that specifies the number of staged entities returned on this page of results. It returns the offsetToken attribute only if there are additional results to retrieve for the query. You can use the returned token in a subsequent Query Staged Entities request to get the next page of results.

    If the domain model’s golden record title format consists only of a single field, the titleFieldName attribute specifies the field by name. If the format consists of two or more fields or a single field plus static text, the attribute value is set to `Record Title`. If the format is not specified or it consists of only static text, it omits this attribute.

    -   If the includeRecords attribute in the request was set to true, an `<mdm:StagingEntry>` element is included within `<mdm:StagingQueryResponse>` for each retrieved staged entity.

    -   If the includeSummary attribute in the request was set to true \(the default\), an `<mdm:StagingAreaSummary>` element is included within `<mdm:StagingQueryResponse>`.

    The attributes of `<mdm:StagingEntry>` are as follows:

    -   result — query filter token corresponding to the result of staging this entity.

    -   sourceEntityId

    -   createdDate — time stamp of the staging of this entity.

    -   titleFieldValue — this entity’s record title. If the domain model’s golden record title format is not specified or it consists of only static text, it omits this attribute.

    -   stagedEntryId — system staging entry ID. You can use this ID as a query filter in a Commit Staged Entities, Delete Staged Entities, or Resubmit Staged Entities request.

    Sorting `<mdm:StagedEntity>` elements are in the same manner that sorts staged entities in the **Staged Entities** page in : primarily by the createdDate time stamp attribute value, from newest to oldest.

    `<mdm:StagingAreaSummary>` contains an `<mdm:entityResultSummary>` element for each entity result type applicable to retrieved staged entities.

    The attributes of `<mdm:entityResultSummary>` are as follows:

    -   count — the count of retrieved staged entities that contains this type of result.

    -   name — query filter token corresponding to this result type.

    Sample response body:

    ```xml
    <mdm:StagingQueryResponse titleFieldName="Last Name" totalCount="5" resultCount="5" xmlns:mdm="http://mdm.api.platform.boomi.com/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
       <mdm:StagingEntry result="COMPLETED.CREATED" sourceEntityId="35" createdDate="2015-07-27T20:01:41Z" titleFieldValue="Diller" stagedEntryId="15"/>
       <mdm:StagingEntry result="QUARANTINED.POSSIBLE_DUPLICATE" sourceEntityId="34" createdDate="2015-07-21T19:35:40Z" titleFieldValue="Baker" stagedEntryId="14"/>
       <mdm:StagingEntry result="QUARANTINED.POSSIBLE_DUPLICATE" sourceEntityId="33" createdDate="2015-07-21T19:35:40Z" titleFieldValue="Baker" stagedEntryId="13"/>
       <mdm:StagingEntry result="QUARANTINED.AMBIGUOUS_MATCH" sourceEntityId="32" createdDate="2015-07-21T19:35:40Z" titleFieldValue="Baker" stagedEntryId="12"/>
       <mdm:StagingEntry result="QUARANTINED.POSSIBLE_DUPLICATE" sourceEntityId="31" createdDate="2015-07-21T19:35:40Z" titleFieldValue="Baker" stagedEntryId="11"/>
       <mdm:StagingAreaSummary>
          <mdm:entityResultSummary count="3" name="QUARANTINED.POSSIBLE_DUPLICATE"/>
          <mdm:entityResultSummary count="1" name="COMPLETED.CREATED"/>
          <mdm:entityResultSummary count="1" name="QUARANTINED.AMBIGUOUS_MATCH"/>
       </mdm:StagingAreaSummary>
    </mdm:StagingQueryResponse>
    ```

-   400 \(Bad Request\) The authenticating user does not have the **API Access** privilege and the **View Staged Data** entitlement required for this operation. Sample response body:

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


-   400 \(Bad Request\) The request does not contain a properly-formatted StagingQueryRequest object. Sample response body:

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
