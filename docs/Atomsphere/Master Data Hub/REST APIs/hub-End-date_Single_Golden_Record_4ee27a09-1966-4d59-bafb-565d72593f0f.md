# End-date Single Golden Record 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-4ee27a09-1966-4d59-bafb-565d72593f0f"/>
</head>


The End-date Single Golden Record operation allows you to set a specific golden record as inactive. By end-dating a record, you can mark it for deletion and review it before permanently deleting it since you cannot restore a purged record.

## Basic authentication 

To perform this operation using Basic auth, send an **HTTP POST** request with an empty request body to:

`https://<host>:<port>/mdm/universes/<universeID>/records/<recordID>/enddate`

where

*host* is the host name or IP address of the repository and port is the port number of the shared HTTP server as configured in the account’s [Atom Management settings](/docs/Atomsphere/Integration/Integration%20management/c-atm-Atom_Management_b38a3a90-d7f6-4df0-8c00-e75a178dfdfa.md).

## JWT authentication

To perform this operation using JSON Web Token (JWT) auth, send an **HTTP POST** request with an empty request body to:

`https://<host>:<port>/mdm/universes/<universeID>/records/<recordID>/enddate?repositoryId=<repository ID>`

You must have the following MDM privileges:

- With the Advanced Security feature on your account:
  - **MDM - Stewardship** with **End-date Records** [Hub role entitlement](/docs/Atomsphere/Master%20Data%20Hub/Getting%20started/t-hub-Creating_Hub_Role_Entitlements_06d21275-b0c6-4854-abef-5782326aa85b.md) for the queried repository <br></br>or
  - **MDM - Stewardship Management**

- Without Advanced Security: 
   - **MDM - Stewardship** 

:::note

You can implement requests for this operation in processes using the [HTTP Client connector](/docs/Atomsphere/Integration/Connectors/r-atm-HTTP_Client_connector_d64af80e-febe-4cd2-89ad-e3d0fc53c502.md), as demonstrated by example 1 in the sample process [ Hub: End-date Golden Record,](/docs/Atomsphere/Master%20Data%20Hub/REST%20APIs/hub-End-date_Single_Golden_Record_4ee27a09-1966-4d59-bafb-565d72593f0f.md), which you can install in your account from the process library in Integration.

:::

## Path parameters 

**universeID**  
ID of the universe

**recordID**  
ID of the golden record

## Query parameters 

**repositoryId** <br></br>
ID of the repository. Case sensitive. Required with JWT authentication only. You can obtain the repository ID from the URL after navigating to the repository in the user interface.

## Responses 

-   200 \(OK\) In the response body, the root element is `<RecordEndDateResponse>`. That element contains a `<result>` element.

    In the `<result>` element, `<recordId>` specifies the recordID parameter value and `<success>` indicates whether an end-date operation on an active golden record with that ID was successful.

    -   If `<success>` contains true, it end-dated the golden record with the specified ID, and a source record update request specifying a delete operation was propagated to each linked source. Sample response body:

        ```xml
        <RecordEndDateResponse>
          <result>
            <recordId>1ca890ab-ed57-4534-809e-fd7fc117f2d9</recordId>
            <success>true</success>
          </result>    
        </RecordEndDateResponse>
        ```

    -   If `<success>` contains false, a golden record with the specified ID was not end-dated. An additional element, `<message>`, indicates the reason the operation was unsuccessful. Failure occurs in the following cases:

        -   An active golden record with the specified ID does not exist. Sample response body:

            ```xml
            <RecordEndDateResponse>
              <result>
                <recordId>485841-a68b-4b17-857d-1706d661694a</recordId>
                <success>false</success>
                <message>A record with id '485841-a68b-4b17-857d-1706d661694a' does not exist.</message>
              </result>
            </RecordEndDateResponse>
            ```

        -   A golden record with the specified ID is already end-dated. Sample response body:

            ```xml
            <RecordEndDateResponse>
              <result>
                <recordId>90542057-a68b-4b17-857d-1706d661694a</recordId>
                <success>false</success>
                <message>The record with id '90542057-a68b-4b17-857d-1706d661694a' is currently end-dated 
                in universe with id '63374e20-e57c-4930-b1a2-6a7fc3a28eaf'.</message>
              </result>
            </RecordEndDateResponse>
            ```

        -   A golden record with the specified ID is referenced by another golden record. Sample response body:

            ```xml
            <RecordEndDateResponse>
              <result>
                <recordId>6bb11d94-6f75-4a9a-a8c9-6cca8850a396</recordId>
                <success>false</success>
                <message>The requested action cannot be performed on this record because it is referenced 
                by another record.</message>
              </result>
            </RecordEndDateResponse>
            ```

- 400 (Bad Request) The universeID parameter value contains only space characters. Sample response body:

    ```xml
    <error>
      <message>The given universe id is blank.</message>
    </error> 
    ```

- 400 (Bad Request) The recordID parameter value contains only space characters. Sample response body:

    ```xml
    <error>
      <message>The given record id is blank.</message>
    </error> 
    ```

-  404 (Not Found) universeID does not identify a universe under the authenticated account. Sample response body:

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