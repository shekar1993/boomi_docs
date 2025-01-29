# Anaplan connector 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-bd93732e-f0ba-470a-a594-eb3bf7c9a767"/>
</head>


The Anaplan connector allows you to upload and insert new Anaplan business modeling and financial planning data, and import and export data to On Demand and SaaS-based applications. You can upload a file as a single chunk, or in several chunks.

Anaplan allows you to perform data-intensive planning and modeling across a variety of industries for more effective top-down and bottom-up planning. You can trust your data and make informed planning and budgeting decisions.



## Connector configuration 

To configure the connector to communicate with Anaplan, set up two components:

-   Anaplan connection 

This connector supports both basic authentication and client certificate authentication.

-   Anaplan operation

This design provides reusable components that contain connection settings and operation settings. After building your connection and operation, set up your connector within a process. When you configure the Anaplan connector properly within your process, can map to and from virtually any connected application using the Anaplan connector to retrieve data from or send data to the Anaplan application.

## Supported editions 

The connector supports both the Anaplan API version 1.3 and 2.0.

## Prerequisites 

To implement a connection to your Anaplan account from and use the connector operations, do the following:

-   Have a local Atom or an Atom Cloud.
-   Have the URL for the Anaplan API service, and the Anaplan username, password, and workspace ID.
-   Have knowledge of the hierarchical and data dependency structure of the Anaplan model. For example, the Opportunity list might assume the pre-existence of the Sales Representative list.
-   Have a single document in CSV format that uses comma or tab delimiters. If you do not have a CSV file and need to create one, use the **Anaplan Export Tabular Multiple Column** layout. For more information, see the readme.zip \(Anaplan Connector: How to Publish\) provided to Anaplan customers.
-   Complete the steps in Anaplan so you can use the connector operations.

## Tracked properties 

The Anaplan connector has the following tracked properties that you can set or reference in various step parameters.

**Model Id** - 
The ID of the model used in the operation. This ID is available when running the Import operation.

**Import Id** - 
 The ID of the import used in the operation. This ID is available when running the Import operation.

**Export Id** - 
 The ID of the export that is used in the operation. This ID is available when running the Exportoperation.

**Process Id** - 
The ID of the process used in the operation. This ID is available when running the Process operation.

**Task Id** - 
 The ID of the task created when running the operation. This ID is available after running the Import and Process operations.

**Delete Id** - 
 The ID of the delete configuration being executed when running the operation. This ID is available after running the Delete operation.

