import TrackingDir from './_TrackObject.md'

import ReturnErrRes from './_ReturnResponse.md'
import OperationEnd from './_operationEnd.md'

# Google BigQuery operation 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-568a6964-bdfb-4445-8157-f4c98bea1a98"/>
</head>


The Google BigQuery operation defines how to interact with your Google Cloud Platform account instance and represents a specific action to perform against a specific Google BigQuery object.

Create a separate operation component for each action and object combination that your integration requires.

The Google BigQuery operation supports the following actions:

-   Streaming Insert — \(outbound\) streams and inserts your data into a Google BigQuery table.
-   Run Job — \(outbound\) runs a query against the data in Google BigQuery.
-   Get Query Results — \(inbound\) retrieves the results of a query job.
-   Update — \(outbound\) updates information in a Google BigQuery table and view.
-   Upsert Data - \(outbound\) uploads a data file within the input document and makes the file available to load data into a Google BigQuery table.

## **Options** tab 

Click **Import Operation**, then use the Import wizard to select the object to integrate. The following table describes the fields for each action type:




<TrackingDir />

**Request Profile** -     
Select or add an XML profile component that represents the structure sent by the connector.

<ReturnErrRes />

**Project ID Override** - 
(All operations) This optional field overrides the default Project ID for any operation. If the Project ID is provided during Browse, it will be used when creating the operation and override the Project ID in the connection tab. The exisitng Project ID in the connection tab is used if this field is left blank during Browse or in the operation. 

**Batch Count** - 
\(Streaming Insert\) This setting specifies the maximum number of table records to include in each batch in a single HTTP request to stream and insert into Google BigQuery. The default is 500 records and the maximum is 10,000. If the number of records to stream and insert is more than the batch count that you specify, the connector splits the records into smaller batches and then streams and inserts the data in subsequent requests. Use batches to increase performance and throughput.

**Skip Invalid Rows** - 
 \(Streaming Insert\) This setting controls whether valid table rows are inserted into Google BigQuery, even if invalid rows exist.

 -   If selected, the request proceeds and inserts only valid rows. Invalid rows are not inserted.
-   If cleared, the entire request fails if there are any invalid rows. No records are inserted.

**Ignore Unknown Values** - 
\(Streaming Insert\) This setting controls whether table rows containing values that do not match the table schema are allowed and inserted into Google BigQuery.

 -   If selected, the unknown values are ignored and the rows are inserted.
 -   If cleared, the unknown values are treated as errors and the rows are not inserted.

**Template Suffix** -    
 \(Streaming Insert\) By using a template suffix, you do not have to create each table individually and specify the schema for each. Instead, if specified, the destination table is treated as a base template and inserts table rows into an instance table named `{destination}{templateSuffix}`. Google BigQuery manages the creation of the instance table using the schema of the base template table. For more information, see the linked Streaming Data into BigQuery topic.

You can also use the **Set Properties** step to set a template suffix dynamically as a document property, instead of defining one in the operation. This provides you with the flexibility to reuse the same operation in a process instead of having to create a new operation for each template suffix that you want to use. The template suffix value that you define as a document property overrides the value that you set in the operation. When the template suffix is defined dynamically, the connector creates a batch of documents based on the template suffix document property parameter value and streams the documents into Google BigQuery with the appropriate template suffix. The template suffix you set dynamically follows the same restrictions when adding it in the operation:

 -   The template suffix must contain only letters \(a-z, A-Z\), numbers \(0-9\), or underscores \(\_\).
 -   The maximum combined length of the table name and the table suffix is 1024 characters.

 **Note:** To ensure optimal performance, limit the number of template suffixes that you use in a process. By limiting the number, you reduce both the number of batches the connector creates to stream data and the number of requests needed to stream the data.

**Generate Insert Id** - 
\(Streaming Insert\) This setting controls the addition of the insertId field to the inserted rows in the request body that is sent to BigQuery. If selected, it adds an auto-generated insertId field \(rows\[\].insertId\) to the request body. BigQuery uses this ID to support best effort deduplication for up to one minute. If you attempt to stream the same row with the same insertId more than once within that time period into the same table, BigQuery may deduplicate the multiple occurrences of that row, retaining only one of those occurrences. When retrying the insert due to a connectivity issue, the connector uses the same insertId as in the original request. If cleared, it does not add the insertId field \(rows\[\].insertId\) to the request body.

**Request Timeout** - 
 \(Run Job, Upsert Data\) This setting, specified in milliseconds, controls when the connector stops checking the job status and returns an application error if the job does not finish processing in the fixed time-out value. The default is 3,600,000 milliseconds or one hour. The time-out does not stop Google BigQuery from processing the job. When set to -1, the connector monitors the job indefinitely.

**Timeout \(ms\)** - 
 \(Get Query Results\) This setting, specified in milliseconds, controls how long to wait for the query to complete before returning the results. The default is 10,000 milliseconds, or 10 seconds. If the query takes longer to run than the specified time-out value, it does not return results and the jobComplete field in the response is set to false.

