# Propagate Channel Updates 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-d5f5f4bb-37e3-419c-9896-be5c518277e4"/>
</head>

The Propagate Channel Updates operation requests the propagation of source record update requests to a specific source on its channel for golden records in a universe \(domain\) under the authenticated account.

## Basic authentication

To perform this operation using Basic auth, send an **HTTP POST** request to:

`https://<host>:<port>/mdm/universes/<universeID>/sources/<sourceID>/records/updates`

where

`<host>` is the host name or IP address of the repository and `<port>` is the port number of the shared HTTP server as configured in the account’s [Atom Management settings](/docs/Atomsphere/Integration/Integration%20management/c-atm-Atom_Management_b38a3a90-d7f6-4df0-8c00-e75a178dfdfa.md).

## JWT authentication

To perform this operation using JSON Web Token (JWT) auth, send an **HTTP POST** request to:

`https://<host>:<port>/mdm/universes/<universeID>/sources/<sourceID>/records/updates?repositoryId=<repository ID>`

You must have the following MDM privileges:

- **MDM - Source Management**

:::note

You can implement requests for this operation in processes using the [HTTP Client connector](/docs/Atomsphere/Integration/Connectors/r-atm-HTTP_Client_connector_d64af80e-febe-4cd2-89ad-e3d0fc53c502.md).

:::

## Path parameters 

**universeID**  
ID of the universe

**sourceID**  
ID of the source

## Query parameters 

**repositoryId** <br></br>
ID of the repository. Case sensitive. Required with JWT authentication only. You can obtain the repository ID from the URL after navigating to the repository in the user interface.

## Request body

Requests for this operation are processed asynchronously. At any given time, processing only a single instance of manually propagated update requests can be in progress for a universe and source combination. Propagation of an update request for an individual golden record is subject to propagation rules configured for a given universe and source combination.

After receiving a request by the repository, you can obtain the processing status with a Get Channel Updates Status operation, and you can cancel processing with a Cancel Channel Updates operation.

In the request body, the root element is `<RecordSourceUpdateRequest>`. If this element’s recordStatus attribute value is ACTIVE \(the default\), propagation of update requests is limited to active golden records. If the value is END\_DATED, propagation of update requests is limited to end-dated \(inactive\) golden records.

Within `<RecordSourceUpdateRequest>`, each `<recordId>` \(optional\) specifies a golden record for which to propagate update requests by its ID.

For example:

-   The following request body specifies three active golden records for which to propagate update requests:

    ```xml
    <RecordSourceUpdateRequest>
      <recordId>1ca890ab-ed57-4534-809e-fd7fc117f2d9</recordId>
      <recordId>90542057-a68b-4b17-857d-1706d661694a</recordId>
      <recordId>6bb11d94-6f75-4a9a-a8c9-6cca8850a396</recordId>
    </RecordSourceUpdateRequest>
    ```

