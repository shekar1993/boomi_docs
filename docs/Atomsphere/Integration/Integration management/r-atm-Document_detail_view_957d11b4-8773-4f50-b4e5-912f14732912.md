# Document detail view 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-957d11b4-8773-4f50-b4e5-912f14732912"/>
</head>


Clicking a date/time link for a document in the document results table opens the detail view for that document.

![Document Details](../Images/manage-ps-process-reporting-document-details_0c149951-2d4a-4763-b80b-c39d6fd3bba1.jpg)

Clicking and dragging the ![Domino-shaped icon](../Images/main-ic-dots-8-gray-on-white_cabceea1-ba32-41cf-8eca-a6a3d43cf2f8.jpg) icon in the view border adjusts the width of the view.

The top of the view shows the following information about the document:

**Name**  
**Description**

**Time**  
The date and time at which the document was processed. The date and time are in the format yyyy-MM-dd hh:mm:ss aa, using the time zone in which you are accessing the UI.

**Process Name**  
The name of the process.

**Atom**  
The name of the Atom on which the process executed.

**Connector/Document Type**  
The name of the connector that was used to produce the document — for example, Disk or NetSuite — except in the case of a trading partner document, in which case:

 -   If the document was processed in a trading partner Start step or Trading Partner step configued to receive or send documents for a single document standard, that standard — for example, X12 — is shown.

 -   If the document was processed in a trading partner Start step or Trading Partner step configued to receive or send documents for multiple document standards, edimulti is shown.


**Action Type**  
The type of action that was used by the connector operation to produce the document. For example, Get, Send, Query, Update, No data, etc.

## Actions 

Clicking **![Gear or Actions icon](../Images/main-ic-gear-gray_54d864eb-b5de-4ee6-9b31-975dae0a5762.jpg) Actions** opens a menu containing the following selection:

**Name**  
**Description**

**![Load Execution](../Images/main-ic-document-with-text-22x21_889d5aa0-0372-4dac-ac84-306ab5559353.jpg) Load Execution**  
Finds the execution during which the document was processed.

## Additional metadata 

Additional document metadata is presented in tabular format and is dependent upon the document type.The following metadata and menu are shown or available in the table regardless of document type:

**Status**  
-   ![Green circle](../Images/main-ic-circle-green-20x22_0a620eac-494b-4d65-9f1f-6b372abe7acd.jpg) Success — The document was processed without errors.
-   ![Red circle with white dash](../Images/main-ic-bar-white-on-red-circle-20_bb816599-0e68-436e-a92a-dafa82affda4.jpg) Error — There was at least one error in processing the document.

**![](../Images/main-ic-gear-blue-and-arrow-black-16_188e61d7-2204-48ad-b085-15fa4a70615d.jpg) Actions**  
This menu contains the following selection:

-   **![View document](../Images/main-ic-document-with-magnifying-glass-16_36098f7c-7a65-41a5-8392-a2e729d3de91.jpg) View Document** — Opens the Document Viewer dialog for viewing the data in the document.

**Size \(kB\)**  
The document file size.

-   For documents retrieved or produced using Disk connector operations, the following additional metadata are shown:

    - **Directory** - The directory, on the system on which the Atom resides, from which or to which the document was read or written.
    - **File Name** - The document filename.

-   For descriptions of trading partner document metadata, see the topic about the Trading Partner results table.

-   For descriptions of metadata for documents retrieved or produced using other types of connectors, see the connector topics.


## Navigation bar

The view contains the following navigation icons:

**![Up arrow](../Images/main-ic-arrow-gray-up_3394c903-2719-4d4b-82cc-ec8cd74d99d2.jpg) Previous**  
Navigates to detail for the previous document in the document results table. Keyboard shortcut: **Up arrow**.

**Next ![Down arrow](../Images/main-ic-arrow-gray-down_c4b5bff8-7fde-4200-b305-68bff70fecf0.jpg)**  
Navigates to detail for the next document in the document results table. Keyboard shortcut: **Down arrow**.

**Close**  
Closes the view, returning focus to the document results table. Keyboard shortcut: **Esc**.

:::note

You can also close the view by clicking in the document results table.

:::
