# Operation component's query definition tabs

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-60af52b6-ebca-4448-b12e-0bb48f14731d"/>
</head>


When you create a Query operation, the bottom half of a connector's operation component page may contain configuration options that enable you to define your query. You may be able to do one or more of the following: select an object type \(on the Objects tab\), choose the fields to return \(on the Fields tab\), add filters to limit the results of your query \(on the Filters tab\), and select sorting options \(on the Sorts tab\).

## Objects tab

On the left side of the query window is a tree representing the objects that are returned by the operation. Click the object name \(for example, "Opportunity"\) to display the configuration options to the right. If you selected any related child or parent objects in the Import Wizard, they are displayed here as well. You can configure the fields, filters, and sorting options for each object type.

## Fields tab

Use the Fields tab to select the fields to be returned by the operation. By default, all fields for a highlighted object are checked. This is a typical setting for most integration scenarios. Clearing a field's check box removes the field from the main query syntax. To quickly select or clear all the fields for a given object, use the check box next to the object's name at top of the field list.

For best performance, select only the fields needed for the integration process. If you do not select a field, it is always blank in the response profile and you will get no indication of that unless the response profile has it flagged as a mandatory field.

If you re-import an operation, any newly added fields are automatically selected. It may be necessary to clear these fields if they are not used in the integration process.


## Filters tab

Adding filters enables you to limit the records returned to those that match certain criteria. The filters essentially represent the input parameters for this operation.

Provide a dynamic or static parameter values to pass into the filter\(s\) when the operation is used in a Connector step or a connector call within a Decision step, Map function, or other process step.

Filters on child or parent objects *do not affect the primary object.* For example, your goal is to query all accounts and return only contacts for the state of New York. If you create a filter on the Contact object to filter by `State`, you get all account records but the related contact records for each account contain contacts from New York. If your integration scenario requires returning only contacts from New York, make Contact the primary object \(go through the Import Wizard again\) and select Account as the related parent object.



| Name                     | Description                                                  |
| ------------------------ | ------------------------------------------------------------ |
| **Logical - AND/OR**         | Used to define AND or OR clauses within the query. For example, you can use this functionality to extract all Employee records that begin with the last name M. Use the Operator field to the right to select AND or OR. Choose AND to return records that match all the expressions; choose OR to return records that match any of the expressions. |
| **Add Logical Sub Group**    | Used to add a sub clause to the existing clause.             |
| **Insert Logical Sub Group** | Used to add a clause at the same level as the selected clause. |
| **Delete Logical Group**     | Used to delete the selected clause or sub clause.            |
| **Add Expression**           | When defining a logical clause or sub clause, define an expression for the clause. This enables you to select a filter name, field, and operator. |
| **Insert Expression**        | Used to add an expression at the same level as the selected expression. |
| **Delete Expression**        | Used to delete the current expression.                       |
| **Filter Name**              | A reference name for the expression. Common practice is to define the selected field name and associated operator (e.g., AccountName=, Type!=). |
| **Field**                    | The field name is used as an expression in the query request (e.g., AccountName, Type). |
| **Operator**                 | The operator defines how a request input parameter should be compared against the filter. *The filter operator choices vary from connector to connector.<br />*Examples are*: AND, OR, Like, Equal To, Not Equal To, Greater Than, Greater Than or Equal To, Less Than, Less Than or Equal To, In, Not In, Contains, Not Contains.<br />*The Contains and Not Contains operators are to be used with the Capabilities field.* |


## Sorts tab

You can sort the results by any field in the object. Click the **Add** icon to specify one or more fields by which to sort. Sorting logic is applied in the order specified. Click the up or down arrow icons to adjust the order. Click the **Delete** icon to remove sorting.

|Name|Description|
|----|-----------|
|**Sort Field**|Use the **Browse** icon to select the field by which to sort.|
|**Sort Order**|The sort order choices vary from connector to connector. In some connectors, you can sort in ascending or descending order and put null \(blank\) values first or last.|