-   The following request body specifies three end-dated golden records for which to propagate update requests:

    ``` xml
    <RecordSourceUpdateRequest recordStatus="END_DATED">
      <recordId>9d2f711c-f7df-e908-4354-75deba098ac1</recordId>
      <recordId>a496166d-6017-d758-71b4-b68a75024509</recordId>
      <recordId>693a0588-acc6-9c8a-a9a4-57f649d11bb6</recordId>
    </RecordSourceUpdateRequest>
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

  - `<from>` sets the range’s starting date and time.

  - `<to>` sets the range’s ending date and time.

  The format for both `<from>` and `<to>` is `yyyy-MM-dd'T'HH:mm:ss'Z'`, where 'T' separates the date and time — for example, 2013-03-01T15:32:00Z.

  Omitting `<from>` filters golden records created before the `<to>` date and time. Omitting `<to>` filters golden records created after the `<from>` date and time.

- `<updatedDate>` sets a filter by the date and time of last golden record update.

  - `<from>` sets the range’s starting date and time.

  - `<to>` sets the range’s ending date and time.

  The format for both `<from>` and `<to>` is `yyyy-MM-dd'T'HH:mm:ss'Z'`, where 'T' separates the date and time — for example, 2013-03-01T15:32:00Z.

  Omitting `<from>` filters golden records updated before the `<to>` date and time. Omitting `<to>` filters golden records updated after the `<from>` date and time.

- `<fieldValue>` sets a filter by golden record field value.

  - The `<fieldId>` element specifies the field ID.

  - The `<operator>` element specifies the operator. The valid operators are dependent upon the field type.

    This operator is valid for all types:

      - EQUALS

    These operators are valid for all types except Reference fields and collection (repeatable) or collection item fields of any type:

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

    This operator is available only for Date, Date and Time, and Time fields:

    - BETWEEN

    This operator is valid only for Enumeration fields:

    - IS_INVALID — not in the field’s enumerated value list

  - A `<value>` element specifies a value.

    - One `<value>` element is used with each operator with these exceptions:

    - BETWEEN — requires two `<value>` elements for the setting of a range for a Date, Date and Time, or Time field value in the format:

      - *Date and Time — yyyy-MM-dd'T'HH:mm:ss'Z'* — for example, 2013-03-01T15:32:00Z

      - *Date — yyyy-MM-dd* — for example, 2013-03-01

      - *Time — HH:mm:ss* — for example, 15:32:00

     - EQUALS with an Enumeration field allows multiple `<value>` elements. A golden record having any one of the specified values is considered to meet the criterion.

        - IS_INVALID — `<value>` is not used with this operator.

        - IS_NOT_NULL — `<value>` is not used with this operator.

        - IS_NULL — `<value>` is not used with this operator.

    - The valid values for filtering Boolean field values are true and false.

- `<tags>` sets a filter by one or more tags, each of which is specified by `<tagName>`. Apply this filter such that a golden record having any one of the specified tags is considered to meet the tag criteria.

- `<creatingSourceId>` sets a filter by a creating source specified by its source ID.

- `<sourceLink>` sets a filter by the presence or absence of links to a source.

  - The `<sourceId`> element specifies the source by its ID.

  - The `<linkType>` element contains either LINKED, for filtering by the presence of links, or NOT_LINKED, for filtering by the absence of links.

  :::note
  
  If the universe (domain) has one or more attached sources configured with the option to allow multiple links to golden records, processing time for requests in which you set the `<sourceLink>` filter might be significantly longer than other requests.

  :::

- `<unresolvedReference>` sets a filter by the presence of unresolved reference field data.

  - The `<fieldId>` element specifies a reference field by its ID.

  - The `<sourceId>` element contains either a source by its ID or `@all`, which limits results to golden records for which all source contributions are unresolved.

  :::note
  
  You can find a field’s ID in the model page’s Fields tab in Boomi DataHub. A source’s ID can be found on the Sources page in Boomi DataHub.

  :::


For example, the following request body specifies active golden records for which to propagate update requests that match any of these filtering criteria:

```xml 
<RecordSourceUpdateRequest>
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
</RecordSourceUpdateRequest>
```

:::note

If the request body `<RecordSourceUpdateRequest>` is either empty or contains an empty `<filter>` and no `<recordID>` elements, propagation of source record update requests is requested for either all active golden records or all end-dated \(inactive\) golden records in the specified universe, depending upon the value of the `<RecordSourceUpdateRequest>` element’s recordStatus attribute.

:::

:::note

If a request includes both `<recordId>` elements and `<filter>`, it disregards `<filter>`.



## Responses 

-   202 \(Accepted\) Received the request by the repository. The response body contains a system-assigned request ID for use in a Get Channel Updates Status or Cancel Channel Updates request. Sample response body:

    ```
    147
    ```

-  400 (Bad Request) The universeID parameter value contains only space characters. Sample response body:

    ```xml
    <error>
      <message>The given universe id is blank.</message>
    </error> 
    ``` 
  
-   400 \(Bad Request\) Cannot process the request because processing of a previous request for this universe and source combination is in progress.

    ```xml
    <error>
          <message>A request was submitted to propagate channel 
            updates for specified golden records in universe 
            '257e5d32-4e8c-4a6c-8869-42c5a09eab91' on the channel for 
            source 'NS'. The request will not be processed because 
            processing of a previous request for this universe/source 
            combination is in progress. Only one such request can be 
            processed at a time. The previous request can be canceled 
            if desired with a Cancel Channel Updates request.</message>
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

