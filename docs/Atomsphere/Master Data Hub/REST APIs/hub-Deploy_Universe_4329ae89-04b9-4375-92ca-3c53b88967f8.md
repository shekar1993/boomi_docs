# Deploy Universe 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-4329ae89-04b9-4375-92ca-3c53b88967f8"/>
</head>

The Deploy Universe operation requests deployment to a repository of a specified version of the model underlying a universe \(domain\) under an account accessible to the authenticated user.

To perform this operation, send an HTTP POST request with an empty request body to:

`https://api.boomi.com/mdm/api/rest/v1/<accountID>/universe/<universeID>/deploy?version=<versionID>&repositoryId=<repositoryID>`

:::note

This operation requires the authenticating user to have the MDM - Model Deployment privilege in addition to the API Access privilege.

You can implement requests for this operation in processes using the [HTTP Client connector](/docs/Atomsphere/Integration/Connectors/r-atm-HTTP_Client_connector_d64af80e-febe-4cd2-89ad-e3d0fc53c502.md).

:::

## Path parameters 

**accountID**  
ID of the account

**universeID**  
ID of the model


## Query parameters 

**repositoryID**  
ID of the repository

**versionID**  
Version number of the model to deploy. This parameter is optional. The default is the latest version.


## Responses 
-   200 \(OK\) The body of the response is XML. The root `<mdm:UniverseDeployment>` element has the following child elements:

    -   `<mdm:id>` — ID of the deployment

    -   `<mdm:universeId>` — ID of the model

    -   `<mdm:universeVersion>` — model version number

    -   `<mdm:status>` — the status of the deployment request is PENDING. You can obtain status updates with Get Universe Deployment Status requests specifying the deployment ID returned in `<mdm:id>` or requests for the URL returned in `<mdm:url>`.

    -   `<mdm:deployDate>` — date and time of the deployment request

    -   `<mdm:url>` — a request for this URL is equivalent to a Get Universe Deployment Status request specifying the deployment ID returned in `<mdm:id>`

    Sample response body:

    ```xml
    <mdm:UniverseDeployment xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:mdm="http://mdm.api.platform.boomi.com/">
        <mdm:id>456789ab-cdef-0123-4567-89abcdef0123</mdm:id>
        <mdm:universeId>01234567-89ab-cdef-0123-456789abcdef</mdm:universeId>
        <mdm:universeVersion>2</mdm:universeVersion>
        <mdm:status>PENDING</mdm:status>
        <mdm:deployDate>2020-02-08T16:36:16Z</mdm:deployDate>
        <mdm:url>https://platform.boomi.com/mdm/api/rest/v1/account-123456/universe/01234567-89ab-cdef-0123-456789abcdef/deployments/456789ab-cdef-0123-4567-89abcdef0123</mdm:url>
    </mdm:UniverseDeployment>
    ```
-   400 (Bad Request) The authenticating user does not have the **API Access** and **MDM - Model Deployment** privileges required for this operation. Sample response body:

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

-   400 \(Bad Request\) *versionID* does not identify an existing version of the model identified by universeID. Sample response body:

    ```xml
    <error>
        <message>Version 4 of model with id: ac11cc59-c77a-4afe-8c92-ed86a7daabec could not be found.</message>
    </error>
    ```

-   400 \(Bad Request\) The request erroneously omitted the repositoryId parameter. Sample response body:

    ```xml
    <error>
        <message>The repository id is required.</message>
    </error>
    ```

- 400 (Bad Request) repositoryID does not identify a repository under the specified account. Sample response body:

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

- 403 (Forbidden) accountID does not identify an account accessible to the authenticating user. Sample response body:

    ```xml
    <UserMessage id="error.user.login" type="error">
        <Data>Incorrect user name and password combination.</Data>
    </UserMessage>
    ```