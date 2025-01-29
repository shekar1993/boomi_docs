# Query Golden Records 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-dad5ed08-37ae-47e7-b431-7394cf591aa1"/>
</head>

## Basic authentication
The Query Golden Records operation sends a query of golden records in a specified universe \(domain\) under the authenticated account. The operation can retrieve active golden records only.

:::note

You can activate Accelerated Query when you have 100,000 or more golden records in a deployed model (universe). This feature improves query performance. Read [Activating Accelerated Query](/docs/Atomsphere/Master%20Data%20Hub/Stewardship/hub-accelerated_query.md) to learn more.

:::

To perform this operation using Basic auth, send an **HTTP POST** request to:

`https://<host>:<port>/mdm/universes/<universeID>/records/query`

where

`<host>` is the host name or IP address of the repository and `<port>` is the port number of the shared HTTP server as configured in the account’s [Atom Management settings](/docs/Atomsphere/Integration/Integration%20management/c-atm-Atom_Management_b38a3a90-d7f6-4df0-8c00-e75a178dfdfa.md).

## JWT authentication

To perform this operation using JSON Web Token (JWT) authentication, send an **HTTP POST** request to:

`https://<host>:<port>/mdm/universes/<universeID>/records/query?repositoryId=<repository ID>`

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

You can implement requests for this operation in processes using the [HTTP Client connector](/docs/Atomsphere/Integration/Connectors/r-atm-HTTP_Client_connector_d64af80e-febe-4cd2-89ad-e3d0fc53c502.md), as demonstrated by the sample process [ Hub: Query Golden Records](https://platform.boomi.com/#build;processLibrary=7a24b7d3-a197-410c-aa98-1a2519896ffa), which you can install in your account from the process library in Integration.

You can also use [Boomi DataHub connector's query golden records operation](/docs/Atomsphere/Integration/Connectors/int-BDH_Query_Golden_Records.md).

:::

## Query parameters
**repositoryId** <br></br>
ID of the repository. Case sensitive. Required with JWT authentication only. You can obtain the repository ID from the URL after navigating to the repository in the user interface.

## Path parameters 

**universeID**  
ID of the universe

## Request body

The body of the request has the following structure:

```xml

<RecordQueryRequest limit="" offsetToken="">
   <view>
       <fieldId></fieldId>
       ...
   </view>

   <sort>
       <sortField>
           <fieldId></fieldId>
           <direction></direction>
       </sortField>
       ...
   </sort>

   <filter op="">
       <!-- structure is shown below -->
   </filter>
</RecordQueryRequest>

```

where

-   The optional `<RecordQueryRequest>` limit attribute value is the maximum number of golden records to return. The user might, depending on its configuration, apply a more restrictive limit than that requested. The maximum record limit for repositories hosted in Hub Clouds is 200.

-   The optional `<RecordQueryRequest>` includeSourceLinks attribute value, if set to true, requests the return of golden record metadata in addition to data. The returned metadata includes the entity ID, name, and established date of each source linked to the record.

  The following is an example of a request body for when the value of *includeSourceLinks* attribute is set to *true*:

  ```xml
  <RecordQueryRequest limit="2" includeSourceLinks="true">
  <filter op="OR">
   <fieldValue>
   	<fieldId>CITY</fieldId>
   	<operator>EQUALS</operator>
   	<value>NEW YORK</value>
   </fieldValue>
   <fieldValue>
   	<fieldId>CITY</fieldId>
   	<operator>EQUALS</operator>
   	<value>CHICAGO</value>
   </fieldValue>
  </filter>
  <view>
    <fieldId>FIRST_NAME</fieldId>
    <fieldId>CITY</fieldId>
    <fieldId>PHONES</fieldId>
  </view>
</RecordQueryRequest>

```

-   You can use the optional `<RecordQueryRequest>` offsetToken attribute value for paging. Refer to the `<offsetToken>` returned from a previous Query Golden Records request.

-   `<view>` \(optional\) specifies one or more fields to return. Each such field is represented by a `<fieldId>` element, which contains the field ID.

    If you omit `<view>`, it returns all fields that contain values.

-   `<sort>` \(optional\) specifies which fields or metadata to sort in the returned golden records.  The order of the `<sortField>` elements determines the relative sorting priority.

    In each `<sortField>` element:

    -   The `<fieldId>` element specifies either a field ID for sorting by field value or one of the following strings:

        -   `@createdDate` for sorting by date and time of golden record creation

        -   `@updatedDate` for sorting by date and time of last golden record update

    -   The `<direction>` element specifies the sort order, either ASC for ascending or DESCfor descending.

    It is not possible to sort by the value of reference, collection \(repeatable\), or collection item fields.

    Changing the sort criteria and attempting to use an offset token from a previous sort will produce unpredictable results.

    If you omit `<sort>`, it sorts golden records by their creation date in ascending order.

-   `<filter>` sets query filter parameters and the query operator. The optional op attribute specifies the query operator. The valid values are AND, which specifies all filtering criteria, and OR, which specifies any filtering criterion. The default is AND.
    
    `<filter>` has the following structure. Each child element sets a query filter parameter.

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
    
          <recordIds>
                <recordId></recordId>
                ...
          </recordIds>
    
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

    The format for both `<from>` and `<to>` is *yyyy-MM-dd'T'HH:mm:ss'Z'*, where 'T' separates the date and time — for example, 2013-03-01T15:32:00Z.

    Omitting `<from>` filters golden records created before the `<to>` date and time. Omitting `<to>` filters golden records created after the `<from>` date and time.

    - `<updatedDate>` sets a filter by the date and time of last golden record update.

      - `<from>` sets the range’s starting date and time.

      - `<to>` sets the range’s ending date and time.

    The format for both `<from>` and `<to> `is *yyyy-MM-dd'T'HH:mm:ss'Z'*, where 'T' separates the date and time — for example, 2013-03-01T15:32:00Z.

    Omitting `<from>` filters golden records updated before the `<to>` date and time. Omitting `<to>` filters golden records updated after the `<from>` date and time.

    -   `<recordIds>` sets a filter by 1–100 golden record IDs, each of which is specified by `<recordId>`. If a request sets this filter, it disregards other filters in the request.

    - `<fieldValue>` sets a filter by golden record field value. The request can have multiple fieldValue sections. The filter "Op" attribute specifies the operator as "AND" or "OR" for querying multiple values.

      - The `<fieldId>` element specifies the field ID.

      - The `<operator>` element specifies the operator. The valid operators are dependent upon the field type.

        This operator is valid for all types:

        - EQUALS

        These operators are valid for all types except Reference fields and collection (repeatable) or collection item fields of any type:

        - NOT_EQUALS

        - IS_NOT_NULL

        - IS_NULL

        These operators are valid only for Text and Long Text fields:

        - CONTAINS

        - ENDS_WITH

        - STARTS_WITH

        These operators are valid only for Integer and Float fields:

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

            - BETWEEN — requires two `<value`> elements for the setting of a range for a Date, Date and Time, or Time field value in the format:

                - Date and Time — *yyyy-MM-dd'T'HH:mm:ss'Z'* — for example, 2013-03-01T15:32:00Z

                - Date — *yyyy-MM-dd *— for example, 2013-03-01

                - Time — *HH:mm:ss* — for example, 15:32:00

            - EQUALS with an Enumeration field allows multiple `<value>` elements. A golden record having any one of the specified values is considered to meet the criterion.

            - IS_INVALID — `<value>` is not used with this operator.

            - IS_NOT_NULL — `<value>` is not used with this operator.

            - IS_NULL — `<value>` is not used with this operator.

        - The valid values for filtering Boolean field values are true and false.

    - `<tags>` sets a filter by one or more tags, each of which is specified by `<tagName>`. Apply this filter such that a golden record having any one of the specified tags is considered to meet the tag criteria.

    - `<creatingSourceId>` sets a filter by a creating source specified by its source ID.

    - `<sourceLink>` sets a filter by the presence or absence of links to a source.

      - The `<sourceId>` element specifies the source by its ID.

      - The `<linkType>` element contains either LINKED, for filtering by the presence of links, or NOT_LINKED, for filtering by the absence of links.

    :::note

    If the universe (domain) has one or more attached sources configured with the option to allow multiple links to golden records, processing time for requests in which you set the `<sourceLink>` filter might be significantly longer than other requests.

    :::

    - `<unresolvedReference>` sets a filter by the presence of unresolved reference field data.

      - The `<fieldId>` element specifies a reference field by its ID.

      - The `<sourceId>` element contains either a source by its ID or @all, which limits results to golden records for which all source contributions are unresolved.

:::note

You can find a field’s ID in the model page’s **Fields** tab in Boomi DataHub. A source’s ID can be found on the **Sources** page in Boomi DataHub.

:::


The query specified in the following sample request body retrieves the values of the account name, phone, and website fields \(IDs, ACCOUNT\_NAME, PHONE, and WEBSITE\) in golden records, sorted in descending order by the date of the last update, that meet any of these filtering criteria:

```xml

<RecordQueryRequest>
   <view>
       <fieldId>ACCOUNT_NAME</fieldId>
       <fieldId>PHONE</fieldId>       ...
       <fieldId>WEBSITE</fieldId>
   </view>
   <sort>
       <sortField>
           <fieldId>@updatedDate</fieldId>
           <direction>DESC</direction>
       </sortField>
   </sort>
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
</RecordQueryRequest>

```




## Responses 

-   200 \(OK\) The body contains the XML representation of the query results. The root element `<RecordQueryResponse>` has a resultCount attribute that specifies the number of golden records returned and a totalCount attribute that specifies the total number of records that meet the filter criteria. You can use the returned offsetToken attribute value in a subsequent Query Golden Records request to get the next “page” of results.

:::note

For reference fields, record title is not a part of the record query response.

:::

    Each `<Record>` element represents a golden record. The recordId attribute value is the golden record ID. The createdDate attribute value is the time stamp of the creation of the golden record. The updatedDate attribute value is the time stamp of the last update of the golden record.

    -   `<Record>` has the child element `<Fields>`. If in `<RecordQueryRequest>` the includeSourceLinks attribute value was true, `<Record>` has an additional child element `<links>`.

    -   Within `<Fields>`, the root element has the same name as the root element name in the universe.

    -   That element’s child elements correspond to the fields in the universe’s model. Each such element contains the field value.

    - Field values are masked if model fields contain masking configurations, the user cannot view masked data, and the request uses JWT authentication. Masking is not applied with basic authentication.  

    -   If `<links>` is present, it represents the golden record’s established links to sources, each one represented by a `<link>` element which has the following attributes:

        -   *source* — source’s user-specified unique ID in

        -   *entityId* — source entity ID

        -   *establishedDate* — time stamp of the establishment of the link

    The following sample response body is for a request in which `<RecordQueryRequest>` had the *includeSourceLinks* attribute value of *true*:

    ``` xml
    <RecordQueryResponse resultCount="200" totalCount="812" offsetToken="MjAw">
       <Record recordId="cd9fc80d-1997-4670-83a7-39de2e287134" createdDate="2019-04-17T19:36:17Z" updatedDate="2019-07-13T19:36:17Z" recordTitle="Hosted Problems">
          <Fields>
             <account>
                <account_name>Hosted Problems</account_name>
                <phone>311 555-0989</phone>
                <website>http://www.hostedproblems.biz/</website>
             </account>
          </Fields>
          <links>
             <link source="SF" entityId="968" establishedDate="2019-05-11T14:45:33Z"/>
             <link source="NS" entityId="693" establishedDate="2019-04-17T21:13:03Z"/>
          </links>
       </Record>
       <Record recordId="da306e61-1c58-400f-a447-4116c52b4759" createdDate="2019-04-17T19:33:02Z" updatedDate="2019-07-13T19:33:12Z" recordTitle="Pillars by Phil">
          <Fields>
             <account>
                <account_name>Pillars by Phil</account_name>
                <phone>311 555-1256</phone>
                <website>http://www.pillarsbyphil.biz/</website>
             </account>
          </Fields>
          <links>
             <link entityId="822" source="SF" establishedDate="2019-05-11T12:10:42Z"/>
          </links>
       </Record>
       .
       .
       .
       <Record recordId="769267c5-990e-4342-b76c-fce2e8ba76c8" createdDate="2019-04-17T15:48:58Z" updatedDate="2019-07-13T16:14:58Z" recordTitle="Doors and More">
          <Fields>
             <account>
                <account_name>Doors and More</account_name>
                <phone>311 555-4661</phone>
                <website>http://www.doorsnmore.biz/</website>
             </account>
          </Fields>
          <links>
             <link source="SF" entityId="904" establishedDate="2019-05-11T14:45:33Z"/>
             <link source="NS" entityId="366" establishedDate="2019-04-17T21:13:03Z"/>
          </links>
       </Record>
    </RecordQueryResponse>
    
    ```

-   400 \(Bad Request\) The *universeID* parameter value contains only space characters. Sample response body:

    ```xml
    <error>
          <message>The given universe id is blank.</message>
    </error> 
    ```

-   400 (Bad Request) A `<fieldId> `element is specified that is not in the deployed version of the universe’s model. Sample response body:
    ```xml
    <error>
        <message>This 'fieldId', 'FOUNDER', is not in the model 'VENDOR'.</message>
    </error> 
    ```

-   400 \(Bad Request\) The `<view>` element has an empty child `<fieldId>` element. Sample response body:

    ```xml
    <error>
          <message>Each 'fieldId' element in the VIEW must be non-blank: fieldId = 'AGE'.</message>
    </error> 
    ```

-   400 \(Bad Request\) A `<sortField>` element either omits a child `<fieldId>` element or has an empty child `<fieldId>`. Sample response body:

    ```xml
    <error>
          <message>Each 'sortField' element must have a 'fieldId' element which is non-blank.</message>
    </error> 
    ```

-   400 \(Bad Request\) A `<sortField>` element specifies a field of a type that does not support sorting. Sample response body:

    ```xml
    <error>
          <message>Sorting on this field type is not supported: fieldId = 'MANAGER'; type = 'REFERENCE'.</message>
    </error> 
    ```

-   400 \(Bad Request\) A `<sortField>`element specifies an invalid sorting direction. Sample response body:

    ```xml
    <error>
          <message>Each 'direction' element in the sort must be one of: ASC or DESC.</message>
    </error> 
    ```

-   400 \(Bad Request\) The `<recordIds>` element, which you use to set a filter by golden record ID, is present but empty. Sample response body:

    ```xml
    <error>
          <message>The 'recordIds' element must contain at least one 'recordId' element.</message>
    </error>
    ```

-   400 \(Bad Request\) The `<recordIds>` element has an empty child `<recordId>` element. Sample response body:

    ```xml
    <error>
          <message>The 'recordId' cannot be blank when the element is present.</message>
    </error>
    ```

-   400 \(Bad Request\) The `<recordIds>` element has more than the maximum allowed 100 child `<recordId>` elements. Sample response body:

    ```xml
    <error>
          <message>The 'recordIds' element contains more than 100 'recordId' elements.</message>
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

- 400 (Bad Request) The `<creatingSourceId>` element, which you use to set a filter by creating source, is present but empty. Sample response body:

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
        <message>The field type for an 'unresolvedReference' condition must be REFERENCE: 
        fieldId = 'AGE'.</message>
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
        <message>This date has a bad value in it or is not formatted correctly (YYYY-MM-DD): 
        '2013-3-1'; fieldId = 'BIRTHDATE'.</message>
    </error> 
    ```

- 400 (Bad Request) A Time field value specified in a filter criterion is incorrectly formatted. Sample response body:

    ```xml
    <error>
        <message>This time has a bad value in it or is not formatted correctly (00:00:00): 
        '3:32pm'; fieldId = 'ARRIVING'.</message>
    </error> 
    ```

-   403 \(Forbidden\) The request does not contain a properly formatted RecordQueryRequest object. Sample response body:

    ```xml
    <error>
        <message>Unable to unmarshal RecordQueryRequest object from request stream.</message>
    </error>
    ```

- 403 (Forbidden) Access to this API endpoint is not enabled for this account. The response body is empty.

- 404 (Not Found) *universeID* does not identify a universe under the authenticated account. Sample response body:

    ```xml
    <error>
    <message>A universe with id 'ac11cc59-c77a-4afe-8c92-ed86a7daabec' does not exist.</message>
    <message>Universe definition with id 'ac11cc59-c77a-4afe-8c92-ed86a7daabec' could not be loaded 
    from plugin component directory 'plugins/mdm/bundles/ac11cc59-c77a-4afe-8c92-ed86a7daabec'.</message>
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
