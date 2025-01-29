# \(Document or Process\) Error detail view 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-e97159df-14eb-4065-bbec-9cff25b8a50a"/>
</head>


In the execution detail view, clicking an error message in the **Documents with Errors** list or above the connections list opens a detail view for the error.

Process errors record the overall execution for all documents processed; whereas document errors record the execution of a single document. Depending on the nature of the failure, the detail may apply either to a specific document or to the execution.

![Document Error Details](../Images/manage-ps-process-reporting-document-error-details_3867dea6-ccd5-4d3d-b0ca-476120826149.jpg)

Clicking and dragging the **![Domino-shaped icon](../Images/main-ic-dots-8-gray-on-white_cabceea1-ba32-41cf-8eca-a6a3d43cf2f8.jpg)** icon in the view border adjusts the width of the view.

The top portion of the view contains a description of the error.

For additional information on viewing document logs and process logs, see the topics [Viewing a document log](./t-atm-Viewing_a_document_log_d5679021-527b-4d11-a12e-1132830a592f.md) and [Viewing a process log](./t-atm-Viewing_a_process_log_cf926bcb-17b1-40e4-8a00-321accf98af4.md).

## Actions 

Clicking the **![Gear or Actions icon](../Images/main-ic-gear-gray_54d864eb-b5de-4ee6-9b31-975dae0a5762.jpg) Actions** button opens a menu containing the following selections (document errors only):

- **![View logs](../Images/main-ic-scroll-white_7787acf3-71b7-4a31-bc94-313ec0051c12.jpg) View Logs** - Opens the Show Log dialog for viewing events recorded during the processing of the document.

- **![View document](../Images/main-ic-document-with-magnifying-glass-16_36098f7c-7a65-41a5-8392-a2e729d3de91.jpg) View Document** - Opens the Document Viewer dialog for viewing the data in the document.

- **![Re-run document](../Images/main-ic-document-two-blue-curved-arrows_d5a9b591-588d-4888-94aa-3839cdb10912.jpg) Re-run Document** - Initiates a request to rerun the document. In the confirmation dialog:

   - Clicking **OK** executes the request.

   - Clicking **Cancel** cancels the request.

- **![Run document in test mode](../Images/main-ic-document-with-gear_bb87e431-ee33-4e21-a010-c8989ff93c28.jpg) Run Document in Test Mode** - Initiates a request to rerun the document in test mode. In the confirmation dialog:

   - Clicking **OK** executes the request.

   - Clicking **Cancel** cancels the request.

## Error Details Tab 

This tab shows the following information about the error and its context. If you need to submit a support request for help with the error, copy and paste the contents of the tab, including the **Stack Trace**, into the request.

**Execution ID** - ID of the execution.

**Process** - Name and revision level of the executed process. This is a link to the process, which opens in a new browser tab or window.

**Step Type** - The type of step in which the error occurred.

**Step** - The names and revision levels of components used in the step in which the error occurred. Each component name/revision pairing is a link to the component, which open in a new browser tab or window.

**Doc References** - Documents referenced by the error message. Clicking a link to a referenced document opens the Document Viewer dialog for viewing the data in the document.

**Stack Trace** - This identifies the location in code in which the error occurred.

## Boomi Resolve Tab 

This tab shows as many as 10 possible solutions to the error, in descending order of relevancy.

![Boomi Resolve](../Images/manage-ps-process-reporting-resolve_9d0c94e9-9603-4455-89e0-e2d21fb4f27a.jpg)

Clicking the expand icon adjacent to a solution heading shows solution detail, including links to articles in the Boomi Community.

## Navigation bar 

The following navigation controls are in the bar at the bottom of the view:

- **![Up arrow](../Images/main-ic-arrow-gray-up_3394c903-2719-4d4b-82cc-ec8cd74d99d2.jpg) Previous** - (Document errors only) Navigates to details for the previous document in the **Documents with Errors** list. Keyboard shortcut: **Up arrow**.

- **Next ![Down arrow](../Images/main-ic-arrow-gray-down_c4b5bff8-7fde-4200-b305-68bff70fecf0.jpg)** - (Document errors only) Navigates to details for the next document in the **Documents with Errors** list. Keyboard shortcut: **Down arrow**.

- **Close** - Closes the view, returning focus to the process execution detail view. Keyboard shortcut: **Esc**.

:::note

You can also close the view by clicking in the process execution detail view.

:::