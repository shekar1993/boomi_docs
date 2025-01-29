# Get Universe Summary 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-9c0d97d1-f687-4908-92f7-e910dc4c409a"/>
</head>


The Get Universe Summary operation retrieves summary data for a universe \(domain\) hosted in a repository under an account accessible to the authenticating user.

To perform this operation, send an HTTP GET request to:

`https://api.boomi.com/mdm/api/rest/v1/<accountID>/repositories/<repositoryID>/universes/<universeID>`

:::note

This operation requires the authenticating user to have the **MDM - View Repositories** and **API Access** privileges.

You can implement requests for this operation in processes using the [HTTP Client connector](/docs/Atomsphere/Integration/Connectors/r-atm-HTTP_Client_connector_d64af80e-febe-4cd2-89ad-e3d0fc53c502.md), as demonstrated by example 3 in the sample process [ Hub: Get Account Summary Data](https://platform.boomi.com/#build;processLibrary=7a24b7d3-a197-410c-aa98-1a2519896ffa), which you can install in your account from the process library in Integration.

:::

## Path parameters 

**accountID**  
ID of the account

**repositoryID**  
ID of the repository

**universeID**  
ID of the universe


## Responses 

-   200 \(OK\) The root `<mdm:Universe>` element has a name attribute, which is the name of the universe, and an idattribute, which is the universe’s unique ID. This element has the following child elements, all of which represent counts:

    -   `<mdm:goldenRecords>` — active golden records

    -   `<mdm:quarantinedRecords>` — active quarantine entries

    -   `<mdm:pendingBatches>` — pending incoming batches

    -   `<mdm:pendingBatchRecords>` — entities in pending incoming batches \(aggregate\)

    -   `<mdm:pendingChannelUpdates>` — pending channel update requests \(aggregate for the universe’s sources\)

    -   `<mdm:heldChannelUpdates>` — held channel update requests \(aggregate for the universe’s sources\)

    -   `<mdm:endDatedRecords>` — end-dated golden records

    Sample response body:

    ```xml
    <mdm:Universe name="Accounts" id="04ea04cc-9df8-4004-bc00-a21b7dede1bb" xmlns:mdm="http://mdm.api.platform.boomi.com/" 
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
       <mdm:goldenRecords>811</mdm:goldenRecords>
       <mdm:quarantinedRecords>21</mdm:quarantinedRecords>
       <mdm:pendingBatches>2</mdm:pendingBatches>
       <mdm:pendingBatchRecords>135</mdm:pendingBatchRecords>
       <mdm:pendingChannelUpdates>876</mdm:pendingChannelUpdates>
       <mdm:heldChannelUpdates>0</mdm:heldChannelUpdates>
       <mdm:endDatedRecords>9</mdm:endDatedRecords>
    </mdm:Universe>
    
    ```

- 400 (Bad Request) The authenticating user does not have the API Access and MDM - View Repositories privileges required for this operation. Sample response body:

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
