import OperationEnd from './_operationEnd.md'
import TrackingDir from './_TrackObject.md'
import ReturnErrRes from './_ReturnResponse.md'

# PowerSteering – Partner operation 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-9b26d4db-f3a4-4462-b642-08d36e25c5ab"/>
</head>


The PowerSteering – Partner operation defines how to interact with your PowerSteering account and represents a specific action \(Get and Query\) to perform against a specific PowerSteering resource.

Create a separate operation component for each action and object combination that your integration requires.

The PowerSteering – Partner operation uses the XML format and supports the following actions:

-   Inbound: Get, Query

-   Outbound: None


## **Options** tab 

Click **Import Operation**, then use the Import wizard to select the object to integrate. The following table describes the fields for each action type:



<TrackingDir />

**Response Profile** - 
Select or add an XML profile component that represents the structure received by the connector.

<ReturnErrRes />

## **Options** tab, Get action 

Get is an inbound action to retrieve data from PowerSteering. You must specify the ID parameter to retrieve data in the configuration of the connector step. The returned data can be a single item or a list, depending on the operation.

|Object|Description|Parameters \(ID\)|
|------|-----------|-----------------|
|Project|Returns a project by its ID.|Project ID|
|Project Children|Returns the secondary work items for the specified project.|Project ID|
|Project Children ID|Returns a list of secondary ID, name, and type for the specified project.|Project ID|
|Organization|Find an organization by its ID.|Organization ID|
|Organizations|Returns a list of root organizations.|`<Empty>`|
|Discussion|Finds a discussion item instance by its ID.|Discussion item ID|
|Discussions|Finds discussion item instances by their work ID.|Work ID|
|Issue|Finds an issue item instance by its ID.|Issue item ID|
|Issues|Finds issue item instances by their work ID.|Work ID|
|Issue Item Thread|Finds an issue item's thread by its discussion ID.|Discussion ID|
|Timesheet|Find a timesheet entry by its ID.|Timesheet entry ID|
|User|Finds a user by their ID.|User ID|
|Current User|Returns the current user.|`<Empty>`|
|Active Users|Finds all active users.|`<Empty>`|
|Online Users|Finds all online users.|`<Empty>`|
|Person Rates|Returns a rate list for the specified person.|User ID|
|All Rate Tables|Returns all rate tables.|`<Empty>`|
|Rate Codes|Returns a rate code list.|`<Empty>`|
|Rate Table By ID|Returns a specified rate table.|Rate table ID|
|Rate List by Rate Table|Returns a rate list for the specified rate table.|Rate table ID|
|Action Item By ID|Finds an action item by its ID.|Action Item ID|
|Action Items By Work ID|Finds action items by their work ID.|Work ID|
|Costs by Project ID|Returns all costs \(actual + estimated\) by project ID.|Project ID|
|Actual costs by Project ID|Returns actual costs by project ID.|Project ID|
|Estimated costs by Project ID|Returns estimated costs by project ID.|Project ID|
|Template|Finds a template instance by its ID.|Template ID|
|Template By Name|Finds a template instance by its name.|Template name|
|Templates|Lists template instances.|`<Empty>`|
|Portfolio|Looks for the specified portfolio by portfolio ID.|Portfolio ID|
|Portfolio Work Items|Returns a list of work items in the specified portfolio.|Project ID|
|Group Members By Group ID|Finds a group by its ID and returns the group’s members.|Group ID|
|Group|Finds a group instance by its ID.|Group ID|
|Groups|Provides a list of all user groups.|`<Empty>`|
|Task|Finds a task instance by its ID.|Task ID|
|Tasks By Project ID|Finds tasks instances by their parent project ID.|Parent project ID|
|Metric|Returns metric by ID.|Metric instance ID|
|Metric Template|Finds a metric template by ID.|Metric template ID|
|Metric Template By Name|Finds a metric template by its name.|Metric template name|
|Metric Templates|Returns all metric templates.|`<Empty>`|
|Resource Pool|Finds a resource pool by its ID.|Resource pool ID|
|Resource Pool Managers|Finds all managers for the specified resource pool.|Resource pool ID|
|Resource Pool Members|Finds all members for the specified resource pool.|Resource pool ID|
|Resource Pools|Finds all resource pools.|`<Empty>`|
|Resource Assignment|Finds a resource assignment by master ID.|Resource assignment ID|
|Events|Finds all events.|`<Empty>`|
|Role|Returns a role instance by its ID.|Role ID|
|Roles|Returns all roles.|`<Empty>`|
|Reports|Find information about all reports.|`<Empty>`|
|Report Status|Requests the status of a running report.|The report run ID.|

