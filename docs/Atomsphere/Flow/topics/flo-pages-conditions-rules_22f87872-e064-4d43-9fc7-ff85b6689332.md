# Page rules

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-22f87872-e064-4d43-9fc7-ff85b6689332"/>
</head>


Add rules to a page condition to define when to trigger an operation on the page.

## Overview

Page rules form the **IF-** part of the **IF-THEN** conditional logic for a page condition.

Page Rules typically consist of 2 parts - a **WHEN** and **IF** expression, separated by a **Criteria** comparison operation. This format allows you to compare 2 different components on a page, such as whether one value on a component matches another value on a different component.

Some comparisons may not require another component, for example, if you are checking whether the value of a toggle page component Boolean value is simply either true or false:

IF \[Toggle\] \[Toggle checked Boolean\] \[Value\] \[Equal To\] \[Value: $True\]

Once you have configured a page rule, you must then add a page operation to define what actually happens on the page when the rule conditions are met. This forms the **-THEN** part of the **IF-THEN** conditional logic. See [Page operations](/docs/Atomsphere/Flow/topics/flo-pages-conditions-operations_b8916343-35a8-4085-8b50-a160e2bf3869.md).

## Add a page rule

1.  Click **Add rule** on the **Configure page conditions** panel.
2.  **WHEN**: Specify when the page condition should be applied.

    -   **Component Changes**: The rule is only applied when a specific component changes on the page. Select the component that you wish to compare from the **Component** drop-down menu.

    -   **Page Loads**: The rule is applied when the page loads.

3.  **IF**: Specify the conditions to be met.

    -   **Value**: Click **Select or create a new value** to select or create the value to use for the comparison.

    -   **Criteria**: Select the criteria to use for the comparison.

    -   **Component**/**Value**: Either select the page component and property to evaluate against the expression/criteria, or the value to evaluate against the expression/criteria.

4.  Click **Apply** to add the rule to the page condition.
5.  Add additional page rules as required, to build up the conditional logic even further, and use the **Combine page rules using** drop-down menu to define how the rules are applied:

    -   AND: Results in an expression of "IF BOTH Page Rule A AND Page Rule B are true".

    -   OR: Results in an expression of "IF EITHER Page Rule A OR Page Rule B is true"

6.  Add a page operation to define what actually happens on the page when the rule conditions are met. See [Page operations](/docs/Atomsphere/Flow/topics/flo-pages-conditions-operations_b8916343-35a8-4085-8b50-a160e2bf3869.md).

## Example page rules

| Example page rule                                                                 | Configuration and description                                                                                          |
|-----------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------|
| Check whether the value selected in a radio page component (`SelectedRadioObject`) matches another value (`Other`) | - WHEN Component Changes: `Radio` <br /> - IF Value: `SelectedRadioObject (String)` <br /> - Criteria: `Equal To` <br /> - Value: `Other (String)` <br /> This applies the following condition: <br /> **IF the [Radio] Component is EQUAL TO the [String:Other] Value** |
| Check whether a toggle component has been selected by a user on a page             | - WHEN Component Changes: `Toggle` <br /> - IF Value: `Togglechecked (Boolean)` <br /> - Criteria: `Equal To` <br /> - Value: `$True (Boolean)` <br /> This applies the following condition: <br /> **IF [Toggle] [Toggle checked Boolean] [Value] [Equal To] [Value: $True]** |



## Component Properties

| Property   | Description                                                                                                                         |
|------------|-------------------------------------------------------------------------------------------------------------------------------------|
| **Editable** | Defines if a component can be modified. Relevant for input fields to restrict editing under certain conditions.                 |
| **Enabled** | Dictates if a component is active or inactive. An inactive component might be greyed out and unresponsive.                       |
| **Required** | Specifies if an input or selection is mandatory. In forms, certain fields might be required before submission.                   |
| **Visibility** | Controls if a component is shown or hidden. Useful for dynamic interfaces where options appear based on previous inputs.        |
| **Value** | Represents the data of a component. For input fields, this is the text entered by the user. It's read-only and used for comparisons. |



## Criteria

| Operation          | Description                                                                                                           |
|--------------------|-----------------------------------------------------------------------------------------------------------------------|
| **Is Empty**       | Checks whether the value of a left page component is empty, such as for an empty string value.                        |
| **Is Not Empty**   | Checks whether the value of a left page component is not empty.                                                       |
| **Equal To**       | Checks whether the value of the left page component is equal to the value of the right page component.                |
| **Less Than Or Equal To** | Checks whether the value of the left page component is less than or equal to the value of the right page component. |
| **Greater Than Or Equal To** | Checks whether the value of the left page component is greater than or equal to the value of the right page component. |
| **Greater Than**   | Checks whether the value of the left page component is greater than the value of the right page component.           |
| **Less Than**      | Checks whether the value of the left page component is less than the value of the right page component.              |
| **Not Equal To**   | Checks whether the value of the left page component is not equal to the value of the right page component.           |
| **Contains**       | Compares content within two string values. Checks whether the whole value of the right page component is contained anywhere within the left page component value. |
| **Starts With**    | Compares the beginning of two string values to check whether the value of the left page component starts with the value of the right page component. |
| **Ends With**      | Compares the end of two string values to check whether the value of the left page component ends with the value of the right page component. |
