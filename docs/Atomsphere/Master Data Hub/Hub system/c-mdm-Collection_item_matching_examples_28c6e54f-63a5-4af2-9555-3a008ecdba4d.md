# Collection item matching examples 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-28c6e54f-63a5-4af2-9555-3a008ecdba4d"/>
</head>


In this topic are examples of the matching of collection items in incoming entities with those in golden records.





## Matching by order of occurrence
When the **Order of Occurrence** option is selected for a collection’s **Identify By** setting in a domain model, matching of collection items is performed sequentially.

-   Nicknames collection represented in the model by the repeatable field Nickname:

 | Existing golden record collection items | Incoming entity collection items | Resulting golden record collection items | Explanation |
| --- | --- | --- | --- |
| Jamie<br /><br />Jim<br /><br />Jimmy | Jamie<br /><br />Jim | Jamie<br /><br />Jim | The items in the collection in the entity match the first two items in the collection in the golden record. The collection in the entity does not have an item matching the third item in the collection in the golden record. If the entity is incorporated in the domain, the unmatched item would be removed from the collection in the golden record. |
| Jamie<br /><br />Jim<br /><br />Jimmy | Jimmy<br /><br />Jim<br /><br />Jamie | Jimmy<br /><br />Jim<br /><br />Jamie | The first and third items in the collection in the entity represent updates. If the entity is incorporated in the domain, the first and third items in the collection in the golden record would be updated. |
| Jamie<br /><br />Jim<br /><br />Jimmy | Jamie<br /><br />Jim<br /><br />Jimmy<br /><br />Jimbo | Jamie<br /><br />Jim<br /><br />Jimmy<br /><br />Jimbo | The first three items in the collection in the entity match the first three items in the collection in the golden record. There is not a match in the golden record for the fourth item in the collection in the entity. If the entity is incorporated in the domain, the fourth item in the collection in the entity would be added to the collection in the golden record. |




-  Phones collection represented in the model by the repeatable field group Phone:

| Existing golden record collection items (Type, Number) | Incoming entity collection items (Type, Number) | Resulting golden record collection items (Type, Number) | Explanation                                                                                                                                                                                                                                          |
|--------------------------------------------------------|--------------------------------------------------|--------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| mobile, 1111 <br /><br /> office, 2222                 | mobile, 1111                                    | mobile, 1111                                          | The item in the collection in the entity matches the first item in the collection in the golden record. The collection in the entity does not have an item matching the second item in the collection in the golden record. If the entity is incorporated in the domain, the unmatched item would be removed from the collection in the golden record. |
| mobile, 1111 <br /><br /> office, 2222                 | office, 2222<br /><br />mobile, 1111              | office, 2222 <br /><br /> mobile, 1111                 | Both of the items in the collection in the entity represent updates. If the entity is incorporated in the domain, both of the items in the collection in the golden record would be updated.                                                                                                                   |
| mobile, 1111<br />office, 2222                         | mobile, 1111<br /><br />office, missing           | mobile, 1111<br /><br />office, 2222                   | The omission of the “office” Number field value does not represent an update. If the entity is incorporated in the domain, none of the items in the collection in the golden record would be updated.                                                                                                        |
| mobile, 1111<br /><br />office, 2222                   | mobile, 1111<br /><br />office, 2222<br /><br />home, 3333 | mobile, 1111<br /><br />office, 2222<br /><br />home, 3333 | The first two items in the collection in the entity match the first two items in the collection in the golden record. There is not a match in the golden record for the third item in the collection in the entity. If the entity is incorporated in the domain, the third item in the collection in the entity would be added to the collection in the golden record. |







## Matching by key field values 

When the **Key** option is selected for a collection’s **Identify By** setting in a domain model, collection items are matched by their key field values.

:::note

While matching by key field values works the same regardless of whether an entity specifies operations on individual collection items, the following examples show the results in the golden record of incorporating items not specifying item operations. For help in determining results for items specifying operations, see the Related concept about collection item operations.

:::

-   Nicknames collection represented in the model by the repeatable field Nickname:

   | Existing golden record collection items | Incoming entity collection items | Resulting golden record collection items | Explanation                                                                                                                                                                                                                                                          |
