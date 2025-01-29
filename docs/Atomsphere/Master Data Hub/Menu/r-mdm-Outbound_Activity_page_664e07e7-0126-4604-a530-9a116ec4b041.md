# Outbound Activity page 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-15AF84BC-6925-4274-AB88-7A17750E83D3"/>
</head>


Selecting **Reporting** \> **Outbound Activity** opens the Outbound Activity page, which is used to view reports on outbound activity, which includes: pending source record update requests and previously delivered update requests. A delivery is recorded only upon acknowledgment by an integration process on behalf of the targeted source.

![Outbound Activity page](../Images/Reporting/mdm-ps-reporting-outbound-activity_9a39dcdd-865a-4713-883d-1c9ca2d82dc4.jpg)

## **Delete**/**Resend** 

The label and function of this button and menu are dependent on whether **Pending** or **Delivered** update requests are listed.

-   While **Pending** is selected, the button is labeled **Delete**. Clicking **Delete** opens a menu used to initiate a request to delete a pending update request\(s\) from the selected source’s channel.

    -   **Selected** — initiates a delete request applicable to update requests selected in the list below. This menu item is not present if no update requests are selected.

    -   **All that Match Applied Filter** — initiates a delete request applicable to update requests that match the filter\(s\) applied to the update requests list. This menu item is not present if filters are not applied.

    -   **All Pending Deliveries** — initiates a delete request applicable to all pending update requests.

    Upon selection of a **Delete** menu item, a confirmation dialog appears and takes focus. In the confirmation dialog:

    -   Clicking **OK** executes the request.

    -   Clicking **Cancel** cancels the request.

    :::note
    
    Deleting pending update requests can prevent the synchronization of source system data and master data from occurring in certain circumstances, particularly in the case of requests of type Create Record.

    :::note

    :::note
    
    This action is available only to administrators and users having a role with the MDM - Source Management privilege.

    :::

-   While **Delivered** is selected, the button is labeled **Resend**. Clicking **Resend** opens a menu used to initiate a request to resend a delivered update request\(s\) to the selected source on its channel— that is, propagate the current version of a golden record\(s\) — or in the case of a Reject Duplicate operation, the rejected entity or entities. There is a limit of 1,000 update requests that can be resent in a single request.

    -   **Selected** — initiates a resend request applicable to update requests selected in the list below, subject to the maximum. This menu item is not present if no update requests are selected or if the number of selections exceeds the maximum allowed resend requests.

    -   **All that Match Applied Filter** — initiates a resend request applicable to update requests that match the filter\(s\) applied to the update requests list, subject to the maximum. This menu item is not present if the number of matches exceeds the maximum allowed resend requests or if filters are not applied.

    -   **All Deliveries** — initiates a resend request applicable to all delivered update requests, subject to the maximum. This menu item is not present if the number of delivered requests exceeds the maximum allowed resend requests.

    Upon selection of a **Resend** menu item, a confirmation dialog appears and takes focus. In the confirmation dialog:

    -   Clicking **OK** executes the request.

        -   For each golden record having an established link to the source, an update request specifying an Update or Delete operation is propagated. If an update request containing an entity representing the same golden record is already pending on the channel, the new request effectively replaces or is merged into the existing request, depending on whether the channel is configured to propagate entities that contain all fields or only changed fields. If the new request specifies an Delete operation and the existing request specifies an Update operation, the existing request is changed to specify a Delete operation.

        -   For each golden record having a pending link to the source, an update request specifying a Create Record operation is propagated.

    -   Clicking **Cancel** cancels the request.

    :::note
    
    This action is available only to administrators and users having a role with the MDM - Source Management privilege.

    :::


## **Pending** 
While **Pending** is selected, pending update requests for the selected repository, domain, and source are listed below, subject to filtering using the controls above the list.

## **Delivered** 

While **Delivered** is selected, delivered and acknowledged update requests for the selected repository, domain, and source are listed below, subject to filtering applied using the controls above the list.

## **Repository:domain** 
Selects the repository and domain for which to list pending or delivered update requests. The selections persist across instances of the loading of the page, even across sessions.

