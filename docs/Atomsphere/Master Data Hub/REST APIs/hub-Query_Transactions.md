# Query transactions

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-27c9372e-9c64-4946-ad91-718ed4798d49"/>
</head>

The Query Transactions operation lets you query all the entity transactions in a deployed model using your filter criteria. The response includes deleted, incorporated, and quarantined entities and entities still processing. The response also includes any entity transactions that resulted in an unexpected error.

## Basic authentication 

-   To perform this operation using Basic auth, send an **HTTP POST** request to:

    `https://<host>:<port>/mdm/universes/<universeID>/transactions`

## JWT authentication

- To perform this operation using JSON Web Token (JWT) auth, send an **HTTP POST** request to:
  `https://<host>:<port>/mdm/universes/<universeID>/transactions?repositoryId=<repository ID>`

You must have the following MDM privileges:

- MDM - View Data

## Path parameters

**universeID**  
ID of the universe

## Query parameters

**repositoryId** <br></br>
ID of the repository. Case sensitive. Required with JWT authentication only. You can obtain the repository ID from the URL after navigating to the repository in the user interface.

## Request parameters

The following parameters appear in the request body:

Within the `<TransactionQueryRequest>` element, you can set the following attributes:

- **offsetToken**(optional) - Sets the starting point to retrieve records which allows you to skip a specific number of records. For example, in a set of 20 records, 10 skips the first 10 records and queries the remaining 10.

- **limit**(optional) - Sets the maximum number of query results to return. 200 is the maximum value and the default.

- **includeEvents**(optional) - If set to `true`, it includes individual transaction events in the response. It provides details about the event. For example, if it is a quarantine event, it provides the error message. If it is a record creation event, it provides the golden record ID. The default is `false`.

You can use the following filter criteria for your query:

- **sourceEntityId**(optional) - Sets the filter to show transactions associated with the specified source entity. It must be URL encoded if it contains special characters.

- **sourceId**(optional) - Sets the filter to show all transactions contributed by the specified source.

- **startFromDate**(optional) - Sets the filter to show all transactions starting from the specified event start date/time of processing. Format is `yyyy-MM-dd'T'HH:mm:ss'Z'`. Value can be an empty string. The specified times are UTC.

- **startToDate**(optional) - Sets the filter to show all transactions occurring before the specified event start date/time of processing. Format is `yyyy-MM-dd'T'HH:mm:ss'Z'`. Value can be an empty string. The specified times are UTC.

- **endFromDate**(optional) - Sets the filter to show all transactions starting from the specified event end date/time of processing. Format is `yyyy-MM-dd'T'HH:mm:ss'Z'`. Value can be an empty string. The specified times are UTC.

- **endToDate**(optional) - Sets the filter to show all transactions occurring before the specified event end date/time of processing. Format is `yyyy-MM-dd'T'HH:mm:ss'Z'`. Value can be an empty string. The specified times are UTC.

## Request body example

In the request body, wrap the entities in a `<TransactionQueryRequest>` element.

```xml
<TransactionQueryRequest xmlns:mdm="http://mdm.api.platform.boomi.com/"
 xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" offsetToken="" limit="" includeEvents="">
  <sourceEntityId>S1-1234</sourceEntityId>
  <sourceId>S1</sourceId>
  <startFromDate>2023-06-11T07:28:32</startFromDate>
  <startToDate>2024-05-11T07:28:32</startToDate>
</TransactionQueryRequest>
```

## Responses 

- 200 (OK) The body contains the XML representation of the query results. It returns a maximum of 200 results per request unless the limit query parameter for a given request specifies a lower maximum number of results.

  Each `<Transaction>` element represents a contributing source entity transaction. The elements are sorted by the startDate time stamp attribute value, from oldest to newest. `<event>` elements are sorted by the eventDate time stamp attribute value, from oldest to newest.The element has the following attributes:

  - **Id** - transaction Id
  - **sourceId** - source Id of the contributed entity. Indicates the source associated with the transaction
  - **sourceEntityId** - source entity ID of the contributed entity
  - **startDate** - time stamp of the start of this transaction
  - **endDate** - time stamp of the completion of this transaction
  - **state** - status of the transaction:
    - **PROCESSING** - The entity is currently processing in Boomi DataHub.
    - **QUARANTINED** - The entity is quarantined and awaits manual resolution.
    - **COMPLETED** - Processing completed, resulting in the creation, updating, or end-dating of a golden record or no operation on a golden record.
    - **ERRORED** - Processing ended due to an unexpected error.
    - **DELETED** - After quarantining the entity, its entry was manually deleted, thus ending the transaction.
  - **stateDetail** - detailed status of the transaction.

    If you set the IncludeEvents attribute in the request to true, it includes `<event>` elements within `<Transaction>` for each retrieved transaction. Within each `<event>` element:

  - `<description>` is the event description.
  
    The attributes of the `<event>` element are as follows:

    - **eventType** — event type

    - **eventDate** — time stamp of the event

