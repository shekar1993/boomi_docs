# Restore End-dated Golden Record for Transaction 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-a0555bc1-7dd0-4590-83a4-0339f7306c89"/>
</head>

The Restore End-dated Golden Record for Transaction operation resolves a quarantine entry for a Record Already End-Dated error. It restores the end-dated golden record and resolves the quarantine error. The quarantine entry is associated with a specific transaction from a universe \(domain\) under the authenticated account. Restoring the record marks it as active again, removing the end-date status. End-dated records are considered inactive with the intention to delete them permanently through the [purge operation](/docs/Atomsphere/Master%20Data%20Hub/REST%20APIs/hub-Purge_Multiple_Golden_Records_cfca7eea-9530-4b1e-8b51-d59418451491.md).

## Basic authentication 

To perform this operation using Basic auth, send an **HTTP POST** request with an empty request body to:

`https://<host>:<port>/mdm/universes/<universeID>/quarantine/<transactionID>/restore`

where

*host* is the host name or IP address of the repository and `<port>` is the port number of the shared HTTP server as configured in the account’s [Atom Management settings](/docs/Atomsphere/Integration/Integration%20management/c-atm-Atom_Management_b38a3a90-d7f6-4df0-8c00-e75a178dfdfa.md).

## JWT authentication 

To perform this operation using JSON Web Token (JWT) auth, send an **HTTP POST** request with an empty request body to:

`https://<host>:<port>/mdm/universes/<universeID>/quarantine/<transactionID>/restore?repositoryId=<repository ID>`

You must have the following MDM privileges:

- With the Advanced Security feature on your account:
  - **MDM - Stewardship** with the **Restore Records** [Hub role entitlement](/docs/Atomsphere/Master%20Data%20Hub/Getting%20started/t-hub-Creating_Hub_Role_Entitlements_06d21275-b0c6-4854-abef-5782326aa85b.md) for the queried repository <br></br>or
  - **MDM - Stewardship Management**

- Without Advanced Security: 
   - **MDM - Stewardship** 

:::note

You can implement requests for this operation in processes using the [HTTP Client connector](/docs/Atomsphere/Integration/Connectors/r-atm-HTTP_Client_connector_d64af80e-febe-4cd2-89ad-e3d0fc53c502.md), as demonstrated by example 3 in the sample process [Hub: Restore End-dated Golden Record](/docs/Atomsphere/Master%20Data%20Hub/REST%20APIs/hub-Restore_End-dated_Golden_Record_for_Transaction_a0555bc1-7dd0-4590-83a4-0339f7306c89.md), which you can install in your account from the process library in Integration.

:::

## Path parameters 

**universeId**  
ID of the universe.

**transactionId**  
ID of the quarantine entry transaction, which you can obtain from a Query Quarantine Entries operation.

## Query parameters

**repositoryId** <br></br>
ID of the repository. Case sensitive. Required with JWT authentication only. You can obtain the repository ID from the URL after navigating to the repository in the user interface.


## Responses 

-   200 \(OK\) The body of the response is XML. The root element is `<QuarantineRestoreResponse>`. Within that element `<success>` contains a Boolean value indicating the deletion of the retrieved quarantine entry — true for success. For a successful deletion, the `<transaction>` element indicates that the golden record is restored and the quarantined entity is incorporated into the golden record. Alternatively, a subsequent quarantine cause \(stateDetail\) may be attached to the quarantined entity and transaction ID associated with the golden record, preventing the incorporation of the quarantined entity. For example, the entity remains quarantined because the record requires approval before updating or because there is a field format error.

    Sample response body for updating of the restored golden record:

    ```xml
    <QuarantineRestoreResponse>
      <success>true</success>
      <transaction id="556bb2a9-211c-4178-aeb0-70efe7e90484" updatedDate="2019-05-11T17:34:11.258Z" state="COMPLETED" stateDetail="UPDATED"/>
    </QuarantineRestoreResponse>
    ```

    Sample response body for a subsequent quarantine cause:

    ```xml
    <QuarantineRestoreResponse>
      <success>true</success>
      <transaction id="e87d2710-5e15-4619-9ed4-c77524848cdf" updatedDate="2019-05-11T17:31:48.615Z" state="QUARANTINED" stateDetail="FIELD_FORMAT_ERROR"/>
    </QuarantineRestoreResponse>
    ```
    :::note

    After restoring the golden record, a Restore Record update request propagates on the channel of each source to which the golden record is linked. A single request propagates to an individual source, even if you link the golden record to multiple entities in that source system. Also, it attempts to resolve any pending references in the golden record.

    :::

-   400 \(Bad Request\) The specified *transactionID* is not associated with a Record Already End-Dated error. Sample response body:

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

- 404 (Not Found) *transactionID* does not identify a quarantine entry in the specified universe. Sample response body:

    ```xml
    <error>
      <message>A quarantined entity version with id '42dbadd8-d226-4c4d-abe3-1dae8636e77a' does not exist.</message>
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