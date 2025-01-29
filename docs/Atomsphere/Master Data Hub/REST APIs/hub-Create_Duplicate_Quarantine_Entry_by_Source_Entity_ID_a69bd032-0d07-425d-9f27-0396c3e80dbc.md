# Create Golden Record from Matching Error Quarantine Entry by Source Entity ID 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-a69bd032-0d07-425d-9f27-0396c3e80dbc"/>
</head>


The Create Golden Record from Matching Error Quarantine Entry by Source Entity ID operation creates a golden record from a quarantine entry identified as a potential duplicate record. The operation resolves matching conflicts for the quarantine entry that is associated with a specific source entity ID from a specific universe (domain) under the authenticated account.

## Basic authentication

To perform this operation using Basic auth, send an **HTTP POST** request with an empty request body to:

`https://<host>:<port>/mdm/universes/<universeID>/quarantine/sources/<sourceID>/entities/<entityID>/createDuplicate`

where

`host` is the host name or IP address of the repository and port is the port number of the shared HTTP server as configured in the account’s [Atom Management settings](/docs/Atomsphere/Integration/Integration%20management/c-atm-Atom_Management_b38a3a90-d7f6-4df0-8c00-e75a178dfdfa.md)

## JWT authentication

To perform this operation using JSON Web Token (JWT) auth, send an **HTTP POST** request with an empty request body to:

`https://<host>:<port>/mdm/universes/<universeID>/quarantine/sources/<sourceID>/entities/<entityID>/createDuplicate?repositoryId=<repository ID>`

You must have the following MDM privileges:

- With the Advanced Security feature on your account:
  - **MDM - Stewardship** with **Match Quarantine** and **View Quarantine** [Hub role entitlements](/docs/Atomsphere/Master%20Data%20Hub/Getting%20started/t-hub-Creating_Hub_Role_Entitlements_06d21275-b0c6-4854-abef-5782326aa85b.md) for the queried repository <br></br>or
  - **MDM - Stewardship Management**

- Without Advanced Security: 
   - **MDM - Stewardship** 


## Path parameters 

**universeID**  
ID of the universe

**sourceID**  
ID of the source

**entityID**  
ID of the source entity associated with the matching error quarantine entry, which you can obtain from a Query Quarantine Entries operation. It must be URL encoded if it contains special characters.

## Query parameters

**repositoryId** <br></br>
ID of the repository. Case sensitive. Required with JWT authentication only. You can obtain the repository ID from the URL after navigating to the repository in the user interface.

## Responses 
-   200 \(OK\) Resolved matching conflicts and created a golden record from the quarantine entry. Sample response body:

    ``` xml
    <MatchResolveResponse><success>true</success><transaction id="2dbadd8-d226-4c4d-abe3-1dae8636e77a" 
    updatedDate="2023-06-29T21:07:51.299Z" state="COMPLETED" stateDetail="CREATED"/></MatchResolveResponse>
    
    ```

-   400 \(Bad Request\) The universeID parameter value contains only space characters. Sample response body:

    ``` xml
    <error>
       <message>The given universe id is blank.</message>
    </error>
    
    ```

-   404 \(Not Found\) universeID does not identify a universe under the authenticated account. Sample response body:

    ```xml
    <error>
       <message>A universe with id 'ac11cc59-c77a-4afe-8c92-ed86a7daabec' does not exist.</message>
    </error>
    
    ```

-   404 \(Not Found\) sourceID does not identify a source attached to the specified universe. Sample response body:

    ``` xml
    <error>
       <message>Source with code 'FOO' does not exist under universe '851a6a64-6a88-4916-a5b7-d6a974d54318'.</message>
    </error>
    
    ```

-   404 \(Not Found\) entityID does not identify a matching error quarantine entry for the specified source or the entityID does not exist. Sample response body:

    ``` xml
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