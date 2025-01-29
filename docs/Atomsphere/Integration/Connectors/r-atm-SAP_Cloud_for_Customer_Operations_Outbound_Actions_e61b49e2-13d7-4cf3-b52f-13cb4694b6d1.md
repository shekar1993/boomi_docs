# SAP Business ByDesign operation’s outbound actions 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-e61b49e2-13d7-4cf3-b52f-13cb4694b6d1"/>
</head>


You can configure the SAP Business ByDesign operation to interact with SAP's operations in the Manage service.

The Create, Delete, Update and Upsert actions support the following SAP Business ByDesign node elements \(called “objects” in \):

-   Accounts — Maintain Bundle V1

-   Contact — Maintain Bundle

-   Materials — Maintain Bundle V1 \(Delete is unsupported\)

-   Leads — Maintain Bundle

-   Opportunities — Maintain Bundle

-   Social Media User Profiles — Maintain Bundle

-   Tickets — Maintain Bundle

-   Service Requests — Maintain Bundle

-   Activity Email — Maintain Bundle

-   Activity Task — Maintain Bundle

-   Activity Phone — Maintain Bundle

-   Activity Appointment — Maintain Bundle

-   Campaign — Maintain Bundle

-   Target Group — Maintain Bundle

-   Suppliers — MaintainBundle\_V1 \(Create, Update, Upsert\)

-   Purchasing Contract — ManagePCTinMaintain Bundle

-   Supplier Invoices — MaintainBundle \(Create\)

-   Purchase Orders — ManagePurchaseOrderInMaintainBundle

-   Sales Orders — MaintainBundle

-   Customer Invoices — MaintainBundle \(Create, Update, Upsert\)

-   Service Products — MaintainBundle\_V1 \(Create, Update, Upsert\)


**Note:** Some objects are available only in SAP Business ByDesign, while other objects are available only in SAP CRM On Demand.

SAP action codes \(`@actionCode`\) tell the web service how to process the transmitted message objects. When you use the Create, Update or Upsert action to create, update, or upsert a root object, you can specify an action code in the XML profile to perform different operations on child objects. The action codes and values are:

-   Action code 01 — Create

-   Action code 02 — Update

-   Action code 03 — Delete

-   Action code 04 — Save

-   Action code 05 — Remove

-   Action code 06 — No Action


For example, to update a root object \(Lead\) and delete one of its child objects \(Item\), create a process that has an Update action in the Operation component that updates the Lead root object. Then add a Map step in which you set the Item child object’s `@actionCode` to a default value of “03” \(Delete\).

## Create 

Use the Create action to interact with SAP’s “Create” operation in the Manage service. The created objects are put into a document batch, whose size you specify in the Operation component, then sent to the server.

## Delete 

Use the Delete action to interact with SAP’s “Delete” operation in the Manage service. At runtime you supply a single internal ID for the object record you want to delete. See the topic about parameter values to understand how to statically or dynamically define these values in a process for runtime.

You can use the Delete action to interact with SAP’s “Remove” operation in the Manage service. On the Operation component, select the Delete action and select **Do Remove**. The Delete action then behaves like the SAP “Remove” service. The system does not return an error message if the object does not exist.

In the Delete action you can specify a ChangeStateID to ensure that the object has not changed since the last time it was read. You can supply this value by using this format: `[id_property:]id_value[;change_state_id]`. The `id_property` is optional and indicates a field other than the InternalID on which to look up the value.

When specifying the `id_property`, this value must be equal to the input field on the corresponding message. For example, to delete an Account by UUID, specify `UUID: 91a002e169d7464ab2f79085824fbcc6` as the UUID field on the CustomerMaintainRequestBundleCustomer\_V1 message is UUID. To include the `change_state_id`, append it \(preceded by a semicolon\) to the input: `UUID: 91a002e169d7464ab2f79085824fbcc6;20130403204509.5898250`.

## Update 

Use the Update action to interact with SAP's "Update" operation in the Manage service and to provide "No\_Action" operations. On the Operation component, select the Update action and select **No Action**. If this option is selected, the Update action behaves like the SAP “No\_Action” operation. The Update action does not modify the root object. Select this option when you want to modify child objects but not their root object. The updated objects are put into a document of the batch size specified in the Operation component and are sent to the server.

The Update action allows you to specify a ChangeStateID to ensure the object has not changed since the last time it was read. You can change the ChangeStateID field on the XML profile being input.

## Upsert 

Use the Upsert action to interact with SAP’s “Save” operation in the Manage service. Upserted objects are put into a document batch size, whose size you specify in the Operation component, then sent to the server.

The Upsert action enables you to specify a ChangeStateID to ensure the object has not changed since the last time it was read. You can change the ChangeStateID field on the XML profile being input.

## Execute 

Use the Execute action to interact with an SAP Business ByDesign custom service. When you use the Import Wizard, enter the custom service’s ID so that it can be identified in the WSIL. The connector connects to the custom service and enables you to create, query by elements, read, or update the custom service. Custom fields are included in the XML profiles.