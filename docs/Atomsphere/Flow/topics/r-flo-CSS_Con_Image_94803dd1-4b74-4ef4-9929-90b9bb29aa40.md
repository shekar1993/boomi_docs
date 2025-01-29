# Image component CSS 

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-94803dd1-4b74-4ef4-9929-90b9bb29aa40"/>
</head>


This topic provides examples of the main CSS classes/selectors you can use to customize image components.

## Default player CSS 

The image component is only supported for use with the default legacy runtime.

## Default legacy player CSS 

You can use the following classes/selectors to apply additional CSS styling to image components in a flow running the default legacy player.

|Class/Selector|Description|
|:-------------|:----------|
|`.mw-bs .img-custom`|The class applied to the actual `<img>` element of the image component.<br />For example, to change the image to be responsive and scale with screen size:<br />`.mw-bs .img-custom {height:auto;}`|
|`.mw-bs .img-label`|The class applied to the `<label>` element of the image component.<br />For example, to change the font size of the image label:<br />`.mw-bs .img-label {font-size:24px;}`<br />The generic `.mw-bs label` class can be used to modify the `<label>` element of all components.|
|`.mw-image`|The class applied to the main image `<div>` element containing the image component.<br />For example, to add padding and a border around the entire image element:<br />`.mw-image {padding:10px;border:1px solid black;}`|