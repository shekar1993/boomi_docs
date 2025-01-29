# Combobox component attributes 

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-138b61db-9c87-4feb-8516-1aeb265e4ce9"/>
</head>

You can customize combobox components by applying attributes.

## Default player runtime 
No attributes are supported for the default player with this component.

## Default legacy player runtime 

You can apply the following attributes when running flows with the default legacy player.

| Key      | Value   | Description |
|----------|---------|-------------|
| `classes`<br/>Page builder: `Space delimited css classes`| `string`  | Apply CSS directly to the component. The `string` value can consist of multiple entries to build up a CSS class selector, separated by a space character. See [CSS reference](r-flo-CSS_Reference_d32122b8-0f11-47be-91c6-6986575f933e.md).<br/><br/>For example, if a custom "`.mw-bs .myChosenClassName`" style is added to a player (either directly or through a linked stylesheet), this custom style can then be applied to the component using the value "myChosenClassName". |
| `pagination`| `boolean` | By default `pagination` is disabled for a combobox bound to a list of items. You can enable it by setting the `pagination` attribute to true.<br/><br/><ul><li>`true`: Enables pagination for the combobox. Define the size using the `paginationSize` attribute.</li><li>`false`: Set by default, no pagination is enabled for the combobox.</li></ul> |
| `paginationSize`| `number` | If pagination for the combobox has been enabled, this attribute allows you to set the number of items displayed on each 'page'. The default value is for 250 items to be displayed per 'page' of the combobox.<br/><br/><ul><li>Set the value to the number of items to display on each page.</li><li>Set the value to zero ('0') to display all items (if this is supported by the connector that the combobox component is loading data from).</li></ul> |



## Metadata example 
This metadata example uses the default legacy player runtime.

```
"attributes": {
  "classes": "myclass1 myclass2",
  "pagination": false,
  "paginationSize": 10
}
```