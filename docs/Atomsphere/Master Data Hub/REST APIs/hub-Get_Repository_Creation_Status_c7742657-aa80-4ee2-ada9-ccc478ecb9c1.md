# Get Repository Creation Status 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-c7742657-aa80-4ee2-ada9-ccc478ecb9c1"/>
</head>


The Get Repository Creation Status operation retrieves, by repository ID, the status of the creation of a repository on a specified Hub Cloud under an account accessible to the authenticated user.

To perform this operation, send an HTTP GET request to:

`https://api.boomi.com/mdm/api/rest/v1/<accountID>/repositories/<repositoryID>/status`

:::note

This operation requires the authenticating user to have the **MDM - Repository Management** privilege and the **API Access** privilege.

You can implement requests for this operation in processes using the [HTTP Client connector](/docs/Atomsphere/Integration/Connectors/r-atm-HTTP_Client_connector_d64af80e-febe-4cd2-89ad-e3d0fc53c502.md).

:::

## Path parameters 

**accountID**  
ID of the account

**repositoryID**  
ID of the repository. This ID is obtained from the response to a Create Repository request.


## Responses 

-   200 \(OK\) The body of the response is XML. The root `<mdm:RepositoryStatus>` element’s status attribute has one of the following values:

    -   SUCCESS — created the repository successfully.

    -   PENDING — creation of the repository is in progress.

    -   DELETED — created the repository successfully and then deleted it manually.

    Sample response body:

    ```xml
    <mdm:RepositoryStatus xmlns:mdm="http://mdm.api.platform.boomi.com/" status="SUCCESS"/>
    ```

- 400 (Bad Request) The authenticating user does not have the API Access and MDM - Repository Management privileges required for this operation. Sample response body:

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