# Outcomes component attributes 

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-33a16fd3-bd44-4c34-abe9-b4a610c41150"/>
</head>


You can customize outcomes components by applying attributes.

## Default player runtime 
You can apply the following attributes when running flows with the default player.

| Key      | Value   | Description |
|----------|---------|-------------|
| size<br/>Page builder: `Button size` | boolean  | Specify the size of the outcome button; the values you can use map to the standard button size CSS class suffix.<br/>For example:<br/>• `lg`: Style the outcome button as a 'large' button.<br/>• `sm`: Style the outcome button as a 'small' button.<br/>• `xs`: Style the outcome button as an 'extra-small' button. |
| uri | string  | Launch a URI from an outcome button, such as to an external web page. Instead of the connected map element being displayed, the link specified on the outcome is launched in a new browser window/tab.<br/><br/>For example, connect to a step map element and add the `uri` attribute to the outcome with a value of "http://www.boomi.com" to launch the web site in a new browser tab when the outcome button is clicked.<br/><br/>The connected step map element does not need to contain anything other than dummy content as it simply a placeholder for the outcome to be connected to. |






## Default legacy player runtime 

You can apply the following attributes when running flows with the default legacy player.

| Key      | Value   | Description |
|----------|---------|-------------|
| `classes`<br/>Page builder: `Space delimited css classes` | string  | Apply CSS directly to the component. The `string` value can consist of multiple entries to build up a CSS class selector, separated by a space character. See [CSS reference](r-flo-CSS_Reference_d32122b8-0f11-47be-91c6-6986575f933e.md).<br/><br/>For example, if a custom "`.mw-bs .myChosenClassName`" style is added to a player (either directly or through a linked stylesheet), this custom style can then be applied to the component using the value "myChosenClassName". |
| `columns`<br/>Page builder: `Column layout size` | string  | Defines the spread of the component's width to a number of Bootstrap columns. Unless the browser window is especially narrow, the button group is rendered with the maximum 12-column width.<br/><br/>For example, `'xs-12'`, `'xs-6'`, `'md-12'`, and so on.<br/><br/>Setting this attribute causes the outcome button elements to be wrapped in a div element. |
| `group`<br/>Page builder: `Horizontal or vertical grouping` | string  | Converts the button group into either a horizontal or vertical radio group.<br/><br/>• `horizontal`: The group is laid out horizontally.<br/>• `vertical`: The button group is laid out vertically. |
| `justify`<br/>Page builder: `Css class to justify the button layout` | string  | Defines the justification for the button group.<br/><br/>• `left`: The button group is aligned to the left of the container.<br/>• `center`: The button group is aligned to the center of the container.<br/>• `right`: The button group is aligned to the right of the container. |
| `outcomeClasses` | string | Define custom class names that are added to each child outcome, for example, if you wish to apply a custom class to each outcome in the group (rather than just a class to the entire group element). This class can then be referenced using CSS in a custom player, to apply styling to each outcome button. |



## Metadata example 
This metadata example uses the default legacy player runtime.

```
"attributes": {
  "justify": "right",
  "group": "vertical",
  "outcomeClasses": "col-xs-12",
  "classes": "myclass"
}
```