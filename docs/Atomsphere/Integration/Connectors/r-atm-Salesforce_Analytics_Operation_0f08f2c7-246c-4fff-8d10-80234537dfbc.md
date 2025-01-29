import OperationEnd from './_operationEnd.md'
import TrackingDirection from './_TrackingDirection.md'
import ReturnErrRes from './_ReturnResponse.md'

# Salesforce Analytics operation 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-0f08f2c7-246c-4fff-8d10-80234537dfbc"/>
</head>


The Salesforce Analytics Operation defines how to interact with your Salesforce Analytics account.

While other connectors perform multiple actions, the Salesforce Analytics operation uses an Execute action with different operation types performed against a specific data set or object. Create a separate operation component for each object required for your integration.

To upload data into an Analytics Cloud data set, you need a data file in CSV \(comma-separated value\) format and a CSV metadata file that describes the structure of the data file in JSON format, which the operation uses as a profile.

Follow these guidelines to construct CSV files:

-   Use a comma delimiter.
-   Put field values within double quotes if the field value contains a comma, new line, or double quote.

-   Remove spaces before or after commas and before double quotes.

-   Remove formatting from numeric values, such as dollar signs.

-   Follow the date formats exactly.


You can send metadata with a JSON file by creating a document cache. You can also specify the format of outbound data at run time by setting document properties in a Set Properties step.

:::note

Contact your Salesforce representative to learn about the API field-level requirements for Salesforce and how to access additional help documentation.

:::

## Options Tab 

The CSV Profile and JSON Document Cache output documents differently. You must designate one method, by selecting either a CSV Profile or a JSON Metadata cache, but not both. The CSV Profile outputs a single document for each execution. In other words, you can have many documents in an input batch but get just one output document. Operations using the JSON Metadata Cache output a document for each input document.

To find, edit, add, or delete a CSV Profile or a JSON Metadata Cache, click on an icon to initiate the associated action:

-   ![Locate and select an entry icon.](../Images/main-ic-magnifying-glass-16_cd0f3352-63b0-4d15-af6d-86e11b9d14eb.jpg) to locate and select an entry in the Component Explorer.

-   ![Edit an entry icon.](../Images/main-ic-pencil-yellow-12_12e3e7dc-22a8-42cf-8b3b-705c477344df.jpg) to edit an entry.

-   ![Add a new entry icon.](../Images/main-ic-plus-sign-white-in-green-circle-16_4dc8c5f3-e893-4aef-ade2-0b7afe9476c1.jpg) to add a new entry.

-   ![Remove an entry icon.](../Images/main-ic-x-black-in-black-oval-16_2f750183-7729-4d9d-b70c-be5b178cef98.jpg) to remove an entry.


The following table describes the field values in the Options tab:



<TrackingDirection />

<ReturnErrRes />

**Dataset Name** - 
 The name of the data set.

**App Id** - 
 The application ID.

**Object Name** - 
 The name of the object.

**CSV Profile** - 
 Identify the CSV file to use as a flat file profile. The comma-separated value \(CSV\) file to use as the profile. At least one text field is required and only one text field can be unique. Select either a CSV profile or a JSON metadata cache but not both.

**JSON Metadata Cache** - 
 Identify the document cache to use to extract JSON metadata that is sent with outbound data. Select either a CSV profile or a JSON metadata cache but not both.

**Operation Type**    
 The available operation type checks if the file exists, then does one of the following:

 | **Operation** | **Action**                                                                        | **Unique field?** |
|---------------|----------------------------------------------------------------------------------|-------------------|
| Overwrite     | Overwrites the file.                                                              | Optional          |
| Append        | Appends new records to the end of the file.                                       | Not allowed       |
| Upsert        | If there is a file, Upsert updates it. If there is no file, Upsert creates one.   | Required          |
| Delete        | Deletes records from the file.                                                    | Required          |


## Document properties 

These are the document properties in this operation:

-   JSON Metadata Cache — Specifies the index from the document cache for each input document where the JSON Metadata for that input document is saved. This document property is required when the operation uses a JSON Metadata Cache and it is ignored if the operation uses a CSV Profile.
-   Dataset Name — Optional property that is used with the JSON Metadata Cache to override the Dataset Name parameter. This property is ignored when the operation uses a CSV Profile.

-   App Id — Optional property that is used with the JSON Metadata Cache to override the App Id operation parameter. This property is ignored when the operation uses a CSV Profile.

<OperationEnd />