# B2B/EDI Management 

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-d5696240-2082-4ba5-9963-e3abec191b3a"/>
</head>


**We released this feature:**

-   Added validation rules to the Client SSL Certificate field for trading partners configured with the FTP communication method using the Trading Partner API and the Boomi Enterprise Platform. \(B2B-3278\)

**We fixed these issues:**

-   The connection no longer fails when a trading partner configured with the HTTP communication method extends the OAuth2 connection field for the scope value. \(B2B-3139\)
-   Custom tracked fields with Archiving enabled in a RosettaNet trading partner listener no longer causes an error. \(B2B-3293\)
-   During outbound processing in an HL7 connector, when the message type has a message structure value, the processor correctly applies options to document types and validates the profile. \(B2B-3469\)
-   When you created a new EDI profile from the HL7 Trading Partner Document Types panel, the version, type, and transmission values for importing a transmission from the standard were empty. \(B2B-3465\)
-   The My Company component no longer creates a new version when you save it with no configuration changes. \(B2B-3145\)