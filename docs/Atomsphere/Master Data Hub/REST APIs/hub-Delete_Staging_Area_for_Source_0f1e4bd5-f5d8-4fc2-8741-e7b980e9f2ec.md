# Delete Staging Area for Source 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-0f1e4bd5-f5d8-4fc2-8741-e7b980e9f2ec"/>
</head>


The Delete Staging Area for Source operation requests deletion of a specified staging area for a source attached to a universe \(domain\) hosted in a repository under an account accessible to the authenticated user.

To perform this operation, send an HTTP DELETE request to:

`https://api.boomi.com/mdm/api/rest/v1/<accountID>/repositories/<repositoryID>/universes/<universeID>/sources/<sourceID>stagingArea/<systemStagingAreaID>`

:::note

This operation requires the authenticating user to have the **MDM - Source Attachment** privilege and the **API Access** privilege.

You can implement requests for this operation in processes using the [HTTP Client connector](/docs/Atomsphere/Integration/Connectors/r-atm-HTTP_Client_connector_d64af80e-febe-4cd2-89ad-e3d0fc53c502.md).

:::

## Path parameters 

**accountID**  
ID of the account

**repositoryID**  
ID of the repository

**universeID**  
ID of the universe

**sourceID**  
ID of the source

**systemStagingAreaID**  
System ID of the staging area. You can obtain this system ID from the following:
- Response to an Add Staging Area for Source request
- Response to a Get Staging Area Status request
- The stagingId value on the Staged Entities page URL for the staging area in Boomi DataHub.


## Responses

-   200 \(OK\) If you delete the specified staging area successfully, the response body contains *true*.

- 400 (Bad Request) The authenticating user does not have the API Access and MDM - Source Attachment privileges required for this operation. Sample response body:

    ```xml
    <error>
        <message>The authenticated user does not have access rights to this functionality</message>
    </error>
    ```

- 400 (Bad Request) *repositoryID* does not identify a repository under the specified account. Sample response body:
  
    ```xml
    <error>
        <message>Could not find containerAccount for container id 
     dbe797ff-6d6f-44e9-acd9-d77494a44b15 and account id account-123456</message>
    </error>
    ```

- 400 (Bad Request) The *universeID* parameter value contains only space characters. Sample response body:

    ```xml
    <error>
        <message>The given universe id is blank.</message>
    </error> 
    ```

- 400 (Bad Request) A staging area with the specified ID does not exist for the specified source. This error has additional possible causes:
  - It can signify that *sourceID* does not identify a source attached to the specified universe
  - The *universeID* does not identify a universe hosted in the specified repository. Sample response body:
  
    ```xml
    <error>
        <message>There is no staging area with staging area ID '456789ab-cdef-0123-4567-89abcdef0123' for the specified source.</message>
    </error> 
    ```

- 403 (Forbidden) Authentication failure. Sample response body:

    ```xml
    <UserMessage id="error.user.login" type="error">
        <Data>Incorrect user name and password combination.</Data>
    </UserMessage>
    ```

- 403 (Forbidden) *accountID* does not identify an account accessible to the authenticating user. Sample response body:

    ```xml
    <UserMessage id="error.user.login" type="error">
        <Data>Incorrect user name and password combination.</Data>
    </UserMessage>
    ```