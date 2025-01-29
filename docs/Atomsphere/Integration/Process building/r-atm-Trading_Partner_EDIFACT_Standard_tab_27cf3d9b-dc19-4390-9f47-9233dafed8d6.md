# Trading Partner EDIFACT Standard tab 

<head>
  <meta name="guidename" content="Integration"/>
  <meta name="context" content="GUID-B3253783-4775-4909-B533-2F0C38BEA8D5"/>
</head>


The EDIFACT Standard tab is where you set Basic Options, Interchange Identification Options, Interchange Version / Control Options, Functional Group Identification Options, and Message Version / Control Options.

Inbound and outbound files are automatically validated based on data populated within this tab. Some envelope fields for outbound interchanges are populated automatically.

## Basic Edifact Options 

These options apply only to trading partners — not to “This is my company.”

**Name**  
**Description**

**CONTRL Acknowledgement Options**  
Specifies whether a CONTRL message is generated as an acknowledgment of a received interchange:

-   Do Not Acknowledge

 -   Acknowledge


Validation is performed in the Start step by comparing the data against the referenced profile’s segment and element configuration, including mandatory fields, data types, minimum/maximum lengths. Validation includes the application of segment validation rules if rules are defined in the profile and the **Segment Validation Rules** option is selected in the profile.

**Document Envelope Option**  
Specifies the grouping method for outbound interchanges:

   -   Group By Interchange — All messages are combined into a single interchange.

-   Group By Functional Group

 -   Group By Message — The interchange consists of a single message.


**Element Delimiter**  
Sets the delimiter between data elements in segments in outbound messages:

 -   Plus \( + \) Delimited \(default\)

