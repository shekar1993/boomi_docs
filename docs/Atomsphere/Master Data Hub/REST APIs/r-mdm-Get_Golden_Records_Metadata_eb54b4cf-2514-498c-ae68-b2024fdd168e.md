# Get Golden Record’s Metadata 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-eb54b4cf-2514-498c-ae68-b2024fdd168e"/>
</head>
The Get Golden Record’s Metadata operation retrieves the metadata for a golden record in a universe (domain) under the authenticated account. The metadata includes the record ID, end date (if applicable), and source link information, including the source name, entity ID, and link date.

## Basic authentication

To perform this operation using Basic auth, send an HTTP GET request to:

`https://<host>:<port>/mdm/universes/universeID/records/<recordID>/meta`

where

`host` is the host name or IP address of the repository and `port` is the port number of the shared HTTP server as configured in the account’s [Atom Management settings](/docs/Atomsphere/Integration/Integration%20management/c-atm-Atom_Management_b38a3a90-d7f6-4df0-8c00-e75a178dfdfa.md).

## JWT authentication

To perform this operation using JSON Web Token (JWT) auth, send an HTTP GET request to:

`https://<host>:<port>/mdm/universes/universeID/records/<recordID>/meta?repositoryId=<repository ID>`

You must have the following MDM privileges:

- With the Advanced Security feature on your account:
  - **MDM - Stewardship** with the **View Records** [Hub role entitlement](/docs/Atomsphere/Master%20Data%20Hub/Getting%20started/t-hub-Creating_Hub_Role_Entitlements_06d21275-b0c6-4854-abef-5782326aa85b.md) for the queried repository <br></br>or
  - **MDM - Stewardship Management**

- Without Advanced Security: 
   - **MDM - Stewardship** <br></br>or
   - **MDM - View Data**

:::note

You can implement requests for this operation in processes using the [HTTP Client connector](/docs/Atomsphere/Integration/Connectors/r-atm-HTTP_Client_connector_d64af80e-febe-4cd2-89ad-e3d0fc53c502.md), as demonstrated by example 2 in the sample process [Hub: Get Golden Record Information](https://platform.boomi.com/#build;processLibrary=7a24b7d3-a197-410c-aa98-1a2519896ffa), which you can install in your account from the process library inIntegration.

:::

## Query parameters

**repositoryId** <br></br>
ID of the repository. Case sensitive. Required with JWT authentication only. You can obtain the repository ID from the URL after navigating to the repository in the user interface.

## Path parameters 

**universeID**  
ID of the universe

**recordID**  
ID of the golden record



## Responses 

-   200 \(OK\) In the retrieved representation of the specified golden record’s metadata, the root element `Record` has the following attributes:

    -   recordId— ID of the golden record

    -   endDate — if you end-date the golden record, it includes this attribute, and its value is the golden record’s end-date time stamp.

    The `links` element represents the golden record’s established links to source entities, each of which is represented by a `link` element which has the following attributes:

    -   source — source’s user-specified unique ID in Boomi DataHub

    -   entityId — source entity ID

    -   establishedDate — time stamp of the establishment of the link

    Sample response body for an active golden record:

    ```xml
    <Record recordId="d5742c16-5318-4ba7-8815-3267a7a55358">
       <links>
          <link source="SF" entityId="968" establishedDate="2019-05-11T14:45:33Z"/>
          <link source="NS" entityId="693" establishedDate="2019-05-11T16:13:03Z"/>
       </links>
    </Record>
    
    ```

    Sample response body for an end-dated golden record:

    ```xml
    <Record recordId="44158fa7-954a-4bfa-8115-1965384ce5e9" endDate="2019-06-08T09:34:50Z">
       <links>
          <link entityId="822" source="SF" establishedDate="2019-05-11T12:10:42Z"/>
       </links>
    </Record>
    
    ```

- 400 (Bad Request) The *universeID* parameter value contains only space characters. Sample response body:

   ```xml
   <error>
      <message>The given universe id is blank.</message>
   </error> 
   ```

- 400 (Bad Request) The *recordID* parameter value contains only space characters. Sample response body:

   ```xml
   <error>
      <message>The given record id is blank.</message>
   </error> 
   ```

- 404 (Not Found) *universeID* does not identify a universe under the authenticated account. Sample response body:

   ```xml
   <error>
      <message>A universe with id 'ac11cc59-c77a-4afe-8c92-ed86a7daabec' does not exist.</message>
      <message>Universe definition with id 'ac11cc59-c77a-4afe-8c92-ed86a7daabec' could not be loaded from plugin component directory 'plugins/mdm/bundles/ac11cc59-c77a-4afe-8c92-ed86a7daabec'.</message>
   </error> 
   ```

- 404 (Not Found) *recordID* does not identify an active or end-dated golden record in the specified universe. Sample response body:

   ```xml
   <errors>
      <error>A record with id '1' does not exist.</error>
   </errors> 
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