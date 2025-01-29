# Master Data Hub

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-9fbbf6c3-d126-4007-86ec-edfc639cce77"/>
</head>



**Fixes:**

-   An error message occurred when you attempted to publish a model with publication notes that exceeded 255 characters. With this fix, the character limit for model publication notes is extended to 4000 characters. Master Data Hub truncates notes that exceed 4000 characters. \(HUB-1507\)
-   Master Data Hub created duplicate entries on the golden record’s reference source contribution page when it was resolved with a default source. This occurred after you purged a referenced golden record and re-created it from the same default source. With this fix, if you purge a golden record with a referenced field that resolves through a default source and then re-create it, only one source contribution entry exists for that default source in golden records. \(HUB-1691
-   Fetching channel updates from a universe with a reference field where the referenced universe was undeployed, resulted in a Success response with zero records. With this fix, fetching updates from a universe with a reference field where the referenced universe was undeployed results in a 404 error response indicating the referenced universe was not found. \(HUB-1692\)
-   If you deleted a source from the Sources page, attempting to deploy an older version of a model containing that source resulted in a vague error message. With this fix, the error message contains details about the deleted source to facilitate troubleshooting. \(HUB-1722\)
-   End-dating a golden record did not remove pending source links. The Outbound Activity page showed pending Create Record update requests. With this fix, end-dating a golden record automatically deletes pending source links and Create Record requests. If you restore a record, Master Data Hub restores pending links and Create Record requests. \(HUB-2072\)
-   Master Data Hub allowed you to delete the only contributing source linked to a golden record. With this fix, Master Data Hub prevents you from deleting it and displays an error message. \(HUB-2270\)
-   Master Data Hub allowed you to change the source type in a model’s source configuration to accept channel updates for the only contributing source linked to a golden record. With this fix, Master Data Hub prevents you from changing the source type and deleting a source in this scenario. \(HUB-2325\)
-   Users without permission to access the Outbound Activity, Inbound Activity, or Sources page could view those pages through a direct link. With this fix, you cannot view a page using a direct link if you do not have permission. \(HUB-2453\)
-   The Purge Data Immediately setting in Integration \> Manage \> Atom Management was not applied to Master Data Hub data quality processes. Process documents and temporary data associated with a data quality process were not deleted after the process ended. With this fix, if you set your Atom account to Purge Data Immediately, Boomi Integration deletes process files and temporary data from data quality processes. \(HUB-2500\)
-   An issue was fixed where incoming entities were quarantined with an Other Incorporation Error when a source contributed data. This issue occurred after you created a model containing tags using the Create Model endpoint. \(HUB-2652\)
-   After applying source ranking to an entire field group and deploying the model, Master Data Hub did not immediately recognize the source agreement. It allowed lower-ranking sources to contribute to fields in the field group after a higher-ranking source established values. With this fix, applying source ranking to an entire field group is immediately recognized after you deploy the model. \(HUB-2653\)
-   When a data entity contained null values in a repeatable field group, Master Data Hub quarantined the entity with an Unknown Error. This error occurred in scenarios where the field group values were used in match rules, and the first field group contained non-null values. This fix allows the entity to contribute non-null values to a golden record and allows Master Data Hub to ignore null values in repeatable field groups. \(HUB-2686\)