-   Star Delimited

 -   Comma Delimited

 -   Tab Delimited

 -   Tick Mark \( \` \) Delimited

  -   Bar \( \| \) Delimited

   -   Colon \( : \) Delimited

-   Byte Character — Sets the delimiter to the formatted byte character typed in the adjacent field \(for example, 0XFF\). The format should be parsable by the method described [here](https://docs.oracle.com/javase/7/docs/api/java/lang/Integer.html#decode(java.lang.String)).

-   Other Character — Sets the delimiter to the character typed in the adjacent field.


**Segment Termination Character**  
Sets the termination character for segments in outbound messages:

 -   Single Quote \(default\)

 -   New Line \(No End Character\)

 -   Tilde \(~\)

 -   Byte Character — Sets the terminator to the formatted byte character typed in the adjacent field \(for example, 0XFF\). The format should be parsable by the method described [here](https://docs.oracle.com/javase/7/docs/api/java/lang/Integer.html#decode(java.lang.String)).

-   Other Character — Sets the terminator to the character typed in the adjacent field.


**Composite Delimiter**  
Sets the delimiter between composite elements in outbound messages:

 -   Colon \( : \) Delimited \(default\)

 -   Plus \( + \) Delimited

 -   Star Delimited

 -   Comma Delimited

 -   Tab Delimited

 -   Tick Mark \( \` \) Delimited

-   Bar \( \| \) Delimited

 -   Byte Character — Sets the delimiter to the formatted byte character typed in the adjacent field \(for example, 0XFF\). The format should be parsable by the method described in this [Oracle Integer Class description](https://docs.oracle.com/javase/7/docs/api/java/lang/Integer.html#decode(java.lang.String)).

-   Other Character — Sets the delimiter to the character typed in the adjacent field.


**Filter Functional Acknowledgements**  
If selected, Trading Partner steps that perform inbound interchanges do not pass CONTRL functional acknowledgment documents to processes.

**Reject Duplicate UNB**  
If selected, EDIFACT documents are rejected when documents with the same UNB control number have already been received.

**Include UNA When Writing**  
If selected, the UNA segment is included in outbound EDIFACT documents.

**Validate Outbound Interchanges**  
If selected, EDIFACT documents in outbound interchanges are validated.

Validation includes the application of segment validation rules if rules are defined in the referenced EDI profile and the **Segment Validation Rules** option is selected in the profile.

**Outbound Validation Option**    
Sets the manner in which outbound validation is performed.

-   Filter Errored Documents — Each document found to have any errors is sent to the Trading Partner step’s Errors path.

 -   Fail Interchange if Any Documents Have Errors — When a document error occurs, the entire interchange is sent to the Trading Partner step’s Errors path.


 This control is disabled if **Validate Outbound Interchanges** is cleared.

## Interchange Identification Options 

These options correspond to UNB segment values UNB02 and UNB03.

**Name**  
 **Description**

**ID**  
Enter the identifier:

 -   UNB02, Interchange Sender ID, identifies the sender for outbound interchanges.
 -   UNB03, Interchange Receiver ID, identifies the receiver for inbound interchanges.


**Qualifier**  
Select the Interchange ID Qualifier \(UNB02:2 in outbound documents or UNB03:2 in inbound documents\):

   -   Not Used

 -   1-DUNS \(Data Universal Numbering System\)

  -   4-IATA \(International Air Transport Association\)

 -   5-INSEE \(Institut National de la Statistique et des Etudes Economiques\) - SIRET

  -   8-UCC Communications ID \(Uniform Code Council Communications identifier\)

 -   9-DUNS \(Data Universal Numbering System\) with 4-digit suffix

  -   12-Telephone number

  -   14-EAN International

 -   18-AIAG \(Automotive Industry Action Group\)

 -   22-INSEE \(Institut National de la Statistique et des Etudes Economiques - SIREN

 -   30-IE7-ISO 6523: Organization identification

 -   31-DIN \(Deutsches Institut fuer Normung\)

 -   33-BfA \(Bundesversicherungs anstalt fuer Angestellte\)

 -   34-National Statistical Agency

 -   51-GEIS \(General Electric Information Services\)

 -   52-INS \(IBM Network Services\)

  -   53-Datenzentrale des Einzelhandels

 -   54-Bundesverband der Deutschen Baustoffhaendler

  -   55-Bank identifier code

 -   57-KTNET \(Korea Trade Network Services\)

 -   58-UPU \(Universal Postal Union\)
 -   59-ODETTE \(Organization for Data Exchange through Tele-Transmission in Europe\)

 -   61-SCAC \(Standard Carrier Alpha Code\)

 -   63-ECA \(Electronic Commerce Australia\)

 -   65-TELEBOX 400 \(Deutsche Telekom\)

 -   80-NHS \(National Health Service\)

 -   82–Statens Teleforvaltning

 -   84-Athens Chamber of Commerce

 -   85-Swiss Chamber of Commerce

  -   86-US Council for International Business

  -   87-National Federation of Chambers of Commerce and Industry

  -   89-Association of British Chambers of Commerce

  -   90-SITA \(Societe In + “Objects Selected Internationale de Telecommunications Aeronautiques\)

  -   91-Assigned by seller or seller’s agent

  -   92-Assigned by buyer or buyer’s agent

 -   103-TW, Trade-van

 -   128-CH, BCNR \(Swiss Clearing Bank Number\)

 -   129-CH, BPI \(Swiss Business Partner Identification\)

 -   144-US, DoDAAC \(Department of Defense Activity Address Code\)

 -   145-FR, DGCP \(Direction Generale de la Compatabilite Publique\)

 -   146-FR, DGI \(Direction Generale des Impots\)

 -   147-JP, JIPDEC/ECPC \(Japan Information Processing Development Corporation / Electronic Commerce Promotion Center\)

  -   148-ITU \(International Telecommunications Union\) Data Network Identification Code \(DNIC\)

 -   Z01-Vehicle registration number

 -   ZZZ-Mutually defined

 -   ZZ-Mutually defined


**Routing Address**  
Sets the routing address \(UNB02.3 in outbound EDIFACT interchanges or UNB03.3 for trading partner identification on inbound EDIFACT interchanges\)

**Routing Sub Address**  
Sets the routing sub address \(UNB02.4 in outbound EDIFACT interchanges or UNB03.4 for trading partner identification on inbound EDIFACT interchanges\)

## Interchange Version / Control Options 

**Name**     
  **Description**

**Syntax Identifier \(UNB01\)**  
 Sets UNB01:1, the agency controlling the syntax being used in interchanges:

  -   UNOA-UN/ECE level A

 -   UNOB-UN/ECE level B

  -   UNOC-UN/ECE level C

 -   UNOD-UN/ECE level D

 -   UNOE-UN/ECE level E

 -   UNOF-UN/ECE level F


**Syntax Version**  
Sets UNB01:2, the version number applicable to the selected **Syntax Identifier**:

 -   Version 1 \(ISO 9735: 1988\)

 -   Version 2 \(ISO 9735: 1990\)

-   Version 3 \(ISO 9735 Amendment 1: 1992\)


**Recipient’s Reference/Password**  
Sets UNB06:1, Recipient’s Reference Password, a password assigned by the recipient.

**Qualifier**  
Sets UNB06:2, Recipient’s Reference Password Qualifier, which categorizes **Recipient’s Reference/Password**.

-   NA-Not Used

 -   AA-Reference

  -   BB-Password


**Application Reference \(UNB07\)**  
\(required\) Sets UNB07, Application Reference — minimum one character, maximum six.

**Processing Priority Code \(UNB08\)**  
Sets UNB08, Processing Priority Code:

 -   Not Used

  -   A-Highest Priority


**Acknowledgment Request \(UNB09\)**  
Sets UNB09, Acknowledgement Request, which determines whether a CONTRL message is requested as functional acknowledgment:

 -   Cleared is equivalent to an empty value — acknowledgment not requested.

 -   Selected is equivalent to a value of 1 — acknowledgment requested.


**Communications agreement ID \(UNB10\)**  
Sets UNB10, Communication Agreement — minimum one character, maximum 35.

**Test Indicator \(UNB11\)**  
:Sets UNB11, Test Indicator, which specifies whether the interchange is a test.

 -   Not Used \(default\)

  -   1-Test


## Functional Group Identification Options 

**__Name__**  
**__Description__**

**Use Functional Groups**  
If selected, this envelope groups like messages within a transmission.

**Application ID**  
The Application Sender’s Identification — the specific division, department, section, etc., within the sender's organization that originates \(or is responsible for\) the messages contained in the functional group.

This ID is required in a functional group. If this option is not set, when a process using the trading partner executes, an error will occur.

**Qualifier**  
These code values are the same as Qualifiers in Interchange Identification Options.

## Message Version / Control Options 

**Name**  
**Description**

**Version Number \(UNH02:2\)**  
Sets UNH02:2, Message type version number:

  -   1-Status 1 version

   -   2-Status 2 version

  -   4-Service message version

  -   88-1988 version

 -   89-1989 version

   -   90-1990 version

 -   D-Draft version

  -   S-Standard version


**Release Number \(UNH02:3\)**  
Sets UNH02:3, Message type release number:

 -   1-First release

 -   2-Second release

 -   902-Trial release 1990

 -   911-Trial release 1991

 -   912-Standard release 1991

 -   921-Trial release 1992

  -   932-Standard release 1993

  -   93A-Release 1993 - A

  -   94A-Release 1994 - A

  -   94B-Release 1994 - B

  -   95A-Release 1995 - A

 -   95B-Release 1995 - B

  -   96A-Release 1996 - A

  -   96B-Release 1996 - B

  -   97A-Release 1997 - A

  -   97B-Release 1997 - B

  -   98A-Release 1998 - A

 -   98B-Release 1998 - B

 -   99A-Release 1999 - A

 -   99B-Release 1999 - B

  -   00A-Release 2000 - A

  -   00B-Release 2000 - B

 -   01A-Release 2001 - A

 -   01B-Release 2001 - B

 -   02A-Release 2002 - A

  -   02B-Release 2002 - B

  -   03A-Release 2003 - A

 -   03B-Release 2003 - B

 -   04A-Release 2004 - A

  -   04B-Release 2004 - B

 -   05A-Release 2005 - A

  -   05B-Release 2005 - B
  -   06A-Release 2006 - A

-   06B-Release 2006 - B

  -   07A-Release 2007 - A

 -   07B-Release 2007 - B

  -   08A-Release 2008 - A

  -   08B-Release 2008 - B

  -   09A-Release 2009 - A

  -   09B-Release 2009 - B

  -   10A-Release 2010 - A

   -   10B-Release 2010 - B

  -   11A-Release 2011 - A

  -   11B-Release 2011 - B

 -   12A-Release 2012 - A

  -   12B-Release 2012 - B

  -   13A-Release 2013 - A

  -   13B-Release 2013- B

  -   14A-Release 2014 - A

   -   14B-Release 2014 - B

  -   15A-Release 2015 - A

 -   15B-Release 2015 - B

  -   16A-Release 2016 - A

 -   16B-Release 2016 - B

 -   17A-Release 2017 - A

 -   17B-Release 2017 - B

 -   18A-Release 2018 - A

 -   18B-Release 2018 - B

 -   19A-Release 2019 - A

 -   19B-Release 2019 - B

  -   20A-Release 2020 - A


**Controlling Agency \(UNH02:4\)**  
Sets UNH02:4, Controlling agency for the message type:

   -   AA-EDICONSTRUCT

 -   AB-DIN \(Deutsches Institut fuer Normung\)

-   AC-ICS \(International Chamber of Shipping\)

 -   AD-UPU \(Union Postale Universelle\)

 -   AE-United Kingdom ANA \(Article Numbering Association\)

 -   AF-ANSI ASC X12 \(American National Standard Institute Accredited Standards Committee X12\)

 -   CC-CCC \(Customs Co-operation Council\)

 -   CE-CEFIC \(Conseil Europeen des Federations de l’Industrie Chimique\)

  -   EC-EDICON

   -   ED-EDIFICE \(Electronic Industries project\)

  -   EE-EC + EFTA \(European Communities and European Free Trade Association\)

  -   EN-EAN \(European Article Numbering Association\)

  -   ER-UIC \(International Union of railways\)

  -   EU-European Union

 -   EX-IECC \(International Express Carriers Conference\)

 -   IA-IATA \(International Air Transport Association\)

 -   KE-KEC \(Korea EDIFACT Committee\)

 -   LI-LIMNET

  -   OD-ODETTE \(Organization for Data Exchange through Tele-Transmission in Europe\)

  -   RI-RINET \(Reinsurance and Insurance Network\)

 -   RT-UN/ECE/TRADE/WP.4/GE.1/EDIFACT Rapporteurs’ Teams

 -   UN-UN/ECE/TRADE/WP.4


**Association Assigned Code \(UNH02:5\)**  
 Sets UNH02:5, Association assigned code, which further identifies the message type, maximum six characters.

**Common Access Reference \(UNH03\)**  
Sets UNH03, Common Access Reference, which is the key that relates all subsequent transfers of data to a common file. Partners can agree to using a key made up of components, but sub-element separators cannot be used.