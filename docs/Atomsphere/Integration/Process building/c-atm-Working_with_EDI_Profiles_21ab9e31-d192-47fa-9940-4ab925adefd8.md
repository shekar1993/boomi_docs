# Working with EDI profiles 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-21ab9e31-d192-47fa-9940-4ab925adefd8"/>
</head>


Use the EDI Profile’s Data Elements tab to manually add or import segments that define the field structure of the EDI document you are going to process.

-   When you create an EDI Profile, go to the Options tab and select an EDI standard. If you are creating an X12, HL7 or EDIFACT EDI profile, select a version. If you are creating an HL7 profile, additionally select the message type. Then select the transmission type — either an X12 transaction set, an HL7 transmission type, or an EDIFACT message type — and then select and import pre-configured segments for the selected version. Based on the looping section you are constructing, the segment(s) are added to the appropriate section loop and appear on the Data Elements tab.

-  If you are creating a Tradacoms or ODETTE EDI profile, select the message type and then select and import pre-configured segments for the selected message type. Based on the looping section you are constructing, the segment(s) are added to the appropriate section loop and appear on the Data Elements tab.

-   If you are creating a user-defined EDI profile, manually add the child loops, segments, data elements, and instance identifiers on the Data Elements tab.