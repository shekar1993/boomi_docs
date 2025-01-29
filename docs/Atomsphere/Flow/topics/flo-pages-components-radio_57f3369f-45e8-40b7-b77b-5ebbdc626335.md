# Radio component

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-57f3369f-45e8-40b7-b77b-5ebbdc626335"/>
</head>


Add a radio button group to a page.

## Overview

Add radio components into a page layout to capture user input in a flow from a pre-defined, limited number of choices, using the radio button input type.

Use this input in any way you require, such as to trigger further events in the flow, determine the path of the flow, or simply to capture data.

-   When setting up the component, you must choose the **Data Source**:

    -   The type of data to be provided.

    -   The data source itself , as a list can be populated using the data from a list value or a connector.

    -   The value that contains the actual list data.

-   Select the value that you wish to save the user selection data into in the **Save the component state into** field.

-   Once you have configured the **Data Source** settings, you must add the radio button list properties that you wish to display as a list of options.

    -   Click **Add Column** in the **Data Presentation** section to select the list properties that you wish to display.


## General settings

Configure the general settings for the component.

| Setting                                | Description                                                                                                                                                                                                                                          |
|:---------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Name**                               | Enter a name for the radio component.                                                                                                                                                                                                                               |
| **Label**                              | Enter a label for the radio component. The **Label** is displayed above the component by default. Do not enter a label if you do not require this text to be shown.                                                                                                                     |
| **Editable**                           | Specify if the component can accept user input. For example, if a user can select a radio button.<br />1. Select the checkbox to allow the component to accept input from a user.<br />2. De-select the checkbox to prevent a user from being able to input or interact with the component. |
| **Multi-select**                       | Specify if the component allows a user to make multiple selections in the radio button list.<br />1. Select the checkbox to enable a user to make multiple selections.<br />2. De-select the checkbox to prevent a user from selecting more than one radio button in the component.         |
| **Help information about this component** | Display help text directly below the component, for example to provide further information on how to use the component.                                                                                                                                                                                       |


## Data source

Choose the data source for the component.

**Get the data from a Connector**: Retrieve the list data from a connector.

-   Select the type for the data that you wish to display in the **The Type of data to be provided** field. This will determine the properties that you can select.

-   Select the type binding in the **The Binding that should be used to get the data** drop-down menu.

-   Add a **Filter** in the **Data source filter** section if required. See [Type Bindings](/docs/Atomsphere/Flow/topics/c-flo-Types_Bindings_d7c6499e-7796-491f-bdcf-0c41f65bce9e.md) and[Data action filters](/docs/Atomsphere/Flow/topics/c-flo-Data-Action_Filters_7246bf53-46ad-4ecb-88f9-177803b59ac0.md).


**Get the data from a List Value**: Retrieve the list data from a list value.

-   Click **Select or create a new Value** to choose an existing list value or create a new list value.


## State

Select the value that you wish to save the user input data into.

1.  **Save the component state into**: Click **Select or create a new value** to select an existing value or create a new value.

## Validation

Add client-side page validation to the component. You cannot add validation if you are saving state data into a boolean or object value.

1.  Click **Add Validation**.
2.  Select the validation **Type**.
3.  Enter a valid **Value** for the validation type.
4.  Enter a feedback **Message** to show to the user if the validation criteria is not met.
5.  Click **Update** to add the validation item.

| Setting   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|:----------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Required** | Specify if the component requires user input before the next map element in the flow can be navigated to. For example, a user must complete the input for this field before they are allowed to progress in the flow.<br />1. Switch on the toggle to set the component as requiring input from a user before they can progress in the flow, such as to the next page for example. A red asterisk is displayed next to the field name to indicate it is required.<br />2. Switch off the toggle to allow a user to progress in the flow even if they have not entered any input into the component, for example if the field is optional. |
| **Type** | Select the type of validation to apply to the component.<br />1. **Minimum number**: A user must enter more than this value into the field.<br />2. **Maximum number**: A user is unable to enter more than this value into the field.<br />3. **Regular expression pattern**: Apply Regular Expression \(Regex\) validation to the component.                                                                                                                                                                                                                   |
| **Value** | Enter the validation criteria.<br />1. **Minimum number**: Enter a minimum number or character limit for the component.<br />2. **Maximum number**: Enter a maximum number or character limit for the component.<br />3. **Regular expression pattern**: Enter a valid Regular Expression \(Regex\) to validate the component.                                                                                                                                                                                                                   |
| **Message** | Enter a message to show to the user if the validation criteria is not met. For example, if the user has entered a numeric value that exceeds the Maximum number value you have set.                                                                                                                                                                                                                                                                                           |


## Data presentation

1.  Click **Add Column** in the **Data Presentation** section to choose the radio button list property that you wish to display.

For example, if you have multiple properties assigned to the type, you must choose which property to use for the radio button list.

## Styles

Apply additional CSS styling to the component.

1.  Enter space-delimited CSS classes/selectors into the **CSS Classes** field.

When you run the flow, these classes are appended to the main component class. See [CSS reference](/docs/Atomsphere/Flow/topics/r-flo-CSS_Reference_d32122b8-0f11-47be-91c6-6986575f933e.md).

## Attributes

Add attributes to the component.

1.  Click **Add Attribute**.
2.  Enter a supported attribute **Key** and **Value**. See [Attributes reference](/docs/Atomsphere/Flow/topics/r-flo-Attributes_Reference_4f153424-8c52-4e24-b289-2d961f0b9830.md).