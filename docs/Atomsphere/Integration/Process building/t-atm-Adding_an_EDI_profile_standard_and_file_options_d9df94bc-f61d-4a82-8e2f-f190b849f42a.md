# Adding a standard and file options to an EDI profile 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-d9df94bc-f61d-4a82-8e2f-f190b849f42a"/>
</head>


To add a standard, open a profile’s Options tab, select a standard, select delimiters and terminator, and additional info for that standard.

## Before you begin

Before you add standards or complete options, [create and open an EDI profile](t-atm-Creating_an_EDI_profile_from_Component_Explorer_6d28841b-2e52-4d4d-bf6c-5288cea63c12.md).

## Procedure

1.  Click the **Options** tab.

2.  Select a standard — EDIFACT, HL7, ODETTE, Tradacoms, X12, or User Defined.

    A File Options section appears for all standards. Other sections may also appear depending on the standard.

3.  Select a file type:

    -   **Delimited**, then skip to step 4.

    -   **Data Positioned**, enter a **Pad Character**, then skip to step 8.

4.  Select a file delimiter.

5.  Select a segment terminator.

6.  Select a composite delimiter.

7.  Select a sub-composite delimiter if you are using the HL7 standard.

8.  **Optional:** If you are using the EDIFACT or ODETTE standard, to require, upon reading a document, that the first segment in a loop be present if the **Mandatory** option for that segment is selected, select **First Segment of Loop is Required**.

9. **Optional:** If you are using the X12, EDIFACT, or ODETTE standard, to enable segment validation rules to be defined in the **Data Elements** tab’s EDI Segment Details panel and to enable those rules to be applied to segments in documents, select **Segment Validation Rules**.

10. Do one of the following steps for your standard:

    -   EDIFACT — complete the EDIFACT Version Information section.

    -   HL7 — complete the HL7 Version Information section.

    -   ODETTE — complete the ODETTE Message Information section.

    -   Tradacoms — complete the Tradacoms Message Information section.

    -   X12 — complete the X12 Version Information and Options sections.

    -   User Defined — skip to the next step.

11. Click **Save**.