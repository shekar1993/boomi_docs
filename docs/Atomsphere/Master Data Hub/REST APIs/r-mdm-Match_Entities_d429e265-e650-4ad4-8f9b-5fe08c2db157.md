# Match Entities 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-d429e265-e650-4ad4-8f9b-5fe08c2db157"/>
</head>


The Match Entities operation sends a batch of entities from a contributing source, applies match rules, and returns match results for each entity in the batch. This operation helps you test how match rules apply to entities coming from a source so you can see potential duplicate records and make match rule adjustments.

The entities are represented in XML format. The batch is not staged — you can use the Update Golden Records operation to stage a batch of entities.

## Basic authentication

To perform this operation using Basic auth, send an **HTTP POST** request to:

`https://<host>:<port>/mdm/universes/<universeID>/match`

where

`<host>` is the host name or IP address of the repository and `<port>` is the port number of the shared HTTP server as configured in the account’s [Atom Management settings](/docs/Atomsphere/Integration/Integration%20management/c-atm-Atom_Management_b38a3a90-d7f6-4df0-8c00-e75a178dfdfa.md).

## JWT authentication

To perform this operation using JSON Web Token (JWT) auth, send an **HTTP POST** request to:

`https://<host>:<port>/mdm/universes/<universeID>/match?repositoryId=<repository ID>`

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

