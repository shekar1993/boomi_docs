# Purge Multiple Golden Records 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-cfca7eea-9530-4b1e-8b51-d59418451491"/>
</head>


The Purge Multiple Golden Records operation purges (permanently deletes) 1–100 specified end-dated golden records. [End-dated records](/docs/Atomsphere/Master%20Data%20Hub/REST%20APIs/hub-End-date_Multiple_Golden_Records_d1b7055a-5e18-45c9-97e0-47bd725146f7.md) are records marked as inactive for review before they are permanently deleted since you can restore an end-date record to active status.

## Basic authentication

To perform this operation using Basic auth, send an **HTTP POST** request to:

`https://<host>:<port>/mdm/universes/<universeID>/records/enddated/purge`

where

*host* is the host name or IP address of the repository and port is the port number of the shared HTTP server as configured in the account’s [Atom Management settings](/docs/Atomsphere/Integration/Integration%20management/c-atm-Atom_Management_b38a3a90-d7f6-4df0-8c00-e75a178dfdfa.md).

## JWT authentication

To perform this operation using JSON Web Token (JWT) auth, send an **HTTP POST** request to:

`https://<host>:<port>/mdm/universes/<universeID>/records/enddated/purge?repositoryId=<repository ID>`

You must have the following MDM privileges:

- With the Advanced Security feature on your account:
  - **MDM - Stewardship** with the **Purge Records** [Hub role entitlement](/docs/Atomsphere/Master%20Data%20Hub/Getting%20started/t-hub-Creating_Hub_Role_Entitlements_06d21275-b0c6-4854-abef-5782326aa85b.md) for the queried repository <br></br>or
  - **MDM - Stewardship Management**

- Without Advanced Security: 
   - **MDM - Stewardship** 

:::note

You can implement requests for this operation in processes using the [HTTP Client connector](/docs/Atomsphere/Integration/Connectors/r-atm-HTTP_Client_connector_d64af80e-febe-4cd2-89ad-e3d0fc53c502.md), as demonstrated by example 2 in the sample process [Hub: Purge Golden Record](/docs/Atomsphere/Master%20Data%20Hub/REST%20APIs/hub-Purge_Multiple_Golden_Records_cfca7eea-9530-4b1e-8b51-d59418451491.md), which you can install in your account from the process library in Integration.

:::

## Path parameters 

**universeID**  
ID of the universe

## Query parameters 

**repositoryId** <br></br>
ID of the repository. Case sensitive. Required with JWT authentication only. You can obtain the repository ID from the URL after navigating to the repository in the user interface.

## Request body

In the request body, the root element is `<RecordPurgeRequest>`. Within that element, each `<recordId>` element specifies an end-dated golden record to purge by its ID.

For example, the following request body specifies three golden records to be purged:

```
<RecordPurgeRequest>
  <recordId>f9acda54-8d89-425c-8f05-b22b82f2a641</recordId>
  <recordId>5076fa51-e045-4557-a7b3-894c3b274fb4</recordId>
  <recordId>1cdf15e0-91c3-4082-b6b1-90823a59ef9b</recordId>
</RecordPurgeRequest>
```

## Responses 

-   200 \(OK\) In the response body, the root element is `<RecordPurgeResponse>`. Within that element, a `<result>` element corresponds to each golden record ID in the request body.

    In each `<result>` element, `<recordId>` specifies a golden record ID in the request body and `<success>` indicates whether a purge operation on an end-dated golden record with that ID was successful. If `<success>` contains true, it purged an end-dated golden record with that ID.

    If `<success>` contains false, it did not purge an end-dated golden record with the specified ID. An additional element, `<message>`, indicates the reason the operation was unsuccessful. Failure occurs in the following cases:

    -   An end-dated golden record with the specified ID does not exist.

    -   A golden record with the specified ID is active.

    Sample response body:

    ```xml
    <RecordPurgeResponse>
      <result>
        <recordId>f9acda54-8d89-425c-8f05-b22b82f2a641</recordId>
        <success>true</success>
      </result>    
      <result>
        <recordId>5076fa51-e045-4557-a7b3-894c3b274fb4</recordId>
        <success>false</success>
        <message>A record with id '5076fa51-e045-4557-a7b3-894c3b274fb4' does not exist.</message>
      </result>
      <result>
        <recordId>1cdf15e0-91c3-4082-b6b1-90823a59ef9b</recordId>
        <success>false</success>
        <message>The selected record with ID '1cdf15e0-91c3-4082-b6b1-90823a59ef9b' 
        is active and therefore cannot be purged.</message>
      </result>
    </RecordPurgeResponse>
    ```

-   400 (Bad Request) The *universeID* parameter value contains only space characters. Sample response body:

    ```xml
    <error>
      <message>The given universe id is blank.</message>
    </error> 
    ```

-   400 \(Bad Request\) The request body specifies either zero golden record IDs or more than 100 golden record IDs.

    ```xml
    <error>
          <message>Purging cannot occur because either no records are selected or more than 100 records 
          are selected.</message>
    </error> 
    ```

- 404 (Not Found) *universeID* does not identify a universe under the authenticated account. Sample response body:

    ```xml
    <error>
      <message>A universe with id 'ac11cc59-c77a-4afe-8c92-ed86a7daabec' does not exist.</message>
      <message>Universe definition with id 'ac11cc59-c77a-4afe-8c92-ed86a7daabec' could not be loaded from plugin component directory 'plugins/mdm/bundles/ac11cc59-c77a-4afe-8c92-ed86a7daabec'.</message>
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