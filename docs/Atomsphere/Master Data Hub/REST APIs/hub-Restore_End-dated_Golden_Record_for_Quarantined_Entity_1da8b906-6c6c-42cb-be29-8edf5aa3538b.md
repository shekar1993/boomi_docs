# Restore End-dated Golden Record for Quarantined Entity 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-1da8b906-6c6c-42cb-be29-8edf5aa3538b"/>
</head>


The Restore End-dated Golden Record for Quarantined Entity operation resolves a quarantine entry for a record already end-dated error. The operation restores the end-dated golden record, where the quarantine entry is associated with a specific source entity from a universe \(domain\) under the authenticated account. Restoring the record marks it as active again, removing the end-date status. End-dated records are considered inactive with the intention to delete them permanently through the [purge operation](/docs/Atomsphere/Master%20Data%20Hub/REST%20APIs/hub-Purge_Multiple_Golden_Records_cfca7eea-9530-4b1e-8b51-d59418451491.md).

## Basic authentication 

To perform this operation using Basic auth, send an **HTTP POST** request with an empty request body to:

`https://<host>:<port>/mdm/universes/<universeID>/quarantine/sources/<sourceID>/entities/<entityID>/restore`

where

*host* is the host name or IP address of the repository and `port` is the port number of the shared HTTP server as configured in the account’s [Atom Management settings](/docs/Atomsphere/Integration/Integration%20management/c-atm-Atom_Management_b38a3a90-d7f6-4df0-8c00-e75a178dfdfa.md).

## JWT authentication 

To perform this operation using JSON Web Token (JWT) auth, send an **HTTP POST** request with an empty request body to:

`https://<host>:<port>/mdm/universes/<universeID>/quarantine/sources/<sourceID>/entities/<entityID>/restore?repositoryId=<repository ID>`

You must have the following MDM privileges:

- With the Advanced Security feature on your account:
  - **MDM - Stewardship** with the **Restore Records** [Hub role entitlement](/docs/Atomsphere/Master%20Data%20Hub/Getting%20started/t-hub-Creating_Hub_Role_Entitlements_06d21275-b0c6-4854-abef-5782326aa85b.md) for the queried repository <br></br>or
  - **MDM - Stewardship Management**

- Without Advanced Security: 
   - **MDM - Stewardship** 

:::note

You can implement requests for this operation in processes using the [HTTP Client connector](/docs/Atomsphere/Integration/Connectors/r-atm-HTTP_Client_connector_d64af80e-febe-4cd2-89ad-e3d0fc53c502.md), as demonstrated by example 2 in the sample process [Hub: Restore End-dated Golden Record](/docs/Atomsphere/Master%20Data%20Hub/REST%20APIs/hub-Restore_End-dated_Golden_Record_for_Quarantined_Entity_1da8b906-6c6c-42cb-be29-8edf5aa3538b.md), which you can install in your account from the process library in Integration.

:::

## Path parameters 

**universeID**  
ID of the universe

**sourceID**  
ID of the source

**entityID**  
ID of the source entity. It must be URL encoded if it contains special characters.

## Query parameters

**repositoryId** <br></br>
ID of the repository. Case sensitive. Required with JWT authentication only. You can obtain the repository ID from the URL after navigating to the repository in the user interface.

## Responses 

-   200 \(OK\) The body of the response is XML. The root element is `<QuarantineRestoreResponse>`. Within that element `<success>` contains a Boolean value that indicates the deletion of the retrieved quarantine entry  — true for success. For a successful deletion, the `<transaction>` element indicates the restoration of a golden record. If so, it made subsequent updates to the golden record to incorporate changes from the quarantined entity or incorporation, resulting in the replacement of the quarantine entry due to an incorporation error.

    Sample response body for updating of the restored golden record:

    ```xml
    <QuarantineRestoreResponse>
      <success>true</success>
      <transaction id="556bb2a9-211c-4178-aeb0-70efe7e90484" updatedDate="2019-05-11T17:34:11.258Z" state="COMPLETED" stateDetail="UPDATED"/>
    </QuarantineRestoreResponse>
    ```

    Sample response body for replacement of the quarantine entry:

    ```xml
    <QuarantineRestoreResponse>
      <success>true</success>
      <transaction id="e87d2710-5e15-4619-9ed4-c77524848cdf" updatedDate="2019-05-11T17:31:48.615Z" state="QUARANTINED" stateDetail="FIELD_FORMAT_ERROR"/>
    </QuarantineRestoreResponse>
    ```

    After restoring the golden record, a Restore Record update request propagates on the channel of each source to which the golden record is linked. A single request propagates to an individual source, even if you link the golden record to multiple entities in that source system. Also, it attempts to resolve any pending references in the golden record.

-   400 \(Bad Request\) A golden record cannot be restored. Sample response body:

    ```xml
    <error>
       <message>This quarantine transaction cannot be restored.</message>
    </error>
    
    ```

- 400 (Bad Request) The *universeID* parameter value contains only space characters. Sample response body:

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

- 404 (Not Found) *entityID* does not identify a quarantine entry for the specified source. Sample response body:

    ```xml
    <error>
      <message>The entity '1' from source 'NS' for universe 'ac11cc59-c77a-4afe-8c92-ed86a7daabec' is not quarantined.</message>
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