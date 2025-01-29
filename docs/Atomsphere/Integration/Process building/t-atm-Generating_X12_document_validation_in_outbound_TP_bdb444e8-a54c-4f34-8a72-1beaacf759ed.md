# Generating document validation in outbound Trading Partner steps 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-bdb444e8-a54c-4f34-8a72-1beaacf759ed"/>
</head>


Follow these steps to configure an X12, EDIFACT, HL7, ODETTE, or RosettaNet trading partner to enable document validation in outbound Trading Partner steps.

## Procedure

1.  In the trading partner component, do one of the following:

    -   If you are enabling X12 document validation, select the **X12 Standard** tab.

    -   If you are enabling EDIFACT document validation, select the **EDIFACT Standard** tab.

    -   If you are enabling HL7 document validation, select the **HL7 Standard** tab.

    -   If you are enabling ODETTE document validation, select the **ODETTE Standard** tab.

    -   If you are enabling RosettaNet document validation, select the **ROSETTANET Standard** tab.

2.  Do one of the following:

    -   If you are enabling X12 document validation, expand **Basic X12 Options**.

    -   If you are enabling EDIFACT document validation, expand **Basic Edifact Options**.

    -   If you are enabling HL7 document validation, expand **Basic HL7 Options**.

    -   If you are enabling ODETTE document validation, expand **Basic ODETTE Options**.

    -   If you are enabling RosettaNet document validation, expand **Basic RosettaNet Options**.

3.  Do one of the following:

    -   To enable interchange-level validation for X12, EDIFACT, HL7, or ODETTE interchanges, select **Validate Outbound Interchanges**.
    -   To enable validation for RosettaNet messages, select **Validate Outbound Documents**, and then skip to step 5 to select the applicable message types and enable validation for those types.

4. **Optional:**   \(X12, EDIFACT, HL7, ODETTE only\) Do one of the following:

    -   To send each document found to have error to a Trading Partner step’s Errors path, in the **Outbound Validation Option** list, select Filter Errored Documents.

    -   To send the entire interchange to a Trading Partner step’s Errors path if a document error occurs, in the **Outbound Validation Option** list, select Fail Interchange if Any Documents Have Errors.

5.  To enable validation at the transaction set level \(X12\), message level \(EDIFACT, ODETTE, or RosettaNet\), or transmission level \(HL7\), select the **Document Types** tab. Then for each transaction set, message type, or transmission type for which documents are to be validated, do the following:

    1.  Click **Add Document Type**.

    2.  In the Select Transmission dialog, select the transaction set, message type, or transmission type, and click **OK**.

        The Document Options panel appears.

    3.  Do one of the following:

        -   If you are enabling X12 document validation, select **Validate Outbound Transaction Sets**.

        -   If you are enabling EDIFACT, ODETTE, or RosettaNet document validation, select **Validate Outbound Messages**.

        -   If you are enabling HL7 document validation, select **Validate Outbound Transmissions**.

    4.  If you are enabling X12, EDIFACT, HL7, or ODETTE document validation, to disable qualifier validation, clear **Validate Qualifiers**.

    5.  Select the **Document Profile** to use for validation.

    6.  Click **Close**.

6.  Click **Save** or **Save and Close**.


## Next steps

If you are enabling X12, EDIFACT, or ODETTE document validation and validation rules are defined for segments in the selected **Document Profile**, to enable the rules to be applied to the segments in documents, open the profile, select its **Options** tab, and select **Segment Validation Rules**.