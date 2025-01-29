# Get Quarantine Entry 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-0830c956-0687-4d32-a141-96cf734253bb"/>
</head>


The Get Quarantine Entry operation retrieves a specified quarantine entry in a specified universe \(domain\) hosted in a specified repository under a specified account accessible to the authenticating user, provided the user is entitled to view the entry.

:::note

Retrieval of the quarantine entry is subject to access restrictions imposed by the authenticating user’s tag-based entitlements.

:::

To perform this operation, send an HTTP GET request to

`https://api.boomi.com/mdm/api/rest/v1/<accountID>/repositories/<repositoryID>/universes/<universeID>/quarantine/<transactionID>`

:::note

This operation requires the authenticating user to have the **API Access** privilege and either the **MDM - View Data** privilege or the **View Quarantine** entitlement.

To see masked data, the user needs either the **MDM - Reveal Masked Data** privilege or the **Reveal Masked Data** entitlement. Read [Setting up user accounts and access](/docs/Atomsphere/Master%20Data%20Hub/Getting%20started/r-mdm-User_Management_5f47b2da-d5cc-4c88-bdfd-0a255d69323a.md) to learn more.

You can implement requests for this operation in processes using the [HTTP Client connector](/docs/Atomsphere/Integration/Connectors/r-atm-HTTP_Client_connector_d64af80e-febe-4cd2-89ad-e3d0fc53c502.md), as demonstrated by example 2 in the sample process [ Hub: Read Transaction Information](https://platform.boomi.com/#build;processLibrary=7a24b7d3-a197-410c-aa98-1a2519896ffa), which you can install in your account from the process library in Integration.

:::

## Path parameters 

**accountID**  
ID of the account

**repositoryID**  
ID of the repository

**universeID**  
ID of the universe

**transactionID**  
ID of the transaction, which you can obtain from a Query Quarantine Entries operation

## Responses 

-   200 \(OK\) The body contains the XML representation of the quarantine entry.

    Within the root `<mdm:QuarantineEntry>` element:

    -   `<mdm:cause>` is the Query Quarantine Entries filter token corresponding to the category of the reason for quarantining.

    -   `<mdm:reason>` is the reason for quarantining.

    -   `<mdm:fields>` is a comma-delimited list of fields in the entity requiring approval or containing invalid data. It omits this element for an entity quarantined due to a parsing failure, an enrichment error, or a matching issue.

    -   `<mdm:matchRule>` is the ordinal of the match rule in the domain model whose application resulted in a matching error and the quarantining of the entity. This element is present only for an entity quarantined due to a matching error.

    -   `<mdm:entity>` is the quarantined entity.

    The attributes of the `<mdm:QuarantineEntry>` element are as follows:

    -   transactionId — internal ID associated with this entity upon its initial receipt for processing

    -   sourceId — ID of the source of the quarantined entity

    -   entityId — source entity ID of the quarantined entity

    -   createdDate — time stamp of the quarantining of this entity

    Field values are masked if masking is configured in the model and the user cannot view masked data. Sample response body:

    ```xml
    <mdm:QuarantineEntry transactionId="01234567-89ab-cdef-0123-456789abcdef" sourceId="salesforce" entityId="2" createdDate="2012-07-12T21:45:54Z" 
      xmlns:mdm="http://mdm.api.platform.boomi.com/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
       <mdm:cause>ENRICH_ERROR</mdm:cause>
       <mdm:reason>At data quality step 'boomi-internal-sitest-priv_dev:::AddressVerification': [304] Address Not Found.</mdm:reason>
       <mdm:entity>
          <contact>
             <id>2</id>
             <name>jack</name>
             <address_1>not home</address_1>
             <city>berwyn</city>
             <state>PA</state>
             <zip>19312</zip>
          </contact>
       </mdm:entity>
    </mdm:QuarantineEntry>
    
    ```

-   400 (Bad Request) The authenticating user does not have the API Access privilege and either the MDM - View Data privilege or the View Quarantine entitlement required for this operation. Sample response body:

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
   403 (Forbidden) accountID does not identify an account accessible to the authenticating user. Sample response body:

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

-   404 \(Not Found\) transactionID does not identify a quarantine entry for the specified universe that the authenticated user is entitled to view. Sample response body:

    ```xml
    <error>
       <message>A quarantined entity version with id '01234567-89ab-cdef-0123-456789abcdef' does not exist.</message>
    </error> 
    ```