## **Options** tab, Query action 

Query is an inbound action to retrieve a list of data filtered by specific fields or date ranges.

| Object                     | Description                                                                                                                | Parameters |
|----------------------------|----------------------------------------------------------------------------------------------------------------------------|------------|
| Projects                   | Returns a list of projects with the specified name. If you do not specify a name, it returns all root projects.              | name: Project name |
| Project Download           | Returns a paged list of projects changed in a specific period.                                                              | <ul><li>modFrom: Start of period. If not specified, uses 01/01/200.</li><li>modTo: End of period. If not specified, uses the current date.</li><li>start: The start row number of the result rows.</li><li>count: Rows on the page.</li></ul> |
| Project Download All Works | Returns a paged list of works changed in a specific period. Includes works of all object types, including projects.          | <ul><li>modFrom: Start of period. If not specified, uses 01/01/200.</li><li>modTo: End of period. If not specified, uses the current date.</li><li>start: The start row number of the result rows.</li><li>count: Rows on the page.</li></ul> |
| Download Organizations     | Returns a paged list of organizations changed in a specific period.                                                          | <ul><li>modFrom: Start of period. If not specified, uses 01/01/200.</li><li>modTo: End of period. If not specified, uses the current date.</li><li>start: The start row number of the result rows.</li><li>count: Rows on the page.</li></ul> |
| Timesheets                 | Finds a user's timesheets for a week.                                                                                       | <ul><li>ID: User ID</li><li>weekDay: First day of the week.</li></ul> |
| Users                      | Finds all users with the specified name.                                                                                    | usersName: User name |
| Download Users             | Returns a paged list of users changed in a specific period.                                                                  | <ul><li>modFrom: Start of period. If not specified, uses 01/01/200.</li><li>modTo: End of period. If not specified, uses the current date.</li><li>start: The start row number of the result rows.</li><li>count: Rows on the page.</li></ul> |
| Rates History              | Returns historical rates of a specified rate.                                                                                | <ul><li>tableID: Rate table ID.</li><li>ID: Rate ID.</li></ul> |
| Group Members              | Finds a group by its name and returns the group’s members.                                                                   | name: Group name |
| Tasks                      | Finds task instances by their name.                                                                                         | name: Task name |
| Download Tasks             | Returns a paged list of tasks changed in a specific period.                                                                  | <ul><li>modFrom: Start of period. If not specified, uses 01/01/200.</li><li>modTo: End of period. If not specified, uses the current date.</li><li>start: The start row number of the result rows.</li><li>count: Rows on the page.</li></ul> |
| Metric Data                | Returns measurements data from metric instance by ID.                                                                       | <ul><li>ID: Metric instance ID.</li><li>view: View ID.</li><li>beneficiary: Beneficiary ID.</li><li>start: Start period date.</li><li>end: End period date.</li></ul> |
| Metrics                    | Returns all metrics associated with a work item ID and metric template.                                                     | <ul><li>project: Work item ID.</li><li>template: Metric template ID.</li></ul> |
| Resource Allocations       | Gets a resource assigned to a specific project or a task for a specific period.                                              | <ul><li>ID:Work ID.</li><li>modFrom: Start date of the period.</li><li>modTo: End date of the period.</li></ul> |
| Resource Demands           | Gets resource demanded but assigned on a project or task for a specific period.                                              | <ul><li>ID: Work ID.</li><li>modFrom: Start date of the period.</li><li>modTo: End date of the period.</li></ul> |
| Run Report                 | Runs a specified report.                                                                                                    | <ul><li>ID: Report ID.</li><li>filename: The basic filename to store the report results (attaches a timestamp).</li></ul> |

<OperationEnd />