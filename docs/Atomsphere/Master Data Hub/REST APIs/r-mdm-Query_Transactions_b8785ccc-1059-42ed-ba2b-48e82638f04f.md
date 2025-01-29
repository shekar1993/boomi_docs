# Query Transactions 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-b8785ccc-1059-42ed-ba2b-48e82638f04f"/>
</head>


The Query Transactions operation sends a query of the transactions for a universe \(domain\) hosted in a repository under an account accessible to the authenticating user.

To perform this operation, send an HTTP POST request to:

`https://api.boomi.com/mdm/api/rest/v1/<accountID>/repositories/<repositoryID>/universes/<universeID>/transactions`

:::note

This operation requires the authenticating user to have the **API Access** and **MDM - View Data** privileges.

You can implement requests for this operation in processes using the [HTTP Client connector](/docs/Atomsphere/Integration/Connectors/r-atm-HTTP_Client_connector_d64af80e-febe-4cd2-89ad-e3d0fc53c502.md), as demonstrated by example 1 in the sample process [ Hub: Read Transaction Information](https://platform.boomi.com/#build;processLibrary=7a24b7d3-a197-410c-aa98-1a2519896ffa), which you can install in your account from the process library in Integration.

:::

The body of the request must conform to the following structure:

```xml
<mdm:TransactionQueryRequest xmlns:mdm="http://mdm.api.platform.boomi.com/"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" offsetToken="" limit="" includeEvents="">
   <mdm:sourceEntityId></mdm:sourceEntityId>
   <mdm:sourceId></mdm:sourceId>
   <mdm:startFromDate></mdm:startFromDate>
   <mdm:startToDate></mdm:startToDate>
   <mdm:endFromDate></mdm:endFromDate>
   <mdm:endToDate></mdm:endToDate>
</mdm:TransactionQueryRequest>
```

where

-   Setting the optional Boolean attribute includeEvents for `<mdm:TransactionQueryRequest>` to true includes individual transaction events in the response. The default is false.

-   You can use the optional offsetToken and limit attributes for `<mdm:TransactionQueryRequest>` or paging. The limit value is the maximum number of transactions to return per page. Boomi DataHub enforces a maximum of 200 transactions per page regardless of the limit value. The offsetToken value corresponds to the same value returned from a previous Query Transactions request.

-   `<mdm:sourceEntityId>` \(optional\) sets a filter by source entity ID. This filter is effective only if a filter is set, using `<mdm:sourceId>`, for the source of the transaction.

-   `<mdm:sourceId>` \(optional\) sets a filter by source. Specify the source by its unique ID.

-   `<mdm:startFromDate>` and `<mdm:startToDate>` \(both optional\) set a time span filter for transaction processing starting times. The format is *yyyy-mm-ddThh:mm:ss* — for example, 2015-07-31T14:25:07. The specified times are UTC.

-   `<mdm:endFromDate>` and `<mdm:endToDate>` \(both optional\) set a time span filter for transaction processing ending times. The format is *yyyy-mm-ddThh:mm:ss* — for example, 2015-07-31T14:25:07. The specified times are UTC.


You can omit elements corresponding to unused filter parameters from the request body.

For example:

```xml
<mdm:TransactionQueryRequest xmlns:mdm="http://mdm.api.platform.boomi.com/"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" offsetToken="abc" limit="10" includeEvents="true">
   <mdm:sourceId>netsuite</mdm:sourceId>
   <mdm:startFromDate>2016-09-15T23:47:00</mdm:startFromDate>
   <mdm:startToDate>2016-09-15T23:48:59</mdm:startToDate>
</mdm:TransactionQueryRequest>
```

## Path parameters 

**accountID** <br />
ID of the account

**repositoryID** <br />
ID of the repository

**universeID** <br />
ID of the universe

## Responses 

200 \(OK\) The body contains the XML representation of the query results. The root element `<mdm:TransactionQueryResponse>` has a totalCount attribute which specifies the total number of transactions satisfying the query and a resultCount attribute which specifies the number of transactions returned on this page of results. The offsetToken attribute is returned only if there are more results to retrieve for the query. You can use the returned token in a subsequent Query Transactions request to get the next page of results.

Each `<mdm:Transaction>` element has transaction metadata as attributes:

-   *id* — internal transaction ID

-   *sourceId* — ID of the source of the contributed entity

-   *entityId* — source entity ID of the contributed entity

-   *startDate* — time stamp of the start of this transaction

-   *endDate* — time stamp of the completion of this transaction

-   *state* — status of the transaction:

    -   PROCESSING — The entity is currently processing by the Boomi DataHub system.

    -   QUARANTINED — The entity is quarantined and awaits manual resolution.

    -   COMPLETED — Processing completed, resulting in the creation, updating, or end-dating of a golden record or no operation on a golden record.

    -   ERRORED — Processing ended due to an unexpected error.

    -   DELETED — After quarantining the entity, its entry was manually deleted, thus ending the transaction.

-   *stateDetail* — detailed status of the transaction


If you set the *IncludeEvents* attribute in the request to true, it includes `<mdm:event>` elements within `<mdm:Transaction>` for each retrieved transaction. Within each `<mdm:event>` element:

-   `<mdm:description>` is the event description.


The attributes of the `<mdm:event>` element are as follows:

-   *eventType* — event type

-   *eventDate* — time stamp of the event


`<mdm:Transaction>` elements are sorted by the startDate time stamp attribute value, from oldest to newest. `<mdm:event>` elements are sorted by the eventDate time stamp attribute value, from oldest to newest.

Sample response body:

```xml
<mdm:TransactionQueryResponse xmlns:mdm="http://mdm.api.platform.boomi.com/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
 totalCount="25" resultCount="10" offsetToken="MzA=">
  <mdm:Transaction stateDetail="CREATED" state="COMPLETED" endDate="2016-09-15T23:47:45Z" 
   startDate="2016-09-15T23:47:44Z" sourceEntityId="810BD45E0281301D867DE638C1BC10" sourceId="netsuite" 
   id="c49ba11d-49d9-4c27-8daf-cc9c7df4650a">
    <mdm:event eventType="SUBMIT" eventDate="2016-09-15T23:47:44Z">
      <mdm:description>Entity '810BD45E0281301D867DE638C1BC10' contributed by source 'Netsuite'.</mdm:description>
    </mdm:event>
    <mdm:event eventType="COMPLETE" eventDate="2016-09-15T23:47:45Z">
      <mdm:description>Golden record 'c9d2ab00-edb3-4f93-b279-b9e45ad70cd5' created.</mdm:description>
    </mdm:event>
  </mdm:Transaction>
  ...
  <mdm:Transaction stateDetail="UPDATED" state="COMPLETED" endDate="2016-09-15T23:48:14Z" 
   startDate="2016-09-15T23:48:13Z" sourceEntityId="92ACE56FA3924A2E978EF749D2CD2A" sourceId="netsuite" 
   id="5d98b284-353d-4737-aacf-cb5dfd95b9a8">
    <mdm:event eventType="SUBMIT" eventDate="2016-09-15T23:48:13Z">
      <mdm:description>Entity '92ACE56FA3924A2E978EF749D2CD2A' contributed by source 'Netsuite'.</mdm:description>
    </mdm:event>
    <mdm:event eventType="COMPLETE" eventDate="2016-09-15T23:48:14Z">
      <mdm:description>Golden record 'd5043312-199e-4e4d-9499-805eea06ac29' updated.</mdm:description>
    </mdm:event>
</mdm:TransactionQueryResponse>
```

-   400 \(Bad Request\) The authenticating user does not have the **API Access** and **MDM - View Data** privileges required for this operation. Sample response body:

    ```xml
    <error>
       <message>The authenticated user does not have access rights to this functionality</message>
    </error>
    ```

-   400 (Bad Request) The *universeID* parameter value contains only space characters. Sample response body:

    ```xml
    <error>
      <message>The given universe id is blank.</message>
    </error> 
    ```

- 400 (Bad Request) *repositoryID* does not identify a repository under the specified account. Sample response body:

  ```xml
  <error>
    <message>Could not find containerAccount for container id 
      dbe797ff-6d6f-44e9-acd9-d77494a44b15 and account id account-123456</message>
  </error>
  ```

-   400 \(Bad Request\) The request does not contain a properly-formatted TransactionQueryRequest object. Sample response body:

    ```xml
    <error>
       <message>Unable to read message body. Please make sure the
         XML structure and namespace are correct.</message>
    </error>
    ```

- 403 (Forbidden) Authentication failure. Sample response body:

  ```xml
  <UserMessage id="error.user.login" type="error">
    <Data>Incorrect user name and password combination.</Data>
  </UserMessage>
  ```

- 403 (Forbidden) One or more path parameter values are omitted. Sample response body:
  
  ```xml
  <UserMessage id="error.user.login" type="error">
    <Data>Incorrect user name and password combination.</Data>
  </UserMessage>
  ```

- 403 (Forbidden) *accountID* does not identify an account accessible to the authenticating user. Sample response body:
  
  ```xml
  <UserMessage id="error.user.login" type="error">
    <Data>Incorrect user name and password combination.</Data>
  </UserMessage>
  ```

- 404 (Not Found) *universeID* does not identify a universe hosted in the specified repository. Sample response body:

  ```xml
  <error>
    <message>A universe with id 'ac11cc59-c77a-4afe-8c92-ed86a7daabec' does not exist.</message>
  </error> 
  ```
 