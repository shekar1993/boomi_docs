# Cancel Channel Updates 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-1ed31cd6-1306-4412-ae07-93a93a7331f5"/>
</head>


The Cancel Channel Updates operation, cancels a Propagate Channel Updates request specified by its ID.

## Basic authentication

To perform this operation using Basic auth, send an **HTTP DELETE** request with an empty request body to:

`https://<host>:<port>/mdm/universes/<universeID>/sources/<sourceID>/records/updates/<requestID>`

where:

*host* is the host name or IP address of the repository and port is the port number of the shared HTTP server as configured in the account’s [Atom Management settings](/docs/Atomsphere/Integration/Integration%20management/c-atm-Atom_Management_b38a3a90-d7f6-4df0-8c00-e75a178dfdfa.md).

## JWT authentication

To perform this operation using JSON Web Token (JWT) auth, send an **HTTP DELETE** request with an empty request body to:

`https://<host>:<port>/mdm/universes/<universeID>/sources/<sourceID>/records/updates/<requestID>?repositoryId=<repository ID>`

You must have the following MDM privileges:

- **MDM - Source Management**

:::note

You can implement requests for this operation in processes using the [HTTP Client connector](/docs/Atomsphere/Integration/Connectors/r-atm-HTTP_Client_connector_d64af80e-febe-4cd2-89ad-e3d0fc53c502.md).

:::

This operation is applicable to a request with a status of SUBMIITTED or PROCESSING. You can obtain the status using a Get Channel Updates Status request.

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

-   200 (OK) A response body containing `<true>` indicates the successful cancellation of the Propagate Channel Updates request.
  
-   400 (Bad Request) The *universeID* parameter value contains only space characters. Sample response body:
    
    ```
    <error>
      <message>The given universe id is blank.</message>
    </error>
    ```

-   400 \(Bad Request\) requestID does not identify an active Propagate Channel Updates request for the specified universe/source combination. Sample response body:

    ```
    <error>
       <message>An active Propagate Channel Updates request with ID '139' does not 
         currently exist for universe '257e5d32-4e8c-4a6c-8869-42c5a09eab91' and 
         source 'NS'</message>
    </error>
    ```
- 400 (Bad Request) *requestID* is not a an integer and is therefore invalid. Sample response body:

  ```
  <error>
    <message>'abc' is not a valid request ID.</message>
  </error>
  ```

- 404 (Not Found) *universeID* does not identify a universe under the authenticated account. Sample response body:

  ```
  <error>
    <message>A universe with id 'ac11cc59-c77a-4afe-8c92-ed86a7daabec' does not exist.</message>
    <message>Universe definition with id 'ac11cc59-c77a-4afe-8c92-ed86a7daabec' could not be loaded from plugin component directory 'plugins/mdm/bundles/ac11cc59-c77a-4afe-8c92-ed86a7daabec'.</message>
  </error> 
  ```

- 404 (Not Found) *sourceID* does not identify a source attached to the specified universe. Sample response body:

  ```
  <error>
    <message>Source with code 'FOO' does not exist under universe '851a6a64-6a88-4916-a5b7-d6a974d54318'.</message>
  </error> 
  ```
- 401 (Invalid Credentials) JWT auth token is expired. Sample response body:
   ```
   <body>
   <h2>HTTP ERROR 401</h2>
      <p>Problem accessing /mdm/universes. Reason:
      <pre>Invalid credentials.</pre>
   </p>
   </body>
   ```
- 403 (You do not have permissions to access this resource) User does not have the required MDM privilege to perform the action. Applicable to JWT auth only. Sample response body:

   ```
   <error><message>You do not have permissions to access this resource.</message></error>
   ```