# File Upload component

<head>
  <meta name="guidename" content="Flow"/>
  <meta name="context" content="GUID-edb868aa-5a66-4cbf-9019-42e1df0ed027"/>
</head>


Allow users to upload files.

## Overview

Add a file upload component to a page to allow your flow users to upload files in a browser.

-   When setting up a file upload component, you must specify the connector and resource path in the **Data Source** settings:

    -   Select the connector to use to upload files. Only a connector that supports file uploading can be used with this component \(for example, if the **Files** checkbox is selected on the connector details page\).

    -   Enter the resource path if one is required by the connector. This may be left blank for some connector. For example, this might be the same as the resource path from the Flow Services Server **File Resource** configuration.

-   Once you have configured the **Data Source** settings, select the object value that the file upload data is saved into. If creating a new value, the '$File' type of value is automatically selected, but this may need to be changed to a custom type if required by the connector.

-   To learn more about using the file upload component with Integration:

    -   [Using Flow Service component File Resources with Flow](/docs/Atomsphere/Flow/topics/c-flo-AS_FSS_File_Resources_cbb6c466-88d2-4f25-af79-8d6226399712.md)

    -   [File Uploads with the Flow Services Server Component](https://community.boomi.com/s/article/File-Uploads-with-the-Flow-Services-Server-Component)


## General settings

Configure the general settings for the component.

| Setting                              | Description                                                                                     |
|--------------------------------------|-------------------------------------------------------------------------------------------------|
| **Help information about this component** | Display help text directly below the component, for example to provide further information on how to use the component. |
| **Label**                            | Enter a label for the file upload component. The label is displayed above the component by default. Do not enter a label if you do not require this text to be shown. |
| **Name**                             | Enter a name for the component.                                                                 |
| **Placeholder text**                 | Enter a short hint to display in the field, such as an example of the expected value or format. |
| **Multi-select**                     | Specify if the component allows a user to upload multiple files simultaneously. <br />• Select the checkbox to enable a user to upload multiple files into the file upload component simultaneously. <br />• De-select the checkbox to prevent a user from uploading multiple files; only one file at a time can be upload using the component. |
| **Editable**                         | Specify if the user can use and interact with the component. <br />• Select the checkbox to allow a user to use the component. <br />• De-select the checkbox to prevent a user from being able to interact with the component. |


## Data source

Choose the data source for the component.

**The Connector to load the Files from**: Select the connector to use for the file upload component. Only connectors that support file uploading can be used with this component \(for example, if the **Files** checkbox is selected on the connector details page\). You will need to have installed the relevant connector into your flow for it to be available in the drop-down menu.

**Resource path**: Enter the file resource path if one is required by the connector. This may be left blank if it is not required by the connector.

For example, if using the file upload component with , this is the same as the resource path from the Flow Services Server **File Resource** configuration.

## State

Select the value that you wish to save the file upload data into.

1.  **Save the component state into**: Click **Select or create a new value** to select the object value that the file upload data is saved into. If creating a new value, the '$File' type of value is automatically selected, but this may need to be changed to a custom type if required by the connector.

## Validation

Add client-side page validation to the component. You cannot add validation if you are saving state data into a boolean or object value.

1.  Click **Add Validation**.
2.  Select the validation **Type**.
3.  Enter a valid **Value** for the validation type.
4.  Enter a feedback **Message** to show to the user if the validation criteria is not met.
5.  Click **Update** to add the validation item.

| Setting                              | Description                                                                                     |
|--------------------------------------|-------------------------------------------------------------------------------------------------|
| **Message** | Enter a message to show to the user if the validation criteria is not met. |
| **Value**  | Enter the validation criteria. <br />• **Minimum number**: Enter a minimum number or character limit for the component. <br />• **Maximum number**: Enter a maximum number or character limit for the component. <br />• **Regular expression pattern**: Enter a valid Regular Expression (Regex) to validate the component. |
| **Type**   | Select the type of validation to apply to the component. <br />• **Minimum number**: A user must enter more than this value into the field. <br />• **Maximum number**: A user is unable to enter more than this value into the field. <br />• **Regular expression pattern**: Apply Regular Expression (Regex) validation to the component. |
| **Required** | Specify if the component requires user selection before the next map element in the flow can be navigated to. For example, a user must use the file upload component before they are allowed to progress in the flow. <br />• Switch on the toggle to set the component as requiring selection from a user before they can progress in the flow, for example to the next page. <br />• Switch off the toggle to allow a user to progress in the flow, even if they have not used the component, for example if the field is optional. |


## Styles

Apply additional CSS styling to the component.

1.  Enter space-delimited CSS classes/selectors into the **CSS Classes** field.

When you run the flow, these classes are appended to the main component class. See [CSS reference](/docs/Atomsphere/Flow/topics/r-flo-CSS_Reference_d32122b8-0f11-47be-91c6-6986575f933e.md).

## Attributes

Add attributes to the component.

1.  Click **Add Attribute**.
2.  Enter a supported attribute **Key** and **Value**. See [Attributes reference](/docs/Atomsphere/Flow/topics/r-flo-Attributes_Reference_4f153424-8c52-4e24-b289-2d961f0b9830.md).