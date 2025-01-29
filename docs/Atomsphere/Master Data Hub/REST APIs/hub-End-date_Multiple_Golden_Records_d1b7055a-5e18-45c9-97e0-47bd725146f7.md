# End-date Multiple Golden Records 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-d1b7055a-5e18-45c9-97e0-47bd725146f7"/>
</head>


The End-date Multiple Golden Records operation allows you to set specific golden records as inactive. By end-dating records, you can mark them for deletion and review them before permanently deleting it since you cannot restore a purged record.

## Basic authentication

To perform this operation using Basic auth, send an **HTTP POST** request to:

`https://<host>:<port>/mdm/universes/<universeID>/records/enddate`

where

*host* is the host name or IP address of the repository and *port* is the port number of the shared HTTP server as configured in the account’s [Atom Management settings](/docs/Atomsphere/Integration/Integration%20management/c-atm-Atom_Management_b38a3a90-d7f6-4df0-8c00-e75a178dfdfa.md). 

## JWT authentication

To perform this operation using JSON Web Token (JWT) auth, send an **HTTP POST** request to:

`https://<host>:<port>/mdm/universes/<universeID>/records/enddate?repositoryId=<repository ID>`

You must have the following MDM privileges:

- With the Advanced Security feature on your account:
  - **MDM - Stewardship** with **End-date Records** [Hub role entitlement](/docs/Atomsphere/Master%20Data%20Hub/Getting%20started/t-hub-Creating_Hub_Role_Entitlements_06d21275-b0c6-4854-abef-5782326aa85b.md) for the queried repository <br></br>or
  - **MDM - Stewardship Management**

- Without Advanced Security: 
   - **MDM - Stewardship** 

:::note

You can implement requests for this operation in processes using the [HTTP Client connector](/docs/Atomsphere/Integration/Connectors/r-atm-HTTP_Client_connector_d64af80e-febe-4cd2-89ad-e3d0fc53c502.md), as demonstrated by example 1 in the sample process [ Hub: End-date Golden Record,](/docs/Atomsphere/Master%20Data%20Hub/REST%20APIs/hub-End-date_Single_Golden_Record_4ee27a09-1966-4d59-bafb-565d72593f0f.md), which you can install in your account from the process library in Integration.

:::

## Path parameters 

**universeID** <br></br>
ID of the universe

## Query parameters

**repositoryId** <br></br>
ID of the repository. Case sensitive. Required with JWT authentication only. You can obtain the repository ID from the URL after navigating to the repository in the user interface.

## Request Body

Requests for this operation must specify golden records end-date either by their IDs or by applying a filter.

-   If you specify golden records by their IDs, processing is synchronous.

-   If you specify golden records by applying a filter, it creates a bulk processing request — processing is asynchronous.


In the request body, the root element is `<RecordEndDateRequest>`.

Within that element, each `<recordId>` \(optional\) — a maximum of 100 — specifies a golden record to end-date by its ID. For example, the following request body specifies four golden records to be end-dated:

```xml
<RecordEndDateRequest>
  <recordId>1ca890ab-ed57-4534-809e-fd7fc117f2d9</recordId>
  <recordId>485841-a68b-4b17-857d-1706d661694a</recordId>
  <recordId>90542057-a68b-4b17-857d-1706d661694a</recordId>
  <recordId>6bb11d94-6f75-4a9a-a8c9-6cca8850a396</recordId>
</RecordEndDateRequest>
```

`<filter>` sets query filter parameters and the query operator. The optional op attribute specifies the query operator. The valid values are AND, which specifies all filtering criteria, and OR, which specifies any filtering criterion. The default is AND.

These are the structures of the supported parameter types:

```xml
<filter op="">
      <createdDate>
           <from></from>
           <to></to>
      </createdDate>

      <updatedDate>
           <from></from>
           <to></to>
      </updatedDate>

      <fieldValue>
           <fieldId></fieldId>
           <operator></operator>
           <value></value>
           ...
      </fieldValue>


      <tags>
           <tagName></tagName>
           ...
      </tags>

      <creatingSourceId></creatingSourceId>

      <sourceLink>
    	      <sourceId></sourceId>
    	      <linkType></linkType>
      </sourceLink>

      <unresolvedReference>
    	      <fieldId></fieldId>
    	      <sourceId></sourceId>
      </unresolvedReference>

   </filter>
```

The order in which you specify filter parameters in `<filter>` is insignificant.

