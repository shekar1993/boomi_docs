# Delete Repository 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-a629fba9-d1af-45ad-870b-470363d8abb2"/>
</head>


The Delete Repository operation requests deletion of a repository under an account accessible to the authenticated user.

To perform this operation, send an HTTP DELETE request with an empty request body to

`https://api.boomi.com/mdm/api/rest/v1/<accountID>/repositories/<repositoryID>.`

:::note

You cannot delete a repository when it contains a currently deployed model.

:::

:::note

This operation requires the authenticating user to have the **MDM - Repository Management** privilege in addition to the **API Access** privilege.

You can implement requests for this operation in processes using the [HTTP Client connector](/docs/Atomsphere/Integration/Connectors/r-atm-HTTP_Client_connector_d64af80e-febe-4cd2-89ad-e3d0fc53c502.md).

:::

## Path parameters 

**accountID**  
ID of the account

**repositoryID**  
ID of the repository. You can obtain this ID from the repository page URL in the service user interface or from the response to a Create Repository request.

## Responses 
-   200 \(OK\) If you deleted the specified repository successfully, the response body contains true.

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

-   400 \(Bad Request\) you cannot delete a repository when it contains a currently deployed model.

    ``` xml
    <error>
       <message>The specified repository cannot be deleted because a model is 
         deployed to it.</message>
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