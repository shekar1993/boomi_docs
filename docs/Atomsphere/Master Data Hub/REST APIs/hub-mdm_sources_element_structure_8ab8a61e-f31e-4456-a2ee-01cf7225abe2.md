# `<mdm:sources> element structure` 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-8ab8a61e-f31e-4456-a2ee-01cf7225abe2"/>
</head>

The `<mdm:sources>` element corresponds to the [**Sources** tab](/docs/Atomsphere/Master%20Data%20Hub/Menu/hub-Sources_tab_model_3333e3f7-c402-4772-ab60-8c9b620788dc.md) in a Boomi DataHub model page.

`<mdm:sources>` has a child `<mdm:sourceRankings>` element and, for each of the model’s sources, a child `<mdm:source>` element.

This example shows the high-level structure for an `<mdm:sources>` element that represents the model’s source rankings and three sources:

```xml
<mdm:sources>
   <mdm:sourceRankings>
   </mdm:sourceRankings>
   <mdm:source id="" type="" allowMultipleLinks="" default="" >
   </mdm:source>
   <mdm:source id="" type="" allowMultipleLinks="" default="" >
   </mdm:source>
   <mdm:source id="" type="" allowMultipleLinks="" default="" >
   </mdm:source>
</mdm:sources>

```

## `<mdm:sourceRankings>` 

The `<mdm:sourceRankings>` element represents the model’s source rankings and corresponds to the **Source Rankings by Field** dialog accessed from the model’s **Sources** tab in Boomi DataHub. 

Example:

```xml
<mdm:sourceRankings>
   <mdm:sourceRanking>
      <mdm:uniqueId>ACCOUNT_NAME</mdm:uniqueId>
      <mdm:sourceId rank="1">NS</mdm:sourceId>
      <mdm:sourceId rank="2">SF</mdm:sourceId>
      <mdm:sourceId rank="3">WD</mdm:sourceId>
   </mdm:sourceRanking>
   <mdm:sourceRanking>
      <mdm:uniqueId>CONTACTS</mdm:uniqueId>
      <mdm:sourceId rank="1">SF</mdm:sourceId>
      <mdm:sourceId rank="2">NS</mdm:sourceId>
      <mdm:sourceId rank="3">WD</mdm:sourceId>
   </mdm:sourceRanking>
</mdm:sourceRankings>
```

`<mdm:sourceRankings>` has a child `<mdm:sourceRanking>` element representing each field or field group for which sources are ranked.

`<mdm:sourceRanking>` has a child `<mdm:uniqueId>` element, which contains the unique ID of the field or field group and a child `<mdm:sourceId>` element representing the ranking of each source. The unique ID cannot contain spaces, special characters, or lowercase characters. `<mdm:sourceId>` contains the unique ID of the ranked source. The rank attribute value for `<mdm:sourceId>` is the ranking applicable to the source. The value is 1 for the most trusted source, 2 for the second most trusted source, and so on.

## `<mdm:source>` 

The `<mdm:source>` element represents a source in the model and corresponds to an entry in the **Sources summary list** in Boomi DataHub. 

High-level structure example:

``` xml
<mdm:source id="NS" type="Both" allowMultipleLinks="false" default="false" >
   <mdm:entityIdUrl>https://system.na1.netsuite.com/</mdm:entityIdUrl>
   <mdm:inbound>
   </mdm:inbound>
   <mdm:outbound>
   </mdm:outbound>
</mdm:source>
```

`<mdm:source>` has the following attributes and child elements, each of which corresponds to a property set in the **Add a Source** and source configuration dialogs or the **Set Default Source** dialog in Boomi DataHub: 

| Attribute or element | Corresponds to| Valid values or content|
|----------------------|---------------------------|---|
| `<mdm:entityIdUrl>`  | **Entity ID URL** | URL containing `{id}` where `id` is the source entity ID|
| *allowMultipleLinks* | **Allow Multiple Links**  | *true, false* |
| *default*            | **Select Default Source** | *true, false*|
| *id*                 | n/a                       | ID of a source in the account.  If a Create Model or Update Model request does not specify the ID of an existing source in the account as the id attribute value, the operation not only creates a model or updates the specified model, the operation also creates a source in the account. The source is created with the ID and other properties specified as `<mdm:source>` attribute values. The name of the created source is the same as the specified ID. |
| *type*| **This source can**| *Accept, Contribute, Both* |


