# Trading Partner X12 Standard tab 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-C822AED8-ABD1-4967-A00B-D1C8AB328AB7"/>
</head>


The X12 Standard tab is where you set ISA Identification, ISA Version / Control Options, and GS Version / Control Options.

Inbound and outbound files are automatically validated based on the data populated within this tab. Certain envelope fields are automatically populated for outbound interchanges.

## Basic X12 Options 

These options are applicable only to partners that you trade with — not to “This is my company.”

**Name**  
**Description**

**Functional Acknowledgment Options**  
Controls the generation of acknowledgment messages after validation of data in incoming transmissions.

Validation is performed in the Start step by comparing the data against the referenced profile’s segment and element configuration, including mandatory fields, data types, and minimum/maximum lengths. Validation includes the application of segment validation rules if rules are defined in the profile and the **Segment Validation Rules** option is selected in the profile. The result of the validation for a transaction set in a transmission is captured as the “Is Valid Message?” document property.

-   Do Not Acknowledge — Functional acknowledgment messages are not generated.

   -   Acknowledge Functional Groups — Functional acknowledgment message generation occurs at the functional group level. If one or more transaction sets in a functional group is invalid, the “Is Valid Message?” document property is set to false for all transaction sets in that functional group.

 -   Acknowledge Transaction Sets — Functional acknowledgment message generation occurs at the transaction set level. If a transaction set is invalid, its “Is Valid Message?” document property is set to false.


**Document Envelope Option**  
Specifies the manner in which transaction sets are grouped in outbound interchanges:

 -   Group By Interchange \(default\) — A single interchange is generated that can have one or more functional groups. Each of those functional groups has one or more transaction sets.

 -   Group By Functional Group — All transaction sets of the same message type are grouped together, resulting in a single functional group within the interchange. That functional group has one or more transaction sets.

-   Group By Transaction Set — There is a single interchange for each transaction set.


