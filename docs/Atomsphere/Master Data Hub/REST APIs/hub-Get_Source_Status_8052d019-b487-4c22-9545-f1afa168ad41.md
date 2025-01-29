# Get Source Status 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-8052d019-b487-4c22-9545-f1afa168ad41"/>
</head>


The Get Source Status request retrieves, by source ID, the status of a source attached to a universe \(domain\) hosted in a repository under an account accessible to the authenticated user.

To perform this operation, send an HTTP GET request to


`https://api.boomi.com/mdm/api/rest/v1/<accountID>/repositories/<repositoryID>/universes/<universeID>/sources/<sourceID>/status`


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


## Responses 

-   200 \(OK\) The body of the response is XML. The `<mdm:SourceStatus>` element’s status attribute indicates the status of the specified source with one of the following values:

    -   SOURCE\_ATTACHMENT\_REQUESTED

    -   SOURCE\_ATTACHED

    -   ENABLE\_INITIAL\_LOAD\_REQUESTED

    -   INITIAL\_LOAD\_ENABLED

    -   FINISH\_INITIAL\_LOAD\_REQUESTED

    -   INITIAL\_LOAD\_FINISHED

    -   SOURCE\_REMOVAL\_REQUESTED

    -   SOURCE\_REMOVED — this status is momentary upon removal of a source. A subsequent request specifying the same sourceID should result in the 400 \(Bad Request\) error that occurs in the case of an unattached source.

    -   SOURCE\_ERRORED — the source was not successfully attached or removed.

    Sample response body:

    ```xml
    <mdm:SourceStatus xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:mdm="http://mdm.api.platform.boomi.com/" status="INITIAL_LOAD_FINISHED"/>
    ```

    If the status attribute value is SOURCE\_ERRORED, `<mdm:SourceStatus>` has an additional attribute: *errorMessage*. The *errorMessage* value specifies the reason the source was not successfully attached or removed as requested.

    Sample response body:

    ```xml
    <mdm:SourceStatus xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:mdm="http://mdm.api.platform.boomi.com/" status="SOURCE_ERRORED" errorMessage="Exception during source attachment"/>
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
- 400 (Bad Request) universeID does not identify a universe deployed to the repository specified by repositoryID under the specified account. Sample response body:

```xml
<error>
   <message>Universe '851a6a64-6a88-4916-a5b7-d6a974d54318' is not deployed to repository 'dbe797ff-6d6f-44e9-acd9-d77494a44b15'.</message>
</error>
```

- 400 (Bad Request) A source with the specified ID is not attached to the specified universe. Sample response body:

    ```xml
    <error>
        <message>The source with ID 'NS' is not attached to the specified universe.</message>
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