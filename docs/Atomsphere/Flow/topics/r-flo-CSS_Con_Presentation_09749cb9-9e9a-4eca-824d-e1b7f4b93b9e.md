# Presentation component CSS 

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-09749cb9-9e9a-4eca-824d-e1b7f4b93b9e"/>
</head>


This topic provides examples of the main CSS classes/selectors you can use to customize presentation components.

## Default player CSS 

You can use the following main classes/selectors to apply additional CSS styling to presentation components in a flow running the default player.

|Class/Selector|Description|
|:-------------|:----------|
|`.page-component-presentation`|The main class applied to the entire presentation component in a flow.<br />For example, to increase the padding around all presentation components in a flow:`.page-component-presentation {padding:15px}`|

## Default legacy player CSS 

You can use the following classes/selectors to apply additional CSS styling to outcomes components in a flow running the default legacy player.

**Note:** Presentation components can include a wide range of content types, and the CSS classes for these may be covered in another section in this reference, such as [Typography CSS](r-flo-CSS_Typography_1b271022-08bb-4ad4-b96f-2ae94b22b7c7.md) that relates to textual content elements for example.

|Class/Selector|Description|
|:-------------|:----------|
|`.mw-bs .mw-presentation`|The main class applied to the entire presentation component.<br />For example, to add padding around the entire component:`.mw-bs .mw-presentation {padding:15px}`|
|`.mw-bs table, .mw-bs th, .mw-bs td`|The main classes applied to all tables.<br />For example, to modify the background color of the entire table:`.mw-bs table {background-color:#cccccc}`|
|`.mw-bs video`|The main class applied to HTML5 video media embedded in a presentation component.<br />For example, to add a border around the video:`.mw-bs video {border:1px solid black}`|