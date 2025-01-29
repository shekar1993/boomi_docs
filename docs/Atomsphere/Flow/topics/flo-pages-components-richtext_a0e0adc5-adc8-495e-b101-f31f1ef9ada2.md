# Rich Text component

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-a0e0adc5-adc8-495e-b101-f31f1ef9ada2"/>
</head>


Add a rich text field to a page to accept rich text user input.

## Overview

Add a rich text component to a page to show a TinyMCE content editor, and capture rich text input from your users. For example, if you want your users to provide formatted text content in response to a question or statement.

-   Rich text data is stored in values of the 'content' content kind. See [Value content kinds](/docs/Atomsphere/Flow/topics/c-flo-Values_Content_Types_782220dc-722d-4d55-8576-e0274117e190.md).


## General settings

Configure the general settings for the component.

|Setting|Description|
|:------|:----------|
|**Name**|Enter a name for the component.|
|**Label**|Enter a label for the component. The label is displayed above the component by default. Do not enter a label if you do not require this text to be shown.|
|**Editable**|1. Specify if the component can accept user input.-   Select the checkbox to allow the component to accept input from a user. <br />2. De-select the checkbox to prevent a user from being able to input or interact with the component.|
|**Placeholder text**|Enter a short hint to display in the field, such as an example of the expected value or format.|
|**Help information about this component**|Display help text directly below the component, for example to provide further information on how to use the component.|

## State

Select the value that you wish to save the user input data into.

1.  **Save the component state into**: Click **Select or create a new value** to select an existing value or create a new value.

Values must be of the 'content' content kind. See [Value content kinds](/docs/Atomsphere/Flow/topics/c-flo-Values_Content_Types_782220dc-722d-4d55-8576-e0274117e190.md).

## Validation

Add client-side page validation to the component. You cannot add validation if you are saving state data into a boolean or object value.

1.  Click **Add Validation**.
2.  Select the validation **Type**.
3.  Enter a valid **Value** for the validation type.
4.  Enter a feedback **Message** to show to the user if the validation criteria is not met.
5.  Click **Update** to add the validation item.

| Setting                              | Description                                                                                     |
|--------------------------------------|-------------------------------------------------------------------------------------------------|
| **Help information about this component** | Display help text directly below the component, for example to provide further information on how to use the component. |
| **Label**                           | Enter a label for the text component. The label is displayed above the component by default. Do not enter a label if you do not require this text to be shown. |
| **Name**                            | Enter a name for the component.                                                                 |
| **Placeholder text**                | Enter a short hint to display in the field, such as an example of the expected value or format. |
| **Editable**                        | 1. Select the checkbox to allow the component to accept input from a user. <br /> 2. De-select the checkbox to prevent a user from being able to input or interact with the component. |


## Styles

Apply additional CSS styling to the component.

1.  Enter space-delimited CSS classes/selectors into the **CSS Classes** field.

When you run the flow, these classes are appended to the main component class. See [CSS reference](/docs/Atomsphere/Flow/topics/r-flo-CSS_Reference_d32122b8-0f11-47be-91c6-6986575f933e.md).

## Attributes

Add attributes to the component.

1.  Click **Add Attribute**.
2.  Enter a supported attribute **Key** and **Value**. See [Attributes reference](/docs/Atomsphere/Flow/topics/r-flo-Attributes_Reference_4f153424-8c52-4e24-b289-2d961f0b9830.md).