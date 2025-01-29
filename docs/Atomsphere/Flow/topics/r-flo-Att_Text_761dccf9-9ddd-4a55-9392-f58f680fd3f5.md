# Textarea component attributes 

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-761dccf9-9ddd-4a55-9392-f58f680fd3f5"/>
</head>


You can customize textarea components by applying attributes.

## Default player runtime 

No attributes are supported for the default player with this component.

## Default player runtime 

You can apply the following attributes when running flows with the default legacy player.

| Key      | Value   | Description |
|----------|---------|-------------|
| `classes`<br/>Page builder: `Space delimited css classes` | string  | Apply CSS directly to the component. The `string` value can consist of multiple entries to build up a CSS class selector, separated by a space character. See [CSS reference](r-flo-CSS_Reference_d32122b8-0f11-47be-91c6-6986575f933e.md).<br/><br/>For example, if a custom "`.mw-bs .myChosenClassName`" style is added to a player (either directly or through a linked stylesheet), this custom style can then be applied to the component using the value "`myChosenClassName`". |


## Metadata example 
This metadata example uses the default legacy player runtime.

```
"attributes": {
  "classes": "myclass"
}
```