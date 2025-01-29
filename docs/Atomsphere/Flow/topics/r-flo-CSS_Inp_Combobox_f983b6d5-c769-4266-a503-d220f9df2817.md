# Combobox component CSS 

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-f983b6d5-c769-4266-a503-d220f9df2817"/>
</head>


This topic provides examples of the main CSS classes/selectors you can use to customize combobox components.

## Default player CSS 

You can use the following main classes/selectors to apply additional CSS styling to combobox components in a flow running the default player.

|Class/Selector|Description|
|:-------------|:----------|
|`.page-component-checkbox`|The main class applied to the entire combobox component in a flow.<br />For example, to increase the padding around all combobox components in a flow:<br />`.page-component-select {padding:15px}`|
|`.select-input`|The main class applied to the input selection element.<br />For example, to increase the padding around all input selection elements in a flow:<br />`.select-input {padding:15px}`|

## Default legacy player CSS 

You can use the following classes/selectors to apply additional CSS styling to combobox components in a flow running the default legacy player.

Combobox components use the [React Selectize component](https://github.com/furqanZafar/react-selectize), and are not able to be easily styled simply by targeting CSS classes/selectors.

However, if this is required, the .react-selectize stylesheet classes should be identified and targeted.

|Class/Selector|Description|
|:-------------|:----------|
|`.mw-bs .mw-select`|The main class applied to the entire combobox component within a flow.<br />For example, to increase the padding around the combobox:<br />`.mw-bs .mw-select {padding:15px}`|