# Viewing domain data 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-22c95cb1-6039-4e79-b1bf-6dc99268fd6b"/>
</head>


View the data in a master data domain in the Golden Records page.

## Before you begin

If you have configured data to be masked in the model, masked field data is hidden in golden records. Masked values are only visible if you have one of the following user permissions: 
- **MDM - Privileged Data Steward** role
- **MDM - Administrator** role
- **MDM - Reveal Masked Data** privilege
- **MDM - Data Steward** role (or **MDM - Stewardship** privilege) and the **Reveal Masked Data** Hub entitlement (available with the Advanced Security feature)

:::note

You can activate Accelerated Query when you have 100,000 or more golden records in a deployed model (universe). This feature improves query performance. Read [Activating Accelerated Query](/docs/Atomsphere/Master%20Data%20Hub/Stewardship/hub-accelerated_query.md) to learn more.

:::

## Procedure

1.  Select **Stewardship** \> **Golden Records**.

2.  In the repository/domain list, select the domain.

    A data grid is displayed in which each row represents a golden record. The first column, Updated Date, is the timestamp of the last update of the golden record. If a golden record title format is specified in the domain model, the next column, Record Title, is the golden record title. The right-most column, Created Date, is the timestamp of the creation of the golden record. The remaining columns correspond to the fields in the domain model. Collections are omitted; collection data for an individual golden record is viewable in its detail view — see step 14.

    To view a Long Text field value, click the **![](../Images/main-ic-document-with-magnifying-glass-16_36098f7c-7a65-41a5-8392-a2e729d3de91.jpg) View value** icon representing that value in the grid.

    ![Master data domain data grid](../Images/Stewardship/img-hub-golden-records-tab_270ecec8-8c63-4f86-a832-4cc0a0a3976a.jpg)

    Filtering by date of last update is applied by default unless other filters have been explicitly saved as defaults; initially only active golden records updated in the past 24 hours load into the grid. To switch between active and end-dated golden records, click **Active** or **End-dated**.

    Initially a maximum of 100 golden records load into the grid.

    To refresh the grid, click **![](../Images/Common/main-bt-arrows-green-curved-refresh_dcd1e41a-a0a2-4a2f-9608-4d6d3897c09e.jpg) Refresh**.

    :::note
    
    Steps 3–13 describe how to modify the filtering applied to the data in the grid. Each of these steps except step 13 relates to a particular filter type. While a Golden Record ID \(step 11\) filter is applied, it is not possible to apply any of the other types of filters — and vice-versa.

    While a filter is applied, a button for that filter appears to the left of the **Add Filter** button. The button’s label shows the specified criterion — for example, **Updated:** Past 24 Hours.

    -   To clear a filter, click ![](../Images/Common/main-ic-x-white-in-gray-circle-16_0abafeee-d5e7-4888-9bfb-475b11b6d00f.jpg) on the filter’s button.

    -   To clear all filters, click **![](../Images/Common/main-ic-x-white-in-red-circle-in-box-28x31_42b3d3dc-56b6-4549-a3c3-39b7e6f4fd0d.jpg) Clear All Filters**.

    -   To save the currently applied filters and **Filter Operator** as defaults for application to the data grid when the Golden Records page reloads, click **![](../Images/Stewardship/main-bt-save-filters_461f2559-fa09-4f97-812f-d5390d8c10da.jpg) Save current filters as default view**. You can save filters separately for each of the repository’s hosted domains. For a given domain, you can save filters separately per account for **Active** and **End-dated** golden records.

    :::

3. **Optional:** To filter active golden records by created date, do one of the following:

    -   If active golden records are not currently filtered by created date, click **Add Filter** and select the Created Date filter type.

    -   Otherwise, click the **Created:** button for the currently applied filter.

    A dialog appears and takes focus.

    ![Dialog used to filter active golden records by created date](../Images/Stewardship/mdm-db-domain-data-filter-date_04b75e4b-85b6-4a85-abe2-12fd6c24ae0d.jpg)

    Select one of the following from the dialog and then click **Apply**

    -   **Past Hour**

    -   **Past 24 Hours**

    -   **Past Week**

    -   **Date Range**, then type **From** and **To** dates, or click the date fields and select dates from calendars. You can optionally type or select **From** and **To** times rather than accepting the 00:00 and 23:59 defaults.

4.  **Optional:** To filter active golden records by date of last update, do one of the following:

    -   If active golden records are not currently filtered by date of last update, click **Add Filter** and select the Updated Date filter type.

    -   Otherwise, click the **Updated:** button for the currently applied filter.

    The dialog mentioned in step 3 appears and takes focus. Set the time span and then click **Apply**.

