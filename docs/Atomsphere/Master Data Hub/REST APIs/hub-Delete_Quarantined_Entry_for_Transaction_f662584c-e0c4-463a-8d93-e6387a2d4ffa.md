# Delete Quarantined Entry for Transaction

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-f662584c-e0c4-463a-8d93-e6387a2d4ffa"/>
</head>


The Delete Quarantined Entry for Transaction operation deletes a quarantine entry associated with a specified transaction from a specified universe \(domain\) under the authenticated account. 

If the quarantined transaction is for a potential duplicate or a record already end-dated error, consider using the [Reject operation](/docs/Atomsphere/Master%20Data%20Hub/REST%20APIs/hub-Reject_Quarantined_Entity_for_Transaction_bf5f4bab-c0c9-4702-ac61-07c94f87af37.md) instead since it sends a REJECT request to the source. 

## Basic authentication

To perform this operation using Basic auth, send an **HTTP POST** request with an empty request body to:

`https://<host>:<port>/mdm/universes/<universeID>/quarantine/<transactionID>/delete`

where  
 
 `host` is the host name or IP address of the repository and port is the port number of the shared HTTP server as configured in the account’s [Atom Management settings](/docs/Atomsphere/Integration/Integration%20management/c-atm-Atom_Management_b38a3a90-d7f6-4df0-8c00-e75a178dfdfa.md)

## JWT authentication

To perform this operation using JSON Web Token (JWT) auth, send an **HTTP POST** request with an empty request body to:

`https://<host>:<port>/mdm/universes/<universeID>/quarantine/<transactionID>/delete?repositoryId=<repository ID>`

You must have the following MDM privileges:

- With the Advanced Security feature on your account:
  - **MDM - Stewardship** with **Delete Quarantine** [Hub role entitlement](/docs/Atomsphere/Master%20Data%20Hub/Getting%20started/t-hub-Creating_Hub_Role_Entitlements_06d21275-b0c6-4854-abef-5782326aa85b.md) for the queried repository <br></br>or
  - **MDM - Stewardship Management**

- Without Advanced Security: 
   - **MDM - Stewardship** 

## Path parameters 

**universeID**  
ID of the universe

**transactionID**  
ID of the transaction, which you can obtain from a Query Quarantine Entries operation.

## Query parameters 

**repositoryId** <br></br>
ID of the repository. Case sensitive. Required with JWT authentication only. You can obtain the repository ID from the URL after navigating to the repository in the user interface.

## Responses 
-   200 \(OK\) The operation deleted the retrieved quarantine entry, and an update request specifying a delete operation propagated on the channel of the contributing source.

-   404 \(Not Found\) *universeID* does not identify a universe under the authenticated account. Sample response body:

    ``` xml
    <error>
       <message>A universe with id 'ac11cc59-c77a-4afe-8c92-ed86a7daabec' does not exist.</message>
    </error>
    
    ```

-   404 \(Not Found\) *transactionID* does not identify the quarantine entry in the specified universe. Sample response body:

    ``` xml
    <error>
       <message>A quarantine entry associated with transaction ID '42dbadd8-d226-4c4d-abe3-1dae8636e77a' does not exist.</message>
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