# Unlink Golden Record From Source 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-faedf5fb-2046-41b7-b56a-201fb1decc87"/>
</head>

The Unlink Golden Record From Source operation unlinks a golden record from a specific source or source entity in a universe \(domain\) under the authenticated account. Suppose you do not specify a source entity with the optional entityID query parameter in the request. In that case, the request applies to all source entities linked to the specific golden record.

If you remove a source entity for a source that accepts channel updates, a Pending link indicates that the source could receive a channel update for the golden record but currently, it is not linked. A Pending status does not indicate there is an action waiting to be performed.

You cannot unlink the source entity if it is the only contributing source linked to a golden record. Before removing the source entity, configure another source to contribute data.

:::note

It is not possible to remove links to non-contributing sources, pending links, or a golden record’s sole established link.

:::

## Basic authentication

To perform this operation using Basic auth, send an **HTTP DELETE** request to:

`https://<host>:<port>/mdm/universes<universeID>/records/<recordID>/sources/<sourceID>/unlink?entityId=<entitiyID>`

where

*host* is the host name or IP address of the repository and `<port>` is the port number of the shared HTTP server as configured in the account’s [Atom Management settings](/docs/Atomsphere/Integration/Integration%20management/c-atm-Atom_Management_b38a3a90-d7f6-4df0-8c00-e75a178dfdfa.md).

## JWT authentication

To perform this operation using JSON Web Token (JWT) auth, send an **HTTP DELETE** request to:

`https://<host>:<port>/mdm/universes<universeID>/records/<recordID>/sources/<sourceID>/unlink?entityId=<entitiyID>&repositoryId=<repository ID>`

You must have the following MDM privileges:
- **MDM - Source Management**
- **MDM - Stewardship**

:::note

You can implement requests for this operation in processes using the [HTTP Client connector](/docs/Atomsphere/Integration/Connectors/r-atm-HTTP_Client_connector_d64af80e-febe-4cd2-89ad-e3d0fc53c502.md), as demonstrated by the sample process [ Hub: Unlink Golden Record From Source](https://platform.boomi.com/#build;processLibrary=7a24b7d3-a197-410c-aa98-1a2519896ffa), which you can install in your account from the process library in Integration.

:::

## Path parameters 

**universeID**  
ID of the universe

**recordID**  
ID of the golden record

**sourceID**  
ID of the source

## Query parameters 

**entityID**  
(optional)   ID of the source entity for which you request unlinking. The value is case-sensitive. If you omit this parameter, the request is for unlinking all of the specified source's entities to which the golden record is linked. It must be URL encoded if it contains special characters.

**repositoryId** <br></br>
ID of the repository. Case sensitive. Required with JWT authentication only. You can obtain the repository ID from the URL after navigating to the repository in the user interface.


## Responses 
-   200 \(OK\) Suppose you configure the specified source to prevent delivery of update requests, creating operations on the source’s channel for all golden records or a specific golden record given its tags. In that case, it removes each implicitly or explicitly specified link. Otherwise, it changes each implicitly or explicitly set link’s state to *Pending*. The response body is empty.

-   400 (Bad Request) The *universeID* parameter value contains only space characters. Sample response body:

    ```xml
    <error>
      <message>The given universe id is blank.</message>
    </error> 
    ```

- 400 (Bad Request) The *recordID* parameter value contains only space characters. Sample response body:

  ```xml
  <error>
    <message>The given record id is blank.</message>
  </error>
  ```

-   403 \(Forbidden\) sourceID identifies a non-contributing source. Sample response body:

    ```xml
    <error>
      <message>'FOO' is a non-contributing source and its link to golden record '00918cfd-537c-40cf-8799-cc4e03c5d5a0' cannot be put in a pending state.</message>
    </error>
    ```

-   403 \(Forbidden\) *recordID* identifies a golden record that links only to the source identified by sourceID. Sample response body:

    ```xml
    <error>
      <message>Cannot unlink source 'FOO' from golden record '00918cfd-537c-40cf-8799-cc4e03c5d5a0' because it is the only contributing source linked to the record.</message>
    </error>
    ```

-   403 \(Forbidden\) *recordID* identifies a golden record that has a pending link to the source identified by sourceID. Sample response body:

    ```xml
    <error>
      <message>The link from source 'FOO' to golden record '00918cfd-537c-40cf-8799-cc4e03c5d5a0' is already in a pending state.</message>
    </error>
    ```

-   404 (Not Found) *universeID* does not identify a universe under the authenticated account. Sample response body:

    ```xml
    <error>
      <message>A universe with id 'ac11cc59-c77a-4afe-8c92-ed86a7daabec' does not exist.</message>
      <message>Universe definition with id 'ac11cc59-c77a-4afe-8c92-ed86a7daabec' could not be loaded from plugin component directory 'plugins/mdm/bundles/ac11cc59-c77a-4afe-8c92-ed86a7daabec'.</message>
    </error> 
    ```

- 404 (Not Found) *recordID* does not identify an active or end-dated golden record in the specified universe. Sample response body:

    ```xml
    <errors>
      <error>A record with id '1' does not exist.</error>
    </errors> 
    ```

- 404 (Not Found) *sourceID* does not identify a source attached to the specified universe. Sample response body:

    ```xml
    <error>
      <message>Source with code 'FOO' does not exist under universe '851a6a64-6a88-4916-a5b7-d6a974d54318'.</message>
    </error> 
    ```

-   404 \(Not Found\) The query parameter entityID does not identify an entity from the source identified by sourceID that contributes to the golden record identified by recordID. Sample response body:

    ```xml
    <error>
      <message>An entity with id 'id1rg' from source 'NS' does not contribute to record '6b150fe9-37c6-40ac-832c-a20a01b070ba'.</message>
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
