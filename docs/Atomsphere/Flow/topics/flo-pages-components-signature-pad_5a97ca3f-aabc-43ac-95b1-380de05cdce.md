# Signature Pad component


Add a Signature Pad component to display a drawing area where you can input drawings, signatures, and other illustrastions.

## Overview

Drawings, signatures, and other types of illustrations can be entered into the Signature Pad component's drawing area. Both mouse and touch input for drawing are supported by the component.

The element displays the drawing area and a button to erase any previous drawings in the top-right corner of that area.

## General settings

Configure the general settings for the component.

| Setting                               | Description                                                  |
| :------------------------------------ | :----------------------------------------------------------- |
| Name                                  | Enter a name for the component.                              |
| Label                                 | Enter a label for the component. The label is displayed above the component by default. Do not enter a label if you do not require this text to be shown. |
| Editable                              | Specify if the component can accept user input. Select the checkbox to allow the component to accept input from a user. De-select the checkbox to prevent a user from being able to input or interact with the component. |
| Help information about this component | Display help text directly below the component, for example to provide further information on how to use the component. |

## State

Select the value that you wish to save the user input data into.

- Save the component state into: Click Select or create a new value to select an existing value or create a new value.


Values must be of the 'string' content kind. See [Value content kinds](/docs/Atomsphere/Flow/topics/c-flo-Values_Content_Types_782220dc-722d-4d55-8576-e0274117e190.md).


## Styles

Apply additional CSS styling to the component.

- Enter space-delimited CSS classes/selectors into the CSS Classes field.

When you run the flow, these classes are appended to the main component class. See [CSS reference](/docs/Atomsphere/Flow/topics/r-flo-CSS_Reference_d32122b8-0f11-47be-91c6-6986575f933e.md).

## Illustration Data and State Value

This component requires a string state value. Your illustrations are stored in the component’s state value as a base64 encoded, image/png data URL which can be used as the source value for an `<⁣img>` HTML tag to render the illustration as an image inside a step map element or presentation page component.

The data URL includes all illustration data, enabling it to be utilised outside of Flow to recreate the illustration in its entirety.
