# Query Quarantine Entries 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-1ba99cc5-8cd1-4d9c-ac3c-ae95db3aa4cd"/>
</head>


The Query Quarantine Entries operation sends a query of the quarantine entries for a specified universe \(domain\) under the authenticated account. The query response includes the resolution status, the source entity involved, the quarantine cause, and a detailed reason for the quarantine.

The data provided in the response is historical. This means that if a model or match rule changes, the response contains not only the current quarantined entries for the entity but also any previous ones that were quarantined before you made changes.

## Basic authentication

To perform this operation using Basic auth, send an **HTTP POST** request to:

`https://<host>:<port>/mdm/universes/<universeID>/quarantine/query`

where

`<host>` is the host name or IP address of the repository and `<port>` is the port number of the shared HTTP server as configured in the account’s [Atom Management settings](/docs/Atomsphere/Integration/Integration%20management/c-atm-Atom_Management_b38a3a90-d7f6-4df0-8c00-e75a178dfdfa.md).

## JWT authentication

To perform this operation using JSON Web Token (JWT) auth, send an **HTTP POST** request to:

`https://<host>:<port>/mdm/universes/<universeID>/quarantine/query?repositoryId=<repository ID>`

You must have the following MDM privileges:

- With the Advanced Security feature on your account:
  - **MDM - Stewardship** with the **View Quarantine** [Hub role entitlement](/docs/Atomsphere/Master%20Data%20Hub/Getting%20started/t-hub-Creating_Hub_Role_Entitlements_06d21275-b0c6-4854-abef-5782326aa85b.md) for the queried repository <br></br>or
  - **MDM - Stewardship Management**

- Without Advanced Security: 
   - **MDM - Stewardship**

Field values are masked if:
- Model fields contain masking configurations
- The request uses JWT authentication
- You do not have permission to view masked data. You can view masked data if you have the **MDM Administrator** or **MDM Privileged Data Steward** role, the **MDM - Reveal Masked Data** privilege, or the **Reveal Masked Data** entitlement.

:::note

