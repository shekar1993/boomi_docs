# Viewing inbound activity reports 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-e821eb13-02df-4d4b-9df3-4f88c391cdda"/>
</head>


Viewing reports on processed batches of incoming source entities is a routine master data governance task.

## Before you begin

Masked values are visible if you have one of the following user permissions:, including originally submitted XML data:
 
- **MDM - Privileged Data Steward** role
- **MDM - Administrator** role
- **MDM - Reveal Masked Data** privilege
- **MDM - Data Steward** role (or **MDM - Stewardship** privilege) and the **Reveal Masked Data** Hub entitlement (available with the Advanced Security feature)

## Procedure

1.  Select **Reporting** \> **Inbound Activity**.

    The Inbound Activity page opens.

    ![Inbound Activity page example](../Images/Reporting/mdm-ps-reporting-inbound-activity_eb8a8ea8-7ad7-41c4-be68-5a6ed1f895d8.jpg)

    By default inbound activity reports for the past hour are listed unless a different time span has been explicitly saved as the default. Each listed report is specific to a repository, domain and source for inbound activity — both ordinary batches and staged batches — for which processing concluded during a one-minute span. You can apply a different time span filter or other filters to the reports list.

    After receiving a small entity batch, Boomi DataHub may wait several seconds to receive additional batches. In this scenario, Boomi DataHub combines small batches and applies a single batch ID when processing.

    You can refresh the list by clicking **![](../Images/Common/main-bt-arrows-green-curved-refresh_dcd1e41a-a0a2-4a2f-9608-4d6d3897c09e.jpg) Refresh**.

    :::note
    
    For information about the content of batch reports, see the Inbound Activity topic, linked below.

    :::

2.  **Optional:** To apply a different time span filter to the reports list, click the time span filter button, select one of the following from the dialog and then click **Apply:**

    ![Applying a different time span filter to the reports list](../Images/manage-ps-process-reporting-time-date-filter_95c68fd5-c109-40b0-8b4b-9fde06210fe6.jpg)

    -   **Past Hour**

    -   **Past 24 Hours**

    -   **Past Week**

    -   **Date Range**, then type **From** and **To** dates, or click the date fields and select dates from calendars. You can optionally type or select **From** and **To** times rather than accepting the 00:00 and 23:59 defaults.

        Steps 3–8 describe how to apply additional filtering to the reports list. Each step relates to a particular filter type.

        While one of these types of filters is applied, a button for that filter appears to the left of the **Add Filter** button. The button’s label shows the specified criterion — for example, **Source:** \(source name\).

    -   To clear one of these types of filters, click ![](../Images/Common/main-ic-x-white-in-gray-circle-16_0abafeee-d5e7-4888-9bfb-475b11b6d00f.jpg) on the filter’s button.

    -   To clear all of these types of filters, click **![](../Images/Common/main-ic-x-white-in-red-circle-in-box-28x31_42b3d3dc-56b6-4549-a3c3-39b7e6f4fd0d.jpg) Clear All Filters**.

    -   To save the currently applied filters as defaults for application to the reports list when Batch Reporting reloads, click **![](../Images/Stewardship/main-bt-save-filters_461f2559-fa09-4f97-812f-d5390d8c10da.jpg) Save current filters as default view**.

3.  **Optional**: To filter the reports list by repository, do one of the following

    -   If the list is not currently filtered by repository, click **Add Filter** and select the Repositories filter type.

    -   Otherwise, click the **Repositories:** button for the currently applied filter.

    A dialog appears and takes focus.

    ![Dialog for selecting repositories by which to filter the reports list](../Images/Reporting/mdm-db-reporting-filter-repository_9211d549-d549-42d6-ac5c-5b62444a3ce7.jpg)

    1.  Select the check boxes for the repositories by which to filter.

    2.  Click **Apply**.

    If you want to see results for all repositories, do not apply this filter.

