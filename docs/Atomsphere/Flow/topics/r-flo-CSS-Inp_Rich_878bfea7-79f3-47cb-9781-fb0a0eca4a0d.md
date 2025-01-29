# Rich text component CSS 

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-878bfea7-79f3-47cb-9781-fb0a0eca4a0d"/>
</head>


This topic provides examples of the main CSS classes/selectors you can use to customize rich text components.

## Default player CSS 

You can use the following main classes/selectors to apply additional CSS styling to rich text components in a flow running the default player.

|Class/Selector|Description|
|:-------------|:----------|
|`.page-component-content`|The main class applied to the entire rich text component in a flow.<br/><br/>For example, to increase the padding around all rich text components in a flow:<br/>`.page-component-content {padding:15px}`|


## Default legacy player CSS 

The rich text component uses the [TinyMCE](https://www.tiny.cloud/) content editor when running the default legacy player, and is not able to be easily styled simply by targeting CSS classes/selectors. However, you can identify and target the .mce-\* stylesheet classes if required.

You can use the following classes/selectors to apply additional CSS styling to rich text components in a flow running the default legacy player.

|Class/Selector|Description|
|:-------------|:----------|
|`.mw-bs .mce-tinymce`|The main class applied to the entire area of the component.<br/><br/>For example, to add a border around the component:<br/>`.mw-bs .mce-tinymce {border:1px solid black}`|
|`.mw-bs .mce-container`|The main class applied to the different `<DIV>` containers that make up the component.<br/><br/>For example, to add padding to each container:<br/>`.mw-bs .mce-container {padding:10px}`|
|`.mw-bs .mce-container-body`|The main class applied to the different `<DIV>` containers that make up the body of the component.<br/><br/>For example, to add padding to each body container:<br/>`.mw-bs .mce-container-body {padding:10px}`|
|`.mw-bs .mce-panel`|The main class applied to the different `<DIV>` containers that make up the body panels of the component.<br/><br/>For example, to add padding to each body panel container:<br/>`.mw-bs .mce-panel {padding:10px}`|
|`.mw-bs .mce-top-part`|The main class applied to the top part of the component, i.e. the menu bar and button toolbar.<br/><br/>For example, to modify the background color of the top part of the component:<br/>`.mw-bs .mce-top-part {background:#cccccc}`|
|`.mw-bs .mce-menubar`|The main class applied to the menu bar of the component.<br/><br/>For example, to modify the background color of the menu bar:<br/>`.mw-bs .mce-menubar {background:#cccccc}`|