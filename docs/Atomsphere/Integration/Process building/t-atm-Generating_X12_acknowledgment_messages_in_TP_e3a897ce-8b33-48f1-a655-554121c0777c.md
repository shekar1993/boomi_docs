# Generating X12 acknowledgment messages in Trading Partner Start steps 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-e3a897ce-8b33-48f1-a655-554121c0777c"/>
</head>


Follow these steps to configure an X12 trading partner to enable generation of acknowledgment messages in Trading Partner Start steps:

## Procedure

1.  In the trading partner component, select the **X12 Standard** tab.

2.  Expand **Basic X12 Options**.

3.  Do one of the following:

    -   To enable generation of Functional Acknowledgment \(FA\) messages at the functional group level, in the **Functional Acknowledgment Options** list, select Acknowledge Functional Groups.

    -   To enable generation of FA messages at the transaction set level, in the **Functional Acknowledgment Options** list, select Acknowledge Transaction Sets.

    :::note

    You may also opt to set **Document Envelope Option**, **Element Delimiter**, and **Segment Termination Character**.

    :::

4.  Select the **Document Types** tab.

5.  For each transaction set for which you want to generate message-level acknowledgments, do the following:

    1.  Click **Add Document Type**.

    2.  In the Select Transmission dialog, select the transaction set and click **OK**.

        The Document Options panel appears.

    3. **Optional:** To enable generation of 999 FA messages instead of 997 FA messages, select **Use 999 Acknowledgment**.

    4. **Optional:** To enable generation of TA1 interchange acknowledgment messages, select **Use TA1 Acknowledgment**.

    5. **Optional:** If you are enabling X12 document validation and validation rules are defined for segments in the document profile against which validation is to be performed, to enable the rules to be applied to the segments in documents, select the profile’s **Options** tab and select **Segment Validation Rules**.

    6.  Select the **Document Profile** to use for document validation.

    7.  Click **Close**.

6.  Click **Save** or **Save and Close**.