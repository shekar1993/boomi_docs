# Import Domain Source Configuration to Model 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-85965d04-e0fd-481c-9f72-0e820834c825"/>
</head>

The Import Domain Source Configuration to Model operation imports the source configuration for a universe \(domain\) hosted in a specific repository under an account accessible to the authenticating user to the model in that universe.

To perform this operation, send an HTTP POST request with an empty request body to:

`https://api.boomi.com/mdm/api/rest/v1/<accountID>/repositories/<repositoryID>/universes/<universeID>/domainconfig/import`

:::note

This operation requires the authenticating user to have the **MDM - Source Attachment** and the API Access privileges.

You can implement requests for this operation in processes using the [HTTP Client connector](/docs/Atomsphere/Integration/Connectors/r-atm-HTTP_Client_connector_d64af80e-febe-4cd2-89ad-e3d0fc53c502.md).

:::

## Path parameters 

**accountID**  
ID of the account

**repositoryID**  
ID of the repository

**universeID**  
ID of the universe


## Responses 

-   200 \(OK\) A successful import operation. Created a draft version of the model with a source configuration identical to that of the corresponding domain source configuration. Sample response body:

    ```xml
    <true/>
    ```

-   400 \(Bad Request\) Did not perform an import operation because the source configuration in the deployed version of the model is identical to the domain source configuration. Sample response body:

    ```xml
    <error>
       <message>configuration is same, nothing to copy</message>
    </error>
    ```

- 400 (Bad Request) The authenticating user does not have the API Access and MDM - Source Attachment privileges required for this operation. Sample response body:

    ```xml
    <error>
        <message>The authenticated user does not have access rights to this functionality</message>
    </error>
    ```

- 400 (Bad Request) The *universeID* parameter value contains only space characters. Sample response body:

    ```xml
    <error>
        <message>The given universe id is blank.</message>
    </error>
    ```
   
- 400 (Bad Request) *repositoryID* does not identify a repository under the specified account. Sample response body:

    ```xml
    <error>
        <message>Could not find containerAccount for container id 
        dbe797ff-6d6f-44e9-acd9-d77494a44b15 and account id account-123456</message>
    </error>
    ```

- 400 (Bad Request) *universeID* does not identify a universe deployed to the repository specified by repositoryID under the specified account. Sample response body:

    ```xml
    <error>
        <message>universe is not deployed to the repository</message>
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

- 404 (Not Found) *universeID* does not identify a universe hosted in the specified repository. Sample response body:

    ```xml
    <error>
        <message>A universe with id 'ac11cc59-c77a-4afe-8c92-ed86a7daabec' does not exist.</message>
    </error> 
    ```