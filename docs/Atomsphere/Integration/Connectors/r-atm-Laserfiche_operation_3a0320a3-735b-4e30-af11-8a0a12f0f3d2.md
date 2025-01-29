import OperationEnd from './_operationEnd.md'

# Laserfiche - Partner operation 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-3a0320a3-735b-4e30-af11-8a0a12f0f3d2"/>
</head>


The Laserfiche - Partner operation defines how the Laserfiche connector will interact with your Laserfiche repository. It represents a specific action \(Search, Create, Update\) to perform against a specific object in your Laserfiche repository. An object can be a document, folder, type of metadata, audit reason, task, or user attribute.

## Actions 

Not all actions are available for every object. Create a separate operation component for each action/object combination that is required for your integration.

The Laserfiche - Partner connector features various actions that can be used to automate operations in a Laserfiche repository.

**Create**

The Laserfiche - Partner connector supports a variety of Create actions for creating entries.

-   [Copy Entry Async](https://api.laserfiche.com/repository/swagger/index.html?urls.primaryName=v1#/Entries/CopyEntryAsync)

-   [Create or Copy Entry](https://api.laserfiche.com/repository/swagger/index.html?urls.primaryName=v1#/Entries/CreateOrCopyEntry)

-   [Import Document](https://api.laserfiche.com/repository/swagger/index.html?urls.primaryName=v1#/Entries/ImportDocument)


**Get/Read** 

The Laserfiche - Partner connector supports a variety of Get actions for finding entries, entry metadata, and trustee information.

-   [Create Search Operation](https://api.laserfiche.com/repository/swagger/index.html?urls.primaryName=v1#/Searches/CreateSearchOperation)

-   [Create Simple Search Operation](https://api.laserfiche.com/repository/swagger/index.html?urls.primaryName=v1#/Searches/CreateSearchOperation)

-   [Get Audit Reasons](https://api.laserfiche.com/repository/swagger/index.html?urls.primaryName=v1#/AuditReasons/GetAuditReasons)

-   [Get Document Content Type](https://api.laserfiche.com/repository/swagger/index.html?urls.primaryName=v1#/Entries/GetDocumentContentType)

-   [Get Dynamic Field Values](https://api.laserfiche.com/repository/swagger/index.html?urls.primaryName=v1#/Entries/GetDynamicFieldValues)

-   [Get Entry](https://api.laserfiche.com/repository/swagger/index.html?urls.primaryName=v1#/Entries/GetEntry)

-   [Get Entry Listing](https://api.laserfiche.com/repository/swagger/index.html?urls.primaryName=v1#/Entries/GetEntryListing)

-   [Get Entry by Path](https://api.laserfiche.com/repository/swagger/index.html#/Entries/GetEntryByPath)

-   [Get Field Definition by ID](https://api.laserfiche.com/repository/swagger/index.html?urls.primaryName=v1#/FieldDefinitions/GetFieldDefinitionById)

-   [Get Field Definitions](https://api.laserfiche.com/repository/swagger/index.html?urls.primaryName=v1#/FieldDefinitions/GetFieldDefinitions)

-   [Get Field Values](https://api.laserfiche.com/repository/swagger/index.html?urls.primaryName=v1#/Entries/GetFieldValues)

-   [Get Link Definition by ID](https://api.laserfiche.com/repository/swagger/index.html?urls.primaryName=v1#/LinkDefinitions/GetLinkDefinitionById)

-   [Get Link Definitions](https://api.laserfiche.com/repository/swagger/index.html?urls.primaryName=v1#/LinkDefinitions/GetLinkDefinitions)

-   [Get Link Values from Entry](https://api.laserfiche.com/repository/swagger/index.html?urls.primaryName=v1#/Entries/GetLinkValuesFromEntry)

-   [Get Operation Status and Progress](https://api.laserfiche.com/repository/swagger/index.html?urls.primaryName=v1#/Tasks/GetOperationStatusAndProgress)

-   [Get Repository List](https://api.laserfiche.com/repository/swagger/index.html?urls.primaryName=v1#/Repositories/GetRepositoryList)

:::info Important

If multiple documents are provided as inputs to the Get Repository List operation, it will output multiple documents, each containing a copy of the repository list.  As a best practice, ensure no documents are provided as inputs to the Get Repository List operation.

:::

-   [Get Search Context Hits](https://api.laserfiche.com/repository/swagger/index.html?urls.primaryName=v1#/Searches/GetSearchContextHits)

-   [Get Search Results](https://api.laserfiche.com/repository/swagger/index.html?urls.primaryName=v1#/Searches/GetSearchResults)

-   [Get Search Status](https://api.laserfiche.com/repository/swagger/index.html?urls.primaryName=v1#/Searches/GetSearchStatus)

-   [Get Tag Definition by ID](https://api.laserfiche.com/repository/swagger/index.html?urls.primaryName=v1#/TagDefinitions/GetTagDefinitionById)

-   [Get Tag Definitions](https://api.laserfiche.com/repository/swagger/index.html?urls.primaryName=v1#/TagDefinitions/GetTagDefinitions)

-   [Get Tags Assigned to Entry](https://api.laserfiche.com/repository/swagger/index.html?urls.primaryName=v1#/Entries/GetTagsAssignedToEntry)

-   [Get Template Definition by ID](https://api.laserfiche.com/repository/swagger/index.html?urls.primaryName=v1#/TemplateDefinitions/GetTemplateDefinitionById)

-   [Get Template Definitions](https://api.laserfiche.com/repository/swagger/index.html?urls.primaryName=v1#/TemplateDefinitions/GetTemplateDefinitions)

-   [Get Template Field Definitions](https://api.laserfiche.com/repository/swagger/index.html?urls.primaryName=v1#/TemplateDefinitions/GetTemplateFieldDefinitions)

-   [Get Template Field Definitions by Template Name](https://api.laserfiche.com/repository/swagger/index.html?urls.primaryName=v1#/TemplateDefinitions/GetTemplateFieldDefinitionsByTemplateName)

-   [Get Trustee Attribute Key Value Pairs](https://api.laserfiche.com/repository/swagger/index.html?urls.primaryName=v1#/Attributes/GetTrusteeAttributeKeyValuePairs)

-   [Get Trustee Attribute Value by Key](https://api.laserfiche.com/repository/swagger/index.html?urls.primaryName=v1#/Attributes/GetTrusteeAttributeValueByKey)


**Update**

The Laserfiche - Partner connector supports Update actions for assigning metadata to entries, moving entries, and renaming entries.

-   [Assign Entry Links](https://api.laserfiche.com/repository/swagger/index.html?urls.primaryName=v1#/Entries/AssignEntryLinks)

-   [Assign Field Values](https://api.laserfiche.com/repository/swagger/index.html?urls.primaryName=v1#/Entries/AssignFieldValues)

-   [Assign Tags](https://api.laserfiche.com/repository/swagger/index.html?urls.primaryName=v1#/Entries/AssignTags)

-   [Move or Rename Entry](https://api.laserfiche.com/repository/swagger/index.html?urls.primaryName=v1#/Entries/MoveOrRenameEntry)

-   [Write Template Value to Entry](https://api.laserfiche.com/repository/swagger/index.html?urls.primaryName=v1#/Entries/WriteTemplateValueToEntry)


**Delete**

The Laserfiche - Partner connector supports Delete actions for deleting entries and metadata.

-   [Delete Assigned Template](https://api.laserfiche.com/repository/swagger/index.html?urls.primaryName=v1#/Entries/DeleteAssignedTemplate)

-   [Delete Document](https://api.laserfiche.com/repository/swagger/index.html?urls.primaryName=v1#/Entries/DeleteDocument)

-   [Delete Entry Info](https://api.laserfiche.com/repository/swagger/index.html?urls.primaryName=v1#/Entries/DeleteEntryInfo)

-   [Delete Pages](https://api.laserfiche.com/repository/swagger/index.html?urls.primaryName=v1#/Entries/DeletePages)


**Export**

The Laserfiche - Partner connector supports Export actions for exporting entries out of your Laserfiche repository.

-   [Export Document](https://api.laserfiche.com/repository/swagger/index.html?urls.primaryName=v1#/Entries/ExportDocument)

-   [Export Document with Audit Reason](https://api.laserfiche.com/repository/swagger/index.html?urls.primaryName=v1#/Entries/ExportDocumentWithAuditReason)


**Cancel**

The Laserfiche - Partner connector supports Cancel operations.

-   [Cancel Operation](https://api.laserfiche.com/repository/swagger/index.html?urls.primaryName=v1#/Tasks/CancelOperation)

-   [Cancel or Close a Search](https://api.laserfiche.com/repository/swagger/index.html?urls.primaryName=v1#/Searches/CancelOrCloseSearch)


## Options tab 

The fields available in the Options tab depend on the action selected. Some common properties are:

**Connector action**: The Connector action corresponds to the action you want the operation to take in the Laserfiche repository.

**Object**: The Object corresponds to the Laserfiche object the operation is acting on, for example, a Laserfiche entry or search.

**Request and response profiles**: Click the **Import** button to retrieve these profiles from the Laserfiche connection. Select an Atom and the Laserfiche Connection you configured to retrieve the profiles. The Request profile corresponds with the JSON schema of the request body of the Laserfiche API call. You can review the Request and Response profiles to see the type of data the action will get and return when the action runs.

**Tracking direction**: Select the document tracking direction for the operation, either **Input Documents** or**Output Documents**. This setting enables you to choose which Boomi documents appear in **Process Reporting**. Start steps always track output documents regardless of your selection.

**Error behavior**: Select Error Behavior if you want to be able to act on failed operations in your process instead of only reporting them on the Manage page.

**Additional options**: The rest of the options are operation parameter fields based on the Connector action and the Laserfiche API. The values entered here become default values for the all the steps in the process that use this operation. You can override the default values in the step's Dynamic Operation Properties tab. Some common fields are:

  - **Repository ID**: Select the repository you want to interact with from the drop-down menu. For Laserfiche Cloud, you can find your repository ID from your repository's URL. For example, `https://app.laserfiche.com/laserfiche/browse.aspx?repo=r-123a45aa`. For self-hosted Laserfiche installations, your repository ID is the name of the repository.

  - **Entry ID**: Enter the ID of the entry you want the operation to interact with by default.

<OperationEnd />