**Max Results** - 
 \(Get Query Results\) This setting controls the maximum number of query results that Google BigQuery returns for each page request. The default is 1,000. Max Results enables internal pagination for the connector, which helps to return shorter sets of records for each request.

**Full Update** - 
 \(Update\) This setting controls the method used to update information in an existing Google BigQuery table.

 -   If selected, the update replaces the entire table resource \(a full table update\).
 -   If cleared, the update only replaces fields that are provided in the submitted table resource \(a table patch update\).

**Write Disposition** - 
  \(Upsert Data\) This setting controls the action that occurs if the destination table already exists in Google BigQuery. If you select **Truncate** and if the table already exists, BigQuery overwrites the table data and uses the schema from the source data. If you select **Append** and if the table already exists, BigQuery appends the data to the table. If you select **Fail if not empty** and if the table already exists and contains data, the operation returns an error.

**Create Disposition** - 
  \(Upsert Data\) This setting controls whether to create the destination table if it does not exist. If you select **Create if does not exist** and if the table does not exist, BigQuery creates the table. If you select **Fail if does not exist**, and if the table does not exist, the operation returns an error.

**Encoding** - 
  \(Upsert Data\) This setting controls the character encoding of the data, either **UTF-8** or **ISO-8859-1**. BigQuery decodes the data after splitting the raw, binary data using the values specified for Quote and Field Delimiter.

**Source Format** - 
  \(Upsert Data\) This setting controls the format of the input data provided to the connector. For example, choose **CSV**, **JSON**, **PARQUET**, **AVRO**, or **ORC**. When you provide a data file using one of these formats as input to the operation, with the corresponding data type specified in the **JobConfiguration** file, it imports the data successfully into BigQuery.

**Field Delimiter** - 
  \(Upsert Data\) This setting controls the separator character for fields in a CSV file, and interprets the separator as a single byte. Files encoded in ISO-8859-1 can use any single character as a separator. Files encoded in UTF-8 can use characters represented in decimal range 1-127 \(U0001-U007F\) without modification. UTF-8 characters encoded with multiple bytes \(U0080 and above\) only uses the first byte for separating fields. It treats the remaining bytes as a part of the field. The default value is a comma \(,\).

**Skip Leading Rows** - 
  \(Upsert Data\) This setting controls the number of rows at the top of a CSV file that BigQuery skips when loading data. This setting is useful if you have header rows in the file that need skipping. When you select **Autodetect Schema** from **Input Data**, the behavior is as follows:

 -   If **Skip Leading Rows** is empty, autodetect attempts to detect headers in the first row.

 -   If not detected, the row is read as data.


 Otherwise, data is read starting from the second row. In addition, the following occurs:

 -   If **Skip Leading Rows** is 0 \(the default\), autodetect knows that there are no headers and to start reading data from the first row.

 -   If **Skip Leading Rows** is N\>0, autodetect skips N-1 rows and attempts to detect headers in row N.

 -   If it does not detect headers, it skips row N. Otherwise, it uses row N to extract column names for the detected schema.


**Quote** - 
  \(Upsert Data\) The setting controls the value used to quote data sections in a CSV file. BigQuery converts the string to ISO-8859-1 encoding, and then uses the first byte of the encoded string to split the data into its raw, binary state. If your data does not contain quoted sections, set the value to an empty string. If your data contains quoted newline characters, you must also select **Allow Quoted Newlines**. To include the specific quote character within a quoted value, precede it with an additional matching quote character. For example, to escape the default character ' " ', use ' "" '.

**Null Marker** - 
  \(Upsert Data\) This setting specifies a string to represent a null value in a CSV file. For example, if you specify "\\N", BigQuery interprets "\\N" as a null value when loading a CSV file.

**Allow Quoted Newlines** - 
 \(Upsert Data\) This setting indicates if BigQuery allows quoted data sections containing newline characters in a file.

**Allow Jagged Rows** - 
  \(Upsert Data\) This setting indicates how BigQuery manages rows missing trailing optional columns. If selected, BigQuery accepts rows missing trailing optional columns. It treates missing values as nulls. If cleared, it treats records with missing trailing columns as bad records. If there are too many bad records, the operation produces an error.

**Autodetect Schema From Input Data** - 
 \(Upsert Data\) This setting indicates if the options and schema infer automatically from the input data.

**Maximum Bad Records** - 
  \(Upsert Data\) This setting controls the maximum number of bad records that BigQuery can ignore when running a job. If the number of bad records exceeds this value, the operation produces an error.

**Dataset Id** - 
  \(Upsert Data, Update\) This is a unique name that identifies your Google BigQuery dataset. The Dataset ID is an operation property which is also available  as a dynamic operation property when using the Streaming Insert, Upsert and Update actions. It serves as the root for all tables, views, and materialized views within the dataset.

  - When the user selects a static table during browse,  then the Dataset ID can be overridden by dynamic operation property. 
  - During Browse the user can select **DYNAMIC TABLE** in the Object field, in which case the Dataset ID is passed dynamically via a JSON payload. 

