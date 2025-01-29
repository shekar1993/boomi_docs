# Enable Initial Load Mode 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-5fc2de65-051a-40fb-9654-6ae22cb92a71"/>
</head>


The Enable Initial Load Mode operation enables Initial Load mode for a source attached to a universe \(domain\) hosted in a repository under an account accessible to the authenticated user.

Loading an initial set of records to a universe from an attached source occurs when you enable **Initial Load mode** for that source. You enable **Initial Load mode** for one source at a time. When you enable **Initial Load mode** for a source, source record update requests do not propagate on that source’s channel.

To perform this operation, send an HTTP POST request with an empty request body to:

`https://api.boomi.com/mdm/api/rest/v1/<accountID>/respositories/repositoryID/universes/universeID/sources/<sourceID>/enableInitialLoad`.

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

-   200 \(OK\) Enabled **Initial Load mode** for the specified source. Sample response body:

    ```xml
    <true/>
    ```

- 400 (Bad Request) The authenticating user does not have the **API Access** and **MDM - Source Attachment** privileges required for this operation. Sample response body:

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

- 400 (Bad Request) *universeID* does not identify a universe deployed to the repository specified by repositoryID under the specified account. Sample response body:

    ```xml
    <error>
        <message>Universe '851a6a64-6a88-4916-a5b7-d6a974d54318' is not deployed to repository 'dbe797ff-6d6f-44e9-acd9-d77494a44b15'.</message>
    </error>
    ```


-   400 \(Bad Request\) The specified source is either not a contributing source or it finished Initial Load. Sample response body:

    ```xml
    <error>
       <message>Source cannot be transitioned to state: STRAPPING</message>
    </error>
    ```

-   400 (Bad Request) A source with the specified ID is not attached to the specified universe. Sample response body:

    ```xml
    <error>
        <message>The source with ID 'NS' is not attached to the specified universe.</message>
    </error>
    ```

-   400 \(Bad Request\) **Initial Load mode** is enabled for a source attached to the specified universe. Sample response body:

    ```xml
    <error>
       <message>Cannot perform an initial load on more than one source at a time.</message>
    </error>
    ```

- 403 (Forbidden) Authentication failure. Sample response body:

    ```xml
    <UserMessage id="error.user.login" type="error">
        <Data>Incorrect user name and password combination.</Data>
    </UserMessage>
    ```

-  403 (Forbidden) *accountID* does not identify an account accessible to the authenticating user. Sample response body:

    ```xml
    <UserMessage id="error.user.login" type="error">
        <Data>Incorrect user name and password combination.</Data>
    </UserMessage>
    ```