5.  **Optional:** To filter the data by a field value, do one of the following:

    -   If the data is not currently filtered by a field value, click **Add Filter** and select the Field Data filter type.

    -   Otherwise, click the button whose label identifies the field and value for the currently applied filter.

    A dialog appears and takes focus.

    ![Dialog used to filter golden records by field value](../Images/Stewardship/mdm-db-domain-data-filter-data_ad6da938-83e9-4c1f-ab04-e27292cb5025.jpg)

    1.  In the **Field** list, select the field.

    2.  In the next list, select the operator.

        :::note
        
        The operators available for selection and the default selection are dependent upon the type of field you selected, and the remaining substeps are dependent upon the operator you select. For the specifics, see the Related reference for the **Golden Records** page. For most field type and operator combinations, continue with substep c as written here.

        :::

    3.  In the **Value** field, type the value.

    4.  Click **Apply**.

    :::note
    
    You can repeat this step to apply additional filters of this type.

    :::

6.  **Optional:** To filter active golden records by tag, do one of the following:

    -   If active golden records are not currently filtered by a tag, click **Add Filter** and select the Record Tag filter type.

    -   Otherwise, click the **Tag:** button for the currently applied filter.

    A dialog appears and takes focus.

    ![Dialog used to filter active golden records by tag](../Images/Stewardship/mdm-db-domain-data-filter-tag_a0e3bf47-0814-4757-9595-b0585af2a95d.jpg)

    1.  In the **Tag Name** list, select the tag by which to filter.

    2.  Click **Apply**.

7.  **Optional:** To filter active golden records by creating source, do one of the following:

    -   If active golden records are not currently filtered by a creating source, click **Add Filter** and select the Creating Source filter type.

    -   Otherwise, click the **Creating Source:** button for the currently applied filter.

    A dialog appears and takes focus.

    ![Dialog used to filter active golden records by creating source](../Images/Reporting/mdm-db-reporting-filter-source_123c8933-7034-417d-b439-b25d8c8a8089.jpg)

    1.  In the **Source** list, select the source by which to filter.

    2.  Click **Apply**.

8.  **Optional:** To filter the data by source entity ID, do one of the following:

    -   If the data is not currently filtered by a source entity ID, click **Add Filter** and select the Source Entity ID filter type.

    -   Otherwise, click the **Source Entity ID:** button for the currently applied filter.

    A dialog appears and takes focus.

    ![Dialog used to filter golden records by source entity ID](../Images/Stewardship/img-hub-approve_base_values_45a5feb7-5a57-4f4e-aa6b-34412ce6c96f.jpg)

    1.  In the **Source** list, select the source.

    2.  In the **Entity ID** field, type the entity ID.

    3.  Click **Apply**.

    :::note
    
    The Starts With operator is used when applying this filter type. For example, setting **Entity ID** to “12” would return each golden record whose entity ID for the selected **Source** begins with “12”, such as "123" and "1234321".

    :::

9.  **Optional:** To filter active golden records by source links, do one of the following:

    -   If active golden records are not currently filtered by source links, click **Add Filter** and select the Source Links filter type.

    -   Otherwise, click the **Linked to:** or **Not Linked to:** button for the currently applied filter.

    A dialog appears and takes focus.

    ![Dialog used to filter active golden records by source links](../Images/Stewardship/mdm-db-domain-data-filter-link_eaf24d38-42ad-4206-9d62-e68451674017.jpg)

    1.  In the first list:

        -   To filter by the presence of links to a source, selected Linked.

        -   To filter by the absence of links to a source, selected Not Linked.

    2.  In the **To Source** list, select the source.

    3.  Click **Apply**.

10. **Optional:** To filter the data by the presence of unresolved reference field data, do one of the following:

    -   If the data is not currently filtered by the presence of unresolved reference field data, click **Add Filter** and select the Unresolved References filter type.

    -   Otherwise, click the **Unresolved:** button for the currently applied filter.

    A dialog appears and takes focus.

    ![Dialog used to filter golden records by the presence of unresolved reference field data](../Images/Stewardship/mdm-db-domain-data-filter-unresolved_98b33b68-d14f-4aff-ab5b-16d3ded8a1f1.jpg)

    1.  In the **Reference Field** list, select the reference field to evaluate for the presence of unresolved data.

    2.  In the **Source** field, select an individual source by which to filter or All Sources \(default\), which limits results to records for which all source contributions are unresolved.

    3.  Click **Apply**.

11. **Optional:** To filter the data by golden record ID, do one of the following:

    -   If the data is not currently filtered, click **Add Filter** and select the Golden Record ID filter type.

    -   If the data is currently filtered by a golden record ID, click the **Golden Record ID:** button for the currently applied filter.

    A dialog appears and takes focus.

    ![Dialog used to filter golden records by ID](../Images/Stewardship/mdm-db-domain-data-filter-grid_c4904772-21ea-40c8-ac39-cea3fd8dae19.jpg)

    1.  In the **Golden Record ID** field, type the golden record ID.

    2.  Click **Apply**.

12. **Optional:** To filter end-dated golden records by end date, do one of the following:

    -   If end-dated golden records are not currently filtered by end date, click **Add Filter** and select the End Date filter type.

    -   Otherwise, click the **End-dated:** button for the currently applied filter.

    The dialog mentioned in step 3 appears and takes focus. Set the time span and then click **Apply**.

