# B2B/EDI Management 

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-bbaee269-15b5-49d0-a9f2-e7409b351592"/>
</head>





## AS2 connectors 

Feature:

-   AS2 connectors are upgraded to support the latest version of the Bouncy Castle library. Older versions of Bouncy Castle are still supported. (B2B-2540)



To learn more about this feature, see the topics [AS2 Client connector](/docs/Atomsphere/Integration/Connectors/r-atm_AS2_Client_connector_44e95cd6-79bb-4dd7-8d0d-ad31fff69af3.md) and [AS2 Shared Server connector](/docs/Atomsphere/Integration/Connectors/r-atm-AS2_Shared_Server_connector_52f5c067-676d-417f-a68d-1207664ca092.md).


## AS2 Communication Method 

Feature:

-   The AS2 Communication Method includes legacy S/MIME support to increase compatibility for trading with partner systems. Existing components will have legacy support enabled automatically. To add legacy support for new components, you can select the **Legacy S/MIME Support \(RFC3851\)** check box in the when configuring AS2 settings.




To learn more about this feature, see the topic [AS2 Communication Method configuration](/docs/Atomsphere/Integration/Process%20building/r-atm-AS2_Communication_Method_configuration_72a8923f-f787-48ca-84a6-b5d939be9832.md).


## EDI templates 

Fix:

-   This fix resolves an issue where the EDI built-in templates for the 834 profiles under v5010 HIPPA included the 2200 through 2700 loops in the Summary section. These loops are now correctly found in the Detail section. (B2B-337)






## HL7 standard 

Fixes:

-   This fix resolves an issue where multiple options were shown for the **Segment Terminator** in the Basic HL7 Options page. Carriage Return is the only valid option. \(B2B-343\)

-   This fix resolves an issue where options other than Carriage Return were accepted for the Segment Terminator when using the Trading Partner API. \(B2B-2640\)






## MLLP Communication Method 

Feature:

-   The MLLP Communication Method is upgraded to support Java version 7. \(B2B-2442\)


To learn more about this feature, see the topic [MLLP Communication Method configuration](/docs/Atomsphere/Integration/Process%20building/r-atm-MLLP_Communication_Method_configuration_efcf53f8-07c5-4a5a-a23e-8e66435ea03a.md).


## Odette standard 

Feature:

-   The Odette EDI standard now supports extensions. \(B2B-2205\)


## Organization component 

Feature:

-   On the New Organization page, under Contact Information, the **Contact URL**field uses the same error validation logic as the other URL fields in the . \(B2B-2491\)



 To learn more about this feature, see the topic [Organization components](/docs/Atomsphere/Integration/Process%20building/r-atm-Organization_components_b3db9a57-0c21-434a-a6e5-53d521acadcc.md).


## XML profiles 

Fix:

-  A loading spinner icon now displays in the Boomi Enterprise Platform when you import RosettaNet document types while adding an XML profile to indicate that the document types are still loading and that the page has not stalled. (B2B-306, B2B-2507)



## UI updates 

Features:

-   All help text on the Trading Partner configuration pages is now displayed with an Info icon next to the label text. (B2B-2248)

-   The Info icons on the Standard Configuration page and the Communication Method panel are consistently aligned next to the label text. (B2B-2520)

-   Deleted profiles on the Document Types page show a red warning tooltip instead of a red underline. (B2B-2271)

-   On the AS2 Communication Method page, conditional fields, such as IP filtering and MDN, display only when the check box is selected. (B2B-2286)

-   The summary text for the XML Import Profile for RosettaNet panel is updated to be consistent with the text in the EDI Profile panels for other EDI standards. \(B2B-2451\)

-   The summary text for the RosettaNet Add Document Type panel for the Trading Partner and Trading Partner Management pages is updated to be consistent with the text for other EDI standards. \(B2B-2452\)

-   The summary text for the RosettaNet Add Document Type panel for a Processing Group component is updated to be consistent with the text for other EDI standards. \(B2B-2453\)


Fix:

-   This fix resolves an issue where selecting the **Sign Message**, **Encrypt Message**, and **Multiple Attachments** check boxes when configuring the AS2 Communication Method automatically selected the check boxes for their respective conditional fields **Signature Secure Hash Algorithm**, **Maximum Document Count**, and **Encryption Algorithm**. \(B2B-2584\)
