# Collection item operations

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-b1f16fbe-a3bf-4d6f-906d-5bcdcbec284b"/>
</head>


Incoming entities can request operations on individual items in a collection if item matching by key field value is enabled for the collection. Collection item operations are specified in a contributed source entity by populating the op attribute in collection wrapper elements with the desired action, either UPSERT or DELETE.

-  If for a collection item in an entity for which an UPSERT action is specified, there is in the matching golden record a collection item with a matching key field value, the item in the golden record is updated. Otherwise, the item in the entity is appended to the collection in the golden record.

-  If for a collection item in an entity for which a DELETE action is specified, there is in the matching golden record a collection item with a matching key field value, the item in the golden record is removed.

- Default behavior: When you don't specify an action for the incoming entity items, DataHub end-dates and removes all the existing collection items and inserts all the new items from the incoming entity. The golden records will no longer have the previous collection items unless they are included in the incoming entity.


Either none or all items in a collection in an entity must have a specified action; otherwise, the entity is quarantined. An entity is likewise quarantined if collection item actions are specified for a collection for which item matching by occurrence is enabled.