## **Source** 

Selects the source attached to the selected domain for which to list pending or delivered update requests. The selection persists across instances of the loading of the page, even across sessions.

## Filters 

The displayed update requests list can optionally be filtered using one or more of the following types of criteria:

-   Operation Type

-   Created Date

-   Golden record ID

-   Held \(pending update requests list only\)

-   Not Held \(pending update requests list only\)

-   Delivery ID \(delivered update requests list only\)


While a filter is applied, a button for that filter appears to the left of the **Add Filter** button. The button’s label shows the specified criterion — for example, **Type:** Create Record. Clicking ![](../Images/Common/main-ic-x-white-in-gray-circle-16_0abafeee-d5e7-4888-9bfb-475b11b6d00f.jpg) on the button clears the filter. If a dialog is used to apply the filter, clicking elsewhere on the button opens that dialog for the purpose of modifying the criterion.

**Name**  
**Description**

**Add Filter**  
Lists filter types for selection:

-   Operation Type — Opens the dialog used to apply filtering by operation type.

    ![Dialog used to filter the update requests list by operation type](../Images/Reporting/mdm-db-reporting-filter-optype_e2255f60-025d-4460-9149-f2b71a17c354.jpg)

       -   **Operation Type** — Sets the operation type by which to filter:

       -   Create Record — Selects only update requests specifying create operations.

    -   Update Record — Selects only update requests specifying update operations.

    -   Delete Record — Selects only update requests specifying delete operations
    -   Restore Record — Selects only update requests specifying restore record operations.

    -   Reject Contributed Entity — Selects only update requests specifying entities rejected as duplicates of existing source entities. 

    -   **Apply** — Sets the filter criterion, closes the dialog and applies the filter.

    -   **Cancel** — Closes the dialog without applying a filter.

-   Created Date — Opens the dialog used to apply filtering by time span.

     ![Dialog used to filter the update requests list by time span](../Images/manage-ps-process-reporting-time-date-filter_95c68fd5-c109-40b0-8b4b-9fde06210fe6.jpg)

    -   **Past Hour** — Selects the past hour.

    -   **Past 24 Hours** — Selects the past 24 hours.

    -   **Past Week** — Selects the past week.

    -   **Date Range** — Enables the selection of a custom time span. The default is the past hour.

        -   **From** — Sets the starting time and date:

            -   time — Type a value in the range 00:00–23:59, or select a :00 or :30 value.

            -   date — Type the value or select it from the calendar.

        -   **To** — Sets the ending time and date:

            -   time — Type a value in the range 00:00–23:59, or select a :00 or :30 value.

            -   date — Type the value or select it from the calendar.

        -   **Apply** — Sets the selected time span, closes the dialog and applies the filter.

        -   **Cancel** — Closes the dialog without setting the time span.
-   Golden Record ID — Opens the dialog used to apply filtering by golden record ID.

    ![Dialog used to filter the update requests list by golden record ID](../Images/Stewardship/mdm-db-domain-data-filter-grid_c4904772-21ea-40c8-ac39-cea3fd8dae19.jpg)

     -   **Golden Record ID** — Sets the golden record ID.

     -   **Apply** — Sets the filter criterion, closes the dialog and applies the filter.
     -   **Cancel** — Closes the dialog without applying a filter.

    The filter cannot be applied while filtering by the Reject Contribution Entity operation is applied.

-   Held — Filters by update requests that are held. An update request is held if it is for a golden record that references a golden record that is not linked to a record in the source and then only if the underlying domain model enforces referential integrity for update requests.

-   Not Held — Filters by update requests that are not held.

-   Delivery ID — Opens the dialog used to apply filtering by delivery ID. A delivery ID is assigned to each batch of propagated update requests.

    ![Dialog used to filter the update requests list by delivery ID](../Images/Reporting/mdm-db-reporting-filter-deliveryID_fe9d2fc5-7a72-4e35-beae-3e6b88d53eaa.jpg)

    -   **Delivery ID** — Sets the delivery ID.

    -   **Apply** — Sets the filter criterion, closes the dialog and applies the filter.

     -   **Cancel** — Closes the dialog without applying a filter.


