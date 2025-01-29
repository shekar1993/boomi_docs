# Deleting pending channel update requests for a domain source 

<head>
  <meta name="guidename" content="DataHub"/>
  <meta name="context" content="GUID-63870986-1382-43a3-b15c-421e689acf23"/>
</head>


If delivery on a given source’s channel is failing or you have a known issue in the Boomi DataHub to source integration for that source, you may need to delete the source's pending update requests from the channel.

## About this task

:::note

Deleting pending update requests can prevent the synchronization of source system data and master data from occurring in certain circumstances, particularly in the case of requests of type Create Record.

:::

## Procedure

1.  Do one of the following:

    -   In the **Activity** tab for a repository, click **Source Details** for the domain and then click the Total count of pending update requests on the channel for that source or the count of Held \(undeliverable\) pending update requests.

    -   In the **Sources** tab for the domain, in the source’s gear icon ![](../Images/main-ic-gear-gray_54d864eb-b5de-4ee6-9b31-975dae0a5762.jpg) menu, select **View Pending Updates**.

    The Outbound Activity page opens. Each list entry represents a pending channel update request.

    ![Outbound Activity page example](../Images/Reporting/mdm-ps-reporting-outbound-activity_9a39dcdd-865a-4713-883d-1c9ca2d82dc4.jpg)

2.  **Optional:** To filter the list, apply filters as described in steps 5–9 in the topic about viewing outbound activity reports, linked below.

    When you apply multiple filters, the filters are “AND’ed”. For example, filtering on operation type of Update Record and applying the Held filter selects update requests that are held and of type Update Record.

3. **Optional:** If you want to delete only some of the listed update requests, select the check box for each such update request.


4.  Do one of the following:

    -   If in step 3 you selected individual update requests, to initiate delete requests applicable to those update requests, click **Delete** and in the menu, select **Selected**.

    -   To initiate delete requests applicable to update requests that match the applied filter\(s\), click **Delete** and in the menu, select **All that Match Applied Filter**.

    -   To initiate delete requests applicable to all update requests, click **Delete** and in the menu, select **All Pending Deliveries**.

5.  In the confirmation dialog, click **OK**.