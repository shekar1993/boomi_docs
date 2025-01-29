# Table component attributes 

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-b4b153dc-dfc0-4fbf-934a-39e7edabfc5e"/>
</head>


You can customize table components by applying attributes.

## Default player runtime 

You can apply the following attributes when running flows with the default player.

| Key          | Value     | Description                                                                                                                        |
|--------------|-----------|------------------------------------------------------------------------------------------------------------------------------------|
| `noResults`   | string  | Display a custom message on the page if no table results are found, such as if there are no table rows to display. <br/><br/>Default: "No Results". |
| `paginationSize` | number | Controls the number of rows loaded at a time. By default, the table loads 20 rows at a time. Scrolling the table loads and displays additional rows.|


## Default legacy player runtime 
You can apply the following attributes when running flows with the default legacy player.

| Key      | Value   | Description |
|----------|---------|-------------|
| `borderless`<br/>Page builder: `Display without borders` | boolean  | Remove vertical borders from a table.<br/><br/>• `true`: Remove all vertical borders between table columns (by removing the table-bordered CSS class).<br/><br/>• `false`: Set by default, all vertical borders are displayed.<br/><br/> |
| `classes`<br/>Page builder: `Space delimited css classes` | string  | Apply CSS directly to the component. The `string` value can consist of multiple entries to build up a CSS class selector, separated by a space character. See [CSS reference](r-flo-CSS_Reference_d32122b8-0f11-47be-91c6-6986575f933e.md) <br />For example, if a custom ".mw-bs .myChosenClassName" style is added to a player (either directly or through a linked stylesheet), this custom style can then be applied to the component using the value "`myChosenClassName`".<br/><br/> |
| `isExecuteRequestOnRenderDisabled` | boolean  | If you are retrieving table data from a connector, this attribute allows you to define if the data is loaded when the table is first displayed, or whether it should only be loaded once a user refreshes or searches the table.<br/><br/>• `true`: The object data request is not executed when the table is first displayed; it will only be executed once a user performs a refresh or search on the table. The table will be empty until the user performs one of these actions.<br/><br/>• `false`: Set by default, the object data request is executed when the table is first displayed; all table results are displayed, regardless of whether the user has performed a search or refreshed the table.<br/><br/> |
| `isRowSelectionDisabled`<br/>Page builder: `Disable row selection` | boolean  | If a table is set to allow users to select table rows, this attribute allows you to disable this functionality.<br/><br/>• `true`: Table rows cannot be selected by a user. You will need to set the radio attribute to true to allow a user to select table rows, using radio buttons or checkboxes instead of clicking on a row to select it.<br/><br/>• `false`: Set by default, a user can select table rows by clicking on them.<br/><br/> |
| `noResults` | string  | Display a custom message on the page if no table results are found, i.e. there are no table rows to display. |
| `onlyDisplaySearchResults` | boolean  | If a table is set to be searchable, this attribute is used to define whether results for the table should only be displayed once a user has performed a search.<br/><br/>• `true`: The results for the table are not displayed until a user has performed a search.<br/><br/>• `false`: Set by default, all results/rows for the table are displayed, regardless of whether the user has performed a search.<br/><br/> |
| `pagination` | boolean  | Enable pagination for the table if it is bound to a list of items. By default pagination is disabled, but you can enable it by setting the pagination attribute to true.<br/><br/>• `true`: Enables pagination for the table. Pagination buttons are displayed below the table to allow a user to navigate between the table 'pages'. Define the size using the paginationSize attribute.<br/><br/>• `false`: Set by default, no pagination is enabled for the table.<br/><br/> |
| `paginationSize` | boolean | Controls the number of rows loaded at a time. By default, the table loads 10 rows at a time. More rows are loaded and presented when you scroll through the table. Set the value to the number of rows to display on each 'page'.• Set the value to zero ('0') to display all table rows (if this is supported by the connection from which the table is importing data).|
| `radio`<br/>Page builder: `Display column headers as radio fields` | boolean  | Adds an extra column to the beginning of the table that contains a radio button input for each row. Multi-select tables will display checkboxes.<br/><br/>• `true`: A radio button/checkbox input is added to each row.<br/><br/>• `false`: Set by default, this column is not added to the table.<br/><br/> |
| `striped`<br/>Page builder: `Display with striped rows` | boolean  | Adds zebra striping to alternate table rows; a background color is defined for every other row (by adding the table-striped CSS class).<br/><br/>• `true`: Zebra striping is applied to alternate table rows.<br/><br/>• `false`: Set by default, no zebra striping is applied to the table rows.<br/><br/> |



## Metadata example

This metadata example uses the default legacy player runtime.

```
"attributes": {
  "borderless": false,
  "striped": false,
  "radio": false,
  "outcomes": "icons",
  "classes": "myclass1 myclass2",
  "pagination": false,
  "paginationSize": 10,
  "onlyDisplaySearchResults": false,
  "isExecuteRequestOnRenderDisabled": false,
  "noResults": null,
  "isRowSelectionDisabled": false
}
```