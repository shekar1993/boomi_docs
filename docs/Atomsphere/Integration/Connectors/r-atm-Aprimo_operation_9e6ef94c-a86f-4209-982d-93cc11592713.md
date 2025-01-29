# Aprimo operation 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-9e6ef94c-a86f-4209-982d-93cc11592713"/>
</head>


The Aprimo operation defines how to interact with your Aprimo Marketing Studio On Demand account.

The operation represents a specific action \(such as Get and Create\) to be performed against a specific Aprimo object type \(for example, Activities, Programs, and Invoices\). Not all objects are available for each action. You must create a separate operation component for each action and object combination required for your integration.

The Aprimo operation supports the following actions:

-   Get — The inbound Get operation supplies an ID for the Aprimo record that you want to retrieve.

-   Query — After you select the inbound Query connector action and use the **Import Wizard**, you can use the **Fields** tab to select the fields the query returns. Some fields are in the format `<field_name>/value`. Nest the `value` element selected to include it in the results and to process it successfully. If you do not select any fields, the results include all fields. The Aprimo connector has field selection three levels deep in the structure. You can add filters that limit the records returned to match certain criteria.

-   Create — The outbound operation creates records in the Aprimo object defined in the operation. You can set the **Batch Count** field on the **Operation** component to group requests.

-   Delete — The outbound operation removes records in the Aprimo object defined in the operation.

-   Update — The outbound action updates records in the Aprimo object defined in the operation. You can set the **Batch Count** field on the **Operation** component to group requests.


## **Options** tab 

Click **Import Operation**, then use the Import wizard to select the object with which you want to integrate. The following table describes the default field definitions for each action type:

**Object** - 
Displays the object type that you selected in the **Import Operation** wizard.


**Tracking Direction** - 

Select the document tracking direction for the operation, either **Input Documents** or **Output Documents**. This setting enables you to choose which document appears in **Process Reporting. Start** steps always track output documents regardless of your selection.

:::note

If the tracking direction is read-only, the feature to change the direction is either unavailable or the developer set the configuration to read-only. The default value you see shows you which document appears in **Process Reporting**.

:::

**Request Profile** \(Create, Delete and Update only\)  
The XML profile definition that represents the XML structure sent by the connector.

**Batch Count** \(Create and Update only\)  
The batch size for grouping Create and Update requests. The default is 200.

**Maximum Page Size** \(Query only\)  
The maximum number of results to return per page. The default is 100. Each result is put into one document. When querying large data sets, yo can reduce the number of requests required to retrieve a full data set by increasing the maximum page size.

**Query Limit** \(Query only\)  
The maximum number of results to return. The default is 0, which returns all results.

## Tracking tab

See the topic [Connector operation’s Tracking tab](../Process%20building/r-atm-Connector_operations_Tracking_tab_8a03f547-738a-448c-bb0f-594bad806cfe.md) for more information.

## Caching tab

See the topic [Connector operation’s Caching tab](../Process%20building/r-atm-Connector_operations_Caching_tab_f46b49d6-25bc-4337-ade1-9c67817b8d74.md) for more information.