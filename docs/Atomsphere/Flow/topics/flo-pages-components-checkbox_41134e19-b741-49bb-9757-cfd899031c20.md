# Checkbox component

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-41134e19-b741-49bb-9757-cfd899031c20"/>
</head>


Add a checkbox to a page.

## Overview

Add checkbox components to a page to capture user input in a flow using a checkbox. For example, add a checkbox if you want a simple "yes/no" response to a question or statement from your flow users.

-   The checkbox is displayed as a square box, unchecked by default. A user can select the checkbox to check it and indicate a positive response to the selection.

-   Checkbox data should only be stored as boolean content kind values. See [Value content kinds](/docs/Atomsphere/Flow/topics/c-flo-Values_Content_Types_782220dc-722d-4d55-8576-e0274117e190.md).

-   If the checkbox is selected \(checked\), the boolean value is set to 'True', if the checkbox is de-selected \(unchecked\) the boolean value is set to 'False'.


## General settings

Configure the general settings for the component.

| Setting                                | Description                                                                                                                                                                                                                                                                                                                                                                                                    |
|:---------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Name**                               | Enter a name for the checkbox component.                                                                                                                                                                                                                                                                                                                                                                      |
| **Label**                              | Enter a label for the checkbox component. The label is displayed next to the checkbox.                                                                                                                                                                                                                                                                                                                       |
| **Editable**                           | Specify if the component can accept user input.<br />1. Select the checkbox to allow the component to accept input from a user.<br />2. De-select the checkbox to prevent a user from being able to input or interact with the component.                                                                                                                                                                        |
| **Required**                           | Specify if the component requires user selection before the next map element in the flow can be navigated to. For example, a user must select one of the radio buttons before they are allowed to progress in the flow.<br />1. Select the checkbox to set the component as requiring selection from a user before they can progress in the flow, for example to the next page. A red asterisk is displayed next to the field name to indicate it is required.<br />2. De-select the checkbox to allow a user to progress in the flow, even if they have not selected any radio buttons in the component, for example if the field is optional. |
| **Help information about this component** | Display help text directly below the component, for example to provide further information on how to use the component.                                                                                                                                                                                                                                                                                       |


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

| Setting   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|:----------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Required** | Specify if the component requires user input before the next map element in the flow can be navigated to. For example, a user must complete the input for this field before they are allowed to progress in the flow.<br />1. Switch on the toggle to set the component as requiring input from a user before they can progress in the flow, such as to the next page for example. A red asterisk is displayed next to the field name to indicate it is required.<br />2. Switch off the toggle to allow a user to progress in the flow even if they have not entered any input into the component, for example if the field is optional. |
| **Type** | Select the type of validation to apply to the component.<br />1. **Minimum number**: A user must enter more than this value into the field.<br />2. **Maximum number**: A user is unable to enter more than this value into the field.<br />3. **Regular expression pattern**: Apply Regular Expression \(Regex\) validation to the component.                                                                                                                                                                                                                      |
| **Value** | Enter the validation criteria.<br />1. **Minimum number**: Enter a minimum number or character limit for the component.<br />2. **Maximum number**: Enter a maximum number or character limit for the component.<br />3. **Regular expression pattern**: Enter a valid Regular Expression \(Regex\) to validate the component.                                                                                                                                                                                                                                       |
| **Message** | Enter a message to show to the user if the validation criteria is not met. For example, if the user has entered a numeric value that exceeds the Maximum number value you have set.                                                                                                                                                                                                                                                                                                               |

## Styles

Apply additional CSS styling to the component.

1.  Enter space-delimited CSS classes/selectors into the **CSS Classes** field.

When you run the flow, these classes are appended to the main component class. See [CSS reference](/docs/Atomsphere/Flow/topics/r-flo-CSS_Reference_d32122b8-0f11-47be-91c6-6986575f933e.md).