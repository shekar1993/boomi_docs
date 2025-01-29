# Create Golden Record from Matching Error Quarantine Entry for Transaction 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-143bcdd7-2697-4558-8a2a-8618ecc34f14"/>
</head>


The Create Golden Record from Matching Error Quarantine Entry for Transaction operation creates a golden record from a quarantine entry identified as a potential duplicate record. The operation resolves matching conflicts for the quarantine entry that is associated with a specific transaction ID from a specific universe \(domain\) under the authenticated account.

## Basic authentication

To perform this operation using Basic auth, send an **HTTP POST** request with an empty request body to:

`https://<host>:<port>/mdm/universes/<universeID>/quarantine/<transactionID>/createDuplicate`

where  
  
*host* is the host name or IP address of the repository and port is the port number of the shared HTTP server as configured in the account’s [Atom Management settings](/docs/Atomsphere/Integration/Integration%20management/c-atm-Atom_Management_b38a3a90-d7f6-4df0-8c00-e75a178dfdfa.md)

## JWT authentication

To perform this operation using JSON Web Token (JWT) auth, send an **HTTP POST** request with an empty request body to:

`https://<host>:<port>/mdm/universes/<universeID>/quarantine/<transactionID>/createDuplicate?repositoryId=<repository ID>`

You must have the following MDM privileges:

- With the Advanced Security feature on your account:
  - **MDM - Stewardship** with **Match Quarantine** and **View Quarantine** [Hub role entitlements](/docs/Atomsphere/Master%20Data%20Hub/Getting%20started/t-hub-Creating_Hub_Role_Entitlements_06d21275-b0c6-4854-abef-5782326aa85b.md) for the queried repository <br></br>or
  - **MDM - Stewardship Management**

- Without Advanced Security: 
   - **MDM - Stewardship** 

## Path parameters 

**universeID**  
ID of the universe

**transactionID**  
ID of the transaction associated with the matching error, which you can obtain from a Query Quarantine Entries operation.

## Query parameters

**repositoryId** <br></br>
ID of the repository. Case sensitive. Required with JWT authentication only. You can obtain the repository ID from the URL after navigating to the repository in the user interface.

## Responses 

-   200 \(OK\) Resolved matching conflicts and created a golden record from the quarantine entry. Sample response body:

    ``` xml
    <MatchResolveResponse><success>true</success><transaction id="3dbadd8-d226-4c4d-abe3-1dae8636e77g" 
    updatedDate="2023-06-29T21:07:51.299Z" state="COMPLETED" stateDetail="CREATED"/></MatchResolveResponse>
    
    ```

-   400 \(Bad Request\) The universeID parameter value contains only space characters. Sample response body:

    ``` xml
    <error>
       <message>The given universe id is blank.</message>
    </error>
    
    ```

-   400 \(Bad Request\) The transactionID does not identify a quarantine entry for a matching error. Sample response body:

    ``` xml
    <error>
       <message>This transaction was not quarantined for matching concerns.</message>
    </error>
    
    ```

-   404 \(Not Found\) universeID does not identify a universe under the authenticated account. Sample response body:

    ``` xml
    <error>
       <message>A universe with id 'ac11cc59-c77a-4afe-8c92-ed86a7daabec' does not exist.</message>
    </error>
    
    ```

-   404 \(Not Found\) transactionID does not identify a quarantine entry in the specified universe. Sample response body:

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