Sample response body:

  ```xml
  <TransactionQueryResponse resultCount="13" totalCount="13">
    <Transaction id="3fd7111f-9930-4ed5-ab60-3d2d6d3b7d3e" sourceId="S1" startDate="2024-02-15T21:43:25Z" state="QUARANTINED" stateDetail="PARSE_FAILURE">
        <event eventDate="2024-02-15T21:43:25Z" eventType="QUARANTINE">
            <data1>PARSE_FAILURE</data1>
            <data2>The given record does not conform to the universe layout's schema definition: cvc-complex-type.2.4.d: Invalid content was found starting with element 'email'. No child element is expected at this point.</data2>
        </event>
        <event eventDate="2024-02-15T21:43:25Z" eventType="SUBMIT">
            <data1>S1</data1>
        </event>
    </Transaction>
    <Transaction id="f562553e-c2fe-4488-aa7c-228b6d5a1f37" sourceId="S1" startDate="2024-02-15T21:43:25Z" state="QUARANTINED" stateDetail="PARSE_FAILURE">
        <event eventDate="2024-02-15T21:43:25Z" eventType="QUARANTINE">
            <data1>PARSE_FAILURE</data1>
            <data2>The given record does not conform to the universe layout's schema definition: cvc-complex-type.2.4.d: Invalid content was found starting with element 'email'. No child element is expected at this point.</data2>
        </event>
        <event eventDate="2024-02-15T21:43:25Z" eventType="SUBMIT">
            <data1>S1</data1>
        </event>
    </Transaction>
    <Transaction id="589a4e73-5ca3-4ac5-8832-79ce21062d04" sourceId="S1" startDate="2024-02-15T21:43:25Z" state="QUARANTINED" stateDetail="PARSE_FAILURE">
        <event eventDate="2024-02-15T21:43:25Z" eventType="QUARANTINE">
            <data1>PARSE_FAILURE</data1>
            <data2>The given record does not conform to the universe layout's schema definition: cvc-complex-type.2.4.d: Invalid content was found starting with element 'email'. No child element is expected at this point.</data2>
        </event>
        <event eventDate="2024-02-15T21:43:25Z" eventType="SUBMIT">
            <data1>S1</data1>
        </event>
    </Transaction>
    <Transaction id="9c57c794-bbd4-4da2-beb8-c76520b5f6b3" sourceId="S1" startDate="2024-02-15T21:43:25Z" state="QUARANTINED" stateDetail="PARSE_FAILURE">
        <event eventDate="2024-02-15T21:43:25Z" eventType="QUARANTINE">
            <data1>PARSE_FAILURE</data1>
            <data2>The given record does not conform to the universe layout's schema definition: cvc-complex-type.2.4.d: Invalid content was found starting with element 'email'. No child element is expected at this point.</data2>
        </event>
        <event eventDate="2024-02-15T21:43:25Z" eventType="SUBMIT">
            <data1>S1</data1>
        </event>
    </Transaction>
    <Transaction id="1abe3633-c5e8-465e-9762-aeaa7897abcf" sourceId="S1" sourceEntityId="1234" startDate="2024-07-24T21:29:28Z" endDate="2024-07-24T21:29:28Z" state="COMPLETED" stateDetail="CREATED">
        <event eventDate="2024-07-24T21:29:28Z" eventType="COMPLETE">
            <data1>CREATED</data1>
            <data2>322f86fd-6205-48fc-9643-11976ac394c4</data2>
        </event>
        <event eventDate="2024-07-24T21:29:28Z" eventType="COMMIT">
            <data1>9f62433e-c005-403a-8030-ac202fbc9767</data1>
            <data2>1234</data2>
        </event>
    </Transaction>
    <Transaction id="c8f32878-0b9b-4df6-9676-2459a38f2725" sourceId="S1" sourceEntityId="5678" startDate="2024-07-24T21:29:28Z" endDate="2024-09-06T20:32:50Z" state="DELETED">
        <event eventDate="2024-09-06T20:32:50Z" eventType="DELETE">
            <user>AS-USER:13528</user>
        </event>
        <event eventDate="2024-07-24T21:29:28Z" eventType="QUARANTINE">
            <data1>POSSIBLE_DUPLICATE</data1>
            <data2>The entity is potentially a duplicate of a golden record(s) already linked to an entity in the source system.</data2>
        </event>
        <event eventDate="2024-07-24T21:29:28Z" eventType="COMMIT">
            <data1>9f62433e-c005-403a-8030-ac202fbc9767</data1>
            <data2>5678</data2>
        </event>
    </Transaction>
    <Transaction id="26609470-70af-47b6-8315-707969fe3629" sourceId="S1" sourceEntityId="0192" startDate="2024-07-24T21:29:28Z" endDate="2024-07-24T21:29:28Z" state="COMPLETED" stateDetail="CREATED">
        <event eventDate="2024-07-24T21:29:28Z" eventType="COMPLETE">
            <data1>CREATED</data1>
            <data2>ccfa1da0-0f7b-451e-92ca-e21b68eaf54e</data2>
        </event>
        <event eventDate="2024-07-24T21:29:28Z" eventType="COMMIT">
            <data1>9f62433e-c005-403a-8030-ac202fbc9767</data1>
            <data2>0192</data2>
        </event>
    </Transaction>
    <Transaction id="2b5ff444-7044-4853-85b0-d9e35a381e24" sourceId="S1" sourceEntityId="34587" startDate="2024-07-24T21:29:28Z" state="QUARANTINED" stateDetail="FIELD_FORMAT_ERROR">
        <event eventDate="2024-07-24T21:29:28Z" eventType="QUARANTINE">
            <data1>FIELD_FORMAT_ERROR</data1>
            <data2>The record's {account number} field value '2578298198728' is not in a valid INTEGER format.</data2>
        </event>
        <event eventDate="2024-07-24T21:29:28Z" eventType="COMMIT">
            <data1>9f62433e-c005-403a-8030-ac202fbc9767</data1>
            <data2>34587</data2>
        </event>
    </Transaction>
    <Transaction id="9282ae50-b9c7-4745-aa26-39a30bf7326d" sourceId="S1" sourceEntityId="678457" startDate="2024-07-30T20:04:08Z" endDate="2024-07-30T20:04:08Z" state="COMPLETED" stateDetail="CREATED">
        <event eventDate="2024-07-30T20:04:08Z" eventType="COMPLETE">
            <data1>CREATED</data1>
            <data2>f295fcd3-00ae-459a-8858-b4344263fa41</data2>
        </event>
        <event eventDate="2024-07-30T20:04:08Z" eventType="COMMIT">
            <data1>9f62433e-c005-403a-8030-ac202fbc9767</data1>
            <data2>678457</data2>
        </event>
    </Transaction>
    <Transaction id="68a80d64-159c-4efc-9ac0-51e383f94a8a" sourceId="S1" startDate="2024-09-06T21:05:55Z" state="QUARANTINED" stateDetail="PARSE_FAILURE">
        <event eventDate="2024-09-06T21:05:55Z" eventType="QUARANTINE">
            <data1>PARSE_FAILURE</data1>
            <data2>The given record does not conform to the universe layout's schema definition: cvc-complex-type.2.4.a: Invalid content was found starting with element 'customer'. One of '{id, first_name, last_name, sign_on_date, country, email, account_number}' is expected.</data2>
        </event>
        <event eventDate="2024-09-06T21:05:55Z" eventType="SUBMIT">
            <data1>S1</data1>
        </event>
    </Transaction>
    <Transaction id="203e8044-4652-47b8-9c3a-2f0b87713494" sourceId="S1" startDate="2024-09-06T21:07:04Z" state="QUARANTINED" stateDetail="PARSE_FAILURE">
        <event eventDate="2024-09-06T21:07:04Z" eventType="QUARANTINE">
            <data1>PARSE_FAILURE</data1>
            <data2>The given record does not conform to the universe layout's schema definition: cvc-complex-type.2.4.a: Invalid content was found starting with element 'customer'. One of '{id, first_name, last_name, sign_on_date, country, email, account_number}' is expected.</data2>
        </event>
        <event eventDate="2024-09-06T21:07:04Z" eventType="SUBMIT">
            <data1>S1</data1>
        </event>
    </Transaction>
    <Transaction id="b204bb8e-e8ae-4f66-9576-b622de2c3f15" sourceId="S1" sourceEntityId="S1-47832" startDate="2024-09-06T21:07:53Z" endDate="2024-09-06T21:07:53Z" state="COMPLETED" stateDetail="CREATED">
        <event eventDate="2024-09-06T21:07:53Z" eventType="COMPLETE">
            <data1>CREATED</data1>
            <data2>3903ce32-1676-4d19-8cde-493b019484f3</data2>
        </event>
        <event eventDate="2024-09-06T21:07:53Z" eventType="SUBMIT">
            <data1>S1</data1>
            <data2>S1-47832</data2>
        </event>
    </Transaction>
  </TransactionQueryResponse>
  ```


  - 400 (Bad Request) The universeID parameter value contains only space characters. Sample response body:

  ```xml
  <error>
    <message>The given universe id is blank.</message>
  </error>
  ```

  - 400 (Bad Request) The request does not contain a properly-formatted TransactionQueryRequest object. Sample response body:
  
  ```xml
  <error>
  <message>Unable to read message body. Please make sure the
    XML structureis correct.</message>
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
  <error>
    <message>You do not have permissions to access this resource.</message>
  </error>
  ```