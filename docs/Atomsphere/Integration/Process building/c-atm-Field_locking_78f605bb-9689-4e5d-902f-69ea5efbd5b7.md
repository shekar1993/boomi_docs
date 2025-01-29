# Field locking

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-78f605bb-9689-4e5d-902f-69ea5efbd5b7"/>
</head>


You can lock individual fields to prevent users from customizing mapping from or to those fields.

You can lock fields at both the data map extension level and the object definition level:

-   At the data map extension level, you can lock fields on the source and/or the destination side of the map.

-   At the object definition level, you can lock fields per profile.


## What does Field Locking do?

Field locking prevents a field in an overridden map from being mapped to or from a mapping extension. This allows the process builder to dictate the only mappings for those fields. If nothing is mapped to the fields in the base map, these fields are empty.

Locking gives you control over the fields that can be mapped for specific operations. For example, you want users to be able to map to an Account Number field when the record is initially created but not during subsequent updates. If you could lock the Account Number field on the update profile only, a user would still see Account Number. However, any customized mappings would simply be ignored when data goes through the update map.

## Why would I use Field Locking?

You should use field locking when you want to restrict a user from editing standard fields that you have mapped in your process. You should also lock fields that are critical to the successful operation of your integration such an internal IDs or other key fields. You can lock system fields or other fields not relevant to the integration to simply shorten the list presented to users. Locking an aggregate element effectively locks all of its child elements.

:::note

Destination fields mapped from map functions in the underlying map are always locked.

:::

## How do I use Field Mapping?

At the data map extension level, you can lock fields on the source and/or the destination side of the map. At the object definition level, you can lock fields per profile.

To enable field locking, open a process and click **Extensions** above the process canvas. On the Object Definitions tab in the Extensions dialog, click on the padlock associated with an object definition, and select various fields in the Locked Fields dialog in order to lock them. Click **OK**.