# Components CSS 

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-8d354e1d-e69d-4d40-82b0-420e60a5c763"/>
</head>


This topic provides examples of the main CSS classes/selectors you can use to customize general component elements.

## Default player CSS 

You can use the following main classes/selectors to apply additional CSS styling to general component styles in a flow running the default player.

|Class/Selector|Description|
|:-------------|:----------|
|`.help-info-message`|The main class applied to the **Help information about this component** component setting.For example, to increase the font size of all component help information text:<br /><br />```css\n.help-info-message {font-size:20px}\n```|
|`.required`|The main class applied to components defined as requiring user input. This is typically rendered as a red text warning that the field is required.For example, to modify the font color of the required asterisk and text.<br /><br />```css\n.required {color:blue}\n```|
|`.label`|The main class applied to the **Label** element on all components, taken from the **Label** component setting.For example, to increase the font size of all component labels:<br /><br />```css\n.label {font-size:20px}\n```|

## Default legacy player CSS

You can use the following classes/selectors to apply additional CSS styling to general component styles in a flow running the default legacy player.

|Class/Selector|Description|
|:-------------|:----------|
|`.mw-bs .form-group`|The main class applied to form elements within certain components, such as input components for example.<br />For example, to modify the background color for form elements:<br />`mw-bs .form-group {background:#cccccc}`|
|`.mw-bs .help-block`|The main class applied to the **help-block** element on all components, taken from the **Help information about this component** component setting.<br />For example, to increase the font size of all component help information text:<br />`mw-bs .help-block {font-size:20px}`|
|`.mw-bs .input-required`|The main class applied to components defined as requiring user input. This is typically rendered as a red text warning that the field is required.<br />For example, to modify the font color of the required asterisk and text:<br />`mw-bs .input-required {color:blue}`|
|`.mw-bs .label`|The main class applied to the **Label** element on all components, taken from the **Label** component setting.<br />For example, to increase the font size of all component labels:<br />`mw-bs .label {font-size:20px}`|
|`.mw-bs .mw-items-header-search`|The main class applied to the entire search element added to searchable components.<br />For example, to increase the padding around the entire search element:<br />`mw-bs .mw-items-header-search {padding:15px}`|