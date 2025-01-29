# List component

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-a1d553ed-c8f8-4536-a836-cd5c0f1cedb8"/>
</head>


Display data from a list value or a connector as a bulleted or numeric list.

## Overview

Add a list component to display data as a standalone list element in your page layout.

-   Lists are either bulleted \(rendered as an HTML 'unordered' `<UL>` list), or numbered \(rendered as an HTML 'ordered' `<OL>` list\).

    Lists are unordered \(bulleted\) by default, but you can change this by adding an ordered attribute to the component and setting the attribute to 'true'. See [Attributes reference](/docs/Atomsphere/Flow/topics/r-flo-Attributes_Reference_4f153424-8c52-4e24-b289-2d961f0b9830.md).

-   When setting up the component, you must choose the **Data Source**:

    -   The type of data to be provided.

    -   The data source itself , as a list can be populated using the data from a list value or a connector.

    -   The value that contains the actual list data.

-   Once you have configured the **Data Source** settings, you must add the list property that you wish to display as a list.

    For example, a "person" list may have "surname" and "forename" properties. You would need to choose one, as you could display either.

    -   Click **Add Column** in the **Data Presentation** section to select the list property that you wish to display.

-   Note that the list component does not display the actual list items in the page builder. These are only rendered when the flow is run/published.


## General settings

The following options and settings can be configured.

| Setting                                | Description                                                                                                                                                                                                                                                         |
|:---------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Name**                               | Enter a name for the list component.                                                                                                                                                                                                                               |
| **Label**                              | Enter a label for the list. The label is displayed above the list by default. Do not enter a label if you do not require this text to be shown.                                                                                                                     |
| **Help information about this component** | Display help text directly below the component, for example to provide further information on how to use the component.                                                                                                                                            |
| **Data Source**                        | Choose the data source for the component:<br />**Get the data from a Connector**: Retrieve the list data from a connector.<br /><br />1. Select the type for the data that you wish to display in the **The Type of data to be provided** field.<br />2. Select the type binding in the **The Binding that should be used to get the data** drop-down menu.<br />3. Add a **Filter** in the **Data source filter** section if required. See [Type Bindings](/docs/Atomsphere/Flow/topics/c-flo-Types_Bindings_d7c6499e-7796-491f-bdcf-0c41f65bce9e.md) and [ Data action filters](/docs/Atomsphere/Flow/topics/c-flo-Data-Action_Filters_7246bf53-46ad-4ecb-88f9-177803b59ac0.md).<br /><br />**Get the data from a List Value**: Retrieve the list data from a list value.<br /><br />- Click **Select or create a new Value** to choose an existing list value or create a new list value. |
| **Data Presentation**                  | Click **Add Column** in the **Data Presentation** section to choose the list property that you wish to display. For example, if you have multiple properties assigned to the type, you must choose which property to use for the list.                                 |


## Styles

Apply additional CSS styling to the component.

1.  Enter space-delimited CSS classes/selectors into the **CSS Classes** field.

When you run the flow, these classes are appended to the main component class. See [CSS reference](/docs/Atomsphere/Flow/topics/r-flo-CSS_Reference_d32122b8-0f11-47be-91c6-6986575f933e.md).

## Attributes

Add attributes to the component.

1.  Click **Add Attribute**.
2.  Enter a supported attribute **Key** and **Value**. See [Attributes reference](/docs/Atomsphere/Flow/topics/r-flo-Attributes_Reference_4f153424-8c52-4e24-b289-2d961f0b9830.md).