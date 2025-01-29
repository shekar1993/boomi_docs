# Delete Source 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-2ebca5d9-cef2-4f61-b690-0037e2c2ad4f"/>
</head>


The Delete Source operation deletes a specified source under an account accessible to the authenticated user.

To perform this operation, send an HTTP DELETE request with an empty request body to:

`https://api.boomi.com/mdm/api/rest/v1/<accountID>/sources/<sourceID>`

:::note

You cannot delete an embedded source in a model or attached to a universe \(domain\).

:::

:::note

This operation requires the authenticating user to have the **MDM - Source Management** privilege in addition to the **API Access** privilege.

You can implement requests for this operation in processes using the [HTTP Client connector](/docs/Atomsphere/Integration/Connectors/r-atm-HTTP_Client_connector_d64af80e-febe-4cd2-89ad-e3d0fc53c502.md).

:::

## Path parameters 

**accountID**  
ID of the account

**sourceID**  
ID of the source


## Responses

-   200 \(OK\) If you deleted the specified source successfully, the response body contains true.

-  400 (Bad Request) The authenticating user does not have the API Access and MDM - Source Management privileges required for this operation. Sample response body:

    ```xml
    <error>
        <message>The authenticated user does not have access rights to this functionality</message>
    </error>
    ```

- 400 (Bad Request) sourceID does not identify a source that exists in the specified account. Sample response body:

    ```xml
    <error>
        <message>A source with ID 'WD' does not exist in this account.</message>
    </error>
    ```

-   400 \(Bad Request\) sourceId identifies a source that cannot be deleted because it is embedded in a model or attached to a universe \(domain\). Sample response body:

    ``` xml
    <error>
        <message>This source is in use and cannot be deleted.</message>
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