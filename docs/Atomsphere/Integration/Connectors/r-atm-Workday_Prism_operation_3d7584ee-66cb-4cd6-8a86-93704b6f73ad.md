import RequestProfile from './_RequestProfile.md'
import ResponseProfile from './_ResponseProfile.md'
import OperationEnd from './_operationEnd.md'
import TrackingDirection from './_TrackingDirection.md'
import ReturnErrRes from './_ReturnResponse.md'
import ReqRes from './_ReqRes.md'
import TrackingDir from './_TrackObject.md'

# Workday Prism Analytics \(Tech Preview\) operation

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-3d7584ee-66cb-4cd6-8a86-93704b6f73ad"/>
</head>


The Workday Prism Analytics \(Tech Preview\) operation defines how to interact with your Workday account and represents a specific action to load data into a dataset.

The Workday Prism Analytics \(Tech Preview\) operations use JSON format and support the following actions. The actions are listed in the logical order and sequence that you follow to successfully load data into a dataset.

-   Create — create a dataset, and then create a bucket to load the files that you want to upload to a dataset.
-   Upload — upload files into a dataset.
-   Complete Bucket — process the bucket and commit it to the dataset.
-   Get — periodically check the status of the bucket, and provide information about the bucket including the current status.

## Options tab 

Select a connector action, then use the Import Wizard to select the object to integrate. The wizard imports the request and response profiles for the selected action. When you configure an action, the following fields appear on the Options tab:

<TrackingDir />

<RequestProfile />

<ResponseProfile />

<ReturnErrRes />

**Automatically generate bucket name \(Create\)** - 
 When creating a bucket, select to automatically generate the bucket name. The bucket name must be unique across all datasets in the catalog. You can override the generated bucket name with an input profile field.
  
**Field enclosure \(Create\)** - 
 When creating a bucket, enter the character to enclose each field in the file. The default is double quotes. You can override the character with an input profile field.

**Field delimiter \(Create\)** - 
 When creating a bucket, enter the character to separate each field value in the file. The default is a comma. You can override the character with an input profile field.
  
**Header lines to ignore \(Create\)** - 
 When creating a bucket, enter the number of lines to ignore in the file to upload. When the file has a header, enter 1. When the file does not have a header, enter 0. You can override the number with an input profile field.

**Header lines to ignore \(Upload\)** - 
  Enter the number of header rows to ignore from the data in the file to upload.

You can specify the Header lines to ignore as a document property. If set, the document property overrides this setting.

**Maximum chunk size \(Upload\)** - 
 Enter the maximum size \(in megabytes, without compression\) for each chunk to upload. The maximum upload limit for a single compressed file that the Prism Data API supports is 256 MB.
  
**Wait for Process to Complete \(Complete Bucket\)** -     
 Select to have the process wait for the service to finish processing the bucket to return the final state. When successful, the bucket is added to the dataset.

**Wait Timeout \(seconds\) \(Complete Bucket\)** - 
 Optionally enter the maximum number of seconds to wait for the service to finish processing the bucket. This timeout is used when the Wait for Process to Complete check box is selected.

## Create 

Create is an inbound action that you can use to do the following:

-   Create a dataset.
-   Create a bucket.

**Creating a dataset** - 

When you need to load data into a Workday Prism Analytics dataset, your first \(one-time-only\) step is to use the Create action to create a new, empty dataset. Before you begin, verify that you have the appropriate access rights and permissions to create datasets using the Workday user interface. The JSON input document for the dataset only requires the name, but you can optionally provide a label and description. After creating the dataset, you can reuse it for the buckets containing the CSV files that you want to upload to the dataset.

**Creating a bucket** - 

After creating the dataset, your next step is to use the Create action to create the bucket, which is a temporary folder for the CSV files that you want to upload to the dataset. When creating the bucket, you select either a specific dataset or a Dynamic Dataset \(you provide the dataset using a document property\) when browsing, and specify options for how the bucket name is generated, how fields in the file to upload are enclosed and delimited, and the number of lines to ignore in the file to upload. The JSON input document for the bucket requires the name, some fields to define the schema of the files to upload, and the dataset.

:::info Important

 Buckets expire after 24 hours, and after that period they can no longer be used to upload files. If you do not complete the entire data loading process \(create the dataset, create the bucket, upload files into the dataset, complete the bucket\) in the 24 hour period, you must start over by creating a new bucket and processing it completely. The Prism Data API has bucket validation rules and limits that the connector follows. For more information, see the Prism Data API reference documentation.

 :::

When browsing to create a bucket, you can select the **Use existing schema** option to retrieve the schema fields from the dataset that has already been uploaded and use the schema in the new bucket you are creating. If the dataset does not have an uploaded schema, or you do not select this option, you must define the schema in an input document.

## Upload

After creating the bucket, use the Upload action to upload the CSV files into the bucket. You use the Set Properties step and provide two required document properties:

-   Filename — the name of the CSV file that you want to upload into the bucket.
-   Bucket ID — the destination bucket where the file is uploaded.

You can also provide an optional document property for the number of header lines to ignore. If set, the document property overrides the operation setting.

To improve performance and efficiency, the connector automatically splits up large files into smaller chunks when the size of the file to upload is too large \(exceeds the **Maximum chunk size** setting\). The connector follows the **Maximum chunk size** operation setting, automatically sets the file encoding to UTF-8 \(the Workday Prism Analytics service only accepts UTF-8 encoding\), and validates that when a large file is uploaded in several parts, the part total in each bucket does not exceed 100. When the maximum is reached, you receive an error. If the connector encounters an error when uploading files, it will try to upload them a maximum of three times. If the last upload is still not successful, an error message appears letting you know the last line that was processed.

:::note

The Prism Data API has bucket validation rules and limits that the connector follows. For more information, see the Prism Data API reference documentation.

:::

## Complete Bucket 

After all of the CSV files have been successfully uploaded into the bucket, use the Complete Bucket action to indicate that the data is ready to be processed and committed to the dataset. Before you begin, verify that you have the editor role on the dataset related to the bucket. The input JSON for Complete Bucket provides the bucket ID, and the output is a JSON document containing the bucket ID and the state of the bucket \(either Success or Failed\).

When using this action, browse and select the Object Type as Bucket. Use the Connector step to add the ID of the bucket as an input parameter. Then, use the **Wait for Process to Complete** and **Wait Timeout \(seconds\)** options to determine how long the process waits for the service to finish processing the bucket to return the final state. When successful, you see a "Success" status in the response letting you know that the bucket was completed. If you do not enter any values in the **Wait for Process to Complete** and **Wait Timeout \(seconds\)** options, you see a "Processing" status in the response.

:::note 

The Prism Data API has bucket validation rules and limits that the connector follows. For more information, see the Prism Data API reference documentation.

:::

## Get 

During the data loading process, use the Get action to periodically check the status of a bucket from In Progress to either Success or Failed. This action helps to ensure that the bucket has been committed to the dataset. When using this action, browse and select the Object Type as Bucket. Use the Connector step to add the ID of the bucket as an input parameter. When successful, the JSON response provides you with information about the bucket, including the current status. Before you begin, verify that you have the editor role of the dataset related to the bucket.

<OperationEnd />