You can implement requests for this operation in processes using the [HTTP Client connector](/docs/Atomsphere/Integration/Connectors/r-atm-HTTP_Client_connector_d64af80e-febe-4cd2-89ad-e3d0fc53c502.md), as demonstrated by the sample process [ Hub: Query Quarantine Entries](https://platform.boomi.com/#build;processLibrary=7a24b7d3-a197-410c-aa98-1a2519896ffa), which you can install in your account from the process library in Integration.

You can also use [Boomi DataHub connector's query quarantine entries operation](/docs/Atomsphere/Integration/Connectors/int-BDH_Query_Quarantine_Entries.md).

:::

## Path parameters
**universeID**  
ID of the universe

## Query parameters

**repositoryId** <br></br>
ID of the repository. Case sensitive. Required with JWT authentication only. You can obtain the repository ID from the URL after navigating to the repository in the user interface.



The body of the request must conform to the following structure:

```xml
<QuarantineQueryRequest offsetToken="" limit="" includeData="" type="">
   <filter op="">
      <sourceId></sourceId>
      <sourceEntityId></sourceEntityId>
      <createdDate>
           <from></from>
           <to></to>
      </createdDate>
      <endDate>
           <from></from>
           <to></to>
      </endDate>
      <cause></cause>
      <resolution></resolution>
      <field name="" value=""/>
   </filter>
</QuarantineQueryRequest>

```

where

-   You can use the optional *offsetToken* and *limit* attributes for `<QuarantineQueryRequest>` for paging. The *limit* value is the maximum number of quarantine entries to return per page. It enforces a maximum of 200 entries per page regardless of the *limit* value. The *offsetToken* value corresponds to the same value returned from a previous Query Quarantine Entries request.

-   The optional *includeData* attribute has a Boolean value:

    -   Set to *true* \(the default\) to request entity data in addition to quarantine entry metadata.

    -   Set to *false* to request only quarantine entry metadata.

-   The optional type attribute for `<QuarantineQueryRequest>` sets a filter by status. These are the valid values:

    -   ACTIVE \(default\) — retrieve only active quarantine entries

    -   ALL — retrieve active and resolved quarantine entries

    -   RESOLVED — retrieve only resolved quarantine entries

-   `<filter>` sets query filter parameters and the query operator. The optional op attribute specifies the query operator. The valid values are AND, which specifies all filtering criteria, and OR, which specifies any filtering criterion. The default is AND.

      Each child element of `<filter>` sets a query filter parameter:

    -   `<sourceId>` \(optional\) sets a filter by source. Specify the source by its unique ID.

    -   `<sourceEntityId>` \(optional\) sets a filter by source entity ID. This filter is effective only if you set a filter, using `sourceId`, for the source of the quarantined entity.

    -   `<createdDate>` \(optional\) sets a filter by the date and time of quarantine entry creation.

        -   `<from>` sets the range’s starting date and time.

        -   `<to>` sets the range’s ending date and time.

        The format for both `<from>` and `<to>` is *yyyy-MM-dd'T'HH:mm:ss'Z'*, where 'T' separates the date and time — for example, 2013-03-01T15:32:00Z.

        Omitting `<from>` filters quarantine entries created before the `<to>` date and time. Omitting `<to>` filters quarantine entries created after the `<from>` date and time.

    -   `<endDate>` \(optional\) sets a filter by date and time of quarantine entry resolution.

        -   `<from>` sets the range’s starting date and time.

        -   `<to>` sets the range’s ending date and time.

        The format for both `<from>` and `<to>` is *yyyy-MM-dd'T'HH:mm:ss'Z'*, where 'T' separates the date and time — for example, 2013-03-01T15:32:00Z.

        Omitting `<from>` filters quarantine entries resolved before the `<to>` date and time. Omitting `<to>` filters quarantine entries resolved after the `<from>` date and time.

    -   `<cause>` \(optional\) sets a filter by the reason for quarantining. This element can repeat — one token per occurrence. The following tokens are valid. Note in this list the correspondence is given between the tokens and **Quarantine Cause** filter criteria on the **Quarantine** page.

        -   AMBIGUOUS\_MATCH — entities matching 10 or more golden records, regardless of links to source records \(1,000 or more in the case of an exact matching expression grouped with a fuzzy matching expression\). This token corresponds to the filter criterion **Ambiguous Match**.

        -   DUPLICATE\_KEY — entities containing multiple collection items with the same key field values. This token corresponds to the filter criterion **Duplicate Collection Key**.

        -   ENRICH\_ERROR — entities failing data quality steps. This token corresponds to the filter criterion **Data Quality Error**.

        -   FIELD\_FORMAT\_ERROR — entities containing data not in conformance with their field type or validation options for that field type specified in the domain’s model or with the system 255-character limit for text and Enumeration field values. This token corresponds to the filter criterion **Field Format Error**.

        -   INCORPORATE\_ERROR — entities causing errors other than unresolvable references during incorporation. This token corresponds to the filter criterion **Other Incorporation Error**.

        -   MATCH\_REFERENCE\_UNKNOWN — entities having a value in a reference field specified for matching in a match rule that does not resolve to a golden record. This token corresponds to the filter criterion **Reference Matching Error**.

        -   MULTIPLE\_MATCHES — entities matching multiple golden records not linked to a record in the contributing source. This token corresponds to the filter criterion **Multiple Matches**.

        -   PARSE\_FAILURE — entities not specifying a source entity ID. This token corresponds to the filter criterion **Data Integration Error**.

        -   POSSIBLE\_DUPLICATE — entities matching golden records linked to a record in the contributing source. This token corresponds to the filter criterion **Potential Duplicate**.

        -   RECORD\_ALREADY\_ENDDATED — entities to which a link exists from an end-dated golden record. This token corresponds to the filter criterion **Record Already End-dated**.

        -   REFERENCE_UNKNOWN — entities having unresolvable references, either collection items or fields for which referential integrity for entity contributions is enforced. This token corresponds to the filter criterion **Unknown Reference Value**.

        -   REQUIRED\_FIELD — entities omitting fields specified as required in the domain’s model. This token corresponds to the filter criterion **Required Field Omitted**.

        -   REQUIRES\_APPROVAL — entities satisfying conditions configured for their source requiring the manual approval of new entity contributions. This token corresponds to the filter criterion **Create Approval Required**.

        -   REQUIRES\_END\_DATE\_APPROVAL — entities from a source configured to require manual approval of contributed entities that end-date matching golden records. This token corresponds to the filter criterion **End-date Approval Required**.

        -   REQUIRES\_UPDATE\_APPROVAL — entities satisfying conditions configured for their source requiring the manual approval of contributed entities that would update matching golden records. This token corresponds to the filter criterion **Update Approval Required**.

        -   REQUIRES\_UPDATE\_WITH\_BASE\_VALUE\_APPROVAL — entities for which there is a pending link from the matching golden record to the contributing source, and in which a field has a base value \(the value of the field in the golden record’s base version for the source when you created the pending link\).

    -   `<resolution>` \(optional\) sets a filter by the resolution of a quarantine entry. This element can repeat — one token per occurrence. This filter is effective only if the `<QuarantineQueryRequest>` element’s type attribute value is set to RESOLVED. The following tokens are valid. Note in this list the correspondence is given between the tokens and **Resolution** filter criteria on the **Quarantine** page.

        -   GRID\_DELETED — entries for which a user manually deleted the golden record associated with the quarantined entity. This token corresponds to the filter criterion **Golden Record Deleted**.

        -   INCORPORATE\_SUCCESS — entries automatically resolved as a result of the successful incorporation in the target domain of a replacement for the quarantined entity. This token corresponds to the filter criterion **Newer Version Incorporated**.

        -   RESTORED — entries resolved by restoring an end-dated golden record from which there was a link to the quarantined entity. This token corresponds to the filter criterion **Golden Record Restored**.

        -   SUPERSEDED — entries for which a newer version of the quarantined entity was contributed in a batch, thereby making this quarantine entry obsolete. This token corresponds to the filter criterion **Newer Version Contributed**.

        -   USER\_APPROVED — entries for which a user approved the quarantined entity. This token corresponds to the filter criterion **Approved for Incorporation**.

        -   USER\_IGNORE — entries for which a user requested deletion. This token corresponds to the filter criterion **Entity Deleted**.

        -   USER\_IGNORED\_ENRICHMENT — entries for which a user resubmitted the quarantined entity, applying only data quality steps subsequent to the failed step. This token corresponds to the filter criterion **Resubmitted Ignoring Enrichment**.

        -   USER\_MATCHED — entries for which a user resolved the matching issue associated with the quarantined entity. This token corresponds to the filter criterion **Matching Issue Resolved**.

        -   USER\_REJECTED — entries for which a user rejected the quarantined entity. This token corresponds to the filter criterion **Entity Rejected**.

        -   USER\_REPLAY — entries for which a user resubmitted the quarantined entity without editing. This token corresponds to the filter criterion **Resubmitted Without Editing**.

        -   USER\_REPLAY\_WITH\_EDITS — entries for which a user edited and resubmitted the quarantined entity using the Edit and Resubmit Entity wizard. This token corresponds to the filter criterion **Resubmitted With Edits**.

        -   USER\_RETRIED\_ENRICHMENT — entries for which a user resubmitted the quarantined entity, reapplying the failed data quality step and all subsequent steps. This token corresponds to the filter criterion **Resubmitted Retrying Enrichment**.

        -   USER\_SELECTIVE\_MERGED — entries for which a user merged fields from the quarantined entity into a selected matching golden record and also rejected the quarantined entity. This token corresponds to the filter criterion **Fields Selectively Merged**.

    -   `<field>`(optional) sets a filter by field value. This element can repeat — one ID per occurrence. The name attribute specifies the field Unique ID. The value attribute specifies the value and matches on the beginning of the field value. For example, 4617 Main St matches the following values: 4, 4617 Main.  
    
    Elements corresponding to unused filter parameters must be omitted from `<filter>`.

    For example:

    ``` xml
    <QuarantineQueryRequest offsetToken="abc" limit="10" includeData="true" type="ALL">
       <filter op="OR">
          <sourceId>salesforce</sourceId>
          <cause>ENRICH_ERROR</cause>
       </filter>
    </QuarantineQueryRequest>
    
    ```



## Responses

-   200 \(OK\) The body contains the XML representation of the query results. The root element `<QuarantineQueryResponse>` has a *resultCount* attribute which specifies the number of quarantine entries returned on this page of results and a *totalCount* attribute which specifies the total number of quarantine entries satisfying the query. The *offsetToken* attribute is returned only if there are additional results to retrieve for the query. You can use the returned token in a subsequent Query Quarantine Entries request to get the next page of results.

    Within each `<QuarantineEntry>` element:

    -   `<cause>` is the query filter token corresponding to the category of the reason for quarantining.

    -   `<reason>` is the reason for quarantining.

    -   `<fields>` is a comma-delimited list of fields in the entity requiring approval or containing invalid data. This element is omitted for an entity quarantined due to a parsing failure, an enrichment error or a matching issue.

    -   `<matchRule>` is the ordinal of the match rule in the domain model whose application resulted in a matching error and the quarantining of the entity. This element is present only for an entity quarantined due to a matching error.

    -   `<resolution>` is the query filter token corresponding to the reason for resolution. This element is present only for a resolved quarantine entry.

    -   `<entity>` is the quarantined entity. This element is present only if the attribute includeData in `<QuarantineQueryRequest>` has the value true or the attribute is omitted.

    The attributes of the `<QuarantineEntry>` element are as follows:

    -   *createdDate* — time stamp of the quarantining of this entity

    -   *sourceId* — ID of the source of the quarantined entity

    -   *sourceEntityId* — source entity ID of the quarantined entity

    -   *transactionId* — internal ID associated with this entity upon its initial receipt for processing. You can use this ID to individually fetch the quarantine entry using a Get Quarantine Entry operation.

    -   *endDate* \(resolved quarantine entries only\) — time stamp of the resolution of this quarantine entry

    `<QuarantineEntry>` elements are sorted in the same manner as active quarantine entries are sorted by default on the **Quarantine** page in : primarily by the **createdDate** time stamp attribute value, from newest to oldest.

    Sample response body:

    ```xml
    <QuarantineQueryResponse resultCount="10" totalCount="25"  offsetToken="MQ==">
       <QuarantineEntry createdDate="2014-07-12T21:45:54Z" sourceId="salesforce" sourceEntityId="2" transactionId="01234567-89ab-cdef-0123-456789abcdef">
          <cause>ENRICH_ERROR</cause>
          <reason>At data quality step 'boomi-internal-sitest-priv_dev:::AddressVerification': [304] Address Not Found.</reason>
          <entity>
             <contact>
                <id>2</id>
                <name>jack</name>
                <address_1>not home</address_1>
                <city>berwyn</city>
                <state>PA</state>
                <zip>19312</zip>
             </contact>
          </entity>
       </QuarantineEntry>
       ... 
       <QuarantineEntry transactionId="fedcba98-7654-3210-fedc-ba9876543210" sourceId="salesforce" entityId="3" createdDate="2014-07-14T08:39:05Z" endDate="2014-07-14T15:11:44Z">
          <cause>ENRICH_ERROR</cause>
          <reason>At data quality step 'boomi-internal-sitest-priv_dev:::AddressVerification': [304] Address Not Found.</reason>
          <resolution>USER_IGNORED_ENRICHMENT</resolution>
          <entity>
             <contact>
                <id>3</id>
                <name>jill</name>
                <address_1>not home</address_1>
                <city>berwyn</city>
                <state>PA</state>
                <zip>19312</zip>
             </contact>
          </entity>
       </QuarantineEntry>
    </QuarantineQueryResponse>
    
    ```
    Field values are masked if model fields contain masking configurations, the user cannot view masked data, and the request uses JWT authentication. Masking is not applied with basic authentication.

-   400 (Bad Request) The universeID parameter value contains only space characters. Sample response body:

      ```xml
      <error>
         <message>The given universe id is blank.</message>
      </error> 
      ```

- 400 (Bad Request) The request body is empty. Sample response body:

   ```xml
   <error>
      <message>When trying to parse a batch update for universe with id '851a6a64-6a88-4916-a5b7-d6a974d54318'.</message>
      <message>Unexpected EOF in prolog at [row,col {unknown-source}]: [1,0]</message>
   </error> 
   ```

-   400 \(Bad Request\) The request does not contain a properly-formatted QuarantineQueryRequest object. Sample response body:

    ```xml
    <error>
       <message>Unable to read message body. Please make sure the
         XML structure and namespace are correct.</message>
    </error>
    
    ```

-   400 \(Bad Request\) A quarantine `<cause>` in the request body is empty or invalid.

    ```xml
    <error>
       <message>Invalid quarantine cause: POSSIBLE_DUP</message>
    </error>
    
    ```

-   400 \(Bad Request\) A quarantine `<resolution>` in the request body is empty or invalid.

    ```xml
    <error>
       <message>Invalid quarantine resolution: IGNORE</message>
    </error>
    
    ```

-  404 (Not Found) *universeID* does not identify a universe under the authenticated account. Sample response body:

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