4.  **Optional**: To filter the reports list by domain, do one of the following:

    -   If the list is not currently filtered by domain, click **Add Filter** and select the Model filter type.

    -   Otherwise, click the **Model:** button for the currently applied filter.

    A dialog appears and takes focus.

    ![Dialog for filtering the reports list by domain](../Images/Reporting/mdm-db-reporting-filter-model_efaf498d-cfd1-452d-8e97-05115094b0b8.jpg)

    1.  In the **Model** list, select the domain by which to filter.

    2.  Click **Apply**.

5.  **Optional**: To filter the reports list by source, do one of the following:

    -   If the list is not currently filtered by source, click **Add Filter** and select the Source filter type.

    -   Otherwise, click the **Source:** button for the currently applied filter.

        A dialog appears and takes focus.

        ![Dialog for filtering the reports list by source](../Images/Reporting/mdm-db-reporting-filter-source_123c8933-7034-417d-b439-b25d8c8a8089.jpg)

    1.  In the **Source** list, select the source by which to filter.

    2.  Click **Apply**.

6.  **Optional**: To filter the reports list by batches from which entities were quarantined, click **Add Filter** and select the Has Quarantined Records filter type.

7. **Optional**: To filter the reports list by batches from which golden records originated, click **Add Filter** and select the Has Created Records filter type.

8.  **Optional**: To filter the reports list by batches which resulted in the deletion of golden records, click **Add Filter** and select the Has Deleted Records filter type.

9.  **Optional**: To filter the reports list by batch processing result, click **Errors** or **Successes**.

    :::note
    
    To clear this filter, click **All**.

    :::

10. **Optional**: To see details about a report, click the report’s Report Time link in the reports list.

    The Batch Report detail view opens. In this view each line represents a batch.

    ![Batch Report Details view example](../Images/Reporting/mdm-ps-reporting-detail_e31536dd-6085-4514-a1c3-4b7d3766fb9b.jpg)

11. **Optional**: Do any or all of the following:

    -   To view processing details for a batch, in its **Actions ![](../Images/main-ic-gear-gray_54d864eb-b5de-4ee6-9b31-975dae0a5762.jpg)** menu, select **Batch Processing Details**.

        The Batch Processing Details dialog appears.

        ![Batch Processing Details dialog example](../Images/Reporting/mdm-db-reporting-batch-processing-details_1c0237a8-50fc-44cc-a382-9bc840ef389c.jpg)

    -   To resubmit a batch, in its **Actions ![](../Images/main-ic-gear-gray_54d864eb-b5de-4ee6-9b31-975dae0a5762.jpg)** menu, select **Resubmit Batch**, and then in the confirmation dialog, click **OK**.

    -   To view a report on the execution of the process that submitted a batch, if applicable, in the batch’s **Actions ![](../Images/main-ic-gear-blue-and-arrow-black-16_188e61d7-2204-48ad-b085-15fa4a70615d.jpg)** menu, select **View Process Execution**.

        Integration opens in a new browser tab or window and loads the Process Reporting page. The process execution results table is filtered to show only the relevant execution.

12. **Optional:** To view details about a batch, click the batch’s Created At link in the batches list

    The batch detail view opens. In this view each line represents an entity.

    ![Batch details view example](../Images/Reporting/mdm-ps-reporting-detail-batch_acfc34f4-7d27-4640-b4cc-da54e69ed934.jpg)

