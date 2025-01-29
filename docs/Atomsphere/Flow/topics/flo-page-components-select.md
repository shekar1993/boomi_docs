# Select component

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-e023151a-0e09-45a9-89f4-382ea248045e"/>
</head>

Add a select list to a page.

## Overview
Add a select component to a page to collect user input in a flow from a predefined, restricted set of options shown as a select list.
 
 This input can be utilised in a variety of ways, including triggering additional events in the flow, determine the path of the flow, or simply capturing user data.
 
 :::note

 The Select component varies from the Combobox component by displaying a native HTML select element at runtime. This improves accessibility and may provide a better user experience on devices, such as mobile phones.

 :::


 ## General settings

Configure the general settings for the component.

| Setting                                | Description                                                                                                                                                                                                                                          |
|:---------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Name**                               | Enter a name for the select component.                                                                                                                                                                                                                               |
| **Label**                              | Enter a label for the select component. The **Label** is displayed above the component by default. Do not enter a label if you do not require this text to be shown.                                                                                                                     |
| **Editable**                           | Specify if the component can accept user input. For example, if a user can select a select button.<br />1. Select the checkbox to allow the component to accept input from a user.<br />2. De-select the checkbox to prevent a user from being able to input or interact with the component. |
| **Multi-select**                       | Specify if the component allows a user to make multiple selections in the select button list.<br />1. Select the checkbox to enable a user to make multiple selections.<br />2. De-select the checkbox to prevent a user from selecting more than one select button in the component.         |
| **Placeholder**                       | Insert the text to assist you understand the functionality of each field.         |
| **Help information about this component** | Display help text directly below the component, for example to provide further information on how to use the component.                                                                                                                                                                                       |

## Data source

Choose the data source for the component.

**Get the data from a Connector**: Retrieve the list data from a connector.

-   Select the type for the data that you wish to display in the **The Type of data to be provided** field. This will determine the properties that you can select.

-   Select the type binding in the **The Binding that should be used to get the data** drop-down menu.

-   Add a **Filter** in the **Data source filter** section if required. See [Type Bindings](/docs/Atomsphere/Flow/topics/c-flo-Types_Bindings_d7c6499e-7796-491f-bdcf-0c41f65bce9e.md) and [Data action filters](/docs/Atomsphere/Flow/topics/c-flo-Data-Action_Filters_7246bf53-46ad-4ecb-88f9-177803b59ac0.md).


**Get the data from a List Value**: Retrieve the list data from a list value.

-  Click **Select or create a new Value** to choose an existing list value or create a new list value.


## State

Select the value that you wish to save the user input data into.

- **Save the component state into**: Click **Select or create a new value** to select an existing value or create a new value.

## Data presentation

Click **Add Column** in the **Data Presentation** section to choose the chart properties that you wish to display, such as the chart label and value properties.


## Styles

Apply additional CSS styling to the component.

-  Enter space-delimited CSS classes/selectors into the **CSS Classes** field.

When you run the flow, these classes are appended to the main component class. See [CSS reference](/docs/Atomsphere/Flow/topics/r-flo-CSS_Reference_d32122b8-0f11-47be-91c6-6986575f933e.md).
