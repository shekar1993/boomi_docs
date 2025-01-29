# Swap Entity ID 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-ae203354-768e-4a4e-b74e-0b3eca836e28"/>
</head>

The Swap Entity ID operation replaces a golden record's current source entity ID for a given source with a new entity ID.

## Basic authentication

To perform this operation using Basic auth, send an **HTTP POST** request with an empty request body to:

`https://<host>:<port>/mdm/universes/<universeID>/sources/<sourceID>/entities/<originalEntityID>/swap/<newEntityID>`

where

*host* is the host name or IP address of the repository and `<port>` is the port number of the shared HTTP server as configured in the account’s [Atom Management settings](/docs/Atomsphere/Integration/Integration%20management/c-atm-Atom_Management_b38a3a90-d7f6-4df0-8c00-e75a178dfdfa.md).

## JWT authentication

To perform this operation using JSON Web Token (JWT) auth, send an **HTTP POST** request with an empty request body to:

`https://<host>:<port>/mdm/universes/<universeID>/sources/<sourceID>/entities/<originalEntityID>/swap/<newEntityID>?repositoryId=<repository ID>`

You must have the following MDM privileges:

- With the Advanced Security feature on your account:
  - **MDM - Stewardship** <br></br>or
  - **MDM - Stewardship Management**

- Without Advanced Security: 
   - **MDM - Stewardship** 

## Path parameters 

**universeID**  
ID of the universe

**sourceID**  
ID of the source

**originalEntityID**  
ID of the source entity associated with the golden record. It must be URL encoded if it contains special characters.

**newEntityID**  
ID of the source entity to replace the original entity ID. It must be URL encoded if it contains special characters.

## Query parameters

**repositoryId** <br></br>
ID of the repository. Case sensitive. Required with JWT authentication only. You can obtain the repository ID from the URL after navigating to the repository in the user interface.


## Responses 

-   200 \(OK\) Source is linked to the golden record with the new entity ID.

-   400 \(Bad Request\) The *universeID* parameter value contains only space characters. Sample response body:

    ``` xml
    <error>
       <message>The given universe id is blank.</message>
    </error>
    
    ```

-   400 \(Bad Request\) *newEntityID* is already linked to a golden record. Sample response body:

    ``` xml
    <error>
       <message>An established record with entity id : SF-29 and source : SF already exists.</message>
    </error>
    
    ```

-   400 \(Bad Request\) *originalEntityID* for the given *sourceID* does not identify an entity ID linked to a golden record. Sample response body:

    ``` xml
    <error>
       <message>A record with entity id : SF-211 and source : NS does not exist.</message>
    </error>
    
    ```

-   404 \(Not Found\) *universeID does* not identify a universe under the authenticated account. Sample response body:

    ``` xml
    <error>
       <message>A universe with id 'ac11cc59-c77a-4afe-8c92-ed86a7daabec' does not exist.</message>
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