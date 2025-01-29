# Boomi Flow Client operation 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-2032692b-3713-4c10-8479-176784c11ae9"/>
</head>


The Boomi Flow Client operation defines how to interact with Flow.

The operation sends a request for running a tangible action exposed in the Flow REST API. The Flow tenant in which the action runs is specified in the Boomi Flow Client connection.


## **Options** tab 

You can use the **Options** tab to set options for the operation.

**Connector Action** - 
EXECUTE is the only supported action.

**Object** - 
Shows the object type used for the API request. Use the **Flow Client Import** wizard to set this option.

**Tracking Direction** 

Select the document tracking direction for the operation, either **Input Documents** or **Output Documents**. This setting enables you to choose which document appears in **Process Reporting. Start** steps always track output documents regardless of your selection.

:::note

If the tracking direction is read-only, the feature to change the direction is either unavailable or the developer set the configuration to read-only. The default value you see shows you which document appears in **Process Reporting**.

:::

**Request Profile** 
The JSON profile represents the structure of properties required in the API request that uses the **Object** type. Use the **Flow Client Import** wizard to set this option.

 -   In the requested profile for  **Object** type *Run - Initialize and Invoke Flow*. This ID element value specifies the flow to run by its ID, and the versionId element value specifies the version of the flow to run by the **version ID**, which is optional.

 -   In the request profile for any other **Object** type, there is an element corresponding to each input specified in the most recently published version of the flow from which it derives the **Object** type. In the flow an input is specified as a **Value** with its **Access** option set to **Input**.


## **Error Behavior**

**Return Application Error Responses** - This setting controls whether an application error prevents an operation from completing:

- If you clear the setting, the process stops and reports the error on the **Process Reporting** page.
- If you select the setting, processing continues and passes the error response to the next component processed as the connection output.

**Player Name** - 
Select the player to use upon launching a flow. If this field is left blank, it applies the default player to the flow. Note that the player name you use is not constrained to existing players.

## Import 

Opens the **Flow Client Import** wizard, which you use to load the operation — that is, select the **Object** type for the API request and generate the corresponding **Request Profile**.

In the wizard’s first screen:

**Browse (in Cloud)** - 
Browse for available object types in an Atom Cloud.

**Browse (in Atom)** - 
Browse for available object types in an Atom.

**Atom** - 
Selects the Atom in which to browse for available object types. This list is visible only if you select **Browse** in the **Atom**.

**Connection** - 
Selects or creates the Flow Client connection with which to browse the available object types.

**Cancel** - 
Cancels the loading of the operation and closes the wizard.

**Next** - 
Advances to the next screen.

In the wizard’s second screen:


**Object Type**       
 Selects the object type for the API request.

 An object type is available for selection for the most recently published version of each flow that resides in the tenant specified in the  **Connection**. If you use the operation to act on a flow with inputs, select the object type specific to that flow — for example, **Run - Invoke My Flow with Inputs**. A generic object type, **Run - Initialize and Invoke Flow**, is available for selection for use with flows that do not have inputs.
  
**Cancel** - 
  Cancels the loading of the operation and closes the wizard.

**Back** - 
 Returns to the previous screen.
  
**Next** - 
Advances to the next screen.

In the wizard’s third and last screen:


**Object Type** - 
 Shows the object type selected in the previous screen.

**Request Profile** - 
Shows the name of the generated JSON profile for the selected **Object Type**.

 -   For the object type **Run - Initialize and Invoke Flow**, the profile is named *Flow Client Run - Initialize and Invoke Flow EXECUTE Request* unless a profile with that name already exists in the account. In that case, it appends a unique numberto the profile name — for example, *Flow Client Run - Initialize and Invoke Flow EXECUTE Request 2*. You can change the assigned profile name to one that is more descriptive.

-   For an object type specific to a flow, the profile name is **Object Type**, with the prefix **Flow Client** and the suffix **EXECUTE Request** — for example, *Flow Client My Flow with Inputs EXECUTE Request* — unless a profile with that name already exists in the account. In that case a unique number is appended to the profile name.


**Cancel** - 
  Cancels the loading of the operation and closes the wizard.

**Finish** - 
 Loads the operation and closes the wizard.

## Archiving tab

See the topic [Connector operation’s Archiving tab](../Process%20building/r-atm-Connector_operations_Archiving_tab_061fbf70-1034-4bf3-b795-e952f9338dbe.md) for more information.

## Tracking tab

See the topic [Connector operation’s Tracking tab](../Process%20building/r-atm-Connector_operations_Tracking_tab_8a03f547-738a-448c-bb0f-594bad806cfe.md) for more information.

## Caching tab

See the topic [Connector operation’s Caching tab](../Process%20building/r-atm-Connector_operations_Caching_tab_f46b49d6-25bc-4337-ade1-9c67817b8d74.md) for more information.