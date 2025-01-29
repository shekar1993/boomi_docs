import OperationEnd from './_operationEnd.md'
import TrackingDir from './_TrackObject.md'
import ReturnErrRes from './_ReturnResponse.md'


# Innotas – Partner operation 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-989f0d22-f48a-4075-bab5-e9fed578268e"/>
</head>


The Innotas – Partner operation defines how to interact with your Service Desk data and represents a specific action \(Create, Delete, Get, and so on\) to perform against a specific Innotas record type or object \(such as Project, Account, Resource\).

The Innotas – Partner operation supports the following actions:

-   **Create** — Creates multiple records.
-   **Delete** — Deletes multiple records.
-   **Get** — Retrieves a single record by its ID; you can enter only one ID.
-   **Query** — You can perform a query to search for data; you can use filters \(search parameters\).
-   **Update** — Updates multiple records.
-   **Upsert** — Updates multiple records if they exist. If there are no records, it creates them.
-   **Execute** — Used for all other "procedural" API calls.


Not all actions are available for every object. Create a separate operation for each action and object combination required for your integration. The operation browses your object definitions in real-time to get any defined custom fields.

**Object Name**: **Object ID number**

**Account**: 12

**Allocated Role**: 54

**Issue**: 6

**Program**: 3

**Project Role**: 47

**Project**: 4

**Resource**: 11

**Task Role**: 52

**Task Schedule**: 79

**Task**: 5

**Team Member**: 53

**User**: 23

## Query 

When using the Query action you can search for the same objects available with the Create action, or you can use filters \(search parameters\) that give you access to more objects.

After selecting the Query connector action and using the **Import Wizard**, you can add query filters.

To enable filters, select **Find entity by filter**. Only fields included in the query are listed when it generates the profile. For example, the following list is additional filtering information:

-   Only supports the EQUALS \(=\) operator.

-   Only supports the AND operand.

-   Does not support nested conditions.


With filters enabled, you can filter the following objects:

**Object Name**: **Object ID number**

**HR Issue**: 97

**usiness Unit**: 2

**ontact**: 19

**Expense Entry**: 71

**Expense Manager**: 22

**Fixed Bid Invoice**: 68

**Fixed Bid Invoice Item**: 69

**Issue**: 6

**Org Role Demand**: 138

**Organization**: 38

**Portfolio**: 114

**Program**: 3

**Project**: 4

**Project Role**: 47

**Project Role Demand**: 136

**Project Role Demand by Portfolio**: 139
  
**Request**: 96

**Resource**: 11

**Resource Allocation by Project Role**: 135

**Resource Capacity**: 137

**Resource Schedule by Task Role**: 134

**Resource Time Summary**: 148

**Scoring Profile**: 152

**Summary Task**: 13

**Task**: 5

**Task Role**: 52

**Task Schedule**: 79

**Timesheet**: 20

**Timesheet Entry**: 66

**User**: 23

On the **Fields** tab, you can clear the fields you do not want to be returned in the response. It checks all fields by default. To quickly select or clear all the fields for a given object, click the check box next to the object's name at the top of the field list.

Innotas supports regular fields and user-defined fields. User-defined fields have a `<method>` that always begins with `UDF` and a `<methodId\>` consisting of a minimum of six digits.

## Execute 

The following objects are available only when you use the Execute action:

**Object Name**: **Object ID number**

**Skill Set**: 37

**imesheet**: 20

The following categories of objects are available when you use the Execute action:

**Object Category** - 
  **Objects**

**Request** - 

  createOrReplaceRequest, getRequestFields, getRequestTypes, submitRequest, submitRequests

**Resource** - 

  allocateResourceTime, createOrReplaceResourceProfileSetting, getResourceProfileSetting

**Timesheet** - 

  approveTimesheet, createOrReplaceTimesheetEntries, createOrReplaceTimesheets, deleteTimesheetEntries, getTimesheet, getTimesheetForUser, getTimesheetForUsers, getTimesheets, getTimesheetVariables, submitTimesheet, submitTimesheets, updateTimesheetEntries

**Portfolio** - 

  createOrReplacePortfolio, getPortfolioFields, getPortfolioTypes

**Skill Categories** - 

  getSkillCategories

**Miscellaneous** - 

  getDeleteHistory, getUpdateHistory, getListValues

## **Options** tab 

Click **Import Operation**, then use the Import wizard to select the object to integrate. The following table describes the default field definitions:


  

<TrackingDir />

**Request Profile** \(Create, Delete, Execute, Update, Upsert only\)  
  The XML profile definition that represents the XML structure sent to the connector.

<ReturnErrRes />

**Find Entity by Filter** \(Query only\)  
  If selected the Query action, it allows you to select search parameters

<OperationEnd />