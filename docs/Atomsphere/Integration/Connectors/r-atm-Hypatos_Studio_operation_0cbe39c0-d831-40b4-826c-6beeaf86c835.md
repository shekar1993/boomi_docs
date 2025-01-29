import OperationEnd from './_operationEnd.md'
import ReturnErrRes from './_ReturnResponse.md'
import TrackingDir from './_TrackObject.md'

# Hypatos.ai - Partner operation 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-0cbe39c0-d831-40b4-826c-6beeaf86c835"/>
</head>


The Hypatos.ai - Partner operation defines how to interact with your Hypatos Studio account or the Hypatos Enrichment Service database and represents a specific action \(GET, POST, DELETE\) to perform against a specific object type such as a Hypatos Studio file or processed document or a master data record of Hypatos Enrichment Service database.

Create a separate action and operation component for each action/object combination required for your integration.

## Available Actions

The Hypatos.ai - Partner operation features various actions that can be used to streamline and automate many operations on the Hypatos Studio platform or Hypatos Enrichment Service database.

The following list describes the actions that are managed by the connector:

-   **GET** -  This action is used to retrieve information regarding processed documents or download an originally uploaded file from Hypatos Studio.
-   **POST** -  This action is used to upload a file, trigger file processing in Hypatos Studio, or update Studio documents metadata. It is also used to create or update master data records in Hypatos Enrichment Service database.
-   **DELETE** -  This action is used to remove master data records from Hypatos Enrichment Service database.

## Operations

Each operation implements a specific task such as reading, creating, or updating an object of Hypatos Studio or Hypatos Enrichment Service.

The Hypatos.ai – Partner connector operations use JSON format and support the following actions:

-   **INBOUND** -  GET
-   **OUTBOUND** -  POST, DELETE

## Extension Objects

Depending on your selected action, the following object types \(also called resources\) of the Boomi extension are available:

## GET Action
-   **companiesGetById** - Retrieve a specific Hypatos Studio company and its details your account is currently assigned to.
-   **companiesList** - Retrieve a list of Hypatos Studio companies your account is currently assigned to.
-   **documentsGetById** -  Retrieve a single document from one of your Hypatos Studio projects.
-   **documentsList** -  Retrieve a list of documents across your Hypatos Studio projects.
-	**emailsContentGetByDocumentId** - Retrieve the email body and attachments that were sent to your Hypatos Studio account for a specific document in your Hypatos Studio company.  
-	**projectsGetById** - Retrieve a specific project and its details for your Hypatos Studio company.
-   **projectsList** - Retrieve a list of projects and their details for your Hypatos Studio company, based on provided search criteria.
-   **retrieveDocumentStates** -  Retrieve a list of states the given document passed through during its processing in Hypatos Studio.
-   **retrieveFile** -  Download from Hypatos Studio the content of a file with the given identifier.
-	**schemasGetByProjectId** - Retrieve the configured schema and its details for a particular project in Hypatos Studio.

## POST Action

-   **documentUpdateExternalData** -  Update the external data of the given document with information required from any of your external systems integrating with Hypatos Studio.
-   **documentsUpdateExternalId** -  Update the given document in Hypatos Studio with the external identifier provided from your downstream system, once it is successfully transferred there.
-   **documentsUpdateTitle** -  Update the title of the given document in Hypatos Studio.
-   **documentsUpdateTransfer** -  Update the status of the given document upon successful or failed transfer from Hypatos Studio to your downstream system.
-   **insertApprover** -  Create or update an Approver master data entity in Hypatos Enrichment Service.
-   **insertCompany** -  Create or update a Company master data entity in Hypatos Enrichment Service.
-   **insertCostCenter** -  Create or update a Cost Center master data entity in Hypatos Enrichment Service.
-   **insertCustomer** -  Create or update a Customer master data entity in Hypatos Enrichment Service.
-   **insertGLAccount** -  Create or update a GL Account master data entity in Hypatos Enrichment Service.
-   **insertInvoice** -  Create or update an Invoice posting data entity in Hypatos Enrichment Service.
-   **insertPurchaseOrder** -  Create or update a Purchase Order master data entity in Hypatos Enrichment Service.
-   **insertSupplier** -  Create or update a Supplier master data entity in Hypatos Enrichment Service.
-   **processFileIntoDocument** -  Initiate processing of an uploaded file in Hypatos Studio.

-   **uploadFile** -  Upload a binary file to be processed in Hypatos Studio.

## DELETE Action

-   **deleteApprover** -  Remove an Approver master data entity from Hypatos Enrichment Service.

-   **deleteCompany** -  Remove a Company master data entity from Hypatos Enrichment Service.

-   **deleteCostCenter** -  Remove a Cost Center master data entity from Hypatos Enrichment Service.

-   **deleteCustomer** -  Remove a Customer master data entity from Hypatos Enrichment Service.

-   **DeleteGLAccount** -  Remove a GL Account master data entity from Hypatos Enrichment Service.

-   **deleteInvoice** -  Remove an Invoice master data entity from Hypatos Enrichment Service.

-   **deletePurchaseOrder** -  Remove a Purchase Order master data entity from Hypatos Enrichment Service.

-   **deleteSupplier** -  Remove a Suppier master data entity from Hypatos Enrichment Service.

## comapniesGetById

This operation will be used to get from Hypatos Studio the details of a single company that the client is currently assigned to.

**Response Profile**

The JSON profile definition that represents the JSON structure received by the connector. It consists of the following distinct objects:

- **id** – of Character data type, indicating the internal company identifier in Hypatos (as provided in the request).

- **name** – of Character data type, indicating the name of the company as shown in Hypatos Studio.

- **createdAt** – of Character data type, indicating the date and timestamp the company was created.

- **active** – of Boolean data type, indicating whether the company is currently active in Hypatos Studio or not.

- **Path id** - This is a mandatory parameter used to define the Hypatos identifier of the company to be retrieved.

## companiesList

This operation will be used to get from Hypatos Studio a list of companies and their details that the client is currently assigned to.

**Response Profile**

The JSON profile definition that represents the JSON structure received by the connector. It consists of the following distinct objects:

