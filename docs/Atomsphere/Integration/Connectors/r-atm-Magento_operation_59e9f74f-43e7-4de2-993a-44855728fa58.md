import OperationEnd from './_operationEnd.md'
import TrackingDir from './_TrackObject.md'
import ReturnErrRes from './_ReturnResponse.md'


# Magento operation 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-59e9f74f-43e7-4de2-993a-44855728fa58"/>
</head>


The Magento operation defines how to interact with your Magento account.

The operation represents an action performed against a Magento record type or object. Create a separate operation component for each action and object combination required for your integration. Not all actions are available for every object.

The Magento operation supports the following actions:

-   **Inbound**: Configure the Magento operation to retrieve object records from a Magento account. It requires unique parameters at runtime to request data. See the topic about parameter values to understand how to statically or dynamically define these values in a process for runtime.
    -   **Query** — queries records for Products, Customers, Orders, and Invoices. The Query action enables to look up object records based on specific search criteria. The Query action returns zero to many documents from a single request based on one or more filters. After you select the Query connector action and use the **Import Wizard**, you can select fields and add query filters. Query actions have only a response profile.
    -   **Get** — uses the Magento record ID to get records for Products, Customers, Orders, and Invoices.

-   **Outbound**: Configure the Magento operation to send data to a Magento account. For all outbound operations, send request JSON data into the connector that corresponds with the defined JSON profile. Usually, request documents are the destination output of a map. However, you can also set parameters on the outbound connector's **Parameter** tab within the process to supply static or dynamic request values.

    -   **Create** — creates records for Products, Customers, Orders, and Invoices.
    -   **Delete** — deletes records for Products and Customers.

    -   **Update** — updates records for Products, Customers, Orders, and Invoices.

    -   **Upsert** — upserts records for Products and Customers. To perform this action on Customer object types, complete these fields: firstname, lastname, email, website\_id

## **Options** tab 

Click **Import Operation**, then use the Import wizard to select the object with which you want to integrate. The following table describes the field definitions for each action type.
 


<TrackingDir />

**Request Profile** - 
 The JSON profile component that represents the JSON structure sent by the connector.

**Response Profile** - 
 The JSON profile component that represents the JSON structure received by the connector.

<ReturnErrRes />

<OperationEnd />