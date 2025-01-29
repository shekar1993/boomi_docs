# Code Scanner Component

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-d19a94c4-f681-4b4d-a1b9-251120aea584"/>
</head>

Scan QR codes and use data read from them within a flow.

## Overview

The Code Scanner component allows you to scan QR codes with your device's camera and save the resulting data within a flow. If your device has multiple cameras, such as a built-in and a USB camera, the component allows you to cycle through them, enabling you to choose which to use for scanning.

## General settings

The following options and settings can be configured.

|Setting|Description|
|:------|:----------|
|**Name**|Enter a name for the component.|
|**Label**|Enter a label for the component. The label is displayed above the outcomes by default. Do not enter a label if you do not require this text to be shown.|
|**Help information about this component**|Display help text directly below the component, for example to provide further information on how to use the component.|

### State​

Select the value that you want to save the data read from the scanned codes.

- **Save the component state into**: Click **Select or create a new value** to select an existing value or create a new value.

:::note

Values must be of the 'string' content kind.

:::

## Styles

Apply additional CSS styling to the component.

1.  Enter space-delimited CSS classes/selectors into the **CSS Classes** field.

When you run the flow, these classes are appended to the main component class. See [CSS reference](/docs/Atomsphere/Flow/topics/r-flo-CSS_Reference_d32122b8-0f11-47be-91c6-6986575f933e.md).

## Attributes

Add attributes to the component.

1.  Click **Add Attribute**.
2.  Enter a supported attribute **Key** and **Value**. See [Attributes reference](/docs/Atomsphere/Flow/topics/r-flo-Attributes_Reference_4f153424-8c52-4e24-b289-2d961f0b9830.md).