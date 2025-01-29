# Toggle component

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-28e21912-1896-4550-a1ae-11ff665373a7"/>
</head>


Add a toggle switch input to a page.

## Overview

Add a toggle component to a page to capture user input in a flow using a toggle switch input type. Toggle components are larger than checkboxes and designed for ease of use on mobile devices in particular.

For example, add a toggle component if you want your users to indicate whether to enable or disable something.

-   A user can set the toggle switch to either an 'enabled' or 'disabled' state.

-   Toggle component data is usually stored in values of the 'boolean' content kind. See [Value content kinds](/docs/Atomsphere/Flow/topics/c-flo-Values_Content_Types_782220dc-722d-4d55-8576-e0274117e190.md).

-   If the toggle is enabled, the boolean value can be set to 'True', and if the toggle is disabled, the boolean value can be set to 'False'.

-   The toggle component is based on a checkbox component, using custom styling and code to render as a toggle switch. The shape and color of the toggle switch can be configured using attributes. See [Attributes reference](/docs/Atomsphere/Flow/topics/r-flo-Attributes_Reference_4f153424-8c52-4e24-b289-2d961f0b9830.md).


## General settings

Configure the general settings for the component.

| Setting                                | Description                                                                                                                                                                                                                                            |
|:---------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Name**                               | Enter a name for the toggle component.                                                                                                                                                                                                                               |
| **Label**                              | Enter a label for the toggle component. The **Label** is displayed above the toggle switch.                                                                                                                                                                             |
| **Editable**                           | Specify if the component can accept user input. For example, if a user can change the state of the toggle switch.<br />- Select the checkbox to allow the component to accept input from a user.<br />- De-select the checkbox to prevent a user from being able to input or interact with the component. |
| **Help information about this component** | Display help text directly below the component, for example to provide further information on how to use the component.                                                                                                                                                                                      |


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

| Setting   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|:----------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Required** | Specify if the component requires user input before the next map element in the flow can be navigated to. For example, whether a user must select the toggle before they can progress in the flow.<br />1. Switch on the toggle to set the component as requiring a user to make a selection before they can progress in the flow, such as to the next page for example. A red asterisk is displayed next to the field name to indicate it is required.<br />2. Switch off the toggle to allow a user to progress in the flow even if they have not made a selection from the component, for example if the field is optional. |
| **Type** | Select the type of validation to apply to the component.<br />1. **Minimum number**: A user must enter more than this value into the field.<br />2. **Maximum number**: A user is unable to enter more than this value into the field.<br />3. **Regular expression pattern**: Apply Regular Expression \(Regex\) validation to the component.                                                                                                                                                                                                                        |
| **Value** | Enter the validation criteria.<br />1. **Minimum number**: Enter a minimum number or character limit for the component.<br />2. **Maximum number**: Enter a maximum number or character limit for the component.<br />3. **Regular expression pattern**: Enter a valid Regular Expression \(Regex\) to validate the component.                                                                                                                                                                                                                        |
| **Message** | Enter a message to show to the user if the validation criteria is not met. For example, if the user has entered a numeric value that exceeds the Maximum number value you have set.                                                                                                                                                                                                                                                                                                               |


## Data presentation

1.  Click **Add Column** to choose the properties that you wish to display.

    For example, if you have multiple properties assigned to the type, you must choose which properties to show in the drop-down menu.


## Attributes

Add attributes to the component.

1.  Click **Add Attribute**.
2.  Enter a supported attribute **Key** and **Value**. See [Attributes reference](/docs/Atomsphere/Flow/topics/r-flo-Attributes_Reference_4f153424-8c52-4e24-b289-2d961f0b9830.md).

## Styles

Apply additional CSS styling to the component.

1.  Enter space-delimited CSS classes/selectors into the **CSS Classes** field.

When you run the flow, these classes are appended to the main component class. See [CSS reference](/docs/Atomsphere/Flow/topics/r-flo-CSS_Reference_d32122b8-0f11-47be-91c6-6986575f933e.md).