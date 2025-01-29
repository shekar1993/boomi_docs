# Page Rules

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-c2625ff4-12fa-40da-b277-b48e9530eb86"/>
</head>


Page Rules define the condition\(s\) that must be met for a page operation to be performed on a page component.

## Overview

When building a complex page condition, Page Rules form the IF- part of the IF-THEN conditional logic for a page condition.

Page Rules typically consist of 2 parts - a 'left' and 'right' expression, separated by a comparison operation \(Criteria\). This format allows you to compare 2 different components on a page, such as whether a value on a page component matches another value on a page component. Some comparisons may not require a right hand page component, for example, if you are checking whether the value of a toggle page component Boolean value is true or false.

Once you have configured a Page Rule, you will then need to add a Page Operation to form the -THEN part of the IF-THEN conditional logic. See [Page Operations](flo-Conditions_operations_6bca370d-9dd9-401e-822c-956bfe78c977.md).

## Page Rule examples

|Example Page Rule|Configuration and description|
|:----------------|:----------------------------|
|Check whether the value selected in a radio page component \(SelectedRadioObject\) matches another value \(Other\)|-   Left Page Component: Radio
-   Left Value: SelectedRadioObject \(String\)
-   Metadata Type: Value
-   Criteria: Equal To
-   Right Page Component: Not selected
-   Metadata Type: Not selected
-   Right Value: Other \(String\)

This applies the following condition:

 IF the \[Radio\] Component is EQUAL TO the \[String:Other\] Value

|
|Check whether a toggle has been selected by a user on a page|-   Left Page Component: Toggle
-   Left Value: Togglechecked \(Boolean\)
-   Metadata Type: Value
-   Criteria: Equal To
-   Right Page Component: Not selected
-   Metadata Type: Not selected
-   Right Value: $True \(Boolean\)

This applies the following condition:

 IF \[Toggle\] \[Toggle checked Boolean\] \[Value\] \[Equal To\] \[Value: $True\]

|

## Adding a Page Rule

1.  Click **New Page Rule** on the **Condition** panel.
2.  **Left Page Component**: Select the page component you wish to compare.
3.  **Left Value**: Select the value to use for the comparison.
4.  **Metadata Type**: Select the metadata type to use for the comparison.
5.  **Criteria**: Select the criteria to use for the comparison.
6.  **Right Page Component**: Select the page component you wish to use to evaluate against the expression/criteria. Note that right page components are only required when the Metadata Type selected is anything other than "Value", as in these cases a component is needed to be read from.
7.  **Metadata Type**: Select the metadata type for this page component that you wish to use to evaluate against the expression/criteria.
8.  **Right Value**: Select the value to use to evaluate against the expression/criteria.
9.  Click **Apply Rule** to return to the **Condition** panel. The new rule is added to the table of Page Rules in the **If...**section.
10. Add another Page Rule if needed, to build up the conditional logic even further, using the **Comparison Type** drop-down menu to define how these Page Rules will be applied:
    -   AND: Results in an expression of "IF BOTH Page Rule A AND Page Rule B are true".

    -   OR: Results in an expression of "IF EITHER Page Rule A OR Page Rule B is true"

11. Add a Page Operation to form the -THEN part of the IF-THEN conditional logic. See [Page Operations](flo-Conditions_operations_6bca370d-9dd9-401e-822c-956bfe78c977.md).

## Metadata Types

|Metadata Type|Description|
|:------------|:----------|
|Editable|The 'editable' status of a component. A component can be either editable, or non-editable \(read-only\). -   If a component is set as editable in the metadata, a flow user is able to interact with it, such as being able to enter text into an input component.

-   If a component is set as non-editable in the metadata, a flow user is unable to input or interact with it in any way.


For example, you could set an input component to be read-only \(non-editable\) if a user had already chosen a specific answer \(either previously or on the current page\), or if you wanted to toggle between being able to edit data, or setting data on a page and then making it non-editable by a user.

|
|Enabled|The 'enabled' status of a component. A component can be either enabled, or disabled. Components can only be set as enabled or disabled using a page condition.

-   If a component is set as enabled in the metadata, a flow user is able to interact with it and use it fully.

-   If a component is set as disabled in the metadata, a flow user is unable to interact with it in any way.


|
|Required|The 'required' status of a component. A component can be either required or optional.-   If a component is set as required, it requires user selection/input before the next map element in the flow can be navigated to. Note that required fields only stop progression on outcomes that are set to "Save Changed Values".

For example, a flow user must select a 'required' radio button before they are allowed to progress in the flow.

-   If a component is not set as required, a flow user can progress in the flow even if they do not interact with the component in any way.


|
|Value|The value selected in a component.For example, you can check whether the value selected in an input component matches another value.

Note that the Value Metadata Type is read-only, and cannot be used to set other values, only compare them.

|
|Visibility|The 'visible' status of a component. A component can be either visible or hidden on a page.For example, a hidden input component on a page could be made visible when a user selects a specific option in a radio component. See [Changing field visibility with a basic page condition](flo-Conditions_using_basic_b2ca49a7-b859-409b-a00a-019517b698ff.md) for a worked example.

|

## Criteria

|Operation|Description|
|---------|-----------|
|Equal To|Checks whether the value of the left page component is equal to the value of the right page component. For example, if the left page component value is 9, this comparison is true only if the right page component value is also 9.

|
|Not Equal To|Checks whether the value of the left page component is not equal to the value of the right page component. For example, if the left page component value is 9, this comparison is true if the right page component value is any number other than 9.

|
|Greater Than|Checks whether the value of the left page component is greater than the value of the right page component. For example, if the right page component value is 9, this comparison is true if the left page component value is more than 9.

|
|Greater Than Or Equal To|Checks whether the value of the left page component is greater than or equal to the value of the right page component.For example, if the right page component value is 9, this comparison is true if the left page component value is 9 or more.

|
|Less Than|Checks whether the value of the left page component is less than the value of the right page component. For example, if the right page component value is 9, this condition is true if the left page component value is 8 or less.

|
|Less Than Or Equal To|Checks whether the value of the left page component is greater than or equal to the value of the right page component. For example, if the right page component value is 9, this condition is true if the left page component value is 9 or less.|
|Starts With|Compares the beginning of two string values, to check whether the value of the left page component contains the right value at the very start of the string. The comparison is true if there is an exact match, but also where the values start the same, but with extra information contained in the left page component.For example, when matching a name, if the right page component string value is "Will", then matching values for the left page component would include "Will", "William", "Wills", and so on.

|
|Ends With|Compares the end of two string values, to check whether the value of the left page component contains the right value at the very end of the string. The comparison is true if there is an exact match, but also where the values end the same, but with extra information contained in the left page component. For example, when matching a company name, if the left page component string value is "A", then matching values would include "Company A", "Employee A", "Role A", and so on.

|
|Contains|Compares content within two string values. Checks whether the whole value of the right page component is contained anywhere within the left page component value. For example, if the right page component value is "Boomi", then a matching value would be a string that contained "Boomi", regardless of where in the string value it is located.

|
|Is Empty|Checks whether the value of a left page component is empty, such as for an empty string value.|