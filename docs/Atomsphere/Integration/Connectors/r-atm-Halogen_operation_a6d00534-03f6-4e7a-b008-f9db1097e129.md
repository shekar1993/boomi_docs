import TrackingDirection from './_TrackingDirection.md'
import ReturnErrRes from './_ReturnResponse.md'
import OperationEnd from './_operationEnd.md'

# Saba TalentSpace operation 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-a6d00534-03f6-4e7a-b008-f9db1097e129"/>
</head>


The Saba TalentSpace operation defines how to interact with your Saba TalentSpace and represents a specific action \(Create, Query or Update\) to perform against a Saba TalentSpace object type.

The Saba TalentSpace operation supports the following actions:

-   Inbound
    -   Query
-   Outbound

    -   Create
    -   Update

    -   Delete

    -   Execute


You can avoid operation errors by being aware of the following:

-   Query user operations support only simple expressions.
-   Query operations return a SOAP “no user record found” error. To silence this error, select **Return Application Error Responses**.


## Operation tab 

Click **Import Operation**, then use the Import wizard to select the object with which you want to integrate. The following table describes the field definitions for each action type:


**Object** - 
An object defines what you want to integrate, or the action to execute, which you select in the **Import Operation** wizard.

<TrackingDirection />

<ReturnErrRes />

<OperationEnd />