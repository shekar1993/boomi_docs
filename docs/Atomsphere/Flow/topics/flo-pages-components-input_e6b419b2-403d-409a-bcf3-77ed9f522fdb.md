# Input component

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-e6b419b2-403d-409a-bcf3-77ed9f522fdb"/>
</head>


Accept user input on a page, such as with a text input field.

## Overview

Add input components into a page to capture user input and data in a flow. This input can then be used in any way required, such as to trigger further events in the flow, determine the path of the flow, or simply to capture user data.

The type of input component presented to a user is determined by the content kind of the value that the user selection is saved to in the **Save the state into** field. See [Value content kinds](/docs/Atomsphere/Flow/topics/c-flo-Values_Content_Types_782220dc-722d-4d55-8576-e0274117e190.md).

| Value Content Kind | Description                                                                                                                                                                                                                                                                                                                                                                          |
|:-------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Boolean            | The component is presented as a checkbox, allowing a user to select \(True\) or de-select \(False\).                                                                                                                                                                                                                                                                                |
| Date, Date/Time    | Date: The component is presented as a date input field, allowing a user to enter a date or use a date selector.<br />Date/Time: The component is presented as a date/time input field, allowing a user to enter a date & time, or use a date/time selector.<br /><br />- To enable time selection, the **dateTimeFormat** attribute must be added to the input component. See [Attributes reference](/docs/Atomsphere/Flow/topics/r-flo-Attributes_Reference_4f153424-8c52-4e24-b289-2d961f0b9830.md).<br />- The **dateTimeLocale** attribute can also be added to change the default 'en-us' format to another locale format. See [Formatting date and time values](/docs/Atomsphere/Flow/topics/c-flo-Date_Time_in_Flow_967f3878-c123-4466-9f9f-dffb94c4f3b1.md). |
| Number              | The component is presented as a numeric input field; allowing a user to enter a numeric value, or use the arrow buttons to enter a numeric value.                                                                                                                                                                                                                                    |
| Password            | The component is presented as a password input field, allowing a user to securely enter a password; characters are masked using bullets.                                                                                                                                                                                                                                             |
| String              | The component is presented as a text input field, allowing a user to enter text.                                                                                                                                                                                                                                                                                                    |


## General settings

Configure the general settings for the component.

|Setting|Description|
|:------|:----------|
|**Name**|Enter a name for the input component.|
|**Label**|Enter a label for the input component. The label is displayed above the component by default. Do not enter a label if you do not require this text to be shown.|
|**Placeholder text**|Enter a short hint to display in the field, such as an example of the expected value or format.|
|**Help information about this component**|Display help text directly below the component, for example to provide further information on how to use the component.|

## State

1. Select the value that you wish to save the user input data into.

1.  **Save the component state into**: Click **Select or create a new value** to select an existing value or create a new value.

    The type of input component presented to a user is determined by the content kind of the value selected in this field. See [Value content kinds](/docs/Atomsphere/Flow/topics/c-flo-Values_Content_Types_782220dc-722d-4d55-8576-e0274117e190.md).

## Validation

Add client-side page validation to the component. You cannot add validation if you are saving state data into a boolean or object value.

1.  Click **Add Validation**.
2.  Select the validation **Type**.
3.  Enter a valid **Value** for the validation type.
4.  Enter a feedback **Message** to show to the user if the validation criteria is not met.
5.  Click **Update** to add the validation item.

| Setting   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|:----------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Required** | Specify if the component requires user input before the next map element in the flow can be navigated to. For example, a user must complete the input for this field before they are allowed to progress in the flow.<br />1. Switch on the toggle to set the component as requiring input from a user before they can progress in the flow, such as to the next page for example. A red asterisk is displayed next to the field name to indicate it is required.<br />2. Switch off the toggle to allow a user to progress in the flow even if they have not entered any input into the component, for example if the field is optional. |
| **Type** | Select the type of validation to apply to the component.<br />1. **Minimum number**: A user must enter more than this value into the field.<br />2. **Maximum number**: A user is unable to enter more than this value into the field.<br />3. **Regular expression pattern**: Apply Regular Expression \(Regex\) validation to the component.                                                                                                                                                      |
| **Value** | Enter the validation criteria.<br />1. **Minimum number**: Enter a minimum number or character limit for the component.<br />2. **Maximum number**: Enter a maximum number or character limit for the component.<br />3. **Regular expression pattern**: Enter a valid Regular Expression \(Regex\) to validate the component.                                                                                                                                                             |
| **Message** | Enter a message to show to the user if the validation criteria is not met. For example, if the user has entered a numeric value that exceeds the Maximum number value you have set.                                                                                                                                                                                                                                                                             |


## Styles

Apply additional CSS styling to the component.

1.  Enter space-delimited CSS classes/selectors into the **CSS Classes** field.

When you run the flow, these classes are appended to the main component class. See [CSS reference](/docs/Atomsphere/Flow/topics/r-flo-CSS_Reference_d32122b8-0f11-47be-91c6-6986575f933e.md).

## Attributes

Add attributes to the component.

1.  Click **Add Attribute**.
2.  Enter a supported attribute **Key** and **Value**. See [Attributes reference](/docs/Atomsphere/Flow/topics/r-flo-Attributes_Reference_4f153424-8c52-4e24-b289-2d961f0b9830.md).