# Rerunning one or more documents 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-d7ceaae8-2c77-4d4b-ad5c-543d15971a92"/>
</head>


You can rerun documents from Process Reporting.

## Procedure

1.  Go to **Manage** \> **Process Reporting**.

    By default, all process executions that occurred in the account within the past hour are displayed.

2. **Optional:**  Change the search options and filters to locate the process execution that you need.

3.  In the process execution results table, find the process and click its link in the **Time** column.

4.  In the process execution detail view, locate the connection with the documents that you want to rerun.

5.  Click the connection’s **Successes** or **Errors** link.

    The connection documents list appears.

6.  To rerun one document:

    1.  Click the ![Gear or Actions icon](../Images/main-ic-gear-blue-and-arrow-black-16_188e61d7-2204-48ad-b085-15fa4a70615d.jpg) **Actions** icon for the document.

    2.  Select ![Re-run document](../Images/main-ic-document-two-blue-curved-arrows_d5a9b591-588d-4888-94aa-3839cdb10912.jpg) **Re-run Document** or ![Run Document in Test Mode](../Images/main-ic-document-with-gear_bb87e431-ee33-4e21-a010-c8989ff93c28.jpg) **Run Document in Test Mode**.

    3.  Click **OK**.

7.  To rerun multiple documents:

    1.  Do one of the following:

        -   Select the check box at the top of the list to select all documents on a single page. This allows you to select up to 25 documents. \(Clear this check box to clear your selections.\)

        -   Select check boxes next to individual documents on a single page.

        -   If you want to rerun all documents, all documents with errors or all successful documents in the process execution, do not select any documents.

        If the number of inbound documents spans multiple pages and you select documents on multiple pages, the rerun only runs the documents on the *current* page.

    2.  Click **Re-run documents** or **Re-run documents in Test Mode**.

    3.  Select one of the following: **All Errors**, **All Successes** or \(if you selected documents in step 7-a\) **Selected**.

    4.  Click **OK**.

        You cannot rerun more than 100 documents in test mode. If you select more than 100, an error message appears.

## Results

The document or documents are reprocessed as a new process execution.