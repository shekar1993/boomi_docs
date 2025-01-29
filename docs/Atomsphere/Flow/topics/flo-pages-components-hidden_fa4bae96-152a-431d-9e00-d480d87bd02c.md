# Hidden component

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-fa4bae96-152a-431d-9e00-d480d87bd02c"/>
</head>


Use a hidden component to ensure a value exists on a page, so that it can be used with validation or page conditions/operations.

## Overview

Hidden components do not present or display anything to a flow user when they are added into a page, but are used in situations where you require a "hidden" value to exist on a page. This value can then be used for validation or page conditions/operations.

For example, you could use this in combination with a page condition to show/hide other components on a page, depending on a hidden component value:

-   If "value x" is empty, display "component B".

-   If "value x" is not used in any component on the page, the page condition will not work.


## General settings

The following options and settings can be configured.

|Setting|Description|
|:------|:----------|
|**Name**|Enter a name for the component.|
|**Help information about this component**|Display help text directly below the component, for example to provide further information on how to use the component.|

## State

Select the value that you wish to save the user selection state data into.

1.  **Save the component state into**: Click **Select or create a new value** to select an existing value or create a new value.

## Styles

Apply additional CSS styling to the component.

1.  Enter space-delimited CSS classes/selectors into the **CSS Classes** field.

When you run the flow, these classes are appended to the main component class. See [CSS reference](/docs/Atomsphere/Flow/topics/r-flo-CSS_Reference_d32122b8-0f11-47be-91c6-6986575f933e.md).

## Validation

Add client-side page validation to the component. You cannot add validation if you are saving state data into a boolean or object value.

1.  Click **Add Validation**.
2.  Select the validation **Type**.
3.  Enter a valid **Value** for the validation type.
4.  Enter a feedback **Message** to show to the user if the validation criteria is not met.
5.  Click **Update** to add the validation item.

|Setting|Description|
|:------|:----------|
|**Required**|Specify if the component requires user selection before the next map element in the flow can be navigated to. For example, a user must use the component before they are allowed to progress in the flow.<br /> 1. Switch on the toggle to set the component as requiring selection from a user before they can progress in the flow, for example to the next page. <br />2. Switch off the toggle to allow a user to progress in the flow, even if they have not used the component, for example if the field is optional.|
|**Type**|Select the type of validation to apply to the component. <br />1. **Minimum number**: A user must enter more than this value into the field.<br /> 2. **Maximum number**: A user is unable to enter more than this value into the field.<br /> 3. **Regular expression pattern**: Apply Regular Expression \(Regex\) validation to the component.|
|**Value**|Enter the validation critera. <br />1. **Minimum number**: Enter a minimum number or character limit for the component. <br />2. **Maximum number**: Enter a maximum number or character limit for the component.<br /> 3. **Regular expression pattern**: Enter a valid Regular Expression \(Regex\) to validate the component.|
|**Message**|Enter a message to show to the user if the validation criteria is not met.|

## Attributes

Add attributes to the component.

1.  Click **Add Attribute**.
2.  Enter a supported attribute **Key** and **Value**. See [Attributes reference](/docs/Atomsphere/Flow/topics/r-flo-Attributes_Reference_4f153424-8c52-4e24-b289-2d961f0b9830.md).