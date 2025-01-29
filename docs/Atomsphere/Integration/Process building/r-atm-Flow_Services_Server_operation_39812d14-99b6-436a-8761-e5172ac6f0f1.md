# Flow Services Server operation

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-39812d14-99b6-436a-8761-e5172ac6f0f1"/>
</head>


Setup for the Flow Services Server operation in consists of identifying or creating JSON input and output profiles.

The following limitations apply to input and output profiles:

-   Arrays \(Absolute\) are not supported.

-   Lists must have an object in them \(i.e. no simple elements or lists of lists\).

-   dateTime elements must use the format: yyyy-MM-dd'T'HH:mm:ss.SSS'Z'.


The operation can be used only in a Start step.

## Options tab 

**Name**   
**Description**

**Connector Action**   
The operation supports only the Listen action.

**Service Type**   
Selects the service type:

-   Message Action — the operation performs a message action specified in a Flow Service component.

-   File Resource — the operation acts on a file resource specified in a Flow Service component.

-   Data Action — the operation acts on a data action object of a type specified in a Flow Service component.


**File Resource Operation**   
Selects the file operation type for an operation of **Service Type** File Resource:

**Name**     
**Description**

**List Files**   
Load a list of files and their metadata into a flow.

**Upload File**   
Upload a file from within a flow.

**Data Action Operation**   
Selects the data action operation type for an operation of **Service Type** Data Action:

**Name**   
**Description**

**Load**   
Load an object retrieved by ID or objects retrieved by query from a data source into a flow.

**Save**   
Save an object to a data source from within a flow.

**Delete**    
Delete an object from a data source from within a flow.

**Sync Timeout**  
The time a request should wait, in seconds, before failing over from a synchronous call to an asynchronous call.

-   The default is 30 seconds. To avoid timeout errors within a flow, do not set a value of 60 or more seconds.

-   This setting is applicable only if **Service Type** is set to Message Action.


**Request Profile**  
The JSON profile that represents the structure of the documents received in the flow service request.

-   Chooses or creates the profile for an operation of **Service Type** Message Action.

-   For an operation of **Service Type** File Resource and **File Resource Operation** List Files, clicking **Import** opens the File Service Operation Import wizard, which is used to generate the profile.

:::note

Request profiles are not applicable to data action service requests.

:::

**Response Profile**  
 The JSON profile that represents the structure of the documents returned in response to the flow service request.

-   Chooses or creates the profile for an operation of **Service Type** Message Action.

-   For an operation of **Service Type** File, clicking **Import** opens the File Service Operation Import wizard, which is used to generate the profile.

-   Chooses or creates the profile for an operation of **Service Type** Data Action and **Data Action Operation** Load.

:::note

The generated profile for **Service Type** File is a streamlined version of the profile used to create documents that are returned in response to flow service requests.

:::

## Import

Opens the File Service Operation Import wizard, which is used to generate JSON profiles for documents received and returned in operations on file resources. The **Import** button is present only for an operation of **Service Type** File Resource.

In the wizard’s first screen:

**Name**   
**Description**

**File Operation**  
 Selects the type of action on the file resource. The default is the **File Resource Operation** selection in the operation component’s **Options** tab.

-   List Files — display a list of files and their metadata in a flow.

-   Upload File — upload a file from within a flow.


**Cancel**  
 Cancels the import and closes the wizard.

**Next**   
  Advances to the next screen.

In the wizard’s second and last screen:

**Name**   
**Description**

**Request Profile**  
 Shows the name of the JSON profile for documents received that will be generated for the selected **File Resource Operation**. The profile is named FileDataRequest unless a profile with that name already exists in the account. In that case a unique number is appended to the profile name — for example, FileDataRequest 2.

This field is not present if the **File Resource Operation** Upload File is selected in the previous screen.

**Response Profile**  
 Shows the name of the JSON profile for documents returned that will be generated for the selected **File Resource Operation**. The profile is named FileObjectResponse unless a profile with that name already exists in the account. In that case a unique number is appended to the profile name — for example, FileObjectResponse 2.

**Cancel**  
 Cancels profile generation and closes the wizard.

**Back**  
  Returns to the previous screen.

**Finish**  
 Generates the profile\(s\).

## Archiving tab

See the topic [Connector operation’s Archiving tab](r-atm-Connector_operations_Archiving_tab_061fbf70-1034-4bf3-b795-e952f9338dbe.md) for more information.

## Tracking tab

See the topic [Connector operation’s Tracking tab](r-atm-Connector_operations_Tracking_tab_8a03f547-738a-448c-bb0f-594bad806cfe.md)for more information.