13. **Optional:** If you have applied multiple filters and you want the filters to be “OR’ed”, in the **Filter Operator** list, select OR. Otherwise, the filters are “AND’ed”, which means only golden records meeting all of the specified filter criteria are selected.

14. **Optional:** To view details for a golden record, click its Updated Date.

    The detail view opens.

    ![Golden record details view](../Images/Stewardship/mdm-ps-domain-data-tab-record-detail_d65ca1cc-b437-4946-8eb0-6c3210bc163a.jpg)

    Do any or all of the following:

    -   To view the field data, select the **Fields** tab — this tab is selected by default.

        :::note

        You can view up to 100 repeatable fields or field groups. You can view additional fields by selecting **Original XML** or by querying the Repository API. If field values are masked, you can view additional fields in the History tab.
        
        :::

        :::note
        
        To view details for a referenced golden record, click the corresponding reference field value.

        :::

    -   To view source agreement for a field for which sources are ranked, select the **Fields** tab, and click **View Source Agreement** in the field’s list entry. Sources are listed in their ranked order, and those in agreement are indicated by the ![](../Images/img-atm-supported_api_29c27cfa-02f5-4a0f-a314-e9fb250f463c.svg) icon and bold type.

        ![Source agreements for a field for which sources are ranked](../Images/Stewardship/mdm-ps-domain-data-tab-record-agreement_231682a6-ed0b-45fc-9315-38bf078eb1b7.jpg)

        To hide source agreement for a field, click **Hide Source Agreement**.

    -   To view the source entity IDs contributed as reference field values in entities by individual sources and the respective states of the references, select the **Fields** tab, and in the field’s list entry click **![](../Images/main-ic-gear-gray_54d864eb-b5de-4ee6-9b31-975dae0a5762.jpg) View contributed values by source**.

        ![Viewing contributed values by source](../Images/Stewardship/mdm-ps-domain-data-tab-source-contributions_5526e2a2-b9ae-4f13-a93a-3f5cbf8a1ae5.jpg)

        When you are done viewing the Source Contributions view, close it — either press **Esc**, click **Close** or click elsewhere in the Golden Records page.

    -   To view the golden record’s sources and the states of the links from the golden record to source entities, select the **Sources** tab.

        ![Viewing the golden record's sources and the states of the links from the golden record to the sources](../Images/Stewardship/mdm-ps-domain-data-tab-sources_d7a97e81-b06f-4f66-b45b-7c303ed3bdb5.jpg)

        :::note
        
        You can link from the sources list to entities in source systems, provided the source entity URL formats are correctly specified in the **Entity ID URL** field for the source attachments in the domain **Sources** tab, or if not there, for the source definitions in the Sources page. The links open in separate browser tabs or windows.

        :::

    -   To view the golden record’s tags, select the **Tags** tab.

        ![Viewing the golden record’s tags](../Images/Stewardship/mdm-ps-domain-data-tab-record-tags_07902912-8b83-41e9-84f0-5d65f59f2fb4.jpg)

    -   To view the golden record’s version history, select the **History** tab.

        ![Viewing the golden record’s version history](../Images/Stewardship/mdm-ps-domain-data-tab-record-history_095d5f20-1753-4aa6-a248-3393c91136c0.jpg)

        To view a version’s details, click its Updated Date.

        ![Viewing a version’s details](../Images/Stewardship/mdm-ps-domain-data-tab-record-version-changes_591bfcb2-a3be-471c-939b-e4c73a6091b0.jpg)

        In the version detail view, to view the values of all fields for the version, select the **Record** tab. To view events that occurred leading to the creation of the version, select the **Activity** tab. To view the previous and new values of created and updated fields for the version, select the **Changes** tab.

        When you are done reviewing the version details, do one of the following:

        -   Close the version detail view — either press **Esc**, click **Close** or click elsewhere in the Golden Records page.

        -   Navigate to detail for the next version \(previous entry in the **History** list\) — click **![](../Images/main-ic-arrow-gray-up_3394c903-2719-4d4b-82cc-ec8cd74d99d2.jpg) Previous** \(or press the **Up arrow** key\).

        -   Navigate to detail for the previous version \(next entry in the **History** list\) — click **Next ![](../Images/main-ic-arrow-gray-down_c4b5bff8-7fde-4200-b305-68bff70fecf0.jpg)** \(or press the **Down arrow** key\).

15. **Optional:** When you are done reviewing the golden record details, do one of the following:

    -   Close the detail view — either press **Esc**, click **Close** or click elsewhere in the Golden Records page.

    -   Navigate to detail for the previous golden record in the data grid — click **![](../Images/main-ic-arrow-gray-up_3394c903-2719-4d4b-82cc-ec8cd74d99d2.jpg) Previous** \(or press the **Up arrow** key\).

    -   Navigate to detail for the next golden record in the data grid — click **Next ![](../Images/main-ic-arrow-gray-down_c4b5bff8-7fde-4200-b305-68bff70fecf0.jpg)** \(or press the **Down arrow** key\).