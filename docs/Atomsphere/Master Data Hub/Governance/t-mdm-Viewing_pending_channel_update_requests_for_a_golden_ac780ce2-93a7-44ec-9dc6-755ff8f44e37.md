# Viewing pending channel update requests for a golden record 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-ac780ce2-93a7-44ec-9dc6-755ff8f44e37"/>
</head>


Viewing pending channel update requests for a golden record in a routine master data governance task.



## Procedure

1.  Select **Stewardship** \> **Golden Records**.

2.  Filter the data grid by repository and domain.

3.  In the data grid, click the Updated Date of the golden record for which you want to view the pending channel update requests.

    The detail view opens.

4.  Select the **Sources** tab.

    The tab shows a list of the golden record’s links to sources.

5.  In the gear icon **![](../Images/main-ic-gear-gray_54d864eb-b5de-4ee6-9b31-975dae0a5762.jpg)** menu for the source for which you want to view the pending update requests, select **View Pending Updates**.

    ![Gear icon for acting on pending update requests for a source](../Images/Stewardship/mdm-mn-golden-record-link_17a5e77e-3f8d-438a-a0b4-c46db66589d3.jpg)

    The Outbound Activity page opens. Each list entry represents a pending channel update request. Filtering by the ID of the golden record is applied by default.

    ![Outbound Activity page example](../Images/Reporting/mdm-ps-reporting-outbound-activity-GRID-filter_d52c9891-3787-49d7-b677-fd712c0c5371.jpg)

6.  **Optional:** To apply additional filtering to the list, follow steps 5–6 and 8–9 in the Related task about viewing outbound activity reports.

    When you apply additional filters, the filters are “AND’ed”. For example, applying an additional filter on operation type Update Record selects update requests for the golden record with the type Update Record.

7.  To view the golden record details for a particular update request, click the golden record title or ID.

    In the golden record detail view:

    -   To navigate to golden record details for the previous update request in the list, click **![](../Images/main-ic-arrow-gray-up_3394c903-2719-4d4b-82cc-ec8cd74d99d2.jpg) Previous** \(or press the **Up arrow** key\).

    -   To navigate to golden record details for the next update request in the list, click **![](../Images/main-ic-arrow-gray-down_c4b5bff8-7fde-4200-b305-68bff70fecf0.jpg) Next** \(or press the **Down arrow** key\).

8.  **Optional:** When you are done reviewing golden record details, press **Esc**, click **Close** or click elsewhere in the Outbound Activity page.