You can implement requests for this operation in processes using the [HTTP Client connector](/docs/Atomsphere/Integration/Connectors/r-atm-HTTP_Client_connector_d64af80e-febe-4cd2-89ad-e3d0fc53c502.md), as demonstrated by the sample process [ Hub: Match Entities](https://platform.boomi.com/#build;processLibrary=7a24b7d3-a197-410c-aa98-1a2519896ffa), which you can install in your account from the process library in Integration.

You can also use [Boomi DataHub connector's match entities operation](/docs/Atomsphere/Integration/Connectors/int-BDH_Match_Entities.md).

:::

## Path parameters


**universeID**  
ID of the universe

## Query parameters

**repositoryId** <br></br>
ID of the repository. Case sensitive. Required with JWT authentication only. You can obtain the repository ID from the URL after navigating to the repository in the user interface.

## Request body

In the request body, wrap the entities in a `<batch>` element. Specify the contributing source by its ID in the `<batch>` element’s src attribute. In each entity, wrap the source record ID in an `<id>` element.

For example, the following request body represents a batch from source SF:

```xml
<batch src="SF">
     <contact>
       <id>1</id>
       <name>bobby</name>
       <city>berwyn</city>
       <phones>
         <phone>
           <number>311 555-1234</number>
           <type>home</type>
         </phone>
         <phone>
           <number>311 555-4321</number>
           <type>mobile</type>
         </phone>
       </phones> 
       <email>bob@gmail.com</email>
       <spouse>1001</spouse>
     </contact>
     <contact>
       <id>2</id>
       <name>mike</name>
       <city>chesterbrook</city>
       <phones>
         <phone>
           <number>311 555-2345</number>
           <type>home</type>
         </phone>
         <phone>
           <number>311 555-5432</number>
           <type>mobile</type>
         </phone>
       </phones> 
       <email>mike@gmail.com</email>
       <spouse>1002</spouse>
     </contact>
</batch> 
```

`*MDM*` (exactly as shown here in uppercase with leading and trailing asterisks) is not a valid source ID because it is used to distinguish batches submitted manually in the Boomi DataHub service. If `*MDM*` is specified as the source ID, the response is an unknown source error.




## Responses 

-   200 \(OK\) In the response body the root element `<MatchEntitiesResponse>` consists of a `<MatchResult>` element for each batch entity. A `<MatchResult>` element has the following attributes:

    -   matchRule — the match rule whose application resulted in a match \(if there was a match\).

    -   status — these are the possible values:

        -   SUCCESS — the request was successfully processed.

        -   FAILED\_TO\_RUN — an internal error occurred.

        -   TOO\_MANY\_MATCHES — there are 10 or more matching elements \(1,000 or more in the case of an exact matching expression grouped with a fuzzy matching expression\).

        -   ALREADY\_LINKED — the entity is already linked to an entity in the source system.

        -   MATCH\_REFERENCE\_FAILURE — the entity matches on a reference field but the field value does not resolve to a golden record.

    The first child element in `<MatchResult>` is `<entity>`, which contains a copy of the entity as it appeared in the request body.

    For a result with status SUCCESS, `<entity>` is followed by a `<match>` element for each matching golden record not yet linked to an entity in the source system. There is also a `<duplicate>` element for each matching golden record already linked to an entity in the source system. In the golden record representations in `<match>` and `<duplicate>` elements, the id attribute value is the system golden record ID.

    If you apply a match rule specifying fuzzy matching, it includes the `<fuzzyMatchDetails>` element in the `<match>` or `<duplicate>` element for each matching golden record. The `<fuzzyMatchDetails>` element has these children:

    -   `<field>` is the field containing the data used for matching.

    -   `<first>` is the value of the field referenced first in the applied match rule. This value is either from the incoming entity or the matched golden record.

    -   `<second>` is the value of the field referenced second in the applied match rule. This value is either from the incoming entity or the matched golden record.

    -   `<method>` is the similarity algorithm specified by the applied match rule — either jarowinkler \([Jaro-Winkler](http://en.wikipedia.org/wiki/Jaro%E2%80%93Winkler_distance)\), [levenshtein](http://en.wikipedia.org/wiki/Levenshtein_distance), [bigram](http://en.wikipedia.org/wiki/N-gram), [trigram](http://en.wikipedia.org/wiki/N-gram) or [soundex](http://en.wikipedia.org/wiki/Soundex).

    -   `<matchStrength>` is the strength of the fuzzy match. A value of 1.0 indicates perfect similarity.

    -   `<threshold>` is the tolerance level for application of the similarity algorithm specified by the applied match rule.

    Field values are masked if masking is configured in the model and the user cannot view masked data.
    
    Sample response body:

    ```xml
    
    <MatchEntitiesResponse>
       <MatchResult matchRule="Incoming name is similar to (Jaro-Winkler) Existing name" status="SUCCESS">
         <entity>
           <contact>
             <id>1</id>
             <name>bobby</name>
             <city>berwyn</city>
             <phones>
               <phone>
                 <number>311 555-1234</number>
                 <type>home</type>
               </phone>
               <phone>
                 <number>311 555-4321</number>
                 <type>mobile</type>
               </phone>
             </phones> 
             <email>bob@gmail.com</email>
             <spouse>1001</spouse>
           </contact>
         </entity>
         <match>
           <contact>
             <id>e6e1b847-d61a-46d9-a610-c678ba40ca41</id>
             <name>bob</name>
             <city>berwyn</city>
             <phones>
               <phone>
                 <number>311 555-1234</number>
                 <type>home</type>
               </phone>
               <phone>
                 <number>311 555-4321</number>
                 <type>mobile</type>
               </phone>
             </phones> 
             <email>bob@gmail.com</email>
             <spouse>1001</spouse> 
           </contact>
           <fuzzyMatchDetails>
             <field>name</field>
             <first>BOBBY</first>
             <second>BOB</second>
             <method>jarowinkler</method>
             <matchStrength>0.90666664</matchStrength>
             <threshold>0.85</threshold>
           </fuzzyMatchDetails>
         </match>
         <duplicate>
           <contact>
             <id>fc8cd5be-ac26-4e9a-9d0c-6b397a124172</id>
             <name>bob</name>
             <city>berwyn</city>
             <phones>
               <phone>
                 <number>311 555-5678</number>
                 <type>home</type>
               </phone>
               <phone>
                 <number>311 555-8765</number>
                 <type>mobile</type>
               </phone>
             </phones> 
             <email>bob@gmail.com</email>
             <spouse>1001</spouse>
           </contact>
           <fuzzyMatchDetails>
             <field>name</field>
             <first>BOBBY</first>
             <second>BOB</second>
             <method>jarowinkler</method>
             <matchStrength>0.90666664</matchStrength>
             <threshold>0.85</threshold>
           </fuzzyMatchDetails>
         </duplicate>
       </MatchResult>
       <MatchResult status="ALREADY_LINKED">
         <entity>
           <contact>
             <id>2</id>
             <name>mike</name>
             <city>chesterbrook</city>
             <phones>
               <phone>
                 <number>311 555-2345</number>
                 <type>home</type>
               </phone>
               <phone>
                 <number>311 555-5432</number>
                 <type>mobile</type>
               </phone>
             </phones> 
             <email>mike@gmail.com</email>
             <spouse>1002</spouse>
           </contact>
         </entity>
      </MatchResult>
    </MatchEntitiesResponse>
    
    ```

    For a result with status MATCH\_REFERENCE\_FAILURE, it omits the `<match>` element. The `<entity>` element is instead followed by `<message>`, which contains details about the match reference failure.

    Sample response body:

    ```xml
    
    <MatchEntitiesResponse>
       <MatchResult status="MATCH_REFERENCE_FAILURE">
         <entity>
           <contact>
             <id>1</id>
             <name>bobby</name>
             <city>berwyn</city>
             <phones>
               <phone>
                 <number>311 555-1234</number>
                 <type>home</type>
               </phone>
               <phone>
                 <number>311 555-4321</number>
                 <type>mobile</type>
               </phone>
             </phones> 
             <email>bob@gmail.com</email>
             <spouse>1313</spouse>
           </contact>
         </entity>
         <message>Unable to match on {spouse} field value '1313' because it does not resolve to a golden record.</message>
       </MatchResult>
    </MatchEntitiesResponse>
    ```

-   400 (Bad Request) The *universeID* parameter value contains only space characters. Sample response body:
  
  ```xml
  <error>
    <message>The given universe id is blank.</message>
  </error>
  ```

- 400 (Bad Request) The `<batch> `element’s src attribute value specifies a valid contributing source but the XML document contains invalid markup. Sample response body:

  ```xml
  <error>
    <message>When trying to parse a batch update for universe with id '851a6a64-6a88-4916-a5b7-d6a974d54318'.</message>
    <message>Unexpected EOF; was expecting a close tag for element <batch>
      at [row,col {unknown-source}]: [1,16]</message>
  </error> 
  ```

- 400 (Bad Request) The request body is empty. Sample response body:

  ```xml
  <error>
    <message>When trying to parse a batch update for universe with id '851a6a64-6a88-4916-a5b7-d6a974d54318'.</message>
    <message>Unexpected EOF in prolog at [row,col {unknown-source}]: [1,0]</message>
  </error> 
  ```

- 400 (Bad Request) The request body does not start with a `<batch>` tag. Sample response body:

  ```xml
  <error>
    <message>An update batch for universe with id '851a6a64-6a88-4916-a5b7-d6a974d54318' could not be processed because it starts with a 'foo' tag instead of with a 'batch' tag.</message>
  </error> 
  ```

- 400 (Bad Request) The `<batch>` element does not have a populated source src attribute. Sample response body:

  ```xml
  <error>
    <message>An update batch for universe with id '851a6a64-6a88-4916-a5b7-d6a974d54318' does not contain a source ('src') attribute.</message>
  </error> 
  ```

- 400 (Bad Request) The batch does not contain any source entities. Sample response body:

  ```xml
  <error>
        <message>The match request did not contain any entities.</message>
  </error>
  ```

- 404 (Not Found) *universeID* does not identify a universe under the authenticated account. Sample response body:

  ```xml
  <error>
    <message>A universe with id 'ac11cc59-c77a-4afe-8c92-ed86a7daabec' does not exist.</message>
    <message>Universe definition with id 'ac11cc59-c77a-4afe-8c92-ed86a7daabec' could not be loaded from plugin component directory 'plugins/mdm/bundles/ac11cc59-c77a-4afe-8c92-ed86a7daabec'.</message>
  </error> 
  ```

- 404 (Not Found) *sourceID* does not identify a source attached to the specified universe. Sample response body:

  ```xml
  <error>
    <message>Source with code 'FOO' does not exist under universe '851a6a64-6a88-4916-a5b7-d6a974d54318'.</message>
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
