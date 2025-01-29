# Outcomes component CSS 

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-b9496dc5-cf62-4ebb-a126-a39e9fc9b878"/>
</head>


This topic provides examples of the main CSS classes/selectors you can use to customize outcomes components.

## Default player CSS 

You can use the following main classes/selectors to apply additional CSS styling to outcomes components in a flow running the default player.

|Class/Selector|Description|
|:-------------|:----------|
|`.outcome-group`|The main class applied to the entire outcomes component. For example, to increase the padding applied to the entire outcomes component:<br/>`.mw-bs .outcomes {padding: 5px;}`|
|`.button-outcome`|The main class applied to outcomes buttons. For example, to modify the background color of the group of outcome buttons:<br/>`.button-outcome {background: #cccccc;}`|

## Default legacy player CSS 

You can use the following classes/selectors to apply additional CSS styling to outcomes components in a flow running the default legacy player.

|Class/Selector|Description|
|:-------------|:----------|
|`.mw-bs .outcomes`|The main class applied to the entire outcomes component. For example, to increase the padding applied to the entire outcomes component:<br/>`.mw-bs .outcomes {padding: 5px;}`|
|`.mw-bs .row`|Outcomes are rendered in a row, and this class is used to apply alignment to a row of outcomes using the standard Bootstrap column classes, for example .justify-right. For example, to increase the padding applied to outcomes component rows:<br/>`.mw-bs .row {padding: 5px;}`|
|`.mw-bs .btn-group`|The main class applied to outcomes defined as a horizontal group. For example, to modify the background color of the group of outcome buttons:<br/>`.mw-bs .btn-group {background: #cccccc;}`|
|`.btn-group-vertical`|The main class applied to outcomes defined as a vertical group. For example, to modify the background color of the group of outcome buttons:<br/>`.mw-bs .btn-group-vertical {background: #cccccc;}`|