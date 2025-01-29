
import OperationEnd from './_operationEnd.md'


# Aria – Partner operation 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-20144275-c399-4e6d-b791-cc5b63ca3746"/>
</head>


The Aria – Partner operation defines how to interact with your Aria account instance.

The operation represents a specific action \(such as Query, Create, and so on\) to be performed against a specific Aria object type \(Account, Plans, Statements, Transactions, Order, Usages and so on\). Not all objects are available for each action. You must create a separate Operation component for each action and object combination required for your integration.

The Aria – Partner operation supports the following actions:

-   Inbound — Query

-   Outbound — Create, Execute, Update


**Note:** Contact your Aria representative to learn more about the API requirements for Aria and how to access other resources in the user community for field definitions.

## Query 

This inbound action requires you to supply static or dynamic request parameters \(filters\) to control the object records selected from Aria. A single Query request can return zero or more record documents.

After selecting the Query connector action and using the **Import Wizard**, you can add query filters.

:::note

**Note:** The current Aria connector does not allow nested expressions in query strings. `SupportNestedLogicalGroup` is set to false in the current version of the connector.

:::

This topic describes how you can configure the Aria – Partner operation to send data to an Aria instance. For all outbound operations, request XML data needs to be sent into the connector that corresponds with the defined XML profile. In most cases, request documents are the destination output of a map. However, you can also set parameters on the outbound connector's Parameter tab within the process to supply static or dynamic request values.

## Create 

This outbound action creates new records in the Aria object defined in the Create operation. The internal ID field is generated automatically for each document sent to the operation. Upon successful record creation, the operation automatically returns an XML response with the newly generated internal ID, creation date, and so on.

## Execute 

The following services and objects are available when you use the outbound Execute action:

-   Other-Generate\_Random\_String

-   Other-Validate\_Payment\_Information

-   TransactionInvoice-Pre\_Calculate\_Invoice

-   Other-Issue\_Refund\_To\_Account

-   Account-Send\_Arc\_Threshold\_Email


These actions directly run the objects. The Aria database retrieves the data, parses the data into an XML structure in the response profile, and returns a document for each logical record.

## Update 

This outbound action updates existing records in the Aria object defined in the Update operation. You must supply the internal **ID** field in the request to update the existing object record. If this internal ID is not available in your source data, you could use a connector call function to query data based on a value \(for example: Account-Master Plan – Account No, Plan No\).

## **Options** tab 

Click **Import Operation**, then use the Import wizard to select the object with which you want to integrate. The following table describes the default field definitions for each action type:

**Object** - 
Displays the object type that you selected in the **Import Operation** wizard.


**Tracking Direction** - 

Select the document tracking direction for the operation, either **Input Documents** or **Output Documents**. This setting enables you to choose which document appears in **Process Reporting. Start** steps always track output documents regardless of your selection.

:::note

If the tracking direction is read-only, the feature to change the direction is either unavailable or the developer set the configuration to read-only. The default value you see shows you which document appears in **Process Reporting**.

:::

**Request/Response Profile**   
 \(Create, Execute, Update only\) The XML profile definition that represents the XML structure sent or received by the connector.

**Limit** \(Query only\)  
The maximum number of results to return. The default is 200 results.

**Query String Modifier** \(Query only\)  
The current version of the connector does not use this field. Previously, Aria Integration Services used this field to append an additional query string. For example: `AND acct_no=12 OR acct_no=15`.

<OperationEnd />

