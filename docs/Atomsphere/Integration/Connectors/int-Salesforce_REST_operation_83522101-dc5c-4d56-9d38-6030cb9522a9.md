# Salesforce REST operation

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-83522101-dc5c-4d56-9d38-6030cb9522a9"/>
</head>


The Salesforce REST operation defines how to interact with the Salesforce account and represents a specific action to perform against a specific Salesforce record type or object.

Create a separate operation component for each action/object combination that your integration requires.

The Salesforce REST connector supports the following actions:

-   Inbound: Custom SOQL Query, Query, CSV Bulk API v2.0
-   Outbound: Create, Create Tree, Update, Upsert,  Delete, CSV BULK API v2.0

## Browse fields
The fields below are only visible while importing the operation. 

**Level of Parents** \(Query\) - The level of depth of parent relationships, choose an integer between 0 and 5. 0 means do not import any parents, 5 means import up to 5 levels of parents. REST API supports Query up to 5 levels of parents, but Bulk API v2.0 supports 1 level of parents.

**Import Children \(Query\)** - The level of depth of children relationships. 
* **None** :  do not import any children
* **Without Parents** : import only children without their parents
* **With Parents** : import children and their direct parents

**Level of Children** \(Create Tree\) - The level of depth of children relationships, choose an integer between 0 and 5. 0 means do not import any children, 5 means import up to 5 levels of children.


## Options tab

:::note Attention 

The `@Type` attribute is now automatically injected into the records node when executing a Composite API request (API REST, batch size > 1) for the **Create**, **Update**, and **Upsert** operations, eliminating the need for you to enter it manually in the input XML document. Input document sizes larger than 1 MB will result in an application error. The 1 MB threshold can be updated with the container property `com.boomi.container.connector.sizeLimitedUpdateOperation.maxSize`. The value is defined in bytes. Setting it to -1 disables size validations. See the topic [Properties panel, custom tab](../Integration%20management/r-atm-Properties_panel_Custom_tab_5fa074ca-cada-4746-946d-42b20c67cf74.md) to learn more about setting container properties.

:::

Click **Import Operation**, then use the Import wizard to select the object to integrate. When you configure an action, the following fields appear on the **Options** tab.

**Operation API** (Create, Custom SOQL Query, CSV Bulk API v2.0, Query, Update, Upsert, Delete) - A dropdown box to determine the API to be used for operations. You can select Bulk API v2.0, REST API, and Composite API.

* **External ID Value** (Upsert) - An overridable operation field to indicate the object to update in the Upsert operation. This is a conditional field that is displayed when the Operation API is configured as REST API. If left blank, a new object will be created. 

**Limit Number of Documents** \(Query\) - An overridable operation property to limit the number of returned documents. This value is unchecked by default. 

**Number of Documents** \(Query)\ - A conditional operation property that is visible when **Limit Number of Documents** is checked. This value must be an integer.

**Include Deleted** \(Optional\) \(Custom SOQL Query, Query\) - Select this checkbox if you want to include deleted records in the result. This value is unchecked by default. 

**Log SOQL** \(Optional\) \(Custom SOQL Query, Query\) - Select this checkbox if you want the full SOQL to appear in the process log after a process is executed. The SOQL includes both the SOQL and the input parameters. Having the full SOQL is useful when troubleshooting process issues, such as when a request in your SOQL fails. This value is unchecked by default.

**Query Page Size** \(Custom SOQL Query, Query, CSV Bulk API v2.0\) - Specifies the number of returned records in a single request. For the REST API, the minimum is 200, and the maximum is 2000. There is no limit for Bulk APIs. If you don’t provide a value for this parameter, the server uses a default value based on the service (2000).

**REST Request Headers** \(Optional\) \(Create, Create Tree, CSV Bulk API v2.0, Custom SOQL Query, Query, Update, Delete, Upsert\) - Adds additional headers to each request. Also available in the Browse field.

**Batch Count** \(Create, Update, Delete, Upsert, Update\) - Use this field to adjust the count of data (documents) to send to Salesforce in one batch. The value must be between 1 and 200. The default value is 200 MB. The **Batch Count** is available when Composite API is selected.

**All or None** \(Create, Update, Upsert, Delete) - This conditional field is displayed when **Composite API** selected. When checked, the **allOrNone** header will be added to each batch separately. This value is unchecked by default.

**Batch Size** \(Create, Update, Delete, Upsert, Update\) - Use this field to adjust the amount of data (documents) to send to Salesforce in one batch in MB. The value must be between 1 and 150 MB. The default value is 10 MB. The **Batch Size** is only available when Bulk API v2.0 is selected.

**CSV Field Names** \(Create, Update, Upsert\) - Use this field to indicate comma separated header values, or leave it empty to use all the fields as headers with no External Reference Fields. **CSV Field Names** is only available when Bulk API v2.0 is selected.

**Assignment Rule ID** \(Optional\) \(Create, Create Tree, CSV Bulk API v2.0, Update, Upsert\) - Represents the ID of an assignment rule to run for a Case or a Lead. The assignment rule can be active or inactive. The ID can be retrieved by querying the `AssignmentRule` object.
* **TRUE** : Active assignment rules are applied for created or updated Accounts, Cases, or Leads. This value is not case sensitive.
* **FALSE** : Active assignment rules are not applied for created or updated Accounts, Cases, or Leads. This value is not case sensitive.
* **Valid AssignmentRule ID** : The given `AssignmentRule` is applied for created Accounts, Cases, or Leads.

**Return Updated Record** \(Update\) - When checked, it will execute the Composite request to return the updated record after successfully updating. **Return Updated Document** is only applicable when Batch Count equals 1. This value is unchecked by default.

