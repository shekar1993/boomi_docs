# Finding trading partner documents 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-e980fa6c-d84b-469d-9d6a-2e6b7966f8a1"/>
</head>


Use Process Reporting to find trading partner documents.

1.  In the **Manage** menu’s **Process Reporting** page, select **Trading Partner** from the list on the left.

2.  Click the arrow next to the time/date filter and select one of the following from the dialog:

    -   **Past Hour**

    -   **Past 24 Hours**

    -   **Past Week**

    -   **Date Range**, then select **From** and **To** dates from the calendars. You can optionally select an hour and minutes for each date.

3.  Click **Apply**.

4. **Optional:** Click **Add Filter** and choose the **Atom** filter type.

    1.  Select one to 10 Atoms.

    2.  Click **Apply**.

    If you want to see results for all Atoms, do not set this filter. If you select more than 10 Atoms, you will see an error message.

5. **Optional:** Click **Add Filter** and choose the **Tracked Fields** filter type.

    1.  In the **Search for** field, type the value that you want to find.

    2.  In the **In** field, select one to 10 user defined fields, connector attributes and or document standard attributes.

    3.  Click **Apply**.

    If you select more than 10 tracked fields, you will see an error message.

6. **Optional:** Click **Add Filter** and choose the **From Trading Partner** filter type.

    1.  Click the **Choose** icon, locate a trading partner and select it.

    2.  Click **Apply**.

7. **Optional:** Click **Add Filter** and choose the **To Trading Partner** filter type.

    1.  Click the **Choose** icon, locate a trading partner and select it.

    2.  Click **Apply**.

8. **Optional:** To apply additional filters and/or filter by a document standard other than X12, click **X12 Document Standard** and in the filter selection dialog, do one or more of the following:

    1.  To filter by a document standard other than X12, in the **Document Standard** list, select the document standard.

    2.  To filter by document type, type the **Document Type**, or click the **Choose Document Type** icon, select the document type in the Select Transmission dialog, and click **OK**.

    3.  To filter by documents that were not acknowledged or that failed, select **Errored / Unacknowleged Docs Only**.

    4.  If X12 is the selected **Document Standard**, you can filter by either or both of the following: **ISA Control Number** and **GS Control Number**.

    5.  If EDIFACT is the selected **Document Standard**, you can filter by **Interchange Control Reference Number**.

    6.  If ROSETTANET is the selected **Document Standard**, you can filter by any or all of the following: **Sender ID**, **Receiver ID**, **PIP Code**, **In Response to Instance Identifier**, and **Transaction Instance Identifier**.

    7.  Click **Apply**.

9. **Optional:** To further filter the results in the table, click one of the following:

    -   **All** \(the default\)

    -   **Errors**

    -   **Successes**

## Results

The trading partner documents appear in the table.