import OperationEnd from './_operationEnd.md'
import TrackingDir from './_TrackObject.md'
import ReturnErrRes from './_ReturnResponse.md'


# Microsoft Dynamics AX operation 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-81370c60-93d5-4a5d-8fd0-1cb658915c0e"/>
</head>


The Microsoft Dynamics AX operation defines how to interact with the AX services.

The operation represents a specific action to perform against an object in Microsoft Dynamics AX. The operation has one action: Execute.

## **Options** tab 

Click **Import Operation**, then use the Import wizard to select the object with which you want to integrate.



<TrackingDir />



**Request Profile** - 
 The XML profile definition that represents the XML structure that is being sent by the connector.

 The XML profile built by the connector exposes the full SOAP envelope. This allows you to set the `Envelope\Header\CallContext\Company` field, which controls which company the to run the request against. You must do this if you have a single Microsoft Dynamics AX instance with multiple companies, and you want to connect to different companies.

<ReturnErrRes />

**WS Object** - 
 The name of the web service object.

<OperationEnd />