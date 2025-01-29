# Containers CSS 

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-3f6c5da4-4820-4880-bd19-8a0505d4dea5"/>
</head>


This topic details the main CSS classes/selectors applied to page container elements.

## Default player CSS 

You can use the following main classes/selectors to apply additional CSS styling to page containers in a flow running the default player.

|Class/Selector|Description|
|:-------------|:----------|
|`.page-header`|The class for the main navigation heading container element.<br />For example, to change the background of the entire navigation heading container:<br />`.page-header {background-color:blue}`|
|`.container-vertical`|The main class for a row page container.<br />For example, to change the padding for all row type containers on a page:<br />`.container-vertical {padding:15px;}`|
|`.container-horizontal`|The main class for a column page container.<br />For example, to change the padding for all column type containers on a page:<br />`.container-horizontal {padding:15px;}`|
|`.container-inline`|The main class for an inline page container.<br />For example, to change the padding for all inline type containers on a page:<br />`.container-inline {padding:15px;}`|
|`.container-group`|The main class for a tab page container.<br />For example, to change the padding for all tab type containers on a page:<br />`.container-group {padding:15px;}`|

## Default legacy player CSS 

You can use the following classes/selectors to apply additional CSS styling to page containers in a flow running the default legacy player.

A basic flow using the default legacy player runtime and theme uses the following main page container framework:

-   The entire flow is contained in a `<DIV>` element using the `.flow-container` CSS class.

-   Nested within this is a `<DIV>` element using the `.mw-bs .main-container` CSS class.

-   Nested within this is a `<DIV>` element using the `.mw-bs .main-container-inner` CSS class.

-   Nested within this are two `<DIV>` elements:

    -   The top `<DIV>` element contains the navigation element added to the flow, using the `.mw-bs .navbar-default` CSS class.

    -   The `<DIV>` element below this contains the main body of the flow, such as the page layout and components, using the `.mw-bs .main-scroller` CSS class. This is where the containers you add in a page layout are inserted.

|Class/Selector|Description|
|:-------------|:----------|
|`.flow-container`|The main class for the top-level flow `<DIV>` element.<br />For example, to change the background of the entire flow web application, including space outside of the maximum-width limits:<br />`.flow-container {background-color:black;margin:20px}`|
|`.mw-bs .main-container`|The main class for the second-level nested flow `<DIV>` element.<br />For example, to change the background of the entire flow web application and add margin padding to see the container:<br />`.mw-bs .main-container {background-color:blue;margin:20px}`|
|`.mw-bs .main-container-inner`|The main class for the third-level nested flow `<DIV>` element.<br />For example, to change the inner background of the flow web application:<br />`.mw-bs .main-container-inner {background-color:red;margin:20px}`|
|`.mw-bs .navbar-default`|The main class for the fourth-level nested flow `<DIV>` navigation element.<br />For example, to change the background of the entire navigation container:<br />`.mw-bs .navbar-default {background-color:blue}`|
|`.mw-bs .main-scroller`|The main class for the fourth-level nested flow `<DIV>` page body element.<br />For example, to change the background of the main page layout body:<br />`.mw-bs .main-scroller {background-color:grey}`|
|`.mw-bs .mw-container`|The main class for all container elements.<br />For example, to add more padding to every container element:<br />`.mw-bs .mw-container {padding:25px}`|
|`.mw-flip.flip-container`, `.mw-flip.front`, `.mw-flip.back`|The 'Flip' container layout type uses three main classes:<ul><li>`.mw-flip.flip-container`: The main class for the flip container.</li><li>`.mw-flip.front`: The main class for the 'front' flip animation.</li><li>`.mw-flip.back`: The main class for the 'back' flip animation.</li></ul>For example, to change the default height and width of the flip container:<br />`.mw-flip.flip-container, .mw-flip.front, .mw-flip.back {height:350px;width:350px}`|