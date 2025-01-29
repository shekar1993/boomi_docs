import OperationEnd from './_operationEnd.md'

# Veeva operation

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-448397c1-729a-4e2e-b985-fb4be213798d"/>
</head>

The Veeva operation defines how to interact with your Veeva Vault instance.

The Veeva connector supports these operations:

-   **Create / Upsert Vault**
-   **Update Vault**
-   **Execute**
-   **Query Vault** 


The following fields are available for all operations during browse.

**Override API Version (Optional)** - A checkbox that overrides any version dictated in the connection field when selected. 

**API Version** - Enter the Veeva REST API GA API version to use. This field only appears when **Override API Version** is selected.


## Create / Upsert Vault
In the first operation import screen, you'll see the following fields for this connector. Populate them as desired, then select **Next**. Use **Object Type** option to select a Veeva object from your account.

* **Atom** - Select the Atom you'd like to use. 

* **Connection** - Select either **User Credentials** or **OAuth 2.0** to authenticate your Veeva account. The default value is **User Credentials**.

* **Include Only Required Fields** (Optional) - Check this box to only have mandatory fields displayed in this operation.

* **Filter** (Optional) - You can select a desired filter for results here. 

 **Query idParam** - The unique ID for the object, if available.

 * **Path doc_id** - The document ID field value. 


## Update Vault
In the first operation import screen, you'll see the following fields for this connector. Populate them as desired, then select **Next**. Use **Object Type** option to select a Veeva object from your account.

* **Atom** - Select the Atom you'd like to use. 

* **Connection** - Select either **User Credentials** or **OAuth 2.0** to authenticate your Veeva account. The default value is **User Credentials**.

* **Include Only Required Fields** (Optional) - Check this box to only have mandatory fields displayed in this operation.

* **Filter** (Optional) - You can select a desired filter for results here. 

**Query idParam** - The unique ID for the object, if available.

* **Path doc_id** - The document ID field value. 

## Execute
The Execute operation allows you to create, upsert, update, delete, and retrieve Veeva objects in your vault. In the first operation import screen, you'll see the following fields for this connector. Populate them as desired, then select **Next**.

* **Atom** - Select the Atom you'd like to use. 

* **Connection** - Select either **User Credentials** or **OAuth 2.0** to authenticate your Veeva account. The default value is **User Credentials**.

* **Filter** (Optional) - You can select a desired filter for results here. 

Use the **Object Type** option to select one of the following actions to perform. All of the following actions are available when you import the **Execute** operation. 

**Download Document File** - Use this action to select a document to download.
* **Path doc_id** - The document ID field value. 
* **Query lockDocument** - You can choose whether to check out the document before retrieving it by checking this option.This value is left unchecked by default.

**Download Document Version File** - Use this action to select a document version to download with the field values.
* **Path doc_id** - The document ID field value
* **Path major_version** - The document major_version_number__v field value.
* **Path minor_version** - The document minor_version field value.

**Download Document Version Thumbnail File** - Use this action to download the thumbnail file for a document version.
* **Path doc_id** - The document ID field value.
* **Path major_version** - The document major_version_number__v field value.
* **Path minor_version** - The document minor_version field value.

**Get Item Content** - Enter the absolute path to a file here to retrieve it. This path is specific to the authenticated user. Admin users can access the root directory. All other users can only access their own user directory.
* **Path item** - The absolute path to a file or folder. This path is specific to the authenticated user. Admin users can access the root directory. All other users can only access their own user directory.

**List Items at Path** - Use this action to list the items in a file staging server path. Pagination is not supported. The maximum amount of records that can be returned on a single page is 1000; there is no workaround for this limitation currently. This action can be configured in the following ways. 
* **Path item** - The absolute path to a file or folder. This path is specific to the authenticated user. Admin users can access the root directory. All other users can only access their own user directory.
* **Query recursive** - When checked, the response will contain the contents of all sub-folders. The default value is unchecked.
* **Query limit** \(Optional\) - The maximum number of items per page in the response. This can be any value between 1 and 1000. The default value is 1000.

**Retrieve All Picklists** - Use this action to retrieve all picklists on your Veeva Vault. 

**Retrieve Picklist Values** - Use this action to retrieve specific picklists on your Veeva Vault. 
* **Path picklist_name** - The picklist ID.

**Retrieve Object Record User Actions** - Use this action to retrieve the actions for specific objects. You will need the following to execute this action.
* **Path object_name** - The object `name__v` field value.
* **Path object_record_id** - The object record id field value from which to retrieve user actions. 
* **Query loc** \(Optional\) - When checked, this action retrieves localized (translated) strings for the label.

**Retrieve Object User Action Details** - Use this action to retrieve the details of actions for specific objects. You will need the following to execute this action.
* **Path object_name** - The object `name__v` field value.
* **Path object_record_id** - The object record id field value from which to retrieve user actions. 
* **Path action_name** - The name of the object action to initiate. You can retrieve this from the Retrieve User Actions request. The format for `action_name` is `Objectaction.vobject.action` or `Objectlifecyclestateuseraction.vobject.state.action`.

**Retrieve Object Metadata** - Use this action to retrieve an object's metadata. This action can be configured in the following ways. 
* **Path object_name** - The object `name__v` field value.
* **Path loc** \(Optional\) - When checked, this action retrieves localized (translated) strings for the label and object fields.

