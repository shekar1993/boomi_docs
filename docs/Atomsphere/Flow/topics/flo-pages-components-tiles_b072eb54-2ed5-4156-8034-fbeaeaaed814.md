# Tiles component

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-b072eb54-2ed5-4156-8034-fbeaeaaed814"/>
</head>


Display data as interactive tiles.

## Overview

Add a tiles component to a page to present and display data as individual tiles in a responsive tile layout.

-   When setting up a tiles component, you must specify the **Data Source** settings:

    -   The type of data to be provided. For example, set up the type with three properties, 'Tile name', 'Tile Description', and 'Tile detail'.

    -   The data source - tiles can be populated using the data from a list value or a connector.

    -   The value that contains the actual data for the tiles.

-   Once you have configured the **Data Source** settings, you must add the properties that you wish to display on the tiles in the **Data Presentation** section. For example, 'Tile name', 'Tile Description', and 'Tile detail' properties. Click **Add Column** in the **Data Presentation** section to select the properties that you wish to use.

-   The first defined property column is displayed as the heading of the tile, the second defined property column is displayed as a paragraph in the body of each tile. All other property columns are displayed at the bottom of the tile body using a *"__Label__: Content"* format.

-   Tiles are set to a width of 300px and a height of 300px by default. Use CSS to change the height and width of tiles. See [CSS reference](/docs/Atomsphere/Flow/topics/r-flo-CSS_Reference_d32122b8-0f11-47be-91c6-6986575f933e.md).

-   Any outcomes associated with the tiles component are displayed at the bottom of each tile, with the width of each outcome distributed evenly across the width of the tile. For example, one outcome would fill the entire width, two outcomes would be 50% wide each, and so on.

-   Any outcome set to a type of 'Delete' will display in the top-right corner of the tile.

-   If an outcome is defined as Is Bulk Action, it will be displayed above the tiles and will operate on whatever item\(s\) are selected.


## General settings

Configure the general settings for the component.

| Setting                       | Description                                                                                                                                                      |
|-------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Searchable**                | Add a search field to the tiles component that allows a user to search the tiles. <br />If the tiles are populated from a list, the search will act upon every visible column added in the **Data Presentation** section. If the tiles component retrieves the tile data from a connector, the search is managed by the connector. <br />• Select the checkbox to enable the search feature on the component. <br />• De-select the checkbox to disable the search feature on the component. |
| **Help information about this component** | Display help text directly below the component, for example to provide further information on how to use the component.                                            |
| **Label**                     | Enter a label for the tiles component. The label is displayed above the component by default. Do not enter a label if you do not require this text to be shown.  |
| **Name**                      | Enter a name for the tiles component.                                                                                                                           |
| **Multi-select**              | Specify if the component allows a user to make multiple tile selections. <br />• Select the checkbox to enable a user to make multiple selections. <br />• De-select the checkbox to prevent a user from selecting more than one option in the component.                                                          |


## Data source

Choose the data source for the component.

**Get the data from a Connector**: Retrieve the tiles data from a connector.

-   Select the type for the data that you wish to display in the **The Type of data to be provided** field. This will determine the properties that you can select.

-   Select the type binding in the **The Binding that should be used to get the data** drop-down menu.

-   Add a **Filter** in the **Data source filter** section if required. See [Type Bindings](/docs/Atomsphere/Flow/topics/c-flo-Types_Bindings_d7c6499e-7796-491f-bdcf-0c41f65bce9e.md) and [ Data action filters](/docs/Atomsphere/Flow/topics/c-flo-Data-Action_Filters_7246bf53-46ad-4ecb-88f9-177803b59ac0.md).


**Get the data from a List Value**: Retrieve the tiles data from a list value.

-   Click **Select or create a new Value** to choose an existing list value or create a new list value.


## State

Select the value that you wish to save the user selection data into.

1.  **Save the component state into**: Click **Select or create a new value** to select an existing value or create a new value.

## Validation

Add client-side page validation to the component. You cannot add validation if you are saving state data into a boolean or object value.

1.  Click **Add Validation**.
2.  Select the validation **Type**.
3.  Enter a valid **Value** for the validation type.
4.  Enter a feedback **Message** to show to the user if the validation criteria is not met.
5.  Click **Update** to add the validation item.

| Setting    | Description                                                                                                                                                                         |
|------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Message**| Enter a message to show to the user if the validation criteria is not met.                                                                                                           |
| **Value**  | Enter the validation criteria. <br /> • **Minimum number**: Enter a minimum number or character limit for the component. <br /> • **Maximum number**: Enter a maximum number or character limit for the component. <br /> • **Regular expression pattern**: Enter a valid Regular Expression (Regex) to validate the component. |
| **Type**   | Select the type of validation to apply to the component. <br /> • **Minimum number**: A user must enter more than this value into the field. <br /> • **Maximum number**: A user is unable to enter more than this value into the field. <br /> • **Regular expression pattern**: Apply Regular Expression (Regex) validation to the component. |
| **Required** | Specify if the component requires user selection before the next map element in the flow can be navigated to. For example, a user must use the file upload component before they are allowed to progress in the flow. <br /> • Switch on the toggle to set the component as requiring selection from a user before they can progress in the flow, for example to the next page. <br /> • Switch off the toggle to allow a user to progress in the flow, even if they have not used the component, for example if the field is optional. |


## Data presentation

Click **Add Column** in the **Data Presentation** section to specify the tile properties that you wish to display.

-   The first defined property column is displayed as the heading of the tile, the second defined property column is displayed as a paragraph in the body of each tile.

-   All other property columns are displayed at the bottom of the tile body using a *"__Label__: Content"* format.


## Styles

Apply additional CSS styling to the component.

1.  Enter space-delimited CSS classes/selectors into the **CSS Classes** field.

When you run the flow, these classes are appended to the main component class. See [CSS reference](/docs/Atomsphere/Flow/topics/r-flo-CSS_Reference_d32122b8-0f11-47be-91c6-6986575f933e.md).

## Attributes

Add attributes to the component.

1.  Click **Add Attribute**.
2.  Enter a supported attribute **Key** and **Value**. See [Attributes reference](/docs/Atomsphere/Flow/topics/r-flo-Attributes_Reference_4f153424-8c52-4e24-b289-2d961f0b9830.md).