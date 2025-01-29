import TrackingDir from './_TrackObject.md'
import ReturnErrRes from './_ReturnResponse.md'
import OperationEnd from './_operationEnd.md'

# Box operation 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-03580c41-de66-4988-b556-9dc455848ade"/>
</head>


The Box operations defines how to interact with your Box account and represents a specific action \(Create, Get, Delete, Get Folder Items, Update, Upsert, and Search\) perform against a specific Box file, folder, or folder item.

Create a separate operation component for each action and object combination that your integration requires.

The Box operations use JSON format and support the following actions:

-   Inbound: Get, Get Folder Items, Search
-   Outbound: Create, Delete, Update, Upsert


**Important:** UTF-8 encode input JSON documents to preserve special characters and ensure the operations work properly.

## **Options** tab 

Click **Import Operation**, then use the Import wizard to select the object to integrate. The following table describes the fields for each action type:

 


<TrackingDir />

**Request Profile** - 
Select or add an XML profile component that represents the structure sent by the connector.

**Response Profile**    
Select or add an XML profile component that represents the structure received by the connector.

<ReturnErrRes />

**Parent folder ID** - 
Creating a folder structure in Box helps you store and organize your files. Box folders also help you share and collaborate on your content with others. The Create and Upsert actions support sending the Parent folder ID as a document property.

## Create 

Create is an inbound action that you can use to do the following:

-   Upload and add a new file to Box.
-   Create a new folder in Box.

Uploading and adding a new file to Box

When using Create to upload and add a new file to Box:

-   You can specify the folder ID using a document property \(Parent folder ID\). If set, this value overrides the default folder ID of 0 \(root folder\).
-   If you do not specify the parent folder ID, the connector uploads files to the root folder \(ID = 0\).

You must provide the file name using a File Name document property. If you do not set the file name, or if the file name already exists, the connector returns an error message.

If the uploaded file size is greater than 50 MB, the file is considered a chunked upload. The platform chunks the large file into a sequence of parts, and then uploads the parts. The Box service determines the chunk size and parts. Chunked uploads is only for uploading large files, and files less than 50 MB are not accepted for upload.

If the Create operation is successful, the file is uploaded and added to Box and the connector returns a JSON document with information about the file. The file information includes the name of the file, the ID of the parent folder, the user who created the file, when the file was last modified, and other information.

Creating a new folder in Box

When using Create to create a new folder in Box:

-   Provide the folder name \(required\) as an input parameter and Parent folder ID in the request. If the folder name already exists or is not specified, the connector returns an error message.
-   If you do not provide the Parent folder ID, the connector creates the new folder in the root folder.

Box supports folder names of 255 characters or less. The folder name cannot contain the non-printable ASCII characters "/" and "\\", names with trailing spaces, and names with a period \(.\) and double period \(..\)

If the Create operation is successful, it creates the folder in Box and the connector returns a JSON document with information about the folder. When creating the folder successfully, the folder information includes the following information:

-   Folder name

-   Who created the folder

-   Creation date of the folder

-   Who owns the folder

-   Other information


**Note:** After you add a file or folder to Box, it is accessible using the Search action after ten minutes.

## Get 

Get is an inbound action that you can use to do the following:

-   Download a file from Box.
-   Get information about a folder.

Downloading a file from Box

When using Get to download a file from Box, the file ID must be specified as an ID parameter in the configuration of the connector step.

The Get operation has two tracked properties:

-   The file ID is set as a tracked property named File ID.
-   The file name is set as a tracked property named File Name.

It does not return additional data or metadata.

Getting information about a folder

When using Get for information about a folder, provide the folder ID as an operation parameter and the connector retrieves the most current information about a folder. The connector retrieves information such as:

-   Folder name

-   Folder owner

-   Who created the folder

-   Parent size

-   etag and more


By using this action, you can collect information about a folder and use that information to update the folder information with the Update action.

## Delete 

Delete is an outbound action that you can use to do the following:

-   Delete a file from Box. You must provide the file ID as an operation property in the request to delete the file.
-   Delete a folder from Box. You must provide the folder ID as an operation property in the request to delete the folder.

