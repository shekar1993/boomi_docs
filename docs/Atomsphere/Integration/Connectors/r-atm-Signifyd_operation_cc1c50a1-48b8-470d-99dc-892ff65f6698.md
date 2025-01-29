import RequestProfile from './_RequestProfile.md'
import ResponseProfile from './_ResponseProfile.md'
import OperationEnd from './_operationEnd.md'
import TrackingDirection from './_TrackingDirection.md'
import ReturnErrRes from './_ReturnResponse.md'
import ReqRes from './_ReqRes.md'
import TrackingDir from './_TrackObject.md'
import TrackedProperties from './_TrackedProperties.md'

# Signifyd – Partner operation 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-cc1c50a1-48b8-470d-99dc-892ff65f6698"/>
</head>


The Signifyd – Partner operation defines how to interact with your Signifyd system and represents a specific action \(Create, Get, Update\) to perform against a Signifyd case.

Create a separate operation component for each action/object combination that your integration requires.

The Signifyd –Partner operations use JSON format and support the following actions:

-   Create — used to create a case in Signifyd.

-   Get — used to retrieve details about a case and case entries in Signifyd.

-   Update — used to cancel a case in Signifyd.


## Options tab 

Click **Import Operation**, then use the Import wizard to select the object to integrate. The following table describes the fields for each action type:




**Object** - 
  Displays the object type that you selected in the Import wizard.

<TrackingDirection />

<RequestProfile />

<ResponseProfile />

<ReturnErrRes />

<TrackedProperties />