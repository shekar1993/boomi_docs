import OperationEnd from './_operationEnd.md'
import TrackingDir from './_TrackObject.md'
import ReturnErrRes from './_ReturnResponse.md'


# Marketo — Partner operation 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-8c09e03f-9f40-4e23-aaf9-1ba9ea8e4523"/>
</head>


The Marketo — Partner operation defines how to interact with your Marketo account.

The operation represents a specific action, such as Query and Get, to be performed against a specific Marketo — Partner object type. For example, Organization, Incident, Contact and so on. Not all objects are available for each action. Create a separate Operation component for each action and object combination required for your integration.

The Marketo operation supports the following actions:

-   **Inbound**: Get, Query

    You can configure the Marketo — Partner operation’s inbound actions to retrieve document records from a Marketo account. It requires unique parameters at run-time to request data. To understand how to statically or dynamically define values in a process for run-time, review the topic about parameter values.

-   **Outbound**: Upsert

    You can configure the Marketo operation’s outbound actions to send data to a Marketo account. For Upsert operations, send request XML data into the connector that corresponds with the defined XML profile. Most often, request documents are the destination output of a map. However, you can also set parameters on the outbound connector's **Parameter** tab within the process to supply static or dynamic request values.


:::note 

Contact your Marketo representative to learn about the API requirements for your Marketo account and how to access the integration guides in the user community for field definitions. Also refer to the Marketo Success page for web support.

:::

:::note 

The documentation for this connector is provided by a partner. However, encourages you to take advantage of the new functionality provided by the Marketo REST connector.

:::

## **Options** tab 

Click **Import Operation**, then use the Import wizard to select the object with which you want to integrate. The following table describes the default field definitions for each action type:




<TrackingDir />

<ReturnErrRes />

## Get 

Get is an inbound action for which you supply a single internal ID for the object record you want to retrieve. Supplying one internal ID returns one object record document. The Lead object type is the only object currently supported for Get actions in the Marketo connector. To retrieve records dynamically with a Get ID, you can perform a Query action that retrieves a list of IDs that you can use as a dynamic input parameter for the Get action.

## Query 

Query is an inbound action for which you supply static or dynamic request parameters \(filters\) to control the object records selected from Marketo. It can return zero or more object record documents from a single Query request.

## Upsert 

Upsert is an outbound action that provides a convenient way to do common *insert-new-or-update-existing* integrations. Instead of doing a lookup against Marketo to determine if a record exists and then performing separate insert or update mappings and calls, you can map the Upsert request and let the Marketo connector determine whether to do an insert or update.

To update existing leads, supply the internal ID field in the request to update the existing object record. If the internal ID is not readily available in your source data, you can use a connector call function to query data based on a standard value such as email.

<OperationEnd />