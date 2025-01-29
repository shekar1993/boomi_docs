# Get Golden Record for Source Entity \(Repository\) 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-3da9d02c-21a0-4daf-8d60-539632b6bc00"/>
</head>


The Get Golden Record for Source Entity operation retrieves the entity corresponding to the golden record linked to a source entity in a universe \(domain\) under the authenticated account. A [corresponding Platform API endpoint](/docs/Atomsphere/Master%20Data%20Hub/REST%20APIs/r-mdm-Get_Golden_Record_for_Contributing_Source_Entity_0129d720-33a6-473c-978a-3536cfbe66de.md) exists.

## Basic authentication

To perform this operation using Basic auth, send an **HTTP GET** request to:

`https://<host>:<port>/mdm/universes/<universeID>/records/sources/<sourceID>/entities/<entityID>`

## JWT authentication

To perform this operation using JSON Web Token (JWT) auth, send an **HTTP GET** request to:

`https://<host>:<port>/mdm/universes/<universeID>/records/sources/<sourceID>/entities/<entityID>?repositoryId=<repository ID>`

You must have the following MDM privileges:

- With the Advanced Security feature on your account:
  - **MDM - Stewardship** with **View Records** [Hub role entitlement](/docs/Atomsphere/Master%20Data%20Hub/Getting%20started/t-hub-Creating_Hub_Role_Entitlements_06d21275-b0c6-4854-abef-5782326aa85b.md) for the queried repository <br></br>or
  - **MDM - Stewardship Management**

- Without Advanced Security: 
   - **MDM - Stewardship** <br></br>or
   - **MDM - View Data**

Field values are masked if:
- Model fields contain masking configurations
- The request uses JWT authentication
- You do not have permission to view masked data. You can view masked data if you have the **MDM Administrator** or **MDM Privileged Data Steward** role, the **MDM - Reveal Masked Data** privilege, or the **Reveal Masked Data** entitlement.

## Path parameters 

**universeID**  
ID of the universe

**sourceID**  
ID of the source

**entityID**  
ID of the source entity. It must be URL encoded if it contains special characters.

## Query parameters

**repositoryId** <br></br>
ID of the repository. Case sensitive. Required with JWT authentication only. You can obtain the repository ID from the URL after navigating to the repository in the user interface.

## Responses


-   200 \(OK\) In the returned entity, the root element name is the universe name. The child elements correspond to the fields in the represented golden record; each element contains the corresponding field value.

    If the returned entity represents an active golden record, the root element’s attributes are as follows:

    -   *createddate* — timestamp of the creation of the golden record.

    -   *grid* — ID of the golden record.

    -   *updateddate* — timestamp of the most recent update of the golden record.

    -   *source* — ID of the source whose entity contribution resulted in the golden record’s creation.

    Sample response body for active golden record:

    ```xml
    <contact createddate="04-23-2012T14:30:26.000-0400" grid="d5742c16-5318-4ba7-8815-3267a7a55358" 
     updateddate="02-05-2014T08:44:47.000-0400" source="SF">
       <id>d5742c16-5318-4ba7-8815-3267a7a55358</id>
       <name>bob</name>
       <city>berwyn</city>
       <email>bob@gmail.com</email>
    </contact>
    ```
    Field values are masked if model fields contain masking configurations, the user cannot view masked data, and the request uses JWT authentication. Masking is not applied with basic authentication.

    If the returned entity represents an end-dated golden record, the root element’s additional attributes are as follows:

    -   *enddate* \(in lieu of createddate and updateddate\)— time stamp of the end-dating of the golden record.

    -   *enddatesource* — source that requested end-dating of the golden record. A value of \*MDM\* indicates the end-dating request was a user action within .

    -   *startdate* — time stamp of the creation of the end-dated version of the golden record.

    -   *version* — unique ID of the end-dated version.

    -   *transactionId* — transaction ID for the contribution of the end-dated version.

    Sample response body for end-dated golden record:

    ```xml
    <contact enddate="09-24-2019T15:34:07.000-0400" grid="8219b49a-7806-4cdf-b73e-935d9e3a6bb8" source="SF" 
     enddatesource="SF" startdate="01-07-2016T15:59:05.000-0500" version="723" 
     transactionId="ce62727a-8d80-4fe3-b6de-52a43c3fe856">
       <id>8219b49a-7806-4cdf-b73e-935d9e3a6bb8</id>
       <name>pete</name>
       <city>west chester</city>
       <email>pete@gmail.com</email>
    </contact>
    ```

-   400 (Bad Request) The *universeID* parameter value contains only space characters. Sample response body:

  ```xml
  <error>
    <message>The given universe id is blank.</message>
  </error> 
  ```

- 404 (Not Found) *universeID* does not identify a universe under the authenticated account. Sample response body:

  ```xml
  <error>
    <message>A universe with id 'ac11cc59-c77a-4afe-8c92-ed86a7daabec' does not exist.</message>
    <message>Universe definition with id 'ac11cc59-c77a-4afe-8c92-ed86a7daabec' could not be loaded from plugin component directory 'plugins/mdm/bundles/ac11cc59-c77a-4afe-8c92-ed86a7daabec'.</message>
  </error> 
  ```

-   404 \(Not Found\) sourceID and entityID do not identify a source entity to which an active or end-dated golden record in the specified universe. Sample response body:

    ```xml
    <error>
       <message>The specified source entity '200' does 
         not contribute to a golden record in universe '851a6a64-6a88-4916-a5b7-d6a974d54318'.</message>
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