`<mdm:source>` has the following additional child container elements:

-   `<mdm:inbound>`

-   `<mdm:outbound>`


`<mdm:inbound>`

The `<mdm:inbound>` element represents the source’s configuration for handling its entity contributions and corresponds to the **Inbound** tab in the **Add a Source** and source configuration dialogs in Boomi DataHub. This element is valid in `<mdm:source>` only if `<mdm:source>` has a type attribute value of Both or Contribute.

Example:

```xml
<mdm:inbound>
   <mdm:createApproval required="true">
      <mdm:businessRule name="simple">
         <mdm:inputs>
            <mdm:input key="1" alias="Phone" fieldUniqueId="PHONE" type="Field"/>
         </mdm:inputs>
         <mdm:conditions topLevelOperator="AND">
            <mdm:condition operator="STARTS_WITH">
               <mdm:firstInput type="Field" key="1"/>
               <mdm:secondInput type="Static" value="900" key="0"/>
            </mdm:condition>
         </mdm:conditions>
      </mdm:businessRule>
   </mdm:createApproval>
   <mdm:updateApproval required="true"/>
   <mdm:updateApprovalWithBaseValue>false</mdm:updateApprovalWithBaseValue>
   <mdm:endDateApproval required="false"/>
   <mdm:earlyChangeDetectionEnabled>true</mdm:earlyChangeDetectionEnabled>
   <mdm:excludedFields>
      <mdm:excludedField uniqueId="CONTACTS"/>
      <mdm:excludedField uniqueId="STORY"/>
      <mdm:excludedField uniqueId="SLOGANS"/>
   </mdm:excludedFields>
   <mdm:updateApprovalFields>
      <mdm:updateApprovalField uniqueId="ACCOUNT_NAME"/>
   </mdm:updateApprovalFields>
</mdm:inbound>
```

`<mdm:inbound>` has the following child elements, each of which corresponds to a property set on the **Inbound** tab, in the **Record-level Options** section:

| Element| Corresponds to |
|-------------------------|------------------------------------------------|
| `<mdm:createApproval>`  | **Require approval for new records**           |
| `<mdm:updateApproval>`  | **Require approval for updates to any fields** |
| `<mdm:updateApprovalWithBaseValue>`| **Require approval for updates to fields with a base value** |
| `<mdm:endDateApproval>` | **Require approval to end-date records**       |
| `<mdm:earlyChangeDetectionEnabled>` | **Enable early delta detection**       |

Each of those elements has an attribute named required. If required has a True value , it requires approval for the Create, Update, or End-date operation on a contributed source entity. For `<mdm:createApproval>` and `<mdm:updateApproval>`, approval is conditional if the child [`<mdm:businessRule>`](/docs/Atomsphere/Master%20Data%20Hub/REST%20APIs/hub-mdm_businessRule_element_structure_6eb50aa0-411a-4767-9813-b8d11625c4e6.md) is populated. The business rule specifies the condition that requires approval for the creation or update to proceed.

**Early delta detection** reduces the time it takes to process golden record updates from a contributing source. It allows Boomi DataHub to detect when a submitted entity does not change a golden record. Hub compares the previous entity with the inbound entity. If the inbound entity matches the previous entity submitted, the next time the same entity is submitted again without a change, Hub skips processing the entity. Boomi DataHub will only include the source's entity submissions when it detects a change to the record or if a new model version is deployed or a source configuration is changed. Model deployment or a change to the entity or to a source configuration starts the evaluation process again from the beginning, and Hub will skip the third time the same entity is submitted.

:::info

