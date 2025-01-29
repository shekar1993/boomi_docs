# Flow Service components

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-524907B3-630E-4AAF-A18A-BF26A29E78BC"/>
</head>


The Flow Service component provides a means by which a service interacts with processes. The Flow Service component is independently deployable, enabling a single component to support all requests specifying a common endpoint.

Much of the back-end work you would otherwise have to program is automated, including:

-   building and managing the connection
-   converting common input fields into process properties \(token, tenantId, stateId, callbackUri, culture, configurationValues, authorization, etc.\)

-   implementing callback logic

-   limiting the byte size of web service requests and rejecting requests after the limit is reached

-   managing timeouts so that when a process doesn’t return a response, the listener returns a wait response to

-   creating a process execution ID for troubleshooting


## General tab

**Name**       
**Description**

**Metadata**  
 **Name**   
**Description**

**External Name**   
Enter a unique name for the service.

**Path to Service**     
The value in this read-only field is derived from the specified **External Name**. For example, if **External Name** is SampleService, **Path to Service** is /fs/SampleService.

Clicking **![icon](../Images/main-ic-copy_boxes_399199e2-8510-4b88-8a36-ea14e1062ac3.jpg) Copy to Clipboard** copies the path to the system clipboard. To configure the flow service URL in , paste the path into the **URL** field for the service and insert the host name of the Atom to which the Flow Service component will be deployed.

For example, the URL for a flow service deployed to the USA East Integration Cloud is `https://c01-usa-east-integrate.boomi.com**Path\_to\_Service**`, which would equate to `https://c01-usa-east-integrate.boomi.com/fs/SampleService` for an **External Name** of SampleService.

**Configuration Values**   
 Configuration values identify account-specific information that is sent with each service request. Each configuration value sent from a flow with a service request becomes a dynamic process property in the Flow Services Server listener process that provides back-end processing for the requested action. These dynamic process properties are named `inflowconfigurationvalues_<configuration_value_name>` — for example, inflowconfigurationvalues\_vendorId.

To add a configuration value, use the Add Configuration Value dialog. Click **![+](../Images/main-ic-plus-sign-white-in-blue-circle-16_98f7af60-dd5f-4037-90cd-05cc9dfc5502.jpg) Add Configuration Value** to open the dialog. Its controls are as follows:

**Name**   
**Description**

**Name**   
Unique name for the value.

**Type**   
Data type of the value — Boolean, Datetime, Number, Password, or String. String is the default.

**Required by Flow**   
  Require that this value be specified in the flow that points to this component   
If selected, this value is required in flows from which service requests originate. By default the value is not required.

**Add**   
Adds the configuration value and closes the dialog.

**Cancel**  
Closes the dialog without adding a configuration value.

You can modify or delete configuration values.

## Message Actions tab

Each message action defined for a service must be linked to a Flow Services Server listener process that provides back-end processing for that action.

To add a message action, use the Add Action dialog. Click **![+](../Images/main-ic-plus-sign-white-in-blue-circle-16_98f7af60-dd5f-4037-90cd-05cc9dfc5502.jpg) Add Message Action** to open the dialog. Its controls are as follows:

**Name**   
**Description**

**Name**   
Unique name for the action.

**Description**   
Description of the action \(optional\).

**Process**   
Selects or creates the process to which to link the action.

If you create a process, it is named as follows: **External Name** plus “ - New Action Process.” Consider changing that name to one that is more descriptive.

**Add**  
Adds the action and closes the dialog.

**Cancel**   
Closes the dialog without adding an action.

You can modify or delete actions.

## File Resources tab 

A file resource must be defined for each file provider used with a service. Each file resource must be linked to two Flow Services Server listener processes, one for handling List Files requests and the other for handling Upload File requests.

To add a file resource, use the Add File Resource dialog. Click **![+](../Images/main-ic-plus-sign-white-in-blue-circle-16_98f7af60-dd5f-4037-90cd-05cc9dfc5502.jpg) Add File Resource** to open the dialog. Its controls are as follows:

**Name**   
**Description**

**Path**   
Unique path for the file resource.

**List Files Process**   
Selects or creates the listener process to handle List Files requests for the file resource.

If you create a process, it is named as follows: **External Name** plus “ - New List Files Process.” Consider changing that name to one that is more descriptive.

**Upload File Process**   
Selects or creates the listener process to handle Upload File requests for the file resource.

If you create a process, it is named as follows: **External Name** plus “ - New Upload File Process.” Consider changing that name to one that is more descriptive.

**Add**   
Adds the file resource and closes the dialog.

**Cancel**   
Closes the dialog without adding a file resource.

You can modify or delete file resources.

## Data Actions tab 

Data action object types must be defined for handling data action service requests. Each data action object type must be linked to a profile that specifies the object structure and to a Flow Services Server listener process for handling each type of request specifying an object of that type — Get, Query, Save, Delete — for which handling is required.

To add a data action object type, use the Data Action Object Type dialog. Click the **![+](../Images/main-ic-plus-sign-white-in-blue-circle-16_98f7af60-dd5f-4037-90cd-05cc9dfc5502.jpg) Add Data Action Object Type** to open the dialog. Its controls are as follows:

**Name**   
**Description**

**Object Type**   
Unique name for the object type.

**Object Type Profile**   
Selects or creates a profile representing the object structure. The profile is stored as a flow Type.

**Description**   
Description of the object type \(optional\).

**Get Process**   
Selects or creates the listener process to handle Get requests specifying an object of this type.

In that process, the Flow Services Server connector sets the dynamic process property param\_id to the value of the id field specified in the request. The param\_id value is passed as a parameter to the outbound connector action on the data source. Once the connector action is completed and the specified object is received, a Return Documents step is used to pass the object to the flow.

If you create a process, it is named as follows: **External Name** plus “ - New Get Process.” Consider changing that name to one that is more descriptive.

**Query Process**   
Selects or creates the listener process to handle Query requests specifying an object of this type.

The requesting flow optionally passes a query filter to that process in a JSON document. In the flow the filter is represented as a filtered List of the flow Type in which the **Object Type Profile** is stored.

-   If a filter is not present in the request, the outbound connector action retrieves all objects from the data source.

-   If a filter is present in the request, the Flow Services Server connector action in the Start step transforms the JSON document to an XML query filter. Subsequent processing may be necessary to transform that query filter into the filter format used in the outbound connector action on the data source.


In either case, once the outbound connector action on the data source is completed and the query results are received, a Return Documents step is used to pass the data to the flow.

If you create a process, it is named as follows: **External Name** plus “ - New Query Process.” Consider changing that name to one that is more descriptive.

**Save Process**   
Selects or creates the listener process to handle Save requests specifying an object of this type.

The requesting flow passes the object to be saved in a JSON document of the flow Type in which the **Object Type Profile** is stored. A map is typically used to transform the object to prepare it for the connector action on the data source.

If you create a process, it is named as follows: **External Name** plus “ - New Save Process.” Consider changing that name to one that is more descriptive.

**Delete Process**   
Selects or creates the listener process to handle Delete requests specifying an object of this type.

The requesting flow passes the object to be deleted in a JSON document of the flow Type in which the **Object Type Profile** is stored. A map is typically used to transform the object to prepare it for the connector action on the data source.

If you create a process, it is named as follows: **External Name** plus “ - New Delete Process.” Consider changing that name to one that is more descriptive.

**Add**   
Adds the data action object type and closes the dialog.

**Cancel**     
Closes the dialog without adding a data action object type.

You can modify or delete data action object types.