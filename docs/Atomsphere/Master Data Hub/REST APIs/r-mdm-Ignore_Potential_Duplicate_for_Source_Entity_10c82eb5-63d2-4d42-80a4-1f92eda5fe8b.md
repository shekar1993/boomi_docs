# Ignore Potential Duplicate for Source Entity 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-10c82eb5-63d2-4d42-80a4-1f92eda5fe8b"/>
</head>


The Ignore Potential Duplicate for Source Entity operation resolves a quarantine entry for a potential duplicate matching error. The quarantine entry is associated with a source entity from a universe \(domain\) hosted in a specific repository under an account accessible to the authenticating user, provided the user is entitled to resolve the entry.

The expected resolution is the deletion of the quarantine entry and creation of a golden record, with the existence of a potential duplicate golden record\(s\) effectively ignored.

:::note

Retrieval of the quarantine entry is subject to access restrictions imposed by the authenticating user’s tag-based entitlements.

:::

To perform this operation, send an HTTP POST request to

`https://api.boomi.com/mdm/api/rest/v1/<accountID>/repositories/<repositoryID>/universes/<universeID>/quarantine/sources/<sourceID>/entities<entityID>/createDuplicate`

:::note

This operation requires the authenticating user to have the **API Access** privilege and the **Match Quarantine** entitlement.

You can implement requests for this operation in processes using the [HTTP Client connector](/docs/Atomsphere/Integration/Connectors/r-atm-HTTP_Client_connector_d64af80e-febe-4cd2-89ad-e3d0fc53c502.md), as demonstrated by example 1 in the sample process [ Hub: Resolve Quarantine Entries](https://platform.boomi.com/#build;processLibrary=7a24b7d3-a197-410c-aa98-1a2519896ffa), which you can install in your account from the process library in Integration.

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

**entityID**  
ID of the source entity


## Responses 

-   200 \(OK\) The body of the response is XML. The root element is `<mdm:MatchResolveResponse>`. Within that element `<mdm:success>` contains a Boolean value indicating the deletion of the retrieved quarantine entry — true for success. For a successful deletion, the `<mdm:transaction>` element indicates the subsequent creation of a golden record or quarantine entry.

    Sample response body for creation of a golden record:

    ```xml
    <mdm:MatchResolveResponse xmlns:mdm="http://mdm.api.platform.boomi.com/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
      <mdm:success>true</mdm:success>
      <mdm:transaction stateDetail="CREATED" state="COMPLETED" updatedDate="2016-12-13T14:51:39.201Z" id="39cf510e-460b-4857-b615-70b63844e84e"/>
    </mdm:MatchResolveResponse>
    ```

    Sample response body for creation of a quarantine entry:

    ```xml
    <mdm:MatchResolveResponse xmlns:mdm="http://mdm.api.platform.boomi.com/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
      <mdm:success>true</mdm:success>
      <mdm:transaction id="6dcec710-63f9-48db-9b1b-0409237b6858" updatedDate="2016-12-08T18:39:25.178Z" state="QUARANTINED" stateDetail="REQUIRES_APPROVAL"/>
    </mdm:MatchResolveResponse>
    ```

- 400 (Bad Request) The authenticating user does not have the API Access privilege and the Match Quarantine entitlement required for this operation. Sample response body:

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

- 404 (Not Found) *sourceID* does not identify a source attached to the specified universe. Sample response body:

  ```xml
  <error>
    <message>Source with code 'FOO' does not exist under universe '851a6a64-6a88-4916-a5b7-d6a974d54318'.</message>
  </error> 
  ```

- 404 (Not Found) *entityID* does not identify a quarantine entry for the specified source. Sample response body:

  ```xml
  <error>
    <message>The entity '1' from source 'NS' for universe 'ac11cc59-c77a-4afe-8c92-ed86a7daabec' is not quarantined.</message>
  </error>
  ```

