
import OperationEnd from './_operationEnd.md'

import TrackingDir from './_TrackObject.md'

import ReturnErrRes from './_ReturnResponse.md'

# Google Storage operation 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-2ac41508-22e9-4ebc-b33f-75b3002932f4"/>
</head>


The Google Storage operation defines how to interact with your Google Cloud Storage account and represents an action \(Create, Get, Delete, and List\) that performs against a Google Cloud Storage object from your bucket.

Create a separate operation component for each action/object combination that your integration requires.

The Google Storage operations use JSON format and support the following actions:

-   Inbound: Get, List
-   Outbound: Create, Delete

Before creating an operation component, make sure to activate the Cloud Storage JSON API.

## **Options** tab 

Click **Import Operation**, then use the Import wizard to select the object to integrate. The following table describes the fields for each action type:

<TrackingDir />

**Request Profile** - 
Select or add an XML profile component that represents the structure sent by the connector.

**Response Profile** - 
Select or add an XML profile component that represents the structure received by the connector.

<ReturnErrRes />

**Bucket Name** - 
Buckets are the containers that hold your data. Everything that you store in Google Cloud Storage must be contained in a bucket. You can use buckets to organize your data and control access to your data. However, unlike directories and folders, you cannot nest buckets. The Create, Get, and Delete actions support sending the Bucket Name as a document property.  

 -   If the Bucket Name on the operation is on, it overrides this value by the Bucket Name document property.
 -   If the Bucket Name on the operation is off, it takes this value from the document property.

**Metadata** - 
 If selected, the connector, returns the following metadata:

 -   Name
 -   Bucket
 -   MD5 Hash
 -   Link
 -   Updated

## Create 

Create is an outbound action to upload files and data, and supports both simple and resumable operations. The Create operation can be used for files and data with less than 5 TB, with metadata. The Create operation takes a binary document as input and returns a JSON document when successful. For the success of this operation, you must send the following properties:

-   Bucket Name \(operation property\)
-   Object Name \(document property\)

Users can send custom metadata through dynamic document properties in the Create operation.

The Create operation upload supports Cache-Control, Content-Disposition, Content-Encoding, Content-Language, and MIME Type as optional document properties. If you do not send the MIME Type, it sets this property to the object type in the bucket as Media Type ALL.

If you want to upload files greater than 5 MB, recommends that you use the Chunk Size document property. This property sets the size of chunks in kilobytes \(KB\). The default value is 5120 KB. Based on your performance requirements, you can choose to either increase or decrease the default value.

## Get 

Get is an inbound action to take the name of an object and the bucket name, and return a binary document.

For a successful operation, send the following required properties:

-   Bucket Name \(operation property\)
-   Object Name \(ID parameter\)

## Delete 

Delete is an outbound action to take the name of an object and the bucket name, and return an empty document.

For a successful operation, send the following required properties:

-   Bucket Name \(operation property\)
-   Object Name \(ID on the XML profile\)

## List 

List is an inbound operation that takes the Bucket Name and returns a JSON document when successful. This operation does not support providing the Bucket Name as a document property to override the bucket name in this operation. Alternatively, you can use the HTTP Client connector to send the bucket name for this operation dynamically.


<OperationEnd />