# Page operations

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-b8916343-35a8-4085-8b50-a160e2bf3869"/>
</head>


Add operations to a page condition to define what action is triggered when the rule conditions are met.

## Overview

Page operations form the -**THEN** part of the **IF-THEN** conditional logic for a page condition.

For example, if you have a rule that checks whether the value of a toggle page component Boolean value is true, you would need to add an operation to define what happens on the page when this rule is met.

Page operations typically consist of 2 parts - the **SET** 'assignee' \(the component that a value is being assigned to\), and the **TO** 'assignor' \(where the value is read from\). This format allows you to configure what happens to a page component when the page condition is met, such as changing the visibility of a page component.

## Add a page operation

1.  Click **Add operation** on the **Configure page conditions** panel, once you have set up your [Page rules](/docs/Atomsphere/Flow/topics/flo-pages-conditions-rules_22f87872-e064-4d43-9fc7-ff85b6689332.md).
2.  **SET**: Specify the affected component and property.

    -   **Component**: Select the page component to perform the operation against.

    -   **Property**: Select the property of the page component that will be affected.

3.  **TO**: Specify what the component value should be set to.

    -   **Component/Property**: Select the page component and property that you wish to copy the value from. Use this to set the property value of one page component to the same property value of another page component.

    -   **Value**: Click **Select or create a new value** to select or create the value to set for the page component.

4.  Click **Apply** to add the operation to the page condition.
5.  Add additional page operations as required, to perform multiple operations on a page once the page rules are met. Page operations are performed in the order in which they are added.
6.  Click **Apply** to save and apply the page condition.

## Example page operation

| Page Operation                        | Configuration and description                                                             |
|---------------------------------------|-------------------------------------------------------------------------------------------|
| **Set the visibility of a page component (Hidden) to True** | - SET Component: Hidden<br />- Property: Visibility<br />- TO Value: `$True` (Boolean)<br /><br />This applies the following operation:<br />Assign the [$True] Value to the [Hidden] Component visibility. |


## Component Properties

| Property  | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|:---------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Editable  | The 'editable' status of a component. A component can be either editable, or non-editable \(read-only\).<br /> 1. If a component is set as editable, a flow user is able to interact with it, such as being able to enter text into an input component.<br />2. If a component is set as non-editable, a flow user is unable to input or interact with it in any way.<br /><br />For example, you could set an input component to be read-only \(non-editable\) if a user had already chosen a specific answer \(either previously or on the current page\), or if you wanted to toggle between being able to edit data, or setting data on a page and then making it non-editable by a user. |
| Enabled   | The 'enabled' status of a component. A component can be either enabled, or disabled. Components can only be set as enabled or disabled using a page condition.<br />1. If a component is set as enabled, a flow user is able to interact with it and use it fully.<br />2. If a component is set as disabled, a flow user is unable to interact with it in any way.                                                                                                                                                                            |
| Required  | The 'required' status of a component. A component can be either required or optional.<br />1. If a component is set as required, it requires user selection/input before the next map element in the flow can be navigated to. Note that required fields only stop progression on outcomes that are set to "Save Changed Values".<br />For example, a flow user must select a 'required' radio button before they are allowed to progress in the flow.<br />2. If a component is not set as required, a flow user can progress in the flow even if they do not interact with the component in any way.       |
| Value     | The value selected in a component.<br />For example, you can check whether the value selected in an input component matches another value.<br />Note that the Value property is read-only, and cannot be used to set other values, only compare them.                                                                                                                                                                                                                                                              |
| Visibility| The 'visible' status of a component. A component can be either visible or hidden on a page.<br />For example, a hidden input component on a page could be made visible when a user selects a specific option in a radio component. See [Changing field visibility with a basic page condition](/docs/Atomsphere/Flow/topics/flo-Conditions_using_basic_b2ca49a7-b859-409b-a00a-019517b698ff.md) for a worked example.                                                                                                                           |
