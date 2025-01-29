# Files component

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-78d1140b-67ad-4561-bce7-e14086cc2122"/>
</head>


List files, and allow users to upload files.

## Overview

Add a files component to a page to provide a way for your flow users to upload and view file listing data. When displayed in a web application page, the files component displays two separate areas.

The files component is only supported with the default legacy runtime.

**File upload**: The top of the component includes the file upload functionality from the file upload component. This allows a user to upload files into the connector you have defined in the component. See [File Upload component](/docs/Atomsphere/Flow/topics/flo-pages-components-fileupload_edb868aa-5a66-4cbf-9019-42e1df0ed027.md).

**File listing**: Below this, a list of the uploaded files is displayed in a table. Table columns are defined and configured in the component **Data Presentation** section, allowing a number of file properties to be displayed.

-   When setting up a files component, you must specify the connector and resource path in the **Data Source** settings:

    -   Select the connector to use to upload and store the files. Only connectors that support file uploading can be used with this component \(for example, if the **Files** checkbox is selected on the connector details page\).

    -   Enter the resource path if one is required by the connector. This may be left blank for some connectors.

-   Once you have configured the **Data Source** settings, you can select an object value that the file data is saved into. If creating a new value, the '$File' type of value is automatically selected,but this may need to be changed to a custom type if required by the connector.


## General settings

Configure the general settings for the component.

| Setting                              | Description                                                                                     |
|--------------------------------------|-------------------------------------------------------------------------------------------------|
| **Searchable**                       | Add a search field to the file listing area that allows a user to search the file listing table. <br />• Select the checkbox to enable the search feature on the component. <br />• De-select the checkbox to disable the search feature on the component. |
| **Help information about this component** | Display help text directly below the component, for example to provide further information on how to use the component. |
| **Label**                            | Enter a label for the component. The label is displayed above the component by default. Do not enter a label if you do not require this text to be shown. |
| **Name**                             | Enter a name for the component.                                                                 |
| **Multi-select**                     | Specify if the component allows a user to upload multiple files simultaneously. <br />• Select the checkbox to enable a user to upload multiple files into the file upload component simultaneously. <br />• De-select the checkbox to prevent a user from uploading multiple files; only one file at a time can be upload using the component. |
| **Editable**                         | Specify if the user can use and interact with the component. <br />• Select the checkbox to allow a user to use the component. <br />• De-select the checkbox to prevent a user from being able to interact with the component. |

## Data source

Choose the data source for the component.

**The Connector to load the Files from**: Select the connector to use for the files component. Only a connector that support file uploading can be used with this component \(for example, if the **Files** checkbox is selected on the connector details page\). You must have installed the relevant connector into your flow for it to be available in the drop-down menu.

**Resource path**: Enter the file resource path if one is required by the connector. This can be left blank if not required by the connector.

For example, if using the file upload component with , this is the same as the resource path from the Flow Services Server **File Resource** configuration.

## State

Select the value that you wish to save the file upload data into.

1.  **Save the component state into**: Click **Select or create a new value** to select the object value that the files data is saved into. If creating a new value, the '$File' type of value is automatically selected, but this may need to be changed to a custom type if required by the connector.

## Validation

Add client-side page validation to the component. You cannot add validation if you are saving state data into a boolean or object value.

1.  Click **Add Validation**.
2.  Select the validation **Type**.
3.  Enter a valid **Value** for the validation type.
4.  Enter a feedback **Message** to show to the user if the validation criteria is not met.
5.  Click **Update** to add the validation item.

| Setting   | Description                                                                                           |
|-----------|-------------------------------------------------------------------------------------------------------|
| **Message** | Enter a message to show to the user if the validation criteria is not met.                           |
| **Value**    | Enter the validation criteria. <br />• **Minimum number:** Enter a minimum number or character limit for the component. <br />• **Maximum number:** Enter a maximum number or character limit for the component. <br />• **Regular expression pattern:** Enter a valid Regular Expression (Regex) to validate the component. |
| **Type**    | Select the type of validation to apply to the component. <br />• **Minimum number:** A user must enter more than this value into the field. <br />• **Maximum number:** A user is unable to enter more than this value into the field. <br />• **Regular expression pattern:** Apply Regular Expression (Regex) validation to the component. |
| **Required** | Specify if the component requires user selection before the next map element in the flow can be navigated to. For example, a user must use the file upload component before they are allowed to progress in the flow. <br />• Switch on the toggle to set the component as requiring selection from a user before they can progress in the flow, for example to the next page. <br />• Switch off the toggle to allow a user to progress in the flow, even if they have not used the component, for example if the field is optional. |


## Data presentation

Click **Add Column** in the **Data Presentation** section to add a column to the file listing table. Select the file property that you wish to display in the column from the **The Property to use for this Column** field.

-   **Date Created**: The date that the file was created.

-   **Date Modified**: The date that the file was last modified.

-   **Description**: The file description.

-   **Download Uri**: The download URI for the file from the connector. A **Download** button is automatically inserted into the table for this property, linked to the connector download URI.

-   **Embed Uri**: The embed URI for the file from the connector.

-   **Icon Uri**: The icon URI for the file from the connector.

-   **Id**: The external ID for the file as defined in the file storage connector.
-   **Kind**: The file 'kind'.

-   **Mime type**: The mime type of the file, used to identify the nature and format of the file.

-   **Name**: The full file name of the file, including the file extension.


## Styles

Apply additional CSS styling to the component.

1.  Enter space-delimited CSS classes/selectors into the **CSS Classes** field.

When you run the flow, these classes are appended to the main component class. See [CSS reference](/docs/Atomsphere/Flow/topics/r-flo-CSS_Reference_d32122b8-0f11-47be-91c6-6986575f933e.md).

## Attributes

Add attributes to the component.

1.  Click **Add Attribute**.
2.  Enter a supported attribute **Key** and **Value**. See [Attributes reference](/docs/Atomsphere/Flow/topics/r-flo-Attributes_Reference_4f153424-8c52-4e24-b289-2d961f0b9830.mdr-flo-Attributes_Reference_4f153424-8c52-4e24-b289-2d961f0b9830.md).