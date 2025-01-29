# B2B/EDI Management 

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-da62cab5-5244-45fa-b6e3-1a536164832c"/>
</head>





## Build page 

Fix:

-   This fix resolves an issue where users could not create a Trading Partner, a Communication Channel, or an EDI Profile from the **Create New** dropdown menu on the Build page. \(B2B-2990\)





## EDI profile 

Fix:

-   This fix resolves an issue where, when creating a new EDI profile in a Document Cache, the new profile defaulted to X12 without providing the option to select a standard. \(B2B-2883\)






## MLLP Client connection 

Fix:

-   This fix resolves an issue with inconsistent validation rules for the fields in the MLLP Client connection. \(B2B-2834\)






## MLLP Communication Method 

Fix:

-   This fix resolves an issue with inconsistent validation rules for the fields in the MLLP Communication Method configuration panel. (B2B-2915)




## MLLP Server operation 

Fix:

-   This fix sets a character limit for the To and From fields on the **MLLP Info** tab in an MLLP Server operation component, preventing large inputs from potentially causing 
performance issues. \(B2B-2835\)




## Process Reporting 

Fix:

-   This fix resolves an issue where validation error messages that were generated when selecting a document standard were not cleared when the dialog was cancelled and then reopened on the Process Reporting page for Trading Partners. (B2B-290)




## Trading Partner components 

Fix:

-   This fix resolves an issue where an inbound Trading Partner would throw an exception while processing X12 data if the Interchange Sender ID had 15 characters. (B2B-1460)




## Trading Partner management 

Fixes:

-   This fix resolves an issue where users could not click the **Add a Trading Partner** or the **Add a Processing Group** button on the Trading Partner Management page. \(B2B-2986, B2B-2987\)

-   All HTTP protocols are correctly displayed under the Protocol column in the Trading Partner **Where Used** tab. \(B2B-2927\)




## Trading Partner step 

Fix:

-   This fix resolves an issue where re-running documents from the Raw Data tab on the **Process Reporting** page resulted in an error. \(B2B-788\)




## UI uplift 
Features:

-   The dialog style is updated for the Data Elements fields on the EDI Profile page. \(B2B-2530\)

-   The underline below the section headers on the **Data Process Properties** dialog is updated to match the styling on other pages. \(B2B-2763\)

-   The fields in the oAuth and oAuth2.0 sections of the HTTP Communication Method configuration panel are properly aligned to match the other sections in the panel. \(B2B-2913\)

-   The **Data Process Properties** dialog is updated so that all elements are aligned properly and fully visible on the page. \(B2B-2928\)

-   The **Move Step Up** and **Move Step Down** buttons on the **Data Process Properties** dialog are enabled only when the list of properties contains more than one element and at least one element is selected. \(B2B-2929\)

-   On Communication Method configuration dialogs, a character limit warning displays for text fields if the character limit is exceeded. \(B2B-2419, B2B-2420, B2B-2421, B2B-2422, B2B-2423\)