**![](../Images/main-ic-x-white-in-red-circle-16_0d0c5dc5-1c5e-4117-8a58-92c5e050ec5b.jpg) Clear All Filters**  
Clears all filters.

## **![](../Images/Common/main-bt-arrows-green-curved-refresh_dcd1e41a-a0a2-4a2f-9608-4d6d3897c09e.jpg) Refresh** 

Refreshes the reports list.

## Update requests list 

-   While **Pending** is selected, pending update requests for the selected repository, domain, and source are listed, subject to filtering.

-   While **Delivered** is selected, delivered and acknowledged update requests for the selected repository, domain, and source are listed, subject to filtering.


**check box**  
Select the update request for deletion from the channel in the case of a pending request or for resending in the case of a delivered request. Turning on or off the check box in the column heading simultaneously selects or deselects all listed update requests.

**Record Title/ID**  
If a golden record title format is specified in the domain model and one or more title format fields are populated, the Record Title column shows the title of the created, updated, or end-dated golden record. Otherwise, the Record ID column shows the ID of the golden record.

The title or ID is a link to the golden record’s detail view.

:::note

The manner in which this column is populated for a Reject Contributed Entity operation differs from other operations in that if a golden record title format is not specified or none of the title format fields are populated, the Record ID column shows the source entity ID.

:::

**Type**  
 The type of the requested operation:

-   Create Record — Create a record in the source system.

 -   Update Record — Update the target source record.

-   Delete Record — Delete the target source record.

 -   Restore Record — Restore the target source record.

 -   Reject Contributed Entity —This is a special type of operation which is indicative of the rejection of a quarantined entity. If action in the source system is required in response to this operation, the Boomi DataHub to source integration process should initiate that action.




**Created**  
Date and time at which the update request was created in the delivery batch.

**Held**  
(Pending update requests only) If the update request is held, ![](../Images/main-ic-clock-blue-border-and-hands_ee34e712-50b6-4cde-8dda-d6c417ec5d3e.jpg) indicates that status. Held update requests are undeliverable. Hovering on ![](../Images/main-ic-clock-blue-border-and-hands_ee34e712-50b6-4cde-8dda-d6c417ec5d3e.jpg) shows an error message. An update request is held if it is for a golden record that references a golden record that is not linked to a record in the source and then only if the underlying domain model enforces referential integrity for update requests.

**Delivery ID**  
\(Delivered update requests only\) ID of the delivered batch of update requests in which this request was included. This ID is referenced in the acknowledgment.

**Delivered**  
\(Delivered update requests only\) Date and time at which the batch containing the update request was most recently propagated to the channel.

**Note:** For an update request specifying a Reject Contributed Entity operation, the date and time of the request appears here.

**Acknowledged**  
\(Delivered update requests only\) Date and time at which the batch containing the update request was acknowledged.

By default the list is sorted by the Created column in reverse chronological order. Clicking a column heading selects the column by which to sort the list. Clicking the selected column reverses the sort order.

## List navigation 

In addition to the scroll bars, the following controls are used to navigate the update requests list:

**Name**  
**Description**

**![First](../Images/Common/main-bt-list-first_4d860db1-a3bf-4ccb-b1ae-3718146313a6.jpg)**  
Loads the first update requests.

**![Previous](../Images/Common/main-bt-list-previous_fecf5522-8e9f-4a4a-b5f8-a70b4d5be5c0.jpg)**  
Loads update requests immediately prior to those currently loaded.

**x-y of z**  
Indicates the number and relative chronological position of the currently loaded update requests — for example, “51-75 of 2086”. The total count shown reflects currently applied filtering.

**![Next](../Images/Common/main-bt-list-next_fa70ff4f-be87-489f-8a03-c05acee8e2c0.jpg)**  
Loads update requests immediately subsequent to those currently loaded.

**![Last](../Images/Common/main-bt-list-last_1750adde-aef7-4874-8e74-c9a0d692981b.jpg)**  
Loads the last update requests.