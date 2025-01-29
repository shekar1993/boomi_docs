# Table component

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-90740e9b-77c3-44cb-8e01-9e7f19f2f63c"/>
</head>


Display data on a page in an interactive table.

## Overview

Add a table component to a page to present data in an interactive table. Retrieve and display data from a connector, or a list value.

Although the table component is similar to a combobox or a radio component, using a table component allows you to display multiple properties for each line item, whereas a combobox or radio component only presents a single property to a user for selection.

-   When setting up the component, you must choose the **Data Source**:

    -   The type of data to be provided.

    -   The data source itself, as a table can be populated using the data from a list value or a connector.

    -   The value that contains the actual table data \(if using a list value\), or the type binding that should be used to retrieve data \(if using a connector\).

-   Select the value that you wish to save the user selection data into in the **Save the component state into** field. For example, if you wish a user to be able to select a table row and move to a map element containing further detail about the selected row.

-   Once you have configured the **Data Source** settings, you must add the properties that you wish to display as table columns. For example, a 'person' list may have 'surname' and 'forename' properties that you wish to display as columns in a table.

-   To make a table cell editable, and allow users to input/edit data directly in the table.

    -   Change the isEditable attribute of the column metadata from the default 'false' value to 'true'. See the Community article [Boomi Flow - In cell table editing](https://community.boomi.com/s/article/Boomi-Flow-In-Cell-table-editing) for more information on using this functionality.

-   Any outcomes associated with the table component are displayed in an automatically generated **Actions** column, rendered as outcome buttons.

    -   Each outcome only operates on the item that the table row is associated with. For example, an `Edit` outcome in a table will edit the row that the outcome is in.

    -   If an outcome is defined as Is Bulk Action, it will be displayed above the table component, and will operate on whatever item\(s\) are selected in the table.


## General settings

Configure the general settings for the component.

| Setting                              | Description                                                                                     |
|--------------------------------------|-------------------------------------------------------------------------------------------------|
| **Searchable**                       | Add a search field above the table that allows a user to search the table, and display matching items. <br />• Select the checkbox to enable the search feature on the component. <br />• De-select the checkbox to disable the search feature on the component. |
| **Help information about this component** | Display help text directly below the component, for example to provide further information on how to use the component. |
| **Label**                            | Enter a label for the table component. The label is displayed above the component by default. Do not enter a label if you do not require this text to be shown. |
| **Name**                             | Enter a name for the table component. |
| **Multi-select**                     | Specify if the table component allows a user to select multiple rows in the table. If this is enabled, a checkbox is displayed to indicate the selected rows. If allowing multiple selections, the user selection should be saved into a list value, rather than an object value. <br />• Select the checkbox to enable a user to make multiple selections. <br />• De-select the checkbox to prevent a user from selecting more than one option in the component. |

## Data source

Choose the data source for the component:

**Get the data from a Connector**: Retrieve the table data from a connector.

-   Select the type for the data that you wish to display in the **The Type of data to be provided** field. This will determine the properties that you can select.

-   Select the type binding in the **The Binding that should be used to get the data** drop-down menu.

-   Add a **Filter** in the **Data source filter** section if required. See [Type Bindings](/docs/Atomsphere/Flow/topics/c-flo-Types_Bindings_d7c6499e-7796-491f-bdcf-0c41f65bce9e.md) and [ Data action filters](/docs/Atomsphere/Flow/topics/c-flo-Data-Action_Filters_7246bf53-46ad-4ecb-88f9-177803b59ac0.md).


**Get the data from a List Value**: Retrieve the table data from a list value.

-   Click **Select or create a new Value** to choose an existing list value or create a new list value.


## State

Select the value that you wish to save the user selection data into. For example, you may present a summary table, that then allows a row to be selected, with the next page displaying all the details for the selected item/row.

1.  **Save the component state into**: Click **Select or create a new value** to select an existing value or create a new value. If the table allows multi-select, the value should be a list value, rather than an object value.

## Validation

Add client-side page validation to the component. You cannot add validation if you are saving state data into a boolean or object value.

1.  Click **Add Validation**.
2.  Select the validation **Type**.
3.  Enter a valid **Value** for the validation type.
4.  Enter a feedback **Message** to show to the user if the validation criteria is not met.
5.  Click **Update** to add the validation item.

| Setting                              | Description                                                                                     |
|--------------------------------------|-------------------------------------------------------------------------------------------------|
| **Message** | Enter a message to show to the user if the validation criteria is not met. For example, if the user has entered a numeric value that exceeds the Maximum number value you have set. |
| **Value**  | Enter the validation criteria. <br />• **Minimum number**: Enter a minimum number or character limit for the component. <br />• **Maximum number**: Enter a maximum number or character limit for the component. <br />• **Regular expression pattern**: Enter a valid Regular Expression (Regex) to validate the component. |
| **Type**   | Select the type of validation to apply to the component. <br />• **Minimum number**: A user must enter more than this value into the field. <br />• **Maximum number**: A user is unable to enter more than this value into the field. <br />• **Regular expression pattern**: Apply Regular Expression (Regex) validation to the component. |
| **Required** | Specify if the component requires user input before the next map element in the flow can be navigated to. For example, a user must complete the input for this field before they are allowed to progress in the flow. <br />• Switch on the toggle to set the component as requiring input from a user before they can progress in the flow, such as to the next page for example. A red asterisk is displayed next to the field name to indicate it is required. <br />• Switch off the toggle to allow a user to progress in the flow even if they have not entered any input into the component, for example if the field is optional. |


## Data presentation

1.  Click **Add Column** in the **Data Presentation** section to choose the properties that you wish to display as columns in the table.

## Styles

Apply additional CSS styling to the component.

1.  Enter space-delimited CSS classes/selectors into the **CSS Classes** field.

When you run the flow, these classes are appended to the main component class. See [CSS reference](/docs/Atomsphere/Flow/topics/r-flo-CSS_Reference_d32122b8-0f11-47be-91c6-6986575f933e.md).

## Attributes

Add attributes to the component.

1.  Click **Add Attribute**.
2.  Enter a supported attribute **Key** and **Value**. See [Attributes reference](/docs/Atomsphere/Flow/topics/r-flo-Attributes_Reference_4f153424-8c52-4e24-b289-2d961f0b9830.md).