**Location ID** - (Upsert Data) This is the identifier of the region where the data is stored. The location ID is an operation property that can also be dynamically set.


## Streaming Insert 

Streaming Insert streams and inserts your data into a Google BigQuery table. For a successful action, the table must already exist in Google BigQuery and you must have write access to the dataset containing the destination table.

Streaming data limits

This connector follows the Google BigQuery limits \(HTTP request size limit, Maximum rows per request\) for streaming data. The BigQuery API enforces and handles the other limits \(Maximum row size, Maximum rows per second, and Maximum bytes per second\).

Streaming batches and service unavailability

If you stream one or more batches of table records in a single Streaming Insert operation and one of the batches fails because the service is not available \(it displays a 503 Service Unavailable error\), the connector attempts to insert the data in the following way:

-   The connector waits for a job \(Query, Load, Extract, or Copy\) to complete and checks the status at intervals of 0, 1, 2, 5, 10, 15, and 20 seconds.

-   After reaching the maximum interval of 20 seconds, the connector continues to check the status at that interval until the job completes or until it meets the **Request Timeout**.


In this way, the operation obtains close to real-time data polling.

## Run Job 

Run Job runs a query against the data in Google BigQuery and can also load, extract, and copy data. This operation checks the job status and only returns the status when it is either DONE, or when the setting for the **Request Timeout** field occurs.

## Get Query Results 

Get Query Results retrieves the results of a query job. You can create a query job using the Run Job operation with a Query object type. Each row in the query results creates an individual JSON document.

Retrieving datasets from different locations

You can have datasets located outside of the United States \(U.S.\) and European Union \(EU\) that you want to retrieve using Get Query Results. To account for jobs referencing datasets outside these regions, the input profile generated after browsing the Query object type includes both a location and jobId field. Make sure and specify a value for both the job location and job ID in your request to ensure you retrieve the dataset from the correct location.

If your process includes Get Query Results following a Run Job operation, you must use a **Map** step to map the location from the Run Job response output profile to the location specified in the Get Query Results input profile. Without specifying the location and mapping it, you receive an error when running the process because it cannot find the job referencing the dataset.

## Update 

Update revises information in a Google BigQuery table and view, which is useful when you publish data in snapshots. For example, you can update a single view in date-shared tables \(updated on a weekly basis\) to always read from the latest table.

Dynamic tables and views

When performing a Browse operation for the Update action, the connector lists all the tables and views available to update as Object Types. Two additional options, named **DYNAMIC TABLE** and **DYNAMIC VIEW**, are available. Select these options to indicate that you want to dynamically update either a table or view without having to define a separate Update action for each. For example, you have 10 tables that you need to update the schema by adding a column to the schema definition. To avoid creating 10 Update actions, choose the **DYNAMIC TABLE** option and specify the table's ID to update in the input JSON document. Add the project ID, dataset ID, and table ID in the JSON. For example,

```
"tableReference": { "projectId": "project", "datasetId": "dataset", "tableId": "table_id_to_be_updated"}
```

When updating a view using the **DYNAMIC UPDATE** option, you specify the ID of the view to update in the input JSON document. Specify the project ID, dataset ID, and view ID in the JSON. For example,

```
"tableReference": { "projectId": "project", "datasetId": "dataset", "tableId": "view_id_to_be_updated" }
```

Verify that you update the JSON for each table and view and do not modify the operation. When you run the dynamic update process, the connector obtains the data and updates all 10 tables or views in Google BigQuery.

## UpsertData

This functionality updates and inserts data from a data file to a target table, as one single operation, wrapping the following tasks:

-   Upload a data file, received as an input document, to Google BigQuery, to make it available for a Load Job.

-   Run a Load Job to insert the data into a table \(temporary or final target\)

-   If you use a temporary table, run a Query Job to merge the data from the temporary table into a target table, using a `MERGE` command.

## Discovery Document

A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins and other tools that interact with Google APIs. One service may provide multiple discovery documents.

When performing a Browse operation for the Run Job and Upsert actions, Google BigQuery successfully imports the request and response profiles. This triggers the display of the Google BigQuery Operation Import pop-up window. Within the Discovery Document field, two drop-down options, named **Revision-\<Ver number\>** and **Custom**, are available. Select the desired option to proceed with the task as follows:

- **Revision-\<Ver number\>:** The packaged Discovery Document will be utilized for browsing.
- **Custom:** A text box labeled **Discovery Document URL** will appear, defaulted to the latest REST URL. Alternatively, users can enter or paste the link to a discovery document obtained from the REST URL specified in the Google BigQuery documentation.

This service provides the following discovery document: 
[https://bigquery.googleapis.com/discovery/v1/apis/bigquery/v2/rest](https://bigquery.googleapis.com/discovery/v1/apis/bigquery/v2/rest)



<OperationEnd />