13. **Optional:** Do any or all of the following

    -   To view batch-level processing details, in the **![](../Images/main-ic-gear-gray_54d864eb-b5de-4ee6-9b31-975dae0a5762.jpg) Actions** menu, select **Batch Processing Details**.

        The Batch Processing Details dialog appears.

    -   To resubmit the batch, in the **![](../Images/main-ic-gear-gray_54d864eb-b5de-4ee6-9b31-975dae0a5762.jpg) Actions** menu, select **Resubmit Batch**, and then in the confirmation dialog, click **OK**.

    -   To view a report on the execution of the process that submitted the batch, if applicable, in the **![](../Images/main-ic-gear-gray_54d864eb-b5de-4ee6-9b31-975dae0a5762.jpg) Actions** menu, select **View Process Execution**.

        opens in a new browser tab or window and loads the Process Reporting page. The process execution results table is filtered to show only the relevant execution.

    -   To view processing details for an entity, in its **Actions ![](../Images/main-ic-gear-gray_54d864eb-b5de-4ee6-9b31-975dae0a5762.jpg)** menu, select **Entity Processing Details**.

        The Entity Processing Details dialog appears.

        ![Entity Processing Details dialog example](../Images/Reporting/mdm-db-reporting-entity-processing-details_6b2e23ab-7bb0-46e6-b132-16743abf1af0.jpg)

    -   To view an entity’s data, in the entity’s **Actions ![](../Images/main-ic-gear-gray_54d864eb-b5de-4ee6-9b31-975dae0a5762.jpg)** menu, select **View Entity**.

        The Batch Entity dialog appears. In the Fields tab the values reflect the results of successfully applied data quality steps, if any.

        ![Batch Entity dialog example](../Images/Reporting/mdm-db-reporting-view-entity_b8d60d49-dc0e-4d43-a6d4-e8408267a63a.jpg)

        Select the **Submitted XML** tab to view the originally submitted entity data in the native XML format of the incoming batch.

        ![Example of the Submitted XML tab in the Batch Entity dialog](../Images/Reporting/mdm-ds-reporting-view-entity-xml_54c7f769-2638-4476-a894-59d027b8d264.jpg)

    -   To view details for the golden record that was created, updated or end-dated as a result of the processing of an entity, if applicable, in the entity’s **Actions ![](../Images/main-ic-gear-gray_54d864eb-b5de-4ee6-9b31-975dae0a5762.jpg)** menu, select **View Golden Record**.

    -   To view details about the transaction associated with an entity, in the entity’s **Actions ![](../Images/main-ic-gear-gray_54d864eb-b5de-4ee6-9b31-975dae0a5762.jpg)** menu, select **View Transaction Details** \(not available for staged entities\).

        ![Example view of the details about the transaction associated with an entity](../Images/Reporting/mdm-ps-reporting-entity-transaction-details_8b02ec12-1386-4f90-9fa1-c633b17bd055.jpg)

        When you are done viewing transaction details, close the transaction detail view — either press **Esc**, click **Close** or click elsewhere in Batch Reporting.

14. **Optional:** When you are done reviewing the batch and entity details, do one of the following:

    -   Close the batch detail view — either press **Esc**, click **Close** or click elsewhere in the Inbound Activity page.

    -   Navigate to detail for the previous batch in the batches list — click **![](../Images/main-ic-arrow-gray-up_3394c903-2719-4d4b-82cc-ec8cd74d99d2.jpg) Previous** \(or press the **Up arrow** key\).

    -   Navigate to detail for the next batch in the batches list — click **Next ![](../Images/main-ic-arrow-gray-down_c4b5bff8-7fde-4200-b305-68bff70fecf0.jpg)** \(or press the **Down arrow** key\).

15. **Optional:** When you are done reviewing the report details, do one of the following

    -   Close the report detail view — either press **Esc**, click **Close** or click elsewhere in the Inbound Activity page.

    -   Navigate to detail for the previous report in the reports list — click **![](../Images/main-ic-arrow-gray-up_3394c903-2719-4d4b-82cc-ec8cd74d99d2.jpg) Previous** \(or press the **Up arrow** key\).

    -   Navigate to detail for the next report in the reports list — click **Next ![](../Images/main-ic-arrow-gray-down_c4b5bff8-7fde-4200-b305-68bff70fecf0.jpg)** \(or press the **Down arrow** key\).