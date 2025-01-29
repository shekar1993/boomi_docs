# Boomi Master Data Hub (legacy) operation’s inbound actions

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-02ee8905-a7de-4aaa-85e4-84a1a041c28e"/>
</head>

You can configure the Boomi Master Data Hub (legacy) operation to enable data to flow from the Hub to a source application contributing master data.

For all inbound operations, it requires statically- or dynamically-defined unique parameters at runtime to request data.

:::info

This connector is available only for existing integrations. For new integrations, use the [Boomi DataHub connector](docs/Atomsphere/Integration/Connectors/int-Boomi_Data_Hub_connector.md), which offers more operations and an improved experience.

:::

## Get 

This action requests retrieval of a single golden record.

-   If you specify a contributing **Source** in the operation, this action requests a Repository API [Get Golden Record for Source Entity](../../Master%20Data%20Hub/REST%20APIs/hub-Get_Golden_Record_for_Source_Entity_Repository_3da9d02c-21a0-4daf-8d60-539632b6bc00.md) operation. The ID parameter passed to the connector specifies the golden record to retrieve by its source entity ID.

-   If you do not specify a contributing **Source** in the operation, this action requests a Repository API [Get Golden Record](../../Master%20Data%20Hub/REST%20APIs/r-mdm-Get_Golden_Record_640b6051-a785-4c39-91b7-b9d143c40bed.md) operation. The ID parameter passed to the connector specifies the golden record to retrieve by its ID.

## <a name="Query">Query</a> 

This action requests one or more Repository API [Fetch Channel Updates](../../Master%20Data%20Hub/REST%20APIs/r-mdm-Fetch_Channel_Updates_403852dd-1ebe-4cca-861f-8d423f6415a9.md) operations. The number of operations is dependent upon the **Manually Acknowledge** setting on the **Options** tab and the presence of source record update requests on the channel for the specified contributing **Source**. Each such operation requests delivery of update requests on the channel as a batch and may or may not acknowledge delivery of a previously delivered batch. The maximum batch size is 200 update requests.

-   If you clear **Manually Acknowledge** \(the default\), there is an initial Fetch Channel Updates request that does not acknowledge a previous delivery. If that operation successfully delivers a batch, a subsequent Fetch Channel Updates request acknowledges that delivery and requests delivery of the next batch. Processing loops in this manner until there are no more update requests in the channel.

-   If you select **Manually Acknowledge**, there is a single Fetch Channel Updates request. If you set the dynamic process property mdm-current-delivery-id, it acknowledges the previously delivered batch whose specified delivery ID is the property value. If that operation successfully delivers a batch, mdm-current-delivery-id is set to the delivery ID to enable future acknowledgment of that delivery. If **Fetch Single Update Request** is also selected, the operation attempts to deliver a single update request rather than a batch.



:::note

It ignores filters set for the  Query because it must fetch all pending update requests on the channel to synchronize the source system.

:::