import OperationEnd from './_operationEnd.md'

# SAP operation 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-a71dccc4-a398-4dc7-9161-469e2c59a8e4"/>
</head>


The SAP operation defines how to interact with the SAP application, specifically which remote function module \(RFM\), BAPI, or IDoc to invoke.

Use the Import Wizard to browse the BAPIs available in your system's Business Object Repository by specific object or by specifying the specific RFM or BAPI to use. The wizard automatically generates the request and response XML profiles for the function or IDoc, representing the input and output parameters for the function call. Create a separate operation for each RFM, BAPI or IDoc call required for your integration.

## Options tab 

Click **Import Operation**, then use the Import wizard to select the object with which you want to integrate.

**Connector Action** - 
To determine whether you are creating an operation related to a BAPI/RFM, inbound IDoc or outbound IDoc, specify the proper connector action. This allows you to import the associated request and response XML profiles.

Depending on how you create the SAP Operation component, the action type is either non-configurable or selectable from the drop-down list. The available actions listed are:

Get — Used to set up a connector operation associated with a BAPI or RFM.

Send — Used to set up a connector operation to send IDocs to SAP.

:::note

This action can send multiple IDocs. However, the IDoc type must be the same.

:::

Listen — Used to set up a connector operation to receive IDocs from SAP. Listen processes can run in low latency mode. For more information, see the Low latency processes topic.

:::note

Test mode does not support real-time triggering and, therefore, cannot be used with listener processes.

:::

**BAPI/RFM Name** \(Get\): The name of the selected BAPI or RFM.

**IDoc Name** \(Send and Listen\): The name of the IDoc sent to or from SAP.

***Request/Response Profile**: The XML profile definition that represents the structure sent or received by the connector.

**Commit Transaction?** \(Get\): Select if the specific BAPI requires a "Commit Transaction" as part of the BAPI call. See the BOR documentation in SAP for more information.

**Program ID** \(Listen\): Used to specify the Program ID as set up in SAP in transaction SM59 as the Registered Server Program.

<OperationEnd />