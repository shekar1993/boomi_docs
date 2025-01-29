# List component CSS 

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-25b62f3b-c2d1-48e7-bfdd-ed01fbb8d557"/>
</head>


This topic provides examples of the main CSS classes/selectors you can use to customize list components.

## Default player CSS 

You can use the following main classes/selectors to apply additional CSS styling to list components in a flow running the default player.

|Class/Selector|Description|
|:-------------|:----------|
|`.page-component-list`|The main class applied to the entire list component in a flow.<br />For example, to increase the padding around all list components in a flow:`.page-component-input {padding:15px}`|
|`.flow ul`|The main class applied to unordered list `<ul>` components.<br />For example, to change the type of `list-item marker` in unordered lists to squares:`.flow ul {list-style-type:square}`|
|`.flow ol`|The main class applied to ordered list `<ol>` components.<br />For example, to change the type of `list-item marker` in ordered lists to roman numerals:`.flow ol {list-style-type:upper-roman}`|

## Default legacy player CSS

You can use the following classes/selectors to apply additional CSS styling to list components in a flow running the default legacy player.

|Class/Selector|Description|
|:-------------|:----------|
|`.mw-bs .mw-list`|The main class applied to the `<li>` element of the component. This affects both ordered and unordered lists.<br />For example, to change the line-height for all lists within the component:`.mw-bs .mw-list {line-height:2em}`|
|`.mw-bs ul`|The main class applied to unordered list `<ul>` components.<br />For example, to change the type of `list-item marker` in unordered lists to squares:`.mw-bs ul {list-style-type:square}`|
|`.mw-bs ol`|The main class applied to ordered list `<ol>` components.<br />For example, to change the type of `list-item marker` in ordered lists to roman numerals:`.mw-bs ol {list-style-type:upper-roman}`|