# Get Golden Record for Source Entity \(Platform\) 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-0129d720-33a6-473c-978a-3536cfbe66de"/>
</head>


The Get Golden Record for Source Entity operation retrieves the entity corresponding to the golden record linked to a source entity in a universe \(domain\) hosted in a specific repository under an account accessible to the authenticating user, provided the user is entitled to view the record. A [corresponding Repository API endpoint](/docs/Atomsphere/Master%20Data%20Hub/REST%20APIs/hub-Get_Golden_Record_for_Source_Entity_Repository_3da9d02c-21a0-4daf-8d60-539632b6bc00.md) exists.

:::note

Retrieval of the golden record is subject to access restrictions imposed by the authenticating user’s tag-based entitlements.

:::

To perform this operation, send an HTTP GET request to:

`https://api.boomi.com/mdm/api/rest/v1/<accountID>/repositories/<repositoryID>/universes/<universeID>/records/sources/<sourceId>/entities/<entityID>`

:::note

If the specified source is not attached to the universe but the universe has a designated default source and a golden record is linked to an entity with the specified ID in the default source system, the entity that corresponds to that golden record is retrieved.

:::

:::note

This operation requires the authenticating user to have the **API Access** privilege and either the **MDM - View Data** privilege or the **View Records** entitlement.

To see masked data, the user needs either the **MDM - Reveal Masked Data** privilege or the **Reveal Masked Data** entitlement. Read [Setting up user accounts and access](/docs/Atomsphere/Master%20Data%20Hub/Getting%20started/r-mdm-User_Management_5f47b2da-d5cc-4c88-bdfd-0a255d69323a.md) to learn more.

You can implement requests for this operation in processes using the [Boomi Master Data Hub connector](../../Integration/Connectors/r-atm-MDM_connector_ff690a6f-288d-44b3-96fb-e81afb046703.md), as demonstrated by example 1 in the sample process [Hub: Get Master Data by Source](https://platform.boomi.com/#build;processLibrary=7a24b7d3-a197-410c-aa98-1a2519896ffa), which you can install in your account from the process library in Integration.

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

-   200 \(OK\) In the returned entity, the root `mdm:Record` element’s recordId attribute value is the ID of the retrieved golden record. Field values are masked if masking is configured in the model and the user cannot view masked data. Sample response body for active golden record:

    ```xml
    <mdm:Record updatedDate="02-05-2014T08:44:47.000-0400" createdDate="04-23-2012T14:30:26.000-0400" 
      recordId="d5742c16-5318-4ba7-8815-3267a7a55358" xmlns:mdm="http://mdm.api.platform.boomi.com/" 
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
       <mdm:data>
          <contact>
             <id>d5742c16-5318-4ba7-8815-3267a7a55358</id>
             <name>bob</name>
             <city>berwyn</city>
             <email>bob@gmail.com</email>
          </contact>
       </mdm:data>
    </mdm:Record> 
    ```

    If the returned entity represents an end-dated golden record, the root `mdm:Record` element’s endDate attribute value is the golden record’s end-date timestamp. Sample response body for end-dated golden record:

    ```xml
    <mdm:Record endDate="02-05-2014T11:33:27.000-0400" recordId="8219b49a-7806-4cdf-b73e-935d9e3a6bb8" 
      xmlns:mdm="http://mdm.api.platform.boomi.com/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
       <mdm:data>
          <contact>
             <id>8219b49a-7806-4cdf-b73e-935d9e3a6bb8</id>
             <name>bob</name>
             <city>berwyn</city>
             <email>bob@gmail.com</email>
          </contact>
       </mdm:data>
    </mdm:Record>
    ```
      

-   400 (Bad Request) The authenticating user does not have the API Access privilege and either the MDM - View Data privilege or the View Records entitlement required for this operation. Sample response body:

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

-   404 \(Not Found\) *sourceID* and *entityID* do not identify a source entity to which an active or end-dated golden record in the specified universe that the authenticating user is entitled to view is linked. Sample response body:

    ```xml
    <error>
       <message>The entity id '200' for source 'SF' does 
         not contribute to a golden record in universe '851a6a64-6a88-4916-a5b7-d6a974d54318'.</message>
    </error> 
    ```

    