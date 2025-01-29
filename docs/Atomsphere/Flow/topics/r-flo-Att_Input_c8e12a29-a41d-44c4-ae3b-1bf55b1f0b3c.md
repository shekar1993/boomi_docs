# Input component attributes

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-c8e12a29-a41d-44c4-ae3b-1bf55b1f0b3c"/>
</head>

You can customize input components by applying attributes.

## Default player runtime

You can apply the following attribute when running flows with the default player.

| Key            | Value   | Description |
|----------------|---------|-------------|
| `mask`Page builder: `Mask the input field` | string  | You can add a mask to an input component using the `mask` attribute to define the format that the value input by the user must conform to. |


## Default legacy player runtime 

You can apply the following attributes when running flows with the default legacy player.

| Key            | Value   | Description                                                                  |
|----------------|---------|----------------------------------------------------------------------------------------------------------|
| `classes`Page builder: `Space delimited css classes` | string  | Apply CSS directly to the component. The `string` value can consist of multiple entries to build up a CSS class selector, separated by a space character. See [CSS reference](r-flo-CSS_Reference_d32122b8-0f11-47be-91c6-6986575f933e.md).For example, if a custom "`.mw-bs .myChosenClassName`" style is added to a player (either directly or through a linked stylesheet), this custom style can then be applied to the component using the value "myChosenClassName". |
| `dateTimeLocale`Page builder: `Define a custom date/time locale` | `<locale>`  | The input field for DateTime content types is set to display using the 'en-us' format by default, but other locales are supported and can be used by inserting the relevant value in this attribute.To learn more about the types of locale that can be used, see the [Moment.js Github repository documentation](https://github.com/moment/moment/tree/develop/locale). |
| `dateTimeFormat`Page builder: `Define a custom date/time format` | `<format>` | The date picker (only enabled with DateTime content types) does not display the time or allow users to specify a time by default; when selecting a date the time component will default to 00:00:00. Setting the value to 'MM/DD/YYYY hh:mm' will display the time picker.To learn more about accepted `dateTimeFormat` string values, see the [Display > Format section in the Moment.js documentation](https://momentjs.com/docs). |
| `minimum`Page builder: `Minimum value` | number | Set the minimum numeric value that can be accepted by a numeric input component. |
| `maximum`Page builder: `Maximum value` | number | Set the maximum numeric value that can be accepted by a numeric input component. |
| `step`Page builder: `Stepping interval` | number | Set how much the number will increment/decrement by when the spinner arrows are clicked on a numeric input component. |
| `validation`Page builder: `Regex for custom validation` | string | When an input component is bound to a `string` value, additional masking and validation can be implemented to support more advanced input scenarios. - The `validation` attribute can accept a regular expression which will be used to check if the value input by the user is valid.- The `validationMessage` attribute can be used to display a custom message if the inputted value is considered invalid according to the regular expression.Client-side validation will need to be enabled for the `validation` and `validationMessage` attributes to take effect. You can add a mask to an input component using the `mask` attribute. To learn more about the supported masking formats, see the [Input Mask Github repository](https://github.com/insin/inputmask-core#pattern).|
|`validationMessage`| string | The `validationMessage` attribute can be used to display a custom message if the inputted value is considered invalid according to the regular expression as defined in the `validation` attribute. |
| `mask`Page builder: `Mask the input field` | string | You can add a mask to an input component using the `mask` attribute to define the format that the value input by the user must conform to. |
| `autocomplete`Page builder: `Perform auto-completion` | string | Allows you to enable/disable 'autocomplete' functionality for an input field. This maps to the HTML5 autocomplete attribute, see [W3Schools](https://www.w3schools.com/tags/att_input_autocomplete.asp). |
| `useCurrent`Page builder: `Default to current date/time` | boolean | This attribute is specific to datetime input components. - `true`: The current date and time is automatically selected when the date/time picker is opened by a user.- `false`: No date/time is selected when the date/time picker is opened by a user. |


## Metadata example 

This metadata example uses the default legacy player runtime.

```
"attributes": {
  "dateTimeLocale": "en-us",
  "dateTimeFormat": "MM/DD/YYYY hh:mm:ss",
  "minimum": null,
  "maximum": null,
  "step": 1,
  "validation": null,
  "validationMessage": null,
  "mask": null,
  "autocomplete": null,
  "useCurrent": true
}
```