- `<createdDate>` sets a filter by the date and time of golden record creation.

  `<from>` sets the range’s starting date and time.

  `<to>`sets the range’s ending date and time.

  The format for both `<from>` and `<to>` is *yyyy-MM-dd'T'HH:mm:ss'Z'*, where 'T' separates the date and time — for example, 2013-03-01T15:32:00Z.

  Omitting `<from>` filters golden records created before the `<to>` date and time. Omitting `<to>` filters golden records created after the `<from>` date and time.

- `<updatedDate>` sets a filter by the date and time of last golden record update.

  `<from>` sets the range’s starting date and time.

  `<to>`sets the range’s ending date and time.

  The format for both `<from>` and `<to>` is *yyyy-MM-dd'T'HH:mm:ss'Z'*, where 'T' separates the date and time — for example, 2013-03-01T15:32:00Z.

  Omitting `<from>` filters golden records updated before the `<to>` date and time. Omitting `<to> `filters golden records updated after the `<from>` date and time.

- `<fieldValue>` sets a filter by golden record field value.

  - The `<fieldId>` element specifies the field ID.

  - The `<operator>` element specifies the operator. The valid operators are dependent upon the field type.

    This operator is valid for all types:

      - EQUALS

    These operators are valid for all types *except* Reference fields and collection (repeatable) or collection item fields of any type:

    - NOT_EQUALS

    - IS_NOT_NULL

    - IS_NULL

    These operators are valid only for *Text* and *Long Text* fields:

    - CONTAINS

    - ENDS_WITH

    - STARTS_WITH

    These operators are valid only for *Integer* and *Float* fields:

    - GREATER_THAN

    - GREATER_THAN_EQUAL — greater than or equal to

    - LESS_THAN

     - LESS_THAN_EQUAL — less than or equal to

    This operator is available only for *Date*, *Date and Time*, and *Time* fields:

    - BETWEEN

    This operator is valid only for *Enumeration* fields:

     - IS_INVALID — not in the field’s enumerated value list

  - A `<value>` element specifies a value.

    - One `<value>` element is used with each operator with these exceptions:

    - BETWEEN — requires two `<value>` elements for the setting of a range for a Date, Date and Time, or Time field value in the format:

      - `Date and Time — yyyy-MM-dd'T'HH:mm:ss'Z'` — for example, 2013-03-01T15:32:00Z

      - `Date — yyyy-MM-dd` — for example, 2013-03-01

      - `Time — HH:mm:ss` — for example, 15:32:00

    - EQUALS with an Enumeration field allows multiple `<value>` elements. A golden record having any one of the specified values is considered to meet the criterion.

      - IS_INVALID — `<value>` is not used with this operator.

      - IS_NOT_NULL — `<value>` is not used with this operator.

      - IS_NULL — `<value>` is not used with this operator.

    - The valid values for filtering Boolean field values are true and false.

`<tags>` sets a filter by one or more tags, each of which is specified by `<tagName>`. Apply this filter such that a golden record having any one of the specified tags is considered to meet the tag criteria.

`<creatingSourceId>` sets a filter by a creating source specified by its source ID.

`<sourceLink>` sets a filter by the presence or absence of links to a source.

The `<sourceId>` element specifies the source by its ID.

The `<linkType>` element contains either LINKED, for filtering by the presence of links, or NOT_LINKED, for filtering by the absence of links.

:::note

If the universe (domain) has one or more attached sources configured with the option to allow multiple links to golden records, processing time for requests in which you set the `<sourceLink>` filter might be significantly longer than other requests.

:::

- `<unresolvedReference>` sets a filter by the presence of unresolved reference field data.

  - The `<fieldId>` element specifies a reference field by its ID.

  - The `<sourceId>` element contains either a source by its ID or `@all`, which limits results to golden records for which all source contributions are unresolved.

:::note

You can find a field’s ID in the model page’s **Fields** tab in Boomi DataHub. A source’s ID can be found on the **Sources** page in Boomi DataHub.

:::

For example, the following request body specifies golden records for end-dating that match any of these filtering criteria:

- Created as a result of an entity submission from the source NetSuite (ID: NS)

- Linked to the source Salesforce (ID: SFDC)

- Having either or both of the tags Area Code 311 and Mid-Atlantic

- Having a website field value ending with *.biz*

- Last updated during the period starting August 17, 2016 and ending September 2, 2016


``` xml
<RecordEndDateRequest>
   <filter op="OR">
      <creatingSourceId>NS</creatingSourceId>
      <sourceLink>
    	      <sourceId>SFDC</sourceId>
    	      <linkType>LINKED</linkType>
      </sourceLink>
      <tags>
           <tagName>Area Code 311</tagName>
           <tagName>Mid-Atlantic</tagName>
      </tags>
      <fieldValue>
           <fieldId>WEBSITE</fieldId>
           <operator>ENDS_WITH</operator>
           <value>.biz</value>
      </fieldValue>
      <updatedDate>
           <from>2016-08-17T00:00:00Z</from>
           <to>2016-09-02T23:59:59Z</to>
      </updatedDate>
   </filter>
</RecordEndDateRequest>
```

