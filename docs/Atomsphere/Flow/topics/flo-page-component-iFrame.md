# Iframe component

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-e023151a-0e09-45a9-89f4-382ea248045e"/>
</head>

Add an Iframe to a page. 

An inline frame (iframe) is an HTML element that links to another HTML page within the content. It simply embeds another pages into the parent page. 

## Overview

Iframes are an effective way to insert external material, such as videos, maps, or other webpages, into your own page. The Iframe component allows you to embed another web page into your flow.

## General settings

The following options and settings can be configured.

|Setting|Description|
|:------|:----------|
|**Name**|Enter a name for the iframe. |
|**Label**|Enter a label for the iframe. The iframe label is displayed above the iframe by default. Do not enter a label if you do not require this text to be shown.|
|**URL**|Enter the full web address of the web page to be embedded. For example, *https://www.example.com*. You may optionally select a value to use for the iFrame URL by clicking the button next to the URL input field. To create a new value, see [Create a new value](/docs/Atomsphere/Flow/topics/t-flo-Values_Create_8f17a05f-fff5-44b4-af66-a810ebf4b8d2.md) |
|**Width**|Enter the width of the iframe in pixels. By default the component will extend to the width of its container.|
|**Height**|Enter the height of the iframe in pixels.|
|**Help information about this component**|Display help text directly below the component, for example to provide further information on how to use the component.|

## Styles

Apply additional CSS styling to the component.

1.  Enter space-delimited CSS classes/selectors into the **CSS Classes** field.

When you run the flow, these classes are appended to the main component class. See [CSS reference](/docs/Atomsphere/Flow/topics/r-flo-CSS_Reference_d32122b8-0f11-47be-91c6-6986575f933e.md).

## Attributes

Add attributes to the component.

1.  Click **Add Attribute**.
2.  Enter a supported attribute **Key** and **Value**. See [Attributes reference](/docs/Atomsphere/Flow/topics/r-flo-Attributes_Reference_4f153424-8c52-4e24-b289-2d961f0b9830.md).