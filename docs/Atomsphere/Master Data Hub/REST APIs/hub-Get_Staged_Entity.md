# Get Staged Entity 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-f5b0857c-c16e-4c67-ad06-e6319a463d3e"/>
</head>


The Get Staged Entity operation allows the authenticated user to retrieve a single staged entity from a designated staging area in a repository. This request is associated with a particular source in a given universe (deployed model).

## Basic authentication 

-   To perform this operation as an update using Basic auth, send an **HTTP GET** request to:

    `https://<host>:<port>/mdm/universes/<universeID>/sources/<sourceId>/staging/<stagingID>/<stagedEntityID>`

## JWT authentication

- To perform this operation as an update using JSON Web Token (JWT) auth, send an **HTTP GET** request to:
  `https://<host>:<port>/mdm/universes/<universeID>/sources/<sourceID>/staging/<stagingID>/<stagedEntityID>?repositoryId=<repository ID>`

You must have the following MDM privileges: 

- With the Advanced Security feature on your account:
    - **MDM - Stewardship** with the **View Staged Data** Hub role entitlement for the queried repository
    or
    - **MDM - Stewardship Management**
- Without Advanced Security:
    - **MDM - Stewardship**


## Path parameters 

**universeID**  
ID of the universe

**sourceID**<br></br>
ID of the source associated with the staged entity

**stagingID**<br></br>

ID of the staging area. Obtain the ID from the deployed model's Source's tab or the [Query Staged Entities](/docs/Atomsphere/Master%20Data%20Hub/REST%20APIs/hub-Query_Staged_Entities.md) endpoint. Case sensitive

**stagedEntityID**<br></br>
The ID of the staged entity which is assigned when the source contributes the entity. This is a different ID than the source entity ID. Obtain the ID from the [Query Staged Entities](/docs/Atomsphere/Master%20Data%20Hub/REST%20APIs/hub-Query_Staged_Entities.md) endpoint

## Query parameters 

**repositoryId** <br></br>
ID of the repository. Case sensitive. Required with JWT authentication only. You can obtain the repository ID from the URL after navigating to the repository in the user interface.


## Responses 

-   200 (OK) The body of the response is XML. The root element is `<StagedEntity>`. The element has the following attributes:

    - **Id** - staged entity Id
    - **sourceEntityId** - source entity Id
    - **createdDate** - date the staged entity was created
    - **state** - staging result status. It indicates if the entity would be quarantined  after being committed to the repository

  The entity has the following elements:

    - `message` - details the quarantine reason if entity would result in a quarantine. If entity would not be quarantined, no message displays. 
    - `entity` - details the fields and values for the contributed source entity. 

    Sample response body:

    ```xml
      <StagedEntity id="5" sourceEntityId="S1" createdDate="2024-04-30T10:44:09Z" state="QUARANTINED.POSSIBLE_DUPLICATE">
        <message>The entity is potentially a duplicate of a golden record(s) already linked to an entity in the source system.</message>
        <entity>
            <customer>
                <first_name>William</first_name>
                <lastname>Fiction</lastname>
                 <state>CA</state>
            </customer>
        </entity>
    </StagedEntity>
      ```

- 400 (Bad Request) The universeID parameter value contains only space characters. Sample response body:

   ```xml
   <error>
      <message>The given universe id is blank.</message>
   </error> 
   ```

- 400 (Bad Request) The request does not specify a staging area ID. Sample response body:
      
   ```xml
   <error>
      <message>The given staging id is blank.</message>
   </error>
   ```

- 404 (Not Found) universeID does not identify a universe hosted in the specified repository. Sample response body:

   ```xml
   <error>
      <message>A universe with id 'ac11cc59-c77a-4afe-8c92-ed86a7daabec' does not exist.</message>
   </error> 
   ```

- 404 (Not Found) The staging area ID specified in the request does not identify a staging area for the specified source in the specified universe. Sample response body:

   ```xml
   <error>
      <message>A staging area with id SFStaging was not found in universe: ac11cc59-c77a-4afe-8c92-ed86a7daabec</message>
   </error>
   ```

- 404 (Not Found) universeID does not identify a universe under the authenticated account. Sample response body:
    ```xml
        <error>
            <message>A universe with id 'ac11cc59-c77a-4afe-8c92-ed86a7daabec' does not exist.</message>
             <message>Universe definition with id 'ac11cc59-c77a-4afe-8c92-ed86a7daabec' could not be loaded from plugin component directory 'plugins/mdm/bundles/ac11cc59-c77a-4afe-8c92-ed86a7daabec'.</message>
        </error> 
    ```

- 401 (Invalid Credentials) JWT auth token is expired. Sample response body:
   ```xml
   <body>
   <h2>HTTP ERROR 401</h2>
      <p>Problem accessing /mdm/universes. Reason:
      <pre>Invalid credentials.</pre>
   </p>
   </body>
   ```

- 403 (You do not have permissions to access this resource) User does not have the required MDM privilege to perform the action. Applicable to JWT auth only. Sample response body:

   ```xml
   <error><message>You do not have permissions to access this resource.</message></error>
   ```