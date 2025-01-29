# Approve Quarantined Entity

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-0f13ece8-6ee6-4bcd-8446-0dad4648feaf"/>
</head>

The Approve Quarantine Entity operation allows the authenticated user to approve a quarantined entity to create, update, or end-date a golden record. 

You can obtain a list of entity transactions using the [Query Transactions](/docs/Atomsphere/Master%20Data%20Hub/REST%20APIs/hub-Query_Transactions.md) operation or in the quarantined entity detail screen in the user interface.

## Basic authentication 

-   To perform this operation using Basic auth, send an empty **HTTP POST** request to:

    `https://<host>:<port>/mdm/universes/<universeID>/quarantine/<transactionID>/approve`

## JWT authentication

- To perform this operation using JSON Web Token (JWT) auth, send an **HTTP POST** request to:
  `https://<host>:<port>/mdm/universes/<universeID>/quarantine/<transactionID>/approve?repositoryId=<repository ID>`

  You must have the following MDM privileges: 

- With the Advanced Security feature on your account:
    - **MDM - Stewardship** with the **Approve Creates**, **Approve Updates**, **Approve Updates Specifying Base Values**, **Approve End-dating** and **Approve Updates** Hub role entitlement for repository
    or
    - **MDM - Stewardship Management**

- Without Advanced Security:
    - **MDM - Stewardship**

## Path parameters 

**universeID**  
ID of the universe

**transactionID**

ID of the transaction you want to approve. You can obtain a list of entity transactions using the [Query Transactions](/docs/Atomsphere/Master%20Data%20Hub/REST%20APIs/hub-Query_Transactions.md) operation or in the quarantined entity detail screen in the user interface.

## Query parameters

**baseValueUpdate**<br></br>

If set to true, entity is approved with the base value. You can use this parameter when the quarantine cause is REQUIRES_UPDATE_WITH_BASE_VALUE_APPROVAL. 

**repositoryId**<br></br>
ID of the repository. Case sensitive. Required with JWT authentication only. You can obtain the repository ID from the URL after navigating to the repository in the user interface.

## Request body

The request body is empty for this operation.


## Responses 

- 200 (OK) The body of the response is XML. The root element is `<ApprovalResponse>`. Within that element `<success>` contains a Boolean value indicating the deletion of the retrieved quarantine entry — true for success. For a successful deletion, the `<transaction>` element indicates the subsequent creation, updating, or end-dating of a golden record or the creation of a quarantine entry.
    - **Id** - the ID of the entity transaction.
    - **updatedDate** - the approval data of the entity.
    - **state** - status of the transaction:
    - **PROCESSING** - The entity is currently processing in Boomi DataHub.
    - **QUARANTINED** - The entity is quarantined and awaits manual resolution.
    - **COMPLETED** - Processing completed, resulting in the creation, updating, or end-dating of a golden record or no operation on a golden record.
    - **ERRORED** - Processing ended due to an unexpected error.
    - **DELETED** - After quarantining the entity, its entry was manually deleted, thus ending the transaction.
  - **stateDetail** - status of the transaction.

    Sample response body for creation of a golden record:

    ```xml
    <ApprovalResponse resolution="USER_APPROVED">
    <success>true</success>
    <transaction id="25bf1ff0-f4bc-4799-a4f0-3fe4280c0cf7" updatedDate="2024-09-10T19:12:51.810Z" state="COMPLETED" stateDetail="CREATED"/>
    </ApprovalResponse>```

    Sample response body for updating of a golden record:

    ```xml
    <ApprovalResponse xmlns:mdm="http://mdm.api.platform.boomi.com/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <success>true</success>
    <transaction stateDetail="UPDATED" state="COMPLETED" updatedDate="2017-02-03T04:15:24.819Z" id="85c6b81f-71a4-46d5-879a-08db316479f9"/>
    </ApprovalResponse>
    ```

    Sample response body for end-dating of a golden record:

    ```xml
    <ApprovalResponse xmlns:mdm="http://mdm.api.platform.boomi.com/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <success>true</success>
     <transaction stateDetail="DELETED" state="COMPLETED" updatedDate="2017-02-03T04:15:24.819Z" id="85c6b81f-71a4-46d5-879a-08db316479f9"/>
    </ApprovalResponse>```

    Sample response body for creation of a quarantine entry:

    ```xml
    <ApprovalResponse xmlns:mdm="http://mdm.api.platform.boomi.com/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <success>true</success>
    <transaction id="6dcec710-63f9-48db-9b1b-0409237b6858" updatedDate="2016-12-08T18:39:25.178Z" state="QUARANTINED" stateDetail="INCORPORATE_ERROR"/>
    </ApprovalResponse>```

- 400 (Bad Request) transactionID parameter value contains only space characters. Sample response body:

    ```xml
    <error>
   <message>The given transaction ID is blank.</message>
    </error>```

- 400 (Bad Request) The universeID parameter value contains only space characters. Sample response body:

    ```xml
    <error>
        <message>The given universe id is blank.</message>
    </error>```

- 404 (Not Found) transactionID does not exist as Quarantine entry. Sample response body:

    ```xml
    <error>
    <message>A quarantine entry associated with transaction ID '85c70a72-80ea-40dc-be45-93696ae6127a' does not exist.</message>
    </error>```

- 404 (Not Found) universeID does not identify a universe under the authenticated account. Sample response body:

    ```xml
    <error>
        <message>A universe with id 'ac11cc59-c77a-4afe-8c92-ed86a7daabec' does not exist.</message>
        <message>Universe definition with id 'ac11cc59-c77a-4afe-8c92-ed86a7daabec' could not be loaded from plugin component directory 'plugins/mdm/bundles/ac11cc59-c77a-4afe-8c92-ed86a7daabec'.</message>
    </error>```

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
        </error>```

