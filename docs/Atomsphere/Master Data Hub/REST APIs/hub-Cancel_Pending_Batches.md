# Cancel Pending Batches 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-fdad4dc4-f3db-48ab-8ba7-d027ecc10791"/>
</head>

The Cancel Pending Batches operation sets pending batches that are in an ENRICHED or PARSED status to CANCELED for a given universe and source. 

:::note

The operation cancels up to 10,000 pending batches. If you have more than 10,000 pending batches, repeat the request until all pending batches are canceled. Contact Boomi Support for assistance in determining the amount of pending batches. 

:::

## Basic authentication 

-   To perform this operation using Basic auth, send an **HTTP POST** request to:

    `http://<host>:<port>/mdm/universes/<universeId>/sources/<sourceId>/cancelPendingBatches`

## JWT authentication

- To perform this operation using JSON Web Token (JWT) auth, send an **HTTP POST** request to:
  `http://<host>:<port>/mdm/universes/<universeId>/sources/<sourceId>/cancelPendingBatches?repositoryId=<repository ID>`

You must have the following MDM privileges:

- **MDM - Batch Management**

## Path parameters 

**universeID**  
ID of the universe. The universe ID is listed in the URL of the Repositories page in the user interface. 

**sourceID**  
ID of the source. The source ID is listed on the Sources page in the user interface.

## Query parameters 

**repositoryId** <br></br>
ID of the repository. Case sensitive. Required with JWT authentication only. You can obtain the repository ID from the URL after navigating to the repository in the user interface.

## Request body

The request body is empty.

## Responses 

-   202 (Accepted) The pending batches for the given universe ID and source ID that are in Parsed or Enriched states are canceled successfully.

-  400 (Bad Request) The *universeID* parameter value contains only space characters. Sample response body:

    ```xml
    <error>
      <message>The given universe id is blank.</message>
    </error> 
    ```
-  404 (Not Found) The *universeID* parameter value is invalid. Sample response body:

    ```xml
    <error>
      <message>A universe with id '7g90ce9d-3e46-4e42-bf9d-b7ca67a19a93' does not exist.</message>
    </error> 
    ```
- 404 (Not Found) *universeID* does not identify a universe under the authenticated account. Sample response body:

  ```xml
  <error>
    <message>A universe with id 'ac11cc59-c77a-4afe-8c92-ed86a7daabec' does not exist.</message>
    <message>Universe definition with id 'ac11cc59-c77a-4afe-8c92-ed86a7daabec' could not be loaded from plugin component directory 'plugins/mdm/bundles/ac11cc59-c77a-4afe-8c92-ed86a7daabec'.</message>
  </error>
  ```
- 409 (Conflict) There is already an existing job running to cancel pending batches for the given universe ID and source ID. Sample response body:
  ```xml
  <error>
    <message>Batch cancellation job 103cba0d-5902-4971-84df-2e1c5c5cae73:172_16_23_112:08fb1321-a38c-4656-8068-60f43a813765 is already in progress</message>
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