- **data** – an array containing the Hypatos Studio companiesreturned for the specified request. Following objects are expected to be returned for each element of the array:
    - **id** – of Character data type, indicating the internal company identifier in Hypatos (as provided in the request).
    - **name** – of Character data type, indicating the name of the company as shown in Hypatos Studio.
    - **createdAt** – of Character data type, indicating the date and timestamp the company was created.
    - **active** – of Boolean data type, indicating whether the company is currently active in Hypatos Studio or not.

- **limit** – of Number data type, indicating the limit used for this page of results. This will be the same as the limit query parameter unless it exceeds the maximal allowed value.

- **offset** – of Number data type, indicating the offset used for this page of results. This will be the same as the offset query parameter.

- **totalCount** – of Number data type, indicating the total number of companies the response contains.

## documentsGetById

This operation will be used to retrieve a single document from Hypatos Studio regardless of its processing state.

**Response profile**

The JSON profile definition that represents the JSON structure received by the connector. It consists of the following distinct objects:

-   **completedAt** – of Character data type, indicating the timestamp the document processing was completed in Hypatos Studio. Empty if document processing has not been completed yet.
-   **completedBy** – of Character data type, indicating the Hypatos Studio user that verified that the document processing has been successfully completed in Hypatos Studio. Empty if document processing has been auto-completed or it has not been completed yet.
-   **createdAt** – of Character data type, indicating the timestamp the document was first created and became available for processing in Hypatos Studio.
-   **createdBy** – of Character data type, indicating the Hypatos Studio user or integration application that initiated creation and processing of the document in Hypatos Studio.
-   **entities** – an object containing all the data points and their corresponding values that were extracted, enriched, predicted, and validated during document processing in Hypatos Studio.
-   **externalData** – an object containing any kind of information that is external to Hypatos Studio and was pushed to it with another operation.
-   **externalId** – of Character data type, indicating how the document is identified in an external system.
-   **fileId** – of Character data type, indicating the file that was originally uploaded to Hypatos Studio and was used to trigger creation and processing of the document.
-   **id** – of Character data type, indicating the Hypatos internal identifier of the document.
-   **projectId** – of Character data type, indicating the Hypatos Studio project the document belongs to.
-   **state** – of Character data type, indicating the status of the document at the time it’s being retrieved.
-   **title** – of Character data type, indicating the title of the document as appears in Hypatos Studio.
-   **updatetAt** – of Character data type, indicating the timestamp when the document was last updated in Hypatos Studio by a user or an API client.
-   **updatedBy** – of Character data type, indicating the user or the API client that last updated the document in Hypatos Studio.
-   **Path id** – This is a mandatory parameter used to define the Hypatos identifier of the document to be retrieved.

## documentsList

This operation will be used to retrieve a list of documents across projects in Hypatos Studio. You can define Dynamic Operation Properties when configuring the connector so you can filter out the documents you do not need to retrieve, and limit or sort the result.

**Response Profile**

The JSON profile definition that represents the JSON structure received by the connector. It consists of the following distinct objects:

-   **data** – an array containing the Hypatos Studio documents returned for the specified request. Following objects are expected to be returned for each element of the array:
    -   **completedAt** – of Character data type, indicating the timestamp the document processing was completed in Hypatos Studio. Empty if document processing has not been completed yet.
    -   **completedBy** – of Character data type, indicating the Hypatos Studio user that verified that the document processing has been successfully completed in Hypatos Studio. Empty if document processing has been auto-completed or it has not been completed yet.
    -   **createdAt** – of Character data type, indicating the timestamp the document was first created and became available for processing in Hypatos Studio.
    -   **createdBy** – of Character data type, indicating the Hypatos Studio user or integration application that initiated creation and processing of the document in Hypatos Studio.
    -   **entities** – an object containing all the data points and their corresponding values that were extracted, enriched, predicted, and validated during document processing in Hypatos Studio.
    -   **externalData** – an object containing any kind of information that is external to Hypatos Studio and was pushed to it with another operation.
    -   **externalId** – of Character data type, indicating how the document is identified in an external system.
    -   **fileId** – of Character data type, indicating the file that was originally uploaded to Hypatos Studio and was used to trigger creation and processing of the document.
    -   **id** – of Character data type, indicating the Hypatos internal identifier of the document.
    -   **projectId** – of Character data type, indicating the Hypatos Studio project the document belongs to.
    -   **state** – of Character data type, indicating the status of the document at the time it’s being retrieved.
    -   **title** – of Character data type, indicating the title of the document as appears in Hypatos Studio.
    -   **updatetAt** – of Character data type, indicating the timestamp when the document was last updated in Hypatos Studio by a user or an API client.
    -   **updatedBy** – of Character data type, indicating the user or the API client that last updated the document in Hypatos Studio.
-   **limit** – of Number data type, indicating the limit used for this page of results. This will be the same as the limit query parameter unless it exceeds the maximal allowed value.
-   **offset** – of Number data type, indicating the offset used for this page of results. This will be the same as the offset query parameter.
-   **totalCount** – of Number data type, indicating the total number of documents the response contains.
-   **Query projectId**– This is an optional parameter used to define the Hypatos Studio projects that should be searched for documents. If omitted, items from all your projects are returned.
-   **Query offset** – This is an optional parameter used to define a zero-based offset of the first item in the data collection to return.
-   **Query limit** – This is an optional parameter used to limit the number of items returned in the response.
-   **Query sort** – This is an optional parameter used to sort the response items by ascending or descending order of specific document metadata.
-   **Query state** – This is an optional parameter used to retrieve only documents that are in the specified processing states. Multiple states can be used for this filtering. By default, documents in all states are returned.
-   **Query fileId** – This is an optional parameter used to define the file that was used to create the processing document.

## emailsContentGetByDocumentId

This operation will be used to retrieve the email body and attachments sent to Hypatos for a specific document in Hypatos Studio. 

**Response Profile**
The JSON profile definition that represents the JSON structure received by the connector. This is a binary object providing contents of the merged file in PDF format.

- **Path id** - This is a mandatory parameter used to define the Hypatos identifier of the document to be retrieved.

## projectsGetById

This operation will be used to retrieve a single project and its details from Hypatos Studio.

**Response Profile**

