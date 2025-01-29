# Importing segments into an EDI profile 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-016f8cd5-9968-47b6-84ba-6837570a915d"/>
</head>


You can import segments when you create an EDI profile.

## Procedure

1.  Create an EDI profile.

2.  In the Getting Started box, click **Import a Profile**.

    The import wizard opens to the Select Transmission screen.

3.  If you are importing segments into an X12, EDIFACT, or HL7 profile, select the **Version** of the standard. If you are importing segments into an HL7 profile, additionally select the message **Type**. If you are importing segments into an ODETTE or Tradacoms profile, skip to step 4.

4.  Select the **Transmission** for which to import segments. Your selection is either an X12 transaction set, an EDIFACT message type, an HL7 transmission type, an ODETTE message type, or a Tradacoms message type.

5.  Click **Next**.

    The wizard advances to the Choose Segment\(s\) screen. If you are importing segments into an X12, EDIFACT, or HL7 profile, the segments are part of the **Version** of the standard that you selected.

6.  Expand the sections as needed.

7.  Select the check boxes next to the individual segments that you need, or select the check box next to a parent segment to select it and all of its children segments.

8.  Click **Import**.

    The selected segments appear on the **Data Elements** tab under the appropriate section loop. If you selected the X12 **Standard**, validation rules defined in the standard for the selected **Version** of the standard are automatically added to the imported segments.

9. **Optional:**  To import more child loops, segments and data elements, click **Import** to reopen the import wizard and then repeat steps 3–8.

    The wizard’s Select Transmission screen is pre-populated with the previously selected **Transmission**, and if applicable, the previously selected **Version**.

    :::note
    
    You also have the option to manually add more child loops, segments, and data elements in the **Data Elements** tab.

    :::

10. Click **Save**.