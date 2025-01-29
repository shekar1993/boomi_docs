# Inbound Activity page 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-FA6CDBB4-3489-466F-8C51-BABF4D967D1D"/>
</head>


Selecting **Reporting** \> **Inbound Activity** opens the Inbound Activity page, which is used to view reports on previously processed incoming batches. A report is specific to a repository, domain and source for batches completed or staged during a one-minute span.

After receiving a small entity batch, Boomi DataHub may wait several seconds to receive additional batches. In this scenario, Boomi DataHub combines small batches and applies a single batch ID when processing.

![Inbound Activity page](../Images/Reporting/mdm-ps-reporting-inbound-activity_eb8a8ea8-7ad7-41c4-be68-5a6ed1f895d8.jpg)

## Time span filter 

The reports list is filtered by a specified time span. The button label indicates the currently applied time span. Clicking the button opens the dialog used to set the time span. The default is **Past Hour** unless another time span has been explicitly saved as the default.

![Dialog used to filter the reports list by a time span](../Images/manage-ps-process-reporting-time-date-filter_95c68fd5-c109-40b0-8b4b-9fde06210fe6.jpg)

**Name**
<br />**Description**

**Past Hour**
<br />Selects the past hour.

**Past 24 Hours**
<br />Selects the past 24 hours.

**Past Week**
<br />Selects the past week.

**Date Range**
<br /> Enables the selection of a custom time span. The default is the past month.

-   **From** — Sets the starting time and date:

    -   time — Type a value in the range 00:00–23:59, or select a :00 or :30 value.

    -   date — Type the value or select it from the calendar.

-   **To** — Sets the ending time and date:

    -   time — Type a value in the range 00:00–23:59, or select a :00 or :30 value.

    -   date — Type the value or select it from the calendar.


**Apply**
<br />Sets the selected time span, closes the dialog and applies the filter.

**Cancel**
<br />Closes the dialog without setting the time span.

## Filters

The reports list can optionally be filtered using one or more of the following types of criteria:

-   Repositories

-   Model — domain

-   Source

-   Has Quarantined Records

-   Has Created Records

-   Has Deleted Records


While a filter is applied, a button for that filter appears to the left of the **Add Filter** button. The button’s label shows the specified criterion — for example, **Model:** Employees. Clicking ![](../Images/Common/main-ic-x-white-in-gray-circle-16_0abafeee-d5e7-4888-9bfb-475b11b6d00f.jpg) on the button clears the filter. If a dialog is used to apply the filter, clicking elsewhere on the button opens that dialog for the purpose of modifying the criterion.

**Name**
<br />**Description**

**Add Filter**
<br />Lists filter types for selection:

-   Repositories — Opens the dialog used to apply filtering by repository. In that dialog clicking the check box for a repository selects that repository.

    ![Dialog used to filter the reports list by repository](../Images/Reporting/mdm-db-reporting-filter-repository_9211d549-d549-42d6-ac5c-5b62444a3ce7.jpg)

    -   **Apply** — Sets the filter criterion, closes the dialog and applies the filter.

    -   **Cancel** — Closes the dialog without applying a filter.

-   Model — Opens the dialog used to apply filtering by model.

    ![Dialog used to filter the reports list by model](../Images/Reporting/mdm-db-reporting-filter-model_efaf498d-cfd1-452d-8e97-05115094b0b8.jpg)

    -   **Model** — Selects the model by which to filter.

    -   **Apply** — Sets the filter criterion, closes the dialog and applies the filter.

    -   **Cancel** — Closes the dialog without applying a filter.

-   Source — Opens the dialog used to apply filtering by source.

    ![Dialog used to filter the reports list by source](../Images/Reporting/mdm-db-reporting-filter-source_123c8933-7034-417d-b439-b25d8c8a8089.jpg)

    -   **Source** — Selects the source by which to filter. The selection MDM specifies single-entity batches submitted via **Edit this record** in golden record detail view in .

    -   **Apply** — Sets the filter criterion, closes the dialog and applies the filter.

    -   **Cancel** — Closes the dialog without applying a filter.