The JSON profile definition that represents the JSON structure received by the connector. It consists of the following distinct objects:
-  **completion** – of Character data type, indicating whether documents will be completed automatically or not for this project. Only enumerated values automatic and manual are supported. 
-  **createdAt** – of Character data type, indicating the date and time the project was created.
-  **createdBy** – of Character data type, indicating the internal Hypatos identifier of the user that created the project.
-  **duplicates** – of Character data type, indicating whether duplicate documents will be allowed to be uploaded for this project or they should be marked as failed. Only enumerated values allow and fail are supported.
-  **extractionModelId** – of Character data type, indicating the internal Hypatos identifier of the extraction model that is used in the project.
-  **id** – of Character data type, indicating the internal Hypatos identifier of the project.
-  **members** – an object containing details regarding the Hypatos Studio users currently assigned to the project. Following attributes are expected to be returned for each request:
	-  **allow** – of Character data type, indicating whether the project is visible in Hypatos Studio to all users of the company it belongs to or only to specific members of it. Only enumerated values all and members are supported.
	-  **members** – an array of strings, containing the internal Hypatos identifiers of the users that are currently assigned to the project and have access to it in Hypatos Studio. Only returned if allow attribute’s value is set to members.
-  **name** – of Character data type, indicating the name of the project as shown in Hypatos Studio.
-  **note** – of Character data type, containing any notes that have been currently defined for the project.
-  **ocr** – an object containing details regarding the OCR engine used in the project. Following attributes are expected to be returned for each request:
	-  **engine** – of Character data type, indicating the OCR engine that is used in the project.
	-  **features** – an array of additional features currently supported by the project. Depending on the OCR engine used, different values may be returned.
	-  **languages** – an array of OCR languages used in the project. Depending on the OCR engine used, this attribute may be returned or not.
	-  **updatedAt** – of Character data type, indicating the last date and time the project and any of its attributes were updated.
	-  **updatedBy** – of Character data type, indicating the internal Hypatos identifier of the user that last updated the project.

-  **Path id** - This is a mandatory parameter used to define the Hypatos identifier of the Hypatos Studio project to be retrieved.

## projectsList

This operation will be used to retrieve a list of Hypatos Studio projects they are assigned to, based on provided search criteria.

**Response Profile**
The JSON profile definition that represents the JSON structure received by the connector. It consists of the following distinct objects:

-  **data** – an array containing the Hypatos Studio projects returned for the specified request. Following objects are expected to be returned for each element of the array:
    -  **completion** – of Character data type, indicating whether documents will be completed automatically or not for this project. Only enumerated values automatic and manual are supported.
    -  **createdAt** – of Character data type, indicating the date and time the project was created.
    -  **createdBy** – of Character data type, indicating the internal Hypatos identifier of the user that created the project.
    -  **duplicates** – of Character data type, indicating whether duplicate documents will be allowed to be uploaded for this project or they should be marked as failed. Only enumerated values allow and fail are supported.
    -	**extractionModelId** – of Character data type, indicating the internal Hypatos identifier of the extraction model that is used in the project.
    -   **id** – of Character data type, indicating the internal Hypatos identifier of the project.
    -	**members** – an object containing details regarding the Hypatos Studio users currently assigned to the project. Following attributes are expected to be returned for each request:
	    -	**allow** – of Character data type, indicating whether the project is visible in Hypatos Studio to all users of the company it belongs to or only to specific members of it. Only enumerated values all and members are supported.
	    -	**members** – an array of strings, containing the internal Hypatos identifiers of the users that are currently assigned to the project and have access to it in Hypatos Studio. Only returned if allow attribute’s value is set to members. 
    -   **name** – of Character data type, indicating the name of the project as shown in Hypatos Studio.
    -  **note** – of Character data type, containing any notes that have been currently defined for the project.
    -  **ocr** – an object containing details regarding the OCR engine used in the project. Following attributes are expected to be returned for each request:
	    -	**engine** – of Character data type, indicating the OCR engine that is used in the project.
	    -	**features** – an array of additional features currently supported by the project. Depending on the OCR engine used, different values may be returned.
	    -	**languages** – an array of OCR languages used in the project. Depending on the OCR engine used, this attribute may be returned or not.
    -	**updatedAt** – of Character data type, indicating the last date and time the project and any of its attributes were updated.
    -	**updatedBy** – of Character data type, indicating the internal Hypatos identifier of the user that last updated the project.
-	**limit** – of Number data type, indicating the limit used for this page of results. This will be the same as the limit query parameter unless it exceeds the maximal allowed value.
-	**offset** – of Number data type, indicating the offset used for this page of results. This will be the same as the offset query parameter.
-	**totalCount** – of Number data type, indicating the total number of documents the response contains.

**Query offset**
This is an optional parameter used to define a zero-based offset of the first item in the data collection to return.

**Query limit**
This is an optional parameter used to limit the number of items returned in the response.

**Query sort**
This is an optional parameter used to sort the response items by ascending or descending order of specific document metadata.

**Query search**
This is an optional parameter used to define the projects’ names or IDs to be searched in Hypatos Studio and returned.


## retrieveDocumentStates

This operation will be used to retrieve the history log of processing states for the given document.

**Response Profile**

The JSON profile definition that represents the JSON structure received by the connector. It consists of an array of objects that for each of its elements the following attributes are defined:

-   **state** – of Character data type, indicating the document processing state at a given point in time.
-   **updateAt** – of Character data type, indicating the timestamp that the processing state became effective in Hypatos Studio.
-   **Path id**– This is a mandatory parameter used to define the Hypatos identifier of the document that its states should be retrieved

## retrieveFile

This operation will retrieve the contents of the specified file. The file to be downloaded is the one originally uploaded to Hypatos Studio before it got processed. This operation is useful when you want to integrate Hypatos with a target system that requires both processed \(captured, enriched, validated\) and original documents \(for archiving purposes\). Expected file formats are the ones supported on the Upload a file operation.

**Response Profile**

The JSON profile definition that represents the JSON structure received by the connector. This is a binary object providing contents of the file in any of the currently available Hypatos Studio file formats.

-   **Path id** – This is a mandatory parameter used to define the Hypatos identifier \(as returned from Upload a file operation\) of the file to be downloaded.

## schemasGetByProjectId