When deleting a folder, you can set a document property \(Recursive Delete parameter with the Static Value of true\) to delete the folder even if it is not empty. If you do not set this document property and the folder you are trying to delete is not empty, an error appears.

When successful, the operation takes the file ID or folder ID and returns an empty document.

## Get Folder Items 

Get Folder Items is an inbound action to get and return all of the items contained in the Box folder. The Get Folder Items operation does not support sorting, and only supports a single \(one\) filter to add the folder ID. You can specify the following selection fields:

-   content\_created\_at
-   content\_modified\_at
-   created\_at
-   created\_by
-   description
-   etag
-   expires\_at
-   id
-   item\_status
-   modified\_at
-   modified\_by
-   name
-   owned\_by
-   parent
-   path\_collection
-   purged\_at
-   sequence\_id
-   shared\_link
-   size
-   trashed\_at
-   type

## Update 

Update is an outbound action that you can use to update the information that you collected for an existing folder with the Get action. Provide the folder ID as an operation parameter and the new folder values in the request. You can update the following folder information:

-   The name field for the folder name.
-   The description field for the folder description.
-   The id field for the ID of the parent folder for which you want to update the folder properties.
-   The shared\_link.access field for the folder access level. You can specify:

    -   open \("People with the link"\)
    -   company \("People in your company"\)
    -   collaborators \("People in this folder"\)
    If you do not include this field, the access level of the folder is set to the default access level specified by your enterprise administrator.

-   Requires the shared\_link.access field for the password to access the shared link. If you leave this field blank, it removes the password.
-   The shared\_link.unshare\_at field for the date and time that the link becomes disabled. Only users with paid accounts can set this field.
-   The shared\_link.permissions.can\_download field to specify if the shared link allows downloads. For shared links on folders, this also applies to any items in the folder. Only access levels open and company \(not collaborators\) can set this field.
-   Tags can be open or collaborators.
-   You can use the folder\_upload\_email.access field to specify the email address with which to upload files to the folder. You can set this to open or collaborators.

You can also move a folder by updating the ID of its parent folder \(the id field\).

## Upsert 

Upsert is an outbound action to either upload and create a new file in Box or perform an update to a file if the file already exists.

-   You can specify the folder ID using a document property \(Parent folder ID\). If set, this value overrides the default folder ID of 0 \(root folder\).
-   If you do not specify the parent folder ID, the connector uploads files to the root folder \(ID = 0\).

You must provide the file name using a File Name document property. If you do not set the file name, the connector returns an error message. If the file name exists, the connector automatically overrides the existing file in Box and performs an update operation.

If the file size to upload is greater than 50 MB, the file is considered a chunked upload. It chunks the file into a sequence of parts, and is then uploaded. The Box service determines the chunk size and parts. Chunked uploads is only for uploading large files, and does not accept for upload files less than 50 MB.

If the Upsert operation is successful, it uploads the file to Box and the connector returns a JSON document with information about the file, including \(but not limited to\):

-   Name of the file

-   ID of the parent folder

-   User who created the file

-   Last modification date of the file


## Search

Search is an inbound action that you can use to query, search, and find Box files and folders. The bottom half of the **Operation** component page contains options so you can choose the fields to return. For example, you can search files by:

-   Who created the file

-   Who owns the file

-   File size

-   Version

-   Date the file was last updated


You can search folders by:

-   Who created the folder

-   Parent folder

-   Date the folder was last modified

-   etag and so on


Search returns zero-to-many file and folder records from a single request based on the filters that you add using the Filters tab. When creating a filter, you must choose either the **Query** field or the **mdfilters** field as part of your filter. Otherwise, the filter does not work. You can create sophisticated query logic for filters by defining multiple expressions and putting them into logical subgroups. The operator at the logical group level defines how to evaluate the multiple expressions and logical subgroups within that logical group.

**Note:** After adding a file or folder to Box using the Create action, it is accessible using Search after ten minutes.

<OperationEnd />