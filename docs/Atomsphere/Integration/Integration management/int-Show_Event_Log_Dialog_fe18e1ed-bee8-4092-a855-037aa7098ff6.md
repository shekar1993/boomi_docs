# Show \(Event\) Log dialog 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-fe18e1ed-bee8-4092-a855-037aa7098ff6"/>
</head>


The Show Log dialog shows events logged during a process execution or the processing of a specific document.

Open the dialog from the **Manage** menu’s **Process Reporting** page.

-   Events logged during an execution are shown when **![View icon](../Images/main-ic-document-with-text-22x21_889d5aa0-0372-4dac-ac84-306ab5559353.jpg) View Process Logs** is clicked for the execution in the execution search results or selected in the **![Gray gear](../Images/main-ic-gear-gray_54d864eb-b5de-4ee6-9b31-975dae0a5762.jpg) Actions** menu in the execution detail view.

-   Events logged during the processing of a specific document are shown when **![View icon](../Images/main-ic-scroll-white_7787acf3-71b7-4a31-bc94-313ec0051c12.jpg) View Logs** is selected in the **![Gear or Actions icon](../Images/main-ic-gear-blue-and-arrow-black-16_188e61d7-2204-48ad-b085-15fa4a70615d.jpg) Actions** menu for the document in either a process execution detail view, the Document detail view or the View Linked Documents dialog.


![Show log](../Images/manage-db-show-log_ffbe6136-2a2d-47c0-b363-8b4d601f1d29.jpg)

## Minimum Status to Show 

Filters the display of logged events by notification level.

-   DEBUG — Show all events.

-   INFO — Show only INFO-, WARNING- and SEVERE-level events.

-   WARNING — Show only WARNING- and SEVERE-level events.

-   SEVERE — Show only SEVERE-level events.


## Save Logs 

Clicking this button initiates a request to download the log as a Zip file. Depending on your browser and its download settings, you may be prompted to specify the destination path and filename. The default filename is process\_log.zip.

## Event list 

For each logged event, the following properties are shown:

-   Time — The date and time of the event.

-   Level — The notification level of the event \(DEBUG, INFO, WARNING or SEVERE\).

-   step — The name of the event, which could be that the execution is starting or stopping, or it could be the name of a step being executed. The execution of a step may require more than one entry in the log. If the event is associated with the execution of a labeled step, the step label is shown.

-   Ext\(ended\) Info\(rmation\) — If the event is associated with a step, further information about the step may be shown in this column, depending on the step type. Clicking the extended information opens a window showing the full text.

-   Message — A message explaining what happened in the event. If the event is the successful execution of a step, its processing time is displayed in milliseconds \(ms\). For example: \(Stop\) executed successfully in 2 ms. Clicking the message opens a window showing the full message.

    ![Event message example](../Images/manage-db-log-error-detail_5480d312-9a59-476b-a0d6-20963b0ddd35.jpg)

-   Details — If the event’s notification level is SEVERE and the event relates to a specific document that encountered errors, clicking ![Magnifier icon](../Images/main-ic-magnifying-glass-16_cd0f3352-63b0-4d15-af6d-86e11b9d14eb.jpg) in this column opens the Stack Trace dialog.

    ![Stack Trace](../Images/manage-db-stack-trace_afe74405-6b32-4c7f-9f03-8204f1b16c97.jpg)


The following controls are used to navigate long logs:

- ![Alt text](../../Master%20Data%20Hub/Images/Common/main-bt-list-first_4d860db1-a3bf-4ccb-b1ae-3718146313a6.jpg) - Shows the first items in the list.

- ![Alt text](../../Master%20Data%20Hub/Images/Common/main-bt-list-previous_fecf5522-8e9f-4a4a-b5f8-a70b4d5be5c0.jpg) - Shows the previous items in the list.

- **X-Y of Z** - Indicates the number and relative position of items currently visible — for example, “51-75 of 2086”.

- ![Alt text](../../Master%20Data%20Hub/Images/Common/main-bt-list-next_fa70ff4f-be87-489f-8a03-c05acee8e2c0.jpg) - Shows the next items in the list.

- ![Alt text](../../Master%20Data%20Hub/Images/Common/main-bt-list-last_1750adde-aef7-4874-8e74-c9a0d692981b.jpg) - Shows the last items in the list.