:::note

If a request includes both `<recordId>` elements and `<filter>`, it disregards `<filter>`.

:::


## Responses 

-   200 \(OK\) The request body specified one or more `<recordId>` elements. In the response body, the root element is `<RecordEndDateResponse>`. Within that element, a `<result>` element corresponds to each golden record ID in the request body.

    In each `<result>` element, `<recordId>` specifies a golden record ID in the request body and `<success>` indicates the success of an end-date operation on an active golden record with that ID was successful. If `<success>` contains true, it end-dated an active golden record with that ID.

    If `<success>` contains *false*, it did not end-date an active golden record with the specified ID. An additional element, `<message>`, indicates the reason the operation was unsuccessful. Failure occurs in the following cases:

    -   An active golden record with the specified ID does not exist.

    -   A golden record with the specified ID is already end-dated.

    -   A golden record with the specified ID is referenced by another golden record.

    Sample response body:

    ```xml
    <RecordEndDateResponse>
      <result>
        <recordId>1ca890ab-ed57-4534-809e-fd7fc117f2d9</recordId>
        <success>true</success>
      </result>    
      <result>
        <recordId>485841-a68b-4b17-857d-1706d661694a</recordId>
        <success>false</success>
        <message>A record with id '485841-a68b-4b17-857d-1706d661694a' does not exist.</message>
      </result>
      <result>
        <recordId>90542057-a68b-4b17-857d-1706d661694a</recordId>
        <success>false</success>
        <message>The record with id '90542057-a68b-4b17-857d-1706d661694a' is currently end-dated 
        in universe with id '63374e20-e57c-4930-b1a2-6a7fc3a28eaf'.</message>
      </result>
      <result>
        <recordId>6bb11d94-6f75-4a9a-a8c9-6cca8850a396</recordId>
        <success>false</success>
        <message>The requested action cannot be performed on this record because it is referenced by 
        another record.</message>
      </result>
    </RecordEndDateResponse>
    ```

-   202 \(Accepted\) The request body specified the `<filter>` element and did not specify `<recordId>` elements. The repository accepted the end-dating request for processing. The response body is empty.

-   400 (Bad Request) The universeID parameter value contains only space characters. Sample response body:

    ```xml
    <error>
      <message>The given universe id is blank.</message>
    </error> 
    ```


-   400 \(Bad Request\) The request body does not specify any golden record IDs.

    ```xml
    <error>
          <message>No records are specified for end-dating.</message>
    </error> 
    ```

-   400 \(Bad Request\) The request body specifies more than 100 golden record IDs.

    ```xml
    <error>
          <message>Cannot end-date more than 100 records at one time.</message>
    </error>
    ```

-   400 \(Bad Request\) The request body does not contain either one or more `<recordID>` elements or the `<filter>` element.

    ```xml
    <error>
          <message>The request did not specify either record IDs or valid filters.</message>
    </error>
    ```

- 400 (Bad Request) A `<fieldId>` element is specified that is not in the deployed version of the universe’s model. Sample response body:

    ```xml
    <error>
      <message>This 'fieldId', 'FOUNDER', is not in the model 'VENDOR'.</message>
    </error> 
    ```

- 400 (Bad Request) A filter criterion contains a `<fieldValue>` element that does not contain a child `<fieldId>` element. Sample response body:

    ```xml
    <error>
      <message>Each 'fieldValue' element must contain one 'fieldId' element.</message>
    </error> 
    ```

- 400 (Bad Request) A filter criterion contains a `<fieldValue>` element that does not contain a child `<operator>` element. Sample response body:

    ```xml
    <error>
      <message>Each 'fieldValue' element must contain one 'operator' element; fieldId = 'PHONE'.</message>
    </error> 
    ```

-  400 (Bad Request) A filter criterion specifies a field of a type that does not support the specified operation. Sample response body:

    ```xml
    <error>
      <message>Field 'AGE' of type 'INTEGER' does not support operation 'BETWEEN'; supported operations: 'EQUALS, NOT_EQUALS, LESS_THAN, LESS_THAN_EQUAL,GREATER_THAN, GREATER_THAN_EQUAL, IS_NOT_NULL, IS_NULL'.
      </message>
    </error> 
    ```

- 400 (Bad Request) A filter criterion specifies multiple values for a field type and operator combination for which multiple values are not valid. Sample response body:
    ```xml
    <error>
      <message>This field-type / operator, 'INTEGER' / 'EQUALS', does not accept multiple values; fieldId = 'AGE'.
      </message>
    </error> 
    ```

