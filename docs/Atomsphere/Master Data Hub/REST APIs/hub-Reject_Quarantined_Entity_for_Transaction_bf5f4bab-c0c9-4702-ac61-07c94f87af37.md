# Reject Quarantined Entity for Transaction 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-bf5f4bab-c0c9-4702-ac61-07c94f87af37"/>
</head>


The Reject Quarantined Entity for Transaction operation resolves a quarantine entry for a potential duplicate error or a record already end-dated error. The operation rejects the quarantined entity sends a REJECT update to the source so that the source and Hub are in sync. This operation is associated with a specified quarantine transaction from a given universe (deployed model) for the authenticated user.

## Basic authentication

To perform this operation using Basic auth, send an **HTTP POST** request with an empty request body to:

`https://<host>:<port>/mdm/universes/<universeID>/quarantine/<transactionID>/reject`

where

*host* is the host name or IP address of the repository and `port` is the port number of the shared HTTP server as configured in the account’s [Atom Management settings](/docs/Atomsphere/Integration/Integration%20management/c-atm-Atom_Management_b38a3a90-d7f6-4df0-8c00-e75a178dfdfa.md).

## JWT authentication

To perform this operation using JSON Web Token (JWT) auth, send an **HTTP POST** request with an empty request body to:

`https://<host>:<port>/mdm/universes/<universeID>/quarantine/<transactionID>/reject?repositoryId=<repository ID>`

You must have the following MDM privileges:

- With the Advanced Security feature on your account:
  - **MDM - Stewardship** with the **Reject Quarantine** [Hub role entitlement](/docs/Atomsphere/Master%20Data%20Hub/Getting%20started/t-hub-Creating_Hub_Role_Entitlements_06d21275-b0c6-4854-abef-5782326aa85b.md) for the queried repository <br></br>or
  - **MDM - Stewardship Management**

- Without Advanced Security: 
   - **MDM - Stewardship** 


## Path parameters 

**universeID**  
ID of the universe

**transactionID**  
ID of the transaction, which you can obtain from a Query Quarantine Entries operation. It must be URL encoded if it contains special characters.

## Query parameters

**repositoryId** <br></br>
ID of the repository. Case sensitive. Required with JWT authentication only. You can obtain the repository ID from the URL after navigating to the repository in the user interface.


## Responses 

-   200 \(OK\) The operation deleted the retrieved quarantine entry, and an update request specifying a delete operation propagated on the channel of the contributing source.

-   400 \(Bad Request\) The cause for quarantining of the entity was neither a potential duplicate error nor a record already end-dated error. Sample response body:

    ```xml
    <error>
       <message>This quarantine transaction is not rejectable.</message>
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