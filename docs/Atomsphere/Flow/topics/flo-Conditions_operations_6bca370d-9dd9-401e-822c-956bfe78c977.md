# Page Operations

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-6bca370d-9dd9-401e-822c-956bfe78c977"/>
</head>


Page Operations define the operation to perform on a page component when a Page Rule condition is met.

## Overview

When building a complex page condition, Page Operations form the -THEN part of the IF-THEN conditional logic for a page condition.

For example, if you have a Page Rule that checks whether the value of a toggle page component Boolean value is true, you would need to add a Page Operation to define what happens on the page when this rule is met.

Page Operations typically consist of 2 parts - the 'assignee' \(the component that a value is being assigned to\), and the 'assignor' \(where the value is read from\). This format allows you to configure what happens to a page component when the page condition is met, such as setting the visibility of a page component.

## Page Operation example

|Example Page Operation|Configuration and description|
|:---------------------|:----------------------------|
|Set the visibility of a page component \(Hidden\) to True|-   Assignee Page Component: Hidden
-   Metadata Type: Visibility
-   Assignee Value: Not selected
-   Assignor Page Component: Not selected
-   Metadata Type: Value
-   Assignor Value: $True \(Boolean\)

This applies the following operation:

 Assign the \[$True\] Value to the \[Hidden\] Component visibility.

|

## Adding a Page Operation

1.  Once you have set up a [Page Rule](flo-Conditions_rules_c2625ff4-12fa-40da-b277-b48e9530eb86.md), click **New Page Operation** on the **Condition** panel.
2.  **Assignee Page Component**: Select the page component to perform the operation against.
3.  **Metadata Type**: Select the metadata type of the page component that will be affected.
4.  **Assignee Value**: This is usually left blank, and is only required if you have selected the Value Metadata Type. Select the value that you wish to use for the operation.
5.  **Assignor Page Component**: This is usually left blank, and is only required if you want to set the metadata value of one page component to the same metadata value of another page component. Select the page component that you wish to copy the value from.
6.  **Metadata Type**: Select the metadata type to use for reading the value from.
7.  **Assignor Value**: Select the value to set for the page component.
8.  Click **Apply Operation** to return to the **Condition** panel. The new operation is added to the table of Page Operations in the **Then...**section.
9.  Add another Page Operation if needed, to perform multiple operations on a page once a rule is met. Page Operations are performed in the order in which they are added.
10. Click **Apply Condition** to save and apply the page condition.

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