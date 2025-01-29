# Charts component attributes 

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-79757180-0dbc-41cc-9aca-5872b0542ec0"/>
</head>

You can customize chart components by applying attributes.
## Default player runtime 
No attributes are supported for the default player with this component.

## Default legacy player runtime 
You can apply the following attributes when running flows with the default legacy player.

| Key      | Value   | Description |
|----------|---------|-------------|
| `classes` 
`Page builder: Space delimited CSS classes`| string  |  Apply CSS directly to the component. The string value can consist of multiple entries to build up a CSS class selector, separated by a space character.<br/><br/>For example, if a custom "`.mw-bs .myChosenClassName`" style is added to a player (either directly or through a linked stylesheet), this custom style can then be applied to the component using the value "myChosenClassName". |

## Metadata example

This metadata example uses the default legacy player runtime.

```
"attributes": {
  "classes": "myclass1 myclass2",
}
```