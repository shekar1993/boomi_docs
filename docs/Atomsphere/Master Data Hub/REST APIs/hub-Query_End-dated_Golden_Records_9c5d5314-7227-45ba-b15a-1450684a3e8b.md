# Query End-dated Golden Records 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-9c5d5314-7227-45ba-b15a-1450684a3e8b"/>
</head>

The Query End-dated Golden Records operation sends a query of end-dated golden records in a specific universe \(domain\) under the authenticated account. This operation does not support filtering. Querying end-dated records lets you review the records marked for deletion before you permanently delete them since you cannot restore a [purged](/docs/Atomsphere/Master%20Data%20Hub/REST%20APIs/hub-Purge_Multiple_Golden_Records_cfca7eea-9530-4b1e-8b51-d59418451491.md).

## Basic authentication

To perform this operation using Basic auth, send an **HTTP POST** request with an empty request body to

`https://<host>:<port>/mdm/universes/<universeID>/records/enddated`

where

*host* is the host name or IP address of the repository and `port` is the port number of the shared HTTP server as configured in the account’s [Atom Management settings](/docs/Atomsphere/Integration/Integration%20management/c-atm-Atom_Management_b38a3a90-d7f6-4df0-8c00-e75a178dfdfa.md).

:::note

You can activate Accelerated Query when you have 100,000 or more golden records in a deployed model (universe). This feature improves query performance. Read [Activating Accelerated Query](/docs/Atomsphere/Master%20Data%20Hub/Stewardship/hub-accelerated_query.md) to learn more.

:::

## JWT authentication

To perform this operation using JSON Web Token (JWT) auth, send an **HTTP POST** request with an empty request body to:

`https://<host>:<port>/mdm/universes/<universeID>/records/enddated?repositoryId=<repository ID>`

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

## Path parameters 

**universeID**  
ID of the universe

## Query parameters 

**limit**  
(optional) Maximum number of query results. 200 is the maximum meaningful value and the default.

**offsetToken**  
(optional) Used for paging. Refer to the `<offsetToken>` returned from a previous Query End-dated Golden Records request.

**repositoryId** <br></br>
ID of the repository. Case sensitive. Required with JWT authentication only. You can obtain the repository ID from the URL after navigating to the repository in the user interface.


## Responses 

-   200 \(OK\) The body contains the XML representation of the query results. It returns a maximum of 200 results per request unless the limit query parameter for a given request specifies a lower maximum number of results. The root element `<RecordQueryResponse>` has a resultCount attribute that specifies the number of end-dated golden records returned and a totalCount attribute that specifies the total number of end-dated records. You can use the returned offsetToken attribute value in a subsequent Query End-dated Golden Records request to get the next “page” of results.

    Each `<Record>` element represents an end-dated golden record. The recordIdattribute value is the golden record ID.

    -   `<Record>` has the child element `<Fields>`.

    -   Within `<Fields>`, the root element has the same name as the root element name in the universe.

    -   That element’s child elements correspond to the fields in the universe’s model. Each such element contains the field value.

    Field values are masked if model fields contain masking configurations, the user cannot view masked data, and the request uses JWT authentication. Masking is not applied with basic authentication. This is a sample response body:

    ```xml
    <mdm:RecordQueryResponse resultCount="200" totalCount="812" offsetToken="MjAw">
       <Record recordId="cd9fc80d-1997-4670-83a7-39de2e287134">
          <Fields>
             <account>
                <account_name>Hosted Problems</account_name>
                <phone>311 555-0989</phone>
                <website>http://www.hostedproblems.biz/</website>
             </account>
          </Fields>
       </Record>
       <Record recordId="da306e61-1c58-400f-a447-4116c52b4759">
          <Fields>
             <account>
                <account_name>Pillars by Phil</account_name>
                <phone>311 555-1256</phone>
                <website>http://www.pillarsbyphil.biz/</website>
             </account>
          </Fields>
       </Record>
       .
       .
       .
       <Record recordId="769267c5-990e-4342-b76c-fce2e8ba76c8">
          <Fields>
             <account>
                <account_name>Booby Traps</account_name>
                <phone>311 555-4661</phone>
                <website>http://www.boobytraps.biz/</website>
             </account>
          </Fields>
       </Record>
    </RecordQueryResponse>
    
    ```
    

-   400 \(Bad Request\) The universeID value contains only space characters. Sample response body:

    ```xml
    <error>
          <message>The given universe id is blank.</message>
    </error> 
    ```

-  403 (Forbidden) Access to this API endpoint is not enabled for this account. The response body is empty.

-  404 (Not Found) universeID does not identify a universe under the authenticated account. Sample response body:

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