- 400 (Bad Request) A filter criterion incorrectly specifies a time range because less than or more than two `<value>` elements are specified. Sample response body:
    ```xml
    <error>
      <message>The BETWEEN operator takes exactly 2 values; fieldId= 'BIRTH_DATE', operator = 'BETWEEN'
      </message>
    </error> 
    ```

- 400 (Bad Request) A filter criterion specifying an operator that requires a `<value>` element(s) omits that element. Sample response body:
    ```xml
    <error>
      <message>This operator requires a 'value' element: fieldId = 'AGE'; operator = 'EQUALS' 
      </message>
    </error> 
    ```

- 400 (Bad Request) A filter criterion specifying an operator for which the `<value>` element is invalid includes that element. Sample response body:

    ```xml
    <error>
      <message>The operation 'IS_NULL' does not allow any 'value' elements: fieldId = 'AGE' 
      </message>
    </error> 
    ```

- 400 (Bad Request) A filter criterion specifies an empty `<value>` element. Sample response body:

    ```xml
    <error>
      <message>Each value must be non-blank: fieldId = 'AGE'; operation = 'EQUALS' 
      </message>
    </error> 
    ```

- 400 (Bad Request) A `<sourceLink>` filter criterion omits one of the required child elements. Sample response body:

    ```xml
    <error>
      <message>One of the 'sourceLink' elements is missing: 'linkType' 
      </message>
    </error> 
    ```

- 400 (Bad Request) A `<sourceLink>` filter criterion omits both required child elements. Sample response body:

    ```xml
    <error>
      <message>Both of the 'sourceLink' elements is missing: 'sourceId', 'linkType'
      </message>
    </error> 
    ```

- 400 (Bad Request) The child `<linkType>` element in a `<sourceLink>` filter criterion does not contain either LINKED or NOT_LINKED. Sample response body:

    ```xml
    <error>
      <message>Source link type must be one of { 'LINKED, NOT_LINKED' }
      </message>
    </error> 
    ```

-  400 (Bad Request) The `<creatingSourceId>` element, which you use to set a filter by creating source, is present but empty. Sample response body:

    ```xml
    <error>
      <message>The 'creatingSourceId' cannot be blank when the element is present.
      </message>
    </error> 
    ```

- 400 (Bad Request) An `<unresolvedReference>` filter criterion omits one of the required child elements. Sample response body:

    ```xml
    <error>
      <message>One of the 'unresolvedReference' elements is missing: 'sourceId'.
      </message>
    </error> 
    ```

- 400 (Bad Request) The field specified in an `<unresolvedReference>` filter criterion is not a Reference field. Sample response body:

    ```xml
    <error>
      <message>The field type for an 'unresolvedReference' condition must be REFERENCE: fieldId = 'AGE'.
      </message>
    </error> 
    ```

- 400 (Bad Request) An `<unresolvedReference>` filter criterion omits both required child elements. Sample response body:

    ```xml
    <error>
      <message>Both of the 'unresolvedReference' elements are required: "fieldId', 'sourceId'.</message>
    </error> 
    ```

- 400 (Bad Request) A `<tags>` filter criterion specifies a tag that is not in the deployed version of the universe’s model. Sample response body:

    ```xml
    <error>
      <message>The tagName 'Area Code 311' is not defined in this universe.</message>
    </error>
    ```

- 400 (Bad Request) A `<tags>` filter criterion is specified but there are no tags in the deployed version of the universe’s model. Sample response body:

    ```xml
    <error>
      <message>There are no tags defined in this universe.</message>
    </error> 
    ```

- 400 (Bad Request) A Date and Time field value specified in a filter criterion is incorrectly formatted. Sample response body:

    ```xml
    <error>
      <message>This date-time has a bad value in it or is not formatted correctly (YYYY-MM-DDT00:00:00Z): '02013-03-01T15:32:00Z'; fieldId = 'LAST_CONTACT'.</message>
    </error> 
    ```

- 400 (Bad Request) A Date field value specified in a filter criterion is incorrectly formatted. Sample response body:

    ```xml
    <error>
      <message>This date has a bad value in it or is not formatted correctly (YYYY-MM-DD): '2013-3-1'; fieldId = 'BIRTHDATE'.</message>
    </error> 
    ```

- 400 (Bad Request) A Time field value specified in a filter criterion is incorrectly formatted. Sample response body:

    ```xml
    <error>
      <message>This time has a bad value in it or is not formatted correctly (00:00:00): '3:32pm'; fieldId = 'ARRIVING'.</message>
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