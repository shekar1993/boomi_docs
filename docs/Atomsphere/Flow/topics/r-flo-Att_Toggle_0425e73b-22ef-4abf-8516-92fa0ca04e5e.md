# Toggle component attributes

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-0425e73b-22ef-4abf-8516-92fa0ca04e5e"/>
</head>


You can customize toggle components by applying attributes..

## Default player runtime

No attributes are supported for the default player with this component.

## Default legacy player runtime

You can apply the following attributes when running flows with the default legacy player.

| Key      | Value   | Description |
|----------|---------|-------------|
| `classes`<br/>Page builder: `Space delimited css classes` | `string`  | Apply CSS directly to the component. The `string` value can consist of multiple entries to build up a CSS class selector, separated by a space character. See [CSS reference](r-flo-CSS_Reference_d32122b8-0f11-47be-91c6-6986575f933e.md).<br/><br/>For example, if a custom "`.mw-bs .myChosenClassName`" style is added to a player (either directly or through a linked stylesheet), this custom style can then be applied to the component using the value "`myChosenClassName`". |
| `background`<br/>Page builder: `custom background colour` | `string`  | Change the background color of the toggle component. The following `string` values are supported:<br/><br/>• `Danger`: Red background.<br/>• `Info`: Purple background.<br/>• `Success`: Green background.<br/>• `Warning`: Orange background.<br/>• CSS named colours: For example, '`black`', '`red`', '`blue`' and so on. |
| `shape`<br/>Page builder: `A custom CSS class` | `string`  | Change the appearance of the toggle component by specifying either of the following values:<br/><br/>• `round`: Set by default, the toggle component has rounded corners.<br/>• `square`: The toggle component has square corners. |

## Metadata example

This metadata example uses the default legacy player runtime.

```
"attributes": {
  "shape": "round",
  "background": null
}
```