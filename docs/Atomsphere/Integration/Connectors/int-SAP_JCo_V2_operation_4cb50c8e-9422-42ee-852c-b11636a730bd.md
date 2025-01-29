# SAP JCo V2 operation

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-4cb50c8e-9422-42ee-852c-b11636a730bd"/>
</head>


The SAP JCo V2 operation defines how to interact with the SAP application and represent a specific action \(Execute, Send, and Listen.\)

## Options tab

Click **Import Operation**, then use the Import wizard to browse the BAPIs available in your system's Business Object Repository by a specific object or by specifying the specific RFM or BAPI to use. For IDocs, you can specify the specific IDoc Base Type to be imported. The wizard automatically generates the request and response XML profiles for the BAPI/RFM, representing the input and output parameters for the function call, or a response XML profile for IDoc. Create a separate operation for each RFM, BAPI or IDoc call required for your integration.



**Connector Action** - 
Determines whether the action is Execute for BAPIs/RFMs, Send for sending IDocs to SAP, or Listen for as an IDoc Listener to SAP.

**Request Profile \(Execute and Send\)** - 
The XML profile definition that represents the structure that is being sent or received by the connector.

**Response Profile \(Execute and Listen\)** - 
The XML profile definition that represents the structure that is being sent or received by the connector.

**Return Application Error Responses \(Execute, Send, and Listen\)** - 
This setting controls whether a server error prevents an operation from completing:

  -   If cleared, the process aborts and reports the error on the Process Reporting page.
  -   If selected, failed operations will not be reported in Manage, allowing you to act on them in your process. JCO\_Error message \(values\) can be retrieved using this option.

Consolidate Outbound Documents? \(Send\)
When sending multiple IDocs in a batch, select this option to return a single transaction ID as a consolidated operation output for all the IDocs sent. This avoids receiving a separate transaction ID for every individual IDoc sent.

  **Note:** If any IDoc within the batch fails, such as multiple IDoc types, the process execution summary message will include the error details of the failed IDoc. If the above option is selected, the Process Reporting page will have only the following three fields’ value displayed: **Transaction Id**, **Basic Type**, and **Extension**.

Commit Transaction? \(Execute\)
Select if the specific BAPI requires a "Commit Transaction" as part of the BAPI call. See the BOR documentation in SAP for more information.

Program ID \(Listen\)
RFC Server Program ID configured in SAP. This ID can also be entered in the **Program ID** field in the **Import Wizard**.

## Execute

Execute a BAPI or RFM where the connector makes a request and the SAP application responds with the data from the selected SAP application. In order to generate the request and response XML profile associated with the BAPI or RFM, you must use the **Import Wizard**.

## Send

Send is an outbound action that sends IDocs to the destination SAP system.

**Note:** For the Send operation, the Tracking Direction is set as **Output Documents**. To apply this setting in your existing process implemented with the earlier version of SAP JCo V2 connector, it is recommended to open the process and save the operation.

## Listen

Listen is used to receive IDocs from the SAP system. The Listen operation must be the first step in your process. This process should be configured using a Start step as a connector \(with connection and operation properties\). Once the process is set up, the complete process should be deployed in the Atom used \(local or cloud\). The added process can be managed in **Manage**, **Atom Management**.

**Tip:** If you encounter duplicate entries of IDOCs being pulled by the connector, do any one of the following setting as a workaround:

-   In the SAP JCo V2 Connector - Connection settings, set the **Listener Connection Count** to 1. \(or\)
-   In your SAP System - Server Connection Pool Configuration, set the **Max Connections** value as 1.

## Archiving tab

See the topic [Connector operation’s Archiving tab](./r-atm-Connector_operations_Archiving_tab_061fbf70-1034-4bf3-b795-e952f9338dbe.md) for more information.

## Tracking tab

See the topic [Connector operation’s Tracking tab](../Process%20building/r-atm-Connector_operations_Tracking_tab_8a03f547-738a-448c-bb0f-594bad806cfe.md) for more information.