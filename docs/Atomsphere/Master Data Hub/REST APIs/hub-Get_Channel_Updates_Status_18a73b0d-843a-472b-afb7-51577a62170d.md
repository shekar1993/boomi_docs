# Get Channel Updates Status 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-18a73b0d-843a-472b-afb7-51577a62170d"/>
</head>

The Get Channel Updates Status operation, retrieves by request ID, the status of a Propagate Channel Updates request.

## Basic authentication

To perform this operation using Basic auth, send an **HTTP GET** request to:

`https://<host>:<port>/mdm/universes/<universeID>/sources/<sourceID>/records/updates/<requestID>`

where

`<host\>` is the host name or IP address of the repository and port is the port number of the shared HTTP server as configured in the account’s [Atom Management settings](/docs/Atomsphere/Integration/Integration%20management/c-atm-Atom_Management_b38a3a90-d7f6-4df0-8c00-e75a178dfdfa.md).

## JWT authentication

To perform this operation using JSON Web Token (JWT) auth, send an **HTTP GET** request to:

`https://<host>:<port>/mdm/universes/<universeID>/sources/<sourceID>/records/updates/<requestID>?repositoryId=<repository ID>`

You must have the following MDM privileges:

- **MDM Source Management**

:::note

You can implement requests for this operation in processes using the [HTTP Client connector](/docs/Atomsphere/Integration/Connectors/r-atm-HTTP_Client_connector_d64af80e-febe-4cd2-89ad-e3d0fc53c502.md).

:::

## Path parameters 

**universeID**  
ID of the universe

**sourceID**  
ID of the source

**requestID**  
ID of the Propagate Channel Updates request. You can obtain this ID from the response body for that request.

## Query parameters 

**repositoryId** <br></br>
ID of the repository. Case sensitive. Required with JWT authentication only. You can obtain the repository ID from the URL after navigating to the repository in the user interface.

## Responses 

-   200 \(OK\) The body of the response is XML. The root `<ChannelUpdatesStatus>` element has the following attributes. The attribute values are counts of golden records processed in response to the Propagate Channel Updates request:

    -   `totalCount`

        -   If you specify `<recordID\>` elements in the Propagate Channel Updates request body, this count is the sum of all specified golden records and any specified invalid golden record IDs.

        -   If you specify `<filter\>` in the Propagate Channel Updates request body and did not specify `<recordID\>` elements, this count is of the golden records that met all of the filtering criteria.

    -   `successCount` — the sum of golden records for propagated update requests and golden records that did not propagate update requests due to the application of propagation rules configured for the specified universe and source combination.

    -   `errorCount` — golden records that did not propagate update requests due to the specification of invalid golden record IDs in the Propagate Channel Updates request body.

    `<ChannelUpdatesStatus>` contains the following child elements:

    -   `<startDate\>` — the submittal date and time of the Propagate Channel Updates request

    -   `<endDate>` — date and time the processing of the Propagate Channel Updates request ended. If the `status` is SUBMITTED or PROCESSING, it omits this element.

    -   `<status>` contains one of the following tokens, which indicates the status of the Propagate Channel Updates request:

        -   SUBMITTED — accepted the request submission, but processing of golden records specified in the request has not begun.

        -   PROCESSING — processing of golden records specified in the request is in progress.

        -   COMPLETED — propagated the update requests for all golden records specified in the request.

        -   COMPLETED\_WITH\_ERRORS— processed all golden records specified in the request. Propagated update requests for some golden records but errors occurred processing others.

        -   TERMINATED — processing of golden records after errors occurred for 500 golden records.

        -   FAILED — processing of the request due to an unhandled exception.

        -   CANCELED — the request as a result of a Cancel Channel Updates operation.

    -   `<erroredUpdates\>` — each child `<recordId\> `contains either the ID of a golden record for which an error prevented the propagation of an update request or an invalid golden record ID specified in the Propagate Channel Updates request body. `<erroredUpdates>` is empty if the `<status\>` contains SUBMITTED, PROCESSING, COMPLETED, or CANCELED.

    Sample response body:

    ```xml
    <ChannelUpdatesStatus totalCount="1228" successCount="1223" errorCount="5">
       <startDate>2021-01-22T19:19:31Z</startDate>
       <endDate>2021-01-22T19:19:33Z</endDate>
       <status>COMPLETED_WITH_ERRORS</status>
       <erroredUpdates>
           <recordId>00089286-7a99-4d6e-8750-6a683ba4e59d</recordId>
           <recordId>00493062-0be9-4c55-82d7-d997c941b028</recordId>
           <recordId>00f6597a-7b19-4b84-a1f3-302b07d12507</recordId>
           <recordId>018814dc-e5c9-4898-a541-5b57da3c184f</recordId>
           <recordId>01911dc9-ff42-4254-bf56-ebbf6d9ef01b</recordId>
       </erroredUpdates>
    </ChannelUpdatesStatus>
    ```

-   400 (Bad Request) The `universeID` parameter value contains only space characters. Sample response body:

    ```xml
    <error>
    <message>The given universe id is blank.</message>
    </error> 
    ```

-   400 \(Bad Request\) `requestID` does not identify a Propagate Channel Updates request for the specified universe and source combination. Sample response body:

    ```xml
    <error>
       <message>A Propagate Channel Updates request with ID '139' does not currently 
         exist for universe '257e5d32-4e8c-4a6c-8869-42c5a09eab91' and source 'NS'
       </message>
    </error>
    ```

- 400 (Bad Request) *requestID* is not a an integer and is therefore invalid. Sample response body:

    ```xml
    <error>
        <message>'abc' is not a valid request ID.</message>
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
    </error>```

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