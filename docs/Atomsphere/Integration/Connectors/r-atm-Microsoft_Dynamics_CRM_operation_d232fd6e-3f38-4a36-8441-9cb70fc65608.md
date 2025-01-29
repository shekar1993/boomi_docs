import OperationEnd from './_operationEnd.md'
import TrackingDir from './_TrackObject.md'
import ReturnErrRes from './_ReturnResponse.md'
import ReqRes from './_ReqRes.md'

# Microsoft Dynamics CRM operation 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-d232fd6e-3f38-4a36-8441-9cb70fc65608"/>
</head>


The Microsoft Dynamics CRM operation defines how to interact with your Microsoft Dynamics CRM account.

The operation represents a specific action \(such as Query and Create\) to perform against a specific Microsoft Dynamics CRM object type. Not all objects are available for each action. Create a separate operation component for each action and object combination required for your integration.

## Get 

The inbound Get action requires an entity type and ID.

The Get action does not return attributes with a null value. Instead, if you set the attribute value, it is returned in all subsequent Get actions to match the profile.

The Get action does not support paging or batching.

## Query 

Boomi Integration supports the inbound Query action.

The query does not return attributes with a null value. Instead, if you set the attribute to a value, it is returned in all subsequent queries to match the profile.

Entities can have attributes or references to other entities. The Microsoft Dynamics CRM 2011 connector enables you to specify an arbitrary logic tree for top-level attributes and reference attributes.

-   You can query by attribute only top-level attributes, such as account name and contact anniversary.

-   You can query by reference for entity references; their attributes are ID and logicalName. The ID attribute is required in a query by reference.


When you construct a query, entity reference attributes are nested in the profile display. For example, the reference attributes for an account’s createdby entity reference appears as `createdby/Id` and `createdby/logicalName`.

The Query action does not support batching or relationship entities.

## Create 

The outbound Create action generates new records in the Microsoft Dynamics CR object as defined in the Create operation. Boomi Integration supports the Create action for most object types, including custom types. However, it cannot create all object types. See this list of [Default entities that you can make](http://msdn.microsoft.com/en-us/library/microsoft.xrm.sdk.messages.createrequest.aspx/). Batching is not supported for this action.

## Update 

Boomi Integration supports the outbound Update action. You must include the primary ID of the updated record in the request.

The service does not support batched or paged Update requests.

:::note

When you create and update statuscodes, they have to match a statecode, which you cannot create or update. For instance, `associate account.statuscode` to `account.statecode`. Finding a status code that matches a state code you can modify can be challenging.

:::

## Delete 

The outbound Delete action deletes an existing record in the Microsoft Dynamics CRM object defined in the Delete operation. It ignores the input profile for a Delete operation. The service does not support bulk or paged deletes. The Delete action does not support batching.

## Options tab 

Click **Import Operation**, then use the Import wizard to select the object with which you want to integrate. The following definition list describes the default field definitions for each action type:



<TrackingDir />
<ReqRes />
<ReturnErrRes />

<OperationEnd />