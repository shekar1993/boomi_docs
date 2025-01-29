# LaminarHub - Partner operation 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-ca77e2d1-aca9-4629-b647-e9cca46ec48b"/>
</head>

The LaminarHub - Partner operations define how to interact with your LaminarHub
environment. The operation represents a specific action, such as Get or Insert to be performed
against a specific LaminarHub customer environment. Create a separate operation component
for each action that your integrations require.

The LaminarHub - Partner operations use JSON format and support the following actions:

- Inbound: Get
- Outbound: Insert

## Insert

Insert is an outbound action to send a transaction to the LaminarHub. A JSON profile is created by
using the Import Operation feature. If the Insert operation is successful, the transaction is uploaded
to LaminarHub and the connector returns a JSON document with information about the status of the
insert.

## Get

Get is an inbound action to download a transaction from the LaminarHub. A JSON profile is created by
using the Import Operation feature.

**Filter Status** - 
The Get operation does not accept any input parameters. Instead, select the Filter Status setting that
matches your use case:

- **To Be Reprocessed** – This selects transactions a user has marked as needing to be
reprocessed.
- **To Be Resent** – This selects transactions a user has marked as needing to be resent.