- 400 (Bad Request) A filter criterion specifies a field of a type that does not support the specified operation. Sample response body:

    ```xml
    <error>
          <message>Field 'AGE' of type 'INTEGER' does not support operation 'BETWEEN'; supported operations: 'EQUALS, NOT_EQUALS, LESS_THAN, LESS_THAN_EQUAL, 
    GREATER_THAN, GREATER_THAN_EQUAL, IS_NOT_NULL, IS_NULL'.</message>
    </error> 
    ```

- 400 (Bad Request) A filter criterion specifies multiple values for a field type and operator combination for which multiple values are not valid. Sample response body:

    ```xml
    <error>
          <message>This field-type / operator, 'INTEGER' / 'EQUALS', does not accept multiple values; fieldId = 'AGE'.</message>
    </error> 
    ```

- 400 (Bad Request) A filter criterion incorrectly specifies a time range because less than or more than two `<value>` elements are specified. Sample response body:

    ```xml
    <error>
          <message>The BETWEEN operator takes exactly 2 values; fieldId = 'BIRTH_DATE', operator = 'BETWEEN'.</message>
    </error> 
    ```

- 400 (Bad Request) A filter criterion specifying an operator that requires a `<value>` element(s) omits that element. Sample response body:

    ```xml
    <error>
          <message>This operator requires a 'value' element: fieldId = 'AGE'; operator = 'EQUALS'.</message>
    </error> 
    ```

- 400 (Bad Request) A filter criterion specifying an operator for which the `<value>` element is invalid includes that element. Sample response body:

    ```xml
    <error>
          <message>The operation 'IS_NULL' does not allow any 'value' elements: fieldId = 'AGE'.</message>
    </error> 
    ```

- 400 (Bad Request) A filter criterion specifies an empty `<value>` element. Sample response body:

    ```xml
    <error>
          <message>Each value must be non-blank: fieldId = 'AGE'; operation = 'EQUALS'.</message>
    </error> 
    ```

- 400 (Bad Request) A `<sourceLink>` filter criterion omits one of the required child elements. Sample response body:

    ```xml
    <error>
          <message>One of the 'sourceLink' elements is missing: 'linkType'.</message>
    </error> 
    ```

- 400 (Bad Request) A `<sourceLink>` filter criterion omits both required child elements. Sample response body:

    ```xml
    <error>
          <message>Both of the 'sourceLink' elements is missing: 'sourceId', 'linkType'.</message>
    </error> 
    ```

- 400 (Bad Request) The child `<linkType>` element in a `<sourceLink>` filter criterion does not contain either LINKED or NOT_LINKED. Sample response body:

    ```xml
    <error>
          <message>Source link type must be one of { 'LINKED, NOT_LINKED' }</message>
    </error> 
    ```

- 400 (Bad Request) The `<creatingSourceId`> element, which you use to set a filter by creating source, is present but empty. Sample response body:

    ```xml
    <error>
          <message>The 'creatingSourceId' cannot be blank when the element is present.</message>
    </error> 
    ```

- 400 (Bad Request) An `<unresolvedReference>` filter criterion omits one of the required child elements. Sample response body:

    ```xml
    <error>
          <message>One of the 'unresolvedReference' elements is missing: 'sourceId'.</message>
    </error> 
    ```

- 400 (Bad Request) The field specified in an `<unresolvedReference>` filter criterion is not a Reference field. Sample response body:

    ```xml
    <error>
          <message>The field type for an 'unresolvedReference' condition must be REFERENCE: fieldId = 'AGE'.</message>
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