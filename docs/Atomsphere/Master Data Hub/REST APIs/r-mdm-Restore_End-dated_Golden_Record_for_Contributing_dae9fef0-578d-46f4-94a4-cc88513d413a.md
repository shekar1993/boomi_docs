# Restore End-dated Golden Record for Source Entity 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-dae9fef0-578d-46f4-94a4-cc88513d413a"/>
</head>


The Restore End-dated Golden Record for Source Entity operation restores the end-dated golden record linked to a source entity in a universe \(domain\) under the authenticated account. Restoring the record marks it as active again, removing the end-date status. End-dated records are considered inactive with the intention to delete them permanently through the [purge operation](/docs/Atomsphere/Master%20Data%20Hub/REST%20APIs/hub-Purge_Multiple_Golden_Records_cfca7eea-9530-4b1e-8b51-d59418451491.md).

If an entity is quarantined because it refers to an end-dated golden record, Boomi DataHub automatically resubmits the quarantine entity after you restore the record. Resubmitting automatically helps you easily resolve Reference Unknown and Matching Reference Unknown errors.

## Basic authentication

To perform this operation using Basic auth, send an **HTTP POST** request with an empty request body to:

`https://<host>:<port>/mdm/universes/<universeID>/records/sources/<sourceID>/entities/<entityID>/restore`

where

*host* is the host name or IP address of the repository and `<port>` is the port number of the shared HTTP server as configured in the account’s [Atom Management settings](/docs/Atomsphere/Integration/Integration%20management/c-atm-Atom_Management_b38a3a90-d7f6-4df0-8c00-e75a178dfdfa.md).

## JWT authentication

To perform this operation using JSON Web Token (JWT) auth, send an **HTTP POST** request with an empty request body to:

`https://<host>:<port>/mdm/universes/<universeID>/records/sources/<sourceID>/entities/<entityID>/restore?repositoryId=<repository ID>`

You must have the following MDM privileges:

- With the Advanced Security feature on your account:
  - **MDM - Stewardship** with the **Restore Records** [Hub role entitlement](/docs/Atomsphere/Master%20Data%20Hub/Getting%20started/t-hub-Creating_Hub_Role_Entitlements_06d21275-b0c6-4854-abef-5782326aa85b.md) for the queried repository <br></br>or
  - **MDM - Stewardship Management**

- Without Advanced Security: 
   - **MDM - Stewardship**

:::note

You can implement requests for this operation in processes using the [HTTP Client connector](/docs/Atomsphere/Integration/Connectors/r-atm-HTTP_Client_connector_d64af80e-febe-4cd2-89ad-e3d0fc53c502.md), as demonstrated by example 1 in the sample process [Hub: Restore End-dated Golden Record](https://platform.boomi.com/#build;processLibrary=7a24b7d3-a197-410c-aa98-1a2519896ffa), which you can install in your account from the process library in Integration.

:::

## Path parameters 

**universeID** <br />
ID of the universe

**sourceID** <br />
ID of the source

**entityID** <br />
ID of the source entity. It must be URL encoded if it contains special characters.

## Query parameters

**repositoryId** <br></br>
ID of the repository. Case sensitive. Required with JWT authentication only. You can obtain the repository ID from the URL after navigating to the repository in the user interface.

## Responses 

-   200 \(OK\) Restored the golden record linked to the source entity. The response body is empty.

-   400 (Bad Request) The *universeID* parameter value contains only space characters. Sample response body:

    ```xml
    <error>
      <message>The given universe id is blank.</message>
    </error> 
    ```

-   400 \(Bad Request\) A golden record in the specified universe is linked to the specified source entity, but the record is not end-dated. Sample response body:

    ```xml
    <error>
      <message>The record with id '1dc9f488-c1d3-4718-9a2c-79f5d6f8b4ea' is not end-dated.</message>
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

-   404 \(Not Found\) *sourceID* and *entityID* do not identify a source entity to which a golden record in the universe is linked. Sample response body:

    ```xml
    <error>
       <message>The entity id '100' for source 'SF' does 
         not contribute to a golden record in universe '851a6a64-6a88-4916-a5b7-d6a974d54318'.</message>
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
