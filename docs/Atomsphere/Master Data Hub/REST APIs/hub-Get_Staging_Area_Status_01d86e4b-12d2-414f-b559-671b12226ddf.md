# Get Staging Area Status 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-01d86e4b-12d2-414f-b559-671b12226ddf"/>
</head>


The Get Staging Area Status operation retrieves, by system staging area ID, the status of a staging area for a source attached to a universe \(domain\) hosted in a repository under an account accessible to the authenticated user.

To perform this operation, send an HTTP GET request to:

`https://api.boomi.com/mdm/api/rest/v1/<accountID>/repositories/<repositoryID>/universes/<universeID>/sources/<sourceID>/stagingArea/<systemStagingAreaID>/status`

:::note

This operation requires the authenticating user to have the **MDM - Source Attachment** and the **API Access** privileges.

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
System ID of the staging area. This system ID is obtained from the response to an Add Staging Area for Source request or from the stagingId value on the **Staged Entities** page URL for the staging area in Boomi DataHub.


## Responses 

-   200 \(OK\) The body of the response is XML. The root `<mdm:StagingAreaStatus>` element has the following child elements:

    -   `<mdm:stagingId>` — system ID of the staging area, which should coincide with the path parameter systemStagingAreaID

    -   `<mdm:name>` — name of the staging area

    -   `<mdm:code>` — user-specified ID of the staging area

    -   `<mdm:state>` — the status of the staging area, either READY, CREATED, DISABLED, or DELETED

    -   `<mdm:createDate>` — creation date and time of the staging area

    -   `<mdm:updatedDate>` — date and time of the last update to the staging area’s name or user-specified ID

    -   `<mdm:errorMessage>` — if `<mdm:state>` is DISABLED, an error message indicating the reason. For example:

        ```xml
        <mdm:errorMessage>The version of the model has changed since entities were staged. Clear or refresh the staging area to allow new entities to be staged.</mdm:errorMessage>
        ```

    Sample response body:

    ```xml
    <mdm:StagingAreaStatus xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:mdm="http://mdm.api.platform.boomi.com/">
        <mdm:stagingId>3456789a-bcde-f012-3456-789abcdef012</mdm:stagingId>
        <mdm:name>NetSuite Staging Area 1</mdm:name>
        <mdm:code>NS-Staging-1</mdm:code>
        <mdm:state>READY</mdm:state>
        <mdm:createDate>2020-11-24T19:41:42Z</mdm:createDate>
        <mdm:updatedDate>2020-11-24T19:41:54Z</mdm:updatedDate>
    </mdm:StagingAreaStatus>
    ```
- 400 (Bad Request) The authenticating user does not have the API Access and MDM - Source Attachment privileges required for this operation. Sample response body:

    ```xml
    <error>
        <message>The authenticated user does not have access rights to this functionality</message>
    </error>
    ```

- 400 (Bad Request) repositoryID does not identify a repository under the specified account. Sample response body:
   
    ```xml
    <error>
        <message>Could not find containerAccount for container id 
        dbe797ff-6d6f-44e9-acd9-d77494a44b15 and account id account-123456</message>
    </error>
    ```

- 400 (Bad Request) The universeID parameter value contains only space characters. Sample response body:

    ```xml
    <error>
        <message>The given universe id is blank.</message>
    </error> 
    ```

- 400 (Bad Request) A staging area with the specified ID does not exist for the specified source. This error has additional possible causes:
  - It can signify that *sourceID* does not identify a source attached to the specified universe
  - The universeID does not identify a universe hosted in the specified repository. Sample response body:

    
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

- 403 (Forbidden) accountID does not identify an account accessible to the authenticating user. Sample response body:

    ```xml
    <UserMessage id="error.user.login" type="error">
        <Data>Incorrect user name and password combination.</Data>
    </UserMessage>
    ```