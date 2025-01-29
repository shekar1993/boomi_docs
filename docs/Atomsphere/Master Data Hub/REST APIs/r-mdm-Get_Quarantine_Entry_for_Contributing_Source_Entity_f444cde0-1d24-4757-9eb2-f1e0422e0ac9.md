# Get Quarantine Entry for Source Entity

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-f444cde0-1d24-4757-9eb2-f1e0422e0ac9"/>
</head>


The Get Quarantine Entry for Source Entity operation retrieves the active quarantine entry corresponding to specified source entity in a universe \(domain\) under the authenticated account.

## Basic authentication

To perform this operation using Basic auth, send an **HTTP GET** request to:

`https://<host>:<port>/mdm/universes/<universeID>/quarantine/sources/<sourceID>/entities/<entityID>?[includeData=<true|false>]`


where

*host* is the host name or IP address of the repository and `port` is the port number of the shared HTTP server as configured in the account’s [Atom Management settings](/docs/Atomsphere/Integration/Integration%20management/c-atm-Atom_Management_b38a3a90-d7f6-4df0-8c00-e75a178dfdfa.md).

## JWT authentication

To perform this operation using JSON Web Token (JWT) auth, send an **HTTP GET** request to:

`https://<host>:<port>/mdm/universes/<universeID>/quarantine/sources/<sourceID>/entities/<entityID>?repositoryId=<repositoryID>&[includeData=<true|false>]`

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

You can implement requests for this operation in processes using the [HTTP Client connector](/docs/Atomsphere/Integration/Connectors/r-atm-HTTP_Client_connector_d64af80e-febe-4cd2-89ad-e3d0fc53c502.md), as demonstrated by example 2 in the sample process [Hub: Get Master Data by Source](https://platform.boomi.com/#build;processLibrary=7a24b7d3-a197-410c-aa98-1a2519896ffa), which you can install in your account from the process library in Integration.

You can also use [Boomi DataHub connector's get quarantine entry operation](/docs/Atomsphere/Integration/Connectors/int-BDH_Get_Quarantine_Entry.md).

:::

## Path parameters

**universeID**  
ID of the universe

**sourceID**  
ID of the source

**entityID**  
ID of the source entity. It must be URL encoded if it contains special characters.


## Query parameters  

**includeData**  
 -   Set to *true* \(the default\) to request entity data in addition to quarantine entry metadata. Optional.

-   Set to *false* to request only quarantine entry metadata. Optional.

**repositoryId** <br></br>
ID of the repository. Case sensitive. Required with JWT authentication only. You can obtain the repository ID from the URL after navigating to the repository in the user interface.


## Responses 

-   200 \(OK\) The body contains the XML representation of the quarantine entry.

    Within the root `<QuarantineEntry>` element:

    -   `<cause>` is the Query Quarantine Entries filter token corresponding to the category of the reason for quarantining.

    -   `<reason>` is the reason for quarantining.

    -   `<fields>` is a comma-delimited list of fields in the entity requiring approval or containing invalid data. It omits this element for an entity quarantined due to a parsing failure, an enrichment error or a matching issue.

    -   `<matchRule>` is the ordinal of the match rule in the domain model whose application resulted in a matching error and the quarantining of the entity. This element is present only for an entity quarantined due to a matching error.

    -   `<entity>` is the quarantined entity. This element is present only if the query parameter includeData in the request is trueor omitted.

    The attributes of the `<QuarantineEntry>` element are as follows:

    -   *transactionId* — internal ID associated with this entity upon its initial receipt for processing

    -   *sourceId* — ID of the source of the entity

    -   *entityId* — source entity ID of the entity

    -   *createdDate* — time stamp of the quarantining of the entity

    Sample response body for a request in which the query parameter includeData is *true* or omitted:

    ```xml
    <QuarantineEntry transactionId="01234567-89ab-cdef-0123-456789abcdef" sourceId="salesforce" entityId="2" 
      createdDate="2012-07-12T21:45:54Z">
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
    
    ```
   Field values are masked if model fields contain masking configurations, the user cannot view masked data, and the request uses JWT authentication. Masking is not applied with basic authentication.

    Sample response body for a request in which the query parameter includeData is *false*:

    ```xml
    <QuarantineEntry transactionId="01234567-89ab-cdef-0123-456789abcdef" sourceId="salesforce" entityId="2" 
      createdDate="2012-07-12T21:45:54Z">
       <cause>ENRICH_ERROR</cause>
       <reason>At data quality step 'boomi-internal-sitest-priv_dev:::AddressVerification': [304] Address Not Found.</reason>
    </QuarantineEntry>
    
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

- 404 (Not Found) *sourceID* does not identify a source attached to the specified universe. Sample response body:

   ```xml
   <error>
      <message>Source with code 'FOO' does not exist under universe '851a6a64-6a88-4916-a5b7-d6a974d54318'.</message>
   </error> 
   ```

-   404 \(Not Found\) sourceID and entityID do not identify a source entity for which there is a corresponding active quarantine entry in the specified universe. Sample response body:

    ```xml
    <error>
       <message>The entity '12345678' from source 'FOO' for universe '851a6a64-6a88-4916-a5b7-d6a974d54318' is not quarantined.</message>
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
