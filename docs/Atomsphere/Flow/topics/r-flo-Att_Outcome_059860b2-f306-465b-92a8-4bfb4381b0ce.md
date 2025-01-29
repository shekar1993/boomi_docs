# Outcome button attributes 

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-059860b2-f306-465b-92a8-4bfb4381b0ce"/>
</head>


You can customize outcome buttons by applying attributes.

## Default player runtime

No attributes are supported for the default player with this component.

## Default legacy player runtime 

You can apply the following attributes directly to an outcome on the flow canvas when running flows with the default legacy player.

A descriptive name is shown for each attribute in the **Key** field when adding attributes to a step map element, although the underlying metadata uses the actual key value. For example, the **Key** field shows "Button CSS Class" as an option when adding an attribute to a step map element, although this actually maps directly to the `classes` attribute.

| Key | Value | Description |
|-----|-------|-------------|
| `classes`<br/>Display name: `Button CSS Class` | `string`  | Apply CSS directly to the outcome button. The `string` value can consist of multiple entries to build up a CSS class selector, separated by a space character. See [CSS reference](r-flo-CSS_Reference_d32122b8-0f11-47be-91c6-6986575f933e.md).<br/><br/>For example, a value of `btn-outline btn-lg` will apply the `btn-outline` and `btn-lg` Bootstrap classes to the button.<br/><br/>For example, if a custom '.mw-bs .myChosenClassName' style is added to a player (either directly or through a linked stylesheet), this custom style can then be applied to the outcome button using the value 'myChosenClassName'.<br/><br/>Outcome buttons can be made transparent by using the '`btn-outline`' value. |
| `display`<br/>Display name: `Icon display mode` | `string`  | Allows you to display icons on an outcome button, using any of the following values:<br/><br/>• `icon`: Displays an outcome button as an icon for the type of button selected. For example, an 'Add' button will display a plus icon.<br/>• `iconandtext`: Display both the label text and icon on the outcome button.<br/>• `iconnobackground`: Displays an outcome button as an icon for the type of button selected, but without a background color. For example, an 'Add' button will display a plus icon, but without the green background. |
| `icon`<br/>Display name: `Button icon` | `string`  | Outcome buttons do not display an icon by default, but the icon attribute allows you to specify a particular icon to show on a button. <br/><br/>The value of the `icon` attribute should be set to the exact name of the icon from the bootstrap icon set, but with the 'glyphicon-' prefix removed. For example, 'heart', 'plus', and so on.<br/><br/>The following common actions and standard icon values may be useful:<br/>• Add  Value: `plus`<br/>• Apply  Value: `ok`<br/>• Back  Value: `arrow-left`<br/>• Cancel  Value: `arrow-left`<br/>• Delete  Value: `trash`<br/>• Edit  Value: `pencil`<br/>• Escalate  Value: `hand-up`<br/>• `Import  Value: import`<br/>• Insert  Value: `log-in`<br/>• New  Value: `new-window`<br/>• Next  Value: `arrow-right`<br/>• Query  Value: `console`<br/>• Reject  Value: `thumbs-down`<br/>• Remove Value: `remove`<br/>• Save  Value: `floppy-disk`<br/>• Submit  Value: `circle-arrow-down`<br/>• `Update  Value: edit`<br/>• Upsert  Value: `chevron-up`.<br/><br /><br />For a full visual overview of the available Bootstrap icons, see [Bootstrap icons](https://getbootstrap.com/docs/3.3/components/). |
| `size`<br/>Display name: `Button size` | `string`  | This attribute allows you to modify the size of the button; the values you can use map to the standard Bootstrap button size CSS class suffix. See [CSS reference](r-flo-CSS_Reference_d32122b8-0f11-47be-91c6-6986575f933e.md).<br/><br/>For example:<br/>• `lg`: Style the outcome button as a 'large' button; maps to the '.btn-lg' button size CSS class.<br/>• `sm`: Style the outcome button as a 'small' button; maps to the '.btn-sm' button size CSS class.<br/>• `xs`: Style the outcome button as an 'extra-small' button; maps to the '.btn-xs' button size CSS class. |
| `target`<br/>Display name: `Button uri 'target' setting` | `string`  | Specify the target attribute on the generated anchor element for the uri. This is set to '_blank' by default (so that the page opens in a new window/tab), but can also be set to the following values:<br/>• `_blank`: Load in a new window/tab.<br/>• `_self`: Load in the same frame as it was clicked.<br/>• `_parent`: Load in the parent frameset.<br/>• `_top`: Load in the full body of the window.<br/>• `framename`: Load in a named frame. |
| `type`<br/>Display name: `Button type` | `string`  | In a player using the default 'paper' theme, outcome buttons are displayed with a blue background by default (set by the `btn-primary` Bootstrap button CSS class). <br/><br/>You can override the button appearance using the type attribute, or by changing the `What kind of action is this?` option in the `Appearance` section when editing an outcome.<br/><br/>The following `string` values can be used, mapping to the relevant Bootstrap button CSS class type suffix:<br/>• `default`<br/>• `primary`<br/>• `success`<br/>• `info`<br/>• `warning`<br/>• `danger`<br/>. The theme applied to your player will define the exact appearance of these button classes. See [Player themes](/docs/Atomsphere/Flow/topics/c-flo-Players_Themes_c08a4544-961f-478d-b949-a833634034b0.md).|
| `uri`<br/>Display name: `Button uri` | `string`  | Allows you to connect an outcome button to a web page. Instead of the connected map element being displayed, the link specified on the outcome will be used to launch the web page in a new browser window/tab. For example, connecting to a step map element and adding the uri attribute to the outcome with a value of `http://www.google.com` will launch the Google web site in a new browser tab when the outcome button is clicked. The connected step map element does not need to contain anything other than dummy content as it simply a placeholder for the outcome to be connected to. |
| `uriTypeElementPropertyId`<br/>Display name: `Type property id to use for uri` | `string (GUID)`  | Set this value to the 'Id' of the property on the type that contains the `uri` to be opened in a new browser window/tab. This is only supported for outcomes bound to multiple items, such as tables for example. |










## Metadata example 

This metadata example uses the default legacy player runtime.

```
"attributes": {
  "type": "warning",
  "icon": "heart",
  "size": "sm",
  "display": "iconandtext",
  "uri": "https://www.boomi.com",
  "uriTypeElementPropertyId": null,
  "target": "_blank",
  "classes": null
}
```