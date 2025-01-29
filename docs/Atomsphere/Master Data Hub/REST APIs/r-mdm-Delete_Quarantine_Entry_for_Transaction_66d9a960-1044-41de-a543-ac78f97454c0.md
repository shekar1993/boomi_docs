# Delete Quarantine Entry for Transaction 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-66d9a960-1044-41de-a543-ac78f97454c0"/>
</head>


The Delete Quarantine Entry for Transaction operation deletes the quarantine entry associated with a specific transaction from a universe \(domain\) hosted in a specified repository under a specified account accessible to the authenticating user, provided the user is entitled to delete the entry.

:::note

Retrieval of the quarantine entry is subject to access restrictions imposed by the authenticating user’s tag-based entitlements.

:::

To perform this operation, send an HTTP POST request to:

`https://api.boomi.com/mdm/api/rest/v1/<accountID>/repositories/<repositoryID>/universes/<universeID>/quarantine/<transactionID>/delete`

:::note

This operation requires the authenticating user to have the **API Access** privilege and the **Delete Quarantine** entitlement.

You can implement requests for this operation in processes using the [HTTP Client connector](/docs/Atomsphere/Integration/Connectors/r-atm-HTTP_Client_connector_d64af80e-febe-4cd2-89ad-e3d0fc53c502.md), as demonstrated by example 2 in the sample process [Hub: Delete Quarantine Entries](https://platform.boomi.com/#build;processLibrary=7a24b7d3-a197-410c-aa98-1a2519896ffa), which you can install in your account from the process library in Integration.

:::

## Path parameters 

**accountID**  
ID of the account

**repositoryID**  
ID of the repository

**universeID**  
ID of the universe

**transactionID**  
ID of the transaction, which you can obtain from a Query Quarantine Entries operation.


## Responses 

-   200 \(OK\) The body of the response is XML. The root element is `<mdm:DeleteResponse>`. Within that element `<mdm:success>` contains a Boolean value indicating the result of the delete operation — true for success.

    Sample response body for a successful operation:

    ```xml
    <mdm:DeleteResponse xmlns:mdm="http://mdm.api.platform.boomi.com/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
      <mdm:success>true</mdm:success>
    </mdm:DeleteResponse>
    ```

- 400 (Bad Request) The authenticating user does not have the API Access privilege and the Delete Quarantine entitlement required for this operation. Sample response body:

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

- 403 (Forbidden) Authentication failure. Sample response body:

  ```xml
  <UserMessage id="error.user.login" type="error">
    <Data>Incorrect user name and password combination.</Data>
  </UserMessage>
  ```

- 403 (Forbidden) One or more path parameter values are omitted. Sample response body:

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

- 404 (Not Found) *transactionID* does not identify a quarantine entry in the specified universe. Sample response body:

  ```xml
  <error>
    <message>A quarantined entity version with id '42dbadd8-d226-4c4d-abe3-1dae8636e77a' does not exist.</message>
  </error>
  ```