**Element Delimiter**  
Sets the delimiter between data elements in segments in outbound messages:

  -   Star Delimited \(default\)

 -   Comma Delimited

 -   Tab Delimited

 -   Tick Mark \( \` \) Delimited

 -   Bar \( \| \) Delimited

 -   Byte Character — Sets the delimiter to the formatted byte character typed in the adjacent field. For example, 0XFF. The format should be parsable by the method described [here](https://docs.oracle.com/javase/7/docs/api/java/lang/Integer.html#decode(java.lang.String)).

 -   Other Character — Sets the delimiter to the character typed in the adjacent field.


**Segment Termination Character**  
Sets the end character for segments in outbound messages:

 -   New Line \(No End Character\) \(default\)

 -   Single Quote

 -   Tilde \(~\)

 -   Byte Character — Sets the terminator to the formatted byte character typed in the adjacent field. For example, 0XFF. The format should be parsable by the method described [here](https://docs.oracle.com/javase/7/docs/api/java/lang/Integer.html#decode(java.lang.String)).

-   Other Character — Sets the terminator to the character typed in the adjacent field.


**Filter Functional Acknowledgements**  
If selected, Trading Partner steps performing inbound interchanges will not pass type 997 functional acknowledgment documents or TA1 interchange acknowledgment documents to processes.

**Reject Duplicate ISA**  
If selected, X12 documents are rejected when documents with the same ISA control number have already been received.

**Validate Outbound Interchanges**  
If selected, X12 documents in outbound interchanges are validated.

Validation includes the application of segment validation rules if rules are defined in the referenced EDI profile and the **Segment Validation Rules** option is selected in the profile.
  
**Outbound Validation Option**  
Sets the manner in which outbound validation is performed.

 -   Filter Errored Documents — Each document found to have any errors is sent to the Trading Partner step’s Errors path.

 -   Fail Interchange if Any Documents Have Errors — When a document error occurs, the entire interchange is sent to the Trading Partner step’s Errors path.

 This control is disabled if **Validate Outbound Interchanges** is cleared.

## ISA Identification Options 

**Name**  
**Description**

**Authorization Information Qualifier \(ISA01\)**   
Sets ISA01, Authorization Information Qualifier, which categorizes **Authorization Information ID \(ISA02\)**:

-   00-No Authorization Required

 -   01-UCS Communication ID

 -   02-EDX Communication ID

 -   03-Additional Data information

 -   04-Rail Communications ID

 -   05-DoD Communications ID


**Authorization Information ID \(ISA02\)**  
Sets ISA02, Authorization Information, which further identifies or authorizes the sender of the interchange data.

**Security Information Qualifier \(ISA03\)**  
Sets ISA03, Security Information Qualifier, which categorizes **Security Information ID \(ISA04\)**:

 -   00-No Security Information Present

 -   01-Password


**Security Information ID \(ISA04\)**  
Sets ISA04, Security Information, which is security information about the sender or interchange data.

**Interchange ID Qualifier \(ISA05/07\)**  
Sets Interchange ID Qualifier — ISA05 in the case of outbound documents or ISA07 in the case of inbound documents — which categorizes **Interchange ID \(ISA06/08\)**:

 -   01-Duns

 -   02-SCAC

 -   03-FMC

 -   04-IATA

 -   07-Global Location Number

 -   08-UCC Communications Id

  -   09-X.121

 -   10-DoD

 -   11-DEA

 -   12-Phone Number

 -   13-UCS Code

 -   14-Duns Plus Suffix

 -   15-Petroleum Accountants Society of Canada Code

 -   16-Duns Number Plus 4 Character Suffix

 -   17-ABA

 -   18-ARA

 -   19-EDICA

 -   20-Health Industry Id Number

 -   21-IPEDS

 -   22-FICE

 -   23-NCES

 -   24-ATP

 -   25-ACT

 -   26-Statistics of Canada List of Postsecondary Institutions

 -   27-Carrier Id Number/HCFA

 -   28-Fiscal Intermediary Number/HCFA

-   29-Medicare Provider Assigned by HCFA/HCFA

 -   30-US Federal Tax Id Number

 -   31-IAIABC

 -   32-FEIN

 -   33-NAIC

 -   34-Medicare Provider Assigned by States/HCFA

 -   NR-NRMA

 -   ZZ-Mutually Defined


**Interchange ID \(ISA06/08\)**  
Typically, this is set to the same value as **Application Code \(GS02/03\)** under GS Version / Control Options:

 -   For outbound interchanges, sets ISA06, Interchange Sender ID, which identifies the sender.

 -   For inbound interchanges, sets ISA08, Interchange Receiver ID, which identifies the receiver.


## ISA Version / Control Options 

:::note

ISA13, Interchange Control Number, which identifies each transmitted interchange and is unique for each combination of sending and receiving trading partner, is assigned automatically. A counter maintained on the Atom specifies the next value to assign. You can reset this counter by editing the value in the Atom Counters dialog on the Atom. This value is also stored in the counter file in the counter directory on the Atom. The counter filename contains the trading partner component IDs with hyphens omitted — first the sending partner \(“My Company”\), then the receiving partner — followed by `isactrl.ctr`. You can locate trading partner component IDs in Revision History.

:::

**Name**  
**Description**

**Interchange Standard ID \(ISA11\)**  
Sets ISA11:

 -   For X12 standards before 4020, sets Interchange Control Standards Identifier, the code for the agency that controls the interchange. Valid values are: U \(US EDI community of ASC X12\), TDCC, and UCS.

 -   For 4020 and above, ISA11 serves as the repetition separator, which separates repeated occurrences of a simple data element or a composite data structure. The value has to be different from the data element separator, component element separator, and segment terminator.


**Interchange Version \(ISA12\)**  
Sets ISA12, Interchange Control Version Number, which identifies the version being transmitted. For example, for X12 version 4010, set this to 00401. If your company uses multiple standards, create an EDI profile for each, identifying the profile name with the standard being used.

**Interchange Ack. Requested \(ISA14\)**  
Sets ISA14, Acknowledgment Requested, which is the sender’s code for requesting an acknowledgment that ISA and IEA segments were received and recognized:

 -   Off is equivalent to a value of 0 — request no acknowledgment.

  -   On is equivalent to a value of 1 — request acknowledgment.


**Test Indicator \(ISA15\)**  
Sets ISA15, Test Indicator, which specifies whether the interchange is for testing or production:

  -   T — Test

 -   P — Production


**Component Separator \(ISA16\)**  
Sets ISA16, Sub-element Separator, which is the separator for data sub-element components. This separator commonly defaults to ":" or "\>".

## GS Version / Control Options 

:::note

GS06, Group Control Number, which identifies the functional group for internal routing purposes and is unique for each combination of sending and receiving trading partner, is automatically assigned. A counter maintained on the Atom specifies the next value to assign. You can reset this counter if needed by editing the value in the Atom Counters dialog on the Atom. This value is also stored in the counter file in the counter directory on the Atom. The counter filename contains the trading partner component IDs with hyphens omitted — first the sending partner \(“My Company”\), then the receiving partner — followed by `gsctrl.ctr`. You can locate trading partner component IDs in Revision History.

:::

**Name**  
**Description**

**Application Code \(GS02/03\)**    
Typically, this field is set to the same value as **Interchange ID \(ISA06/08\)** under ISA Identification Options:

-   For outbound interchanges, sets GS02, Application Sender’s Code, which identifies the sender.

-   For inbound interchanges, sets GS03, Application Receiver’s Code, which identifies the receiver.


**Responsible Agency Code \(GS07\)**  
Sets GS07, Responsible Agency Code, which is a code used with **GS Version \(GS08\)** to identify the agency that has control of the standard for the type of document being sent:

 -   T — Transportation Data Coordinating Committee

 -   X — Accredited Standards Committee


**GS Version \(GS08\)**  
Sets GS08, Version/Release/Industry Identifier Code, which is a code for the version, release, and industry of the standard for the type of document being sent. Include the prefix “00” \(for example, for X12 version 5010, the value is 005010\).