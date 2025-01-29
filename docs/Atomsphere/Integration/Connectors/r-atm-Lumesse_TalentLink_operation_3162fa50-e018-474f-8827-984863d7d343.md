import OperationEnd from './_operationEnd.md'
import TrackingDir from './_TrackObject.md'
import ReturnErrRes from './_ReturnResponse.md'
import ReqRes from './_ReqRes.md'


# Lumesse TalentLink – Partner operation 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-3162fa50-e018-474f-8827-984863d7d343"/>
</head>


The Lumesse TalentLink – Partner operation defines how to interact with the Lumesse TalentLink service.

The operation represents a specific action \(such as Execute\) to perform against a specific Lumesse TalentLink Bundle and ServiceName \(for example, User:User, User:Organization, User:Role or HRIS:LovHierarchy\) and the Lumesse TalentLink method. The Lumesse TalentLink service must be available through the SOAP API. See the Lumesse TalentLink Connector topic for a list of supported WSDLs.

You must create a separate Operation component for each Bundle:ServiceName and method required for your integration.

The Lumesse TalentLink – Partner operation supports only the Execute action.

## **Options** tab 

Click **Import Operation**, then use the Import wizard to select the Bundle:ServiceName and method with which you want to integrate.

The following describes the default field definitions for the Execute action:



<TrackingDir />

<ReqRes />

<ReturnErrRes />

<OperationEnd />