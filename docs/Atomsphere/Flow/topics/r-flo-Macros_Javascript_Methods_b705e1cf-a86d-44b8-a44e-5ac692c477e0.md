# Supported macro JavaScript methods

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-b705e1cf-a86d-44b8-a44e-5ac692c477e0"/>
</head>


The following JavaScript methods can be used for getting and updating values, getting property values, and setting property values.

## Value name format

When getting or updating a value, the name of the value \(optionally including a property name\) is expected in the following formats:

-   `{![My Value]}`, or

-   `{![My Object].[Property Name]}`


## Getting values

Following are the javascript methods to retrieve a value:

- `state.getArray(valueName)`: Returns a `StateObjectData` Array containing the objectData for a List value.
- `state.getBooleanValue(valueName)`: Returns a JavaScript `Boolean` value.
- `state.getContentValue(valueName)`: Returns a JavaScript `String` value.
- `state.getDateTimeValue(valueName)`: Returns a JavaScript `Date` value.
- `state.getNumberValue(valueName)`: Returns a JavaScript `Number` value.
- `state.getObject(valueName)`: Returns a `StateObjectData Object` containing the objectData for an Object.
- `state.getPasswordValue(valueName)`: Returns a JavaScript `String` value. 
- `state.getStringValue(valueName)`: Returns a JavaScript `String` value.
- `state.getValue(valueName)`: Returns a JavaScript `String` value regardless of ContentType. Only applicable to scalar ContentTypes: String, Number, Boolean, Content, Password, DateTime.


## Updating values

Following are the javascript methods to update a value:

- `state.setArray(valueName, StateObjectData[])`: Sets the List Value to the `StateObjectData` Array given.
- `state.setBooleanValue(valueName, boolean)`: Sets the Boolean value to the JavaScript `Boolean` given.
- `state.setContentValue(valueName, string)`: Sets the Content Value to the JavaScript `String` given.
- `state.setDateTimeValue(valueName, datetime)`: Sets the DateTime Value to the JavaScript `Date` given.
- `state.setNumberValue(valueName, number)`: Sets the Number Value to the JavaScript `Number` given.
- `state.setObject(valueName, StateObjectData)`: Sets the Object Value to the `StateObjectData` Object given.
- `state.setPasswordValue(valueName, string)`: Sets the Password Value to the JavaScript `String` given.
- `state.setValue(valueName, string)`: Sets the Value to the JavaScript `String` given regardless of ContentType. Only applicable to scalar ContentTypes: String, Number, Boolean, Content, Password, DateTime.

When updating an object or a list \(array\) value, you will need to pass in `StateObjectData`. This can be fetched via a `state.getArray` or `state.getObject` call.



New objects can also be created, as follows:

- `state.setArray(valueName, StateObjectData[]`: `StateObjectData[]` is an array either created by one more `state.createObject` objects or fetched from `state.getArray`.
- `state.setObject(valueName, StateObjectData)`: `StateObjectData`is a single object either created with `state.createObject` or fetched from `state.getObject`.
- `state.createObject(typeElementId)`: Returns a newly created `StateObjectData` object of the type specified via the `typeElementId`.


## Getting property values

The `StateObjectData` objects support the following methods for querying their properties:

- `getPropertyArray(typePropertyId)`: Returns a `StateObjectData` Array value of the Array property with the Property Id given.
- `getPropertyBooleanValue(typePropertyId)`: Returns a JavaScript `Boolean` value of the Boolean property with the Property id given.
- `getPropertyContentValue(typePropertyId)`: Returns a JavaScript `String` value of the Content property with the Property Id given.
- `getPropertyDateTimeValue(typePropertyId)`: Returns a JavaScript `String` value of the Content property with the Property Id given.
- `getPropertyNumberValue(typePropertyId)`: Returns a JavaScript `Number` value of the Number property with the Property Id given.
- `getPropertyObject(typePropertyId)`: Returns a `StateObjectData` Object value of the Object property with the Property Id given.
- `getPropertyPasswordValue(typePropertyId)`: Returns a JavaScript `String` value of the Password property with the Property Id given.
- `getPropertyStringValue(typePropertyId)`: Returns a JavaScript `String` value of the String property with the Property Id given.
- `getPropertyValue(typePropertyId)`: Returns a JavaScript `String` value of the property with the Property Id given \(regardless of ContentType\). Only applicable to scalar ContentTypes: String, Number, Boolean, Content, Password, DateTime.

## Setting property values

The `StateObjectData` objects support the following methods for updating property values:

- `setPropertyArray(typePropertyId, StateObjectData[])`: Sets the Array property on the Object with the property id given to the `StateObjectData` array given.
- `setPropertyBooleanValue(typePropertyId, boolean)`: Sets the Boolean property on the Object with the Property Id given to the JavaScript `Boolean` given.
- `setPropertyContentValue(typePropertyId, string)`: Sets the Content property on the Object with the Property Id given to the JavaScript `String` given.
- `setPropertyDateTimeValue(typePropertyId, Date)`: Sets the DateTime property on the Object with the Property Id given to the JavaScript `Date` given.
- `setPropertyNumberValue(typePropertyId, number)`: Sets the Number property on the Object with the Property Id given to the JavaScript `Number` given.
- `setPropertyObject(typePropertyId, StateObjectData)`: Sets the Object property on the Object with the Property Id given to the `StateObjectData` Object given.
- `setPropertyPasswordValue(typePropertyId, string)`: Sets the Password property on the Object with the Property Id given to the JavaScript `String` given.
- `setPropertyStringValue(typePropertyId, string)`: Sets the String property on the Object with the Property Id given to the JavaScript `String` given
- `setPropertyValue(typePropertyId, string)`:  Sets the property on the Object with the Property Id given to the JavaScript `String` given (regardless of ContentType). Only applicable to scalar ContentTypes: String, Number, Boolean, Content, Password, DateTime.

## Null checking objects and lists

This applies to `getArray`, `getObject`, `getPropertyArray` and `getPropertyObject`:

```
var list = state.getArray('{![My List Value]}');
if (Array.isArray(list) && list.length > 0) {
    ...
}
```

```
var item = state.getObject('{![My Object Value]}');
if (item !== null) {
    ...
}
```