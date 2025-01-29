# B2B/EDI Management 

<head>
  <meta name="guidename" content="Release Notes"/>
  <meta name="context" content="GUID-a440a8d5-79fc-4392-ac65-2f266565bf2a"/>
</head>





## AS2 settings 

Feature:

-   The **Legacy S/MIME Support** field is extensible for AS2 Client, AS2 Shared Server, and Trading Partner components in the AS2 Settings page. \(B2B-2589\)



To learn more about this feature, see the topics [AS2 Client operation](/docs/Atomsphere/Integration/Connectors/r-atm-AS2_Client_operation_d7270f33-a41f-450f-be37-6865f9e03b28.md), [AS2 Shared Server operation](/docs/Atomsphere/Integration/Connectors/r-atm-AS2_Shared_Server_operation_284a7670-2164-4d1c-a601-38e24f378c4f.md), and [Trading Partner Components](/docs/Atomsphere/Integration/AtomSphere%20API/r-atm-Trading_Partner_Components_96eb4e6c-f5a6-4583-98a8-690236d288f9.md).


## Communication method configuration 

Feature:

-   When you delete an IP filter value while configuring a communication method, a dialog box displays, prompting you to confirm that you want to delete the value. (B2B-2285)



## Document Filter panel 

Fix:

-   This fix resolves an issue where the **Interchange Control Reference Number** text box on the Document Filter page was limited to integer values with a maximum length of 10 instead of 14. \(B2B-276\)



## EDI profile

Fix:

-   This fix resolves an issue where, when a new EDI profile was created in a Map step, the profile automatically used the X12 standard instead of providing the option to specify a standard. (B2B-2126)


## Trading Partner process reporting 

Feature:

-   You can filter ODETTE documents by Interchange Control Reference Number on the Trading Partner Process Reporting page. \(B2B-2743\)




To learn more about this feature, see the topic [Process Reporting page](/docs/Atomsphere/Integration/Integration%20management/r-atm-Process_Reporting_page_77bf7bfe-22a1-4085-b151-0c7ab829207f.md).


## UI updates 

Features:

-   When you delete a Trading Partner in a Processing Group component, a dialog box displays, prompting you to confirm that you want to delete the Trading Partner. \(B2B-2277\)

-   On the HTTP Communication Method configuration page, the underline subtitle for the Advanced section matches the width of the other section underlines. \(B2B-2224\)

-   The **Tracked Fields** label on the Document Options page has an asterisk, indicating that it is a required field. \(B2B-2269\)

-   On the Trading Partner Where Used tab, if a process has no deployments, the value in the Deployments column is "None". \(B2B-2678\)

-   On the Data Process Properties page, the **Search** options' text and help icons are aligned to fit properly on the page. \(B2B-2762\)

-   On the Data Process Properties page, the **Add** and **Delete** icons are updated to match the style of other pages. \(B2B-2764\)

-   The **Tracked Fields** label on the Document Options page is updated to fix the vertical alignment. \(B2B-2768\)

-   The Trading Partner table on the Group Configuration page is updated to match the style of other tables. \(B2B-2765\)

-   On the Trading Partner Overview page, an error displays if the character limit for the **Identifier** field is exceeded. \(B2B-2416\)