This operation will be used to retrieve the configured schema of a single project from Hypatos Studio.

**Response Profile**

The JSON profile definition that represents the JSON structure received by the connector. It consists of the following distinct objects:
-	**dataPoints** – an array of objects containing the configured data points for the schema. For each data point on the list, the following attributes are returned:
	-	**displayName** – of Character data type, indicating the name of the data point that is displayed in Hypatos Studio.
	-	**internalName** – of Character data type, indicating the internal identifier of the data point, as it’s being used during document processing in Hypatos Studio.
	-	**normalization** – an array of object containing the configured normalization rules for the data point.
	-	**rules** – an object containing the configured validation rules for the data point.
	-	**type** – of Character data type, indicating the type of the data point as it is configured in Hypatos Studio.
-	**enrichment** – an object, containing details regarding the enrichment configuration of the schema.
-	**features** – an object containing the following attribute:
	-	**derivation** – of Boolean data type, indicating whether derivation is enabled for the project or not. 
-	**normalization** – an object, containing details regarding the configured normalization rules of the schema.
-	**validation** – an object, containing details regarding the configured validation rules of the schema.
-	**version** – of Number data type, indicating the current version of the schema.


Path id
This is a mandatory parameter used to define the Hypatos identifier of the Hypatos Studio project and its schema to be retrieved.

## documentUpdateExternalData

