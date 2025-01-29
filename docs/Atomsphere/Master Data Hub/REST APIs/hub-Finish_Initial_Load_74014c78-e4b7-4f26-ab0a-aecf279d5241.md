# Finish Initial Load 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-74014c78-e4b7-4f26-ab0a-aecf279d5241"/>
</head>


The Finish Initial Load operation disables **Initial Load mode** for a source attached to a universe \(domain\) hosted in a repository under an account accessible to the authenticated user.

When a source finishes **Initial Load**, source record update requests are propagated on the source’s channel as a result of changes to the universe’s golden records.

To perform this operation, send an HTTP POST request with an empty request body to

`https://api.boomi.com/mdm/api/rest/v1/<accountID>/repositories/repositoryID/universesuniverseID/sources/<sourceID>/finishInitialLoad`

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

-   200 \(OK\) Disabled **Initial Load mode** for the specified source. Sample response body:

    ```xml
    <true/>
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

-   400 \(Bad Request\) The specified source is either not a contributing source or it finished the **Initial Load**. Sample response body:

    ```xml
    <error>
       <message>Source cannot be transitioned to state: STRAPPED</message>
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