# Combobox component

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-c96a1731-1c14-46e6-9a53-5e7cd6328aa2"/>
</head>


Add a drop-down menu \(combobox\) to a page.

## Overview

Add a combobox component to a page to capture user input in a flow from a pre-defined, limited number of choices, presented as a drop-down menu. This input can then be used in any way you require, such as to trigger further events in the flow, determine the path of the flow, or simply to capture user data.

-   When setting up the component, you must choose the **Data Source**:

    -   The type of data to be provided.

    -   The data source itself, as a combobox can be populated using the data from a list value or a connector.

    -   The value that contains the actual combobox data.

-   Select the value that you wish to save the user selection data into in the **Save the component state into** field.

-   Once you have configured the **Data Source** settings, you must add the properties that you wish to display as drop-down menu options.


## General settings

Configure the general settings for the component.

| Setting                                 | Description                                                                                                                     |
|:----------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------|
| **Help information about this component** | Display help text directly below the component, for example to provide further information on how to use the component.           |
| **Label**                               | Enter a label for the component. The label is shown above the component by default. Do not enter a label if you do not require this text to be shown. |
| **Name**                                | Enter a name for the component.                                                                                                |
| **Multi-select**                        | Specify if the component allows a user to make multiple selections.<br />• Select the checkbox to enable a user to make multiple selections.<br />• De-select the checkbox to prevent a user from selecting more than one option in the component. |
| **Editable**                            | Specify if the component can accept user input. For example, whether a user can make a selection from the combobox.<br />• Select the checkbox to allow the component to accept input from a user.<br />• De-select the checkbox to prevent a user from being able to input or interact with the component. |


## Data source

Choose the data source for the component:

**Get the data from a Connector**: Retrieve the combobox data from a connector.

-   Select the type for the data that you wish to display in the **The Type of data to be provided** field. This will determine the properties that you can select.

-   Select the type binding in the **The Binding that should be used to get the data** drop-down menu.

-   Add a **Filter** in the **Data source filter** section if required. See [Type Bindings](/docs/Atomsphere/Flow/topics/c-flo-Types_Bindings_d7c6499e-7796-491f-bdcf-0c41f65bce9e.md) and [ Data action filters](/docs/Atomsphere/Flow/topics/c-flo-Data-Action_Filters_7246bf53-46ad-4ecb-88f9-177803b59ac0.md).


**Get the data from a List Value**: Retrieve the combobox data from a list value.

-   Click **Select or create a new Value** to choose an existing list value or create a new list value.


## State

Select the value that you wish to save the user selection data into.

1.  **Save the component state into**: Click **Select or create a new value** to select an existing value or create a new value.

## Validation

Add client-side page validation to the component. You cannot add validation if you are saving state data into a boolean or object value.

1.  Click **Add Validation**.
2.  Select the validation **Type**.
3.  Enter a valid **Value** for the validation type.
4.  Enter a feedback **Message** to show to the user if the validation criteria is not met.
5.  Click **Update** to add the validation item.

| Setting   | Description                                                                                                                                                                                             |
|:----------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Message** | Enter a message to show to the user if the validation criteria is not met.<br />For example, if the user has entered a numeric value that exceeds the Maximum number value you have set.                      |
| **Value**   | Enter the validation criteria.<br />• **Minimum number**: Enter a minimum number or character limit for the component.<br />• **Maximum number**: Enter a maximum number or character limit for the component.<br />• **Regular expression pattern**: Enter a valid Regular Expression (Regex) to validate the component.                                                                                                            |
| **Type**    | Select the type of validation to apply to the component.<br />• **Minimum number**: A user must enter more than this value into the field.<br />• **Maximum number**: A user is unable to enter more than this value into the field.<br />• **Regular expression pattern**: Apply Regular Expression (Regex) validation to the component.                                                                    |
| **Required** | Specify if the component requires user input before the next map element in the flow can be navigated to. For example, whether a user must select from the combobox before they can progress in the flow.<br />• Switch on the toggle to set the component as requiring a user to make a selection before they can progress in the flow, such as to the next page for example. A red asterisk is displayed next to the field name to indicate it is required.<br />• Switch off the toggle to allow a user to progress in the flow even if they have not made a selection from the component, for example if the field is optional. |


## Data presentation

1.  Click **Add Column** to choose the properties that you wish to display.

    For example, if you have multiple properties assigned to the type, you must choose which properties to show in the drop-down menu.


## Styles

Apply additional CSS styling to the component.

1.  Enter space-delimited CSS classes/selectors into the **CSS Classes** field.

When you run the flow, these classes are appended to the main component class. See [CSS reference](/docs/Atomsphere/Flow/topics/r-flo-CSS_Reference_d32122b8-0f11-47be-91c6-6986575f933e.md).

## Attributes

Add attributes to the component.

1.  Click **Add Attribute**.
2.  Enter a supported attribute **Key** and **Value**. See [Attributes reference](/docs/Atomsphere/Flow/topics/r-flo-Attributes_Reference_4f153424-8c52-4e24-b289-2d961f0b9830.md).