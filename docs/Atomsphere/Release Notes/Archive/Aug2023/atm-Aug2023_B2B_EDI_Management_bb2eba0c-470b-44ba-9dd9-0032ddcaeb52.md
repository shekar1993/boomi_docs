# B2B/EDI Management 

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-bb2eba0c-470b-44ba-9dd9-0032ddcaeb52"/>
</head>


**Features**:

-   Added the HL7 message fields Sender Network Address and Receiver Network Address as document properties and tracked fields in the HL7 connector. \(B2B-3084\)
-   Added validation rules to various fields for the MLLP, AS2, HTTP, and OFTP2 communication methods for the Trading Partner API. \(B2B-2922, B2B-3276, B2B-3279, B2B-3280\)

**Fixes**:

-   Fixed an issue where using the Data Process step to remove the Carriage Return or Line Feed fields from a trading partner caused a line break error when re-running documents from the Process Reporting page. \(B2B-2780\)
-   Fixed an issue where the "From Trading Partner" and "To Trading Partner" filters did not work for RosettaNet trading partners on the Process Reporting page. \(B2B-3414\)

-   Fixed an issue where namespaces in receipt acknowledgments failed to process for a RosettaNet trading partner, which resulted in an "Unable to update Acknowledgment Status" error. \(B2B-2607\)