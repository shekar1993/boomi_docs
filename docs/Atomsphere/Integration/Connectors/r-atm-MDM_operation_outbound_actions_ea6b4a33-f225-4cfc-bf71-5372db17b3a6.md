# Boomi Master Data Hub (legacy) operation’s outbound actions

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-ea6b4a33-f225-4cfc-bf71-5372db17b3a6"/>
</head>

You can configure the Boomi Master Data Hub (legacy) operation to enable data to flow to the Hub from a source system contributing master data.

:::info

This connector is available only for existing integrations. For new integrations, use the [Boomi DataHub connector](docs/Atomsphere/Integration/Connectors/int-Boomi_Data_Hub_connector.md), which offers more operations and an improved experience.

:::

The connector batches contributed source entities and routes each batch to the destination repository using a Repository API [Update Golden Records](../../Master%20Data%20Hub/REST%20APIs/r-mdm-Update_Golden_Records_fdad4dc4-f3db-48ab-8ba7-d027ecc10791.md) operation request. The maximum batch size is 200 entities. It automatically creates multiple batches if the number of contributed entities exceeds 200.

The connector populates the trackback ID at the header level of each batch, and it contains the ID of the account under which the run occurs, the  execution ID and date. and the date. This information enables a link in the Boomi DataHub batch report to run on the Integration Process **Reporting page**.

For all outbound operations, you need to send request XML data to the connector that corresponds with the defined XML profile. In most cases, request documents are the destination output of a map. However, you can also set parameters on the outbound connector's **Parameter** tab within the process to supply static or dynamic request values.

Successful completion of an outbound operation indicates that it batched the source entity for routing to the repository, not that it completed processing.



## Delete 

The Delete connector action is not valid. The Upsert action allows for requests to end-date golden records.

## <a name="Upsert">Upsert</a>

The Upsert action allows for submission of batches of source entities.

In an entity, the following op attribute values have special significance:

-   CREATE — force the creation of a golden record even though it might be a duplicate.

-   DELETE — end-date the matching golden record.


The result of the Upsert for an individual entity can be one of the following:

- Creation of a golden record

- Updating a golden record

- End-dating a golden record

- Linking a golden record to the entity

- Linking a golden record to the entity and updating of the same golden record

- No operation on a golden record

- Quarantining the entity