This operation will update the external data of the specified document in Hypatos Studio. The external data are provided as a flat JSON object. The payload of this request completely overrides the existing external data of a document. To remove the data, just send an empty JSON object ‘{}\` in the payload.

**Note:** The maximum length of a key is 50 characters. Any value with a longer key will be omitted. The maximum number of key-value pairs is limited to 20.

**Request Profile**

The JSON profile definition that represents the JSON structure sent by the connector. This is flat JSON object with two keys defined by default. You should override the request profile by adding/removing and renaming the keys of this flat JSON object to your desired values.

-   **Path id** – This is a mandatory parameter used to define the Hypatos identifier \(as returned from Upload a file operation\) of the file to be downloaded.

## documentsUpdateExternalId

This operation will update the external identifier of the specified document in Hypatos Studio. This external identifier usually corresponds to the one generated by another system, once successfully processed documents are transferred from Hypatos Studio to it.

**Request Profile**

The JSON profile definition that represents the JSON structure sent by the connector. A single object of type text/plain should be used for this operation.

-   **Path id** – This is a mandatory parameter used to define the Hypatos identifier \(as returned from Upload a file operation\) of the file to be downloaded.

## documentsUpdateTitle

This operation will update the title of the specified document in Hypatos Studio.

**Request Profile**

The JSON profile definition that represents the JSON structure sent by the connector. A single object of type text/plain should be used for this operation.

-   **Path id** – This is a mandatory parameter used to define the Hypatos identifier \(as returned from Upload a file operation\) of the file to be downloaded.

## documentsUpdateTransfer

This operation will update the document in Hypatos Studio with information regarding its transfer \(successful/failed\) to the target system. You should use this operation after successfully retrieving and transferring to the target system a processed document from Hypatos Studio so you can keep source and target systems updated.

**Request Profile**

The JSON profile definition that represents the JSON structure sent by the connector. It consists of the following distinct objects:

-   **successful** – of Boolean data type, indicating whether the document was successfully transferred to the target system.
-   **message** – of Character data type, providing any additional information or error message in case the document could not be transferred to the target system.
-   **Path id** – This is a mandatory parameter used to define the Hypatos identifier \(as returned from Upload a file operation\) of the file to be downloaded.

## insertApprover

This operation will create or update an Approver master data record in Hypatos Enrichment Service database. In case an Approver is found for the provided ‘externalId’, then its data will be completely overwritten with the provided information in this operation; else a new record will be created for the provided information in this operation.

**Request Profile**

The JSON profile definition that represents the JSON structure sent by the connector. It consists of the following distinct objects:

-   **externalId** – of Character data type, indicating the external unique identifier of the first approver of an invoice in the source system.
-   **companyAssignment** – a list of company IDs that the approver is assigned to.
-   **isActive** – of Boolean data type, indicating whether the approver is still active in the source system.
-   **firstName** – of Character data type, indicating the first name of the approving person.
-   **lastName** – of Character data type, indicating the last name of the approving person.
-   **email** – of Character data type, indicating the email address of the approving person.
-   **phoneNumber** – of Character data type, indicating the Phone number of the approving person.

**Response Profile**

The JSON profile definition that represents the JSON structure received by the connector. It consists of the following distinct objects:

-   **id** – of Character data type, indicating the internal identified of the record that was created or updated in Hypatos Enrichment Service.

**Header X-Hy-Meta-Internal-Company-Id**

This is an **optional** parameter used to define the Hypatos Studio company that the master data record should be created or updated for. If not provided, the Hypatos Studio company ID will be retrieved from the configuration of the Hypatos service account that is used for the operation.

## insertCompany

This operation will create or update a Company master data record in Hypatos Enrichment Service database. In case a Company is found for the provided ‘externalId’, then its data will be completely overwritten with the provided information in this operation; else a new record will be created for the provided information in this operation.

**Request Profile**

The JSON profile definition that represents the JSON structure sent by the connector. It consists of the following distinct objects:

-   **externalId** – of Character data type, indicating the external unique identifier of the company in the source system.
-   **name** – of Character data type, indicating the name of the company in the source system.
-   **street** – of character data type, indicating the street and street number where the company is located.
-   **postcode** – of Character data type, indicating the postcode where the company is located.
-   **city** – of Character data type, indicating the city where the company is located.
-   **countryCode** – of Character data type, indicating the two-letter country code where the company is located \(as defined in ISO 3166-1 alpha-2\).
-   **vatIds** – a list of VAT IDs assigned to the company.
-   **taxIds** – a list of Tax IDs assigned to the company.
-   **customFields** – a list of key value pairs containing custom fields from the source system.

**Response Profile**

The JSON profile definition that represents the JSON structure received by the connector. It consists of the following distinct objects:

-   **id** – of Character data type, indicating the internal identified of the record that was created or updated in Hypatos Enrichment Service.

**Header X-Hy-Meta-Internal-Company-Id**

This is an **optional** parameter used to define the Hypatos Studio company that the master data record should be created or updated for. If not provided, the Hypatos Studio company ID will be retrieved from the configuration of the Hypatos service account that is used for the operation.

## insertCostCenter

This operation will create or update a Cost Center master data record in Hypatos Enrichment Service database. In case a Cost Center is found for the provided ‘externalId’, then its data will be completely overwritten with the provided information in this operation; else a new record will be created for the provided information in this operation.

**Request Profile**

The JSON profile definition that represents the JSON structure sent by the connector. It consists of the following distinct objects:

-   **externalId** – of Character data type, indicating the external unique identifier of the cost center in the source system.

-   **code** – of Character data type, indicating the code of the cost center in the source system.

-   **companyAssignment** – a list of company IDs that the cost center is assigned to.

-   **type** – an object containing the respective value and labels of the cost center type.

-   **category** – an object containing the respective value and labels of the cost center category.

-   **label** – an object containing the respective description and language of the labels describing the cost center.

-   **shortLabel** – an object containing the respective description and language of the short labels describing the cost center.


**Response Profile**

The JSON profile definition that represents the JSON structure received by the connector. It consists of the following distinct objects:

-   **id** – of Character data type, indicating the internal identified of the record that was created or updated in Hypatos Enrichment Service.

**Header X-Hy-Meta-Internal-Company-Id**

This is an **optional** parameter used to define the Hypatos Studio company that the master data record should be created or updated for. If not provided, the Hypatos Studio company ID will be retrieved from the configuration of the Hypatos service account that is used for the operation.

## insertCustomer

This operation will create or update a Customer master data record in Hypatos Enrichment Service database. In case a Customer is found for the provided ‘externalId’, then its data will be completely overwritten with the provided information in this operation; else a new record will be created for the provided information in this operation.

**Request Profile**

The JSON profile definition that represents the JSON structure sent by the connector. It consists of the following distinct objects:

-   **externalId** – of Character data type, indicating the external unique identifier of the customer in the source system.

-   **name** – of Character data type, indicating the name of the customer in the source system.

-   **street** – indicating the street and street number where the customer is located.

-   **postcode** – of Character data type, indicating the postcode where the customer is located.

-   **city** – of Character data type, indicating the city where the customer is located.

-   **countryCode** – of Character data type, indicating the two-letter country code where the customer is located \(as defined in ISO 3166-1 alpha-2\).

-   **vatIds** – a list of VAT IDs assigned to the customer.

-   **taxIds** – a list of VAT IDs assigned to the customer.

-   **blockedForPosting** – of Boolean data type, indicating whether the customer has been blocked for posting in the source system.

-   **blockedForPayment** – of Boolean data type, indicating whether the customer has been blocked for payment in the source system.

-   **customerSubsidiaries** – a list of company subsidiaries the customer is assigned to.

-   **customerBankAccounts** – a list of bank accounts the customer is assigned to.

-   **customFields** – a list of key value pairs containing custom fields from the source system.


**Response Profile**

The JSON profile definition that represents the JSON structure received by the connector. It consists of the following distinct objects:

-   **id** – of Character data type, indicating the internal identified of the record that was created or updated in Hypatos Enrichment Service.

**Header X-Hy-Meta-Internal-Company-Id**

This is an **optional** parameter used to define the Hypatos Studio company that the master data record should be created or updated for. If not provided, the Hypatos Studio company ID will be retrieved from the configuration of the Hypatos service account that is used for the operation.

## insertGLAccount

This operation will create or update a GL Account master data record in Hypatos Enrichment Service database. In case a GL Account is found for the provided ‘externalId’, then its data will be completely overwritten with the provided information in this operation; else a new record will be created for the provided information in this operation.

The JSON profile definition that represents the JSON structure sent by the connector. It consists of the following distinct objects:

-   **externalId** – of Character data type, indicating the external unique identifier of the GL account in the source system.

-   **code** – of Character data type, indicating the code of the GL account in the source system.

-   **companyAssignment** – a list of company IDs that the GL account is assigned to.

-   **type** – an object containing the respective value and labels of the GL account type.

-   **category** – an object containing the respective value and labels of the GL account category.

-   **label** – an object containing the respective description and language of the labels describing the GL account.

-   **shortLabel** – an object containing the respective description and language of the short labels describing the GL account.


**Response Profile**

The JSON profile definition that represents the JSON structure received by the connector. It consists of the following distinct objects:

-   **id** – of Character data type, indicating the internal identified of the record that was created or updated in Hypatos Enrichment Service.

**Header X-Hy-Meta-Internal-Company-Id**

This is an **optional** parameter used to define the Hypatos Studio company that the master data record should be created or updated for. If not provided, the Hypatos Studio company ID will be retrieved from the configuration of the Hypatos service account that is used for the operation.

## insertInvoice

This operation will create or update an Invoice posting data record in Hypatos Enrichment Service database. In case an Invoice is found for the provided ‘externalId’, then its data will be completely overwritten with the provided information in this operation; else a new record will be created for the provided information in this operation.

**Request Profile**

The JSON profile definition that represents the JSON structure sent by the connector. It consists of the following distinct objects:

-   **externalId** – of Character data type, indicating the external unique identifier of the invoice in the source system.

-   **documentId** – of Character data type, indicating the document ID that was assigned during upload to Hypatos Studio.

-   **documents** – a list of document IDs and their types that were assigned during upload to Hypatos Studio.

-   **supplierInvoiceNumber** – indicating the invoice number provided by the issuing supplier.

-   **invoiceNumber** – of Character data type, indicating the invoice number defined by the recipient company \(not globally unique\).

-   **externalCompanyId** – of Character data type, indicating the external unique identifier of the company in the source system.

-   **externalSupplierId** – of Character data type, indicating the external unique identifier of the supplier in the source system.

-   **externalBankAccountId** – of Character data type, indicating external unique identifier of the bank account that the invoice payment was transferred to.

-   **fiscalYearLabel** – of Character data type, indicating the label used in the source system for the fiscal year that the invoice was posted in.

-   **issuedDate** – of Character data type, indicating the date when the invoice was issued by the supplier \(printed on invoice document\).

-   **receivedDate** – of Character data type, indicating the date when the invoice was received by the company.

-   **postingDate** – of Character data type, indicating the date when the invoice was posted in the source system.

-   **isCanceled** – of Boolean data type, indicating whether the invoice is cancelled or not in the source system.

-   **relatedInvoice** – of Character data type, indicating the identifier of a related invoice in the source system.

-   **currency** – of Character data type, indicating the currency of the invoice \(a three-letter currency code as defined in ISO 4217\)

-   **totalNetAmount** – of Number data type, indicating the total net amount of the invoice \(sum of line item net amounts\).

-   **totalFreightCharges** – of Number data type, indicating the sum of all freight charges of the invoice.

-   **totalOtherCharges** – of Number data type, indicating the sum of all charges other than freight charges of the invoice.

-   **totalTaxAmount** – of Number data type, indicating the total tax amount of the invoice \(sum of all taxes\).

-   **totalGrossAmount** – of Number data type, indicating the total gross amount of the invoice \(total net amount + total freight charges + total other charges + total tax amount\).

-   **paymentTerms** – a list of payment terms keys and their descriptions for the invoice.

-   **externalApproverId** – of Character data type, indicating the external unique identifier of the first approver of an invoice in the source system.

-   **customFields** – a list of key value pairs containing custom fields from the source system.

-   **headerText** – of Character data type, indicating the header text describing the invoice.

-   **type** – of Character data type, indicating the type of the invoice as defined in the source system.

-   invoiceLines – a list of invoice lines for the invoice, containing following distinct objects:
    -   **externalId** – of Character data type, indicating the external unique identifier of the invoice line in the source system.

    -   **externalCompanyId** – of Character data type, indicating the external unique identifier of the company the invoice line is assigned to.

    -   **accountAssignments** – a list of GL accounts and cost centers assigned to the invoice line.

    -   **type** – of Character data type, indicating the type of the invoice line as defined in the source system.

    -   **quantity** – of Number data type, indicating the quantity of the invoice line \(sum of all quantity splits in case of several accountAssignments\).

    -   **netAmount** – of Number data type, indicating the net amount of the invoice line.

    -   **totaltaxAmount** – of Number data type, indicating the total tax amount of the invoice line.

    -   **grossAmount** – of Number data type, indicating the gross amount of the invoice line.

    -   **unitOfMeasure** – of Character data type, indicating the unit of measure of the invoice line.

    -   **unitPrice** – of Number data type, indicating the price of one unit of the invoice line.

    -   **taxCode** – an object containing the tax code and its description that is assigned to the invoice line.

    -   **taxJurisdictionCode** – of Character data type, indicating the tax jurisdiction code assigned to the invoice line.

    -   **itemText** – of Character data type, indicating the description of the invoice line item.

    -   **externalPurchaseOrderId** – of Character data type, indicating the purchase order number related to the invoice line item.

    -   **purchaseOrderLineNumber** – of Character data type, indicating the purchase order line item number assigned to the invoice line item.

    -   **customFields** – a list of key value pairs containing custom fields from the source system.


**Response Profile**

The JSON profile definition that represents the JSON structure received by the connector. It consists of the following distinct objects:

-   **id** – of Character data type, indicating the internal identified of the record that was created or updated in Hypatos Enrichment Service.

**Header X-Hy-Meta-Internal-Company-Id**

This is an **optional** parameter used to define the Hypatos Studio company that the master data record should be created or updated for. If not provided, the Hypatos Studio company ID will be retrieved from the configuration of the Hypatos service account that is used for the operation.

## insertPurchaseOrder

This operation will create or update a Purchase Order transactional data record in Hypatos Enrichment Service database. In case a Purchase Order is found for the provided ‘externalId’, then its data will be completely overwritten with the provided information in this operation; else a new record will be created for the provided information in this operation.

**Request Profile**

The JSON profile definition that represents the JSON structure sent by the connector. It consists of the following distinct objects:

-   **externalId** – of Character data type, indicating the external unique identifier of the purchase order in the source system.

-   **createdDate** – of Character data type, indicating the date when the purchase order was created in the external system.

-   **fiscalYearLabel** – of Character data type, indicating the label used in the source system for the fiscal year that the purchase order was created in.

-   **language** – of Character data type, indicating the two-letter language code of the purchase order \(as defined in ISO 639-1\).

-   **externalCompanyId** – of Character data type, indicating the external unique identifier of the company in the source system that the purchase order is assigned to.

-   **type** – of Character data type, indicating the type of the purchase order as defined in the source system.

-   **externalSupplierId** – of Character data type, indicating the external unique identifier of the supplier in the source system.

-   **status** – of Character data type, indicating the status of the purchase order in the source system.

-   **currency** – of Character data type, indicating the currency of the purchase order \(a three-letter currency code as defined in ISO 4217\)

-   **totalNetAmount** – of Number data type, indicating the total net amount of the purchase order \(sum of line item net amounts\).

-   **totalFreightCharges** – of Number data type, indicating the sum of all freight charges of the purchase order.

-   **totalOtherCharges** – of Number data type, indicating the sum of all charges other than freight charges of the purchase order.

-   **totalTaxAmount** – of Number data type, indicating the total tax amount of the invoice \(sum of all taxes\).

-   **totalGrossAmount** – of Number data type, indicating the total gross amount of the purchase order \(total net amount + total freight charges + total other charges + total tax amount\).

-   **paymentTerms** – a list of payment terms keys and their descriptions for the purchase order.

-   **customFields** – a list of key value pairs containing custom fields from the source system.

-   **purchaseOrderLines** – a list of purchase order lines for the purchase order, containing following distinct objects:

    -   **purchaseOrderLineNumber** – of Character data type, indicating the number of the purchase order line assigned to the invoice line item \(unique within the purchase order\).

    -   **externalCompanyId** – of Character data type, indicating the external unique identifier of the company the purchase order line is assigned to.

    -   **accountAssignments** – a list of GL accounts and cost centers assigned to the purchase order line.

    -   **type** – of Character data type, indicating the type of the purchase order line as defined in the source system.

    -   **quantity** – of Number data type, indicating the quantity of the purchase order line \(sum of all quantity splits in case of several accountAssignments\).

    -   **status** – of Character data type, indicating the status of the purchase order line as defined in the source system.

    -   **netAmount** – of Number data type, indicating the net amount of the purchase order line.

    -   **totaltaxAmount** – of Number data type, indicating the total tax amount of the purchase order line.

    -   **grossAmount** – of Number data type, indicating the gross amount of the purchase order line.

    -   **unitOfMeasure** – of Character data type, indicating the unit of measure of the purchase order line.

    -   **unitPrice** – of Number data type, indicating the price of one unit of the purchase order line.

    -   **taxCode** – an object containing the tax code and its description that is assigned to the purchase order line.

    -   **itemText** – of Character data type, indicating the description of the purchase order line item.

    -   **material** – an object containing information regarding the material number and description assigned to the purchase order line by the supplier that issued the purchase order.

    -   **customFields** – a list of key value pairs containing custom fields from the source system.


**Response Profile**

The JSON profile definition that represents the JSON structure received by the connector. It consists of the following distinct objects:

-   **id** – of Character data type, indicating the internal identified of the record that was created or updated in Hypatos Enrichment Service.

**Header X-Hy-Meta-Internal-Company-Id**

This is an **optional** parameter used to define the Hypatos Studio company that the master data record should be created or updated for. If not provided, the Hypatos Studio company ID will be retrieved from the configuration of the Hypatos service account that is used for the operation.

## insertSupplier

This operation will create or update a Supplier master data record in Hypatos Enrichment Service database. In case a Supplier is found for the provided ‘externalId’, then its data will be completely overwritten with the provided information in this operation; else a new record will be created for the provided information in this operation.

**Request Profile**

The JSON profile definition that represents the JSON structure sent by the connector. It consists of the following distinct objects:

-   **externalId** – of Character data type, indicating the external unique identifier of the supplier in the source system.
-   **name** – of Character data type, indicating the name of the supplier in the source system.
-   **street** – indicating the street and street number where the supplier is located.
-   **postcode** – of Character data type, indicating the postcode where the supplier is located.
-   **city** – of Character data type, indicating the city where the supplier is located.
-   **countryCode** – of Character data type, indicating the two-letter country code where the supplier is located \(as defined in ISO 3166-1 alpha-2\).
-   **vatIds** – a list of VAT IDs assigned to the supplier.
-   **taxIds** – a list of VAT IDs assigned to the supplier.
-   **blockedForPosting** – of Boolean data type, indicating whether the supplier has been blocked for posting in the source system.
-   **blockedForPayment** – of Boolean data type, indicating whether the supplier has been blocked for payment in the source system.
-   **supplierSubsidiaries** – a list of company subsidiaries the supplier is assigned to.
-   **supplierBankAccounts** – a list of bank accounts the supplier is assigned to.
-   **customFields** – a list of key value pairs containing custom fields from the source system.

**Response Profile**

The JSON profile definition that represents the JSON structure received by the connector. It consists of the following distinct objects:

-   **id** – of Character data type, indicating the internal identified of the record that was created or updated in Hypatos Enrichment Service

**Header X-Hy-Meta-Internal-Company-Id**

This is an **optional** parameter used to define the Hypatos Studio company that the master data record should be created or updated for. If not provided, the Hypatos Studio company ID will be retrieved from the configuration of the Hypatos service account that is used for the operation.

## processFileIntoDocument

This operation will be used to trigger processing of a file that was previously uploaded to Hypatos and the subsequent creation of a document in Hypatos Studio. This operation should always follow the **Upload a file** one and it is required for initiating document processing \(extraction, enrichment, validation\) in Hypatos Studio.

**Request Profile**

The JSON profile definition that represents the JSON structure sent by the connector. It consists of the following distinct objects:

-   **fileId** – of Character data type, indicating the file already uploaded to Hypatos and that should be processed in Hypatos Studio.
-   **projectId** – of Character data type, indicating the project in Hypatos Studio the document should be created for.
-   **externalId** – of Character data type, to be used if you want to link the created document with an identifier in your system.
-   **externalData** – a flat JSON object with two keys defined by default. You should override this object by adding/removing and renaming the keys of this flat JSON object to your desired values.

**Response Profile**

The JSON profile definition that represents the JSON structure received by the connector. It consists of the following distinct objects:

-   **documentId** – of Character data type, providing the internal document identifier to be used for retrieving the processed document and its entities from Hypatos Studio.
-   **fileId** – of Character data type, same as in Request Profile.
-   **projectId** – of Character data type, same as in Request Profile.

## projectsCreate

This operation will create a new project in Hypatos Studio for the company that the client is currently assigned to. Both configuration attributes and schema of the project may be assigned with this operation, though the latter is optional to be provided.

**Request Profile**

The JSON profile definition that represents the JSON structure sent by the connector. It consists of the following objects:
-	**completion** – of Character data type, indicating whether documents will be completed automatically or not for this project. Only enumerated values automatic and manual are supported. 
-	**duplicates** – of Character data type, indicating whether duplicate documents will be allowed to be uploaded for this project or they should be marked as failed. Only enumerated values allow and fail are supported.
-	**extractionModelId** – of Character data type, indicating the internal Hypatos identifier of the extraction model that is used in the project.
-	**members** – an object containing details regarding the Hypatos Studio users currently assigned to the project. Following attributes are expected to be returned for each request:
	-	**allow** – of Character data type, indicating whether the project is visible in Hypatos Studio to all users of the company it belongs to or only to specific members of it. Only enumerated values all and members are supported.
	-	**members** – an array of strings, containing the internal Hypatos identifiers of the users that are currently assigned to the project and have access to it in Hypatos Studio. Only returned if allow attribute’s value is set to members.
-	**name** – of Character data type, indicating the name of the project as shown in Hypatos Studio.
-	**note** – of Character data type, containing any notes that have been currently defined for the project.
-	**ocr** – an object containing details regarding the OCR engine used in the project. Following attributes are expected to be returned for each request:
	-	**engine** – of Character data type, indicating the OCR engine that is used in the project.
	-	**features** – an array of additional features currently supported by the project. Depending on the OCR engine used, different values may be returned.
	-	**languages** – an array of OCR languages used in the project. Depending on the OCR engine used, this attribute may be returned or not.
-	**schema** – an object containing the schema configuration for the project. Following attributes may be passed:
	-	**dataPoints** – an array of objects containing the configured data points for the schema. For each data point on the list, the following attributes are returned:
	    -	**displayName** – of Character data type, indicating the name of the data point that is displayed in Hypatos Studio.
	    -	**internalName** – of Character data type, indicating the internal identifier of the data point, as it’s being used during document processing in Hypatos Studio.
	    -	**normalization** – an array of object containing the configured normalization rules for the data point.
	    -	**rules** – an object containing the configured validation rules for the data point.
	    -	**type** – of Character data type, indicating the type of the data point as it is configured in Hypatos Studio.
	-	**enrichment** – an object, containing details regarding the enrichment configuration of the schema.
	-	**features** – an object containing the following attribute:
	    -	**derivation** – of Boolean data type, indicating whether derivation is enabled for the project or not. 
	-	**normalization** – an object, containing details regarding the configured normalization rules of the schema.
	-	**validation** – an object, containing details regarding the configured validation rules of the schema.
	-	**version** – of Number data type, indicating the current version of the schema.


**Response Profile**

The JSON profile definition that represents the JSON structure received by the connector. It consists of the following distinct objects:

-	**completion** – of Character data type, indicating whether documents will be completed automatically or not for this project. Only enumerated values automatic and manual are supported. 
-	**createdAt** – of Character data type, indicating the date and time the project was created.
-	**createdBy** – of Character data type, indicating the internal Hypatos identifier of the user that created the project.
-	**duplicates** – of Character data type, indicating whether duplicate documents will be allowed to be uploaded for this project or they should be marked as failed. Only enumerated values allow and fail are supported.
-	**extractionModelId** – of Character data type, indicating the internal Hypatos identifier of the extraction model that is used in the project.
-	**id** – of Character data type, indicating the internal Hypatos identifier of the project.
-	**members** – an object containing details regarding the Hypatos Studio users currently assigned to the project. Following attributes are expected to be returned for each request:
	-	**allow** – of Character data type, indicating whether the project is visible in Hypatos Studio to all users of the company it belongs to or only to specific members of it. Only enumerated values all and members are supported.
	-	**members** – an array of strings, containing the internal Hypatos identifiers of the users that are currently assigned to the project and have access to it in Hypatos Studio. Only returned if allow attribute’s value is set to members.
-	**name** – of Character data type, indicating the name of the project as shown in Hypatos Studio.
-	**note** – of Character data type, containing any notes that have been currently defined for the project.
-	**ocr** – an object containing details regarding the OCR engine used in the project. Following attributes are expected to be returned for each request:
	-	**engine** – of Character data type, indicating the OCR engine that is used in the project.
	-	**features** – an array of additional features currently supported by the project. Depending on the OCR engine used, different values may be returned.
	-	**languages** – an array of OCR languages used in the project. Depending on the OCR engine used, this attribute may be returned or not.
-	**updatedAt** – of Character data type, indicating the last date and time the project and any of its attributes were updated.
-	**updatedBy** – of Character data type, indicating the internal Hypatos identifier of the user that last updated the project.

## uploadFile

This operation allows a client to upload a binary file to Hypatos. The “id” returned in the response profile is representing the file in Hypatos systems. It can be used in other operations, for example, to initiate a processing of the file to create document holding captured data. File formats supported are the same ones currently available in Hypatos Studio.

**Request Profile**

The JSON profile definition that represents the JSON structure sent by the connector. A **binary** object, in any of the currently supported Hypatos Studio file formats, is expected in the request of this operation.

**Response Profile**

The JSON profile definition that represents the JSON structure received by the connector. A single “id” element of type Character is expected to be returned, defining the internal identifier generated in Hypatos for the uploaded file.

**Header X-Hy-Filename**

This is an **optional** parameter used to define the name of the file to be stored along with the content in Hypatos. If not provided, a filename will be generated from Hypatos.

## deleteApprover

This operation will remove an Approver master data record from Hypatos Enrichment Service database.

**Path externalId**

This is a **mandatory** parameter used to define the Hypatos identifier of the master data record to be removed.

 


## deleteCompany

This operation will remove a Company master data record from Hypatos Enrichment Service database.

**Path externalId**

This is a **mandatory** parameter used to define the Hypatos identifier of the master data record to be removed.

 

## deleteCostCenter

This operation will remove a Cost Center master data record from Hypatos Enrichment Service database.

**Path externalId**

This is a **mandatory** parameter used to define the Hypatos identifier of the master data record to be removed.

 

## deleteCustomer

This operation will remove a Customer master data record from Hypatos Enrichment Service database.

**Path externalId**

This is a **mandatory** parameter used to define the Hypatos identifier of the master data record to be removed.

 

## deleteGLAccount

This operation will remove a GL Account master data record from Hypatos Enrichment Service database.

**Path externalId**

This is a **mandatory** parameter used to define the Hypatos identifier of the master data record to be removed.

 

## deleteInvoice

This operation will remove an Invoice posting data record from Hypatos Enrichment Service database.

**Path externalId**

This is a **mandatory** parameter used to define the Hypatos identifier of the posting data record to be removed.


**Query lineNumber**

This is an **optional** parameter used to define a specific invoice line number to be removed. If omitted, the whole invoice is removed.

## deletePurchaseOrder

This operation will remove a Purchase Order transactional data record from Hypatos Enrichment Service database.

**Path externalId**

This is a **mandatory** parameter used to define the Hypatos identifier of the transactional data record to be removed.

**Query lineNumber**

This is an **optional** parameter used to define a specific purchase order line number to be removed. If omitted, the whole purchase order is removed.

## deleteSupplier

This operation will remove a Supplier master data record from Hypatos Enrichment Service database.

**Path externalId**

This is a **mandatory** parameter used to define the Hypatos identifier of the master data record to be removed.


## Options tab 

Not all actions are available for every object. Create a separate operation component for each action and object combination required for your integration.

Select a connector action, then use the Import Wizard to select the object with which you want to integrate. The following table describes the default field definitions for each action type:

**Object**
Defines the object with which you want to integrate and which was selected in the Import Wizard.




<TrackingDir />


<ReturnErrRes />


<OperationEnd />