import OperationEnd from './_operationEnd.md'

# Kanverse IDP - Partner operation 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-1a5b4d46-192c-4ee0-9a7b-2b4f165ebadf"/>
</head>


The Kanverse IDP – Partner operation defines how to interact with your Kanverse IDP account and represents a specific action \(Send, Execute \(Upload\)\) to perform against a specific object type such as Mark Publish, Send Error, or Execute \(Upload\).

## Actions

Create a separate action and operation component for each action/object combination required for your integration. The Kanverse IDP – Partner operation features two different actions \(also called *resources*\) that can be used to streamline and automate three different operations on the Kanverse platform.

## Available Actions

The following list introduces actions that are managed by the connector:

-   **Execute \(Upload\)**: This action is used to upload invoices, insurance, PO, and other such documents to Kanverse.

-   **Send**: This action is used to send an update to the appropriate status of a document to Kanverse. The status can be either Error or Publish.


## Operations

Each operation implements a specific task such as creating or updating an object of Kanverse.

The Send Error and Mark Publish operations of Kanverse IDP – Partner connector use JSON format, while Execute \(Upload\) supports unstructured formats, for example, PDF, images, Microsoft Excel, etc. These operations support the following actions:

## Execute \(Upload\) action

**Options tab**


**Connector action**
:   The Connector action corresponds to the action you want the operation to take in Kanverse. For this action, it is set to **Execute \(Upload\)**.

**Object**
:   The object can be imported using the Import button. For Execute \(Upload\) option, object can only be set to Execute \(Upload\).

**Request profile**
:   The profile is set to **Unstructured** since this action accepts different types of profiles, such as Microsoft Excel, PDF, or images.

**Response profile**
:   This is a JSON profile returned by Kanverse.

**Tracking direction**
:   Select the document tracking direction for the operation, either **Input Documents** or **Output Documents**. This setting enables you to choose which Boomi documents appear in **Process Reporting**. Start steps always track output documents regardless of your selection.

**Error behavior**
:   Select Error Behavior if you want to be able to act on failed operations in your process instead of only reporting them on the Manage page.

**Document Type**
:   Set this value to whatever type of document you are uploading, for example, `invoice` or `PO`.

**Folder**
:   The folder on Kanverse into which you want to upload the file.

**Enable Classification**
:   Enter the value `true` to enable classification, otherwise enter `false`.

**File Name**
:   The name of the file you are uploading.

**Content Type**
:   This determines what type of data the connector accepts. It is set to `multipart/form-data` for this action.

**Dynamic Operation Properties**

Some connectors enable you to define dynamic operation properties, which are document-level overrides that you define values for, and pass them into the Connector step to override the operation component's default value. The Connector step dialog's Dynamic Operation Properties tab allows you to provide static values or document-level values \(Document Property\) for the parameters. You can add, edit, and delete the parameters.

For the Kanverse IDP - Partner connection you can set dynamic operation properties for the following properties:

-   Document Type
-   Folder
-   Enable Classification
-   File Name

For more information on setting dynamic operation properties, see the following topic: [Connector step dialog, Dynamic Operation Properties tab](../Process%20building/int-Connector_shape_dialog_dynamic_operation_properties_tab_e473feba-b349-4b3b-8d82-2c3c9f94469b.md)




## Send action

**Options tab**



Connector action
:   The Connector action corresponds to the action you want the operation to take in Kanverse. For this action, it is set to **Send**.

Object
:   For the Send action, there are two different object types available, one is **Send Error**, the other is **Mark Publish**. Use **Send Error** in case the document fails any validation, then your can update it as errored in Kanverse. Use **Mark Publish** in the case where the document uploads successfully and passes all validations, then you can mark this as published in Kanverse.

Request profile
:   The request profiule is a JSON profile that the connector accepts. The profile varies according to the imported object.

Response profile
:   This is the profile returned by Kanverse.

Tracking direction
:   Select the document tracking direction for the operation, either **Input Documents** or **Output Documents**. This setting enables you to choose which Boomi documents appear in **Process Reporting**. Start steps always track output documents regardless of your selection.

Error behavior
:   Select Error Behavior if you want to be able to act on failed operations in your process instead of only reporting them on the Manage page.

Content Type
:   This determines what type of data the connector accepts. It is set to `application/json` for this action.

<OperationEnd />