|----------------------------------------|----------------------------------|----------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Jamie<br /><br />Jim<br /><br />Jimmy  | Jimmy<br /><br />Jim              | Jim<br /><br />Jimmy                  | The items in the collection in the entity match the third and second items in the collection in the golden record, respectively. The collection in the entity does not have an item matching the first item in the collection in the golden record. If the entity is incorporated in the domain, the unmatched item would be removed from the collection in the golden record. |
| Jamie<br /><br />Jim<br /><br />Jimmy  | Jamie<br /><br />Jim<br /><br />Jimmy | Jamie<br /><br />Jim<br /><br />Jimmy | There is a matching item in the collection in the golden record for each of the items in the collection in the incoming entity. If the entity is incorporated in the domain, none of the items the collection in the would be updated.                                                                                       |
| Jamie<br /><br />Jim<br /><br />Jimmy  | Jimmy<br /><br />Jim<br /><br />Jamie | Jamie<br /><br />Jim<br /><br />Jimmy | There is a matching item in the collection in the golden record for each of the items in the collection in the incoming entity. If the entity is incorporated in the domain, none of the items in the collection in the golden record would be updated.                                                                       |
| Jamie<br /><br />Jim<br /><br />Jimmy  | Jimmy<br /><br />Jim<br /><br />Jamie<br /><br />Jimbo | Jamie<br /><br />Jim<br /><br />Jimmy<br /><br />Jimbo | The first three items in the collection in the entity match the first three items in the collection in the golden record. There is not a match in the golden record for the fourth item in the collection in the entity. If the entity is incorporated in the domain, the fourth item in the collection in the entity would be added to the collection in the golden record. |




-   Phones collection represented in the model by the repeatable field group Phone.

    These sets of examples have the same existing golden record and incoming entity pairings. Observe how the designation of different key fields changes the outcome of matching.

    -   The designated key fields are Type and Number:

| Existing golden record collection items (Type, Number) | Incoming entity collection items (Type, Number) | Resulting golden record collection items (Type, Number) | Explanation                                                                                                                                                                                                                                                          |
|--------------------------------------------------------|--------------------------------------------------|--------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| mobile, 1111<br />office, 2222                         | mobile, 3333<br />office, 1111                   | mobile, 3333<br />office, 1111                            | Neither of the items in the collection in the entity match items in the collection in the golden record. If the entity is incorporated in the domain, the collection in the golden record would be replaced by the collection in the entity.                                                                                  |
| mobile, 1111<br />office, 2222                         | mobile, 1111<br />office, 1111                   | mobile, 1111<br />office, 1111                            | The first item in the collection in the entity matches the first item in the collection in the golden record. If the entity is incorporated in the domain, the second item in the collection in the entity would replace the second item in the collection in the golden record.                                               |
| mobile, 1111<br />office, 2222                         | mobile, 1111<br />office, missing                 | mobile, 1111<br />office, 2222                            | The second item in the collection in the entity has a missing key field value. The entity would be quarantined.                                                                                                                                                                                                              |



 -   The designated key field is Type:

| Existing golden record collection items (Type, Number) | Incoming entity collection items (Type, Number) | Resulting golden record collection items (Type, Number) | Explanation |
|--------------------------------------------------------|--------------------------------------------------|--------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| mobile, 1111<br />office, 2222                         | mobile, 3333<br />office, 1111                   | mobile, 3333<br />office, 1111                            | Both of the items in the collection in the entity match items in the collection in the golden record. The Number field values in the entity represent updates. If the entity is incorporated in the domain, the Number field values in the golden record would be updated.                         |
| mobile, 1111<br />office, 2222                         | mobile, 1111<br />office, 1111                   | mobile, 1111<br />office, 1111                            | Both of the items in the collection in the entity match items in the collection in the golden record. The “office” Number field value in the entity represents an update. If the entity is incorporated in the domain, the “office” Number field value in the golden record would be updated.         |
| mobile, 1111<br />office, 2222                         | mobile, 1111<br />office, missing                 | mobile, 1111<br />office, 2222                            | Both of the items in the collection in the entity match items in the collection in the golden record. The omission of the “office” Number field value does not represent an update. If the entity is incorporated in the domain, none of the items in the collection in the golden record would be updated. |

-   The designated key field is Number:

| Existing golden record collection items (Type, Number) | Incoming entity collection items (Type, Number) | Resulting golden record collection items (Type, Number) | Explanation |
|--------------------------------------------------------|--------------------------------------------------|--------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| mobile, 1111<br />office, 2222                         | mobile, 3333<br />office, 1111                   | office, 1111<br />mobile, 3333                            | The second item in the collection in the entity matches the first item in the collection in the golden record. The Type field value for that item in the entity represents an update. If the entity is incorporated in the domain, the matching item’s Type value in the golden record would be updated, and the first item in the collection in the entity would replace the second item in the collection in the golden record.                                                                                     |
| mobile, 1111<br />office, 2222                         | mobile, 1111<br />office, 2222                   |                                                            | Both of the items in the collection in the entity have the same key field value. The entity would be quarantined.                                                                                                                                                                                                                                                                                                                                                                                               |
| mobile, 1111<br />office, 2222                         | mobile, 1111<br />office, missing                 | mobile, 1111<br />office, 2222                            | The second item in the collection in the entity has a missing key field value. The entity would be quarantined.                                                                                                                                                                                                                                                                                                                                                                                                  |