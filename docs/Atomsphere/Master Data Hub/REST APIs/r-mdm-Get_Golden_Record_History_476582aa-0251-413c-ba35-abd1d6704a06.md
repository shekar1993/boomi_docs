# Get Golden Record History 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-476582aa-0251-413c-ba35-abd1d6704a06"/>
</head>


The Get Golden Record History operation retrieves the version history of a golden record in a universe \(domain\) under the authenticated account. The historical data about the golden record versions includes the version ID, creation data/time, contributing source, and transaction ID.

## Basic authentication

To perform this operation Basic auth, send an **HTTP GET request** to:

`https://<host>:<port>/mdm/universes/<universeID>/records/<recordID>/history?[latestFirst=<true|false>]&limit=<>&offsetToken=<>`

where

*host* is the host name or IP address of the repository and `<port>`is the port number of the shared HTTP server as configured in the account’s [Atom Management settings](/docs/Atomsphere/Integration/Integration%20management/c-atm-Atom_Management_b38a3a90-d7f6-4df0-8c00-e75a178dfdfa.md).

## JWT authentication

To perform this operation using JWT auth, send an **HTTP GET request** to:

`https://<host>:<port>/mdm/universes/<universeID>/records/<recordID>/history?repositoryId=<repository ID>&[latestFirst=<true|false>]&limit=<>&offsetToken=<>`


You must have the following MDM privileges:

- With the Advanced Security feature on your account:
  - **MDM - Stewardship** with the **View Records** [Hub role entitlement](/docs/Atomsphere/Master%20Data%20Hub/Getting%20started/t-hub-Creating_Hub_Role_Entitlements_06d21275-b0c6-4854-abef-5782326aa85b.md) for the queried repository <br></br>or
  - **MDM - Stewardship Management**

- Without Advanced Security: 
   - **MDM - Stewardship** <br></br>or
   - **MDM - View Data**

Field values are masked if:
- Model fields contain masking configurations
- The request uses JWT authentication
- You do not have permission to view masked data. You can view masked data if you have the **MDM Administrator** or **MDM Privileged Data Steward** role, the **MDM - Reveal Masked Data** privilege, or the **Reveal Masked Data** entitlement.

:::note

You can implement requests for this operation in processes using the [HTTP Client connector](/docs/Atomsphere/Integration/Connectors/r-atm-HTTP_Client_connector_d64af80e-febe-4cd2-89ad-e3d0fc53c502.md), as demonstrated by example 3 in the sample process [Hub: Get Golden Record Information](https://platform.boomi.com/#build;processLibrary=7a24b7d3-a197-410c-aa98-1a2519896ffa), which you can install in your account from the process library in Integration.

:::

## Query parameters 

l**latestFirst**  
- Set to true to request versions in descending order.

- Set to false (the default) to request versions in ascending order.

**limit**  
Maximum number of versions to return per page. Boomi DataHub enforces a maximum of 200 versions per page regardless of the limit value.

**offsetToken**  
Corresponds to the offsetToken value returned from a previous Get Golden Record History request.

**repositoryId** <br></br>
ID of the repository. Case sensitive. Required with JWT authentication only. You can obtain the repository ID from the URL after navigating to the repository in the user interface.

## Path parameters 

**universeID**  
ID of the universe

**recordID**  
ID of the golden

## Responses 

-   200 \(OK\) The body contains the XML representation of the golden record history, version by version. The golden record ID is the grid attribute value of the root element `<RecordHistoryResponse>`. This element also has a totalCount attribute that specifies the total number of versions and a resultCount attribute which specifies the number of versions returned on this “page” of results. The offsetToken attribute is returned only if there are additional versions to retrieve. You can use the returned token in a subsequent Get Golden Record History request to get the next “page” of versions.

    For each version, the root element is the universe name. The element’s attributes are version metadata:

    -   grid — golden record ID.

    -   version — unique version ID.

    -   source — ID of the source that contributed this version.

    -   startdate — creation date and time of this version.

    -   enddate — date and time of the end-dating of this version. Omit this attribute for current versions of active golden records.

    -   enddatesource — source that requested end-dating of the golden record or superseded this version with an update. Omit this attribute for current versions of active golden records.

    -   transactionId — transaction ID for the contribution of this version.

    The child elements correspond to the data fields in the historical golden record version.

    Sample response body for an active golden record:

    ```xml
    <RecordHistoryResponse resultCount="23" grid="d5742c16-5318-4ba7-8815-3267a7a55358" totalCount="823">
       <contact enddate="02-08-2015T14:17:06.000-0400" grid="d5742c16-5318-4ba7-8815-3267a7a55358" 
        source="SF" enddatesource="SF" startdate="02-07-2015T08:36:37.000-0400"
        version="801" transactionId="12345678-9abc-def0-1234-56789abcdef0">
          <id>d5742c16-5318-4ba7-8815-3267a7a55358</id>
          <name>bob</name>
          <city>malvern</city>
          <email>bob@gmail.com</email>
       </contact>
       ...
       <contact grid="d5742c16-5318-4ba7-8815-3267a7a55358" source="SF" 
        startdate="03-14-2016T14:17:07.000-0400" version="823" 
        transactionId="01234567-89ab-cdef-0123-456789abcdef">
          <id>d5742c16-5318-4ba7-8815-3267a7a55358</id>
          <name>bob</name>
          <city>berwyn</city>
          <email>bob@gmail.com</email>
       </contact>
    </RecordHistoryResponse>
    ```

    Sample response body for an end-dated golden record:

    ```xml
    <RecordHistoryResponse resultCount="113" grid="8219b49a-7806-4cdf-b73e-935d9e3a6bb8" totalCount="513">
       <contact enddate="01-03-2014T14:17:06.000-0500" grid="8219b49a-7806-4cdf-b73e-935d9e3a6bb8" 
       source="SF" enddatesource="SF" startdate="08-31-2012T08:36:37.000-0400" 
       version="401" transactionId="3456789a-bcde-f012-3456-789abcdef012">
          <id>8219b49a-7806-4cdf-b73e-935d9e3a6bb8</id>
          <name>eric</name>
          <city>collingswood</city>
          <email>eric@gmail.com</email>
       </contact>
       ...
       <contact enddate="03-14-2016T11:33:27.000-0400" grid="8219b49a-7806-4cdf-b73e-935d9e3a6bb8" 
        source="NS" enddatesource="SF" startdate="03-01-2014T14:17:07.000-0500" version="513"
        transactionId="23456789-abcd-ef01-2345-6789abcdef01">
          <id>8219b49a-7806-4cdf-b73e-935d9e3a6bb8</id>
          <name>eric</name>
          <city>lansdale</city>
          <email>eric@gmail.com</email>
       </contact>
    </RecordHistoryResponse> 
    ```

     Field values are masked if model fields contain masking configurations, the user cannot view masked data, and the request uses JWT authentication. Masking is not applied with basic authentication.

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