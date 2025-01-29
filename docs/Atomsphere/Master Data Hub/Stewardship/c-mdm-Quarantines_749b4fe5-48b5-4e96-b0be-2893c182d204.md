# Quarantines 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-749b4fe5-48b5-4e96-b0be-2893c182d204"/>
</head>


A quarantine is a “holding pen” for incoming source entities that were not incorporated in a domain. A repository maintains a quarantine for each domain. During the maintenance phase of a Boomi DataHub project, resolving quarantine entries in a timely fashion is arguably a data steward’s most important responsibility.

The Quarantine page, accessed through the Stewardship menu, provides access to a domain’s quarantine and tools for deleting quarantine entries, resubmitting quarantined entities and resolving matching errors. On the page, you can optionally filter the list of quarantine entries by source, source entity ID, reason for quarantining, time span, tag, and entity field value, or by transaction ID.

The option to edit an individual quarantined entity on the Quarantine page and resubmit the edited entity exists if the currently deployed version of the domain model is the same as the version deployed at the time the entity were quarantined. If you want the edited data to propagate back to the contributing source, be sure to first properly configure the source’s channel and deploy the process that routes outgoing update requests to that source.

You can set up subscriptions in the Settings page in Integration in order to receive alerts via email about quarantined entities.

## What causes an incoming entity to be quarantined? 

An entity may be quarantined during validation, enrichment or incorporation:

-   During validation, an entity is quarantined for a data integration error if any of the following apply:

    -   the entity does not specify a source entity ID.

    -   the entity specifies operations on some but not all items in a collection.

    -   the entity specifies operations on items in a collection for which item matching by occurrence is enabled.

    An entity is quarantined for a data validation error if it contains a Long Text field value exceeding 5,000 characters.

-   During enrichment, if an entity fails a data quality step, the entity is quarantined. Data quality step success criteria varies from one data service to the next. This type of error is a data quality error.

-   During incorporation:

    -   If a golden record is not linked to an entity, the entity is quarantined if it does not have the fields necessary to apply any match rules.

        This type of error is a data validation error.

    -   If match rules are applied, an entity is quarantined if

        -   reference fields are specified for matching in a match rule and any of the values of those fields in the entity do not resolve to a golden record.

        -   the entity matches golden records that have already been linked to an entity in the source system and the source is configured to disallow multiple links from individual golden records to entities in the source system. This means the entity is a potential duplicate.

            :::note
            
            When a source configured to disallow multiple links is reconfigured to allow multiple links, entities contributed from that source that are currently quarantined as potential duplicates are automatically resubmitted for incorporation in the domain.

            :::

        -   the entity matches multiple golden records that are not yet linked to an entity in the source system.

        -   the entity matches more than 10 golden records, regardless of their links to source entities.

        This type of error is a matching error.

    -   An entity is also quarantined if

        -   fields in the entity that are specified as Required in the domain’s model are empty. \(Empty collections are exceptions; they are valid even if the collection definition in the model includes a required field.\)

        -   collections in the entity whose items are identifiable by matching key field values have missing key fields or multiple items with the same key field values.

        -   field values in the entity are not in the format specified in the domain’s model — for example, Number, Date/Time.

        -  the length of a value of a text or Enumeration field exceeds the Boomi DataHub system limit of 255 characters.

        -   text field values in the entity do not conform with requirements specified in the domain’s model as field validation options — for example, minimum length.

        -   the entity excludes a field value that is required.

        This type of error is a data validation error.

    -   An entity that would otherwise be eligible for incorporation in the domain as a new golden record is quarantined if the entity was contributed by a source whose new entity contributions are unconditionally or conditionally subject to manual approval.

        An entity that would otherwise be eligible for incorporation in the domain as an update to an existing golden record is quarantined if the entity was contributed by a source whose entity contributions updating any or selected fields or collections are unconditionally or conditionally subject to manual approval.

        An entity contributed by a source to which there is a pending link from the matching golden record, and in which a field has a base value, is quarantined if the entity was contributed by a source configured to require manual approval for such entities.

        :::note

        A field’s base value for a source is the value of the field in the matching golden record’s base version for the source. While there is a pending link from a golden record to a source, the base version of the golden record for that source is the golden record version when the pending link was created.

        :::

        An entity that would otherwise be eligible for incorporation in the domain by end-dating an existing golden record is quarantined if the entity was contributed by a source whose entity contributions that would end-date golden records are subject to manual approval.

    -   Lastly, an entity is quarantined if it is eligible for incorporation, but an error occurs during incorporation. For example, an incorporation error occurs if

        -   an entity has an unresolvable collection item reference or an entity has an unresolvable reference in a field for which referential integrity is enforced for incoming entity contributions.

        -   matching did not occur and a golden record is found to be already linked to a source entity with the ID specified in the entity. This situation can occur if an entity specifies the forced creation of a golden record or, if the found golden record is end-dated, if the source record update request specifying a Delete operation that was propagated when end-dating occurred either was not delivered or was not processed in the source system.


The remaining sections in this topic discuss actions you can take to resolve quarantine entries. For step-by-step instructions, refer to the topics linked below.

## Resolving data integration errors 

Quarantining for data integration errors is due to the absence of source entity IDs in the source entities constructed by the integration process that routes incoming batches to the repository. If the process was built and deployed with , start your troubleshooting by checking the Map component configuration. If you resolve the error by modifying and redeploying the process, you then need to delete the quarantine entries and re-execute the process.

