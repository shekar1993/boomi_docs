# Get Repository Summary 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-75f0ccbb-5d54-4db3-86b5-247b15dc1d1e"/>
</head>


The Get Repository Summary operation retrieves summary data for a repository and its hosted universes \(domains\) under an account accessible to the authenticating user.

To perform this operation, send an HTTP GET request to:

`https://api.boomi.com/mdm/api/rest/v1/<accountID>/repositories/<repositoryID>`

:::note

This operation requires the authenticating user to have the **MDM - View Repositories** privilege and the **API Access** privilege.

You can implement requests for this operation in processes using the [HTTP Client connector](/docs/Atomsphere/Integration/Connectors/r-atm-HTTP_Client_connector_d64af80e-febe-4cd2-89ad-e3d0fc53c502.md), as demonstrated by example 2 in the sample process [ Hub: Get Account Summary Data](https://platform.boomi.com/#build;processLibrary=7a24b7d3-a197-410c-aa98-1a2519896ffa), which you can install in your account from the process library in Integration.

:::

## Path parameters 

**accountID**  
ID of the account

**repositoryID**  
ID of the repository


## Responses 

-   200 \(OK\) The root `<mdm:Repository>` element contains a `<mdm:Universe>` element for each universe hosted in the specified repository. These elements have a name attribute, which is the name of the repository or universe, an id attribute, which is the repository or universe’s unique ID, and an atomName attribute, which is the Atom or Atom Cloud name hosting the repository. These elements have the following child elements, all of which represent counts. In `<mdm:Repository>`, the counts are aggregates for the universes hosted in the specified repository.
      - `atomName` - name of the Atom or Atom Cloud
      - `id` - ID of the universe.
      - `name` - name of the deployed model (universe)
         -   `<mdm:goldenRecords>` — active golden records

         -   `<mdm:quarantinedRecords>` — active quarantine entries

         -   `<mdm:pendingBatches>` — pending incoming batches

         -   `<mdm:pendingBatchRecords>` — entities in pending incoming batches \(aggregate\)

         -   `<mdm:pendingChannelUpdates>` — pending channel update requests \(aggregate for the universe’s sources\)

         -   `<mdm:heldChannelUpdates>` — held channel update requests \(aggregate for the universe’s sources\)

         -   `<mdm:endDatedRecords>` — end-dated golden records

    Sample response body:

    ```xml
    <mdm:Repository name="MyCompany Master" id="dbe797ff-6d6f-44e9-acd9-d77494a44b15" 
      xmlns:mdm="http://mdm.api.platform.boomi.com/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" atomName="HubCloudAtom" id="2b0626f8-d93d-4afa-bf60-14f9efc314dd" name="MDM">
       <mdm:goldenRecords>832</mdm:goldenRecords>
       <mdm:quarantinedRecords>30</mdm:quarantinedRecords>
       <mdm:pendingBatches>2</mdm:pendingBatches>
       <mdm:pendingBatchRecords>135</mdm:pendingBatchRecords>
       <mdm:pendingChannelUpdates>893</mdm:pendingChannelUpdates>
       <mdm:heldChannelUpdates>12</mdm:heldChannelUpdates>
       <mdm:endDatedRecords>11</mdm:endDatedRecords>
       <mdm:Universe name="Accounts" id="04ea04cc-9df8-4004-bc00-a21b7dede1bb">
          <mdm:goldenRecords>811</mdm:goldenRecords>
          <mdm:quarantinedRecords>21</mdm:quarantinedRecords>
          <mdm:pendingBatches>2</mdm:pendingBatches>
          <mdm:pendingBatchRecords>135</mdm:pendingBatchRecords>
          <mdm:pendingChannelUpdates>876</mdm:pendingChannelUpdates>
          <mdm:heldChannelUpdates>0</mdm:heldChannelUpdates>
          <mdm:endDatedRecords>9</mdm:endDatedRecords>
       </mdm:Universe>
       <mdm:Universe name="Employees" id="1d969a54-49e5-4f75-974a-85869280873d">
          <mdm:goldenRecords>21</mdm:goldenRecords>
          <mdm:quarantinedRecords>9</mdm:quarantinedRecords>
          <mdm:pendingBatches>0</mdm:pendingBatches>
          <mdm:pendingBatchRecords>0</mdm:pendingBatchRecords>
          <mdm:pendingChannelUpdates>17</mdm:pendingChannelUpdates>
          <mdm:heldChannelUpdates>12</mdm:heldChannelUpdates>
          <mdm:endDatedRecords>2</mdm:endDatedRecords>
       </mdm:Universe>
       </mdm:Repository>
    
    ```

- 400 (Bad Request) The authenticating user does not have the API Access and MDM - View Repositories privileges required for this operation. Sample response body:

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