* **Path item** - The absolute path of the file or folder to delete. This path is specific to the authenticated user. Admin users can access the root directory. All other users can only access their own user directory.
* **Query recursive** - When checked, the response will delete the contents of all sub-folders. The default value is unchecked.

**Update Vault Objects** - Use this action to update objects in your Veeva Vault. 

**Update Vault Multiple Documents** - Use this action to update multiple documents.

**Update Vault Picklist Value** - Use this action to update picklist values.
* **Path picklist_name** - The ID of the picklist. 
* **Path picklist_value_name** - The name of the picklist value.

**Load Data Objects** - When you select **Load Data Objects**, you can select multiple files at once to upload to your vault.

**Extract Data Files** - When you select **Extract Data Files**, you can export multiple files at once from your vault. You can upload these files to another vault or different system altogether.

**Add Multiple Document Renditions** - Submit a JSON array to add renditions to a document with this action. 

**Create Multiple Documents** - Submit a JSON array to create multiple documents with this action.

**Create Folder or File** - Use this action to create folders or files in your Veeva Vault file staging server. This action can be configured in the following ways.
* **Query kind** - Use `kind` to create either files or folders.

* **Query path** - The absolute path (including file/folder name) to place the item in the file staging server. This path is specific to the authenticated user. Admin users can access the root directory. All other users can only access their own user directory.
* **Query overwrite** - If selected, Vault will overwrite any existing files with the same name at the specified destination. For folders, this is always false.

**Delete Object Records** - Use this action to delete Veeva object records. You must have the Veeva object field value (i.e, `product_v`, `country_v`, `custom_object_c`)
* **Path object_name** - The object `name__v` field value.
* **Query _method** - This value is prefixed and is required to set the HTTP method.

* **Header X-VaultAPI-MigrationMode** - When this is set to true, Document Migration Mode is applied.
* **Query idParam** - The unique ID for the object, if available.
* **Query largeSizeAsset** - Setting this value to true indicates that all the renditions to be added are of the `large_size_asset__v` rendition type. **Document Migration Mode** limitations are automatically applied when renditions are created with **largeSizeAsset**; it is not required that your Vault be in Migration Mode or for you to have **Document Migration** permissions. An error will be thrown if this option is selected and the CSV contains other rendition types than `large_size_asset__v`.

**Initiate Object Action on a Single Record** - Use this action to execute specific actions on individual records. You will need the following to execute this action.
* **Path object_name** - The object `name__v` field value.
* **Path object_record_id** - The object record id field value from which to retrieve user actions. 
* **Path action_name** - The name of the object action to initiate. You can retrieve this from the Retrieve User Actions request. The format for `action_name` is `Objectaction.vobject.action` or `Objectlifecyclestateuseraction.vobject.state.action`.


## Query Vault
The Query Vault operation allows you to query Veeva Vault objects and documents using Boomi UI to set the field selection, filtering, and sorting. Additionally, you can write your own custom VQL queries instead of using the UI for defining joins. Pagination is supported only at the root element.

In the first operation import screen, you'll see the following fields for this connector. Populate them as desired, then select **Next**.

* **Atom** - Select the Atom you'd like to use. 

* **Connection** - Select the connection component.

* **Enable VQL Joins** - Use this dropdown box to select **Disable Joins** or **Enable Single Level Joins**. This option allows you to perform VQL joins by presenting child fields for selection. System object references will be excluded for documents. This field is not applicable to **List items at path**” object type. 

* **Include System Fields** - Use this optional dropdown box to include all fields. Otherwise, only a subset of systems will be available for querying to simplify field selection. Note that selecting this option may provide fields that are not queryable due to security permissions and selecting them will result in error. 

* **Filter** (Optional) - You can select a desired filter for results here. 

On the second browse screen, use the **Object Type** to select **Get items at path list** or a Veeva object included in your Vault. Your selection determines which of the following actions are available. 


**Get items at path list** - Use this object type to paginate records. 
* **Query recursive** - When checked, the response will return the contents of all sub-folders. The default value is unchecked.
* **Query path** - The absolute path (including file/folder name) to place the item in the file staging server. This path is specific to the authenticated user. Admin users can access the root directory. All other users can only access their own user directory.
* **Override API Version (Optional)** - A checkbox that overrides any version dictated in the connection field when selected. 
* **API Version** - Enter the Veeva REST API GA API version to use. This field only appears when **Override API Version** is selected.

**Query Vault Other Types** - Use this object type to access the following fields. 
* **Custom VQL Statement** - You can enter a raw VQL query here for complex SELECT/WHERE/FIND terms that can not be modeled with the Fields/Filter/Order by panels below. This replaces any configuration set in the Fields, Filters and Sorts panels.

* **FIND/Keyword Search** - Enter a keyword, in single quotes, to search on documents and Vault objects. For example: 'diabetes AND insulin'. For more info, see the [Veeva Developer Docs](https://developer.veevavault.com/vql/#find).

* **Maximum Documents** - Enter the maximum number of documents to retrieve. If the value is less than 1, all records are returned.

* **Page Size** - Enter the number of documents to retrieve on each page here. The default number of records returned on a single page is 1000.

* **Version Filter Options**  - Choose which document versions to return. 

<OperationEnd />