## Resolving data quality errors 

Quarantining during the enrichment phase occurs because connection to the data quality service fails or the service determines that input entity data is invalid.

-   If you address the error by correcting the service connection information in the data quality step in the domain model and redeploying the model or by waiting until the data quality service comes back up, you then need to resubmit the quarantined entities for incorporation in the domain.

-   Otherwise, you can correct the source record data, delete the quarantine entries, and re-execute the process that routes incoming batches to the repository.

    If the currently deployed version of the domain model is the same as the version deployed at the time the entities were quarantined, you have the additional option to individually resubmit entities, either reapplying the failed data quality step and applying subsequent steps or applying only the steps subsequent to the failed step.


## Resolving matching errors 

During the maintenance phase of a Boomi DataHub project, a common quarantine management task is resolving matching errors arising from the application of match rules.

-   To resolve ambiguous matches, most commonly where entities match 10 or more golden records — for example, entities matched to a gender field in a contacts domain — you likely need to make the match rules in the domain model more restrictive. Once you modify and deploy the model, roll the domain forward to the new version and then resubmit the entities for incorporation in the domain.

-   To resolve potential duplicate errors, you have two options for each affected entity:

    -   Reject the potential duplicate. You can do this from the detail view for the quarantine entry. When you reject a potential duplicate, a source record update request for the contributed entity specifying a Reject Contributed Entity operation is propagated on the channel of the contributing source. This type of operation is unique to Boomi DataHub. If you enable data stewards to reject entities, make sure your Boomi DataHub to Source integrations handle Reject Contributed Entity operations, typically using one or more of the following techniques:

        -   Send a delete request to the source system to remove the record or an update request to flag the record.

        -   Send a notification email to the source system administrator.

        -   Log an entry in an auditing system.

    -   Attempt to resolve the potential duplicate using the Resolve Matching Issues wizard, which is accessible from the detail view for the quarantine entry. The wizard lets you resolve quarantine entries one at a time. In the wizard, for a given quarantined entity you can choose between the following methods:

        -   Indicate that each matching golden record is to be ignored and a new golden record is to be created — this effectively implies the source entity is not a duplicate.

        -   Select fields from the entity to merge into one of the matching golden records. This action also results in the rejection of the potential duplicate with the effects described above.

            If you want to link a matching golden record to the entity rather than to the entity to which it is currently linked, select the ID field from the entity to merge into the golden record.

        -   Reject the potential duplicate. Here again the effect is as described above.

-   To resolve multiple match errors, start by using the Resolve Matching Issues wizard. In the wizard you must select one matching golden record to link to the source record. Alternatively, you can exit the wizard without resolving if you determine the source record data is incorrect.


If you attempted to use the Resolve Matching Issues wizard to resolve matching errors and there are matching errors you could not resolve, correct the offending data in the source system. Then delete the corresponding quarantine entries and re-execute the process that routes incoming batches to the repository.

:::note

In the case of an entity quarantined due to having a value in a reference field specified for matching in a match rule that does not resolve to a golden record, if and when a golden record is created for the referenced entity, the quarantine entry will be automatically resolved.

:::

## Approving entities for incorporation from particular sources 

The Approve Record Creation, Approve Updated Record Fields, and Approve Record End-Dating dialogs are used to approve entity contributions, one at a time, from sources configured with a requirement for manual approval. These dialogs are accessible from the detail view for a quarantine entry.

There are two methods by which an entity in which a field has a base value can be approved when the matching golden record has a pending link to the contributing source and the source is configured with a requirement for manual approval under this circumstance:

-   The Approve Update With Base Values dialog can be used to include the base values in the entity when updating the golden record. This dialog is accessible from the detail view for a quarantine entry.

-   The alternative action, Update Without Base Values, causes base values to be ignored when updating the golden record. This action is selectable directly from the detail view for a quarantine entry and requires confirmation.


## Resolving data validation and incorporation errors 

Quarantining for data validation errors during validation occurs due to incoming entities containing Long Text field values exceeding 5,000 characters. Quarantining for data validation errors during incorporation occurs due to discrepancies between field definitions in the domain model, with respect to properties and data type, and the structure of incoming entities constructed by the integration process. Quarantining for data incorporation errors occurs due to the presence of unresolvable collection item references or other errors during incorporation. In the case of either of these types of errors, there may be issues with the source data, the integration process and the model. If the process was built and deployed with , start your troubleshooting by checking the Map component configuration. If the model has data quality steps, you need to check their configuration in addition to checking the field definitions — the entities may have been modified during the enrichment phase.

-   If you reconcile discrepancies by modifying and redeploying the process or by correcting source record data, you then need to delete the quarantine entries and re-execute the process.

-   If you reconcile discrepancies by modifying the domain model or rolling forward or back to a newer or older version, you then need to resubmit the quarantined entities for incorporation in the domain.


In the case of an entity quarantined due to the existence of a link to the entity from an end-dated golden record, there are options available in the detail view for the quarantine entry to

-   reject the entity and propagate a source record update request specifying a Delete operation.

-   restore the golden record and attempt to apply the updates from the entity to the restored golden record.


:::note

In the case of an entity quarantined due to an unresolvable reference, if and when a golden record is created for the referenced entity, the quarantine entry will be automatically resolved.

:::