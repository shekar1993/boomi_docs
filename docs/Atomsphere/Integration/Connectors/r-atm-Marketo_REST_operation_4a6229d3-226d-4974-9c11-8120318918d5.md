import TrackingDir from './_TrackObject.md'
import ReturnErrRes from './_ReturnResponse.md'
import OperationEnd from './_operationEnd.md'

# Marketo REST operation 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-4a6229d3-226d-4974-9c11-8120318918d5"/>
</head>


The Marketo REST operation defines how to interact with your Marketo account and represents a specific action to move data into and out of Marketo.

The operation supports the following actions:

-   **Execute** — uses the **List ID** field from the operation and Lead Id as a parameter to add Leads to a list, remove Leads from a list, or add a custom activity to a Lead.

    :::note

    You can also use Execute to delete custom objects having one deduplication field, and also compound keys \(multiple deduplication fields\). For example, you use the **Message** step and set the deduplication fields \(Country and State\) for the records to delete. You use a **Data Process** step to split the records, and the **Map** step to map the fields in the JSON with the request profile of the Execute operation. Finally, when you use the Execute operation, select the **Is custom object?** option when browsing, and select the custom object type for the record that you want to delete.

    :::

-   **Get** — returns Leads and Lists by Id.

-   **Query** — searches for Marketo REST objects \(Companies, Leads, Lists, Lead Changes, Lead Activities, Opportunities, and Opportunity Roles\) based on specific search criteria for fields and filters you define.

    -   Query searches on ID, name, programName, workspaceName, batchsize, or nextPageToken.

    -   To search for Leads, use only a single filter.

    -   To search for a list of Lead Activity by type, filter on activities and sinceDatetime, the date and time to use as the beginning of the search, in *yyyy-MM-dd'T'HH:mm:ss'Z'* format. The listId and leadIds filters are optional.

    -   To search based on deduplication fields, you select the deduplication field \(for example, `externalSalesPersonId`\) when adding a filter expression and add the value of the filter \(for example, `djones`\) on the **Parameters** tab.

-   **Upsert** — Creates new Leads, Companies, Opportunities, Opportunity Roles, or Custom Objects in Marketo. If the object exists, updates it with the submitted values. The operation Upserts the objects in bulk by sending multiple documents in batches of 300, which is Marketo's limit.

-   **Delete** — Deletes objects, including Companies, Leads, Opportunities, and Custom Objects from Marketo's Lead Database. You provide the ID of the record to delete as a parameter. You cannot use Upsert to delete Opportunity Roles.

-   **Opportunity Roles Compound Key Query** — Further refine your search for Opportunity Roles by creating multiple filter expressions \(composite filters\). It requires you to use the compound key to query, such as externalOpportunityId, LeadId, and Role.

-   **Custom Objects Compound Key Query** — Further refine your search for Custom Objects by creating multiple filter expressions \(composite filters\). This action requires you to have the following permissions: **Read-Only Custom Object**, **Read-Write Custom Object**.


Marketo has two types of lists: static lists of fixed leads and smart lists that are dynamic collections of leads based on characteristics used in Smart Campaigns. You can access static lists only.

Partitioning can create confusion. When you create a Lead, Marketo stores the Lead in a partition within a workspace. You can have more than one partition in a workspace and more than one workspace. When you perform a query operation, unless you specify a partition, Marketo looks within the default partition for that object. If you then perform an Upsert operation, you can get an error message saying that object already exists. Because Marketo looks across all partitions, the object may be in another location.

## Options tab 

Click **Import Operation**, then use the Import wizard to select the object with which you want to integrate. The following table describes the default field definitions for each action type:

<TrackingDir />

<ReturnErrRes />

**List ID** \(Execute\)  
  The Marketo List ID that appears in the URL of the static list. For example, in the URL `https://app-\*\*\*\*.marketo.com/#ST3456A1` the List ID is 3456.
  
**Asynchronous Processing** \(Upsert\)  
 If selected, it uses asynchronous processing to immediately Upsert \(create or update\) Leads.
 
**Lookup Field/Dedupe Field** \(Upsert\)    
  Optional. Specify the field to filter and use for deduplication, whether to create or update an object record. For example, in you use the **Message** step and insert two company records. You use a **Data Process** step to split the records, and the **Map** step to map the Company profile from the **Message** step to the request profile in the Upsert operation. Finally, you use the Upsert operation to send two Company records. In this example, you use the **Lookup Field/Dedupe Field** and use the default externalCompanyId. As a result, it updates the first Company record, and creates the second record. This occurs because the default externalCompanyId exists for the first row and that record is updated. The second row does not exist and is therefore created. After running the operation, the response profile shows the status of the first Company record as updated, and the status of the second as created.

-   Companies — has four Dedupe filter fields: externalCompanyId \(default\), id, externalSalesPersonId, and company.

 -   Custom Objects — has two Dedupe filter fields: objectName and marketoGUID.

 -   Opportunities — has four Dedupe filter fields: externalSalesPersonId, externalCompanyId, externalOpportunityId, and marketoGUID.

-   Opportunity Roles — has three Dedupe filter fields: externalOpportunityId, leadId, and marketoGUID.


**Partition Name** \(Upsert\)  
 If your account uses lead partitions, it requires this field to identify the workspace.

**Fields \(Opportunity Roles Compound Key Query, Custom Objects Compound Key Query\)** - 
  Optional. Specify a comma-separated list of fields to return for each record in the query. If you leave this field blank, it returns marketoGuid, dedupeFields, updatedAt, and createdAt.

## Activity Types 

When querying for Lead Activities, you can enter either the name of the activity or the id number.

-   Visit Webpage \(1\)
-   Fill Out Form \(2\)
-   Click Link \(3\)
-   Send Email \(6\)
-   Email Delivered \(7\)
-   Email Bounced \(8\)
-   Unsubscribe Email \(9\)
-   Open Email \(10\)
-   Click Email \(11\)
-   New Lead \(12\)
-   Change Data Value \(13\)
-   Sync Lead to SFDC \(19\)
-   Convert Lead \(21\)
-   Change Score \(22\)
-   Change Owner \(23\)
-   Add to List \(24\)
-   Remove from List \(25\)
-   SFDC Activity \(26\)
-   Email Bounced Soft \(27\)
-   Delete Lead from SFDC \(29\)
-   SFDC Activity Updated \(30\)
-   Merge Leads \(32\)
-   Add to Opportunity \(34\)
-   Remove from Opportunity \(35\)
-   Update Opportunity \(36\)
-   Delete Lead \(37\)
-   Send Alert \(38\)
-   Send Sales Email \(39\)
-   Open Sales Email \(40\)
-   Click Sales Email \(41\)
-   Add to SFDC Campaign \(42\)
-   Remove from SFDC Campaign \(43\)
-   Change Status in SFDC Campaign \(44\)
-   Receive Sales Email \(45\)
-   Interesting Moment \(46\)
-   Request Campaign \(47\)
-   Sales Email Bounced \(48\)
-   Change Lead Partition \(100\)
-   Change Revenue Stage \(101\)
-   Change Revenue Stage Manually \(102\)
-   Change Status in Progression \(104\)
-   Enrich with Data.com \(106\)
-   Change Segment \(108\)
-   Call Webhook \(110\)
-   Sent Forward to Friend Email \(111\)
-   Received Forward to Friend Email\(112\)
-   Add to Nurture \(113\)
-   Change Nurture Track \(114\)
-   Change Nurture Cadence \(115\)
-   Share Content \(400\)
-   Vote in Poll \(401\)
-   Click Shared Link \(405\)

<OperationEnd />