Early delta detection does not detect a change to a record when you are [using third-party data quality services](/docs/Atomsphere/Master%20Data%20Hub/Modeling/t-mdm-Enabling_a_quality_service_to_use_in_data_quality_f74aa25d-86a6-4390-b5f0-e90b75ebbd4a.md) for data enrichment, such as [Loqate](https://www.loqate.com/en-gb/address-verification/). A change cannot be detected because data enrichment from the third party happens after the entity is compared to the previous entity.

:::

:::info

Early delta detection may not detect a change to a record if you submit an entity and then submit the same entity again with changed and unchanged data within 1 second.

:::

`<mdm:inbound>` has the following additional child elements, each of which corresponds to a property set in the **Inbound** tab, **Field-level Options** section, in the **Add a Source** and source configuration dialogs in in Boomi DataHub: 

| Element                      | Corresponds to                          |
|------------------------------|-----------------------------------------|
| `<mdm:excludedFields>`       | **Exclude** column                      |
| `<mdm:updateApprovalFields>` | **Require approval for updates** column |

`<mdm:excludedFields>` has child `<mdm:excludedField>` elements, each of which corresponds to the **Exclude** radio button for a field.

`<mdm:updateApprovalFields>` has child `<mdm:updateApprovalField>` elements, each of which corresponds to the **Require approval for updates** radio button for a field.

Each `<mdm:updateApprovalField>` and `<mdm:excludedField>` element has a uniqueId attribute, the value of which specifies the subject field by its unique ID.

Each of these elements has an optional child [`<mdm:businessRule>`](/docs/Atomsphere/Master%20Data%20Hub/REST%20APIs/hub-mdm_businessRule_element_structure_6eb50aa0-411a-4767-9813-b8d11625c4e6.md) element. The presence of a populated `<mdm:businessRule>` element corresponds to the selection of the **Custom** radio button for the subject field.

-   If `<mdm:businessRule>` is the child of `<mdm:excludedField>`, the business rule specifies the condition upon which the field is excluded from updates.

-   If `<mdm:businessRule>` is the child of `<mdm:updateApprovalField>`, the business rule specifies the condition upon which approval of the field is required for updates to proceed.


`<mdm:outbound>`

The `<mdm:outbound>` element represents the configuration for propagating update requests on the source’s channel and corresponds to the **Outbound** tab on the **Add a Source** and source configuration dialogs in n Boomi DataHub. This element is valid in `<mdm:source>` only if `<mdm:source>` has a type attribute value of Both or Accept.

Example:

```xml
<mdm:outbound>
   <mdm:channelUpdatesFields>All</mdm:channelUpdatesFields>
   <mdm:sendCreates>true</mdm:sendCreates>
   <mdm:sendFilter scope="All">
      <mdm:tags>
         <mdm:tag name="Area Code 311" id="6f36530e-ab96-4f7b-a365-410a2ca46336"/>
      </mdm:tags>
   </mdm:sendFilter>
   <mdm:excludedFields>
      <mdm:excludedField uniqueId="SLOGANS"/>
      <mdm:excludedField uniqueId="STORY"/>
   </mdm:excludedFields>
</mdm:outbound>
```

The child `<mdm:channelUpdatesFields` element corresponds to the **Channel Updates Contain** property on the **Outbound** tab, **Record-level Options** section, in the **Add a Source** and source configuration dialogs in n Boomi DataHub. The valid values are *All* and *Changed*.

The child `<mdm:sendCreates>` and `<mdm:sendFilter>` elements jointly correspond to the properties set on the **Outbound** tab, **Record-level Options** section, in the **Add a Source** and source configuration dialogs in n Boomi DataHub. `<mdm:sendCreates>` contains *true* or *false*. `<mdm:sendFilter>` has an attribute, scope, with *All* and *Creates* as the valid values.

-   **Send all records to this source** corresponds to `<mdm:sendCreates>` containing true and `<mdm:sendFilter>` being empty with scope attribute value All.

-   **Send records to this source if they have any of these tags** corresponds to `<mdm:sendCreates>` containing true and `<mdm:sendFilter>` with scope attribute value All having a child `<mdm:tags>` element. `<mdm:tags>` has an empty child `<mdm:tag>` element for each tag to be evaluated. `<mdm:tag>` has a name attribute, the value of which is the tag name.

-   **Send new records to this source if they have any of these tags** corresponds to `<mdm:sendCreates>` containing true and `<mdm:sendFilter>` with scope attribute value Creates having a child `<mdm:tags>` element. `<mdm:tags>` has an empty child `<mdm:tag>` element for each tag to be evaluated. `<mdm:tag>` has a name attribute, the value of which is the tag name.

-   **Never send new records to this source** corresponds to `<mdm:sendCreates>` containing false.


In `<mdm:outbound>`, the additional child element `<mdm:excludedFields>` corresponds to the **Outbound** tab, **Field-level Options** section, in the **Add a Source** and source configuration dialogs in n Boomi DataHub. `<mdm:excludedFields>` has an empty child `<mdm:excludedField>` element for each field to be excluded. `<mdm:excludedField>` has a uniqueId attribute, the value of which specifies the excluded field by its unique ID.