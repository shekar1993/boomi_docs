# Textarea component

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-0f2d61f9-99e8-4db8-a420-cf37eadc1554"/>
</head>


Add a text input field to a page to accept multi-line text user input.

## Overview

Add a textarea components to a page to capture multi-line text input using a textarea input type. For example, if you want your flow users to provide further information or comments in response to a question or statement.

-   The text input field only accepts unformatted text. If you require a user to be able to enter rich text content, use a [Rich Text component](/docs/Atomsphere/Flow/topics/flo-pages-components-richtext_a0e0adc5-adc8-495e-b101-f31f1ef9ada2.md).

-   Text data should be stored in values of the 'string' content kind. See [Value content kinds](/docs/Atomsphere/Flow/topics/c-flo-Values_Content_Types_782220dc-722d-4d55-8576-e0274117e190.md).


## General settings

Configure the general settings for the component.

| Setting                              | Description                                                                                     |
|--------------------------------------|-------------------------------------------------------------------------------------------------|
| **Help information about this component** | Display help text directly below the component, for example to provide further information on how to use the component. |
| **Label**                           | Enter a label for the text component. The label is displayed above the component by default. Do not enter a label if you do not require this text to be shown. |
| **Name**                            | Enter a name for the component.                                                                 |
| **Placeholder text**                | Enter a short hint to display in the field, such as an example of the expected value or format. |
| **Editable**                        | 1. Select the checkbox to allow the component to accept input from a user. <br /> 2. De-select the checkbox to prevent a user from being able to input or interact with the component. |


## State

Select the value that you wish to save the user input data into.

1.  **Save the component state into**: Click **Select or create a new value** to select an existing value or create a new value.

Values must be of the 'string' content kind. See [Value content kinds](/docs/Atomsphere/Flow/topics/c-flo-Values_Content_Types_782220dc-722d-4d55-8576-e0274117e190.md).

## Validation

Add client-side page validation to the component. You cannot add validation if you are saving state data into a boolean or object value.

1.  Click **Add Validation**.
2.  Select the validation **Type**.
3.  Enter a valid **Value** for the validation type.
4.  Enter a feedback **Message** to show to the user if the validation criteria is not met.
5.  Click **Update** to add the validation item.

| Setting    | Description                                                                                                                 |
|------------|-----------------------------------------------------------------------------------------------------------------------------|
| **Message** | Enter a message to show to the user if the validation criteria is not met. For example, if the user has entered a numeric value that exceeds the Maximum number value you have set. |
| **Value**  | Enter the validation criteria. <br />• **Minimum number**: Enter a minimum number or character limit for the component. <br />• **Maximum number**: Enter a maximum number or character limit for the component. <br />• **Regular expression pattern**: Enter a valid Regular Expression (Regex) to validate the component. |
| **Type**   | Select the type of validation to apply to the component. <br />• **Minimum number**: A user must enter more than this value into the field. <br />• **Maximum number**: A user is unable to enter more than this value into the field. <br />• **Regular expression pattern**: Apply Regular Expression (Regex) validation to the component. |
| **Required** | Specify if the component requires user input before the next map element in the flow can be navigated to. For example, a user must complete the input for this field before they are allowed to progress in the flow. <br />• Switch on the toggle to set the component as requiring input from a user before they can progress in the flow, such as to the next page for example. A red asterisk is displayed next to the field name to indicate it is required. <br />• Switch off the toggle to allow a user to progress in the flow even if they have not entered any input into the component, for example if the field is optional. |


## Styles

Apply additional CSS styling to the component.

1.  Enter space-delimited CSS classes/selectors into the **CSS Classes** field.

When you run the flow, these classes are appended to the main component class. See [CSS reference](/docs/Atomsphere/Flow/topics/r-flo-CSS_Reference_d32122b8-0f11-47be-91c6-6986575f933e.md).

## Attributes

Add attributes to the component.

1.  Click **Add Attribute**.
2.  Enter a supported attribute **Key** and **Value**. See [Attributes reference](/docs/Atomsphere/Flow/topics/r-flo-Attributes_Reference_4f153424-8c52-4e24-b289-2d961f0b9830.md).