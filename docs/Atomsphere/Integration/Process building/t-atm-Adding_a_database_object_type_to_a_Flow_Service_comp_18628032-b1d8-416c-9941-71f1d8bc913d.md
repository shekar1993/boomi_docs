# Adding a data action object type to a Flow Service component

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-18628032-b1d8-416c-9941-71f1d8bc913d"/>
</head>


Data action object types must be defined for handling data action service requests. Each data action object type must be linked to a profile that specifies the object structure and to a Flow Services Server listener process for handling each type of request specifying an object of that type — Save, Load, Delete — for which handling is required.

## Procedure

1.  In the Flow Service component, select the **Data Actions** tab.

2.  Click ![+](../Images/main-ic-plus-sign-white-in-blue-circle-16_98f7af60-dd5f-4037-90cd-05cc9dfc5502.jpg) **Add Data Action Object Type**.

    The Add Data Action Object Type dialog opens.

3.  Type a unique **Object Type**.

4.  Choose or create the **Object Type Profile** to which to link the object type.

5.  Type a **Description** of the object type.

6.  Specify the Flow Services Server listener process to handle Get requests for this object type. Do one of the following:

    -   To choose an existing **Get Process**, click the field.

    -   To create a **Get Process**, click **![+](../Images/main-ic-plus-sign-white-in-green-circle-16_4dc8c5f3-e893-4aef-ade2-0b7afe9476c1.jpg) Create**.

    The Flow Services Server connector action in the process you choose or create sets the dynamic process property param\_id to the value of the id field specified in the request. The param\_id value is passed as a parameter to the outbound connector action on the data source. Once the connector action is completed and the specified object is received, a Return Documents step is used to pass the object to the flow.

    If you created a process, the process opens — continue with step 7. Otherwise, skip to step 16.

7.  Change the name of the newly linked process from its default of the flow service’s External Name plus “ - New Get Process” to a name that is more descriptive.

8.  In the process, click **Configure** to open the Start step dialog.

    Setting the **Display Name** is optional.

    The **Connector** is Flow Services Server.

    The **Action** is Listen.

    The **Connection** is managed for you.

9.  Choose an existing **Operation** or click **![](../Images/main-ic-plus-sign-white-in-green-circle-16_4dc8c5f3-e893-4aef-ade2-0b7afe9476c1.jpg) Create**.

10. In the Flow Services Server operation, in the **Service Type** list, select Data Action.

11. Select **Load** as the **Data Action Operation**.

12. Choose or create the **Response Profile**.

13. Save the Flow Services Server operation.

14. In the Start step dialog, click **OK**.

15. Save the process.

16. In the Add Data Action Object Type dialog, specify the Flow Services Server listener process to handle Query requests for this object type.

    -   To choose an existing **Query Process**, click the field.

    -   To create a **Query Process**, click **![+](../Images/main-ic-plus-sign-white-in-green-circle-16_4dc8c5f3-e893-4aef-ade2-0b7afe9476c1.jpg) Create**.

    A requesting flow optionally passes a query filter to the process you choose or create in a JSON document. In the flow the filter is represented as a filtered List of the flow Type in which the **Object Type Profile** is stored.

    -   If a filter is not present in the request, the outbound connector action retrieves all objects from the data source.

    -   If a filter is present in the request, the Flow Services Server connector action in the Start step transforms the JSON document to an XML query filter. If necessary, subsequent processing transforms that query filter into the filter format used in the outbound connector action on the data source.

    In either case, once the outbound connector action on the data source is completed and the query results are received, the Return Documents step passes the data to the flow.

    If you created a process, the process opens — continue with step 17. Otherwise, skip to step 18.

17. Repeat steps 7–15 to configure the Start step in the newly linked process and optionally rename the process, with the following difference:

-   With regard to step 7, the default name of the newly linked process is the flow service’s external name plus “ - New Query Process”.

18. In the Add Data Action Object Type dialog, specify the Flow Services Server listener process to handle Save requests for this object type.

    -   To choose an existing **Save Process**, click the field.

    -   To create a **Save Process**, click **![+](../Images/main-ic-plus-sign-white-in-green-circle-16_4dc8c5f3-e893-4aef-ade2-0b7afe9476c1.jpg) Create**.

    If you created a process, the process opens — continue with step 19. Otherwise, skip to step 20.

19. Repeat steps 7–11 and 13–15 to configure the Start step in the newly linked process and optionally rename the process, with the following differences:

    -   With regard to step 7, the default name of the newly linked process is the flow service’s external name plus “ - New Save Process”.

    -   In step 11, select **Save** as the **Data Action Operation**.

20. In the Add Data Action Object Type dialog, specify the Flow Services Server listener process to handle Delete requests for this object type.

    -   To choose an existing **Delete Process**, click the field.

    -   To create a **Delete Process**, click **![+](../Images/main-ic-plus-sign-white-in-green-circle-16_4dc8c5f3-e893-4aef-ade2-0b7afe9476c1.jpg) Create**.

    If you created a process, the process opens — continue with step 21. Otherwise, skip to step 22.

21. Repeat steps 7–11 and 13–15 to configure the Start step in the newly linked process and optionally rename the process, with the following differences:

    -   With regard to step 7, the default name of the newly linked process is the flow service’s external name plus “ - New Delete Process”.

    -   In step 11, select **Delete** as the **Data Action Operation**.

22. In the Add Data Action Object Type dialog, click **Add**.

## Next Steps


The data action object type is not saved until you save the Flow Service component.