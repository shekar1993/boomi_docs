# Get Repositories Summary 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-c51f7f29-7ce6-4550-a7e5-87f32edbcbf1"/>
</head>

The Get Repositories Summary operation retrieves summary data for the repositories and universes \(domains\) under an account accessible to the authenticating user.

To perform this operation, send an HTTP GET request to:

`https://api.boomi.com/mdm/api/rest/v1/<accountID>/repositories`

:::note

This operation requires the authenticating user to have the **MDM - View Repositories** privilege and the **API Access** privilege.

You can implement requests for this operation in processes using the [HTTP Client connector](/docs/Atomsphere/Integration/Connectors/r-atm-HTTP_Client_connector_d64af80e-febe-4cd2-89ad-e3d0fc53c502.md), as demonstrated by example 1 in the sample process [: Get Account Summary Data](https://platform.boomi.com/#build;processLibrary=7a24b7d3-a197-410c-aa98-1a2519896ffa), which you can install in your account from the process library in Integration.

:::

## Path parameters 

**accountID**  
ID of the account


## Responses 

-   200 \(OK\) The root `<mdm:Repositories>` element contains an `<mdm:Repository>` element for each of the account’s repositories. Each `<mdm:Repository>` element contains a `<mdm:Universe>` element for each universe hosted in that repository. These elements have a name attribute, which is the name of the repository or universe, an id attribute, which is the repository or universe’s unique ID, and an atomName attribute, which is the Atom or Atom Cloud name hosting the repository. These elements have the following child elements, all of which represent counts. In `<mdm:Repository>`, the counts are aggregates for the universes hosted in that repository.

      - `atomName` - Atom or Atom Cloud hosting the repository
      - `name` - name of the deployed model (universe)
      - `id` - ID of the universe

         -   `<mdm:goldenRecords>` — active golden records

         -   `<mdm:quarantinedRecords>` — active quarantine entries

         -   `<mdm:pendingBatches>` — pending incoming batches

         -   `<mdm:pendingBatchRecords>` — entities in pending incoming batches \(aggregate\)

         -   `<mdm:pendingChannelUpdates>` — pending channel update requests \(aggregate for the universe’s sources\)

         -   `<mdm:heldChannelUpdates>` — held channel update requests \(aggregate for the universe’s sources\)

         -   `<mdm:endDatedRecords>` — end-dated golden records

    Sample response body:

    ```xml
    <mdm:Repositories xmlns:mdm="http://mdm.api.platform.boomi.com/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
       <mdm:Repository atomName="HubCloudAtom"  id="dbe797ff-6d6f-44e9-acd9-d77494a44b15" name="MyCompany Master">
          <mdm:goldenRecords>36</mdm:goldenRecords>
        <mdm:quarantinedRecords>3</mdm:quarantinedRecords>
        <mdm:pendingBatches>0</mdm:pendingBatches>
        <mdm:pendingBatchRecords>0</mdm:pendingBatchRecords>
        <mdm:pendingChannelUpdates>11</mdm:pendingChannelUpdates>
        <mdm:heldChannelUpdates>1</mdm:heldChannelUpdates>
        <mdm:endDatedRecords>1</mdm:endDatedRecords>
        <mdm:Universe id="e8a9ffa1-ae7c-48f6-b0f7-c4f23a62823c" name="country">
            <mdm:goldenRecords>1</mdm:goldenRecords>
            <mdm:quarantinedRecords>0</mdm:quarantinedRecords>
            <mdm:pendingBatches>0</mdm:pendingBatches>
            <mdm:pendingBatchRecords>0</mdm:pendingBatchRecords>
            <mdm:pendingChannelUpdates>0</mdm:pendingChannelUpdates>
            <mdm:heldChannelUpdates>0</mdm:heldChannelUpdates>
            <mdm:endDatedRecords>0</mdm:endDatedRecords>
        </mdm:Universe>
          <mdm:Universe id="8a932b1c-e8d0-496f-afa3-d20d1aa80c93" name="Customer">
            <mdm:goldenRecords>1</mdm:goldenRecords>
            <mdm:quarantinedRecords>0</mdm:quarantinedRecords>
            <mdm:pendingBatches>0</mdm:pendingBatches>
            <mdm:pendingBatchRecords>0</mdm:pendingBatchRecords>
            <mdm:pendingChannelUpdates>2</mdm:pendingChannelUpdates>
            <mdm:heldChannelUpdates>1</mdm:heldChannelUpdates>
            <mdm:endDatedRecords>0</mdm:endDatedRecords>
        </mdm:Universe>
       </mdm:Repository>
    </mdm:Repositories>
    ```

- 400 (Bad Request) The authenticating user does not have the API Access and MDM - View Repositories privileges required for this operation. Sample response body:

   ```xml
   <error>
      <message>The authenticated user does not have access rights to this functionality</message>
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
