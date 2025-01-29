# Images CSS 

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-bfd7a592-d85d-4a7c-9483-225b2d630463"/>
</head>


This topic provides examples of the main CSS classes/selectors you can use to customize images in a flow.

## Default player CSS 

You can use the following classes/selectors to apply additional CSS styling to all images in a flow running the default player.

|Class/Selector|Description|
|:-------------|:----------|
|`.flow img`|The basic parent class applied to every image within a flow.<br />For example, to add a thin black border to every image in a flow:<br />`.flow img {border: 1px solid black;}`|

## Default legacy player CSS 

You can use the following classes/selectors to apply additional CSS styling to all images in a flow running the default legacy player.

|Class/Selector|Description|
|:-------------|:----------|
|`.mw-bs img`|The basic parent class applied to every image in a flow.<br />For example, to add a black border to every image in a flow:<br />`.mw-bs img {border: 1px solid black;}`|
|`.mw-bs .img-responsive`|The Bootstrap class applied directly to the `<img>` element for images so that they are responsive-friendly and scale correctly to the parent element.<br />For example, to add a black border to all images within flow presentation components.<br />`.mw-bs img-responsive {border: 1px solid black;}`|


**Example: Adding a drop shadow to all images**

![Image drop shadow](../Images/img-flo-CSS_image_54750ab7-d248-4ac7-9d0f-604ff2a1c3eb.png)

```
 .mw-bs .img-responsive {
 box-shadow: 5px 5px 2px #888888;
 border-radius: 2px;
 border-width: 1px;
 border-style: outset;
 }
```