-   Has Quarantined Records — Filters by batches from which entities were quarantined.

-   Has Created Records — Filters by batches from which golden records originated.

-   Has Deleted Records — Filters by batches which resulted in the deletion of golden records.


**![](../Images/Common//main-ic-x-white-in-red-circle-in-box-28x31_42b3d3dc-56b6-4549-a3c3-39b7e6f4fd0d.jpg) Clear All Filters**
<br />Clears all filters.

**![icon](../Images/Stewardship/main-bt-save-filters_461f2559-fa09-4f97-812f-d5390d8c10da.jpg) Save current filters as default view**
<br />Saves the currently applied filters as defaults for application to the reports list when Inbound Activity reloads.

## **![](../Images/Common/main-bt-arrows-green-curved-refresh_dcd1e41a-a0a2-4a2f-9608-4d6d3897c09e.jpg) Refresh**

Refreshes the reports list.

## Result type filter 
The reports list can optionally be filtered by processing results:

**Name**
<br /> **Description**

**All**
<br />Filtering by results is not applied. This is the default.

**Errors**
<br />Show only reports referencing batches that were processed with errors.

**Successes**
<br />Show only reports referencing batches that were processed successfully.

## Reports list 

Lists batch reports, subject to filtering applied using the controls above the list. The list is sourced from the repository with updates occurring every five minutes.

Each report includes the following:

**Name**
<br />**Description**

**status**
<br />Status of the subject batches:

-   ![Green dot icon](../Images/main-ic-circle-green-20x22_0a620eac-494b-4d65-9f1f-6b372abe7acd.jpg) All subject batches were processed successfully — this does not mean there were not any quarantined entities. Hovering the pointer on this icon displays the help text “Success”.

-   ![](../Images/main-ic-bar-white-on-red-circle-20_bb816599-0e68-436e-a92a-dafa82affda4.jpg) At least one of the subject batches was processed with errors. Hovering the pointer on this icon displays the help text “Errors”.


**Report Time**
<br />Starting time of the one-minute span to which the report applies. This is a link to the Batch Report detail view, in which you can view details about the subject batches.

**Repository**
<br />Repository on which the target domain for the subject batches is hosted.

**Model**
<br />Target domain for the subject batches.

**Source**
<br />Source from which the subject batches were contributed.

**Batch Count**
<br />Count of the subject batches.

**Entities**
<br />Aggregate count of entities in the subject batches.

:::note

Any difference between this count and the sum of the aggregate counts of quarantined entities plus the sum of the aggregate counts of golden records created, updated, and deleted, is attributable to entities not quarantined but for which there was not an operation on a golden record.

:::

**Quarantined**
<br />Aggregate count of entities quarantined during the processing of the subject batches.

**Created**
<br />Aggregate count of golden records originated during the processing of the subject batches.

**Updated**
<br />Aggregate count of golden records updated as a result of the processing of the subject batches.

**Deleted**
<br />Aggregate count of golden records end-dated as a result of the processing of the subject batches.

By default the list is sorted by report time from newest to oldest. Clicking a column heading selects the column by which to sort the list. Clicking the selected column reverses the sort order.

In addition to the scroll bars, the following controls are used to navigate the list:

**Name**
<br />**Description**

**![First](../Images/Common/main-bt-list-first_4d860db1-a3bf-4ccb-b1ae-3718146313a6.jpg)**
<br />Loads the first reports.

**![Previous](../Images/Common/main-bt-list-previous_fecf5522-8e9f-4a4a-b5f8-a70b4d5be5c0.jpg)**
<br />Loads reports immediately prior to those currently loaded.

x-y of z
<br /> Indicates the number and relative chronological position of reports currently loaded — for example, “51-75 of 2086”. The total report count shown reflects currently applied filtering.

**![Next](../Images/Common/main-bt-list-next_fa70ff4f-be87-489f-8a03-c05acee8e2c0.jpg)**
<br />Loads reports immediately subsequent to those currently loaded.

**![Last](../Images/Common/main-bt-list-last_1750adde-aef7-4874-8e74-c9a0d692981b.jpg)**
<br />Loads the last reports.