**External ID Field Name** \(Upsert, CSV Bulk API v2.0\) - The external ID field in the object being updated. Field values must also exist in input data. The Id field is allowed as **External ID Field**.

**Column Delimiter** \(CSV Bulk API v2.0\) - This dropdown box indicates the column delimiter used for CSV job data. 

**Line Ending** \(CSV Bulk API v2.0\) - This dropdown box indicates the line ending character that marks the end of a data row in CSV job data.

**Object** \(Required\) \(CSV Bulk API v2.0\) - The object type for the data being processed. Use only a single object type per job.

**Page Size** \(CSV Bulk API v2.0\) - Specifies the number of records returned in a single request. If you don’t provide a value for this parameter, the server uses a default value based on the service.


## Create

This action creates new records in the Salesforce object defined in the Create operation. The internal "ID" field is generated automatically for each document sent to the operation. The operation supports REST API and Bulk API v2.0.0.

## Update

This action updates existing records in the Salesforce object defined in the Update operation. Supply the internal "ID" field in the request to update the existing object record. If the internal ID is not readily available in your source data, consider using a Connector Call function to Query data based on a standard value such as Name. The operation supports REST API and Bulk API v2.0.

## Custom SOQL Query

This action retrieves one or more records from an object using certain SOQL commands, which are not available in other operations. It can import XML profile elements. The operation supports REST API and Bulk API v2.0.

## Query

This action retrieves multiple records related to one Salesforce object. By importing a generated XML profile element, you can see the whole table. It supports filtering.

Query operation performs a SELECT on the specified Salesforce Object to retrieve the specified fields. You can apply filters on the Salesforce Object and sort orders to order the retrieved data.

The operation supports REST API and Bulk API v2.0. It supports Parent/Child relationships in Salesforce up to 5 levels of parents.

The **Import Wizard** builds an object list. After you select an object, the wizard logs into Salesforce and creates an object from all the children and the parents in the generated profile up to the “Level of parents" field value.

-   Use filters to define multiple expressions and group them into logical sub-groups to create sophisticated query logic. The operator at the logical group level defines how the multiple expressions and/or logical sub-groups within that logical group are evaluated.
-   Use the In and Not In filter operators in a Query request to generate IN and NOT IN SOQL comparisons as part of the WHERE clause. Specify the input parameter as a comma-separated list of values. For example, to find all objects having a ‘state’ field value of ‘pa’ or ‘nj’, set up a filter for the ‘state’ field using the In operator. Specify the input parameter as pa,nj. The WHERE clause generated in SOQL is WHERE state IN \('pa','nj'\).

    :::note
    
     Salesforce has certain character limits for SOQL that are of interest, as they may help you plan how to construct the SOQL. For example, you can determine how many values to allow in the comma-separated list of values. To learn more, see the Salesforce article [SOQL and SOSL Limits for Search Queries](https://developer.salesforce.com/docs/atlas.en-us.salesforce_app_limits_cheatsheet.meta/salesforce_app_limits_cheatsheet/salesforce_app_limits_platform_soslsoql.htm).

    :::

-   Use the Includes and Excludes filter operators in a Query request to filter selected fields from a multi-select list \(where multiple fields can be selected\). For example, on a job application form an applicant can select multiple interests such as “music, programming, sports.” The Includes filter retrieves data that contains any of the specified values \(music or programming or sports\) in the SOQL statement. The Excludes filter retrieves data that does not contain any of the specified values.

    :::note 
    
    Use the Include or Exclude filters only on multi-select lists. Do not use In or Not In to filter multi-select lists. That combination creates bad results without an execution error. Do not use the Include or Exclude filters to filter non-multi-select lists. That combination results in an execution error.

    :::


## Delete

This action deletes an existing record in the Salesforce object defined in the Delete operation. You must supply the internal "ID" field in the request to delete the existing object record. If the internal ID is not readily available in your source data, consider using a Connector Call function to Query data based on a standard value such as Name. The operation supports REST API and Bulk API v2.0.

## Upsert

This action is a convenient way to perform common "insert-new-or-update-existing" integration. Instead of performing a lookup against Salesforce \(the destination system\) to determine if a given record exists and then perform separate insert or update mappings and calls accordingly, simply perform one map to the Upsert request and let Salesforce determine whether to perform an insert or update. To use this feature, customize the particular Salesforce object to designate at least one field as the External ID. Because objects can have multiple External IDs defined, select the appropriate object for the operation. The operation supports REST API and Bulk API v2.0.

## CSV Bulk API v2.0

The Salesforce REST connector supports executing operations on CSV files. The result of these operations will be CSV files as well. It has 6 main operations \(Insert, Delete, Update, Upsert, Query and Query All\).

:::note

To use Reference fields, add the reference in the format \[element\].\[child element\] as one of the fields in the header record.

:::

## Create Tree 

This action creates a `sObject` tree with a root record of the specified type defined in the Create Tree operation. 
The tree can be up to five levels deep. See the [Salesforce Developer Docs](https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_composite_sobject_tree.htm) 

## Archiving tab

See the topic [Connector operation’s Archiving tab](../Process%20building/r-atm-Connector_operations_Archiving_tab_061fbf70-1034-4bf3-b795-e952f9338dbe.md) for more information.

## Tracking tab

See the topic [Connector operation’s Tracking tab](../Process%20building/r-atm-Connector_operations_Tracking_tab_8a03f547-738a-448c-bb0f-594bad806cfe.md) for more information.

## Caching tab

See the topic [Connector operation’s Caching tab](../Process%20building/r-atm-Connector_operations_Caching_tab_f46b49d6-25bc-4337-ade1-9c67817b8d74.md) for more information.